// ── Ohud Dental — public price list (single source of truth) ──
// The blueprint's defining trust differentiator: every price published, the
// quote you receive is the bill you pay. Prices in PKR.
// Headline figures (RCT 15,000 · Scaling 6,000 · Filling 2,500 · PFM 11,000 ·
// Zirconia 25,000 · Extraction 2,000) are fixed by the blueprint. The remaining
// rows are fair-priced mid-tier figures — confirm with the clinical team before launch.

// Six headline procedures shown on the homepage (Sections C & E).
export const headline = [
  { name: 'Root Canal Treatment', price: '15,000', slug: 'root-canal-treatment-lahore', icon: 'tooth' },
  { name: 'Scaling & Cleaning', price: '6,000', slug: 'scaling-cleaning-lahore', icon: 'sparkle' },
  { name: 'Tooth-Coloured Filling', price: '2,500', slug: 'dental-fillings-lahore', icon: 'check' },
  { name: 'PFM Crown', price: '11,000', slug: 'dental-crowns-lahore', icon: 'shield' },
  { name: 'Zirconia Crown', price: '25,000', slug: 'dental-crowns-lahore', icon: 'star' },
  { name: 'Tooth Extraction', price: '2,000', slug: 'tooth-extraction-lahore', icon: 'heart' },
];

// Full categorised price list for the /pricing page.
export const priceList = [
  {
    category: 'Diagnostic & Consultation',
    note: 'Your first visit and honest assessment cost nothing.',
    items: [
      { name: 'Consultation & full examination', desc: 'A calm, unhurried check of your teeth, gums and bite.', price: 'Free' },
      { name: 'Free second opinion', desc: 'Bring a quote or treatment plan from any other clinic.', price: 'Free' },
      { name: 'Digital X-ray (single film)', desc: 'Low-radiation digital imaging.', price: 'Included' },
      { name: 'OPG / full-mouth X-ray', desc: 'A complete panoramic view when a full picture is needed.', price: '2,500' },
    ],
  },
  {
    category: 'Preventive',
    note: 'Keeping your own teeth healthy is always cheaper than replacing them.',
    items: [
      { name: 'Scaling & polishing', desc: 'Professional cleaning to remove hardened plaque.', price: '6,000' },
      { name: 'Deep cleaning (per quadrant)', desc: 'For gum disease — below the gum line.', price: '4,000' },
      { name: 'Fluoride application', desc: 'Strengthens enamel against decay.', price: '2,000' },
      { name: 'Fissure sealant (per tooth)', desc: 'A protective layer for back teeth, ideal for children.', price: '2,500' },
    ],
  },
  {
    category: 'Restorative (Fillings)',
    note: 'Mercury-free, tooth-coloured materials. Brands disclosed before we start.',
    items: [
      { name: 'Composite filling (single surface)', desc: 'Natural, tooth-coloured restoration.', price: '2,500' },
      { name: 'Composite filling (large / multi-surface)', desc: 'For wider cavities.', price: '4,000' },
      { name: 'Glass-ionomer (GIC) filling', desc: 'A fluoride-releasing option.', price: '2,000' },
      { name: 'Post & core build-up', desc: 'Rebuilds a tooth before a crown.', price: '5,000' },
    ],
  },
  {
    category: 'Endodontic (Root Canal)',
    note: 'Modern, comfortable rotary endodontics — usually in a single visit.',
    items: [
      { name: 'Root canal — front tooth', desc: 'Single-rooted teeth.', price: '15,000' },
      { name: 'Root canal — molar', desc: 'Multi-rooted back teeth.', price: '18,000' },
      { name: 'Root canal re-treatment', desc: 'Re-doing a previously treated tooth.', price: '22,000' },
      { name: 'Pulpotomy (baby tooth)', desc: 'Gentle nerve treatment for children.', price: '5,000' },
    ],
  },
  {
    category: 'Prosthodontic (Crowns & Dentures)',
    note: 'We tell you the material brand and its halal status before any work begins.',
    items: [
      { name: 'PFM crown', desc: 'Porcelain-fused-to-metal — strong and natural-looking.', price: '11,000' },
      { name: 'Zirconia crown', desc: 'Premium, metal-free, highly aesthetic.', price: '25,000' },
      { name: 'Full-metal crown', desc: 'Durable option for back teeth.', price: '9,000' },
      { name: 'Acrylic denture (per arch)', desc: 'Affordable removable replacement.', price: '18,000' },
      { name: 'Flexible denture (per arch)', desc: 'Comfortable, metal-free clasps.', price: '30,000' },
      { name: 'Implant crown', desc: 'The crown fitted onto a dental implant.', price: '40,000' },
    ],
  },
  {
    category: 'Cosmetic',
    note: 'We recommend cosmetic work only when you ask for it — never as an upsell.',
    items: [
      { name: 'Composite veneer (per tooth)', desc: 'Same-day, minimal-prep aesthetic correction.', price: '8,000' },
      { name: 'Porcelain veneer (per tooth)', desc: 'Custom-crafted, stain-resistant porcelain.', price: '30,000' },
      { name: 'In-clinic teeth whitening', desc: 'Supervised, enamel-safe brightening.', price: '20,000' },
      { name: 'Take-home whitening kit', desc: 'Custom trays and professional-grade gel.', price: '15,000' },
      { name: 'Composite bonding (per tooth)', desc: 'Repairs chips and small gaps.', price: '6,000' },
    ],
  },
  {
    category: 'Surgical',
    note: 'If a tooth can honestly be saved, we will tell you — extraction is the last option.',
    items: [
      { name: 'Simple extraction', desc: 'Straightforward tooth removal.', price: '2,000' },
      { name: 'Surgical extraction', desc: 'For broken or difficult teeth.', price: '5,000' },
      { name: 'Wisdom tooth — simple', desc: 'Erupted wisdom tooth removal.', price: '6,000' },
      { name: 'Wisdom tooth — surgical', desc: 'Impacted wisdom tooth removal.', price: '12,000' },
      { name: 'Dental implant (single fixture)', desc: 'Titanium implant; crown priced separately.', price: '90,000' },
    ],
  },
  {
    category: 'Orthodontic (Braces & Aligners)',
    note: 'Full-treatment prices, payable in instalments. No surprise add-ons.',
    items: [
      { name: 'Metal braces (full treatment)', desc: 'Reliable correction for most cases.', price: '90,000' },
      { name: 'Ceramic braces (full treatment)', desc: 'Tooth-coloured, more discreet.', price: '130,000' },
      { name: 'Clear aligners (from)', desc: 'Near-invisible, removable trays.', price: '180,000' },
      { name: 'Retainer (per arch)', desc: 'Holds your new smile in place.', price: '8,000' },
    ],
  },
  {
    category: "Children's Dentistry",
    note: 'Gentle care for little patients — with a parent beside them the whole time.',
    items: [
      { name: 'Child consultation', desc: 'A friendly first visit.', price: 'Free' },
      { name: "Child's filling", desc: 'Tooth-coloured and quick.', price: '2,500' },
      { name: "Child's extraction", desc: 'Comfortable removal of a baby tooth.', price: '2,000' },
      { name: 'Space maintainer', desc: 'Holds space for an adult tooth to come through.', price: '8,000' },
    ],
  },
];
