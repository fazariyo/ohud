import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { priceList } from '@/lib/pricing';
import { waDefault, waLink, brand } from '@/lib/brand';

export const metadata = {
  title: 'Price List — Every Price, Published',
  description:
    'Ohud Dental publishes every price: root canals, crowns, scaling, fillings, implants, braces and more, in Lahore. The price you see is the price you pay. No hidden fees, no “DM for price.”',
};

const disclaimers = [
  { h: 'Consultation & X-ray included', p: 'Listed prices include your consultation and any standard X-ray needed to diagnose. Your first visit and second opinion are free.' },
  { h: 'Complex cases, explained first', p: 'If a case needs additional steps, we explain them and put the full cost in writing before any work begins — never as a mid-treatment surprise.' },
  { h: 'Materials disclosed', p: 'We tell you the brand of every material before we use it, and confirm its halal status on request. No mystery materials.' },
];

export default function PricingPage() {
  const wa = waLink('Hello — I have a question about your prices / a quote from another clinic.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={3845745} w={1900} h={1100} alt="Ohud Dental published price list, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Pricing</div>
          <div className="svc-tag"><span></span>Posted Prices</div>
          <h1 className="svc-h1">Every price. Every procedure. Nothing hidden.</h1>
          <p className="svc-lead">We publish our prices because trust starts here. The price you see is the price you pay — explained upfront, put in writing, and honoured, with no hidden charges.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Ask about a price →</a>
            <Link href="/second-opinion/" className="bghost">Free second opinion →</Link>
          </div>
        </div>
      </section>

      <section className="psnap" style={{ background: '#fff' }}>
        <div className="psnap-in" style={{ maxWidth: '900px' }}>
          {priceList.map((cat, ci) => (
            <div className="pcat" key={ci}>
              <div className="pcat-head">
                <h2 className="pcat-title">{cat.category}</h2>
                <p className="pcat-note">{cat.note}</p>
              </div>
              <div className="ptable">
                {cat.items.map((it, i) => (
                  <div className="ptable-row" key={i}>
                    <div>
                      <div className="ptable-name">{it.name}</div>
                      <div className="ptable-desc">{it.desc}</div>
                    </div>
                    <div className={`ptable-price${/free|included/i.test(it.price) ? ' free' : ''}`}>
                      {/free|included/i.test(it.price) ? it.price : <><span className="cur">PKR</span>{it.price}</>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Honest disclaimers */}
          <div className="pdisc">
            {disclaimers.map((d, i) => (
              <div className="pdisc-card" key={i}>
                <h4>{d.h}</h4>
                <p>{d.p}</p>
              </div>
            ))}
          </div>

          {/* Why we publish our prices */}
          <div className="pwhy">
            <h3>Why we publish our prices</h3>
            <p>In Pakistan, almost no clinic shows its prices. You are asked to call, to DM, to come in — and only then is a number quoted, often shaped by how you look or how worried you seem. We think that is the opposite of trust.</p>
            <p>So we made a different choice. Every price is here, in the open, the same for everyone — the wedding-prep patient and the charity-day patient alike. We believe an honest price is the right one, and over-quoting is not. The price we write is the price you pay, and we would rather earn less, fairly, than more by confusing you.</p>
            <div style={{ marginTop: '26px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
              <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
            </div>
          </div>

          <p className="psnap-note" style={{ marginTop: '34px' }}>
            Have a treatment plan or quote from another clinic? <Link href="/second-opinion/" style={{ color: 'var(--teal)', fontWeight: 600 }}>Get a free, no-strings second opinion →</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
