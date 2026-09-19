/**
 * Canonical origin for this Vite + Cloudflare Pages site.
 *
 * Default is Tyler’s Pages project host:
 *   https://hydrangea-house-d7s.pages.dev
 * Pages project name is `hydrangea-house`. That is not the public brand.
 *
 * Do not use https://hydrangea-house.pages.dev — unrelated Kentucky studio.
 *
 * When clubcreekrental.com (or a similar custom host) is attached to THIS
 * project and verified to serve this Auburn STR HTML, set:
 *   VITE_SITE_URL=https://clubcreekrental.com
 * (no trailing slash) and rebuild. Until then, leave the d7s default.
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://hydrangea-house-d7s.pages.dev'
).replace(/\/$/, '');

/** Primary public brand. Matches clubcreekrental. */
export const SITE_NAME = 'Club Creek';
/** House nickname / subtitle only — never the lead brand. */
export const HOUSE_NICKNAME = 'Hydrangea House';
export const HOUSE_AKA = `also known as ${HOUSE_NICKNAME}`;

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** From the former production ContactReveal values. Do not invent replacements. */
export const HOST_PHONE_DIGITS = '3347971012';
export const HOST_PHONE_E164 = '+13347971012';
export const HOST_PHONE_DISPLAY = '(334) 797-1012';
export const HOST_EMAIL = 'tdalton508@gmail.com';

/** Already used on the former /stay schema. Do not invent a street number. */
export const HOST_POSTAL_CODE = '36832';
export const GEO = { latitude: 32.6099, longitude: -85.4808 };

/** Same-origin hero (copied into public/images). */
export const HERO_IMAGE_PATH = '/images/home-hero.webp';
export const OG_IMAGE = absoluteUrl(HERO_IMAGE_PATH);

/** Shared social-image contract — always absolute https + dimensions. */
export const OG_IMAGE_WIDTH = '1920';
export const OG_IMAGE_HEIGHT = '1200';

export function socialImageMeta(pathOrUrl) {
  const url = absoluteUrl(pathOrUrl);
  return {
    url,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
  };
}
