import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';
import { consultation } from '@/lib/pricing';

export const metadata = {
  title: 'FAQ — Honest Answers, Plainly',
  description:
    'Straight answers about Ohud Dental in Lahore: our published prices, treatments and pain, women’s care, family and children, charity days, materials and safety, and how to book.',
};

const groups = [
  {
    category: 'Prices & honesty',
    faqs: [
      { q: 'Why do you publish your prices?', a: 'Because you have a right to know the cost before you walk in. Across Lahore, patients are quoted high and negotiated down, with the price hidden until the chair. We publish a fair, clear price for our treatments and explain it before we begin, so there is nothing to haggle and nothing to fear. You can see the full list on our pricing page.' },
      { q: 'Why do a few treatments say “ask when booking”?', a: 'Because we would rather post no number than one we might have to change. Flexible dentures and braces depend on the appliance and on your particular case, so a single posted figure would not be honest. Everything else on our list has a price on it. For those few, you get the exact figure in writing when you book — before anything begins, and never adjusted once you are in the chair.' },
      { q: 'Is the quote really the final price?', a: 'Yes. The price we quote you in writing is the price you pay. If a complex case ever needs an extra step, we explain it and price it in writing before we begin — never as a surprise added mid-treatment.' },
      { q: 'Why are you cheaper than the big clinics?', a: 'Because we publish one fair, clear price instead of quoting high and negotiating down. The materials and the standard of care do not change with the price tag — only the honesty of the price does.' },
      { q: 'Do you offer instalments?', a: 'Yes, for larger treatments like braces, implants, and full smile work. We explain the plan clearly, with no hidden mark-up for paying over time.' },
      { q: 'Do prices include the consultation and X-ray?', a: consultation.free ? `Your first consultation and full examination are free, and a single digital X-ray is included with it. To be plain about it: we opened on ${consultation.openedOn} and the consultation is free for our first two months, up to ${consultation.freeUntil}. After that it is PKR ${consultation.standardPrice}, and we would rather you read that here than find out at the desk. A second opinion stays free either way. Treatment prices are listed separately so you always know what each step costs.` : `Your first consultation and full examination are PKR ${consultation.standardPrice}, and a single digital X-ray is included with it. A second opinion is free, always. Treatment prices are listed separately so you always know what each step costs.` },
      { q: 'What if my case is complex?', a: 'We will tell you honestly, explain what is involved, and give you the full cost in writing before anything begins. A root canal is PKR 15,000 whether it is a straightforward front tooth or a difficult molar — we do not charge you more for a harder tooth. Where a price genuinely does vary, such as a surgical extraction at PKR 8,000 to 10,000, we publish the range and confirm the figure after the X-ray, before we start.' },
    ],
  },
  {
    category: 'Treatments & pain',
    faqs: [
      { q: 'Does a root canal hurt?', a: 'The infection hurts — the treatment relieves it. Once the tooth is fully numb, most patients feel only mild pressure. If you have ever found numbing difficult, tell us and we will take extra time. A root canal is PKR 15,000, front tooth or molar — posted openly and explained before we begin.' },
      { q: 'Do I really need a root canal?', a: 'Sometimes a filling is enough, and sometimes a tooth is better extracted. We confirm with an X-ray and tell you honestly which it is — even when that means less work, and less money, for us.' },
      { q: 'Does scaling damage or loosen teeth?', a: 'No. This is one of the most common myths in Pakistan. Scaling removes the hardened tartar that is actually harming your gums; healthy teeth are not affected. A scaling and polish is PKR 5,000.' },
      { q: 'Are your fillings mercury-free?', a: 'Yes. We use tooth-coloured composite, not silver-mercury amalgam, unless you specifically request otherwise. A tooth-coloured filling is PKR 5,000 to 6,000 depending on the size of the cavity, and we name the brand before we start.' },
      { q: 'Will you try to save my tooth before extracting it?', a: 'Always. Extraction is our last option, not our first. If a filling, root canal, or crown could keep the tooth, we will tell you. When a tooth genuinely cannot be saved, a simple extraction is PKR 5,000.' },
      { q: 'Is whitening safe for my enamel?', a: 'Yes, when it is dentist-supervised at the right concentration. We protect your gums and manage sensitivity throughout — which is exactly what unregulated DIY kits and charcoal pastes do not do.' },
      { q: 'Will crowns and fillings whiten too?', a: 'No. Whitening only works on natural teeth, not on crowns, veneers, or fillings. We tell you this up front so there are no surprises about an uneven result.' },
    ],
  },
  {
    category: 'Women’s care',
    faqs: [
      { q: 'Do you have a female dentist?', a: 'Yes. A female dentist and a female assistant are available on request — just let us know when you book, at the same honest, posted prices as every Ohud patient.' },
      { q: 'Can family stay with me?', a: 'Of course. You are welcome to have a family member present, and a female assistant can be there throughout your appointment on request.' },
      { q: 'Is it only for certain treatments?', a: 'No. The full range of Ohud treatments — check-ups, fillings, root canals, crowns, cosmetic work, and children’s dentistry — is available with a female dentist and assistant on request.' },
    ],
  },
  {
    category: 'Family & children',
    faqs: [
      { q: 'What is in the family plan?', a: 'Our family plan covers routine care for a family of four for a year at PKR 22,000 — including check-ups and cleanings, with honest, posted prices for any treatment needed beyond that. Message us and we will explain exactly what it includes.' },
      { q: 'When should my child first visit?', a: 'Around their first birthday, or whenever the first tooth appears. Early visits are about comfort and prevention, not treatment, and a child consultation is free.' },
      { q: 'Can I stay with my child during treatment?', a: 'Always. A parent is welcome beside the chair for the entire visit. We never rush a child, and we let them get comfortable first.' },
      { q: 'Do you handle nervous children?', a: 'Yes. We take our time, explain things simply, and build trust before we treat. Many anxious children leave asking when they can come back — and a female dentist is available on request if your child would prefer one.' },
    ],
  },
  {
    category: 'Charity',
    faqs: [
      { q: 'What are charity days?', a: 'On charity days we set aside time to treat patients who genuinely cannot afford care, free of charge. It is a quiet part of who we are, not a marketing campaign.' },
      { q: 'Who qualifies?', a: 'Anyone in real financial need who cannot otherwise afford essential dental treatment. We keep the process simple and private — there is no lengthy paperwork and no public attention.' },
      { q: 'How do I nominate someone?', a: 'Message us on WhatsApp with a few details about the person and their need. We will quietly arrange a time. You are welcome to nominate a family member, a neighbour, or yourself.' },
    ],
  },
  {
    category: 'Materials & safety',
    faqs: [
      { q: 'Are your materials halal?', a: 'We disclose the brand of every material before treatment and confirm its halal status on request. We will tell you what we know and, where a certificate exists, show it to you. See our materials page for the full picture.' },
      { q: 'Do you disclose the brands you use?', a: 'Yes — always, and before we begin. You can ask “What brand is this?” at any point and get a straight answer at the consultation, not after the work is done.' },
      { q: 'How do you sterilise?', a: 'Instruments are scrubbed, sealed in pouches, autoclaved with high-pressure steam, and opened in front of you. Single-use items like needles and gloves are never reused. You are welcome to see the sterilisation area any time — read the full protocol on our sterilisation page.' },
      { q: 'Is your dentist qualified and registered?', a: 'Yes. Ask to see the registration and qualification certificates at the clinic and we will show them to you without hesitation — we would rather you checked than took our word for it.' },
    ],
  },
  {
    category: 'Booking & visiting',
    faqs: [
      { q: 'How do I book?', a: 'Message us on WhatsApp — it is the simplest way. Tell us what you need and a convenient time, and we will confirm your appointment. You can also call us.' },
      { q: 'Where are you and what are your hours?', a: `We’re at ${brand.address} — ${brand.landmarks}. Open ${brand.hours}. ${brand.hoursNote}.` },
      { q: 'Do you take walk-ins and emergencies?', a: 'We keep time aside for genuine emergencies and will give you the soonest available slot — often the same day. Message us on WhatsApp and we will fit you in as quickly as we can.' },
      { q: 'Do you give a second opinion on another clinic’s plan?', a: 'Gladly, and for free. Bring us a quote or treatment plan from any clinic and we will tell you honestly whether we would recommend the same — even if the answer is that you don’t need the work. See our second opinion page.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={16430835} w={1900} h={1100} alt="Honest answers to common questions at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>FAQ</div>
          <div className="svc-tag"><span></span>Honest Answers</div>
          <h1 className="svc-h1">Questions, answered plainly.</h1>
          <p className="svc-lead">Straight answers about our prices, treatments, women’s care, family care, charity days, materials, and booking — no spin, no small print.</p>
          <div className="svc-hero-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Ask us anything →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Honest Answers</div>
            <h2 className="sec-h2">Everything you might want to ask</h2>
          </div>

          {groups.map((g, gi) => (
            <div key={gi}>
              <h2 className="sec-h2" style={{ textAlign: 'left', fontSize: '24px', marginTop: gi === 0 ? '20px' : '48px', marginBottom: '18px' }}>{g.category}</h2>
              <div className="faq-list">
                {g.faqs.map((f, i) => (
                  <div className="faq-item rv" key={i}>
                    <div className="faq-question">{f.q} <div className="faq-icon">+</div></div>
                    <div className="faq-answer">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Still have a question?</h2>
          <p>Message us on WhatsApp and we will answer plainly. You can also see our treatment costs on the <Link href="/pricing/">price list</Link>, or get a free <Link href="/second-opinion/">second opinion</Link> on another clinic’s plan.</p>
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
