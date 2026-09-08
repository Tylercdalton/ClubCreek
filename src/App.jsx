import React from 'react';
import {
  HOST_EMAIL,
  HOST_PHONE_DISPLAY,
  HOST_PHONE_E164,
  SITE_NAME,
} from './lib/site.js';

const PHOTOS = {
  hero: 'https://clubcreekrental.lovable.app/__l5e/assets-v1/e135cc3c-5af9-4a4f-933e-7ce646f205c0/home-hero.webp',
};

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="word" aria-label={`${SITE_NAME} home`}>
          {SITE_NAME}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="link" href="#stay">
            THE HOUSE
          </a>
          <a className="link" href="#gallery">
            GALLERY
          </a>
          <a className="link" href="#auburn">
            AUBURN
          </a>
          <a className="link" href="#concierge">
            CONCIERGE
          </a>
          <a className="link link--book btn" href="#book">
            BOOK NOW
          </a>
        </nav>
      </div>
    </header>
  );
}

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
            <a className="btn btn-solid" href="#book">
              Check Availability
            </a>
          </div>
          <div className="slot-frame">
            <img src={PHOTOS.hero} alt="Front exterior of The Hydrangea House at sunset in Auburn, Alabama" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatLine({ v, l }) {
  return (
    <div className="stat">
      <div className="serif stat-v">{v}</div>
      <div className="eyebrow">{l}</div>
    </div>
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
          See the{' '}
          <a href="https://clubcreekrental.lovable.app/stay">full house tour</a>, the{' '}
          <a href="https://clubcreekrental.lovable.app/gallery">photo gallery</a>, or{' '}
          <a href="https://clubcreekrental.lovable.app/book">book direct</a>.
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
          <img src={PHOTOS.hero} alt="The Hydrangea House exterior at sunset" />
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
          community. Read the{' '}
          <a href="https://clubcreekrental.lovable.app/area">Auburn area guide</a>,{' '}
          <a href="https://clubcreekrental.lovable.app/golf">golf drive times</a>, and{' '}
          <a href="https://clubcreekrental.lovable.app/journal">golf &amp; gameday journal</a>.
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
    a: 'Yes — book direct through the live calendar on this site for real-time rates, instant confirmation, and no third-party service fees.',
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

function Reserve() {
  return (
    <section id="book" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Book direct</p>
        <h2>Check availability</h2>
        <p className="body">
          Live calendar and rates are on the production booking page. Same house, no service fees.
        </p>
        <a className="btn btn-solid" href="https://clubcreekrental.lovable.app/book">
          Open the live calendar
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="word">{SITE_NAME}</p>
          <p className="body">
            A serene retreat for game days, gatherings &amp; quiet weekends in Auburn, Alabama.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="footer-contact">
            <li>
              <a href="https://clubcreekrental.lovable.app/golf">Auburn golf</a>
            </li>
            <li>
              <a href="https://clubcreekrental.lovable.app/area">Area guide</a>
            </li>
            <li>
              <a href="https://clubcreekrental.lovable.app/journal">Journal</a>
            </li>
            <li>
              <a href="https://clubcreekrental.lovable.app/book">Book direct</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <p className="serif footer-kicker">Text or email your hosts.</p>
          <p className="body">Auburn, Alabama 36832</p>
          <ul className="footer-contact">
            <li>
              <a href={`tel:${HOST_PHONE_E164}`}>{HOST_PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={`mailto:${HOST_EMAIL}`}>{HOST_EMAIL}</a>
            </li>
          </ul>
          <p className="fine">Reply within the hour · 8a–8p CT</p>
        </div>
      </div>
    </footer>
  );
}

function MobileBookBar() {
  return (
    <div className="mobile-book-bar">
      <a href="#book">Check Availability</a>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stay />
      <Gallery />
      <Amenities />
      <Auburn />
      <Review />
      <Faq />
      <Concierge />
      <Reserve />
      <Footer />
      <MobileBookBar />
    </>
  );
}
