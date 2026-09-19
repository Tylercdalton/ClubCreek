import {
  HOST_EMAIL,
  HOST_PHONE_DISPLAY,
  HOST_PHONE_E164,
  HOUSE_AKA,
  SITE_NAME,
} from '../lib/site.js';
import { GOLF_PATH, GRADUATION_PATH } from '../lib/routes.js';

export function BrandLockup({ href }) {
  const label = `${SITE_NAME} home, ${HOUSE_AKA}`;
  if (href) {
    return (
      <a href={href} className="brand-lockup" aria-label={label}>
        <span className="word">{SITE_NAME}</span>
        <span className="aka">{HOUSE_AKA}</span>
      </a>
    );
  }

  return (
    <p className="brand-lockup">
      <span className="word">{SITE_NAME}</span>
      <span className="aka">{HOUSE_AKA}</span>
    </p>
  );
}

function hashHref(page, id) {
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
  const homeHref = page === 'home' ? '#top' : '/';

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <BrandLockup href={homeHref} />
        <nav className="nav-mobile" aria-label="Quick">
          <a
            className={`link${page === 'graduation' ? ' is-current' : ''}`}
            href={GRADUATION_PATH}
          >
            GRADUATION
          </a>
          <a className={`link${page === 'golf' ? ' is-current' : ''}`} href={GOLF_PATH}>
            GOLF
          </a>
        </nav>
        <nav className="nav-links" aria-label="Primary">
          <a className="link" href={hashHref(page, 'stay')}>
            THE HOUSE
          </a>
          <a className="link" href={hashHref(page, 'gallery')}>
            GALLERY
          </a>
          <a
            className={`link${page === 'graduation' ? ' is-current' : ''}`}
            href={GRADUATION_PATH}
            aria-current={page === 'graduation' ? 'page' : undefined}
          >
            GRADUATION
          </a>
          <a
            className={`link${page === 'golf' ? ' is-current' : ''}`}
            href={GOLF_PATH}
            aria-current={page === 'golf' ? 'page' : undefined}
          >
            GOLF
          </a>
          <a className="link" href={hashHref(page, 'auburn')}>
            AUBURN
          </a>
          <a className="link" href={hashHref(page, 'concierge')}>
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

export function Footer({ page = 'home' }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <BrandLockup />
          <p className="body">
            A serene retreat for game days, gatherings, graduation weekends &amp; quiet
            weeks in Auburn, Alabama.
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <ul className="footer-contact">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href={hashHref(page, 'stay')}>The house</a>
            </li>
            <li>
              <a href={GRADUATION_PATH}>Auburn graduation house</a>
            </li>
            <li>
              <a href={GOLF_PATH}>Auburn golf getaway</a>
            </li>
            <li>
              <a href={hashHref(page, 'auburn')}>Auburn &amp; campus</a>
            </li>
            <li>
              <a href={hashHref(page, 'gallery')}>Gallery</a>
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

export function MobileBookBar({ label = 'Check Availability' }) {
  return (
    <div className="mobile-book-bar">
      <a href="#book">{label}</a>
    </div>
  );
}

export function Reserve({
  title = 'Check availability',
  lede = 'Text or email the hosts with your dates. Same house, no third-party service fees.',
}) {
  return (
    <section id="book" className="panel">
      <div className="wrap narrow">
        <p className="eyebrow">Book direct</p>
        <h2>{title}</h2>
        <p className="body">{lede}</p>
        <div className="cta-row">
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
