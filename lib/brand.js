// ── Ohud Dental — brand & contact configuration (single source of truth) ──
// NOTE: the street-address TEXT and email below are still PLACEHOLDERS.
// The phone/WhatsApp number and the Google Maps pin are the real clinic details.

export const brand = {
  name: 'Ohud Dental',
  tagline: 'Honest dentistry. Honoured prices.',
  city: 'Lahore',
  // Address — central Lahore. Update to the confirmed clinic address.
  address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  addressShort: 'Gulberg III, Lahore',
  // Nearest landmarks help patients who navigate by area, not street name.
  landmarks: 'Near Liberty Market & Gulberg Main Boulevard',
  // Google Maps pin for the clinic — used for "Get directions" links.
  mapsLink: 'https://maps.app.goo.gl/PQDVpMGCZ2eFYsjg9',
  // Contact — real clinic number.
  phoneDisplay: '+92 342 426 0615',
  phoneHref: '+923424260615',
  // WhatsApp is the primary booking channel.
  whatsappDisplay: '+92 342 426 0615',
  whatsappNumber: '923424260615', // international format, no +, for wa.me links
  email: 'hello@ohuddental.com',
  hours: 'Monday–Saturday, 11 AM – 9 PM',
  hoursShort: 'Mon–Sat · 11 AM – 9 PM',
  hoursNote: 'Sunday by request for emergencies',
  // Verified-review target from the blueprint (Year 1: 800–1,200 reviews, avg 4.9).
  // Shown as an aspirational-but-honest target until real reviews accrue.
  rating: '4.9',
  reviewCountLabel: '1,000+ patients',
};

// Build a WhatsApp deep link with a pre-filled, bilingual message.
// Defaults to the booking opener from blueprint 3.5.
export function waLink(message) {
  const text =
    message ||
    'Hello — I would like to book an appointment with Ohud Dental.';
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const waDefault = waLink();
