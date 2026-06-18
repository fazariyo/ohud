import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Careers — Work at Ohud Dental, Lahore',
  description:
    'We hire dentists and staff who can tell a patient the truth — even when it means less work — and who treat every family with equal dignity. Fair wages, real training, a calm clinic. See open roles at Ohud Dental, Lahore.',
};

export default function CareersPage() {
  const wa = waLink('Assalamu alaikum / Hello — I’m interested in working at Ohud Dental.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6528862} w={1900} h={1100} alt="Working at Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Careers</div>
          <div className="svc-tag"><span></span>Careers</div>
          <h1 className="svc-h1">We hire people who can say: you don’t need this.</h1>
          <p className="svc-lead">The hardest, most valuable thing a dentist can do is talk a patient out of treatment they don’t need. If that sounds like the kind of work you want to do, we’d like to meet you.</p>
          <div className="svc-hero-ctas">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="bwa">Message us about a role →</a>
            <Link href="/about/" className="bgold">Read our promise →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>Who we look for</h2>
          <p>We look for dentists and staff who are comfortable telling a patient the truth — even when the truth means less work for us. People who can look at a tooth that could be saved and recommend saving it, rather than replacing it. People for whom “you don’t need this” is a normal sentence, not an awkward one.</p>
          <p>And we look for people who treat the labourer’s family with exactly the same dignity, patience, and quality of care as the wealthiest patient who walks in. If that is already how you work, you will feel at home here.</p>

          <h2>What we offer</h2>
          <ul>
            <li><strong>Fair wages (Barakah).</strong> Honest pay for honest work — we believe a fair wage is part of a blessed business.</li>
            <li><strong>Real training (Ihsan).</strong> Continuous learning and the best available materials, so you can do your work well.</li>
            <li><strong>A calm clinic.</strong> An unhurried, considered environment — no pressure to push procedures or rush patients.</li>
            <li><strong>Work you can feel good about.</strong> A clinic built on honesty, with a fixed share of revenue going to free care.</li>
          </ul>

          <h2>Open roles</h2>
          <p>These roles are illustrative of what we tend to need — but we are always glad to meet good people, whether or not a role is listed.</p>
          <ul>
            <li>General and family dentists</li>
            <li>A female dentist and assistant for our Ohud Sisters women’s pathway</li>
            <li>A front-desk WhatsApp coordinator</li>
            <li>A dental hygienist</li>
          </ul>

          <h2>How to apply</h2>
          <p>Message us on WhatsApp, or email <a href={`mailto:${brand.email}`}>{brand.email}</a> with a short note about yourself and your experience. Tell us, in your own words, about a time you told a patient something true that cost you a procedure. We read every message.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Good people are always welcome.</h2>
          <p>Whether a role is listed or not, we’d be glad to hear from you. Reach out and tell us a little about yourself.</p>
          <div className="svc-cta-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Message us on WhatsApp →</a>
            <a href={`mailto:${brand.email}`} className="bghost">Email {brand.email}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
