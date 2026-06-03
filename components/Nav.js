import Link from 'next/link';
import Logo from './Logo';

// base = '' on the homepage (in-page anchors), '/' on inner pages (jump home then scroll).
export default function Nav({ base = '' }) {
  // Rendered via Link (not <a>) so Next.js prefixes the basePath on static hosts like GitHub Pages.
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
        <Link href={a('home')}>Home</Link>
        <div className="ndrop">
          <Link href={a('services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Treatments <span style={{ fontSize: '10px' }}>▼</span>
          </Link>
          <div className="ndrop-menu">
            <Link href="/treatments/general-dentistry/">General &amp; Family Dentistry</Link>
            <Link href="/treatments/cosmetic-dentistry/">Cosmetic Dentistry</Link>
            <Link href="/treatments/orthodontics/">Braces &amp; Aligners</Link>
            <Link href="/treatments/dental-implants/">Dental Implants</Link>
            <Link href="/treatments/root-canal/">Root Canal Treatment</Link>
            <Link href={a('services')}>All Treatments →</Link>
          </div>
        </div>
        <Link href="/team/">Our Team</Link>
        <Link href={a('process')}>Your Visit</Link>
        <Link href={a('technology')}>Technology</Link>
        <Link href={a('blog')}>Blog</Link>
        <Link href={a('contact')} className="ncta">Book Appointment</Link>
      </div>
      <button id="nburger" className="nburger" aria-label="Open menu" aria-controls="mmenu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div id="mmenu" className="mmenu">
      <Link href={a('home')}>Home</Link>
      <Link href="/team/">Our Team</Link>
      <Link href={a('process')}>Your Visit</Link>
      <Link href={a('technology')}>Technology</Link>
      <Link href={a('blog')}>Blog</Link>
      <div className="mmenu-label">Treatments</div>
      <Link className="sub" href="/treatments/general-dentistry/">General &amp; Family Dentistry</Link>
      <Link className="sub" href="/treatments/cosmetic-dentistry/">Cosmetic Dentistry</Link>
      <Link className="sub" href="/treatments/orthodontics/">Braces &amp; Aligners</Link>
      <Link className="sub" href="/treatments/dental-implants/">Dental Implants</Link>
      <Link className="sub" href="/treatments/root-canal/">Root Canal Treatment</Link>
      <Link href={a('contact')} className="mcta">Book Appointment →</Link>
    </div>
    </>
  );
}
