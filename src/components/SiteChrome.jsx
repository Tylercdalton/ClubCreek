import {
  GRADUATION_PATH,
  HOST_EMAIL,
  HOST_PHONE_DISPLAY,
  HOST_PHONE_E164,
  SITE_NAME,
} from '../lib/site.js';

function sectionHref(page, id) {
  return page === 'home' ? `#${id}` : `/#${id}`;
}

export function StatLine({ v, l }) {
  return (
    <div className="stat">
      <div className="serif stat-v">{v}</div>
      <div className="eyebrow">{l}</div>
    </div>
  );
}

export function Nav({ page = 'home' }) {
  const to = (id) => sectionHref(page, id);
  const homeHref = page === 'home' ? '#top' : '/';
  const gradHref = page === 'graduation' ? '#top' : GRADUATION_PATH;

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href={homeHref} className="word" aria-label={`${SITE_NAME} home`}>
          {SITE_NAME}
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="link" href={to('stay')}>
            THE HOUSE
          </a>
          <a className="link" href={to('gallery')}>
            GALLERY
          </a>
          <a className={`link${page === 'graduation' ? ' is-current' : ''}`} href={gradHref}>
            GRADUATION
          </a>
          <a className="link" href={to('auburn')}>
            AUBURN
          </a>
          <a className="link" href={to('concierge')}>
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

export function Reserve({
  heading = 'Check availability',
  lede = 'Text or email the hosts with your dates. Same house, no third-party service fees.',
}) {
  return (
    <section id="book" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Book direct</p>
        <h2>{heading}</h2>
        <p className="body">{lede}</p>
        <div className="stats">
          <a className="btn btn-solid" href={`tel:${HOST_PHONE_E164}`}>
            {HOST_PHONE_DISPLAY}
          </a>
          <a className="btn" href={`mailto:${HOST_EMAIL}`}>
            {HOST_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ page = 'home' }) {
  const to = (id) => sectionHref(page, id);
  const gradHref = page === 'graduation' ? '#top' : GRADUATION_PATH;

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
              <a href={gradHref}>Auburn graduation house</a>
            </li>
            <li>
              <a href={to('auburn')}>Auburn &amp; golf</a>
            </li>
            <li>
              <a href={to('gallery')}>Gallery</a>
            </li>
            <li>
              <a href={to('stay')}>The house</a>
            </li>
            <li>
              <a href="#book">Book direct</a>
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

export function MobileBookBar() {
  return (
    <div className="mobile-book-bar">
      <a href="#book">Check Availability</a>
    </div>
  );
}

export function SiteFrame({ page = 'home', children }) {
  return (
    <>
      <Nav page={page} />
      {children}
      <Footer page={page} />
      <MobileBookBar />
    </>
  );
}
