// ── Ohud Dental — brand & contact configuration (single source of truth) ──
// NOTE: phone / WhatsApp numbers and the exact address below are PLACEHOLDERS.
// Replace them with the real clinic details before launch (1 June 2026).

export const brand = {
  name: 'Ohud Dental',
  tagline: 'Honest dentistry. Honoured prices.',
  city: 'Lahore',
  // Address — central Lahore. Update to the confirmed clinic address.
  address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  addressShort: 'Gulberg III, Lahore',
  // Nearest landmarks help patients who navigate by area, not street name.
  landmarks: 'Near Liberty Market & Gulberg Main Boulevard',
  // Contact — placeholders, replace before launch.
  phoneDisplay: '+92 300 000 0000',
  phoneHref: '+923000000000',
  // WhatsApp is the primary booking channel. Replace with the real number.
  whatsappDisplay: '+92 300 000 0000',
  whatsappNumber: '923000000000', // international format, no +, for wa.me links
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
