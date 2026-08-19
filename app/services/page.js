import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { services } from '@/lib/services';
import { waDefault } from '@/lib/brand';

// Prices like "Free consultation" and "Ask when booking" are words, not figures,
// so they render without the PKR prefix (and never with a "From" before it).
const isWordPrice = (p) => /free|included|ask/i.test(p);

export const metadata = {
  title: 'Treatments & Posted Prices',
  description:
    'Every Ohud Dental treatment in Lahore, with prices shown up front — root canals, crowns, scaling, fillings, veneers, whitening, implants, braces, children’s and emergency dentistry.',
};

export default function ServicesHub() {
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '52vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={4687906} w={1900} h={1100} alt="Treatments at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Treatments</div>
          <div className="svc-tag"><span></span>Our Treatments</div>
          <h1 className="svc-h1">Every treatment, and what it costs.</h1>
          <p className="svc-lead">No “DM for price.” No hidden fees. Browse what we do and what it costs — and where a price genuinely depends on your case, we say so instead of guessing. Message us when you’re ready.</p>
          <div className="svc-hero-ctas">
            <Link href="/pricing/" className="bgold">See the full price list →</Link>
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
          </div>
        </div>
      </section>

      <section className="cred-sec">
        <div className="cred-in">
          <div className="feat-grid">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className={`bcard rv d${(i % 3) + 1}`}>
                <div className="bcard-img" style={{ height: '180px' }}><Img id={s.heroId} w={600} h={360} alt={s.nav} /></div>
                <div className="bcard-body">
                  <div className="bcard-tag">{s.tag}</div>
                  <div className="bcard-title" style={{ fontSize: '20px' }}>{s.nav}</div>
                  <div className="bcard-excerpt">{s.short}</div>
                  <div className="bcard-link">{isWordPrice(s.price) ? s.price : `${s.from ? 'From ' : ''}PKR ${s.price}`} <span style={{ fontSize: '16px' }}>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
