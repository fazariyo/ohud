import Link from 'next/link';
import Logo from './Logo';
import { services } from '@/lib/services';
import { waDefault } from '@/lib/brand';

// New IA per Blueprint §3.1. `base` is kept for the few homepage in-page anchors
// (services grid, FAQ, contact); everything else links to real routes.
export default function Nav({ base = '' }) {
  const a = (hash) => (base ? `/#${hash}` : `#${hash}`);
  return (
    <>
    <nav id="nav" className={base ? 'solid' : ''}>
      <Link href="/" className="nlogo">
        <div className="nlm"><Logo /></div>
        <div className="nltxt">
          <span className="nlt">OHUD</span>
          <span className="nls">Dental</span>
        </div>
      </Link>
      <div className="nlinks">
        <Link href="/">Home</Link>
        <div className="ndrop">
          <Link href="/services/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Treatments <span style={{ fontSize: '10px' }}>▼</span>
          </Link>
          <div className="ndrop-menu">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}/`}>{s.nav}</Link>
            ))}
            <Link href="/services/">All treatments →</Link>
          </div>
        </div>
        <Link href="/pricing/">Pricing</Link>
        <Link href="/family/">Family Plan</Link>
        <div className="ndrop">
          <Link href="/about/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            More <span style={{ fontSize: '10px' }}>▼</span>
          </Link>
          <div className="ndrop-menu">
            <Link href="/about/">Our Promise</Link>
            <Link href="/our-doctors/">Our Doctors</Link>
            <Link href="/patient-stories/">Patient Stories</Link>
            <Link href="/second-opinion/">Free Second Opinion</Link>
            <Link href="/charity/">Charity Days</Link>
            <Link href="/materials/">Our Materials</Link>
            <Link href="/learn/">Learn</Link>
            <Link href="/faq/">FAQ</Link>
          </div>
        </div>
        <a href={waDefault} target="_blank" rel="noopener noreferrer" className="ncta wa">Book on WhatsApp</a>
      </div>
      <button id="nburger" className="nburger" aria-label="Open menu" aria-controls="mmenu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div id="mmenu" className="mmenu">
      <Link href="/">Home</Link>
      <Link href="/pricing/">Pricing</Link>
      <Link href="/family/">Family Plan</Link>
      <Link href="/second-opinion/">Free Second Opinion</Link>
      <Link href="/about/">Our Promise</Link>
      <Link href="/our-doctors/">Our Doctors</Link>
      <Link href="/patient-stories/">Patient Stories</Link>
      <Link href="/charity/">Charity Days</Link>
      <Link href="/learn/">Learn</Link>
      <Link href="/faq/">FAQ</Link>
      <div className="mmenu-label">Treatments</div>
      {services.map((s) => (
        <Link key={s.slug} className="sub" href={`/services/${s.slug}/`}>{s.nav}</Link>
      ))}
      <a href={waDefault} target="_blank" rel="noopener noreferrer" className="mcta wa">Book on WhatsApp →</a>
    </div>
    </>
  );
}
