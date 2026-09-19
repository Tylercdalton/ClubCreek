import { Reserve, SiteFrame, StatLine } from './components/SiteChrome.jsx';
import { GRADUATION_FAQS } from './lib/graduationFaqs.js';
import { HERO_IMAGE_PATH } from './lib/site.js';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta">
          <div className="eyebrow">Auburn University commencement · The Hydrangea House</div>
          <div className="meta">Spring &amp; December weekends · 10 min to campus</div>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="display-line">
              Coming to Auburn for graduation?
              <br />
              <span className="display-italic">Look no further, stay right here.</span>
            </h1>
            <p className="serif lede">
              Book The Hydrangea House — Club Creek to friends and family — for Auburn
              University graduation weekend. A private five-bedroom home inside the Auburn
              University Club, ten minutes from campus. Warm, ready, and booked direct.
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
              <a className="btn" href="/#stay">
                The House
              </a>
            </div>
          </div>
          <div className="slot-frame">
            <img
              src={HERO_IMAGE_PATH}
              alt="Front exterior of The Hydrangea House at sunset in Auburn, Alabama"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="panel panel-light">
      <div className="wrap">
        <p className="eyebrow">Why this house</p>
        <h2>Why The Hydrangea House for graduation weekend</h2>
        <p className="body">
          Commencement weekend is not a hotel night. It is the graduate, the parents, the
          grandparents, and everyone who flew in to be in the room. The Hydrangea House keeps
          that group under one roof — five bedrooms, 4.5 baths, a chef&apos;s kitchen — ten
          minutes from Auburn University.
        </p>
        <div className="card-grid">
          <article className="card">
            <h3>The whole house</h3>
            <p>
              Sleeps 10 across one king and four queens. Nobody is splitting across campus
              hotels or doubling up in 4.5 baths.
            </p>
          </article>
          <article className="card">
            <h3>Ten minutes to campus</h3>
            <p>
              A short drive to Auburn&apos;s campus, Toomer&apos;s Corner, and Jordan-Hare —
              close for ceremony morning, quiet for the rest of the weekend.
            </p>
          </article>
          <article className="card">
            <h3>Book direct</h3>
            <p>
              Text or email the hosts with your commencement dates. Same house, no third-party
              service fees.{' '}
              <a href="#book">Check availability</a> or see{' '}
              <a href="/#stay">the house</a>.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Seasons() {
  return (
    <section id="seasons" className="panel">
      <div className="wrap">
        <p className="eyebrow">Two commencements</p>
        <h2>Spring and fall / December graduation weekends</h2>
        <p className="body">
          Auburn University holds commencement in the spring and again in the fall — typically a
          December weekend. The Hydrangea House is the same home for both: a Club Creek Auburn
          graduation stay inside the Auburn University Club.
        </p>
        <div className="card-grid">
          <article className="card">
            <p className="eyebrow">Spring</p>
            <h3>Spring commencement</h3>
            <p>
              Spring is Auburn&apos;s larger graduation season. Families use the house as home
              base — cook in the chef&apos;s kitchen, gather on the covered porch, and drive ten
              minutes to campus when it is time to walk.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Fall / December</p>
            <h3>December weekend</h3>
            <p>
              Fall commencement is usually a December weekend on The Plains. Same five bedrooms,
              same ten-minute drive, same book-direct hosts. Bring the dogs if they travel —
              $75 per pet, per day; no cats.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Families() {
  return (
    <section id="families" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Multi-generation weekends</p>
        <h2>Grandparents, parents, and the graduate — together</h2>
        <p className="body">
          Graduation weekend is a family house, not a row of hotel doors. Five bedrooms give
          the graduate a quiet room, parents a place to host, and grandparents a real bed.
          The butler&apos;s pantry and chef&apos;s kitchen are for the breakfast after the
          ceremony. Two-car garage plus driveway parking keeps the cars off the street. The
          backyard is fully fenced if the family dog comes too.
        </p>
        <p className="body">
          Need a golf cart, groceries waiting, or a breakfast kit? Ask on the{' '}
          <a href="/#concierge">concierge</a> note when you <a href="#book">book direct</a>.
        </p>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Amenities</p>
        <h2>What the house already has</h2>
        <ul className="amenity-list">
          <li>Five bedrooms · one king bed and four queen beds · sleeps 10</li>
          <li>4.5 bathrooms</li>
          <li>3,600+ square feet</li>
          <li>Chef&apos;s kitchen and butler&apos;s pantry</li>
          <li>Covered porch with fireplace</li>
          <li>Two-car garage plus driveway parking</li>
          <li>Fully fenced backyard</li>
          <li>Dogs welcome — $75 per pet, per day; no cats</li>
        </ul>
        <p className="body">
          More photos live in the <a href="/#gallery">gallery</a>.
        </p>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Location</p>
        <h2>Auburn University Club — ten minutes from campus</h2>
        <p className="body">
          The Hydrangea House sits inside the Auburn University Club, a private golf community
          in Auburn, Alabama 36832. Street number is not published here. Distances: about ten
          minutes to Jordan-Hare Stadium, Toomer&apos;s Corner, and Auburn University&apos;s
          campus — the same drive whether you are here for a game or for commencement.
        </p>
        <p className="body">
          Neighborhood notes and golf live on the <a href="/#auburn">Auburn</a> section of the
          main site. The house is Club Creek to the people who love it; guests book The
          Hydrangea House.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Frequently asked</p>
        <h2>Graduation weekend questions</h2>
        {GRADUATION_FAQS.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="body">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function GraduationPage() {
  return (
    <SiteFrame page="graduation">
      <Hero />
      <Why />
      <Seasons />
      <Families />
      <Amenities />
      <Location />
      <Faq />
      <Reserve
        heading="Stay right here for commencement"
        lede="Tell the hosts you are coming for Auburn graduation — spring or December — and the dates you need. Book direct. No third-party service fees."
      />
    </SiteFrame>
  );
}
