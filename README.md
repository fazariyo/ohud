# OHUD Dentals — Next.js

The OHUD Dentals website rebuilt with **Next.js 14 (App Router)**.

## Run it

```bash
cd ohud-next
npm install
npm run dev        # http://localhost:3000
```

## Build a static site

```bash
npm run build      # outputs a fully static site to ./out
```

`next.config.mjs` sets `output: 'export'`, so `npm run build` produces a static
`out/` folder you can host on any static host (Netlify, Vercel, GitHub Pages,
S3, nginx…). No Node server required.

## Structure

```
app/
  layout.js                  Root layout — fonts, global CSS, cursor, <Interactions/>
  globals.css                The full design system (ported from the static site)
  page.js                    Homepage (hero, services, about, process, insurance,
                             technology, testimonials, blog, FAQ, contact)
  treatments/[slug]/page.js  One dynamic, statically-generated page per treatment
components/
  Nav.js, Footer.js, Logo.js Shared chrome
  Img.js                     <img> with branded fallback + load animation
  InsuranceLogo.js           Insurer logo with initials fallback
  Interactions.js            Client: cursor, parallax, tilt, reveal, count-up, FAQ
  LegalModal.js              Client: privacy / terms / blog modal
  ContactForm.js             Client: appointment form
lib/
  services.js                All treatment data + image-URL helper (single source)
```

## Notes
- **Treatments** are data-driven from `lib/services.js`. Add/edit an entry there and
  a new `/treatments/<slug>` page is generated automatically.
- **Images** are verified Pexels dental photos via a stable CDN URL with a branded
  fallback. Swap in real clinic photos by changing the numeric IDs in `lib/services.js`
  and `app/page.js`.
- Fonts load from Google Fonts via `<link>` in `app/layout.js`.
