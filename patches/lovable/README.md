# Production (Lovable) SEO patches

Apply these against the TanStack Start app in Lovable project `86103f67-e59e-4c37-ad94-2e8e042bbabd`.

**Status:** Parts 1–2 were applied in Lovable (`absoluteUrl` + sitemap Content-Type). Part 3 (footer NAP, schema postalCode, fonts, llms.txt, concierge OG) is documented in `PART3.md` — the Lovable workspace ran out of credits before that turn.

## 1. Absolute OG / Twitter images

Import `absoluteUrl` from `src/lib/site.ts` and wrap every `og:image` / `twitter:image` value. Live first HTML currently emits relative paths on `/`, `/book`, `/gallery`, `/area`, `/golf`, `/concierge`, and `/journal/:slug`. `/stay` already prefixes the origin — switch it to the helper.

Add default absolute images on `__root.tsx` so policy/legal pages inherit them.

## 2. Sitemap Content-Type

`src/routes/sitemap[.]xml.ts` already returns `application/xml`, but Lovable's edge serves `text/html`. In `src/server.ts` `fetch`, after the Start handler returns, if `pathname === "/sitemap.xml"` set:

`Content-Type: application/xml; charset=utf-8`

Also ship `public/sitemap.xml` + `public/_headers` as a static fallback.

## 3. Footer NAP

Decode is unnecessary for SEO. Footer should include crawlable:

- `tel:+13347971012` → (334) 797-1012
- `mailto:tdalton508@gmail.com`

Values come from `ContactReveal`. Keep the reveal control if desired; do not invent a street number.

## 4. Schema

Root LodgingBusiness is city-only. Add `postalCode: "36832"` (already on `/stay`), `telephone`, `email`, and nest `containedInPlace` as Auburn University Club → City of Auburn. No `streetAddress`.

## 5. Fonts

Google Fonts URL already has `display=swap`. Add `rel="preload" as="style"` and load the stylesheet with `media="print"` + `onload="this.media='all'"` (plus `<noscript>`).

## 6. Brand

`public/llms.txt` still says Club Creek. Public name is The Hydrangea House; Club Creek is the nickname.
