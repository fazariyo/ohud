import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import { services, icons, team } from '@/lib/services';
import { brand, waDefault, waLink } from '@/lib/brand';

// ── Homepage hero stat cards ──
// NOTE: the figures below are illustrative placeholders. Confirm the real
// numbers (or reword) with the clinical team before launch (1 June 2026) —
// the clinic is newly opened, so "experience" reflects the team's combined
// prior practice, not the clinic's age. Card 3 is deliberately non-numeric.
const heroStats = [
  { num: '40+', label: 'Years of combined clinical experience' },
  { num: '5,000+', label: 'Patients & families cared for' },
  { icon: 'scan', label: 'Digital X-ray & modern, gentle equipment' },
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

// Patient journey — the path from a concern to honest treatment.
const journey = [
  { t: 'You have a concern', d: 'A toothache, an overdue check-up, or a quote from another clinic you’d like a second opinion on.' },
  { t: 'Book on WhatsApp', d: 'Message us and our front desk replies within minutes during clinic hours, to find a time that suits you.' },
  { t: 'Visit the clinic', d: 'A calm, unhurried welcome in a clean, modern setting — with a parent or family member beside you if you wish.' },
  { t: 'Free consultation', d: 'We listen, examine, and explain honestly what you do — and don’t — need, with every option laid out plainly.' },
  { t: 'Honest treatment', d: 'If you choose to go ahead, we treat you gently and the agreed price is the price you pay. Nothing added mid-treatment.' },
];

// Islamic values that guide the clinic.
// NOTE: Arabic wording and references are widely-cited authentic narrations,
// but please have an imam or scholar verify the text and diacritics before launch.
const faith = [
  {
    ar: 'السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ',
    quote: '“The miswak cleanses the mouth and is pleasing to the Lord.”',
    ref: 'Reported by an-Nasa’i & Ahmad',
    apply: 'Caring for your mouth is something our faith itself encourages. Helping you do that well, gently and honestly, is the whole of our work.',
  },
  {
    ar: 'الطُّهُورُ شَطْرُ الإِيمَانِ',
    quote: '“Purity is half of faith.”',
    ref: 'Sahih Muslim 223',
    apply: 'We hold our clinic to the same standard: hospital-grade sterilisation, single-use items where needed, and a space you can trust to be clean.',
  },
  {
    ar: 'إِنَّ لِبَدَنِكَ عَلَيْكَ حَقًّا',
    quote: '“Your body has a right over you.”',
    ref: 'Sahih al-Bukhari 5199',
    apply: 'Your body is an amanah — a trust from Allah. We honour it by protecting what you have and never recommending treatment you do not need.',
  },
];

// "Why patients trust Ohud Dental" — six honest reasons.
const trust = [
  { icon: 'check', t: 'The price before you sit down', d: 'Every fee is posted on this site, and the written quote you receive is the bill you pay. Never more.' },
  { icon: 'heart', t: 'We say when you don’t need it', d: 'We refuse to recommend a procedure we wouldn’t accept from another dentist ourselves.' },
  { icon: 'shield', t: 'Clean, qualified, careful', d: 'PMDC-verified dentists and hospital-grade sterilisation, every visit. Ask to see our sterilisation area any time.' },
  { icon: 'leaf', t: 'Halal materials, disclosed', d: 'We tell you the brand of every material before treatment and confirm its halal status on request.' },
  { icon: 'sparkle', t: 'A pathway built for women', d: 'A female dentist, female assistant, and optional female-only hours through our Ohud Sisters pathway.' },
  { icon: 'star', t: 'A free second opinion', d: 'Bring a plan or quote from any clinic and we’ll tell you honestly whether we’d recommend the same.' },
];

const stories = [
  { name: 'Rabia', area: 'Garden Town', quote: 'Another clinic quoted me almost triple for a root canal. Ohud numbed me properly and the pain was gone the same day. No surprises on the bill.' },
  { name: 'Tariq', area: 'Model Town', quote: 'They told me my tooth could be saved with a filling instead of the crown another dentist insisted on. That honesty brought my whole family here.' },
  { name: 'Sana', area: 'Johar Town', quote: 'My 8-year-old was terrified. They were so patient that she now asks when we’re going back. I never thought I’d say that about a dentist.' },
  { name: 'Hina', area: 'DHA', quote: 'I had my pre-wedding work done with a female dentist and assistant the whole time. Calm, respectful, and the result is natural — not “obvious”.' },
  { name: 'Hamza', area: 'Gulberg', quote: 'Messaged on WhatsApp at night with bad pain, got advice immediately, and was seen first thing. Fair, in writing, even in an emergency.' },
];

const learn = [
  { id: 16903641, tag: 'Root Canal', title: 'Do I really need a root canal?', excerpt: 'How to tell when a tooth genuinely needs a root canal — and when a filling, or honest reassurance, is enough.' },
  { id: 6502305, tag: 'Crowns', title: 'PFM vs Zirconia crowns: a Lahore patient’s guide', excerpt: 'The real difference in plain Urdu and English — strength, looks, and which is worth paying more for.' },
  { id: 4687906, tag: 'Honest Dentistry', title: 'How to choose a dentist in Lahore without getting overcharged', excerpt: 'The questions to ask, the red flags to watch for, and why a posted price list protects you.' },
];

// Women's pathway lead + reasons.
const femaleLead = team[1]; // Dr. Hira Naqvi — Lead Dentist, Ohud Sisters
// Female dentist wearing a hijab in a dental clinic (Pexels 34007083, free to use).
// Verify licensing/replace with an owned clinic photo before launch if preferred.
const womenImg = 34007083;
const womenReasons = [
  { t: 'Comfort', d: 'A female dentist, a female assistant, and a calm, unhurried setting designed around how you feel — never rushed, never spoken down to.' },
  { t: 'Safety', d: 'A female team from the front desk to the chair means you are cared for entirely by women, with a family member welcome beside you throughout.' },
  { t: 'Modesty', d: 'Optional female-only hours and a quiet, private space mean your modesty is preserved at every step of your visit.' },
  { t: 'Dignity', d: 'The same posted prices, honest advice, and gentle care every Ohud patient receives — offered in a way that respects you fully.' },
];

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
            <h1 className="hh1" id="hh1">Honest dentistry,<br /><em>rooted in Islamic values.</em></h1>
            <p className="hdesc" id="hdesc" style={{ maxWidth: '560px' }}>The dentist you would send your own family to — calm, ethical care for everyone, with comfort, cleanliness, and dignity at its heart. Welcome to Ohud Dental, Lahore.</p>
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
                  {s.icon
                    ? <div className="hstat-ic" dangerouslySetInnerHTML={{ __html: icons[s.icon] }} />
                    : <div className="hstat-n">{s.num}</div>}
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
            <h2 className="sec-h2">Care explained in plain words</h2>
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

      {/* C — OUR PROCESS */}
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

      {/* D — ISLAMIC VALUES */}
      <section className="faith">
        <div className="faith-glow"></div>
        <div className="faith-in">
          <div className="faith-head rv">
            <div className="eyebrow gold center" style={{ color: 'var(--gold2)' }}><span className="bar"></span>Our Foundation</div>
            <h2 className="sec-h2 light">Dentistry on a foundation of Islamic ethics</h2>
            <p className="sec-lead" style={{ color: 'rgba(255,255,255,0.6)', margin: '14px auto 0', maxWidth: '600px' }}>Cleanliness, honesty, and care for the body are not extras for us — they are the reason we practise the way we do. These values shape every visit, and patients of every faith are equally welcome.</p>
          </div>
          <div className="faith-grid">
            {faith.map((f, i) => (
              <div className={`fcard rv d${(i % 3) + 1}`} key={i}>
                {f.ar && <div className="fcard-ar">{f.ar}</div>}
                <p className="fcard-quote">{f.quote}</p>
                <div className="fcard-ref">{f.ref}</div>
                <p className="fcard-apply">{f.apply}</p>
              </div>
            ))}
          </div>
          <p className="faith-note">We mention our values openly because they explain our promises — fair fixed prices, no overtreatment, and disclosed halal materials. They are how we earn your trust, not a label we trade on.</p>
        </div>
      </section>

      {/* E — CARING FOR YOUR PARENTS */}
      <section className="parents">
        <div className="parents-in">
          <div className="parents-img rl">
            <Img id={3768131} w={800} h={900} alt="An elderly parent cared for gently at Ohud Dental, Lahore" />
          </div>
          <div className="parents-body rr">
            <div className="eyebrow sage"><span className="bar"></span>For Our Elders</div>
            <h2 className="sec-h2">The ones who cared for you, now in your care</h2>
            <div className="parents-ayah">
              <div className="parents-ayah-ar">وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا</div>
              <p>“And your Lord has decreed that you worship none but Him, and that you be good to your parents.”</p>
              <span className="ref">— Qur’an, Surah Al-Isra 17:23</span>
            </div>
            <p>A man once asked the Prophet ﷺ who was most deserving of his good company. He said, “Your mother,” three times, and then, “your father.” Honouring our parents is among the highest of deeds — and it does not stop at words.</p>
            <p>If you are young and strong today, the kindest thing you can do is not let your mother or father quietly bear toothache in their later years. Bring them to us. <strong>We will care for your parents the way we care for our own</strong> — gently, patiently, and with honest solutions that actually bring relief. No one should suffer pain at that age when it can be eased.</p>
            <div style={{ marginTop: '26px' }}>
              <a href={waLink('Assalamu alaikum — I would like to book a gentle appointment for my parent.')} target="_blank" rel="noopener noreferrer" className="bgold">Book for your parents →</a>
            </div>
          </div>
        </div>
      </section>

      {/* F — OHUD SISTERS (detailed women's pathway) */}
      <section className="womenx" id="women">
        <div className="womenx-in">
          <div className="womenx-top">
            <div className="womenx-img rl">
              <Img id={womenImg} w={800} h={1000} alt="A female dentist wearing a hijab at Ohud Dental, Lahore" />
            </div>
            <div className="womenx-intro rr">
              <div className="eyebrow sage"><span className="bar"></span>Ohud Sisters · Women’s Pathway</div>
              <h2 className="sec-h2">Care for our sisters, by our sisters</h2>
              <p className="sec-lead ink" style={{ marginTop: '16px' }}>Many women in Lahore quietly delay dental care — unsure of who will treat them, or how they will be spoken to. We built an entire pathway to remove that worry, because our faith calls us to protect the comfort, safety, and modesty of the women in our care.</p>
              <p className="sec-lead ink" style={{ marginTop: '12px' }}>A female dentist, a female assistant, a female receptionist on WhatsApp, and optional female-only hours — a calm, modest space where you are cared for entirely by women.</p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={waLink('Assalamu alaikum — I would like to book through the Ohud Sisters women’s pathway.')} target="_blank" rel="noopener noreferrer" className="bwa">Book with our female team →</a>
                <Link href="/women/" className="bghost" style={{ color: 'var(--navy)', borderColor: 'var(--gl)' }}>Learn about Ohud Sisters →</Link>
              </div>
            </div>
          </div>
          <div className="womenx-reasons">
            {womenReasons.map((r, i) => (
              <div className={`wreason rv d${(i % 4) + 1}`} key={i}>
                <h4>{r.t}</h4>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
          <p className="womenx-note">Led by {femaleLead.name}, {femaleLead.role} · {femaleLead.pmdc}.</p>
        </div>
      </section>

      {/* G — WHY PATIENTS TRUST OHUD */}
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

      {/* H — BOOK AN APPOINTMENT CARD */}
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

      {/* I — REVIEWS */}
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

      {/* J — GET IN TOUCH */}
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

      {/* K — BLOGS */}
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
