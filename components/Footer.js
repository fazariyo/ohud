import Link from 'next/link';
import Logo from './Logo';
import { brand, waDefault } from '@/lib/brand';

export default function Footer() {
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
            <p className="foot-desc">
              Honest dentistry, gently delivered — in {brand.city}. Every price published,
              no procedure you don’t need, and the same care for every patient who walks through our door.
            </p>
            <p className="foot-desc" style={{ marginTop: '14px' }}>
              {brand.address}<br />
              {brand.hoursShort}<br />
              <a href={waDefault} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold2)' }}>WhatsApp: {brand.whatsappDisplay}</a>
            </p>
          </div>
          <div className="fcol">
            <h5>Treatments</h5>
            <Link href="/services/root-canal-treatment-lahore/">Root Canal</Link>
            <Link href="/services/dental-crowns-lahore/">Crowns</Link>
            <Link href="/services/scaling-cleaning-lahore/">Scaling &amp; Cleaning</Link>
            <Link href="/services/braces-aligners-lahore/">Braces &amp; Aligners</Link>
            <Link href="/services/dental-implants-lahore/">Implants</Link>
            <Link href="/services/">All treatments</Link>
          </div>
          <div className="fcol">
            <h5>The Ohud Way</h5>
            <Link href="/pricing/">Posted Prices</Link>
            <Link href="/women/">Ohud Sisters</Link>
            <Link href="/family/">Family Plan</Link>
            <Link href="/second-opinion/">Free Second Opinion</Link>
            <Link href="/charity/">Charity Days &amp; Report</Link>
            <Link href="/materials/">Our Materials</Link>
          </div>
          <div className="fcol">
            <h5>Clinic</h5>
            <Link href="/about/">Our Promise</Link>
            <Link href="/our-doctors/">Our Doctors</Link>
            <Link href="/patient-stories/">Patient Stories</Link>
            <Link href="/learn/">Learn</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/careers/">Careers</Link>
            <Link href="/contact/">Contact &amp; Book</Link>
          </div>
        </div>
        <div className="foot-bot">
          <div className="foot-copy">© 2026 {brand.name}, {brand.addressShort}. Honest dentistry, gently delivered.</div>
          <div className="foot-legal">
            <a href="#" data-legal="privacy-policy">Privacy Policy</a>
            <a href="#" data-legal="terms-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
