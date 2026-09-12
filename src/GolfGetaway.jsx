import { Footer, MobileBookBar, Nav, Reserve, StatLine } from './components/SiteChrome.jsx';
import { GRADUATION_PATH } from './lib/routes.js';
import { HERO_IMAGE_PATH, SITE_NAME } from './lib/site.js';

const GOLF_FAQS = [
  {
    q: 'Is The Hydrangea House in a golf community?',
    a: 'Yes. The house sits inside the Auburn University Club, a private golf community in Auburn, Alabama 36832. We do not publish a street number.',
  },
  {
    q: 'How many people can stay for an Auburn golf weekend?',
    a: 'The house sleeps 10 across five bedrooms — one king bed and four queen beds — with 4.5 baths so a group is not doubling up.',
  },
  {
    q: 'How far is the house from Jordan-Hare Stadium and Auburn’s campus?',
    a: 'It is a ten-minute drive to Jordan-Hare Stadium, Toomer’s Corner, and Auburn University’s campus. We do not publish distances to other golf courses or walking times.',
  },
  {
    q: 'Can we rent a golf cart?',
    a: 'Golf cart rental, pre-arrival provisioning, and breakfast kits are concierge extras — ask when you book.',
  },
  {
    q: 'Are pets allowed on a golf weekend?',
    a: 'Well-behaved dogs are welcome on request with a $75 per pet, per day fee. No cats. The backyard is fully fenced, and all pet waste must be picked up.',
  },
  {
    q: 'How do we book The Hydrangea House direct for a golf getaway?',
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
      <span>Auburn golf getaway</span>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta">
          <div className="eyebrow">AUBURN UNIVERSITY CLUB · GOLF WEEKEND</div>
          <div className="meta">Private golf community · 10-minute drive to campus</div>
        </div>
        <div className="hero-grid">
          <div>
            <h1 className="display display-page">
              An Auburn golf getaway.
              <br />
              <span className="display-italic">One house for the whole group.</span>
            </h1>
            <p className="serif lede">
              The Hydrangea House is a private five-bedroom Club Creek home inside the Auburn
              University Club — a golf community in Auburn, Alabama — sleeping 10 with 4.5
              baths. Book direct.
            </p>
            <div className="stats">
              <StatLine v="5" l="BEDROOMS" />
              <StatLine v="4½" l="BATHROOMS" />
              <StatLine v="10" l="SLEEPS" />
              <StatLine v="3,600+" l="SQ FT" />
            </div>
            <div className="cta-row">
              <a className="btn btn-solid" href="#book">
                Book the golf weekend
              </a>
              <a className="btn" href="/#stay">
                See the house
              </a>
            </div>
          </div>
          <div className="slot-frame">
            <img
              src={HERO_IMAGE_PATH}
              alt="The Hydrangea House in Auburn, Alabama — a five-bedroom golf-weekend rental inside the Auburn University Club"
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
        <h2>A golf-weekend house the whole group can share.</h2>
        <p className="body">
          An Auburn golf weekend works better when the group is under one roof. The Hydrangea
          House is five bedrooms (one king, four queens), 4.5 baths, and 3,600+ square feet —
          enough that ten people are not splitting hotel rooms or doubling up.
        </p>
        <p className="body">
          The house (Club Creek to friends and family) sits inside the Auburn University Club, a
          private golf community. Distances we publish: about ten minutes by car to Jordan-Hare
          Stadium, Toomer&apos;s Corner, and Auburn University&apos;s campus. We do not publish
          distances to other courses, green fees, or a walking time.
        </p>
        <p className="body">
          Book direct with the hosts. Same house you would find on a listing site, without
          third-party service fees. Text or email your dates.
        </p>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section id="who" className="panel">
      <div className="wrap">
        <p className="eyebrow">Who it&apos;s for</p>
        <h2>Golf groups, game weekends, and quiet weeks on The Plains.</h2>
        <div className="card-grid card-grid-3">
          <article className="card">
            <p className="eyebrow">The group</p>
            <h3>Ten beds, one driveway</h3>
            <p className="body">
              Five private bedrooms and 4.5 baths keep a golf or friends weekend from feeling
              like a condo. A two-car garage plus driveway parking keeps the cars in one place.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Game day</p>
            <h3>Ten minutes to Jordan-Hare</h3>
            <p className="body">
              The same house is built for game weekends. It is a ten-minute drive to the
              stadium, Toomer&apos;s Corner, and campus — close enough for kickoff, quiet
              enough that you are not on a stadium block.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">After the round</p>
            <h3>Kitchen, porch, lawn</h3>
            <p className="body">
              A chef&apos;s kitchen and butler&apos;s pantry handle dinner without a reservation
              scramble. The covered porch has a fireplace; the backyard is fully fenced.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section id="amenities" className="panel panel-light">
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
    <section id="neighborhood" className="panel">
      <div className="wrap narrow prose">
        <p className="eyebrow">Neighborhood</p>
        <h2>Club Creek lodging inside the Auburn University Club.</h2>
        <p className="body">
          The Hydrangea House is in Auburn, Alabama 36832, inside the Auburn University Club —
          a private golf community. We do not publish a street number. Distances we do
          publish: about ten minutes by car to Jordan-Hare Stadium, Toomer&apos;s Corner, and
          Auburn University&apos;s campus.
        </p>
        <p className="body">
          We do not list other course names, trail facilities, or drive times we have not
          already published on this site. Ask the hosts when you book if you need help planning
          a weekend that mixes golf and campus.
        </p>
        <p className="body">
          More on the setting lives on the{' '}
          <a href="/#auburn">Auburn section of the homepage</a>. Families here for commencement
          should use the <a href={GRADUATION_PATH}>Auburn graduation house</a> page.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="panel panel-light">
      <div className="wrap narrow">
        <p className="eyebrow">Golf weekend FAQ</p>
        <h2>Before you book the weekend.</h2>
        {GOLF_FAQS.map((f) => (
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
    <section className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Also on this site</p>
        <h2>Keep exploring The Hydrangea House.</h2>
        <div className="related">
          <a href="/">Home</a>
          <a href="/#stay">The house</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#auburn">Auburn &amp; campus</a>
          <a href={GRADUATION_PATH}>Graduation house</a>
          <a href="#book">Book direct</a>
        </div>
      </div>
    </section>
  );
}

export default function GolfGetaway() {
  return (
    <>
      <Nav page="golf" />
      <Crumbs />
      <Hero />
      <Why />
      <Who />
      <Amenities />
      <Neighborhood />
      <Faq />
      <Reserve
        title="Reserve your golf weekend"
        lede="Text or email the hosts with your dates. Same Hydrangea House, booked direct — no third-party service fees."
      />
      <Related />
      <Footer page="golf" />
      <MobileBookBar label="Book Golf Weekend" />
    </>
  );
}
