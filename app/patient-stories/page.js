import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Img from '@/components/Img';
import { waLink, waDefault, brand } from '@/lib/brand';

export const metadata = {
  title: 'Patient Stories — Ohud Dental, Lahore',
  description:
    'Consented stories in our patients’ own words — about fair, posted prices, painless treatment, honest advice, and calm care for children and elders across Lahore. #MyOhudStory',
};

const stories = [
  { name: 'Rabia', area: 'Garden Town', quote: 'Another clinic quoted me almost triple for a root canal. Ohud had the price on their website, numbed me properly, and the pain was gone the same day. The bill was exactly what they told me.' },
  { name: 'Tariq', area: 'Model Town', quote: 'They told me my tooth could be saved with a filling instead of the crown another dentist insisted on. That honesty brought my whole family here.' },
  { name: 'Sana', area: 'Johar Town', quote: 'My 8-year-old was terrified of dentists. They were so patient with her that she now asks when we’re going back. I never thought I’d say that.' },
  { name: 'Hina', area: 'DHA', quote: 'I had my pre-wedding work done with a female dentist and assistant the whole time. Calm, respectful, and the result is natural — not “obvious”.' },
  { name: 'Hamza', area: 'Gulberg', quote: 'I messaged on WhatsApp at night with bad pain. They gave me first-aid advice straight away and saw me first thing. Fair price, in writing, even in an emergency.' },
  { name: 'Saadia', area: 'Township', quote: 'They explained PFM and zirconia crowns in plain Urdu and never pushed the expensive one. I chose what suited me, and it looks completely natural.' },
  { name: 'Bilal', area: 'Wapda Town', quote: 'Two clinics wanted to pull my tooth. Ohud saved it with a root canal instead — for less money. My parents are patients here now too.' },
  { name: 'Farah', area: 'Faisal Town', quote: 'I brought my elderly mother, who is nervous and hard of hearing. They were unhurried and kind with her. That matters more than I can say.' },
  { name: 'Usman', area: 'Cantt', quote: 'I came in expecting a long list of treatments. They told me I only needed a cleaning and nothing else. Honestly refreshing.' },
];

export default function PatientStoriesPage() {
  const share = waLink('Assalamu alaikum / Hello — I would like to share my Ohud Dental story.');
  return (
    <>
      <Nav base="/" />

      <section className="svc-hero" style={{ minHeight: '54vh' }}>
        <div className="svc-hero-img"><Img domId="svcHeroImg" id={35434209} w={1900} h={1100} alt="Ohud Dental patients in Lahore" /></div>
        <div className="svc-hero-grad"></div>
        <div className="svc-hero-glow"></div>
        <div className="svc-hero-in">
          <div className="svc-crumb"><Link href="/">Home</Link><span>/</span>Patient Stories</div>
          <div className="svc-tag"><span></span>Patient Stories</div>
          <h1 className="svc-h1">Real people. Real words.</h1>
          <p className="svc-lead">These are stories from our own patients, shared with their consent and in their own words. We collect them under one hashtag — <strong>#MyOhudStory</strong> — and we never edit them to flatter ourselves.</p>
          <div className="svc-hero-ctas">
            <a href={share} target="_blank" rel="noopener noreferrer" className="bwa">Share your story →</a>
            <Link href="/reviews/" className="bghost">See our reviews →</Link>
          </div>
        </div>
      </section>

      <section className="prose-sec" style={{ paddingBottom: '40px' }}>
        <div className="prose-in">
          <h2>Told the way they happened</h2>
          <p>We don’t pay for stories, and we don’t polish them. Each one below is from a real patient who agreed to let us share it. Names and areas are used with permission. If a story sounds ordinary, that is the point — honest dentistry should feel ordinary, not dramatic.</p>
        </div>
      </section>

      <section className="tests">
        <div className="tests-in">
          <div className="rev-grid">
            {stories.map((t, i) => (
              <div className="tcard" key={i} style={{ width: 'auto' }}>
                <div className="tstars">★★★★★</div>
                <p className="tquote">{t.quote}</p>
                <div className="tauthor"><div><div className="tname">{t.name}</div><div className="trole">{t.area}, Lahore</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-sec">
        <div className="prose-in">
          <h2>A story we think about often</h2>
          <p>A man from Johar Town came to us for a price on an extraction. Another clinic had told him the tooth had to go, and he had already accepted it. We took a digital X-ray, looked carefully, and saw something they had missed: the tooth could be saved with a root canal and a crown. We explained both paths honestly, including the cost of each, and let him decide. He kept his tooth. Six months later he brought his wife and two children to us.</p>
          <p>We tell this story not because it is unusual for us, but because it is the whole idea. Saving a tooth earns us less than removing and replacing it. We would still rather you keep your own tooth — and trust us with the rest of your family.</p>
          <h3>Video stories are coming</h3>
          <p>We are beginning to record short video stories with patients who are happy to appear on camera. They will live on this page as we add them. For now, these written words speak for themselves.</p>
        </div>
      </section>

      <section className="svc-cta">
        <div className="svc-cta-glow"></div>
        <div className="svc-cta-in rv">
          <h2>Have a story to share?</h2>
          <p>If Ohud Dental treated you well, we would be honoured to hear it. Message us on WhatsApp with your #MyOhudStory — and let us know if we may share it.</p>
          <div className="svc-cta-ctas">
            <a href={share} target="_blank" rel="noopener noreferrer" className="bwa">Share your story on WhatsApp →</a>
            <Link href="/reviews/" className="bghost">Read our reviews →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
