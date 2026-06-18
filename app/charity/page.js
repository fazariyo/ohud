import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, brand } from '@/lib/brand';

export const metadata = {
  title: 'Charity Days — Free Dental Care, Reported Openly',
  description:
    'Every quarter Ohud Dental opens free of charge for orphans, widows and those who cannot afford care — treated with the same quality and dignity as every patient, and reported transparently. #OhudGivesBack',
};

// Placeholder report figures — update each quarter with the real numbers.
const report = [
  { n: '—', l: 'Patients treated last quarter' },
  { n: '—', l: 'Treatments provided free' },
  { n: '1.5–2.5%', l: 'Of revenue committed to free care' },
];

export default function CharityPage() {
  const wa = waLink('Assalamu alaikum — I’d like to ask about Ohud’s charity dental days (to nominate someone / to support).');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6529219} w={1900} h={1100} alt="Ohud Dental charity days in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Charity Days</div>
          <div className="svc-tag"><span></span>Ohud Gives Back</div>
          <h1 className="svc-h1">Care does not stop at those who can pay.</h1>
          <p className="svc-lead">Every quarter, we open our clinic free of charge for orphans, widows, and deserving cases — and we report exactly who we served, openly.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Nominate someone →</a>
            <Link href="/about/" className="bghost">Our promise →</Link>
          </div>
        </div>
      </section>

      <section className="charity" style={{ paddingTop: '80px' }}>
        <div className="charity-in">
          <div className="eyebrow sage center"><span className="bar"></span>Our Commitment</div>
          <h2>A fixed share of what we earn funds care for those who cannot afford it.</h2>
          <p>We commit between 1.5% and 2.5% of revenue to free treatment days. The patient who comes on a charity day receives the same materials, the same dentist, and the same dignity as the patient who pays full price. That is not charity as marketing — it is justice as policy.</p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            {report.map((r, i) => (
              <div className="charity-stat" key={i} style={{ flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <span className="n">{r.n}</span>
                <span className="l">{r.l}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--gm)', marginTop: '24px' }}><em>Quarterly figures are published here after each charity day. Our first report follows our launch quarter.</em></p>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>How it works</h2>
          <ul>
            <li>We hold a free-treatment day each quarter, announced in advance on our channels.</li>
            <li>Places go to orphans, widows, and others genuinely unable to afford care — of every background and faith.</li>
            <li>You can nominate someone (including yourself) by messaging us privately on WhatsApp. We handle it with discretion.</li>
            <li>After each day, we publish a short, honest report: how many patients, what treatments, and what it cost us to provide.</li>
          </ul>
          <blockquote>The patient who pays nothing is treated exactly as well as the patient who pays in full. If that is not true, the brand is not real.</blockquote>
          <h3>Want to help?</h3>
          <p>If you would like to support a charity day — by sponsoring treatments or referring a deserving case — message us on WhatsApp. We’ll tell you honestly where help is needed most.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Know someone who needs care but can’t afford it?</h2>
          <p>Message us privately on WhatsApp. There is no shame in asking — and we keep every request confidential.</p>
          <div className="svc-cta-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Message us privately →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
