import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { services, bySlug } from '@/lib/services';
import { waLink, brand } from '@/lib/brand';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = bySlug[params.slug];
  if (!s) return {};
  return {
    title: `${s.title} in Lahore — Price PKR ${s.price}`,
    description: `${s.title} at Ohud Dental, Lahore. ${s.short} Posted price: PKR ${s.price}. Honest, fixed-price dentistry.`,
  };
}

export default function ServicePage({ params }) {
  const s = bySlug[params.slug];
  if (!s) notFound();

  const wa = waLink(`Assalamu alaikum / Hello — I’d like to ask about ${s.title} at Ohud Dental.`);

  return (
    <>
      <Nav base="/" />

      {/* 1 — HERO (name, starting price, book) */}
      <section className="svc-hero">
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={s.heroId} w={1900} h={1100} alt={s.title} /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services/">Treatments</Link><span>/</span>{s.title}
          </div>
          <div className="svc-tag"><span></span>{s.tag}</div>
          <h1 className="svc-h1">{s.title}</h1>
          <p className="svc-lead">{s.lead}</p>
          <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: '12px', marginTop: '28px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: '12px', padding: '14px 22px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold2)' }}>From</span>
            <span style={{ fontFamily: 'var(--serif)', fontSize: '34px', fontWeight: 700, color: '#fff' }}><span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginRight: '4px' }}>PKR</span>{s.price}</span>
            <span style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.55)' }}>{s.priceNote}</span>
          </div>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Ask us on WhatsApp →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      {/* 2 + 3 — WHAT IT IS / WHEN YOU NEED IT */}
      <section className="svc-body" id="details">
        <div className="svc-in">
          <div className="svc-row">
            <div className="svc-row-text rl">
              <div className="svc-row-tag">What it is</div>
              <h2>Plain and simple</h2>
              <p>{s.whatItIs}</p>
            </div>
            <div className="svc-row-img rr" style={{ background: 'var(--off)', boxShadow: 'none', border: '1px solid var(--gl)', height: 'auto' }}>
              <div style={{ padding: '36px 34px' }}>
                <div className="svc-row-tag">When you may need it</div>
                <ul>{s.whenYouNeedIt.map((b, i) => <li key={i}>{b}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — HOW WE DO IT */}
      <section className="svc-features">
        <div className="svc-feat-in">
          <div className="svc-feat-head rv">
            <h2>How we do it</h2>
            <p>Calm, step by step, and explained as we go — so you always know what’s happening and why.</p>
          </div>
          <div className="svc-fgrid">
            {s.howWeDoIt.map((h, i) => (
              <div className="svc-fcard rv" key={i}>
                <div className="svc-fcard-icon" style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '20px' }}>{i + 1}</div>
                <h3>{h.step}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — WHAT WE USE (trust through specifics) */}
      <section className="svc-strip">
        <div className="svc-strip-in" style={{ gridTemplateColumns: '1fr' }}>
          <div className="svc-info rv" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px', alignItems: 'center' }}>
            <div className="big" style={{ marginBottom: 0 }}>✓</div>
            <div>
              <h3>What we use — disclosed before we start</h3>
              <p>{s.whatWeUse}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — PRICING */}
      <section className="psnap" style={{ background: '#fff' }}>
        <div className="psnap-in" style={{ maxWidth: '820px' }}>
          <div className="psnap-head">
            <div className="eyebrow gold center"><span className="bar"></span>Posted Pricing</div>
            <h2 className="sec-h2">What it costs</h2>
            <p className="sec-lead ink" style={{ maxWidth: '560px', margin: '12px auto 0' }}>The price you see is the price you pay. Prices include consultation and any standard X-ray.</p>
          </div>
          <div className="ptable">
            {s.pricing.map((p, i) => (
              <div className="ptable-row" key={i}>
                <div className="ptable-name">{p.name}</div>
                <div className={`ptable-price${/free/i.test(p.price) ? ' free' : ''}`}>
                  {/free|included/i.test(p.price) ? p.price : <><span className="cur">PKR</span>{p.price}</>}
                </div>
              </div>
            ))}
          </div>
          <p className="psnap-note">Complex cases may need extra steps — we explain and price those in writing <em>before</em> any work starts. <Link href="/pricing/" style={{ color: 'var(--teal)', fontWeight: 600 }}>See the full price list →</Link></p>
        </div>
      </section>

      {/* 7 — PATIENT STORIES */}
      <section className="svc-related" style={{ background: 'var(--off)' }}>
        <div className="svc-related-in" style={{ maxWidth: '1000px' }}>
          <div className="svc-related-head rv"><h2>What patients say</h2></div>
          <div className="rev-grid" style={{ gridTemplateColumns: s.stories.length === 2 ? '1fr 1fr' : 'repeat(3,1fr)' }}>
            {s.stories.map((t, i) => (
              <div className="tcard rv" key={i} style={{ width: 'auto' }}>
                <div className="tstars">★★★★★</div>
                <p className="tquote">{t.quote}</p>
                <div className="tauthor"><div><div className="tname">{t.name}</div><div className="trole">{t.area}, Lahore</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — FAQ + CTA */}
      <section className="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div className="eyebrow teal center"><span className="bar"></span>Honest Answers</div>
            <h2 className="sec-h2">Questions about {s.nav.toLowerCase()}</h2>
          </div>
          <div className="faq-list">
            {s.faqs.map((f, i) => (
              <div className={`faq-item rv`} key={i}>
                <div className="faq-question">{f.q} <div className="faq-icon">+</div></div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Have a question, or a quote from another clinic?</h2>
          <p>Message us on WhatsApp — we’ll answer honestly, tell you if you even need treatment, and give you a free second opinion. No pressure, no upselling.</p>
          <div className="svc-cta-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="svc-related">
        <div className="svc-related-in">
          <div className="svc-related-head rv"><h2>Explore more treatments</h2></div>
          <div className="svc-rgrid">
            {s.related.map((slug) => {
              const r = bySlug[slug];
              if (!r) return null;
              return (
                <Link href={`/services/${r.slug}/`} className="svc-rcard" key={slug}>
                  <div className="svc-rcard-img"><Img id={r.heroId} w={500} h={320} alt={r.nav} /></div>
                  <div className="svc-rcard-body">
                    <h3>{r.nav}</h3>
                    <p>{r.short}</p>
                    <span className="lnk">From PKR {r.price} →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
