// ── Ohud Dental — public price list (single source of truth) ──
// The blueprint's defining trust differentiator: every price published, the
// quote you receive is the bill you pay. Prices in PKR.
//
// Source: the clinic's own rate sheet ("Ohud Dental Prices"). The published
// figure is the clinic's current (post-discount) rate. Every row here comes
// from that sheet — there are no estimated or placeholder figures. Where the
// sheet gives a range, the range is published rather than a single number, and
// the reason it varies is stated in the row description.
//
// Three treatments have no rate on the sheet yet (flexible denture, metal
// braces, ceramic braces). Those are published as "Ask when booking" rather
// than guessed at. To price one later, just replace the string with the figure.

// ── Opening-period free consultation ──
// The clinic opened on 18 August 2026. Consultations are free for the first two
// months — to 18 October 2026 — after which the rate sheet's PKR 2,000 applies.
//
// The end date is stated in the copy on purpose: this is a statically exported
// site, so if nobody rebuilds after the date, a patient still reads "free until
// 18 October 2026" and knows the offer has ended, rather than a bare "Free"
// that has quietly become untrue.
//
// WHEN THE FREE PERIOD ENDS, set `free: false`. That switches the /pricing row,
// its note, and the /faq answer together. Three things it does NOT switch, and
// which need a human decision at the same time:
//   1. the "Free consultation" trust claims on the homepage, /services/* pages
//      and app/page.js `promises`;
//   2. the children's "Child consultation — Free" row and the childrens-dentistry
//      hero `price: 'Free consultation'` in lib/services.js;
//   3. the emergency page's "Emergency assessment & pain relief — Free" row.
// The free SECOND OPINION is a separate, permanent promise — leave it alone.
export const consultation = {
  free: true,
  openedOn: '18 August 2026',
  freeUntil: '18 October 2026',
  standardPrice: '2,000',
};

// Six headline procedures, kept in sync with the rate sheet.
// NOTE: currently unused — the homepage deliberately lists treatments without
// prices (see app/page.js §B) and /pricing renders `priceList` below. Kept
// accurate so it stays safe to use if a priced summary is ever reinstated.
export const headline = [
  { name: 'Root Canal Treatment', price: '15,000', slug: 'root-canal-treatment-lahore', icon: 'tooth' },
  { name: 'Scaling & Cleaning', price: '5,000', slug: 'scaling-cleaning-lahore', icon: 'sparkle' },
  { name: 'Tooth-Coloured Filling', price: '5,000 – 6,000', slug: 'dental-fillings-lahore', icon: 'check' },
  { name: 'PFM Crown', price: '18,000', slug: 'dental-crowns-lahore', icon: 'shield' },
  { name: 'Zirconia Crown', price: '30,000', slug: 'dental-crowns-lahore', icon: 'star' },
  { name: 'Tooth Extraction', price: '5,000', slug: 'tooth-extraction-lahore', icon: 'heart' },
];

// Full categorised price list for the /pricing page.
export const priceList = [
  {
    category: 'Diagnostic & Consultation',
    note: consultation.free
      ? `Your first visit and honest assessment cost nothing — free for our first two months open, to ${consultation.freeUntil}.`
      : 'Your second opinion still costs nothing, whatever another clinic has quoted you.',
    items: [
      {
        name: 'Consultation & full examination',
        desc: consultation.free
          ? `A calm, unhurried check of your teeth, gums and bite. We opened on ${consultation.openedOn} and it is free for our first two months, to ${consultation.freeUntil} — PKR ${consultation.standardPrice} after that. We will tell you which applies before you come in.`
          : 'A calm, unhurried check of your teeth, gums and bite, with everything we find explained in plain words.',
        price: consultation.free ? 'Free' : consultation.standardPrice,
      },
      { name: 'Free second opinion', desc: 'Bring a quote or treatment plan from any other clinic.', price: 'Free' },
      { name: 'Digital X-ray (single film)', desc: 'Low-radiation digital imaging, included with your examination.', price: 'Included' },
    ],
  },
  {
    category: 'Preventive',
    note: 'Keeping your own teeth healthy is always cheaper than replacing them.',
    items: [
      { name: 'Scaling & polishing', desc: 'Professional cleaning to remove hardened plaque, followed by a polish.', price: '5,000' },
      { name: 'Deep cleaning', desc: 'For gum disease — a thorough clean below the gum line.', price: '12,000' },
      { name: 'Night guard', desc: 'A custom guard that protects your teeth from night-time grinding.', price: '8,000' },
    ],
  },
  {
    category: 'Restorative (Fillings)',
    note: 'Mercury-free, tooth-coloured materials. Brands disclosed before we start.',
    items: [
      { name: 'Tooth-coloured composite filling', desc: 'Natural, mercury-free restoration. Where it falls in this range depends on the size of the cavity — and we tell you which before we begin.', price: '5,000 – 6,000' },
    ],
  },
  {
    category: 'Endodontic (Root Canal)',
    note: 'Modern, comfortable rotary endodontics — usually in a single visit.',
    items: [
      { name: 'Root canal treatment', desc: 'One price, front tooth or molar — no surcharge for a harder tooth.', price: '15,000' },
      { name: 'Root canal re-treatment', desc: 'Re-doing a tooth treated previously somewhere else — the same price as a first root canal.', price: '15,000' },
    ],
  },
  {
    category: 'Prosthodontic (Crowns & Dentures)',
    note: 'We tell you the material brand and its halal status before any work begins.',
    items: [
      { name: 'Metal crown (manual)', desc: 'Hand-finished metal crown — our most affordable way to protect a back tooth.', price: '12,000' },
      { name: 'Metal crown', desc: 'Lab-made and hard-wearing, for back teeth.', price: '18,000' },
      { name: 'PFM crown', desc: 'Porcelain-fused-to-metal — strong and natural-looking.', price: '18,000' },
      { name: 'Zirconia crown', desc: 'Metal-free and highly aesthetic.', price: '30,000' },
      { name: 'E-Max crown', desc: 'Premium all-ceramic — the most lifelike option for a front tooth.', price: '35,000' },
      { name: 'Acrylic denture', desc: 'Removable replacement for missing teeth.', price: '120,000' },
      { name: 'Flexible denture', desc: 'Comfortable, metal-free clasps. The price depends on the appliance your mouth needs, so we confirm it in writing when you book.', price: 'Ask when booking' },
    ],
  },
  {
    category: 'Cosmetic',
    note: 'We recommend cosmetic work only when you ask for it — never as an upsell.',
    items: [
      { name: 'Porcelain veneer (per tooth)', desc: 'Custom-crafted, stain-resistant porcelain — priced per tooth, so you only pay for the teeth that need it.', price: '25,000' },
      { name: 'Composite veneers (full set)', desc: 'Same-day, minimal-prep aesthetic correction across your front teeth.', price: '50,000' },
      { name: 'In-clinic teeth whitening', desc: 'Supervised, enamel-safe brightening. This is the price for whitening alone — if your teeth need scaling first, that is charged separately.', price: '20,000' },
    ],
  },
  {
    category: 'Surgical',
    note: 'If a tooth can honestly be saved, we will tell you — extraction is the last option.',
    items: [
      { name: 'Simple extraction', desc: 'Straightforward tooth removal.', price: '5,000' },
      { name: 'Surgical extraction', desc: 'For broken or difficult teeth. Where it falls in this range depends on how the tooth is sitting — confirmed after the X-ray, before we start.', price: '8,000 – 10,000' },
      { name: 'Wisdom tooth (surgical)', desc: 'Impacted wisdom tooth removal. Priced after the X-ray and before we begin, never afterwards.', price: '18,000 – 20,000' },
      { name: 'Dental implant with PFM crown', desc: 'The titanium implant and the crown that goes on it — one price for the finished tooth.', price: '100,000' },
      { name: 'Dental implant with zirconia crown', desc: 'The same implant, finished with a metal-free zirconia crown.', price: '110,000' },
    ],
  },
  {
    category: 'Orthodontic (Braces & Aligners)',
    note: 'Full-treatment prices, payable in instalments. No surprise add-ons.',
    items: [
      { name: 'Metal braces (full treatment)', desc: 'Reliable correction for most cases. The full-treatment price depends on your case, so we give you the exact figure in writing when you book.', price: 'Ask when booking' },
      { name: 'Ceramic braces (full treatment)', desc: 'Tooth-coloured and more discreet. As with metal braces, we confirm the exact price at your appointment, before anything begins.', price: 'Ask when booking' },
      { name: 'Clear aligners (full treatment)', desc: 'Near-invisible, removable trays. Where it falls in this range depends on how many trays your case needs.', price: '150,000 – 170,000' },
      { name: 'Retainer', desc: 'Holds your new smile in place after treatment.', price: '8,000' },
    ],
  },
  {
    category: "Children's Dentistry",
    note: 'Gentle care for little patients — with a parent beside them the whole time.',
    items: [
      { name: 'Child consultation', desc: 'A friendly first visit.', price: 'Free' },
      { name: "Child's filling", desc: 'Tooth-coloured and quick.', price: '4,000' },
      { name: "Child's extraction", desc: 'Comfortable removal of a baby tooth.', price: '2,500' },
    ],
  },
];
