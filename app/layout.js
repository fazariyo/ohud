import './globals.css';
import Interactions from '@/components/Interactions';
import LegalModal from '@/components/LegalModal';
import WhatsAppFab from '@/components/WhatsAppFab';
import { brand } from '@/lib/brand';

export const metadata = {
  // Apex, not www: GitHub Pages serves ohuddental.com and 301s www -> apex,
  // so canonical/OG URLs must be the apex or they all point at a redirect.
  metadataBase: new URL('https://ohuddental.com'),
  title: {
    default: 'Ohud Dental — Honest dentistry. Honoured prices. | Lahore',
    template: '%s | Ohud Dental, Lahore',
  },
  description:
    'Ohud Dental is a dental clinic in Lahore built on honest, ethical care: every price published, no procedure you don’t need, a female dentist available on request, and a free second opinion. The dentist you would send your own family to.',
  keywords: [
    'dentist Lahore', 'dental clinic Lahore', 'root canal price Lahore',
    'female dentist Lahore', 'honest dentist Lahore', 'posted dental prices Pakistan',
  ],
  openGraph: {
    title: 'Ohud Dental — Honest dentistry. Honoured prices.',
    description:
      'Every price published. No procedure you don’t need. A free second opinion, a female dentist on request, and care for the whole family — in Lahore.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Ohud Dental',
  },
  twitter: { card: 'summary_large_image' },
};

// Organization + LocalBusiness schema for SEO & AI search (Blueprint §3.7).
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: brand.name,
  description:
    'Honest, ethical dental care in Lahore with publicly posted prices, a no-overtreatment policy, a female dentist available on request, and a free second opinion.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: brand.address,
    addressLocality: 'Lahore',
    addressCountry: 'PK',
  },
  telephone: brand.phoneDisplay,
  url: 'https://ohuddental.com',
  hasMap: brand.mapsLink,
  openingHours: 'Mo-Sa 11:00-21:00',
  priceRange: 'PKR',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: brand.rating,
    reviewCount: '1000',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/*
          Stylesheet-load guard. If globals.css 404s (the classic symptom of a
          wrong basePath/assetPrefix on a custom domain) the page still returns
          200 and renders as unstyled HTML, which is easy to miss. This turns
          that silent failure into an obvious console error naming the exact
          URL that failed, and tags <html data-css-failed="true"> so it can be
          asserted from any browser check.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{
  var probe=function(){
    var v=getComputedStyle(document.documentElement).getPropertyValue('--ohud-css-loaded');
    if(v&&v.trim())return;
    document.documentElement.dataset.cssFailed='true';
    var urls=[].map.call(document.querySelectorAll('link[rel="stylesheet"]'),function(l){return l.href});
    console.error('[ohud] Stylesheet did not load — the page is rendering unstyled. Expected CSS at: '+(urls.join(', ')||'(no <link rel=stylesheet> found)')+'. Check basePath/assetPrefix: the site is served from the root of this domain, so asset URLs must not be prefixed with the repo name.');
  };
  if(document.readyState==='complete')probe();
  else window.addEventListener('load',probe);
}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <div id="cur"></div>
        <div id="ring"></div>
        {children}
        <WhatsAppFab />
        <LegalModal />
        <Interactions />
      </body>
    </html>
  );
}
