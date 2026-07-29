#!/usr/bin/env node
/**
 * Guard against the "site is live but nothing renders" class of bug.
 *
 * The failure this exists to catch: something (previously
 * `actions/configure-pages` with `static_site_generator: next`) injects a
 * basePath derived from the repo name, so the exported HTML asks for
 * /ohud/_next/static/css/x.css while the file is actually published at
 * /_next/static/css/x.css. Every stylesheet and script 404s, the browser shows
 * bare unstyled HTML, and every nav link points at a missing /ohud/* page.
 * Nothing crashes — the deploy goes green and the damage is only visible in a
 * browser. So we assert it here instead, before anything ships.
 *
 * Checks:
 *   1. Every root-relative href/src/srcset in out/**.html resolves to a real
 *      file in out/.
 *   2. url(/...) references inside exported CSS resolve too.
 *   3. CNAME is present (keeps the custom domain attached to each deploy, which
 *      is what lets GitHub provision the HTTPS certificate) and matches
 *      EXPECTED_DOMAIN.
 *   4. .nojekyll is present, so the _next/ directory is never treated as Jekyll
 *      scaffolding and silently dropped.
 *
 * Run: node scripts/verify-export.mjs   (wired into `npm run build`)
 */

import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'out');
const EXPECTED_DOMAIN = 'ohuddental.com';

// Mirrors next.config.mjs: empty unless we deliberately deploy to a subpath.
const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

const errors = [];
const warnings = [];

async function walk(dir) {
  const found = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return found;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else found.push(full);
  }
  return found;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

/** Map a site-absolute URL to the file that must exist inside out/. */
function candidatePaths(url) {
  // Strip the configured basePath so subpath deploys validate the same way.
  let rel = url;
  if (BASE_PATH && (rel === BASE_PATH || rel.startsWith(`${BASE_PATH}/`))) {
    rel = rel.slice(BASE_PATH.length) || '/';
  }
  rel = decodeURIComponent(rel).replace(/^\/+/, '');

  if (rel === '' || rel.endsWith('/')) {
    return [path.join(OUT, rel, 'index.html')];
  }
  // Extension-less route: Next may emit either about/index.html or about.html.
  if (!path.basename(rel).includes('.')) {
    return [
      path.join(OUT, rel, 'index.html'),
      path.join(OUT, `${rel}.html`),
      path.join(OUT, rel),
    ];
  }
  return [path.join(OUT, rel)];
}

/** Pull every local, site-absolute reference out of a chunk of HTML. */
function extractHtmlRefs(html) {
  const refs = new Set();

  for (const [, , value] of html.matchAll(
    /\b(href|src|content|poster)\s*=\s*"([^"]*)"/gi,
  )) {
    refs.add(value);
  }
  // srcset: "a.png 1x, b.png 2x" -> take the URL of each candidate.
  for (const [, value] of html.matchAll(/\bsrcset\s*=\s*"([^"]*)"/gi)) {
    for (const part of value.split(',')) {
      const url = part.trim().split(/\s+/)[0];
      if (url) refs.add(url);
    }
  }
  return [...refs].filter(isLocalAbsolute);
}

function extractCssRefs(css) {
  const refs = new Set();
  for (const [, value] of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) {
    refs.add(value.trim());
  }
  return [...refs].filter(isLocalAbsolute);
}

/**
 * Only site-absolute paths ("/_next/...") are ours to verify. Skips protocol
 * URLs, protocol-relative "//host", data:/mailto:/tel:, and bare fragments.
 */
function isLocalAbsolute(url) {
  if (!url || !url.startsWith('/')) return false;
  if (url.startsWith('//')) return false;
  return true;
}

function stripSuffix(url) {
  return url.split('#')[0].split('?')[0];
}

async function main() {
  if (!(await exists(OUT))) {
    fail(`out/ not found at ${OUT} — run \`next build\` first.`);
  }

  const files = await walk(OUT);
  const htmlFiles = files.filter((f) => f.endsWith('.html'));
  const cssFiles = files.filter((f) => f.endsWith('.css'));

  if (htmlFiles.length === 0) fail('out/ contains no .html files.');

  // --- 1 & 2: every local reference must resolve to a real exported file ----
  const broken = new Map(); // url -> Set of referencing files

  const scan = async (file, extract) => {
    const body = await readFile(file, 'utf8');
    for (const raw of extract(body)) {
      const url = stripSuffix(raw);
      if (!url || url === '/') continue;
      const options = candidatePaths(url);
      let ok = false;
      for (const option of options) {
        if (await exists(option)) {
          ok = true;
          break;
        }
      }
      if (!ok) {
        const where = path.relative(OUT, file).replace(/\\/g, '/');
        if (!broken.has(url)) broken.set(url, new Set());
        broken.get(url).add(where);
      }
    }
  };

  for (const file of htmlFiles) await scan(file, extractHtmlRefs);
  for (const file of cssFiles) await scan(file, extractCssRefs);

  if (broken.size > 0) {
    const lines = [...broken.entries()]
      .sort()
      .slice(0, 40)
      .map(([url, where]) => {
        const refs = [...where].slice(0, 3).join(', ');
        const extra = where.size > 3 ? ` (+${where.size - 3} more)` : '';
        return `  ${url}\n      referenced by: ${refs}${extra}`;
      });

    // Name the specific cause when the paths share one bogus prefix.
    const prefixes = new Set(
      [...broken.keys()]
        .map((u) => u.split('/')[1])
        .filter((seg) => seg && !seg.includes('.')),
    );
    const hint =
      prefixes.size === 1
        ? `\nEvery broken URL starts with "/${[...prefixes][0]}/". That is a ` +
          `basePath/assetPrefix that the host does not serve.\n` +
          `Check that .github/workflows/deploy.yml does NOT pass ` +
          `"static_site_generator: next" to actions/configure-pages, and that ` +
          `NEXT_PUBLIC_BASE_PATH is unset for the custom-domain deploy.`
        : '';

    fail(
      `${broken.size} reference(s) in out/ point at files that were not ` +
        `exported.\nThe pages would load but render unstyled, with broken ` +
        `navigation:\n${lines.join('\n')}${hint}`,
    );
  }

  // --- 3: CNAME keeps the custom domain (and therefore the TLS cert) ---------
  const cnamePath = path.join(OUT, 'CNAME');
  if (!(await exists(cnamePath))) {
    errors.push(
      `out/CNAME is missing. Without it each deploy can drop the custom ` +
        `domain, GitHub never provisions a Let's Encrypt certificate, and ` +
        `https://${EXPECTED_DOMAIN} fails to load.\n` +
        `  Fix: create public/CNAME containing "${EXPECTED_DOMAIN}".`,
    );
  } else {
    const domain = (await readFile(cnamePath, 'utf8')).trim();
    if (domain !== EXPECTED_DOMAIN) {
      errors.push(
        `out/CNAME is "${domain}" but this site is served at ` +
          `"${EXPECTED_DOMAIN}". A CNAME that disagrees with the DNS record ` +
          `breaks HTTPS. Update public/CNAME (and EXPECTED_DOMAIN here if the ` +
          `domain genuinely changed).`,
      );
    }
  }

  // --- 4: .nojekyll protects the _next/ directory ---------------------------
  if (!(await exists(path.join(OUT, '.nojekyll')))) {
    warnings.push(
      `out/.nojekyll is missing. On any Jekyll-processed Pages deploy the ` +
        `_next/ directory is dropped as scaffolding and the whole site loses ` +
        `its CSS/JS. Fix: create an empty public/.nojekyll file.`,
    );
  }

  for (const warning of warnings) console.warn(`⚠  ${warning}`);
  if (errors.length > 0) fail(errors.join('\n\n'));

  const plural = htmlFiles.length === 1 ? 'page' : 'pages';
  console.log(
    `✓ export verified: ${htmlFiles.length} ${plural}, ` +
      `${cssFiles.length} stylesheet(s), all local references resolve` +
      `${BASE_PATH ? ` under basePath "${BASE_PATH}"` : ' at domain root'}.`,
  );
}

function fail(message) {
  console.error(`\n✗ verify-export failed\n\n${message}\n`);
  process.exit(1);
}

main().catch((error) => fail(error?.stack || String(error)));
