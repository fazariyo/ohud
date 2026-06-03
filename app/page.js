import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import LegalModal from '@/components/LegalModal';
import { team } from '@/lib/services';

const cards = [
  { slug: 'general-dentistry', img: 3845745, num: '01 — DENTISTRY', name: 'General & Family Dentistry', text: 'Routine check-ups, professional scaling & polishing, tooth-coloured fillings and preventive care to keep every smile in your family healthy.' },
  { slug: 'cosmetic-dentistry', img: 12934843, num: '02 — COSMETIC', name: 'Cosmetic Dentistry', text: 'Porcelain veneers, professional teeth whitening and full smile makeovers designed to give you a brighter, more confident smile.' },
  { slug: 'orthodontics', img: 5524021, num: '03 — ORTHODONTICS', name: 'Braces & Clear Aligners', text: 'Straighten crooked or crowded teeth with traditional braces, ceramic braces, or virtually invisible clear aligners tailored to you.' },
  { slug: 'dental-implants', img: 6502305, num: '04 — IMPLANTS', name: 'Dental Implants', text: 'Permanent, natural-looking replacements for missing teeth using premium titanium implants — restoring full chewing function and confidence.' },
  { slug: 'root-canal', img: 16903641, num: '05 — ENDODONTICS', name: 'Pain-Free Root Canal Treatment', text: 'Modern rotary endodontics under proper anaesthesia saves your natural tooth and ends the pain of an infected nerve — usually in a single comfortable visit.' },
];

const steps = [
  { num: '01', img: 7800666, title: 'Book & Consult', text: 'Call, WhatsApp, or book online. We schedule a relaxed consultation to understand your concerns and goals.' },
  { num: '02', img: 6529219, title: 'Examination & Digital X-Ray', text: 'A thorough check-up with low-radiation digital imaging gives us a complete, accurate picture of your oral health.' },
  { num: '03', img: 20301626, title: 'Personalised Treatment', text: 'We present a clear treatment plan with transparent pricing and flexible installment options, then treat you gently.' },
  { num: '04', img: 5355694, title: 'Aftercare & Follow-Up', text: 'Clear home-care guidance and friendly reminders for your next check-up keep your smile healthy long after you leave.' },
];

const testimonials = [
  { photo: 5194107, name: 'Ayesha K.', role: 'Gulberg, Lahore', quote: 'I was terrified of dentists my whole life. The team at OHUD made my root canal completely painless and explained everything calmly. I actually look forward to my check-ups now.' },
  { photo: 3030223, name: 'Bilal Ahmed', role: 'DHA Phase 5, Lahore', quote: 'Got my veneers done here and the result is stunning — natural and bright. The whole process was smooth and the pricing was honest with an easy installment plan. Highly recommended.' },
  { photo: 36818405, name: 'Sana Tariq', role: 'Johar Town, Lahore', quote: 'My daughter needed braces and we visited several clinics. OHUD’s orthodontist was so patient and friendly with her. Eighteen months later her smile is perfect. Worth every rupee.' },
  { photo: 12327289, name: 'Usman Malik', role: 'Model Town, Lahore', quote: 'Lost a front tooth in a cricket accident. The implant they placed looks and feels exactly like my real tooth — nobody can tell. The clinic is spotless and genuinely world-class.' },
  { photo: 37145167, name: 'Fatima R.', role: 'Cantt, Lahore', quote: 'Brought my whole family here for check-ups and cleaning. The staff is courteous, the wait time is short, and they even accepted my company’s EFU panel. Our go-to dental clinic now.' },
];

const faqs = [
  { q: 'How often should I visit the dentist?', a: 'For most people we recommend a check-up and professional cleaning every six months. This lets us catch small problems — like early cavities or gum disease — before they become painful and expensive. If you have braces, implants, or gum issues, we may suggest more frequent visits.' },
  { q: 'Does a root canal really hurt?', a: 'This is the biggest myth in dentistry! A root canal actually relieves the pain caused by an infected nerve. With modern anaesthesia and rotary instruments, the procedure itself feels much like getting a routine filling. Most of our patients are surprised by how comfortable and quick it is.' },
  { q: 'How much do treatments cost, and do you offer installments?', a: 'Our pricing is transparent and competitive for Lahore. After your examination, you will receive a clear, itemised treatment plan with no hidden charges. For larger treatments like implants, braces, or full smile makeovers, we offer flexible monthly installment plans and accept most major insurance panels.' },
  { q: 'Are braces or clear aligners better for me?', a: 'It depends on your case and lifestyle. Traditional and ceramic braces are excellent for complex alignment and are very cost-effective. Clear aligners are nearly invisible and removable, which many adults and professionals prefer. During your free orthodontic consultation, we will assess your teeth and recommend the best option for you.' },
  { q: 'What are your timings and where are you located?', a: 'OHUD Dental is located on Main Boulevard, Gulberg III, Lahore. We are open Monday to Saturday from 11:00 AM to 9:00 PM, with Sunday appointments available on request for emergencies. You can book by phone, WhatsApp, or through the form on this page — walk-ins are also welcome.' },
];

const techCards = [
  { name: 'Digital X-Rays', text: 'Instant, high-resolution images with up to 80% less radiation than traditional film X-rays.', svg: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="12" cy="12" r="3" /><path d="M3 9h18" /></> },
  { name: 'Intraoral Scanners', text: 'Comfortable 3D digital scans replace messy, gag-inducing impression putty for a perfect fit.', svg: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></> },
  { name: 'Laser Dentistry', text: 'Minimally invasive laser treatment for gums and soft tissue means less bleeding and faster healing.', svg: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /> },
  { name: 'Sedation & Comfort', text: 'Anxiety-free options and effective local anaesthesia keep nervous patients calm and pain-free throughout.', svg: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
  { name: 'Same-Day Crowns', text: 'CAD/CAM technology lets us design and fit durable ceramic crowns in a single appointment.', svg: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></> },
];

export default function Home() {
  return (
    <>
      <Nav base="" />

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <div className="hero-img">
          <Img domId="heroImg" id={3881296} w={1900} h={1100} alt="Modern dental clinic in Lahore" />
        </div>
        <div className="hero-grad"></div>
        <div className="hero-grad2"></div>
        <div className="hero-ptcl" id="ptcl"></div>
        <div className="hero-inner">
          <div>
            <div className="hbadge" id="hbadge"><div className="hbdot"></div><span className="hbtxt">Lahore&apos;s Trusted Dental Care</span></div>
            <h1 className="hh1" id="hh1">Smiles That Last<br /><em>a Lifetime.</em></h1>
            <p className="hdesc" id="hdesc">OHUD Dental brings world-class, pain-free dentistry to the heart of Lahore — from routine check-ups and cleanings to cosmetic veneers, braces, and implants, all under one roof with the latest technology and a gentle touch.</p>
            <div className="hctas" id="hctas">
              <a href="#contact" className="bteal">Book an Appointment →</a>
              <a href="#contact" className="bghost">Visit Us →</a>
            </div>
            <div className="hloc" id="hloc">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span><strong>45-A Main Boulevard, Gulberg III, Lahore</strong> &nbsp;·&nbsp; Open Mon–Sat, 11 AM – 9 PM</span>
            </div>
          </div>
          <div className="hright" id="hright">
            <div className="hcard" id="hc1">
              <div className="hcard-img"><Img id={6812570} w={700} h={340} alt="Dentist examining a patient" /></div>
              <div className="hcard-body">
                <div className="hcard-label">Featured Service</div>
                <div className="hcard-title">General & Family Dentistry</div>
                <div className="hcard-text">Gentle check-ups, scaling, fillings and oral care for every member of your family — in a calm, modern setting.</div>
                <div className="hcard-bar"></div>
              </div>
            </div>
            <div className="hstat" id="hstat">
              <div className="hstat-num" data-target="98">0</div>
              <div className="hstat-label">% Patient<br />Satisfaction</div>
              <div className="hstat-div"></div>
              <div className="hstat-num" data-target="15">0</div>
              <div className="hstat-label">Years of<br />Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <div className="trust">
        <div className="trust-in">
          <div className="tstat rv d1"><div className="tnum"><span className="count a" data-t="25">0</span><span className="a">K+</span></div><div className="tlbl">Happy Patients</div></div>
          <div className="tdiv"></div>
          <div className="tstat rv d2"><div className="tnum"><span className="count a" data-t="98">0</span><span className="a">%</span></div><div className="tlbl">Satisfaction Rate</div></div>
          <div className="tdiv"></div>
          <div className="tstat rv d3"><div className="tnum"><span className="count a" data-t="15">0</span><span className="a"> Years</span></div><div className="tlbl">Serving Lahore</div></div>
          <div className="tdiv"></div>
          <div className="tstat rv d4"><div className="tnum"><span className="count a" data-t="12">0</span><span className="a">+</span></div><div className="tlbl">Expert Dentists</div></div>
        </div>
      </div>

      {/* ═══ SERVICES ═══ */}
      <section className="cred-sec" id="services">
        <div className="cred-in">
          <div className="cred-head">
            <div className="rl">
              <div className="cred-hero-img">
                <Img domId="credImg" id={4687906} w={900} h={420} alt="Dental treatment in progress" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(21,35,46,0.65),transparent 60%)' }}></div>
                <div className="cred-img-badge">
                  <div className="cib-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5c-1.7 0-2.6.9-4.1.9S5.3 2.7 4.2 3.8C2.9 5.1 3.1 7.5 3.6 10c.4 1.8.7 3.7 1.3 5.6.3 1.4.9 3.2 2 3.2s1.2-1.8 1.5-3.5c.3-1.5.5-3.2 1.7-3.2s1.4 1.7 1.7 3.2c.3 1.7.4 3.5 1.5 3.5s1.7-1.8 2-3.2c.5-1.9.9-3.8 1.3-5.6.5-2.5.7-4.9-.6-6.2C16.1 2.7 14.9 3.4 13.4 3.4S13.7 2.5 12 2.5z" /></svg></div>
                  <div><div className="cib-text">Painless, Gentle Dentistry</div><div className="cib-sub">Modern technology. Caring hands. Healthy smiles.</div></div>
                </div>
              </div>
            </div>
            <div className="rr">
              <div className="eyebrow teal"><span className="bar"></span>Our Core Treatments</div>
              <h2 className="sec-h2 big">Complete Dental<br />Care for the<br /><span className="hl">Whole Family</span></h2>
              <p className="sec-lead">From your child&apos;s first check-up to a complete smile makeover, OHUD Dental offers a full range of treatments under one roof in Gulberg, Lahore — delivered by experienced specialists using internationally certified materials. Click any treatment to learn more.</p>
              <a href="#contact" className="bteal" style={{ display: 'inline-flex', marginTop: '32px' }}>Book Your Visit →</a>
            </div>
          </div>
          <div className="cred-services-grid">
            {cards.map((c, i) => (
              <Link key={c.slug} href={`/treatments/${c.slug}/`} className={`csvc rv d${i + 1}`}>
                <div className="csvc-img"><Img id={c.img} w={600} h={280} alt={c.name} /></div>
                <div className="csvc-num">{c.num}</div>
                <div className="csvc-name">{c.name}</div>
                <div className="csvc-text">{c.text}</div>
                <span className="csvc-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <div className="about" id="about">
        <div className="about-in">
          <div className="about-imgs rl">
            <Img domId="aboutImg" id={35434209} w={900} h={700} alt="OHUD Dental clinical team" className="main-img" />
            <div className="about-imgs-overlay"></div>
            <div className="about-imgs-overlay2"></div>
            <div className="about-stat-card">
              <div className="asc-row">
                <div className="asc-item"><div className="asc-num">25K+</div><div className="asc-lbl">Patients Treated</div></div>
                <div className="asc-div"></div>
                <div className="asc-item"><div className="asc-num">12+</div><div className="asc-lbl">Expert Dentists</div></div>
                <div className="asc-div"></div>
                <div className="asc-item"><div className="asc-num">15 Yrs</div><div className="asc-lbl">Of Trusted Care</div></div>
              </div>
            </div>
          </div>
          <div className="about-content rr">
            <div className="eyebrow teal2"><span className="bar"></span>Why Choose OHUD</div>
            <h2 className="sec-h2 light">Lahore&apos;s Dental Team<br />That Treats <span className="hl">Every Smile</span><br />With Care</h2>
            <p className="sdesc">Our specialists are internationally trained and work exclusively in dentistry. We combine clinical excellence with genuine compassion — so even nervous patients feel calm, informed, and comfortable from the moment they walk in.</p>
            <div className="apoints">
              <div className="apoint rv d1"><div><div className="apoint-title">Internationally Trained Specialists</div><div className="apoint-text">Our dentists hold qualifications and advanced training from leading institutions, covering implantology, orthodontics, cosmetic and paediatric dentistry.</div></div></div>
              <div className="apoint rv d2"><div><div className="apoint-title">State-of-the-Art Technology</div><div className="apoint-text">Digital X-rays, intraoral scanners and rotary endodontics mean more accurate diagnoses, less waiting, and far more comfortable treatment.</div></div></div>
              <div className="apoint rv d3"><div><div className="apoint-title">Strict Sterilisation & Safety</div><div className="apoint-text">We follow international infection-control protocols with autoclaved, single-use, and sealed instruments for every single patient — your safety comes first.</div></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ DOCTORS PREVIEW ═══ */}
      <section className="docs" id="doctors">
        <div className="docs-in">
          <div className="docs-head">
            <div className="rl">
              <div className="eyebrow teal"><span className="bar"></span>Meet Our Specialists</div>
              <h2 className="sec-h2">The Team Behind<br />Your <span className="hl">Healthy Smile</span></h2>
            </div>
            <Link href="/team/" className="docs-link rr">Meet the full team →</Link>
          </div>
          <div className="docs-grid">
            {team.slice(0, 4).map((m, i) => (
              <Link href="/team/" className={`doc-card rv d${i + 1}`} key={m.name}>
                <div className="doc-card-img"><Img id={m.photo} w={500} h={600} alt={m.name} /></div>
                <div className="doc-name">{m.name}</div>
                <div className="doc-role">{m.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process" id="process">
        <div className="proc-in">
          <div className="proc-head">
            <div className="rl">
              <div className="eyebrow teal"><span className="bar"></span>Your Visit Journey</div>
              <h2 className="sec-h2">From First Visit<br />to a <span className="hl">Healthy Smile</span></h2>
            </div>
            <p className="rr sec-lead lg">A simple, transparent, and stress-free experience. We explain every step, every cost, and every option clearly — so you always know exactly what to expect.</p>
          </div>
          <div className="proc-steps">
            {steps.map((s, i) => (
              <div className={`pstep rv d${i + 1}`} key={s.num}>
                <div className="pstep-img">
                  <Img id={s.img} w={600} h={380} alt={s.title} />
                  <div className="pstep-num">{s.num}</div>
                </div>
                <div className="pstep-body">
                  <div className="pstep-title">{s.title}</div>
                  <div className="pstep-text">{s.text}</div>
                  <div className="pstep-dot"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY ═══ */}
      <section className="mktg" id="technology">
        <div className="mktg-in">
          <div className="mktg-head">
            <div className="mktg-head-img rl"><Img domId="billImg" id={6528862} w={800} h={360} alt="Advanced dental technology" /></div>
            <div className="rr">
              <div className="mktg-note">Modern Clinic</div>
              <div className="eyebrow teal"><span className="bar"></span>Advanced Dental Technology</div>
              <h2 className="sec-h2" style={{ fontSize: 'clamp(32px,3.5vw,48px)' }}>Precise, Comfortable,<br /><span style={{ color: 'var(--teal)' }}>Truly Painless Care.</span></h2>
              <p className="sec-lead">We&apos;ve invested in the technology that makes dentistry faster, safer, and far more comfortable — so you spend less time in the chair and more time smiling.</p>
            </div>
          </div>
          <div className="mktg-grid">
            {techCards.map((t, i) => (
              <div className={`mcard rv d${(i % 3) + 1}`} key={t.name}>
                <div className="mcard-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{t.svg}</svg></div>
                <div className="mcard-name">{t.name}</div>
                <div className="mcard-text">{t.text}</div>
              </div>
            ))}
            <div className="mcard navy rv d3">
              <div className="mcard-name" style={{ fontFamily: 'var(--serif)', fontSize: '22px' }}>Ready to Smile?</div>
              <p>Book a free smile consultation and see your treatment plan in 3D.</p>
              <a href="#contact" className="bteal" style={{ fontSize: '14px', padding: '12px 24px' }}>Book Now →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="tests" id="testimonials">
        <div className="tests-in">
          <div style={{ textAlign: 'center' }} className="rv">
            <div className="eyebrow teal center"><span className="bar"></span>Patient Stories</div>
            <h2 className="sec-h2">Smiles We&apos;re <span className="hl">Proud Of</span></h2>
          </div>
        </div>
        <div className="track-wrap" style={{ marginTop: '68px' }}>
          <div className="track" id="track">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="tcard" key={i}>
                <div className="tstars">★★★★★</div>
                <p className="tquote">{t.quote}</p>
                <div className="tauthor">
                  <div className="tavatar"><Img id={t.photo} w={150} h={150} alt={t.name} /></div>
                  <div><div className="tname">{t.name}</div><div className="trole">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BLOG ═══ */}
      <section className="blog" id="blog">
        <div className="blog-in">
          <div className="blog-head">
            <div className="rl">
              <div className="eyebrow teal"><span className="bar"></span>Dental Health Tips</div>
              <h2 className="sec-h2">The OHUD <span className="hl">Smile</span> Blog</h2>
            </div>
            <div className="rr"><p className="sec-lead" style={{ maxWidth: '420px' }}>Practical, dentist-approved advice to help you and your family keep healthy, confident smiles for life.</p></div>
          </div>
          <div className="blog-grid">
            <a href="#" data-legal="blog-post-1" className="bcard rv d1">
              <div className="bcard-img"><Img id={6528858} w={600} h={440} alt="Habits that damage teeth" /></div>
              <div className="bcard-body">
                <div className="bcard-tag">Oral Health</div>
                <div className="bcard-title">5 Everyday Habits Quietly Damaging Your Teeth</div>
                <div className="bcard-excerpt">From chewing ice to brushing too hard, some daily habits do more harm than you&apos;d think. Learn what to avoid to protect your enamel.</div>
                <div className="bcard-link">Read Full Article <span style={{ fontSize: '16px' }}>→</span></div>
              </div>
            </a>
            <a href="#" data-legal="blog-post-2" className="bcard rv d2">
              <div className="bcard-img"><Img id={3845985} w={600} h={440} alt="Braces vs aligners" /></div>
              <div className="bcard-body">
                <div className="bcard-tag">Orthodontics</div>
                <div className="bcard-title">Braces vs Clear Aligners: Which Is Right for You?</div>
                <div className="bcard-excerpt">Both straighten teeth beautifully — but they suit different lifestyles and budgets. Here&apos;s how to choose the best option for your smile.</div>
                <div className="bcard-link">Read Full Article <span style={{ fontSize: '16px' }}>→</span></div>
              </div>
            </a>
            <a href="#" data-legal="blog-post-3" className="bcard rv d3">
              <div className="bcard-img"><Img id={5622271} w={600} h={440} alt="Teeth whitening" /></div>
              <div className="bcard-body">
                <div className="bcard-tag">Cosmetic</div>
                <div className="bcard-title">The Truth About Teeth Whitening: Safe & Effective Options</div>
                <div className="bcard-excerpt">Charcoal pastes and home kits promise a lot. We explain what really works, what&apos;s risky, and how professional whitening compares.</div>
                <div className="bcard-link">Read Full Article <span style={{ fontSize: '16px' }}>→</span></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="faq" id="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Got Questions?</div>
            <h2 className="sec-h2">Frequently Asked <span className="hl">Questions</span></h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item rv d${i + 1}`} key={i}>
                <div className="faq-question">{f.q} <div className="faq-icon">+</div></div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="contact" id="contact">
        <div className="contact-bg-img"><Img id={16430835} w={1600} h={900} alt="Dental background" /></div>
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo rl">
            <div className="eyebrow teal2"><span className="bar"></span>Book a Visit</div>
            <h2 className="sec-h2 light">Book Your<br /><span className="hl">Appointment</span> Today</h2>
            <p className="sdesc">Tell us a little about what you need and our front desk will confirm your appointment — usually within a few hours. New patients are always welcome, and your first consultation is free.</p>
            <div className="cdet"><div className="cdet-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="cdet-lbl">Clinic Address</div><div className="cdet-val">45-A Main Boulevard, Gulberg III, Lahore, Pakistan</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><div><div className="cdet-lbl">Phone / WhatsApp</div><div className="cdet-val">+92 42 3577 8899 &nbsp;|&nbsp; +92 300 1234567</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div><div><div className="cdet-lbl">Email</div><div className="cdet-val">info@ohuddentals.com</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div><div><div className="cdet-lbl">Clinic Hours</div><div className="cdet-val">Mon – Sat, 11 AM – 9 PM &nbsp;(Sun: Emergencies)</div></div></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer base="" />
      <LegalModal />
    </>
  );
}
