import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, brand } from '@/lib/brand';

export const metadata = {
  title: 'Free Second Opinion — Bring Any Clinic’s Quote',
  description:
    'Have a treatment plan or quote from another dentist in Lahore? Ohud Dental gives a free, written, no-strings second opinion — and we’ll tell you honestly if you don’t need the work at all.',
};

export default function SecondOpinionPage() {
  const wa = waLink('Assalamu alaikum / Hello — I have a treatment plan/quote from another clinic and would like a free second opinion.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={4687906} w={1900} h={1100} alt="Free second opinion at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Free Second Opinion</div>
          <div className="svc-tag"><span></span>No Procedure You Don’t Need</div>
          <h1 className="svc-h1">We will tell you when you don’t need us.</h1>
          <p className="svc-lead">Been quoted for a root canal, a crown, or “a few extra procedures”? Bring us the plan. We’ll give you a free, written second opinion — even if the honest answer is that you don’t need the work.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Get my free second opinion →</a>
            <Link href="/pricing/" className="bghost">See our prices →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>How it works</h2>
          <ul>
            <li><strong>Send us the plan.</strong> Message the quote or treatment plan from any clinic to our WhatsApp — a photo is fine.</li>
            <li><strong>We examine honestly.</strong> A short consultation and, if needed, an X-ray — both free — let us see what is really going on.</li>
            <li><strong>You get it in writing.</strong> We tell you what we would and wouldn’t recommend, and what it would cost at our posted prices.</li>
            <li><strong>No obligation, ever.</strong> If you decide to go back to your original dentist, that is completely fine. There is no pressure to switch.</li>
          </ul>
          <blockquote>Our standing policy: we refuse to recommend any treatment that a second opinion would not also recommend. We will tell you when you do not need our service.</blockquote>

          <h2>Why we offer this</h2>
          <p>Across Lahore, patients increasingly feel they are over-quoted — especially on root canals, crowns, and “extra procedures” suggested mid-treatment. That worry is fair, and it is exactly what we want to remove.</p>
          <p>A free second opinion costs us time. We give it anyway, because a patient who trusts us is worth more than a procedure we talked them into. The truthful merchant, it is said, keeps the best company.</p>

          <h3>Common questions</h3>
          <p><strong>Is it really free?</strong><br />Yes — the consultation, the second opinion, and any X-ray we need to give it are free. There is no catch.</p>
          <p><strong>Will you just undercut the other clinic to win me?</strong><br />No. Sometimes we’ll agree the other plan is correct and tell you so. Our job is to tell you the truth, not to win every patient.</p>
          <p><strong>What should I bring?</strong><br />Whatever you have — a written quote, a treatment plan, or even a screenshot of a WhatsApp conversation. We’ll work with it.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Not sure you need that treatment?</h2>
          <p>Send us the quote on WhatsApp. We’ll give you an honest, written second opinion — free, and with no obligation to switch.</p>
          <div className="svc-cta-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Get a free second opinion →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
