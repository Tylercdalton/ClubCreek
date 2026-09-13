# Wave 2 — historical Lovable notes (do not publish)

Owner decision 2026-09-08: production is this GitHub repo → Cloudflare Pages. Do not apply this file in Lovable for ship.

The remainder is a snapshot of the old TanStack preview gaps.

Wave 1 (absolute OG on most routes + sitemap `application/xml`) is already **live** after the 2026-09-08 publish. Keep `src/server.ts` `forceSitemapXmlContentType`. Do not invent a street number, extra testimonials, or star ratings.

## Remaining production gaps (curl-verified 2026-09-08)

- `/concierge` `og:image` still relative (`/__l5e/assets-v1/.../porch-tv.avif`)
- No crawlable `tel:` / `mailto:` in first HTML (footer still Reveal-only)
- `llms.txt` still titled `# Club Creek`
- Home HTML has no FAQPage / Review JSON-LD
- Root schema still city-only (no postalCode). Do not add telephone / email — personal host contact is hidden.
- Area eyebrow still “Distances from Club Creek”
- Google Fonts stylesheet still render-blocking

## 1. `src/lib/site.ts` — shared social helper (stops OG regression)

Add next to `absoluteUrl`:

```ts
export const OG_IMAGE_WIDTH = "1920";
export const OG_IMAGE_HEIGHT = "1200";

export function socialImageMeta(pathOrUrl: string) {
  const url = absoluteUrl(pathOrUrl);
  return [
    { property: "og:image", content: url },
    { property: "og:image:secure_url", content: url },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { name: "twitter:image", content: url },
  ];
}
```

On **every** public route head (index, stay, book, gallery, area, golf, concierge, journal.index, journal.$slug, service-area) **and** `__root.tsx` defaults: delete the existing `og:image` / `twitter:image` pair and spread `...socialImageMeta(theSameImageYouAlreadyUse)`.

**Must include `src/routes/concierge.tsx`** — it still passes raw `porch` and is the live regression.

## 2. Footer NAP in `__root.tsx` Footer

**Superseded (2026-09 privacy):** do not publish personal phone or Gmail. City + postal code only. Book-direct CTA, no `tel:` / `mailto:`.

```tsx
import { HOST_POSTAL_CODE } from "@/lib/site";
```

```tsx
<p className="mt-3 text-sm text-cream/90">Auburn, Alabama {HOST_POSTAL_CODE}</p>
<ul className="mt-3 space-y-1 text-sm">
  <li><a href="#book" className="text-cream/90 hover:text-cream">Book direct</a></li>
</ul>
```

Do not invent a street address. Do not add personal host contact.

## 3. Root LodgingBusiness in `__root.tsx`

On the existing LodgingBusiness object add:

- `postalCode: "36832"` (already on `/stay`)
- **Do not add `telephone` or `email`.** Personal host contact is hidden.
- Nest `containedInPlace` as Place “Auburn University Club” → City “Auburn”
- **No `streetAddress`. No AggregateRating.**

## 4. Home FAQPage + Review (no invented scores)

`src/routes/index.tsx` currently has the Jed quote and no FAQ block.

Add a visible FAQ section **using these four questions already on `/stay`** (copy verbatim):

1. How many guests can the Hydrangea House sleep?
2. How far is the house from Jordan-Hare Stadium and Auburn's campus?
3. Are pets allowed?
4. Do you book direct, and are there service fees?

Use the exact stay answers. Then emit FAQPage JSON-LD in `head()` for those same four.

Add Review JSON-LD for the **on-page Jed / Dallas quote only**:

- author: Jed (Dallas, TX)
- reviewBody: the existing quote about Emma / game weekend
- itemReviewed: `https://clubcreekrental.lovable.app/#lodging`

Do **not** add AggregateRating. Do **not** invent `ratingValue` or `reviewCount`. The ★★★★★ in the UI is decorative.

Add `<NearJordanHare exclude={["/"]} />` at the bottom of the homepage if missing.

## 5. Soft internal links (one sentence each, no spam)

- Home golf blurb: also link `/area` and `/journal`
- `/area` plan-around CTA: also link `/golf` and `/journal`
- `/journal` intro: also link `/golf`, `/area`, `/book`
- `/book` “Why direct” card: also link `/golf` and `/area`

## 6. Fonts + llms.txt + area eyebrow (PART3 leftovers)

`__root.tsx` fonts: keep the existing Google Fonts URL (`display=swap`). Add `rel="preload" as="style"` and load the stylesheet with `media="print"` + `onload="this.media='all'"` plus `<noscript>`.

`public/llms.txt`: primary public brand is **Club Creek**; Hydrangea House is nickname only. Location Auburn AL 36832. Do not include personal phone or email. Copy the GitHub repo `public/llms.txt` if easiest.

`area.tsx`: change eyebrow “Distances from Club Creek” → “Distances from The Hydrangea House”.

## 7. Image alts

Do not invent new photos. Gallery and hero already use `altFor(...)`. If any `<img>` on gallery/home/hero is missing `alt` or has `alt=""`, fill from `altFor`. Leave good alts alone.

## 8. Publish

Lovable editor → **Publish** (slug `clubcreekrental`). Preview is not production.

Verify against production:

```bash
curl -sL --compressed https://clubcreekrental.lovable.app/ | grep -aE 'og:image|mailto:|tel:|FAQPage|"@type":"Review"|AggregateRating'
curl -sI https://clubcreekrental.lovable.app/sitemap.xml | grep -i content-type
curl -sL --compressed https://clubcreekrental.lovable.app/concierge | grep -a og:image
curl -s https://clubcreekrental.lovable.app/llms.txt | head -8
```
