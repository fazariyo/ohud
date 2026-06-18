import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import { team } from '@/lib/services';
import { headline } from '@/lib/pricing';
import { brand, waDefault, waLink } from '@/lib/brand';

// Three Promises — each answers one psychological barrier (Blueprint §3.2 B).
const promises = [
  { t: 'We tell you the price before you sit down.', d: 'Every fee is published on this site. Your written quote will not exceed your final bill. Ever.',
    icon: <><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></> },
  { t: 'We tell you when you don’t need treatment.', d: 'We refuse to recommend any procedure we wouldn’t accept from another dentist ourselves.',
    icon: <><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" /></> },
  { t: 'We treat your family the way we treat ours.', d: 'Calm care for children, elders, and everyone in between — at the same fair price for everyone.',
    icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z" /> },
];

const stories = [
  { name: 'Rabia', area: 'Garden Town', quote: 'Another clinic quoted me almost triple for a root canal. Ohud had the price on their website, numbed me properly, and the pain was gone the same day. No surprises on the bill.' },
  { name: 'Tariq', area: 'Model Town', quote: 'They told me my tooth could be saved with a filling instead of the crown another dentist insisted on. That honesty brought my whole family here.' },
  { name: 'Sana', area: 'Johar Town', quote: 'My 8-year-old was terrified. They were so patient that she now asks when we’re going back. I never thought I’d say that about a dentist.' },
  { name: 'Hina', area: 'DHA', quote: 'I had my pre-wedding work done with a female dentist and assistant the whole time. Calm, respectful, and the result is natural — not “obvious”.' },
  { name: 'Hamza', area: 'Gulberg', quote: 'Messaged on WhatsApp at night with bad pain, got advice immediately, and was seen first thing. Fair price, in writing, even in an emergency.' },
];

const learn = [
  { id: 16903641, tag: 'Root Canal', title: 'Do I really need a root canal?', excerpt: 'How to tell when a tooth genuinely needs a root canal — and when a filling, or honest reassurance, is enough.' },
  { id: 6502305, tag: 'Crowns', title: 'PFM vs Zirconia crowns: a Lahore patient’s guide', excerpt: 'The real difference in plain Urdu and English — strength, looks, and which is worth paying more for.' },
  { id: 4687906, tag: 'Honest Dentistry', title: 'How to choose a dentist in Lahore without getting overcharged', excerpt: 'The questions to ask, the red flags to watch for, and why a posted price list protects you.' },
];

const faqs = [
  { q: 'How do I know if I really need a root canal?', a: 'A genuine root canal is usually needed when the nerve inside a tooth is infected — signalled by lasting pain, swelling, or a darkened tooth. We confirm with an X-ray and tell you honestly. Sometimes a filling is enough, and we will say so.' },
  { q: 'Why are your prices lower than the bigger clinics?', a: 'Because we publish one fair, fixed price instead of quoting high and negotiating. The materials and the standard of care do not change — only the honesty of the price does.' },
  { q: 'Do you have a female dentist?', a: 'Yes. Our Ohud Sisters pathway means a female dentist, a female assistant, and a female receptionist on WhatsApp — with optional female-only hours. Just ask when you book.' },
  { q: 'Do you offer instalments?', a: 'Yes, for larger treatments like braces, implants, and full smile work. We explain the plan clearly with no hidden mark-up.' },
  { q: 'Is the quote really the final price?', a: 'Yes. The price we quote in writing is the price you pay. If a complex case ever needs an extra step, we explain and price it in writing before we begin — never mid-treatment.' },
  { q: 'Will you give a second opinion on another clinic’s plan?', a: 'Gladly, and for free. Bring us a quote or treatment plan from any clinic and we will tell you honestly whether we would recommend the same — even if the answer is that you don’t need the work.' },
  { q: 'Are your materials halal?', a: 'We disclose the brand of every material before treatment and confirm its halal status on request. No mystery materials.' },
  { q: 'Where are you, and what are your hours?', a: `We’re at ${brand.address} — ${brand.landmarks}. Open ${brand.hours}. ${brand.hoursNote}.` },
];

const lead = team[0];

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
          <div style={{ maxWidth: '760px' }}>
            <div className="hbadge" id="hbadge"><div className="hbdot"></div><span className="hbtxt">Honest dentistry in Lahore</span></div>
            <h1 className="hh1" id="hh1">Honest dentistry.<br /><em>Honoured prices.</em></h1>
            <p className="hdesc" id="hdesc" style={{ maxWidth: '560px' }}>The dentist you would send your own family to — at a fair, fixed price. Welcome to Ohud Dental, Lahore.</p>
            <div className="hctas" id="hctas">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.493 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Book on WhatsApp
              </a>
              <Link href="/pricing/" className="bghost">See all our prices →</Link>
            </div>
            <div className="tribbon" id="hloc">
              <span><span className="star">★</span> {brand.rating} from {brand.reviewCountLabel}</span>
              <span className="sep"></span><span>Posted prices</span>
              <span className="sep"></span><span>Free second opinion</span>
            </div>
          </div>
        </div>
      </section>

      {/* B — THREE PROMISES */}
      <section className="promises">
        <div className="promises-in">
          {promises.map((p, i) => (
            <div className={`promise rv d${i + 1}`} key={i}>
              <div className="promise-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p.icon}</svg></div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* C — FEATURED SERVICES (with prices) */}
      <section className="cred-sec" id="services" style={{ paddingTop: '80px' }}>
        <div className="cred-in">
          <div style={{ textAlign: 'center', marginBottom: '54px' }} className="rv">
            <div className="eyebrow gold center"><span className="bar"></span>Our Treatments</div>
            <h2 className="sec-h2">Care you can see the price of</h2>
            <p className="sec-lead ink" style={{ maxWidth: '560px', margin: '14px auto 0' }}>A few of our most-asked treatments. Every price is the price you pay — tap any one to learn more.</p>
          </div>
          <div className="feat-grid">
            {headline.map((h, i) => (
              <Link key={i} href={`/services/${h.slug}/`} className={`promise rv d${(i % 3) + 1}`} style={{ display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>{h.name}</h3>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 700, color: 'var(--teal)', whiteSpace: 'nowrap' }}><span style={{ fontSize: '11px', color: 'var(--gm)', marginRight: '3px' }}>PKR</span>{h.price}</span>
                </div>
                <p style={{ color: 'var(--gm)', fontSize: '14px', fontWeight: 300 }}>Learn more →</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/services/" className="bgold">See all treatments →</Link>
          </div>
        </div>
      </section>

      {/* D — MEET YOUR DENTIST */}
      <section className="dentist">
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="rv">
          <div className="eyebrow teal center"><span className="bar"></span>Meet Your Dentist</div>
          <h2 className="sec-h2">The values have a voice</h2>
        </div>
        <div className="dentist-in rv">
          <div className="dentist-img"><Img id={lead.photo} w={700} h={800} alt={lead.name} /></div>
          <div className="dentist-body">
            <div className="eyebrow gold"><span className="bar"></span>In their words</div>
            <p className="dentist-quote">“My job is to keep your teeth — not to replace them. If a tooth can be saved, we save it. If a procedure is not needed, we say so.”</p>
            <p className="dentist-cred">{lead.bio}</p>
            <div className="dentist-name">{lead.name}</div>
            <div className="dentist-role">{lead.role} · {lead.pmdc}</div>
            <div style={{ marginTop: '24px' }}><Link href="/our-doctors/" className="bgold">Meet the team →</Link></div>
          </div>
        </div>
      </section>

      {/* E — PRICING SNAPSHOT */}
      <section className="psnap">
        <div className="psnap-in">
          <div className="psnap-head rv">
            <div className="eyebrow gold center"><span className="bar"></span>Posted Pricing</div>
            <h2 className="sec-h2">No “DM for price.”</h2>
            <p className="sec-lead ink" style={{ maxWidth: '540px', margin: '14px auto 0' }}>A snapshot of our prices. All include consultation, X-ray where required, and full materials. No hidden fees.</p>
          </div>
          <div className="ptable rv">
            {headline.map((h, i) => (
              <div className="ptable-row" key={i}>
                <div><div className="ptable-name">{h.name}</div></div>
                <div className="ptable-price"><span className="cur">PKR</span>{h.price}</div>
              </div>
            ))}
          </div>
          <p className="psnap-note">The price we quote is the price you pay. <Link href="/pricing/" style={{ color: 'var(--teal)', fontWeight: 600 }}>See the full price list →</Link> · Have a quote from another clinic? <Link href="/second-opinion/" style={{ color: 'var(--teal)', fontWeight: 600 }}>Get a free second opinion →</Link></p>
        </div>
      </section>

      {/* F — PATIENT STORIES */}
      <section className="tests" id="stories">
        <div className="tests-in">
          <div style={{ textAlign: 'center' }} className="rv">
            <div className="eyebrow teal center"><span className="bar"></span>Patient Stories</div>
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

      {/* G — OHUD SISTERS PATHWAY */}
      <section className="pathway sister" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <div className="pathway-in">
          <div>
            <div className="pathway-tag"><span></span>Ohud Sisters · Women’s Pathway</div>
            <h2>For her, by her.</h2>
            <p>A dental pathway built around women: a female dentist, a female assistant, a female receptionist on WhatsApp, and optional female-only hours. Calm, modest, and unhurried — the care your mother, wife, or daughter deserves.</p>
            <Link href="/women/" className="bgold">Learn about Ohud Sisters →</Link>
          </div>
          <div className="pathway-art"><Img id={7904406} w={600} h={600} alt="Female dentist caring for a patient at Ohud Dental" /></div>
        </div>
      </section>

      {/* H — FAMILY MEMBERSHIP */}
      <section className="famhl">
        <div className="famhl-in">
          <div className="famhl-glow"></div>
          <div>
            <div className="eyebrow gold"><span className="bar"></span>Family Plan</div>
            <h2>One clinic. Three generations.</h2>
            <p>From your child’s first tooth to your parents’ dentures, one trusted clinic for the whole household — at a fixed annual price that makes looking after everyone affordable.</p>
            <Link href="/family/" className="bgold">See what’s included →</Link>
          </div>
          <div className="fam-price">
            <div className="amt">PKR 22,000</div>
            <div className="per">per year, for a family of four</div>
            <ul>
              <li>Check-ups for every member</li>
              <li>Scaling &amp; cleaning</li>
              <li>X-rays where needed</li>
              <li>10% off all other treatments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* I — CHARITY DAYS */}
      <section className="charity">
        <div className="charity-in rv">
          <div className="eyebrow sage center"><span className="bar"></span>Ohud Gives Back</div>
          <h2>Every quarter, we open our doors free of charge.</h2>
          <p>For orphans, widows, and those who simply cannot afford care — treated with exactly the same dignity and quality as every other patient. We report it openly, every quarter.</p>
          <Link href="/charity/" className="bgold" style={{ marginTop: '10px' }}>Read our charity report →</Link>
        </div>
      </section>

      {/* J — TRUST BAR */}
      <div className="tbar">
        <div className="tbar-in">
          {['PMDC-registered dentists', 'Hospital-grade sterilisation', 'Halal materials disclosed', 'Posted prices', 'Written-quote guarantee', 'Free second opinion'].map((t, i) => (
            <div className="tbar-item" key={i}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              {t}
            </div>
          ))}
        </div>
      </div>

      {/* K — EDUCATIONAL CONTENT */}
      <section className="blog" id="learn">
        <div className="blog-in">
          <div className="blog-head">
            <div className="rl">
              <div className="eyebrow gold"><span className="bar"></span>Dental Literacy</div>
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

      {/* L — FAQ */}
      <section className="faq" id="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Honest Answers</div>
            <h2 className="sec-h2">Questions, answered plainly</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item rv" key={i}>
                <div className="faq-question">{f.q} <div className="faq-icon">+</div></div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* M — LOCATION & CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo rl">
            <div className="eyebrow gold"><span className="bar"></span>Book a Visit</div>
            <h2 className="sec-h2 light">The fastest way to book<br />is <span className="hl gold">WhatsApp</span></h2>
            <p className="sdesc" style={{ color: 'rgba(255,255,255,0.6)' }}>Tap below and your details go straight to our front desk. We reply within minutes during clinic hours — usually with options, the exact location, and a price for what you need.</p>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="cdet-lbl">Clinic</div><div className="cdet-val">{brand.address}</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><div><div className="cdet-lbl">Phone / WhatsApp</div><div className="cdet-val">{brand.whatsappDisplay}</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div><div><div className="cdet-lbl">Hours</div><div className="cdet-val">{brand.hours}<br /><span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{brand.hoursNote}</span></div></div></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
