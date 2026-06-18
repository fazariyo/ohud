import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Our Promise — About Ohud Dental, Lahore',
  description:
    'Ohud Dental is honest dentistry, gently delivered: every price public, the quote is the invoice, no upselling, a free second opinion, a women’s pathway, and a fixed share of revenue given to free care. This is our promise.',
};

const values = [
  {
    root: 'Amanah',
    h: 'Trust',
    p: 'Posted prices, written quotes that cannot exceed the invoice, and complete confidentiality. What we promise is what you pay.',
  },
  {
    root: 'Adl',
    h: 'Justice',
    p: 'The same quality of treatment for the charity-day patient and the wedding-prep patient. We do not discriminate on price or on care.',
  },
  {
    root: 'Ihsan',
    h: 'Excellence',
    p: 'The best available materials within ethical pricing, and continuous training for everyone who treats you.',
  },
  {
    root: 'Sidq',
    h: 'Honesty',
    p: '“You do not need this treatment” is said out loud here, often. Telling you the truth matters more than the work it costs us.',
  },
  {
    root: 'Rifq',
    h: 'Gentleness',
    p: 'It shapes our tone, and how we care for fearful patients and for children — slowly, calmly, at your pace.',
  },
  {
    root: 'Hayaa',
    h: 'Modesty',
    p: 'The Ohud Sisters women’s pathway, and a restrained brand that does not shout. Quiet care, not spectacle.',
  },
  {
    root: 'Barakah',
    h: 'Blessing',
    p: 'A fixed share of revenue goes to free care, our staff are paid fairly, and we refuse revenue that comes dishonestly.',
  },
];

export default function AboutPage() {
  const wa = waLink('Assalamu alaikum / Hello — I’d like to book an appointment with Ohud Dental.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={35434209} w={1900} h={1100} alt="Inside Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Our Promise</div>
          <div className="svc-tag"><span></span>Our Promise</div>
          <h1 className="svc-h1">The brand is not the look. It is the policy.</h1>
          <p className="svc-lead">A calm clinic and a thoughtful name matter little if the prices move, the upsell creeps in, or the patient is left guessing. What we are is what we do — quietly, the same way, every day.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Book an appointment →</a>
            <Link href="/pricing/" className="bgold">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>Honest dentistry, gently delivered.</h2>
          <p>That single line is our whole position. The clinic is calm and well kept, and the care feels considered — but the part that matters most is what sits underneath it. Our promise is not a feeling; it is a set of policies you can hold us to.</p>
          <p>Every price is public, and the quote is the invoice — what we write down is what you pay, with nothing added at the chair. We do not upsell: if you do not need a treatment, we say so. We give a free second opinion to anyone holding another clinic’s quote. A fixed share of what we earn goes to free care for those who cannot afford it. Women who prefer it are cared for entirely by a female team. And we will name our materials and confirm their halal status whenever you ask. None of that is decoration. It is the brand.</p>

          <h2>The name “Ohud”</h2>
          <p>Ohud — Uhud — is the mountain near Madinah. The Prophet ﷺ said of it:</p>
          <blockquote>This is a mountain that loves us and that we love.</blockquote>
          <p>We chose the name for what a mountain means: strength and steadiness. We will not move from our prices, our ethics, or our standards — they stand where they stand, the same for everyone who walks in.</p>
          <p>The name carries a quiet resonance, too. Muslim patients will recognise it; everyone else simply hears a calm, memorable name — and that is exactly as intended. We never preach. We just try to be the kind of place the name suggests: solid, honest, unmoved by pressure.</p>

          <h2>Our values</h2>
          <p>These are not slogans on a wall. Each one becomes a policy you can see in how we treat you.</p>
          <div className="valgrid">
            {values.map((v) => (
              <div className="valcard rv" key={v.root}>
                <div className="root">{v.root}</div>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>

          <h3>Care for everyone</h3>
          <p>Christians, Hindus, and Pakistanis of every background are fully welcome here, and always will be. The promise is the same for you, and so are the charity days — they serve every patient who needs them, whoever you are and wherever you come from. Honest, ethical care is care for all.</p>
          <p className="ayah">Whoever saves one life, it is as if he had saved all of mankind.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>See the promise for yourself.</h2>
          <p>Every price is published, and the quote is the invoice. Look at what we charge, then come and meet us.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
