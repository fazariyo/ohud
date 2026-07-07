import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Sterilisation Standards — Come and See How We Sterilise',
  description:
    'Almost no clinic in Lahore shows you their autoclave. Ohud Dental invites you to. Instruments are scrubbed, pouched, autoclaved, and opened in front of you — with single-use items never reused.',
};

export default function SterilisationPage() {
  const wa = waLink('Hello — I would like to ask about, or see, the sterilisation area at Ohud Dental.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6529219} w={1900} h={1100} alt="Hospital-grade sterilisation at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Sterilisation</div>
          <div className="svc-tag"><span></span>Hospital-grade Sterilisation</div>
          <h1 className="svc-h1">Come and see how we sterilise.</h1>
          <p className="svc-lead">Almost no clinic in Lahore will show you their autoclave. We invite you to. Ask to see our sterilisation area on any visit — we would rather you saw it than simply took our word.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Ask to see our setup →</a>
            <Link href="/materials/" className="bghost">See our materials →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>Our protocol, step by step</h2>
          <p>Clean instruments are not a detail — they are the difference between safe care and serious risk. Here is exactly what happens to every instrument between one patient and the next.</p>
          <ul>
            <li><strong>Scrubbed and rinsed.</strong> Used instruments are first cleaned by hand and rinsed to remove all debris.</li>
            <li><strong>Sealed in pouches.</strong> Each instrument set is sealed inside a sterilisation pouch before it goes anywhere near the next patient.</li>
            <li><strong>Autoclaved.</strong> The sealed pouches are sterilised in an autoclave using high-pressure steam — the hospital standard for killing bacteria and viruses.</li>
            <li><strong>Stored sealed.</strong> Sterilised pouches stay sealed in clean storage and are opened in front of you, at the chair, just before your treatment.</li>
            <li><strong>Single-use items never reused.</strong> Needles, gloves, and certain tips are used once and disposed of — never reused on another patient, ever.</li>
            <li><strong>Surfaces disinfected.</strong> The chair, work surfaces, and handles are disinfected between every single patient.</li>
          </ul>
          <p>You are welcome to ask to see the sterilisation area at any time. We will happily walk you through it — the pouches, the autoclave, and where everything is stored. Nothing about our process is hidden.</p>
          <blockquote>We would rather you saw our autoclave than simply trusted us. Trust that can be checked is the only kind worth offering.</blockquote>
        </div>
      </section>

      <section className="prose-sec" style={{ background: 'var(--sage-bg)', paddingTop: '50px', paddingBottom: '60px' }}>
        <div className="prose-in" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
            <Img id={4687906} w={1900} h={1100} alt="Sealed sterilisation pouches at Ohud Dental" className="rdy" />
            <Img id={6812570} w={1900} h={1100} alt="Autoclave and clean instrument storage at Ohud Dental" className="rdy" />
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Want to see it for yourself?</h2>
          <p>Message us on WhatsApp, or just ask on your next visit. We are glad to show you exactly how we keep every instrument safe.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Ask us on WhatsApp →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
