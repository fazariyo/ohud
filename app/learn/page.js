import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Learn — Dental Literacy for Lahore | Ohud Dental',
  description:
    'Plain, honest dental education for Lahore — root canals, crowns, choosing a dentist without being overcharged, children’s care, and women’s dental health. Learn before you decide.',
};

const silos = [
  {
    pillar: 'Everything about root canals in Lahore.',
    tag: 'Root Canal Knowledge Hub',
    cards: [
      { id: 16903641, tag: 'Root Canal', title: 'Do I really need a root canal?', excerpt: 'How to tell when a tooth genuinely needs treatment — and when a filling, or honest reassurance, is enough.' },
      { id: 16430835, tag: 'Root Canal', title: 'How much should a root canal cost in Lahore?', excerpt: 'A fair range for front teeth and molars, and why a posted price protects you from being overcharged.' },
      { id: 6502305, tag: 'Root Canal', title: 'Root canal aftercare: what to expect', excerpt: 'The normal soreness, when to call us, and how a crown afterwards keeps the tooth working for years.' },
    ],
  },
  {
    pillar: 'PFM vs Zirconia: a Lahore patient’s guide.',
    tag: 'Crowns & Restorations',
    cards: [
      { id: 6502305, tag: 'Crowns', title: 'How long do crowns last?', excerpt: 'What realistically affects a crown’s lifespan, and the simple habits that make it last longer.' },
      { id: 12934843, tag: 'Crowns', title: 'When do you actually need a crown?', excerpt: 'The honest signs a tooth needs covering — and when a filling will do the same job for less.' },
      { id: 6528858, tag: 'Crowns', title: 'Crown materials, explained', excerpt: 'PFM, zirconia, and full-metal in plain Urdu and English — strength, looks, and what’s worth paying more for.' },
    ],
  },
  {
    pillar: 'How to choose a dentist in Lahore without being overcharged.',
    tag: 'Honest Dentistry',
    cards: [
      { id: 4687906, tag: 'Honest Dentistry', title: '5 signs you’re being over-treated', excerpt: 'The red flags to watch for when a treatment plan suddenly grows longer than your pain.' },
      { id: 35434209, tag: 'Honest Dentistry', title: 'Why a second opinion is worth getting', excerpt: 'How a free second opinion can save your tooth and your money — and what to bring to one.' },
      { id: 6762869, tag: 'Honest Dentistry', title: 'What a fair price actually looks like', excerpt: 'Why a posted price list protects you, and how to read a quote so there are no surprises.' },
    ],
  },
  {
    pillar: 'A parent’s guide to children’s dental care.',
    tag: 'Children’s & Family Dentistry',
    cards: [
      { id: 8224633, tag: 'Children', title: 'Your child’s first dental visit', excerpt: 'When to come, what happens, and how to make those first visits calm rather than frightening.' },
      { id: 8224633, tag: 'Children', title: 'Calming a frightened child', excerpt: 'Simple things that work, from us and from parents — so the chair stops being scary.' },
      { id: 3845745, tag: 'Children', title: 'Sealants: cheap protection that works', excerpt: 'How a small, inexpensive sealant on new adult molars can prevent costly cavities later.' },
    ],
  },
  {
    pillar: 'Dental care for women in Pakistan.',
    tag: 'Women’s Dental Health',
    cards: [
      { id: 7904406, tag: 'Women', title: 'Dental care during pregnancy', excerpt: 'What is safe, what to delay, and why looking after your gums matters more during pregnancy.' },
      { id: 6762869, tag: 'Women', title: 'Feeling comfortable at the dentist: seeing a female dentist', excerpt: 'The real reasons care gets put off, and how a female dentist and assistant, available on request, remove the worry entirely.' },
      { id: 4687906, tag: 'Women', title: 'Halal dental materials, explained', excerpt: 'What goes into fillings, crowns, and cements — and how we disclose and confirm halal status.' },
    ],
  },
];

export default function LearnPage() {
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={4687906} w={1900} h={1100} alt="Dental education at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Learn</div>
          <div className="svc-tag"><span></span>Dental Literacy · Learn</div>
          <h1 className="svc-h1">Learn before you decide.</h1>
          <p className="svc-lead">We teach openly — including how to avoid being overcharged. The more you understand about your own teeth, the harder you are to mislead. That is exactly the point.</p>
          <div className="svc-hero-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Ask us a question →</a>
            <Link href="/services/" className="bghost">See all treatments →</Link>
          </div>
        </div>
      </section>

      {silos.map((silo, s) => (
        <section className="blog" key={s} style={s % 2 === 1 ? { background: 'var(--off)' } : undefined}>
          <div className="blog-in">
            <div className="blog-head">
              <div className="rl">
                <div className="eyebrow gold"><span className="bar"></span>{silo.tag}</div>
                <h2 className="sec-h2">{silo.pillar}</h2>
              </div>
            </div>
            <div className="blog-grid">
              {silo.cards.map((b, i) => (
                <div className={`bcard rv d${i + 1}`} key={i}>
                  <div className="bcard-img"><Img id={b.id} w={600} h={440} alt={b.title} /></div>
                  <div className="bcard-body">
                    <div className="bcard-tag">{b.tag}</div>
                    <div className="bcard-title">{b.title}</div>
                    <div className="bcard-excerpt">{b.excerpt}</div>
                    <div className="bcard-link">Coming soon</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Still have a question?</h2>
          <p>Reading helps, but nothing replaces an honest look. Message us on WhatsApp, or see exactly what each treatment costs before you decide.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Ask on WhatsApp →</a>
            <Link href="/services/" className="bghost">See all treatments →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
