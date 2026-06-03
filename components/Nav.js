import Link from 'next/link';
import Logo from './Logo';

// base = '' on the homepage (in-page anchors), '/' on inner pages (jump home then scroll).
export default function Nav({ base = '' }) {
  const a = (hash) => `${base}#${hash}`;
  return (
    <nav id="nav" className={base ? 'solid' : ''}>
      <Link href="/" className="nlogo">
        <div className="nlm"><Logo /></div>
        <div className="nltxt">
          <span className="nlt">OHUD</span>
          <span className="nls">Dental</span>
        </div>
      </Link>
      <div className="nlinks">
        <a href={a('home')}>Home</a>
        <div className="ndrop">
          <a href={a('services')} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Treatments <span style={{ fontSize: '10px' }}>▼</span>
          </a>
          <div className="ndrop-menu">
            <Link href="/treatments/general-dentistry/">General &amp; Family Dentistry</Link>
            <Link href="/treatments/cosmetic-dentistry/">Cosmetic Dentistry</Link>
            <Link href="/treatments/orthodontics/">Braces &amp; Aligners</Link>
            <Link href="/treatments/dental-implants/">Dental Implants</Link>
            <Link href="/treatments/root-canal/">Root Canal Treatment</Link>
            <a href={a('services')}>All Treatments →</a>
          </div>
        </div>
        <Link href="/team/">Our Team</Link>
        <a href={a('process')}>Your Visit</a>
        <a href={a('technology')}>Technology</a>
        <a href={a('blog')}>Blog</a>
        <a href={a('contact')} className="ncta">Book Appointment</a>
      </div>
    </nav>
  );
}
