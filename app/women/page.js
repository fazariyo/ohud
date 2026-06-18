import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, brand } from '@/lib/brand';

export const metadata = {
  title: 'Ohud Sisters — Women’s Dental Pathway in Lahore',
  description:
    'A dental pathway built for women: a female dentist, female assistant, female receptionist on WhatsApp, optional female-only hours, and a calm, modest setting. For her, by her — at Ohud Dental, Lahore.',
};

const included = [
  { h: 'A female dentist', p: 'Your treatment is led by a female dentist, every step of the way.' },
  { h: 'A female assistant', p: 'A female chairside assistant is present throughout your appointment.' },
  { h: 'A female receptionist on WhatsApp', p: 'Book and ask questions through a female team member — comfortably, in your own words.' },
  { h: 'Optional female-only hours', p: 'Dedicated times when the clinic space is reserved for women. Just ask when you book.' },
  { h: 'A calm, modest setting', p: 'A quiet, unhurried environment designed around comfort and modesty, not spectacle.' },
  { h: 'The same honest prices', p: 'Posted prices, written quotes, and no upselling — exactly as for every Ohud patient.' },
];

export default function WomenPage() {
  const wa = waLink('Assalamu alaikum — I would like to book through the Ohud Sisters women’s pathway.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '56vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={7904406} w={1900} h={1100} alt="Ohud Sisters — women’s dental pathway in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Ohud Sisters</div>
          <div className="svc-tag"><span></span>Ohud Sisters · Women’s Pathway</div>
          <h1 className="svc-h1">For her, by her.</h1>
          <p className="svc-lead">Many women in Lahore quietly put off dental care — because of who will treat them, or how they’ll be spoken to. Ohud Sisters is built to remove that worry entirely.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Book with our female team →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>A pathway, not a coincidence</h2>
          <p>Most clinics will mention they “have a female dentist” if you ask. We did something different: we built an entire pathway around women’s comfort and dignity — staffed, scheduled, and designed for it. It is a standing offer, not a lucky day.</p>
          <p>The brand promise applies in full to women of every background. Whether you are a careful mother bringing your children, a bride preparing for her wedding, or an elder who simply prefers a female dentist — you are cared for the same calm, honest way.</p>
        </div>
      </section>

      <section className="prose-sec" style={{ background: 'var(--sage-bg)', paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="prose-in" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '8px' }}>What’s included</h2>
          <div className="valgrid">
            {included.map((v, i) => (
              <div className="valcard" key={i} style={{ background: '#fff' }}>
                <h4>{v.h}</h4>
                <p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>Common questions</h2>
          <p><strong>Can my husband or family member stay with me?</strong><br />Of course. You are welcome to have a family member present, and a female assistant is there throughout regardless.</p>
          <p><strong>Is this only for certain treatments?</strong><br />No. The full range of Ohud treatments — check-ups, fillings, root canals, crowns, cosmetic work, and children’s dentistry — is available through the Ohud Sisters pathway.</p>
          <p><strong>How do I make sure I get the female team?</strong><br />Just say “Ohud Sisters” when you message us on WhatsApp, and we’ll arrange a female dentist, assistant, and, where you’d like, a female-only time slot.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Care that respects you, fully.</h2>
          <p>Message us on WhatsApp and ask for Ohud Sisters. A female team member will help you book a time that suits you.</p>
          <div className="svc-cta-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Book with Ohud Sisters →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
