import { Reserve, SiteFrame, StatLine } from './components/SiteChrome.jsx';
import { GRADUATION_PATH, HERO_IMAGE_PATH } from './lib/site.js';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta">
          <div className="eyebrow">AUBURN · ALABAMA</div>
          <div className="meta">10 min to Toomer’s Corner · Jordan–Hare Stadium</div>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="display">
              The Hydrangea
              <br />
              <span className="display-italic">House</span>
            </h1>
            <p className="serif lede">
              A serene retreat for game days, gatherings &amp; quiet weekends — a private
              five-bedroom home inside the Auburn University Club.
            </p>
            <div className="stats">
              <StatLine v="5" l="BEDROOMS" />
              <StatLine v="4½" l="BATHROOMS" />
              <StatLine v="10+" l="SLEEPS" />
              <StatLine v="3,600+" l="SQ FT" />
            </div>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#book">
                Check Availability
              </a>
              <a className="btn" href={GRADUATION_PATH}>
                Graduation Weekend
              </a>
            </div>
          </div>
          <div className="slot-frame">
            <img src={HERO_IMAGE_PATH} alt="Front exterior of The Hydrangea House at sunset in Auburn, Alabama" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stay() {
  return (
    <section id="stay" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">The House</p>
        <h2>Five bedrooms, a chef&apos;s kitchen, a lawn of hydrangeas.</h2>
        <p className="body">
          The Hydrangea House (Club Creek to friends and family) is a private five-bedroom,
          4.5-bath rental in Auburn, Alabama. Ten minutes from Jordan-Hare Stadium, built for
          game weekends, Camp War Eagle, and quiet weeks on The Plains.
        </p>
        <p className="body">
          Coming for Auburn University commencement? See the{' '}
          <a href={GRADUATION_PATH}>Auburn graduation house</a> page, the{' '}
          <a href="#gallery">photo gallery</a>, or{' '}
          <a href="#book">text the hosts to book direct</a>.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="panel">
      <div className="wrap">
        <p className="eyebrow">Gallery</p>
        <h2>Inside the house</h2>
        <div className="gallery-row">
          <img src={HERO_IMAGE_PATH} alt="The Hydrangea House exterior at sunset" />
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Amenities</p>
        <h2>Considered comfort</h2>
        <ul className="amenity-list">
          <li>Chef&apos;s kitchen and butler&apos;s pantry</li>
          <li>Covered porch with fireplace</li>
          <li>Two-car garage plus driveway parking</li>
          <li>Dogs welcome — $75 per pet, per day; no cats</li>
        </ul>
      </div>
    </section>
  );
}

function Auburn() {
  return (
    <section id="auburn" className="panel">
      <div className="wrap">
        <p className="eyebrow">Auburn</p>
        <h2>On the Plains</h2>
        <p className="body">
          Distances from The Hydrangea House: about ten minutes to Jordan-Hare, Toomer&apos;s
          Corner, and campus. The house sits inside the Auburn University Club, a private golf
          community. Golf and campus notes live in this{' '}
          <a href="#auburn">Auburn section</a>; <a href="#book">ask the hosts</a> when you
          book. Families here for commencement can start on the{' '}
          <a href={GRADUATION_PATH}>Auburn graduation weekend</a> page.
        </p>
      </div>
    </section>
  );
}

function Review() {
  return (
    <section id="reviews" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Guest Reviews</p>
        <blockquote className="serif lede">
          “I would strongly recommend staying with Emma. Her home was perfect for our game weekend
          with friends and family! Emma was very responsive and everything was as advertised!”
        </blockquote>
        <p className="body">— Jed, Dallas, Texas</p>
      </div>
    </section>
  );
}

const HOME_FAQS = [
  {
    q: 'How many guests can the Hydrangea House sleep?',
    a: 'The house sleeps 10 across five bedrooms — one king bed and four queen beds — with 4.5 baths so no one is doubling up.',
  },
  {
    q: 'How far is the house from Jordan-Hare Stadium and Auburn’s campus?',
    a: 'It’s a ten-minute drive to Jordan-Hare Stadium, Toomer’s Corner, and Auburn University’s campus — close enough for game day, quiet enough for the weekend.',
  },
  {
    q: 'Are pets allowed?',
    a: 'Well-behaved dogs are welcome on request with a $75 per pet, per day fee. No cats. The backyard is fully fenced, and all pet waste must be picked up.',
  },
  {
    q: 'Do you book direct, and are there service fees?',
    a: 'Yes — text or email the hosts to check dates and rates. Bookings are direct, with no third-party service fees.',
  },
];

function Faq() {
  return (
    <section id="faq" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Frequently asked</p>
        <h2>Answers before you ask</h2>
        {HOME_FAQS.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="body">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Concierge() {
  return (
    <section id="concierge" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Concierge</p>
        <h2>How may we help?</h2>
        <p className="body">
          Golf cart rental, pre-arrival provisioning, and breakfast kits — ask when you book.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <SiteFrame page="home">
      <Hero />
      <Stay />
      <Gallery />
      <Amenities />
      <Auburn />
      <Review />
      <Faq />
      <Concierge />
      <Reserve />
    </SiteFrame>
  );
}
