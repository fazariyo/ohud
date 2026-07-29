import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';
import { team } from '@/lib/services';

export const metadata = {
  title: 'Our Doctors — The Dentists at Ohud Dental, Lahore',
  description:
    'Meet the dentist behind your care at Ohud Dental, Johar Town, Lahore — Dr. Syed Muhammad Ali, a general dentist with a conservative, restorative focus, ten years of clinical practice and six years teaching. A female dentist and female assistant are available on request.',
};

export default function OurDoctorsPage() {
  const wa = waLink('Hello — I’d like to book an appointment with Dr. Ali.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6529219} w={1900} h={1100} alt="The dental surgery at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Our Doctors</div>
          <div className="svc-tag"><span></span>Our Doctors</div>
          <h1 className="svc-h1">The dentist behind your care.</h1>
          <p className="svc-lead">One dentist, personally responsible for your treatment from first check-up to final result — in Johar Town, held to one promise: tell you the truth, and charge you fairly. Where a case needs a specialist, we bring in a consultant for that treatment.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Book an appointment →</a>
            <Link href="/pricing/" className="bgold">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="team-in">
          <div className="team-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Your Dentist</div>
            <h2 className="sec-h2">The person who treats you, <span className="hl">honestly</span></h2>
            <p className="sec-lead" style={{ maxWidth: '620px', margin: '16px auto 0' }}>You are treated by the same dentist each visit — the one who will say “you don’t need this” when it is true.</p>
          </div>
          {/* .solo lays the single real dentist out as a centred feature card;
              drops back to the 3-up grid automatically if colleagues are added. */}
          <div className={`team-grid${team.length === 1 ? ' solo' : ''}`}>
            {team.map((m, i) => (
              <div className={`tmember rv d${(i % 3) + 1}`} key={m.name}>
                <div className="tmember-img"><Img id={m.photo} w={600} h={760} alt={m.name} /></div>
                <div className="tmember-body">
                  <div className="tmember-name">{m.name}</div>
                  <div className="tmember-role">{m.role}</div>
                  <div className="tmember-bio">{m.bio}</div>
                  <div className="tmember-tags">
                    {m.tags.map((t) => <span className="tmember-tag" key={t}>{t}</span>)}
                    {m.pmdc && <span className="tmember-tag" key="pmdc">{m.pmdc}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-sec" style={{ background: 'var(--sage-bg)', paddingTop: '60px', paddingBottom: '70px' }}>
        <div className="prose-in" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="eyebrow sage center"><span className="bar"></span>Women’s Care</div>
          <h2 style={{ marginTop: 0 }}>A female dentist, for women who prefer one</h2>
          <p>A female dentist and a female assistant are available on request for women and children — just ask when you book. The promise, and the prices, are exactly the same.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Meet your dentist in person.</h2>
          <p>Message us on WhatsApp and we’ll book you in at a time that suits you — and tell you what the visit will cost before you come.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
