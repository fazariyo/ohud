import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, brand } from '@/lib/brand';

export const metadata = {
  title: 'Family Plan — One Clinic for Three Generations',
  description:
    'The Ohud Dental family plan: PKR 22,000/year covers a family of four for check-ups, scaling, cleaning and X-rays, plus 10% off all treatments. One trusted dentist for grandparents, parents and children in Lahore.',
};

export default function FamilyPage() {
  const wa = waLink('Assalamu alaikum / Hello — I’d like to join the Ohud Dental family plan.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={3845745} w={1900} h={1100} alt="Ohud Dental family plan in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Family Plan</div>
          <div className="svc-tag"><span></span>The Family Anchor</div>
          <h1 className="svc-h1">One clinic. Three generations.</h1>
          <p className="svc-lead">From your child’s first tooth to your parents’ dentures, one trusted dentist for the whole household — at a fixed annual price that makes caring for everyone affordable.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Join the family plan →</a>
            <Link href="/pricing/" className="bghost">See all prices →</Link>
          </div>
        </div>
      </section>

      <section className="famhl" style={{ paddingTop: '90px' }}>
        <div className="famhl-in">
          <div className="famhl-glow"></div>
          <div>
            <div className="eyebrow gold"><span className="bar"></span>What you pay</div>
            <h2>Everything routine, covered for the year.</h2>
            <p>One simple annual fee keeps your whole family’s preventive care sorted — so small problems get caught early, before they become painful and expensive. And every other treatment is 10% off, at our already-posted prices.</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Join on WhatsApp →</a>
          </div>
          <div className="fam-price">
            <div className="amt">PKR 22,000</div>
            <div className="per">per year · family of four</div>
            <ul>
              <li>Two check-ups per member, per year</li>
              <li>Scaling &amp; cleaning for every member</li>
              <li>X-rays where clinically needed</li>
              <li>10% off all other treatments</li>
              <li>Priority WhatsApp booking</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-sec" style={{ paddingTop: '20px' }}>
        <div className="prose-in">
          <h2>Why a family clinic matters here</h2>
          <p>In Pakistani households, one person usually carries the health decisions for everyone — the children, a spouse, and ageing parents. When that person trusts a clinic, the whole family is looked after in one place, by people who know their history.</p>
          <p>That is the relationship the family plan is built for. Not a discount card — a standing arrangement with a dentist your family knows, who treats your elders with patience and your children with calm.</p>
          <h3>Common questions</h3>
          <p><strong>Can I add more than four people?</strong><br />Yes — additional family members can be added at a small per-person rate. Message us and we’ll tailor it to your household.</p>
          <p><strong>Does it cover treatments like fillings or crowns?</strong><br />The annual fee covers routine preventive care. Treatments are charged at our posted prices with 10% off for plan members — always in writing, always honoured.</p>
          <p><strong>What if a member needs a female dentist?</strong><br />The <Link href="/women/">Ohud Sisters</Link> pathway is available to every family member who would prefer it.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Become the family we look after.</h2>
          <p>Message us on WhatsApp to join the family plan, or to ask anything about how it works. No pressure — we’ll explain it plainly.</p>
          <div className="svc-cta-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Join the family plan →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
