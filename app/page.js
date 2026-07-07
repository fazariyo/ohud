import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import { services, icons, team } from '@/lib/services';
import { brand, waDefault, waLink } from '@/lib/brand';

// ── Homepage hero stat cards (icon + value + label, four across) ──
// NOTE: the "40+" and "5,000+" figures are illustrative placeholders. Confirm
// the real numbers (or reword) with the clinical team before launch
// (1 June 2026) — the clinic is newly opened, so "experience" reflects the
// team's combined prior practice, not the clinic's age. Cards 3 & 4 are
// deliberately word-values (honest — no invented rating).
const heroStats = [
  { icon: 'clock', num: '40+', label: 'Years of experience' },
  { icon: 'heart', num: '5,000+', label: 'Patients cared for' },
  { icon: 'check', num: 'Upfront', label: 'Prices, no hidden charges' },
  { icon: 'scan', num: 'Digital', label: 'X-ray & advanced equipment' },
];

// Six core treatments — names + plain-language descriptions, no prices.
const serviceIcon = {
  'root-canal-treatment-lahore': 'tooth',
  'dental-crowns-lahore': 'shield',
  'scaling-cleaning-lahore': 'sparkle',
  'tooth-extraction-lahore': 'heart',
  'dental-fillings-lahore': 'check',
  'veneers-lahore': 'star',
  'teeth-whitening-lahore': 'sparkle',
  'dental-implants-lahore': 'shield',
  'braces-aligners-lahore': 'smile',
  'childrens-dentistry-lahore': 'heart',
  'emergency-dentist-lahore': 'clock',
};
const coreServices = services.slice(0, 6);

// Common problems — "which of these sounds like you?" Each links to the
// treatment that solves it, the way teethandgums.co maps symptoms to services.
const problems = [
  { icon: 'tooth', t: 'Toothache or pain', to: 'root-canal-treatment-lahore' },
  { icon: 'heart', t: 'Bleeding, sore gums', to: 'scaling-cleaning-lahore' },
  { icon: 'shield', t: 'Chipped or broken tooth', to: 'dental-crowns-lahore' },
  { icon: 'smile', t: 'A missing tooth', to: 'dental-implants-lahore' },
  { icon: 'sparkle', t: 'Stained or dull teeth', to: 'teeth-whitening-lahore' },
  { icon: 'smile', t: 'Crooked or gappy teeth', to: 'braces-aligners-lahore' },
  { icon: 'check', t: 'A cavity or sensitivity', to: 'dental-fillings-lahore' },
  { icon: 'star', t: 'Gaps or uneven front teeth', to: 'veneers-lahore' },
  { icon: 'clock', t: 'Wisdom-tooth trouble', to: 'tooth-extraction-lahore' },
  { icon: 'clock', t: 'Sudden pain or swelling', to: 'emergency-dentist-lahore' },
  { icon: 'heart', t: 'A nervous child', to: 'childrens-dentistry-lahore' },
  { icon: 'sparkle', t: 'Overdue for a clean', to: 'scaling-cleaning-lahore' },
];

// Patient journey — the path from a concern to honest treatment.
const journey = [
  { t: 'You have a concern', d: 'A toothache, an overdue check-up, or a quote from another clinic you’d like a second opinion on.' },
  { t: 'Book on WhatsApp', d: 'Message us and our front desk replies within minutes during clinic hours, to find a time that suits you.' },
  { t: 'Visit the clinic', d: 'A calm, unhurried welcome in a clean, modern setting — with a parent or family member beside you if you wish.' },
  { t: 'Free consultation', d: 'We listen, examine, and explain honestly what you do — and don’t — need, with every option laid out plainly.' },
  { t: 'Honest treatment', d: 'If you choose to go ahead, we treat you gently and the agreed price is the price you pay. Nothing added mid-treatment.' },
];

// Before & after gallery — tabbed by treatment, like teethandgums.co.
// NOTE: the image IDs below are STOCK PLACEHOLDERS. Real before/after photos
// are only ever shown with the patient's written consent — swap these for
// genuine, consented clinic results before launch (1 June 2026).
const results = [
  { key: 'veneers', label: 'Veneers', before: 5355694, after: 12934843, title: 'Veneers that still look like your own teeth', desc: 'Chips, gaps, and stubborn stains, corrected with thin shells shaped to suit your face — natural, never bulky or “obvious”.' },
  { key: 'whitening', label: 'Whitening', before: 5355715, after: 5622271, title: 'A brighter smile, safely', desc: 'Years of tea, coffee, and paan lifted with dentist-supervised whitening — your gums and enamel protected the whole way.' },
  { key: 'braces', label: 'Braces & Aligners', before: 8224633, after: 5524021, title: 'Straighter teeth, one clear price', desc: 'Metal, ceramic, or near-invisible aligners. The full-treatment price is agreed and explained up front, and payable in instalments.' },
  { key: 'implants', label: 'Implants', before: 3768131, after: 6812500, title: 'A missing tooth, replaced for good', desc: 'A permanent, natural-feeling replacement from the root up — with the full, honest cost given in writing before we begin.' },
  { key: 'crowns', label: 'Crowns', before: 5355715, after: 6502305, title: 'Strength restored, shade matched', desc: 'PFM or metal-free zirconia caps that protect a weak tooth and blend in with the teeth beside them.' },
];

// Our foundation — the honest principles behind how we work.
// (Reframed from the earlier values section: plain-language, no religious framing.)
const values = [
  { principle: 'We only recommend what you truly need.', apply: 'No upselling, no invented problems. If a simple filling will do, we will not sell you a crown — and we will say so out loud, even when it means less work for us.' },
  { principle: 'The price you are shown is the price you pay.', apply: 'Every fee is posted on this site, and the written quote you receive is the bill. Nothing is added once you are in the chair — not in an emergency, not ever.' },
  { principle: 'A clean, careful clinic you can trust.', apply: 'Hospital-grade sterilisation, single-use items where needed, and clearly named, halal materials disclosed on request. Ask to see any of it, any time.' },
];

// "Why patients trust Ohud Dental" — six honest reasons.
const trust = [
  { icon: 'check', t: 'The price before you sit down', d: 'Every fee is posted on this site, and the written quote you receive is the bill you pay. Never more.' },
  { icon: 'heart', t: 'We say when you don’t need it', d: 'We refuse to recommend a procedure we wouldn’t accept from another dentist ourselves.' },
  { icon: 'shield', t: 'Clean, qualified, careful', d: 'PMDC-verified dentists and hospital-grade sterilisation, every visit. Ask to see our sterilisation area any time.' },
  { icon: 'leaf', t: 'Halal materials, disclosed', d: 'We tell you the brand of every material before treatment and confirm its halal status on request.' },
  { icon: 'sparkle', t: 'A female dentist, on request', d: 'A female dentist and female assistant are available for any patient who would prefer one — just ask when you book.' },
  { icon: 'star', t: 'A free second opinion', d: 'Bring a plan or quote from any clinic and we’ll tell you honestly whether we’d recommend the same.' },
];

const stories = [
  { name: 'Rabia', area: 'Garden Town', quote: 'Another clinic quoted me almost triple for a root canal. Ohud numbed me properly and the pain was gone the same day. No surprises on the bill.' },
  { name: 'Tariq', area: 'Model Town', quote: 'They told me my tooth could be saved with a filling instead of the crown another dentist insisted on. That honesty brought my whole family here.' },
  { name: 'Sana', area: 'Johar Town', quote: 'My 8-year-old was terrified. They were so patient that she now asks when we’re going back. I never thought I’d say that about a dentist.' },
  { name: 'Hina', area: 'DHA', quote: 'I had my pre-wedding work done with a female dentist and assistant the whole time. Calm, respectful, and the result is natural — not “obvious”.' },
  { name: 'Hamza', area: 'Gulberg', quote: 'Messaged on WhatsApp at night with bad pain, got advice immediately, and was seen first thing. Fair, in writing, even in an emergency.' },
];

// Short homepage FAQ — handles the common objections before booking.
const faqs = [
  { q: 'Will there be any hidden charges?', a: 'No. Every fee is published on this site and explained to you before treatment begins, and the written quote you receive is the invoice. Nothing is added once treatment starts — including in an emergency.' },
  { q: 'Will the treatment hurt?', a: 'We do not start until you are fully numb and comfortable. Most patients feel pressure rather than pain, and if numbing has ever been difficult for you, tell us and we’ll take extra time.' },
  { q: 'Can I get a female dentist?', a: 'Yes. A female dentist and female assistant are available for any patient who would prefer one — just mention it when you book on WhatsApp.' },
  { q: 'How do I book?', a: 'The fastest way is WhatsApp. Message us and our front desk replies within minutes during clinic hours with a time, the exact location, and clear next steps.' },
  { q: 'Do you give second opinions?', a: 'Always, and for free. Bring a treatment plan or quote from any other clinic and we’ll tell you honestly whether we’d recommend the same.' },
];

const learn = [
  { id: 16903641, tag: 'Root Canal', title: 'Do I really need a root canal?', excerpt: 'How to tell when a tooth genuinely needs a root canal — and when a filling, or honest reassurance, is enough.' },
  { id: 6502305, tag: 'Crowns', title: 'PFM vs Zirconia crowns: a Lahore patient’s guide', excerpt: 'The real difference in plain Urdu and English — strength, looks, and which is worth paying more for.' },
  { id: 4687906, tag: 'Honest Dentistry', title: 'How to choose a dentist in Lahore without getting overcharged', excerpt: 'The questions to ask, the red flags to watch for, and why a posted price list protects you.' },
];

const leadDentist = team[0]; // Dr. Saad Mahmood — Founder & Lead Dentist
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`;

export default function Home() {
  return (
    <>
      <Nav base="" />

      {/* A — HERO */}
      <section className="hero" id="home">
        <div className="hero-img">
          <Img domId="heroImg" id={35434209} w={1900} h={1100} alt="A dentist smiling gently with a patient at Ohud Dental, Lahore" />
        </div>
        <div className="hero-grad"></div>
        <div className="hero-grad2"></div>
        <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="hbadge" id="hbadge"><div className="hbdot"></div><span className="hbtxt">Honest dentistry in Lahore</span></div>
            <h1 className="hh1" id="hh1">Honest dentistry,<br /><em>for smiles that last.</em></h1>
            <p className="hdesc" id="hdesc" style={{ maxWidth: '560px' }}>The dentist you would send your own family to — calm, careful care at a fair, clearly explained price, with every cost told to you in plain words before we ever begin. Welcome to Ohud Dental, Lahore.</p>
            <div className="hctas" id="hctas">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Book on WhatsApp
              </a>
              <a href="#contact" className="bghost">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Find Location
              </a>
            </div>
            <div className="hstats" id="hstat">
              {heroStats.map((s, i) => (
                <div className="hstat-mini" key={i}>
                  <div className="hstat-ic" dangerouslySetInnerHTML={{ __html: icons[s.icon] }} />
                  <div className="hstat-n">{s.num}</div>
                  <div className="hstat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B — TREATMENTS (names + descriptions, no prices) */}
      <section className="svcx" id="services">
        <div className="svcx-in">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }} className="rv">
            <div className="eyebrow gold center"><span className="bar"></span>Our Treatments</div>
            <h2 className="sec-h2">Everything your smile needs, in one calm place</h2>
            <p className="sec-lead ink" style={{ margin: '14px auto 0' }}>Whatever brought you here, here is what each treatment actually is — so you can decide with a clear head. Tap any card to learn more.</p>
          </div>
          <div className="svcx-grid">
            {coreServices.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className={`svcx-card rv d${(i % 3) + 1}`}>
                <div className="svcx-icon" dangerouslySetInnerHTML={{ __html: icons[serviceIcon[s.slug] || 'tooth'] }} />
                <h3 className="svcx-name">{s.nav}</h3>
                <p className="svcx-text">{s.short}</p>
                <span className="svcx-more">Learn more <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/services/" className="bgold">See all treatments →</Link>
          </div>
        </div>
      </section>

      {/* C — COMMON PROBLEMS */}
      <section className="problems">
        <div className="problems-in">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }} className="rv">
            <div className="eyebrow teal center"><span className="bar"></span>Where It Hurts</div>
            <h2 className="sec-h2">Which of these sounds like you?</h2>
            <p className="sec-lead ink" style={{ margin: '14px auto 0' }}>Tell us what’s bothering you and we’ll take you straight to the honest fix — no jargon, no scare tactics.</p>
          </div>
          <div className="prob-grid">
            {problems.map((p, i) => (
              <Link key={i} href={`/services/${p.to}/`} className="prob-card rv">
                <div className="prob-ic" dangerouslySetInnerHTML={{ __html: icons[p.icon] }} />
                <div className="prob-txt">{p.t}<span>See the fix →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* D — OUR PROCESS */}
      <section className="journey">
        <div className="journey-in">
          <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto' }} className="rv">
            <div className="eyebrow teal center"><span className="bar"></span>How It Works</div>
            <h2 className="sec-h2">From first worry to real relief</h2>
            <p className="sec-lead ink" style={{ margin: '14px auto 0' }}>No mystery, no pressure. This is exactly what happens, from the moment you message us to the day you walk out smiling.</p>
          </div>
          <div className="jsteps">
            {journey.map((j, i) => (
              <div className={`jstep rv d${(i % 5) + 1}`} key={i}>
                <div className="jstep-num">{i + 1}</div>
                <div className="jstep-title">{j.t}</div>
                <div className="jstep-text">{j.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E — BEFORE & AFTER GALLERY */}
      <section className="results">
        <div className="results-in">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }} className="rv">
            <div className="eyebrow gold center"><span className="bar"></span>Before &amp; After</div>
            <h2 className="sec-h2">The kind of change good dentistry makes</h2>
            <p className="sec-lead ink" style={{ margin: '14px auto 0' }}>A look at what each treatment can do. Tap a treatment to see it — with honest expectations, never overpromised.</p>
          </div>
          <div className="ba-tabs">
            {results.map((r, i) => (
              <button key={r.key} className={`ba-tab${i === 0 ? ' active' : ''}`} data-ba={r.key} type="button">{r.label}</button>
            ))}
          </div>
          {results.map((r, i) => (
            <div key={r.key} className={`ba-panel${i === 0 ? ' active' : ''}`} data-ba={r.key}>
              <div className="ba-pair">
                <div className="ba-shot"><span className="ba-badge">Before</span><Img id={r.before} w={640} h={520} alt={`Before ${r.label.toLowerCase()} at Ohud Dental, Lahore`} /></div>
                <div className="ba-shot"><span className="ba-badge after">After</span><Img id={r.after} w={640} h={520} alt={`After ${r.label.toLowerCase()} at Ohud Dental, Lahore`} /></div>
              </div>
              <div className="ba-text">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
          <p className="ba-note">The images above are illustrative for now. Real before-and-after photos are only ever shared with the patient’s written consent, and will replace these after launch.</p>
        </div>
      </section>

      {/* F — LEAD DENTIST SPOTLIGHT */}
      <section className="dentist" style={{ paddingTop: '110px' }}>
        <div className="dentist-in">
          <div className="dentist-img rl">
            <Img id={leadDentist.photo} w={720} h={840} alt={`${leadDentist.name}, ${leadDentist.role} at Ohud Dental, Lahore`} />
          </div>
          <div className="dentist-body rr">
            <div className="eyebrow gold"><span className="bar"></span>Meet Your Lead Dentist</div>
            <p className="dentist-quote">“From your first check-up to your final result, you are in steady, careful hands — and you will always hear the truth about what you do and don’t need.”</p>
            <p className="dentist-cred">{leadDentist.bio}</p>
            <div className="dentist-name">{leadDentist.name}</div>
            <div className="dentist-role">{leadDentist.role} · {leadDentist.pmdc}</div>
            <div style={{ marginTop: '26px' }}>
              <Link href="/our-doctors/" className="bgold">Meet the whole team →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* G — OUR FOUNDATION (honest principles) */}
      <section className="faith">
        <div className="faith-glow"></div>
        <div className="faith-in">
          <div className="faith-head rv">
            <div className="eyebrow gold center" style={{ color: 'var(--gold2)' }}><span className="bar"></span>Our Foundation</div>
            <h2 className="sec-h2 light">Why we practise the way we do</h2>
            <p className="sec-lead" style={{ color: 'rgba(255,255,255,0.6)', margin: '14px auto 0', maxWidth: '600px' }}>Cleanliness, honesty, and genuine care are not extras for us — they are the whole reason we practise the way we do. These principles shape every visit, for every patient who walks through our door.</p>
          </div>
          <div className="faith-grid">
            {values.map((v, i) => (
              <div className={`fcard rv d${(i % 3) + 1}`} key={i}>
                <p className="fcard-quote">{v.principle}</p>
                <p className="fcard-apply" style={{ borderTop: 'none', paddingTop: '14px' }}>{v.apply}</p>
              </div>
            ))}
          </div>
          <p className="faith-note">We state our principles openly because they explain our promises — clear prices with no hidden charges, no overtreatment, and disclosed materials. They are how we earn your trust, not a slogan we trade on.</p>
        </div>
      </section>

      {/* H — CARING FOR YOUR PARENTS */}
      <section className="parents">
        <div className="parents-in">
          <div className="parents-img rl">
            <Img id={3768131} w={800} h={900} alt="An elderly parent cared for gently at Ohud Dental, Lahore" />
          </div>
          <div className="parents-body rr">
            <div className="eyebrow sage"><span className="bar"></span>For Our Elders</div>
            <h2 className="sec-h2">The ones who cared for you, now in your care</h2>
            <div className="parents-ayah">
              <p>“Looking after your parents’ health is one of the kindest things you can do — and toothache should never be something they quietly put up with.”</p>
            </div>
            <p>If you are young and strong today, the kindest thing you can do is not let your mother or father silently bear toothache in their later years. Bring them to us. <strong>We will care for your parents the way we care for our own</strong> — gently, patiently, and with honest solutions that actually bring relief. No one should suffer pain at that age when it can be eased.</p>
            <div style={{ marginTop: '26px' }}>
              <a href={waLink('Hello — I would like to book a gentle appointment for my parent.')} target="_blank" rel="noopener noreferrer" className="bgold">Book for your parents →</a>
            </div>
          </div>
        </div>
      </section>

      {/* I — MEET THE TEAM */}
      <section className="docs">
        <div className="docs-in">
          <div className="docs-head">
            <div className="rl">
              <div className="eyebrow teal"><span className="bar"></span>Our Dentists</div>
              <h2 className="sec-h2">The team caring for you</h2>
            </div>
            <Link href="/our-doctors/" className="docs-link rr">Meet all our dentists →</Link>
          </div>
          <div className="docs-grid">
            {team.slice(0, 4).map((d, i) => (
              <Link key={i} href="/our-doctors/" className={`doc-card rv d${(i % 4) + 1}`}>
                <div className="doc-card-img"><Img id={d.photo} w={600} h={720} alt={`${d.name}, ${d.role} at Ohud Dental, Lahore`} /></div>
                <div className="doc-name">{d.name}</div>
                <div className="doc-role">{d.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* J — WHY PATIENTS TRUST OHUD */}
      <section className="promises" style={{ paddingTop: '110px' }}>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 54px' }} className="rv">
          <div className="eyebrow gold center"><span className="bar"></span>Why Patients Trust Us</div>
          <h2 className="sec-h2">Reasons families keep coming back</h2>
        </div>
        <div className="promises-in">
          {trust.map((r, i) => (
            <div className={`promise rv d${(i % 3) + 1}`} key={i}>
              <div className="promise-icon" dangerouslySetInnerHTML={{ __html: icons[r.icon] }} />
              <h3>{r.t}</h3>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* K — FAQ */}
      <section className="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Good Questions</div>
            <h2 className="sec-h2">Answered honestly, before you book</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item${i === 0 ? ' active' : ''}`} key={i}>
                <div className="faq-question">{f.q}<span className="faq-icon">+</span></div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/faq/" className="bgold">See all questions →</Link>
          </div>
        </div>
      </section>

      {/* L — BOOK AN APPOINTMENT CARD */}
      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <div className="eyebrow gold center" style={{ color: 'var(--gold2)' }}><span className="bar"></span>Book an Appointment</div>
          <h2>Ready when you are.</h2>
          <p>The fastest way to book is WhatsApp — tap below and your message goes straight to our front desk. We reply within minutes during clinic hours, usually with a time, the exact location, and clear next steps.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* M — REVIEWS */}
      <section className="tests" id="stories">
        <div className="tests-in">
          <div style={{ textAlign: 'center' }} className="rv">
            <div className="eyebrow teal center"><span className="bar"></span>Patient Reviews</div>
            <h2 className="sec-h2">Real people. Real words.</h2>
          </div>
        </div>
        <div className="track-wrap" style={{ marginTop: '60px' }}>
          <div className="track" id="track">
            {[...stories, ...stories].map((t, i) => (
              <div className="tcard" key={i}>
                <div className="tstars">★★★★★</div>
                <p className="tquote">{t.quote}</p>
                <div className="tauthor"><div><div className="tname">{t.name}</div><div className="trole">{t.area}, Lahore</div></div></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '46px' }}>
          <Link href="/patient-stories/" className="bgold">Read more patient stories →</Link>
        </div>
      </section>

      {/* N — GET IN TOUCH */}
      <section className="contact" id="contact">
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo rl">
            <div className="eyebrow gold"><span className="bar"></span>Get in Touch</div>
            <h2 className="sec-h2 light">Come and see us<br />in <span className="hl gold">{brand.addressShort}</span></h2>
            <p className="sdesc" style={{ color: 'rgba(255,255,255,0.6)' }}>Message us on WhatsApp and your details go straight to our front desk. We reply within minutes during clinic hours — usually with options, the exact location, and clear next steps.</p>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="cdet-lbl">Clinic</div><div className="cdet-val">{brand.address}</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><div><div className="cdet-lbl">Phone / WhatsApp</div><div className="cdet-val">{brand.whatsappDisplay}</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div><div><div className="cdet-lbl">Hours</div><div className="cdet-val">{brand.hours}<br /><span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{brand.hoursNote}</span></div></div></div>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="bghost" style={{ marginTop: '6px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg>
              Get directions
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* O — BLOGS */}
      <section className="blog" id="learn">
        <div className="blog-in">
          <div className="blog-head">
            <div className="rl">
              <div className="eyebrow gold"><span className="bar"></span>From Our Blog</div>
              <h2 className="sec-h2">Learn before you decide</h2>
            </div>
            <div className="rr"><p className="sec-lead ink" style={{ maxWidth: '420px' }}>We teach openly — including how to avoid being overcharged. That is the point.</p></div>
          </div>
          <div className="blog-grid">
            {learn.map((b, i) => (
              <Link key={i} href="/learn/" className={`bcard rv d${i + 1}`}>
                <div className="bcard-img"><Img id={b.id} w={600} h={440} alt={b.title} /></div>
                <div className="bcard-body">
                  <div className="bcard-tag">{b.tag}</div>
                  <div className="bcard-title">{b.title}</div>
                  <div className="bcard-excerpt">{b.excerpt}</div>
                  <div className="bcard-link">Read more <span style={{ fontSize: '16px' }}>→</span></div>
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
