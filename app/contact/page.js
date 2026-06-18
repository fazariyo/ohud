import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import ContactForm from '@/components/ContactForm';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Contact & Book — Ohud Dental, Lahore',
  description:
    'Book your visit to Ohud Dental in Lahore. The fastest way is WhatsApp — we reply within minutes during clinic hours. Find our address, hours, phone, email, and map.',
};

export default function ContactPage() {
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={6528858} w={1900} h={1100} alt="Contact and book Ohud Dental, Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Contact &amp; Book</div>
          <div className="svc-tag"><span></span>Contact &amp; Book</div>
          <h1 className="svc-h1">The fastest way to book is WhatsApp.</h1>
          <p className="svc-lead">Tap below and your details go straight to our front desk. We reply within minutes during clinic hours — usually with options, the exact location, and a price for what you need.</p>
          <div className="svc-hero-ctas">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="bwa">Book on WhatsApp →</a>
            <a href={`tel:${brand.phoneHref}`} className="bghost">Call {brand.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo rl">
            <div className="eyebrow gold"><span className="bar"></span>Book a Visit</div>
            <h2 className="sec-h2 light">The fastest way to book<br />is <span className="hl gold">WhatsApp</span></h2>
            <p className="sdesc" style={{ color: 'rgba(255,255,255,0.6)' }}>Send us your details and we’ll reply within minutes during clinic hours — with options, directions, and an honest price for what you need. Prefer to call or email? Those work too.</p>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></div><div><div className="cdet-lbl">Clinic</div><div className="cdet-val">{brand.address}<br /><span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{brand.landmarks}</span></div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div><div><div className="cdet-lbl">Phone / WhatsApp</div><div className="cdet-val">{brand.whatsappDisplay}</div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg></div><div><div className="cdet-lbl">Hours</div><div className="cdet-val">{brand.hours}<br /><span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{brand.hoursNote}</span></div></div></div>
            <div className="cdet"><div className="cdet-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div><div><div className="cdet-lbl">Email</div><div className="cdet-val">{brand.email}</div></div></div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="prose-sec" style={{ paddingBottom: '70px' }}>
        <div className="prose-in" style={{ maxWidth: '900px' }}>
          <div className="eyebrow teal"><span className="bar"></span>Find Us</div>
          <h2 style={{ marginTop: '0' }}>How to reach the clinic</h2>
          <p style={{ marginBottom: '28px' }}>We’re at {brand.address} — {brand.landmarks}. If you navigate by area rather than street, head for Gulberg Main Boulevard and look for the landmarks above. Open {brand.hours}.</p>
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
            width="100%"
            height="380"
            style={{ border: 0, borderRadius: '18px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ohud Dental location"
          ></iframe>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Ready when you are.</h2>
          <p>The quickest way to book is a quick message. We’ll take it from there — calmly and at a fair, posted price.</p>
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
