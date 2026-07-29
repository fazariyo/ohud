/** @type {import('next').NextConfig} */

// The site is served from the ROOT of a custom domain (ohuddental.com), so the
// base path must stay empty. It used to be injected automatically by
// `actions/configure-pages` (static_site_generator: next), which derives the
// path from the REPO NAME and produced `/ohud` — every /ohud/_next/*.css and
// /ohud/*/ URL then 404'd on the real domain, leaving an unstyled page with
// dead navigation. It is pinned explicitly here so nothing can re-inject it.
//
// Only set NEXT_PUBLIC_BASE_PATH if you deliberately host under a subpath
// (e.g. '/ohud' for the bare fazariyo.github.io/ohud preview URL).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

if (basePath && !basePath.startsWith('/')) {
  throw new Error(
    `NEXT_PUBLIC_BASE_PATH must start with "/" (received "${basePath}").`,
  );
}

const nextConfig = {
  // Produce a fully static site in `out/` on `next build` (host anywhere).
  output: 'export',
  // Plain <img> + remote Pexels URLs, so skip the Image Optimization server.
  images: { unoptimized: true },
  // Export nested routes as folders (/treatments/general-dentistry/index.html).
  trailingSlash: true,
  // Don't fail the static build on lint stylistic rules (e.g. unescaped apostrophes).
  eslint: { ignoreDuringBuilds: true },
  // Empty by default => root-relative URLs that work on the custom domain.
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
