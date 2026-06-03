import Link from 'next/link';
import Logo from './Logo';

export default function Footer({ base = '' }) {
  // Rendered via Link (not <a>) so Next.js prefixes the basePath on static hosts like GitHub Pages.
  const a = (hash) => (base ? `/#${hash}` : `#${hash}`);
  return (
    <footer>
      <div className="foot-in">
        <div className="foot-top">
          <div>
            <Link href="/" className="nlogo" style={{ textDecoration: 'none' }}>
              <div className="nlm"><Logo /></div>
              <div className="nltxt">
                <span className="nlt">OHUD</span>
                <span className="nls">Dental</span>
              </div>
            </Link>
            <p className="foot-desc">A modern dental clinic in the heart of Gulberg, Lahore — combining world-class technology with gentle, honest, family-friendly care.</p>
          </div>
          <div className="fcol">
            <h5>Treatments</h5>
            <Link href="/treatments/general-dentistry/">General Dentistry</Link>
            <Link href="/treatments/cosmetic-dentistry/">Cosmetic Dentistry</Link>
            <Link href="/treatments/orthodontics/">Braces &amp; Aligners</Link>
            <Link href="/treatments/dental-implants/">Dental Implants</Link>
            <Link href="/treatments/root-canal/">Root Canal</Link>
          </div>
          <div className="fcol">
            <h5>Specialties</h5>
            <Link href="/treatments/teeth-whitening/">Teeth Whitening</Link>
            <Link href="/treatments/pediatric-dentistry/">Children&apos;s Dentistry</Link>
            <Link href="/treatments/emergency-care/">Emergency Dentistry</Link>
            <Link href="/treatments/gum-treatment/">Gum Treatment</Link>
            <Link href={a('technology')}>Our Technology</Link>
          </div>
          <div className="fcol">
            <h5>Clinic</h5>
            <Link href={a('about')}>About Us</Link>
            <Link href="/team/">Our Team</Link>
            <Link href={a('blog')}>Blog</Link>
            <Link href={a('faq')}>FAQ&apos;s</Link>
            <Link href={a('process')}>Your Visit</Link>
            <Link href={a('contact')}>Contact Us</Link>
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© 2026 OHUD Dental, Gulberg III, Lahore. All rights reserved.</div>
          <div className="foot-legal">
            <a href="#" data-legal="privacy-policy">Privacy Policy</a>
            <a href="#" data-legal="terms-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
