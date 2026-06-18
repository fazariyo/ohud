import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Our Materials — Know Exactly What Goes Into Your Mouth',
  description:
    'At Ohud Dental in Lahore, we tell you the brand of every filling, crown, and implant material before we use it — and confirm its halal status on request. No mystery materials.',
};

const materials = [
  {
    root: 'Fillings',
    h: 'Mercury-free composite',
    p: 'Tooth-coloured composite resin that bonds to your tooth — never silver-mercury amalgam unless you specifically ask for it. We name the exact brand before we begin, and confirm its halal status on request.',
  },
  {
    root: 'Crowns & Bridges',
    h: 'PFM and metal-free zirconia',
    p: 'Porcelain-fused-to-metal for strength and value, or metal-free zirconia for the most natural look. We tell you which lab makes your crown and the material used, and confirm the halal status of cements on request.',
  },
  {
    root: 'Implants',
    h: 'Internationally approved titanium',
    p: 'We use internationally approved titanium implant systems. We name the exact system and components at your consultation, and confirm the halal status of the materials on request.',
  },
  {
    root: 'Anaesthetics & Medicines',
    h: 'Standard, and explained',
    p: 'Local anaesthetics and any prescribed medicines are standard, established products. We explain what we are giving you and why, and confirm halal status on request before anything is used.',
  },
  {
    root: 'Sterilisation Consumables',
    h: 'Single-use where applicable',
    p: 'Needles, gloves, and certain instrument tips are single-use and opened in front of you. Everything else is autoclaved. See our sterilisation standards for the full protocol.',
  },
];

export default function MaterialsPage() {
  const wa = waLink('Assalamu alaikum / Hello — I would like to ask about the materials Ohud Dental uses.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6528862} w={1900} h={1100} alt="Dental materials disclosed at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Our Materials</div>
          <div className="svc-tag"><span></span>Quality You Can Verify</div>
          <h1 className="svc-h1">Know exactly what goes into your mouth.</h1>
          <p className="svc-lead">We tell you the brand of every material before we use it, and confirm its halal status whenever you ask. No mystery materials — ever.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Ask about a material →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec" style={{ background: 'var(--sage-bg)', paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="prose-in" style={{ maxWidth: '1000px' }}>
          <h2 style={{ marginBottom: '8px' }}>What we use, by category</h2>
          <p style={{ marginBottom: '8px' }}>For each material, we tell you our standard, the brand we plan to use, and — whenever you ask — its halal status, before any treatment begins.</p>
          <div className="valgrid">
            {materials.map((m, i) => (
              <div className="valcard" key={i} style={{ background: '#fff' }}>
                <div className="root">{m.root}</div>
                <h4>{m.h}</h4>
                <p>{m.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>Why we disclose</h2>
          <p>Most clinics in Lahore never tell you what they are putting in your mouth. You are quoted a price, the work is done, and the brand of the filling, the crown, or the cement is simply never mentioned. We think that is the wrong way round.</p>
          <p>You have a right to know what is being placed in your body, what it is made of, and whether it is halal. So before we start, we name the brand and the material. If you want to confirm its halal status, we will tell you what we know and, where a certificate exists, show it to you.</p>
          <blockquote>If we would not be comfortable telling you what a material is, we would not use it. Disclosure is not a favour we do you — it is your right, and our standard.</blockquote>
          <h3>How to check for yourself</h3>
          <p>Ask us, at any point, “What brand is this and is it halal?” You will get a straight answer at the consultation — not after the work is done. You can also read our <Link href="/sterilisation/">sterilisation standards</Link>, or see every treatment price in writing on our <Link href="/pricing/">price list</Link>.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Have a question about a material?</h2>
          <p>Message us on WhatsApp and ask. We will tell you the brand, what it is made of, and its halal status — plainly and before any treatment.</p>
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
