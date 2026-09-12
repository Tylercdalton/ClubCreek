# SEO audit — The Hydrangea House / Club Creek

Audited 2026-09-12 against GitHub `main` (includes merged PR #2, SHA `16efe2663078817df78d206a920f490d42594da6`), open PR #3, and the live Cloudflare Pages project on Tyler’s account `e2b560bf932d2951103bd52d4788199b`.

Encited is connected to `alabamapharmtech.com`, `dalton-insuranceagency.com`, and a pending `alliedhealthtraining.org` — **not** this rental. No Encited crawl, GSC, or keyword tools were run for this hostname.

## Production path (do not use Lovable)

| Item | Correct value |
| --- | --- |
| Ship path | GitHub `Tylercdalton/ClubCreek` `main` → Cloudflare Pages only |
| Pages **project name** | `hydrangea-house` |
| Production URL | **`https://hydrangea-house-d7s.pages.dev`** |
| Graduation (live on `main`) | **`https://hydrangea-house-d7s.pages.dev/auburn-graduation-house/`** |
| Golf (this branch) | **`https://hydrangea-house-d7s.pages.dev/auburn-golf-getaway/`** |
| Preview pattern | `https://<alias>.hydrangea-house-d7s.pages.dev` |
| Known good preview | `https://cursor-auburn-graduation-hou.hydrangea-house-d7s.pages.dev/auburn-graduation-house/` |
| Custom domain | none |
| Old Lovable | `https://clubcreekrental.lovable.app` (not production; still live) |

### `hydrangea-house.pages.dev` is not this site

`https://hydrangea-house.pages.dev` serves an unrelated Kentucky interior design business (“Hydrangea House Co.” / Ashley Schaaf). Cloudflare gave this project the public hostname `hydrangea-house-d7s.pages.dev` because the short name was taken.

`https://hydrangea-house.pages.dev/auburn-graduation-house/` returns HTTP 200 with **that studio’s homepage**, not a Club Creek fallback. Do not treat it as a routing bug on this repo. Do not put that host in canonicals, sitemap, robots, OG, or CTAs.

`wrangler.jsonc` `name: "hydrangea-house"` and `npm run pages:deploy` (`--project-name hydrangea-house`) are the **project name**. They are correct. The **public origin** must be `https://hydrangea-house-d7s.pages.dev` until a custom domain on *this* project is verified to serve Auburn STR content.

### What must be true for the live graduation URL

Already true after PR #2 merged to `main` (production deploy `16efe26`):

1. Pages project `hydrangea-house` is Git-connected to `Tylercdalton/ClubCreek`, production branch `main`.
2. Build is `npm run build` → `dist`.
3. Vite multi-page input includes `auburn-graduation-house/index.html`.
4. Live path: `https://hydrangea-house-d7s.pages.dev/auburn-graduation-house/` → 200, title `Auburn Graduation House | Hydrangea House near Auburn University`, FAQPage in first HTML.
5. `/auburn-graduation-house` (no slash) → 308 → `/auburn-graduation-house/`.
6. `/graduation` and `/auburn-graduation` → 301 → the graduation document.
7. Preview deploys send `x-robots-tag: noindex`. Production on `hydrangea-house-d7s.pages.dev` does **not**.

Still required (this PR):

1. Default `VITE_SITE_URL` / `__SITE_ORIGIN__` rewrite to `https://hydrangea-house-d7s.pages.dev` so canonical/OG/sitemap/robots stop pointing at the Kentucky site.
2. Graduation **H1 in raw HTML** (`Coming to Auburn for graduation? Look no further, stay right here.`) via `#seo-shell`.
3. Canonical and sitemap locs use the trailing slash Pages actually serves.
4. `public/404.html` so unknown paths (`/stay`, `/this-page-does-not-exist`) do not 200 the homepage.

Do **not** merge open PR #3 (`/auburn-graduation/`). It is a second graduation document and would compete with `/auburn-graduation-house/`. Close it.

## Crawlable first HTML vs SPA shell

Each public URL is its **own HTML document** (Vite MPA), not a client-only route. That is the right model.

**Before this PR (live `main`):**

- Head is strong: unique title, description, canonical, OG/Twitter, JSON-LD.
- Body first HTML is an empty `#root` plus a `display:none` NAP footer.
- **No H1 in raw HTML.** Google that executes JS sees the React H1; no-JS and some raw-source checks do not.

**This PR:** `#seo-shell` in each document carries H1, lede, and internal links. React hides it on hydrate so the painted page is not double-H1.

Home still hydrates the long page in JS. That is acceptable for Googlebot; it is weaker for raw-source and no-JS. Do not add `/* /index.html 200`.

## Titles / meta / canonical / OG / Twitter

| Page | Title | Notes |
| --- | --- | --- |
| `/` | Luxury Auburn Gameday House, Sleeps 10 \| Hydrangea House | OG title says “Sleeps 10+”; FAQ says sleeps 10. P1 consistency. |
| `/auburn-graduation-house/` | Auburn Graduation House \| Hydrangea House near Auburn University | Unique. H1 is Tyler’s line; title stays graduation/Hydrangea House. |
| `/auburn-golf-getaway/` | Auburn Golf Getaway \| Hydrangea House at Auburn University Club | New. Facts only (AUC golf community; no invented RTJ distances). |

**P0 (fixed here):** live canonical/OG/sitemap/robots used `https://hydrangea-house.pages.dev`. Social image `https://hydrangea-house.pages.dev/images/home-hero.webp` 200s as **HTML** on the Kentucky host (no image).

**P1 (fixed here):** directory pages now canonicalize with trailing `/` to match the 308. Added `og:image:alt` / `twitter:image:alt`.

**P2:** no `twitter:site`. OG type is `website` (fine for these landing pages). `priceRange: "$$$"` is already on-site; do not invent nightly rates.

## robots.txt / sitemap.xml / llms.txt

Live `https://hydrangea-house-d7s.pages.dev/robots.txt` is `text/plain`, `Allow: /`, but Sitemap pointed at the Kentucky host.

Live sitemap is `application/xml` (`public/_headers`) and listed `/` plus slashless graduation on the wrong host.

`llms.txt` is served `text/plain`. This PR adds the golf page, the real hostname, and the Kentucky-host warning.

Preview URLs must stay out of the sitemap (`x-robots-tag: noindex` on `*.hydrangea-house-d7s.pages.dev` branch aliases).

## JSON-LD

Present on first HTML:

| Type | Home | Graduation | Golf |
| --- | --- | --- | --- |
| WebSite | yes | yes | yes |
| LodgingBusiness + VacationRental | yes (shared `@id` `/#lodging`) | yes | yes |
| WebPage | no (P2) | yes | yes |
| BreadcrumbList | n/a | yes | yes |
| FAQPage | 4 home FAQs | 6 graduation FAQs | 6 golf FAQs |
| Review | Jed / Dallas only | no | no |
| AggregateRating | **absent (correct)** | **absent** | **absent** |

Lodging schema has city + `36832` + phone + email. **No streetAddress** (correct). `geo` is Auburn-city coordinates already in the repo — do not treat as a pin on the house.

Graduation/golf extend occupancy (10) and `amenityFeature` from on-page lists. Home schema is thinner (P2 to align).

## H1s / internal links / NAP

- Home H1: “The Hydrangea House”.
- Graduation H1: “Coming to Auburn for graduation? Look no further, stay right here.”
- Golf H1: “An Auburn golf getaway. One house for the whole group.”
- One H1 per painted page after hydrate.

Internal links: home ↔ graduation ↔ golf; hash links to `#stay` `#gallery` `#auburn` `#concierge` `#book`. Footer and nav include both landing pages.

NAP in first HTML (`tel:+13347971012`, `mailto:tdalton508@gmail.com`, Auburn, Alabama / 36832 in footer after hydrate). No street number.

## Images / alt / LCP

- Only photo: `public/images/home-hero.webp` (~212 KB). Used as hero, gallery, and OG (1920×1200 declared).
- Alts are descriptive, not empty.
- LCP is that image plus two Google Fonts families (Cormorant Garamond + Jost) loaded with preload / `media=print` swap. Still a third-party font RTT on LCP.
- Hero `fetchpriority="high"` added on the three documents.
- Gallery is one repeated exterior (P2: more same-origin photos when they exist — do not invent).

## Performance notes

- MPA JS still required to paint the designed page.
- `cache-control: public, max-age=0, must-revalidate` on HTML (normal for Pages).
- No image CDN / srcset. Fine at this size; next win is self-hosting font files or subsetting.
- Sticky mobile book bar is `position: fixed` — already padded in the footer.

## `x-robots-tag` risks

| Host | Header | Risk |
| --- | --- | --- |
| `hydrangea-house-d7s.pages.dev` (production) | none | Correct — indexable. |
| `*.hydrangea-house-d7s.pages.dev` branch previews | `x-robots-tag: noindex` | Correct. Do not submit preview URLs to GSC. |
| `clubcreekrental.lovable.app` | no x-robots observed | Duplicate production-like site. P1: noindex or 301 once you control it. |
| `hydrangea-house.pages.dev` | n/a | Foreign site. Our sitemap must not send Google there. |

Do not add a sitewide `noindex` in `public/_headers`.

## Custom domain readiness

- Only domain on the Pages project today: `hydrangea-house-d7s.pages.dev`.
- To attach a custom domain: Pages → Custom domains → add host → DNS CNAME to `hydrangea-house-d7s.pages.dev` (or Cloudflare proxy). Then set production env `VITE_SITE_URL=https://<that-host>` (no trailing slash) and rebuild so canonicals match.
- Verify the custom host serves **this** repo’s Auburn STR HTML before flipping `VITE_SITE_URL`.

## GSC readiness

Nothing in Encited / GSC is tied to this hostname.

After this PR is on production:

1. Add a **URL-prefix** property for `https://hydrangea-house-d7s.pages.dev` (or the future custom domain — prefer the custom domain as the property).
2. Verify via DNS or HTML file (Pages can serve a verification file from `public/`).
3. Submit `https://hydrangea-house-d7s.pages.dev/sitemap.xml`.
4. Inspect `/`, `/auburn-graduation-house/`, `/auburn-golf-getaway/`.
5. When a custom domain is live, make that the GSC property and leave the pages.dev property as a leftover or remove it.
6. Optional: connect the same domain in Encited for crawls and GSC.

## Graduation page (PR #2) — bugs only

Graduation was **not** missing on the correct host. Raw HTML already had unique title/meta/FAQPage. Bugs found:

1. Canonical/OG/schema URLs used the Kentucky host and omitted the trailing slash.
2. H1 existed only after JS.
3. Open PR #3 would duplicate the page at `/auburn-graduation/`.

No copy rewrite. No second graduation URL.

## Golf getaway page

Did **not** exist as a static HTML document. Old Lovable `/golf` 404s here (and was homepage-fallback on live Pages). This PR adds `/auburn-golf-getaway/` with its own title/meta/canonical/OG/FAQ/WebPage schema, nav/footer/sitemap/`llms.txt`, and `/golf` + `/auburn-golf` 301s.

Facts used only: 5BR / 4.5BA, sleeps 10 (1 king / 4 queens), 3,600+ sq ft, Auburn University Club (private golf community), 10-minute drive to campus / Jordan-Hare / Toomer’s, listed amenities, dog fee, golf-cart concierge, phone `(334) 797-1012`, email `tdalton508@gmail.com`. No street address, prices, review scores, or invented RTJ / other-course distances.

## Prioritized fixes

### P0 — do now

1. **Point origin at `https://hydrangea-house-d7s.pages.dev`.** Stop emitting `hydrangea-house.pages.dev` in canonical, OG, Twitter, JSON-LD, sitemap, robots. (This PR.)
2. **Keep graduation as its own HTML document** on the Git-connected project. Do not “fix” the Kentucky host. (Already true on d7s; this PR adds raw-HTML H1 + trailing-slash canonical.)
3. **Stop homepage 200s on unknown paths.** Add `404.html`. Do not add an SPA catch-all. (This PR.)
4. **Do not merge PR #3.** Close the `/auburn-graduation/` duplicate.
5. **Do not publish Lovable.** Two live sites with different canonicals split signals.

### P1 — next

1. Submit the d7s sitemap in Google Search Console (and Encited when the domain is added).
2. Noindex or 301 `clubcreekrental.lovable.app` when you control it.
3. Align “sleeps 10” vs “10+” on the homepage title/OG/stats.
4. Attach a custom domain you own; set `VITE_SITE_URL`; rebuild.
5. Self-host or subset fonts if LCP on mobile is weak after GSC field data exists.

### P2 — later

1. Add `WebPage` + occupancy/`amenityFeature` on the home graph to match landing pages.
2. More same-origin photos (gallery is one exterior).
3. `twitter:site` if you create a profile.
4. Replace city-centroid `geo` with a published GBP pin only if you decide to publish a more precise public location (still no street number in HTML if that remains policy).

## Verify after this PR deploys (correct host only)

```bash
# Must be the Auburn STR site, not Kentucky design
curl -s https://hydrangea-house-d7s.pages.dev/ | grep -E 'canonical|The Hydrangea House|hydrangea-house.pages.dev'
curl -s https://hydrangea-house-d7s.pages.dev/auburn-graduation-house/ | grep -E 'Coming to Auburn for graduation|Look no further, stay right here|FAQPage|canonical'
curl -s https://hydrangea-house-d7s.pages.dev/auburn-golf-getaway/ | grep -E 'An Auburn golf getaway|FAQPage|canonical'
curl -sI https://hydrangea-house-d7s.pages.dev/auburn-graduation-house | grep -i location
curl -sI https://hydrangea-house-d7s.pages.dev/sitemap.xml | grep -i content-type
curl -s https://hydrangea-house-d7s.pages.dev/sitemap.xml
curl -s https://hydrangea-house-d7s.pages.dev/robots.txt
curl -sI https://hydrangea-house-d7s.pages.dev/stay | head -15
```

Expect: canonicals and sitemap locs on `hydrangea-house-d7s.pages.dev`; graduation raw HTML contains Tyler’s H1 and FAQPage; `/stay` is **not** the homepage (404.html); **zero** `https://hydrangea-house.pages.dev` strings in our HTML/XML.
