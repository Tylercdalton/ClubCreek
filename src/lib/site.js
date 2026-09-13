/**
 * Canonical origin for this Vite + Cloudflare Pages site.
 * Override at build time with VITE_SITE_URL (no trailing slash).
 * Pages project name is hydrangea-house. The public hostname is
 * https://hydrangea-house-d7s.pages.dev — hydrangea-house.pages.dev is a
 * different, unrelated site. Override with VITE_SITE_URL when a custom
 * domain is attached (no trailing slash).
 */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://hydrangea-house-d7s.pages.dev'
).replace(/\/$/, '');
export const SITE_NAME = 'The Hydrangea House';

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
