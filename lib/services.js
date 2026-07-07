// ── Ohud Dental — treatment data (single source of truth) ──
// Used by the homepage service cards and the /services/[slug] pages.
// Slugs follow the SEO scheme from Blueprint §3.1 (…-lahore). Voice is calm,
// honest, plain — no superlatives ("best", "world-class", "#1"). Every page
// states a starting price (§3.9) and discloses materials + halal status (§2.5).

export function px(id, w, h) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}
export function fallback(w, h) {
  return `https://placehold.co/${w}x${h}/0F2C3F/B98841?text=Ohud+Dental`;
}

// Feature icons (raw SVG strings, rendered via dangerouslySetInnerHTML)
export const icons = {
  check: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  tooth: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.7-1.6-3.3-2-5-2C4.5 3.5 3 5.4 3 8c0 2 .6 3.4 1.2 6 .5 2.2 1 4.5 2.3 4.5 1.2 0 1.4-2 1.7-3.7.3-1.6.6-3.3 1.8-3.3s1.5 1.7 1.8 3.3c.3 1.7.5 3.7 1.7 3.7 1.3 0 1.8-2.3 2.3-4.5.6-2.6 1.2-4 1.2-6 0-2.6-1.5-4.5-4-4.5-1.7 0-3.3.4-5 2z"/></svg>`,
  sparkle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></svg>`,
  clock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  smile: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.6 12 2"/></svg>`,
  heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.6z"/></svg>`,
  scan: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>`,
  leaf: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>`,
  phone: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
};

export const services = [
  {
    slug: 'root-canal-treatment-lahore',
    nav: 'Root Canal Treatment',
    short: 'Save your natural tooth and end the pain — usually in a single visit.',
    title: 'Root Canal Treatment',
    tag: 'Endodontics',
    heroId: 16903641,
    price: '15,000',
    priceNote: 'front tooth · molar from PKR 18,000',
    lead: 'A bad toothache usually means the nerve inside the tooth is infected. A root canal removes the infection, ends the pain, and saves your natural tooth — so you don’t lose it. The price you see here is the price you pay.',
    whatItIs:
      'A root canal cleans out the infected nerve from inside a tooth, disinfects the space, and seals it. Despite its reputation, the procedure itself feels much like a routine filling once the area is numb. We finish by protecting the tooth — usually with a crown — so it works normally again.',
    whenYouNeedIt: [
      'A throbbing or constant toothache, especially at night',
      'Sharp pain when biting or with hot and cold',
      'A pimple or swelling on the gum near a tooth',
      'A tooth that has darkened or a deep, old cavity',
    ],
    howWeDoIt: [
      { step: 'We listen and examine', text: 'A calm check and a digital X-ray to confirm whether the nerve is really involved — and whether you actually need a root canal at all.' },
      { step: 'We numb you properly', text: 'We do not start until you are fully numb and comfortable. Most patients feel pressure, not pain.' },
      { step: 'We clean and seal', text: 'Using gentle rotary instruments, we remove the infection and seal the canals. Many single-rooted teeth are finished in one visit.' },
      { step: 'We protect the tooth', text: 'A crown restores full strength. We tell you the crown options and prices before we begin.' },
    ],
    whatWeUse:
      'We use established rotary endodontic files and biocompatible sealing materials. We will name the exact brand before treatment, and confirm halal status on request — no mystery materials, ever.',
    pricing: [
      { name: 'Root canal — front tooth', price: '15,000' },
      { name: 'Root canal — molar', price: '18,000' },
      { name: 'Re-treatment (re-doing an old RCT)', price: '22,000' },
      { name: 'Protective crown (PFM)', price: 'from 11,000' },
    ],
    stories: [
      { name: 'Imran', area: 'Johar Town', quote: 'I came in at night barely able to talk from the pain. They numbed it, explained every step, and the pain was gone the same day. It cost exactly what they quoted.' },
      { name: 'Rabia', area: 'Garden Town', quote: 'Another clinic quoted me almost three times this for the same tooth. Ohud showed me the price on the website first, so there were no surprises.' },
    ],
    faqs: [
      { q: 'Does a root canal hurt?', a: 'The infection hurts — the treatment relieves it. Once the tooth is numb, most patients feel only mild pressure. If you have ever found numbing difficult, tell us and we will take extra time.' },
      { q: 'Why is your price lower than the big clinics?', a: 'Because we publish a fair, clear price instead of quoting high and negotiating down. The quality of the materials and the care does not change with the price tag.' },
      { q: 'Do I really need a root canal?', a: 'Sometimes a filling is enough, and sometimes a tooth is better extracted. We will tell you honestly which it is — even when that means less work for us.' },
      { q: 'Can it be done in one visit?', a: 'Many front teeth and some molars are completed in a single appointment. We will tell you at the consultation.' },
    ],
    related: ['dental-crowns-lahore', 'emergency-dentist-lahore', 'dental-fillings-lahore'],
  },
  {
    slug: 'dental-crowns-lahore',
    nav: 'Crowns (PFM & Zirconia)',
    short: 'Strong, natural-looking caps that protect and restore a damaged tooth.',
    title: 'Dental Crowns — PFM & Zirconia',
    tag: 'Prosthodontics',
    heroId: 6502305,
    price: 'From 11,000',
    priceNote: 'PFM 11,000 · Zirconia 25,000',
    lead: 'A crown is a custom cap that covers a weak, cracked, or root-treated tooth — restoring its strength and shape. We offer porcelain-fused-to-metal and metal-free zirconia, and we tell you the real difference before you choose.',
    whatItIs:
      'A crown fully covers a tooth that has too little structure left to hold a filling — often after a root canal, a large fracture, or heavy wear. It is shaped and shaded to match your other teeth, then cemented into place.',
    whenYouNeedIt: [
      'A tooth that has had a root canal',
      'A large old filling that keeps breaking',
      'A cracked or badly worn tooth',
      'You want to protect a tooth rather than lose it',
    ],
    howWeDoIt: [
      { step: 'We assess honestly', text: 'Not every tooth needs a crown. If a filling will do, we say so.' },
      { step: 'We prepare and shade-match', text: 'The tooth is gently shaped and an impression or digital scan is taken. We match the colour to your natural teeth.' },
      { step: 'We fit and check the bite', text: 'Your crown is cemented and adjusted until it feels like your own tooth.' },
    ],
    whatWeUse:
      'PFM crowns use a metal base under porcelain; zirconia crowns are metal-free and more translucent. We disclose the lab and material brand, and confirm halal status of cements and materials on request.',
    pricing: [
      { name: 'PFM crown', price: '11,000' },
      { name: 'Zirconia crown', price: '25,000' },
      { name: 'Full-metal crown', price: '9,000' },
      { name: 'Post & core build-up (if needed)', price: '5,000' },
    ],
    stories: [
      { name: 'Saadia', area: 'Model Town', quote: 'They explained PFM vs zirconia in plain Urdu and never pushed the expensive one. I chose PFM and it looks completely natural.' },
      { name: 'Tariq', area: 'Faisal Town', quote: 'Honest people. They told me the brand of the crown before fitting it. I’ve never had a dentist do that.' },
    ],
    faqs: [
      { q: 'PFM or zirconia — which should I choose?', a: 'PFM is strong and affordable and works well for most teeth. Zirconia is metal-free, more translucent, and best for front teeth where appearance matters most. We will recommend based on your tooth, not the price.' },
      { q: 'How long does a crown last?', a: 'With good care, many years — often a decade or more. We will show you exactly how to look after it.' },
      { q: 'Is the price per tooth?', a: 'Yes, the listed price is per crown, and it includes the fitting. Any build-up needed first is shown separately and in writing before we start.' },
    ],
    related: ['root-canal-treatment-lahore', 'dental-implants-lahore', 'veneers-lahore'],
  },
  {
    slug: 'scaling-cleaning-lahore',
    nav: 'Scaling & Cleaning',
    short: 'Professional cleaning that protects your gums and freshens your mouth.',
    title: 'Scaling & Cleaning',
    tag: 'Preventive Care',
    heroId: 3845745,
    price: '6,000',
    priceNote: 'deep cleaning from PKR 4,000 per quadrant',
    lead: 'No matter how well you brush, hardened plaque (tartar) builds up over time. Professional scaling removes it gently, protecting your gums and your teeth. Scaling does not damage or loosen healthy teeth — that is a myth we are happy to bust.',
    whatItIs:
      'Scaling removes the hardened deposits that brushing cannot, above and below the gum line, followed by a polish. It is the single most cost-effective thing you can do to keep your own teeth for life.',
    whenYouNeedIt: [
      'Bleeding gums when you brush',
      'Persistent bad breath',
      'Visible yellow or brown tartar near the gum line',
      'It has been more than six months since your last cleaning',
    ],
    howWeDoIt: [
      { step: 'We check your gums', text: 'A quick assessment tells us whether a routine clean or a deeper clean is needed.' },
      { step: 'We scale gently', text: 'Ultrasonic scaling lifts away tartar comfortably. We go at your pace.' },
      { step: 'We polish and advise', text: 'A polish leaves your teeth smooth, plus simple home-care advice tailored to you.' },
    ],
    whatWeUse:
      'Sterile, single-use tips where applicable, and hospital-grade autoclave sterilisation for all instruments. Ask to see our sterilisation area any time.',
    pricing: [
      { name: 'Scaling & polishing', price: '6,000' },
      { name: 'Deep cleaning (per quadrant)', price: '4,000' },
      { name: 'Fluoride application', price: '2,000' },
    ],
    stories: [
      { name: 'Nadia', area: 'Gulberg', quote: 'I was scared scaling would loosen my teeth. They explained why that’s not true, and my gums stopped bleeding within a week.' },
      { name: 'Hassan', area: 'Garden Town', quote: 'Quick, gentle, and fairly priced. No upsell, just a clean and good advice.' },
    ],
    faqs: [
      { q: 'Does scaling damage or loosen teeth?', a: 'No. This is one of the most common myths in Pakistan. Scaling removes the tartar that is actually harming your gums. Healthy teeth are not affected.' },
      { q: 'Will it hurt?', a: 'For most people it is comfortable. If your gums are inflamed it may be sensitive, and we can numb the area for a deep clean.' },
      { q: 'How often should I get it done?', a: 'For most people, every six months. We will tell you honestly if you need it more or less often.' },
    ],
    related: ['dental-fillings-lahore', 'teeth-whitening-lahore', 'childrens-dentistry-lahore'],
  },
  {
    slug: 'tooth-extraction-lahore',
    nav: 'Tooth Extraction',
    short: 'Comfortable removal — but only when a tooth truly cannot be saved.',
    title: 'Tooth Extraction',
    tag: 'Oral Surgery',
    heroId: 5355715,
    price: 'From 2,000',
    priceNote: 'simple 2,000 · surgical/wisdom from 5,000',
    lead: 'Removing a tooth is our last option, not our first. If a tooth can honestly be saved, we will tell you. When extraction really is the right choice, we make it as calm and comfortable as possible.',
    whatItIs:
      'An extraction removes a tooth that is too damaged, infected, or impacted to keep. This includes wisdom teeth that are causing pain or crowding.',
    whenYouNeedIt: [
      'A tooth broken below the gum that cannot be restored',
      'Severe infection that root canal cannot resolve',
      'A painful or impacted wisdom tooth',
      'Crowding, on an orthodontist’s advice',
    ],
    howWeDoIt: [
      { step: 'We try to save it first', text: 'We will always tell you if a filling, root canal, or crown could keep the tooth instead.' },
      { step: 'We numb and reassure', text: 'You will be fully numb. We explain what you’ll feel and check in with you throughout.' },
      { step: 'We guide your healing', text: 'Clear aftercare and, where helpful, a plan to replace the tooth with an implant or bridge later.' },
    ],
    whatWeUse:
      'Sterile, single-use instruments where applicable and full autoclave sterilisation. Any medication is explained, and halal status confirmed on request.',
    pricing: [
      { name: 'Simple extraction', price: '2,000' },
      { name: 'Surgical extraction', price: '5,000' },
      { name: 'Wisdom tooth — simple', price: '6,000' },
      { name: 'Wisdom tooth — surgical', price: '12,000' },
    ],
    stories: [
      { name: 'Bilal', area: 'Wapda Town', quote: 'Two clinics wanted to pull my tooth. Ohud saved it with a root canal instead, for less money. That honesty earned my whole family.' },
      { name: 'Ayesha', area: 'Johar Town', quote: 'My wisdom tooth removal was far calmer than I feared. They talked me through every step.' },
    ],
    faqs: [
      { q: 'Will you try to save my tooth first?', a: 'Always. We only recommend extraction when keeping the tooth would do you more harm than good — and we explain why in plain language.' },
      { q: 'Does it hurt?', a: 'The area is fully numbed, so you feel pressure rather than pain. We give clear aftercare to keep you comfortable as it heals.' },
      { q: 'What about replacing the tooth?', a: 'We will talk you through implants, bridges, or dentures with honest prices — but there is no pressure to decide on the day.' },
    ],
    related: ['dental-implants-lahore', 'root-canal-treatment-lahore', 'emergency-dentist-lahore'],
  },
  {
    slug: 'dental-fillings-lahore',
    nav: 'Dental Fillings',
    short: 'Natural, tooth-coloured fillings that stop a cavity in its tracks.',
    title: 'Tooth-Coloured Fillings',
    tag: 'Restorative',
    heroId: 5355694,
    price: '2,500',
    priceNote: 'larger / multi-surface from PKR 4,000',
    lead: 'A small cavity caught early is quick, gentle, and inexpensive to fix. We use mercury-free, tooth-coloured composite that blends in so well most people won’t know it’s there.',
    whatItIs:
      'A filling cleans out decay and rebuilds the tooth with a tooth-coloured material that bonds to it. Treated early, a filling protects you from needing a root canal or crown later.',
    whenYouNeedIt: [
      'Sensitivity to sweet, hot, or cold',
      'A visible hole, mark, or dark spot on a tooth',
      'Food regularly catching in one spot',
      'A small chip or worn edge',
    ],
    howWeDoIt: [
      { step: 'We check and explain', text: 'We show you the cavity on the X-ray or photo so you can see exactly what we see.' },
      { step: 'We clean and fill', text: 'The decay is removed and the tooth rebuilt with composite, shaped to your bite.' },
      { step: 'We finish and polish', text: 'A polish blends the filling in. You can usually eat as soon as the numbness fades.' },
    ],
    whatWeUse:
      'Mercury-free composite resin, brand disclosed before treatment, halal status confirmed on request. No silver-mercury amalgam unless you specifically ask.',
    pricing: [
      { name: 'Composite filling (single surface)', price: '2,500' },
      { name: 'Composite filling (large / multi-surface)', price: '4,000' },
      { name: 'Glass-ionomer (GIC) filling', price: '2,000' },
    ],
    stories: [
      { name: 'Sana', area: 'Faisal Town', quote: 'They caught two tiny cavities early and filled them in one short visit. No drama, no overcharging.' },
      { name: 'Usman', area: 'Cantt', quote: 'The filling matches my tooth perfectly. And the price was exactly as posted on the site.' },
    ],
    faqs: [
      { q: 'Are your fillings safe / mercury-free?', a: 'Yes. We use tooth-coloured composite, not silver-mercury amalgam, unless you specifically request otherwise.' },
      { q: 'How long does it take?', a: 'Most single fillings take one short visit. Several together can usually be done in the same appointment.' },
      { q: 'Will it match my tooth?', a: 'Composite is shade-matched to your natural enamel, so it is very hard to spot.' },
    ],
    related: ['root-canal-treatment-lahore', 'scaling-cleaning-lahore', 'dental-crowns-lahore'],
  },
  {
    slug: 'veneers-lahore',
    nav: 'Veneers',
    short: 'Thin shells that correct chips, gaps, and stubborn stains — naturally.',
    title: 'Dental Veneers',
    tag: 'Cosmetic',
    heroId: 12934843,
    price: 'From 8,000',
    priceNote: 'composite 8,000 · porcelain 30,000 per tooth',
    lead: 'Veneers cover the front of a tooth to correct chips, gaps, or discolouration. We design them to look like your own teeth at their best — never fake or bulky. Cosmetic work is something we do when you ask for it, not something we push.',
    whatItIs:
      'A veneer is a thin shell bonded to the front of a tooth. Composite veneers are sculpted in a single visit; porcelain veneers are custom-crafted in a lab for the most natural, stain-resistant finish.',
    whenYouNeedIt: [
      'Chips or worn edges on front teeth',
      'A small gap you would like closed',
      'Stains that whitening cannot lift',
      'Slightly uneven or misshapen front teeth',
    ],
    howWeDoIt: [
      { step: 'We design with you', text: 'We talk through the look you want and, where useful, show you a preview. Natural always wins over dramatic here.' },
      { step: 'We prepare minimally', text: 'We remove as little tooth as possible — sometimes none — and match the shade carefully.' },
      { step: 'We bond and refine', text: 'The veneers are bonded and polished, then adjusted until they feel and look right.' },
    ],
    whatWeUse:
      'High-grade composite or lab-crafted porcelain. We disclose the material and lab, and confirm halal status of bonding materials on request.',
    pricing: [
      { name: 'Composite veneer (per tooth)', price: '8,000' },
      { name: 'Porcelain veneer (per tooth)', price: '30,000' },
      { name: 'Composite bonding (per tooth)', price: '6,000' },
    ],
    stories: [
      { name: 'Hina', area: 'DHA', quote: 'I wanted a natural result for my wedding photos, not “obvious” veneers. They listened and the result is subtle and real.' },
      { name: 'Faraz', area: 'Gulberg', quote: 'They actually talked me out of doing all my teeth — only two needed it. Refreshing honesty.' },
    ],
    faqs: [
      { q: 'Composite or porcelain?', a: 'Composite is more affordable and done in one visit; porcelain is more durable, stain-resistant, and natural-looking over time. We will recommend honestly for your case.' },
      { q: 'Will they look fake?', a: 'Not the way we do them. We design for a natural result that suits your face — restrained, not loud.' },
      { q: 'Do I have to do all my teeth?', a: 'No. We only treat the teeth that need it, and we will tell you if fewer is better.' },
    ],
    related: ['teeth-whitening-lahore', 'dental-crowns-lahore', 'braces-aligners-lahore'],
  },
  {
    slug: 'teeth-whitening-lahore',
    nav: 'Teeth Whitening',
    short: 'Safe, dentist-supervised whitening — brighter without the risk.',
    title: 'Teeth Whitening',
    tag: 'Cosmetic',
    heroId: 5622271,
    price: 'From 15,000',
    priceNote: 'take-home 15,000 · in-clinic 20,000',
    lead: 'Years of tea, coffee, and paan leave teeth dull. Professional whitening brightens your smile safely, with your gums and enamel protected throughout — far better, and safer, than charcoal pastes or unregulated kits.',
    whatItIs:
      'Whitening uses a professional-grade gel to lift stains from the enamel. In-clinic whitening gives faster results in about an hour; take-home kits brighten gradually with custom trays.',
    whenYouNeedIt: [
      'Teeth that have yellowed with age',
      'Staining from tea, coffee, smoking, or paan',
      'You want a brighter smile for an event',
      'Home kits have not given even results',
    ],
    howWeDoIt: [
      { step: 'We check suitability', text: 'Whitening works on natural teeth, not crowns or fillings. We will tell you honestly what to expect.' },
      { step: 'We protect your gums', text: 'Your gums are shielded before any gel is applied. Sensitivity is managed carefully.' },
      { step: 'We brighten safely', text: 'In-clinic in about an hour, or fitted trays and gel to use at home with our guidance.' },
    ],
    whatWeUse:
      'Clinically established whitening gels at safe, supervised concentrations. Brand disclosed before treatment.',
    pricing: [
      { name: 'In-clinic whitening', price: '20,000' },
      { name: 'Take-home whitening kit', price: '15,000' },
    ],
    stories: [
      { name: 'Mariam', area: 'Model Town', quote: 'They were honest that my front crown wouldn’t whiten, so I knew exactly what to expect. The rest looks great.' },
      { name: 'Zeeshan', area: 'Johar Town', quote: 'Even, natural result — not the fake bright-white I was worried about.' },
    ],
    faqs: [
      { q: 'Is whitening safe for my enamel?', a: 'Yes, when it is dentist-supervised at the right concentration. We protect your gums and manage sensitivity — unlike DIY kits.' },
      { q: 'Will crowns and fillings whiten too?', a: 'No. Whitening only works on natural teeth. We will tell you this up front so there are no surprises.' },
      { q: 'How long do results last?', a: 'Often a year or more with simple maintenance and by limiting staining drinks. We will show you how.' },
    ],
    related: ['veneers-lahore', 'scaling-cleaning-lahore', 'dental-crowns-lahore'],
  },
  {
    slug: 'dental-implants-lahore',
    nav: 'Dental Implants',
    short: 'A permanent, natural-feeling replacement for a missing tooth.',
    title: 'Dental Implants',
    tag: 'Tooth Replacement',
    heroId: 6812500,
    price: 'From 90,000',
    priceNote: 'fixture 90,000 · implant crown 40,000',
    lead: 'A dental implant replaces a missing tooth from the root up, so it looks, feels, and works like your own. It is an investment — so we give you the full, honest cost in writing before anything begins, and we never recommend it when a simpler option will do.',
    whatItIs:
      'An implant is a small titanium post placed in the jaw to replace a tooth root. Once healed, a custom crown is fitted on top — fixed in place, with no slipping and no adhesives.',
    whenYouNeedIt: [
      'A single missing tooth you want fixed permanently',
      'A loose bridge or uncomfortable denture',
      'Several missing teeth affecting chewing',
      'You want to avoid grinding down healthy neighbouring teeth for a bridge',
    ],
    howWeDoIt: [
      { step: 'We plan precisely', text: 'A 3D assessment confirms there is enough bone and plans exact placement. We give you the full cost in writing.' },
      { step: 'We place the implant', text: 'The titanium post is placed gently under local anaesthesia, then left to heal and integrate.' },
      { step: 'We fit your crown', text: 'Once healed, a custom crown is fitted and matched to your other teeth.' },
    ],
    whatWeUse:
      'Internationally approved titanium implant systems. We name the system and components, and confirm halal status of materials on request.',
    pricing: [
      { name: 'Dental implant (single titanium fixture)', price: '90,000' },
      { name: 'Implant crown', price: '40,000' },
    ],
    stories: [
      { name: 'Tariq', area: 'Model Town', quote: 'They gave me the whole cost in writing from day one. No mid-treatment “extra” charges. The tooth feels completely natural.' },
      { name: 'Shahida', area: 'Gulberg', quote: 'My denture was miserable. The implant changed how I eat and smile — and they were patient with all my questions.' },
    ],
    faqs: [
      { q: 'Is an implant worth it over a bridge or denture?', a: 'Often, but not always. An implant preserves neighbouring teeth and lasts well, but a bridge or denture can be the right call too. We will lay out the honest trade-offs and prices.' },
      { q: 'Will there be hidden costs?', a: 'No. The fixture and crown prices are posted. If a bone graft is ever needed, we explain it and price it in writing before starting.' },
      { q: 'How long does it take?', a: 'Placement is quick; healing takes a few months before the crown is fitted. We will give you a clear timeline.' },
    ],
    related: ['dental-crowns-lahore', 'tooth-extraction-lahore', 'root-canal-treatment-lahore'],
  },
  {
    slug: 'braces-aligners-lahore',
    nav: 'Braces & Aligners',
    short: 'Straighten your teeth — metal, ceramic, or near-invisible aligners.',
    title: 'Braces & Clear Aligners',
    tag: 'Orthodontics',
    heroId: 5524021,
    price: 'From 90,000',
    priceNote: 'metal 90,000 · ceramic 130,000 · aligners from 180,000',
    lead: 'Straight teeth are easier to clean and healthier for life — not just better looking. We offer metal braces, tooth-coloured ceramic, and clear aligners, with the full treatment price agreed and explained up front, and payable in instalments.',
    whatItIs:
      'Orthodontics gradually moves teeth into a healthier, straighter position. Braces suit complex cases and are the most affordable; clear aligners are removable and discreet, popular with adults.',
    whenYouNeedIt: [
      'Crowded, crooked, or overlapping teeth',
      'Gaps between teeth',
      'A bite that doesn’t meet properly',
      'You straightened your teeth before but they have shifted',
    ],
    howWeDoIt: [
      { step: 'We assess and quote', text: 'A full assessment and a single, clear price for the whole treatment, explained up front — no per-visit surprises.' },
      { step: 'We fit and monitor', text: 'Braces are fitted or aligners issued, with regular gentle adjustments.' },
      { step: 'We retain the result', text: 'A retainer holds your new smile in place. We explain how to keep it that way.' },
    ],
    whatWeUse:
      'Quality bracket systems and lab-made aligners. The full-treatment price is agreed and explained at the start and includes routine adjustments.',
    pricing: [
      { name: 'Metal braces (full treatment)', price: '90,000' },
      { name: 'Ceramic braces (full treatment)', price: '130,000' },
      { name: 'Clear aligners (from)', price: '180,000' },
      { name: 'Retainer (per arch)', price: '8,000' },
    ],
    stories: [
      { name: 'Ali', area: 'Garden Town', quote: 'One clear price for the whole treatment, explained up front and paid in instalments. No “extra adjustment fee” every visit like other places.' },
      { name: 'Komal', area: 'Johar Town', quote: 'I’m 31 and chose aligners. They never made me feel it was too late, and the plan was clear from the start.' },
    ],
    faqs: [
      { q: 'Braces or aligners?', a: 'Braces handle complex cases and cost less; aligners are discreet and removable but suit milder cases. We will recommend honestly based on your teeth, not the price.' },
      { q: 'Will there be any hidden charges?', a: 'No. The full-treatment price is agreed and explained at the start and includes routine adjustments, payable in instalments. No per-visit surprises.' },
      { q: 'Am I too old for braces?', a: 'No. Adults straighten their teeth here regularly. Healthy teeth can be moved at any age.' },
    ],
    related: ['veneers-lahore', 'teeth-whitening-lahore', 'childrens-dentistry-lahore'],
  },
  {
    slug: 'childrens-dentistry-lahore',
    nav: "Children's Dentistry",
    short: 'Gentle, friendly dental care that children actually trust.',
    title: "Children's Dentistry",
    tag: 'Kids & Family',
    heroId: 8224633,
    price: 'Free consultation',
    priceNote: 'fillings from 2,500 · sealants 2,500',
    lead: 'A child’s early visits shape how they feel about dentists for life. We take our time, explain things simply, and keep a parent beside them throughout. The first consultation is free.',
    whatItIs:
      'Children’s dentistry covers gentle check-ups, prevention (fluoride and sealants), and treatment of decay in baby and new adult teeth — all at a calm, child’s pace.',
    whenYouNeedIt: [
      'Your child’s first dental visit (from around age one)',
      'A toothache or visible cavity',
      'Protecting new adult molars with sealants',
      'Building good brushing habits early',
    ],
    howWeDoIt: [
      { step: 'We build trust first', text: 'No rushing. We let your child get comfortable, and a parent stays with them the whole time.' },
      { step: 'We prevent where we can', text: 'Fluoride and sealants protect young teeth — cheaper and kinder than treating decay later.' },
      { step: 'We treat gently', text: 'When treatment is needed, we keep it short, calm, and as comfortable as possible.' },
    ],
    whatWeUse:
      'Child-safe, tooth-coloured materials and a patient, unhurried approach. A female dentist and assistant are available on request.',
    pricing: [
      { name: 'Child consultation', price: 'Free' },
      { name: "Child's filling", price: '2,500' },
      { name: 'Fissure sealant (per tooth)', price: '2,500' },
      { name: "Child's extraction", price: '2,000' },
    ],
    stories: [
      { name: 'Sana', area: 'Johar Town', quote: 'My 8-year-old was terrified. They were so patient that she now asks when we’re going back. I never thought I’d say that.' },
      { name: 'Farah', area: 'Wapda Town', quote: 'They sealed my son’s molars to prevent cavities instead of waiting for problems. Genuinely preventive care.' },
    ],
    faqs: [
      { q: 'When should my child first see a dentist?', a: 'Around their first birthday, or whenever the first tooth appears. Early visits are about comfort and prevention, not treatment.' },
      { q: 'Can I stay with my child?', a: 'Always. A parent is welcome beside the chair for the entire visit.' },
      { q: 'Do you have a female dentist for my daughter?', a: 'Yes — a female dentist and assistant can care for your daughter. Just ask when booking.' },
    ],
    related: ['scaling-cleaning-lahore', 'dental-fillings-lahore', 'braces-aligners-lahore'],
  },
  {
    slug: 'emergency-dentist-lahore',
    nav: 'Emergency Dentistry',
    short: 'Fast relief for toothache, swelling, and broken teeth.',
    title: 'Emergency Dentistry',
    tag: 'Urgent Care',
    heroId: 16430835,
    price: 'From 2,000',
    priceNote: 'pain relief same-day · treatment priced before starting',
    lead: 'Dental pain rarely waits for a convenient time. Message us on WhatsApp and we will see you quickly to relieve the pain and protect the tooth — with the price explained before we begin, even in an emergency.',
    whatItIs:
      'Emergency care handles severe toothache, swelling, abscesses, and broken or knocked-out teeth — diagnosing the cause fast and giving immediate relief.',
    whenYouNeedIt: [
      'Severe or constant toothache',
      'Facial or gum swelling',
      'A broken, cracked, or knocked-out tooth',
      'A lost filling or crown causing pain',
    ],
    howWeDoIt: [
      { step: 'Message us on WhatsApp', text: 'Tell us what’s happening. We will give you first-aid advice and the soonest slot.' },
      { step: 'We relieve the pain', text: 'Our first job is to get you out of pain — often the same day.' },
      { step: 'We explain next steps', text: 'We tell you the cause, the options, and the price in writing before any further treatment.' },
    ],
    whatWeUse:
      'Same sterilisation and material-disclosure standards as every other visit — emergencies are no excuse for cutting corners or quoting unfairly.',
    pricing: [
      { name: 'Emergency assessment & pain relief', price: 'from 2,000' },
      { name: 'Simple extraction (if needed)', price: '2,000' },
      { name: 'Root canal (if needed)', price: 'from 15,000' },
    ],
    stories: [
      { name: 'Hamza', area: 'Gulberg', quote: 'I messaged on WhatsApp at night, got first-aid advice immediately, and was seen first thing. Pain gone, price exactly as told.' },
      { name: 'Rukhsana', area: 'Township', quote: 'Even in an emergency they quoted me fairly and in writing. They didn’t take advantage of the situation.' },
    ],
    faqs: [
      { q: 'How fast can I be seen?', a: 'Message us on WhatsApp and we will give you the soonest available slot — often the same day. We keep time aside for genuine emergencies.' },
      { q: 'Will I be overcharged because it’s urgent?', a: 'No. Emergency or not, our prices are the posted prices, and we explain treatment costs in writing before starting.' },
      { q: 'What do I do with a knocked-out tooth?', a: 'Keep it moist (in milk or saliva), avoid touching the root, and contact us immediately — acting fast can sometimes save it.' },
    ],
    related: ['root-canal-treatment-lahore', 'tooth-extraction-lahore', 'dental-crowns-lahore'],
  },
];

export const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

// ── Dental team (shared by /our-doctors and the homepage) ──
// Calm, honest bios — no "world-class" / superlatives (Blueprint §2.7).
// The lead dentist is the brand's voice; a female dentist is available on request.
export const team = [
  { photo: 19438560, name: 'Dr. Saad Mahmood', role: 'Founder & Lead Dentist', bio: 'Dr. Saad founded Ohud on one idea: tell patients the truth and charge them fairly. He leads our clinical standards and our no-overtreatment policy — and he is the dentist who will say “you don’t need this” out loud.', tags: ['Root Canal', 'Crowns', 'Honest Diagnosis'], pmdc: 'PMDC verified' },
  { photo: 7904406, name: 'Dr. Hira Naqvi', role: 'Dentist — Women & Children', bio: 'Dr. Hira cares for women and children with a female assistant present, in a calm, unhurried setting built around comfort. A female dentist and assistant are available on request.', tags: ["Women's Care", "Children's Dentistry", 'Cosmetic'], pmdc: 'PMDC verified' },
  { photo: 6762869, name: 'Dr. Faisal Khan', role: 'Orthodontist', bio: 'Dr. Faisal straightens smiles of all ages with braces and clear aligners — known for his patience with anxious teens and for quoting one clear price for the whole treatment, explained up front.', tags: ['Braces', 'Clear Aligners'], pmdc: 'PMDC verified' },
  { photo: 8376306, name: 'Dr. Mariam Aslam', role: 'Endodontist (Root Canals)', bio: 'Using modern rotary technology, Dr. Mariam performs comfortable root canals that save natural teeth — often in a single visit, always at the posted price.', tags: ['Root Canal', 'Tooth Preservation'], pmdc: 'PMDC verified' },
  { photo: 3881440, name: 'Dr. Zainab Qureshi', role: 'Dentist — Children & Families', bio: 'Warm and endlessly patient, Dr. Zainab makes dental visits calm for children and builds habits that last. A parent stays beside every child she treats.', tags: ["Children's Dentistry", 'Preventive Care'], pmdc: 'PMDC verified' },
  { photo: 10695742, name: 'Dr. Omar Farooq', role: 'Periodontist & Oral Surgeon', bio: 'Dr. Omar treats gum disease and performs extractions and implant surgery with care — and only after every option to save a tooth has been honestly considered.', tags: ['Gum Treatment', 'Implants', 'Surgery'], pmdc: 'PMDC verified' },
];
