'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LegalModal() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onClick = (e) => {
      const trigger = e.target.closest('[data-legal]');
      if (trigger) {
        e.preventDefault();
        setActive(trigger.getAttribute('data-legal'));
        document.body.style.overflow = 'hidden';
      }
    };
    document.addEventListener('click', onClick);
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);

  const close = () => { setActive(null); document.body.style.overflow = ''; };
  const is = (id) => `legal-content${active === id ? ' active' : ''}`;

  return (
    <div className={`modal${active ? ' active' : ''}`} id="legalModal">
      <div className="modal-overlay" onClick={close}></div>
      <div className="modal-content">
        <button className="modal-close" onClick={close} aria-label="Close">×</button>

        <div id="privacy-policy" className={is('privacy-policy')}>
          <h2 className="legal-title">Privacy Policy</h2>
          <div className="legal-text">
            <p>Last updated: June 2026</p>
            <p>OHUD Dental (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal and health information. This policy explains how we collect, use, and safeguard your data when you visit our clinic or website.</p>
            <h3>1. Information We Collect</h3>
            <p>We may collect your name, contact details (phone, email, address), and the health information necessary to provide safe and effective dental care, including your dental and medical history.</p>
            <h3>2. How We Use Your Information</h3>
            <p>Your information is used to provide treatment, schedule and confirm appointments, process insurance claims, send reminders, and improve our services. We never sell your personal data to third parties.</p>
            <h3>3. Confidentiality of Health Records</h3>
            <p>Your dental and medical records are kept strictly confidential and are accessed only by authorised clinical staff involved in your care, in line with professional and legal obligations.</p>
            <h3>4. Data Security</h3>
            <p>We use appropriate physical and digital safeguards to protect your information against loss, misuse, or unauthorised access.</p>
            <h3>5. Appointment Communications</h3>
            <p>If you provide your phone number, you consent to receive appointment confirmations and reminders via SMS, WhatsApp, or phone call. You may opt out at any time by replying STOP or informing our reception.</p>
            <h3>6. Your Rights</h3>
            <p>You may request access to, or correction of, your personal information held by us. Please contact us at info@ohuddentals.com for any privacy-related request.</p>
          </div>
        </div>

        <div id="terms-conditions" className={is('terms-conditions')}>
          <h2 className="legal-title">Terms &amp; Conditions</h2>
          <div className="legal-text">
            <p>Last updated: June 2026</p>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing the OHUD Dental website or using our services, you agree to be bound by these terms and all applicable laws of Pakistan. If you do not agree, please do not use this website.</p>
            <h3>2. Appointments &amp; Cancellations</h3>
            <p>We kindly ask that you provide reasonable notice if you need to reschedule or cancel an appointment, so we can offer the slot to another patient. Repeated no-shows may affect future bookings.</p>
            <h3>3. Treatment &amp; Estimates</h3>
            <p>All treatment plans and cost estimates are provided in good faith based on clinical examination. Final treatment may be adjusted if additional needs are identified during care, and any changes will be discussed with you first.</p>
            <h3>4. Website Content</h3>
            <p>The information on this website is for general educational purposes only and does not replace a professional dental consultation. Always seek advice from a qualified dentist regarding your specific condition.</p>
            <h3>5. Intellectual Property</h3>
            <p>All content on this website, including text, images, and the OHUD Dental name and logo, is the property of OHUD Dental and may not be copied or reused without permission.</p>
            <h3>6. Limitation of Liability</h3>
            <p>While we strive for accuracy, OHUD Dental is not liable for any decisions made solely on the basis of website content. Clinical outcomes depend on individual factors discussed during your consultation.</p>
            <h3>7. Governing Law</h3>
            <p>These terms are governed by the laws of Pakistan, and any disputes shall be subject to the jurisdiction of the courts of Lahore.</p>
          </div>
        </div>

        <div id="blog-post-1" className={is('blog-post-1')}>
          <h2 className="legal-title">5 Everyday Habits Quietly Damaging Your Teeth</h2>
          <div className="legal-text">
            <p><strong>Published:</strong> May 12, 2026 | <strong>Category:</strong> Oral Health</p>
            <p>You brush twice a day and avoid sweets — so why do problems still appear? The truth is that many small, everyday habits gradually wear down our teeth without us noticing. Here are five of the most common culprits we see at OHUD Dental.</p>
            <h3>1. Chewing Ice &amp; Hard Objects</h3>
            <p>Crunching ice, pens, or hard sweets puts huge pressure on your enamel and can cause tiny cracks or chips that worsen over time. Your teeth are for food, not tools.</p>
            <h3>2. Brushing Too Hard</h3>
            <p>Scrubbing aggressively doesn&apos;t clean better — it wears away enamel and irritates gums, leading to sensitivity and recession. Use a soft brush and gentle, circular motions.</p>
            <h3>3. Sipping Sugary &amp; Fizzy Drinks All Day</h3>
            <p>Constant sipping bathes your teeth in sugar and acid for hours. It&apos;s far kinder to your teeth to enjoy these drinks in one sitting and rinse with water afterwards.</p>
            <h3>4. Using Teeth to Open Things</h3>
            <p>Tearing packaging or opening bottle caps with your teeth is a fast route to a fracture. It only takes one wrong bite.</p>
            <h3>5. Skipping Regular Check-Ups</h3>
            <p>Many dental problems are painless until they&apos;re serious. Six-monthly check-ups let us catch issues early, when treatment is simple and affordable.</p>
            <p style={{ marginTop: '24px' }}><strong>Spotted a habit you recognise?</strong> A check-up can put your mind at ease. <a href="#contact" onClick={close}>Book a visit</a> with OHUD Dental today.</p>
          </div>
        </div>

        <div id="blog-post-2" className={is('blog-post-2')}>
          <h2 className="legal-title">Braces vs Clear Aligners: Which Is Right for You?</h2>
          <div className="legal-text">
            <p><strong>Published:</strong> April 3, 2026 | <strong>Category:</strong> Orthodontics</p>
            <p>If you want straighter teeth, you&apos;ve probably wondered whether traditional braces or modern clear aligners are the better choice. Both work beautifully — but they suit different needs. Here&apos;s how to decide.</p>
            <h3>Traditional &amp; Ceramic Braces</h3>
            <p>Braces are fixed to your teeth and are incredibly effective, especially for complex crowding, rotations, and bite problems. Ceramic braces use tooth-coloured brackets for a more discreet look. They&apos;re also often the most cost-effective option.</p>
            <h3>Clear Aligners</h3>
            <p>Aligners are removable, transparent trays that gently shift your teeth. They&apos;re nearly invisible, comfortable, and let you eat and brush normally — but they require discipline, as they must be worn 20–22 hours a day.</p>
            <h3>How to Choose</h3>
            <ul>
              <li><strong>Choose braces if:</strong> you have a complex case, want a lower cost, or prefer a fix-and-forget option.</li>
              <li><strong>Choose aligners if:</strong> appearance matters to you, you&apos;ll wear them consistently, and your case is mild to moderate.</li>
            </ul>
            <p style={{ marginTop: '24px' }}><strong>Ready for a straighter smile?</strong> Explore our <Link href="/services/braces-aligners-lahore/" onClick={close}>braces &amp; aligners page</Link> or <a href="#contact" onClick={close}>book a free assessment</a>.</p>
          </div>
        </div>

        <div id="blog-post-3" className={is('blog-post-3')}>
          <h2 className="legal-title">The Truth About Teeth Whitening: Safe &amp; Effective Options</h2>
          <div className="legal-text">
            <p><strong>Published:</strong> March 18, 2026 | <strong>Category:</strong> Cosmetic</p>
            <p>A brighter smile is one of the most requested treatments at our clinic. But with charcoal pastes, DIY hacks, and home kits everywhere, it&apos;s hard to know what&apos;s safe. Let&apos;s separate fact from fiction.</p>
            <h3>What Causes Stained Teeth?</h3>
            <p>Tea, coffee, cola, certain foods, smoking, and simply ageing all gradually darken teeth. Some stains sit on the surface; others build up within the tooth over time.</p>
            <h3>The Problem With DIY Trends</h3>
            <p>Charcoal and abrasive home remedies can scratch and thin your enamel, ironically making teeth look more yellow long-term. Unregulated kits can also irritate gums and cause uneven results.</p>
            <h3>Professional Whitening Done Right</h3>
            <p>Dentist-supervised whitening uses clinically proven gels with controlled concentrations. Your gums are protected, your sensitivity is managed, and the results are even, natural, and dramatically brighter.</p>
            <p style={{ marginTop: '24px' }}><strong>Want a safe, brighter smile?</strong> Visit our <Link href="/services/teeth-whitening-lahore/" onClick={close}>teeth whitening page</Link> or <a href="#contact" onClick={close}>book a consultation</a>.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
