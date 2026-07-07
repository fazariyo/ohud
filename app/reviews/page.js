import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Reviews — What Patients Say About Ohud Dental, Lahore',
  description:
    'Honest reviews from patients across Lahore — on posted prices, painless treatment, no overtreatment, and calm care for families. We never edit or pay for reviews.',
};

const reviews = [
  { name: 'Mariam', area: 'Gulberg', quote: 'What I’ll remember is that they told me I didn’t need the second filling another dentist wanted to do. Who does that? Five stars for honesty alone.' },
  { name: 'Imran', area: 'Johar Town', quote: 'The price was posted on the website and explained up front, and that is exactly what I paid. No “DM for price”, no haggling, no surprise charges at the counter.' },
  { name: 'Ayesha', area: 'Model Town', quote: 'My wisdom tooth removal was far calmer than I expected. They explained every step before doing it and checked on me throughout.' },
  { name: 'Shahida', area: 'Garden Town', quote: 'As an older woman I prefer a female dentist. The female dentist and assistant made me comfortable and never rushed me. I’ll keep coming here.' },
  { name: 'Zeeshan', area: 'DHA', quote: 'Booked on WhatsApp, got a reply in minutes, and was seen the next day. Clean clinic, proper sterilisation, fair price. No complaints at all.' },
  { name: 'Nadia', area: 'Faisal Town', quote: 'I was scared scaling would loosen my teeth — a myth they patiently explained away. My gums stopped bleeding within a week.' },
  { name: 'Komal', area: 'Wapda Town', quote: 'One clear price for my whole braces treatment, explained up front and payable in instalments. No “adjustment fee” every single visit like the last place.' },
  { name: 'Hassan', area: 'Cantt', quote: 'Brought my father, who is nervous about dentists. They were gentle and unhurried with him. The way they treat elders says everything.' },
  { name: 'Rukhsana', area: 'Township', quote: 'Even when I came in pain as an emergency, they quoted me fairly and in writing before starting. They didn’t take advantage of the situation.' },
];

export default function ReviewsPage() {
  const review = waLink('Hello — I’d like to leave an honest review of my visit to Ohud Dental.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6762869} w={1900} h={1100} alt="Patients reviewing Ohud Dental in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Reviews</div>
          <div className="svc-tag"><span></span>Reviews</div>
          <h1 className="svc-h1">What patients say across Lahore.</h1>
          <p className="svc-lead">We ask every patient for an honest review a few hours after their visit. We never edit them, and we never pay for them. Here is what people tell us.</p>
          <div className="svc-hero-ctas">
            <a href={review} target="_blank" rel="noopener noreferrer" className="bwa">Leave a review →</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bghost">Read our Google reviews →</a>
          </div>
        </div>
      </section>

      <section className="prose-sec" style={{ paddingTop: '70px', paddingBottom: '40px' }}>
        <div className="prose-in" style={{ textAlign: 'center' }}>
          <div className="eyebrow gold center"><span className="bar"></span>Our Rating</div>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 600, color: 'var(--navy)', fontSize: 'clamp(48px,8vw,76px)', lineHeight: 1.05 }}>
            {brand.rating}<span style={{ color: 'var(--gold)', marginLeft: '10px' }}>★</span>
          </div>
          <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--gm)', marginTop: '8px' }}>
            from {brand.reviewCountLabel}
          </p>
          <p style={{ fontSize: '13px', color: 'var(--gm)', marginTop: '6px' }}>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bgold" style={{ marginTop: '18px' }}>Read our Google reviews →</a>
          </p>
        </div>
      </section>

      <section className="tests">
        <div className="tests-in">
          <div className="rev-grid">
            {reviews.map((t, i) => (
              <div className="tcard" key={i} style={{ width: 'auto' }}>
                <div className="tstars">★★★★★</div>
                <p className="tquote">{t.quote}</p>
                <div className="tauthor"><div><div className="tname">{t.name}</div><div className="trole">{t.area}, Lahore</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>How we collect reviews</h2>
          <p>A few hours after your visit, a member of our team sends you a short, friendly message on WhatsApp asking how it went. There is no pressure, and an honest review helps us more than a kind one. If something went wrong, we want to hear that too — and fix it.</p>
          <p>We never edit a review, and we never pay for one. The rating you see is built from real patients telling the truth. Video testimonials, recorded with patients who are happy to appear on camera, are being added to this page over time.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Were you treated well? Tell others.</h2>
          <p>An honest review helps the next person in Lahore find care they can trust. Message us on WhatsApp, or leave us a review on Google.</p>
          <div className="svc-cta-ctas">
            <a href={review} target="_blank" rel="noopener noreferrer" className="bwa">Leave a review on WhatsApp →</a>
            <Link href="/patient-stories/" className="bghost">Read patient stories →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
