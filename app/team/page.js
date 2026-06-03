import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { team } from '@/lib/services';

export const metadata = {
  title: 'Meet Our Team | OHUD Dental, Lahore',
  description:
    'Meet the internationally trained dentists and specialists at OHUD Dental, Gulberg, Lahore — implantology, orthodontics, cosmetic, endodontics, paediatric and periodontal care.',
};

export default function TeamPage() {
  return (
    <>
      <Nav base="/" />

      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={35434209} w={1900} h={1100} alt="The OHUD Dental team in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb">
            <Link href="/">Home</Link><span>/</span>Our Team
          </div>
          <div className="svc-tag"><span></span>The People Behind Your Smile</div>
          <h1 className="svc-h1">Meet the <span style={{ color: 'var(--teal2)' }}>OHUD Dental</span> Team</h1>
          <p className="svc-lead">Our internationally trained dentists and specialists work exclusively in dentistry — combining clinical excellence with genuine warmth so every visit feels calm, clear and comfortable.</p>
          <div className="svc-hero-ctas">
            <Link href="/#contact" className="bteal">Book an Appointment →</Link>
            <Link href="/#contact" className="bghost">Visit Us →</Link>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="team">
        <div className="team-in">
          <div className="team-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Our Specialists</div>
            <h2 className="sec-h2">Caring Hands, <span className="hl">Expert Minds</span></h2>
            <p className="sec-lead" style={{ maxWidth: '620px', margin: '16px auto 0' }}>A multi-disciplinary team under one roof in Gulberg, Lahore — so whatever your smile needs, the right specialist is right here.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className={`tmember rv d${(i % 3) + 1}`} key={m.name}>
                <div className="tmember-img"><Img id={m.photo} w={600} h={760} alt={m.name} /></div>
                <div className="tmember-body">
                  <div className="tmember-name">{m.name}</div>
                  <div className="tmember-role">{m.role}</div>
                  <div className="tmember-bio">{m.bio}</div>
                  <div className="tmember-tags">
                    {m.tags.map((t) => <span className="tmember-tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Meet Your Dentist in Person</h2>
          <p>Book a free first consultation and find the right specialist for your smile. We are on Main Boulevard, Gulberg III, Lahore — open Monday to Saturday, 11 AM to 9 PM.</p>
          <div className="svc-cta-ctas">
            <Link href="/#contact" className="bteal">Book an Appointment →</Link>
            <a href="tel:+924235778899" className="bghost">Call +92 42 3577 8899</a>
          </div>
        </div>
      </section>

      <Footer base="/" />
    </>
  );
}
