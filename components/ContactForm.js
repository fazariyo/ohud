'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!consent) { alert('Please check the consent box to proceed.'); return; }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="cform rr" style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: '#fff', marginBottom: '12px' }}>Thank you! 🦷</div>
        <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
          Your appointment request has been received. Our front desk will confirm your slot shortly via call or WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form className="cform rr" onSubmit={submit}>
      <div className="frow">
        <div className="fg"><label>First Name *</label><input type="text" placeholder="Ali" required /></div>
        <div className="fg"><label>Last Name *</label><input type="text" placeholder="Khan" required /></div>
      </div>
      <div className="frow">
        <div className="fg"><label>Email Address</label><input type="email" placeholder="you@email.com" /></div>
        <div className="fg"><label>Phone Number *</label><input type="tel" placeholder="0300 0000000" required /></div>
      </div>
      <div className="frow">
        <div className="fg"><label>Preferred Date</label><input type="text" placeholder="e.g. Sat afternoon" /></div>
        <div className="fg"><label>Insurance / Panel</label><input type="text" placeholder="e.g. EFU, Self-pay" /></div>
      </div>
      <div className="fg">
        <label>Treatment Needed *</label>
        <select required defaultValue="">
          <option value="" disabled>Select a treatment...</option>
          <option>Check-up &amp; Cleaning</option>
          <option>Cosmetic Dentistry / Veneers</option>
          <option>Teeth Whitening</option>
          <option>Braces / Clear Aligners</option>
          <option>Dental Implants</option>
          <option>Root Canal Treatment</option>
          <option>Children&apos;s Dentistry</option>
          <option>Dental Emergency / Pain</option>
        </select>
      </div>
      <div className="fg"><label>Tell Us More</label><textarea placeholder="Describe your concern, preferred timing, or any dental anxiety we should know about..."></textarea></div>

      <div className="fg-checkbox">
        <label className="cb-label">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
          <span className="cb-text">By checking this box, you agree to receive appointment confirmations and reminders from OHUD Dental via SMS, WhatsApp, or call. Message and data rates may apply. You can opt out anytime by replying STOP. See our <a href="#" data-legal="privacy-policy">Privacy Policy</a> | <a href="#" data-legal="terms-conditions">Terms &amp; Conditions</a>.</span>
        </label>
      </div>

      <button type="submit" className="bteal" style={{ width: '100%', justifyContent: 'center' }}>Request My Appointment →</button>
    </form>
  );
}
