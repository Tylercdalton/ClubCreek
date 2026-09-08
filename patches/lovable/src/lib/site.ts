export const SITE_URL = "https://clubcreekrental.lovable.app";
export const SITE_NAME = "The Hydrangea House";

/** Prefix site-relative asset paths so OG/Twitter tags are absolute https URLs. */
export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** Host contact from ContactReveal.tsx (ENC_PHONE / ENC_EMAIL). Do not invent replacements. */
export const HOST_PHONE_DIGITS = "3347971012";
export const HOST_PHONE_E164 = "+13347971012";
export const HOST_PHONE_DISPLAY = "(334) 797-1012";
export const HOST_EMAIL = "tdalton508@gmail.com";

/** Already present on the /stay LodgingBusiness schema. No street number exists in-repo. */
export const HOST_POSTAL_CODE = "36832";
export const GEO = { latitude: 32.6099, longitude: -85.4808 };
