import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { services, bySlug, icons } from '@/lib/services';

// Pre-render one static page per treatment.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = bySlug[params.slug];
  if (!s) return {};
  return {
    title: `${s.title} | OHUD Dental, Lahore`,
    description: `${s.title} at OHUD Dental, Gulberg, Lahore. ${s.short}`,
  };
}

export default function TreatmentPage({ params }) {
  const s = bySlug[params.slug];
  if (!s) notFound();

  return (
    <>
      <Nav base="/" />

      {/* HERO */}
      <section className="svc-hero">
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={s.heroId} w={1900} h={1100} alt={s.title} /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/#services">Treatments</Link><span>/</span>{s.title}
          </div>
          <div className="svc-tag"><span></span>{s.tag}</div>
          <h1 className="svc-h1" dangerouslySetInnerHTML={{ __html: s.titleHtml }} />
          <p className="svc-lead">{s.lead}</p>
          <div className="svc-hero-ctas">
            <Link href="/#contact" className="bteal">Book an Appointment →</Link>
            <a href="#details" className="bghost">Treatment Details</a>
          </div>
        </div>
      </section>

      {/* DETAIL ROWS */}
      <section className="svc-body" id="details">
        <div className="svc-in">
          {s.rows.map((r, i) => (
            <div className={`svc-row${r.rev ? ' rev' : ''}`} key={i}>
              <div className={`svc-row-text ${r.rev ? 'rr' : 'rl'}`}>
                <div className="svc-row-tag">{r.tag}</div>
                <h2>{r.heading}</h2>
                {r.paras.map((p, j) => <p key={j}>{p}</p>)}
                {r.bullets && r.bullets.length > 0 && (
                  <ul>{r.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                )}
              </div>
              <div className={`svc-row-img ${r.rev ? 'rl' : 'rr'}`}>
                <Img id={r.imgId} w={800} h={600} alt={r.heading} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="svc-features">
        <div className="svc-feat-in">
          <div className="svc-feat-head rv">
            <h2>Why Patients Choose OHUD for {s.nav}</h2>
            <p>Gentle, honest, high-quality dentistry delivered with the latest technology — right here in Gulberg, Lahore.</p>
          </div>
          <div className="svc-fgrid">
            {s.features.map((f, i) => (
              <div className="svc-fcard rv" key={i}>
                <div className="svc-fcard-icon" dangerouslySetInnerHTML={{ __html: icons[f.icon] }} />
                <h3>{f.name}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section className="svc-strip">
        <div className="svc-strip-in">
          {s.strip.map((x, i) => (
            <div className="svc-info rv" key={i}>
              <div className="big">{x.big}</div>
              <h3>{x.h3}</h3>
              <p>{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Ready to Take the Next Step?</h2>
          <p>Book your visit at OHUD Dental today. Your first consultation is free, and our friendly team will build a clear, transparent treatment plan just for you.</p>
          <div className="svc-cta-ctas">
            <Link href="/#contact" className="bteal">Book an Appointment →</Link>
            <a href="tel:+924235778899" className="bghost">Call +92 42 3577 8899</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="svc-related">
        <div className="svc-related-in">
          <div className="svc-related-head rv"><h2>Explore More Treatments</h2></div>
          <div className="svc-rgrid">
            {s.related.map((slug) => {
              const r = bySlug[slug];
              return (
                <Link href={`/treatments/${r.slug}/`} className="svc-rcard" key={slug}>
                  <div className="svc-rcard-img"><Img id={r.heroId} w={500} h={320} alt={r.nav} /></div>
                  <div className="svc-rcard-body">
                    <h3>{r.nav}</h3>
                    <p>{r.short}</p>
                    <span className="lnk">Learn more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer base="/" />
    </>
  );
}
