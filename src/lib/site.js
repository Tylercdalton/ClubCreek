/** Public site + host contact already present in the production app (ContactReveal). */
export const SITE_URL = 'https://clubcreekrental.lovable.app';
export const SITE_NAME = 'The Hydrangea House';

export function absoluteUrl(pathOrUrl) {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** From src/components/ContactReveal.tsx in the live Lovable project (base64-decoded). */
export const HOST_PHONE_DIGITS = '3347971012';
export const HOST_PHONE_E164 = '+13347971012';
export const HOST_PHONE_DISPLAY = '(334) 797-1012';
export const HOST_EMAIL = 'tdalton508@gmail.com';

/** Already used on the live /stay LodgingBusiness schema. Do not invent a street number. */
export const HOST_POSTAL_CODE = '36832';
export const GEO = { latitude: 32.6099, longitude: -85.4808 };

export const OG_IMAGE = absoluteUrl(
  '/__l5e/assets-v1/e135cc3c-5af9-4a4f-933e-7ce646f205c0/home-hero.webp',
);

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
