import { Footer, MobileBookBar, Nav, Reserve, StatLine } from './components/SiteChrome.jsx';
import { GOLF_PATH, GRADUATION_PATH } from './lib/routes.js';
import { HERO_IMAGE_PATH, HOUSE_AKA, SITE_NAME } from './lib/site.js';

/** Official AU Club member artwork can replace this file. Not an athletics logo. */
const MEMBER_LOGO_PATH = '/auc-member-logo.svg';

/**
 * Auburn University Club events live on the club’s Wix site.
 * Last checked 2026-09-13: no public ICS, no embeddable calendar, no events API.
 * /calendar 301s to /memberevents (SMS QR only). /_api/wix-events/v1/events → 404.
 * https://www.augolfclub.com/category/all-products is a store/event-registration
 * archive (past Bunco, Fall Festival, tree lighting, dances) — not a live feed.
 * Do not scrape it at build or runtime. Do not invent upcoming dates.
 */
const AUC_EVENTS_LIST_URL = 'https://www.augolfclub.com/category/all-products';
const AUC_EVENTS_CHECKED = '13 September 2026';

const MEMBER_FAQS = [
  {
    q: 'Can Auburn University Club national members stay at Club Creek year-round?',
    a: 'Yes. National members come and stay year-round — golf weekends, club dinners, family visits, and quiet weeks — not only football. Dates are first-come; multi-stay is preferred.',
  },
  {
    q: 'How close is Club Creek to the Auburn University Club clubhouse?',
    a: 'The house sits inside the Auburn University Club community at Yarbrough Farms, just around the corner from the clubhouse. We do not publish a street number.',
  },
  {
    q: 'Is Club Creek an official hotel or partner of Auburn University Club?',
    a: 'No. Club Creek is a privately owned home inside the club community. We are not an official partner of Auburn University or Auburn University Club. Membership, tee times, and dining are arranged through the club.',
  },
  {
    q: 'Do you offer a national-member discount or season pass?',
    a: 'We do not publish a membership discount schedule. Multi-stay is preferred — the same house as your local spot when you come back for golf, events, or family weekends. Ask about your dates when you book direct.',
  },
  {
    q: 'How many people can stay for an AU Club member weekend?',
    a: 'The house sleeps 10 across five bedrooms — one king bed and four queen beds — with 4.5 baths so a family or friend group is not doubling up.',
  },
  {
    q: 'Is this stay only for Auburn football weekends?',
    a: 'No. This page is for year-round national-member stays: golf, club events, dinners, family weekends, and reunions. Game-day groups can still book, but that is not the only use.',
  },
  {
    q: 'Are pets allowed during a member stay?',
    a: 'Well-behaved dogs are welcome on request with a $75 per pet, per day fee. No cats. The backyard is fully fenced, and all pet waste must be picked up.',
  },
  {
    q: 'How do we book Club Creek direct for an AU Club member stay?',
    a: 'Use the Book direct section on this page to request dates. Bookings are direct, with no third-party service fees. Hosts typically reply within the hour, 8a–8p CT.',
  },
  {
    q: 'Where do we see upcoming Auburn University Club member events?',
    a: 'Event dates and registration are managed by Auburn University Club, not by Club Creek. Open the club’s public Upcoming Events list on augolfclub.com. We do not publish a synced calendar — the club does not offer a public ICS or embed.',
  },
];

function Crumbs() {
  return (
    <nav className="wrap crumbs" aria-label="Breadcrumb">
      <a href="/">{SITE_NAME}</a>
      <span className="crumbs-sep" aria-hidden="true">
        /
      </span>
      <span>AU Club member stay</span>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-meta">
          <div className="eyebrow">AUBURN UNIVERSITY CLUB · NATIONAL MEMBERS</div>
          <div className="meta">Year-round stays · just around the corner from the clubhouse</div>
        </div>
        <div className="hero-grid">
          <div>
            <img
              className="member-logo"
              src={MEMBER_LOGO_PATH}
              alt="Auburn University Club national member mark. Replace public/auc-member-logo.svg with the official member logo; this is a typographic placeholder, not an athletics trademark."
              width="320"
              height="80"
            />
            <h1 className="display display-page">
              An Auburn University Club member stay.
              <br />
              <span className="display-italic">Just around the corner from the clubhouse.</span>
            </h1>
            <p className="serif lede">
              Hey — {SITE_NAME} is a luxury five-bedroom home inside the Auburn University Club
              community. National members come and stay year-round. {HOUSE_AKA}. Multi-stay
              preferred. Book direct.
            </p>
            <div className="stats">
              <StatLine v="5" l="BEDROOMS" />
              <StatLine v="4½" l="BATHROOMS" />
              <StatLine v="10" l="SLEEPS" />
              <StatLine v="3,600+" l="SQ FT" />
            </div>
            <div className="cta-row">
              <a className="btn btn-solid" href="#book">
                Book this stay
              </a>
              <a className="btn" href="/#stay">
                See the house
              </a>
            </div>
          </div>
          <div className="slot-frame">
            <img
              src={HERO_IMAGE_PATH}
              alt={`${SITE_NAME} in Auburn, Alabama — a five-bedroom luxury stay inside the Auburn University Club`}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Corner() {
  return (
    <section id="clubhouse" className="panel panel-light">
      <div className="wrap narrow prose">
        <p className="eyebrow">The setting</p>
        <h2>Just around the corner from the clubhouse.</h2>
        <p className="body">
          Hey — we are just around the corner from the clubhouse. {SITE_NAME} sits inside the
          Auburn University Club community at Yarbrough Farms, not across town and not on a
          hotel strip. After a round, a dinner, or a Saturday event, you come home to the same
          neighborhood as the club.
        </p>
        <p className="body">
          The house ({HOUSE_AKA}) is a private residence in that community. We do not publish a
          street number. Distances we do publish: about ten minutes by car to Auburn
          University&apos;s campus, Toomer&apos;s Corner, and Jordan-Hare Stadium — useful when
          a member weekend also includes campus, not a claim that this is a gameday-only house.
        </p>
        <p className="body">
          Auburn University Club is a private club. Membership, tee times, and clubhouse dining
          are arranged through the club — see the public site at{' '}
          <a href="https://www.augolfclub.com/" rel="noopener noreferrer">
            augolfclub.com
          </a>
          . {SITE_NAME} is not an official partner of Auburn University or Auburn University
          Club.
        </p>
      </div>
    </section>
  );
}

function YearRound() {
  return (
    <section id="year-round" className="panel">
      <div className="wrap">
        <p className="eyebrow">Year-round, not gameday-only</p>
        <h2>National members come and stay year-round.</h2>
        <p className="body body-wide">
          If you already belong to Auburn University Club from out of town, the calendar is
          bigger than football Saturday. National members travel for golf, club events, dinners,
          family weekends, and reunions. This house is built for those trips — a luxury stay
          inside AUC when you want your own kitchen, bedrooms, and porch instead of a hotel.
        </p>
        <div className="card-grid card-grid-3">
          <article className="card">
            <p className="eyebrow">Golf</p>
            <h3>Play, then walk home</h3>
            <p className="body">
              Book a golf weekend when you want the course, not the stadium. Five bedrooms keep
              a foursome plus family under one roof. Golf-cart rental is a concierge extra —
              ask when you book. Course details and tee times live with the club, not on this
              page.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Club life</p>
            <h3>Dinners and events</h3>
            <p className="body">
              Member-guest weekends, holiday dinners, and Saturday nights at the clubhouse are
              the nights national members already drive in for. Sleep around the corner instead
              of booking a hotel and driving back out of the community. Current dates live on
              the club&apos;s <a href="#events">Upcoming AU Club member activities</a> list.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Family</p>
            <h3>Weekends that are not football</h3>
            <p className="body">
              Reunions, parents weekend, Camp War Eagle, or a quiet week on the porch. The same
              4.5 baths and chef&apos;s kitchen that work for a golf group work for grandparents
              and kids who need a door to close.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function MultiStay() {
  return (
    <section id="multi-stay" className="panel panel-light">
      <div className="wrap narrow prose">
        <p className="eyebrow">How members use the house</p>
        <h2>Multi-stay preferred — your home away from home in AU Club.</h2>
        <p className="body">
          We can be your home away from home, your local spot, and your luxury stay in AU Club.
          National members already come more than once. Multi-stay is preferred: the same
          address, the same bedrooms, the same walk to the clubhouse — a rhythm, not a hotel
          lottery every visit.
        </p>
        <p className="body">
          That is not a published discount program or a club-sponsored season pass. We do not
          invent member rates here. It is how the house works best: you know the kitchen, the
          porch, and the drive, and we know you are coming back.
        </p>
        <p className="body">
          Book direct. Same {SITE_NAME} house you would find on a listing site, without
          third-party service fees. Use the Book direct section to request your dates.
        </p>
      </div>
    </section>
  );
}

function WhenToBook() {
  return (
    <section id="when" className="panel">
      <div className="wrap">
        <p className="eyebrow">When to book</p>
        <h2>Worked examples for a national-member calendar.</h2>
        <p className="body body-wide">
          These are planning sketches, not packages. Availability is first-come. We do not
          publish rates, green fees, or a membership discount on this page.
        </p>
        <div className="card-grid card-grid-2">
          <article className="card">
            <p className="eyebrow">Example 1</p>
            <h3>A Friday–Sunday golf weekend</h3>
            <p className="body">
              Arrive Friday afternoon. Saturday is a full day at the club — golf in the morning,
              the house for lunch or a rest, dinner however you like. Sunday is a shorter
              window: one more nine, or coffee on the porch before you drive home. Three nights
              is enough that the group is not living out of a suitcase in a lobby.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Example 2</p>
            <h3>A multi-visit season</h3>
            <p className="body">
              Think in a year, not a single weekend. A spring golf stay, a midsummer family
              week, and a fall club-event weekend is the pattern national members already live.
              Book those dates as a set when you can. Multi-stay preferred — the house becomes
              the local spot you return to, without a fake “season pass” price on this site.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Example 3</p>
            <h3>A dinner or event weekend</h3>
            <p className="body">
              The reason for the trip is a club dinner, a member event, or a Saturday night you
              do not want to rush. Sleep around the corner. The chef&apos;s kitchen covers the
              night you are not at the clubhouse; the covered porch is the after-party that is
              still quiet.
            </p>
          </article>
          <article className="card">
            <p className="eyebrow">Example 4</p>
            <h3>A mid-week reset</h3>
            <p className="body">
              Tuesday through Thursday, when the course and the community are quieter. Ten
              people can still fit; a couple can use two of the five bedrooms and treat the
              house as a luxury stay inside AUC. Ask about shoulder dates when you book
              direct.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ClubEvents() {
  return (
    <section id="events" className="panel panel-light">
      <div className="wrap narrow prose">
        <p className="eyebrow">Club calendar</p>
        <h2>Upcoming AU Club member activities.</h2>
        <p className="body">
          National members already come back for dinners, festivals, and family nights at the
          clubhouse. Those dates are set by Auburn University Club — not by {SITE_NAME}. We are
          not an official partner, and we do not invent a calendar feed.
        </p>
        <p className="body">
          The durable way to see what is next is the club&apos;s own Upcoming Events list
          (Wix event-registration pages). There is no public ICS or embed to sync. Last
          checked {AUC_EVENTS_CHECKED}: the listing is a live store/archive, so we link out
          instead of copying dates that go stale.
        </p>
        <div className="cta-row">
          <a
            className="btn btn-solid"
            href={AUC_EVENTS_LIST_URL}
            rel="noopener noreferrer"
          >
            AUC upcoming events
          </a>
          <a className="btn" href="#book">
            Book a stay around an event
          </a>
        </div>
        <p className="fine events-source">
          Source: Auburn University Club ·{' '}
          <a href={AUC_EVENTS_LIST_URL} rel="noopener noreferrer">
            augolfclub.com/category/all-products
          </a>
          . Checked {AUC_EVENTS_CHECKED}.
        </p>
      </div>
    </section>
  );
}

function Snapshot() {
  return (
    <section id="house" className="panel panel-light">
      <div className="wrap">
        <p className="eyebrow">House snapshot</p>
        <h2>A luxury stay in AUC: 5BR / 4.5BA, sleeps 10.</h2>
        <p className="body body-wide">
          The same facts as the rest of this site — nothing added for national members.{' '}
          {SITE_NAME} is 3,600+ square feet inside the Auburn University Club community.
        </p>
        <div className="stats snapshot-stats">
          <StatLine v="5" l="BEDROOMS" />
          <StatLine v="4½" l="BATHROOMS" />
          <StatLine v="10" l="SLEEPS" />
          <StatLine v="3,600+" l="SQ FT" />
        </div>
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
          are available if you <a href="/#concierge">ask when you book</a>. More photos live in
          the <a href="/#gallery">gallery</a>.
        </p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Member stay FAQ</p>
        <h2>Before you book the stay.</h2>
        {MEMBER_FAQS.map((f) => (
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
          <a href={GRADUATION_PATH}>Graduation house</a>
          <a href={GOLF_PATH}>Golf getaway</a>
          <a href="#book">Book direct</a>
        </div>
      </div>
    </section>
  );
}

export default function MemberStay() {
  return (
    <>
      <Nav page="members" />
      <Crumbs />
      <Hero />
      <Corner />
      <YearRound />
      <MultiStay />
      <WhenToBook />
      <ClubEvents />
      <Snapshot />
      <Faq />
      <Reserve
        title="Reserve your AU Club member stay"
        lede="Same Club Creek house, booked direct — no third-party service fees. Multi-stay preferred. Use this page to request your dates."
        cta="Book this stay"
      />
      <Related />
      <Footer page="members" />
      <MobileBookBar label="Book Member Stay" />
    </>
  );
}
