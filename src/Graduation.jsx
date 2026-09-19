import { Footer, MobileBookBar, Nav, Reserve, StatLine } from './components/SiteChrome.jsx';
import { GOLF_PATH } from './lib/routes.js';
import { HERO_IMAGE_PATH, HOUSE_AKA, SITE_NAME } from './lib/site.js';

const GRAD_FAQS = [
  {
    q: 'How many people can stay at Club Creek for Auburn graduation weekend?',
    a: 'The house sleeps 10 across five bedrooms — one king bed and four queen beds — with 4.5 baths so parents, grandparents, and siblings are not doubling up.',
  },
  {
    q: 'How far is the house from Auburn University commencement and campus?',
    a: 'It is a ten-minute drive to Auburn University’s campus, Toomer’s Corner, and Jordan-Hare Stadium. Commencement ceremonies are typically held on campus at Neville Arena. Plan on driving — we do not publish a walking time.',
  },
  {
    q: 'Is this Auburn graduation house available for both spring commencement and December graduation?',
    a: 'Yes. Spring commencement at Auburn University typically spans several days in early May. Fall graduation is typically a Saturday in mid-December (December 12, 2026). The same five-bedroom Club Creek home works for either weekend.',
  },
  {
    q: 'Who is the house for during graduation weekend?',
    a: 'Families — parents, grandparents, and multi-generation groups who want one house instead of several hotel rooms. The layout is five private bedrooms and 4.5 baths.',
  },
  {
    q: 'Are pets allowed during graduation weekend?',
    a: 'Well-behaved dogs are welcome on request with a $75 per pet, per day fee. No cats. The backyard is fully fenced, and all pet waste must be picked up.',
  },
  {
    q: 'How do we book Club Creek direct for graduation?',
    a: 'Text or email the hosts with your dates. Bookings are direct, with no third-party service fees. Hosts typically reply within the hour, 8a–8p CT.',
  },
];

function Crumbs() {
  return (
    <nav className="wrap crumbs" aria-label="Breadcrumb">
      <a href="/">{SITE_NAME}</a>
      <span className="crumbs-sep" aria-hidden="true">
        /
      </span>
      <span>Auburn graduation house</span>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta">
          <div className="eyebrow">AUBURN UNIVERSITY · GRADUATION WEEKEND</div>
          <div className="meta">10-minute drive to campus · Jordan–Hare · Toomer’s Corner</div>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="display display-page">
              Coming to Auburn for graduation?
              <br />
              <span className="display-italic">Look no further, stay right here.</span>
            </h1>
            <p className="serif lede">
              {SITE_NAME} is the Auburn graduation house — a private five-bedroom home inside
              the Auburn University Club, a ten-minute drive from campus for spring
              commencement or December graduation. {HOUSE_AKA}.
            </p>
            <div className="stats">
              <StatLine v="5" l="BEDROOMS" />
              <StatLine v="4½" l="BATHROOMS" />
              <StatLine v="10+" l="SLEEPS" />
              <StatLine v="3,600+" l="SQ FT" />
            </div>
            <div className="cta-row">
              <a className="btn btn-solid" href="#book">
                Book graduation weekend
              </a>
              <a className="btn" href="/#stay">
                See the house
              </a>
            </div>
          </div>
          <div className="slot-frame">
            <img
              src={HERO_IMAGE_PATH}
              alt={`${SITE_NAME} in Auburn, Alabama — a five-bedroom graduation weekend rental near Auburn University`}
              fetchPriority="high"
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
      <div className="wrap narrow prose">
        <p className="eyebrow">Why this house</p>
        <h2>Why families book {SITE_NAME} for graduation.</h2>
        <p className="body">
          Auburn University graduation weekend is a reunion, not a hotel night. Parents fly in,
          grandparents want a quiet bedroom, siblings bring plus-ones, and everyone still needs
          to be on campus in the morning. {SITE_NAME} is built for that — one address, five
          bedrooms, 4.5 baths, and a chef&apos;s kitchen so breakfast happens under one roof.
        </p>
        <p className="body">
          The house ({HOUSE_AKA}) sits inside the Auburn University Club, a private golf
          community in Auburn, Alabama. It is a ten-minute drive to campus, Toomer&apos;s
          Corner, and Jordan-Hare Stadium — close enough for ceremony morning, quiet enough
          that you are not parked in a downtown hotel.
        </p>
        <p className="body">
          Book direct with the hosts. Same house you would find on a listing site, without
          third-party service fees. Text or email your dates for spring commencement or the
          December ceremony.
        </p>
      </div>
    </section>
  );
}

function Seasons() {
  return (
    <section id="weekends" className="panel">
      <div className="wrap">
        <p className="eyebrow">Two seasons</p>
        <h2>Spring commencement and fall graduation weekends.</h2>
        <p className="body body-wide">
          Auburn holds a large spring commencement and a December ceremony. The house does not
          change — only the calendar. We use Auburn University&apos;s published timing, not
          invented walk times or unofficial dates.
        </p>
        <div className="card-grid card-grid-2">
          <article className="card">
            <p className="eyebrow">Spring</p>
            <h3>Early May commencement</h3>
            <p className="body">
              Spring commencement typically spans several days in early May, with multiple
              college ceremonies on campus (usually at Neville Arena). Families often stay
              Thursday through Monday so there is room for photos at Toomer&apos;s Corner and
              Samford Hall, a quiet night on the porch, and a drive to campus that is not a
              scramble.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Fall / December</p>
            <h3>Mid-December graduation</h3>
            <p className="body">
              Fall graduation is typically a Saturday in mid-December. Auburn University
              lists Saturday, December 12, 2026. The weekend is shorter and cooler — a good
              fit for the covered porch and fireplace — and the same five-bedroom layout keeps
              the whole family in Auburn instead of splitting hotel rooms.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="panel panel-light">
      <div className="wrap">
        <p className="eyebrow">Who it&apos;s for</p>
        <h2>Parents, grandparents, and the multi-generation crew.</h2>
        <div className="card-grid card-grid-3">
          <article className="card">
            <p className="eyebrow">Parents</p>
            <h3>A base, not a lobby</h3>
            <p className="body">
              Five bedrooms — one king and four queens — so the graduate, siblings, and
              parents each have a door to close. The chef&apos;s kitchen and butler&apos;s pantry
              handle the night-before dinner without a restaurant reservation scramble.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Grandparents</p>
            <h3>Quiet rooms, real baths</h3>
            <p className="body">
              4.5 bathrooms mean no one is queued in a hotel hallway. The house is in a golf
              community, not on a stadium block, and the drive to campus is about ten minutes.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Everyone at once</p>
            <h3>One driveway</h3>
            <p className="body">
              A two-car garage plus driveway parking keeps the group together. 3,600+ square
              feet is enough living space that a ten-person graduation weekend does not feel
              like camping in a condo.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="panel">
      <div className="wrap narrow prose">
        <p className="eyebrow">Amenities</p>
        <h2>What is actually in the house.</h2>
        <p className="body">
          These are the same facts as the{' '}
          <a href="/#amenities">home amenities list</a> — nothing added for this page.
        </p>
        <ul className="amenity-list">
          <li>Five bedrooms (one king, four queens) and 4.5 bathrooms; sleeps 10</li>
          <li>3,600+ square feet</li>
          <li>Chef&apos;s kitchen and butler&apos;s pantry</li>
          <li>Covered porch with fireplace</li>
          <li>Two-car garage plus driveway parking</li>
          <li>Fully fenced backyard</li>
          <li>Dogs welcome — $75 per pet, per day; no cats</li>
        </ul>
        <p className="body">
          Concierge extras — golf cart rental, pre-arrival provisioning, and breakfast kits —
          are available if you <a href="/#concierge">ask when you book</a>.
        </p>
      </div>
    </section>
  );
}

function Neighborhood() {
  return (
    <section id="neighborhood" className="panel panel-light">
      <div className="wrap narrow prose">
        <p className="eyebrow">Neighborhood</p>
        <h2>Club Creek lodging inside the Auburn University Club.</h2>
        <p className="body">
          {SITE_NAME} is in Auburn, Alabama 36832, inside the Auburn University Club — a
          private golf community. We do not publish a street number. Distances we do publish:
          about ten minutes by car to Jordan-Hare Stadium, Toomer&apos;s Corner, and Auburn
          University&apos;s campus.
        </p>
        <p className="body">
          That campus drive is the one that matters on commencement morning. Neville Arena,
          where Auburn typically holds ceremonies, sits on campus — use the ten-minute campus
          figure, not a guessed walk. After the ceremony, Toomer&apos;s Corner is the usual
          photo stop; the house is the place you come back to.
        </p>
        <p className="body">
          More on the setting lives on the{' '}
          <a href="/#auburn">Auburn section of the homepage</a>. The{' '}
          <a href="/#gallery">gallery</a> shows the exterior.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Graduation FAQ</p>
        <h2>Before you book the weekend.</h2>
        {GRAD_FAQS.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p className="body">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Related() {
  return (
    <section className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Also on this site</p>
        <h2>Keep exploring {SITE_NAME}.</h2>
        <div className="related">
          <a href="/">Home</a>
          <a href="/#stay">The house</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#auburn">Auburn &amp; campus</a>
          <a href={GOLF_PATH}>Golf getaway</a>
          <a href="/#concierge">Concierge</a>
          <a href="#book">Book direct</a>
        </div>
      </div>
    </section>
  );
}

export default function Graduation() {
  return (
    <>
      <Nav page="graduation" />
      <Crumbs />
      <Hero />
      <Why />
      <Seasons />
      <Who />
      <Amenities />
      <Neighborhood />
      <Faq />
      <Reserve
        title="Reserve your graduation weekend"
        lede="Text or email the hosts with your spring commencement or December graduation dates. Same Club Creek house, booked direct — no third-party service fees."
      />
      <Related />
      <Footer page="graduation" />
      <MobileBookBar label="Book Graduation Weekend" />
    </>
  );
}
