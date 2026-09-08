# The Hydrangea House (Club Creek)

Guest-facing brand is **The Hydrangea House**. Club Creek remains the property nickname.

**Source of truth:** this GitHub repo (`Tylercdalton/ClubCreek`).  
**Production ship path:** Cloudflare Pages (static Vite build).  
**Lovable** is edit/preview only — do not publish production from Lovable.

Suggested Pages project name: **`hydrangea-house`** (guest-facing). Alternate: `club-creek-rental`. Tyler’s other brand Pages projects already use kebab-case names on the same Cloudflare account.

Default origin after the project exists: `https://hydrangea-house.pages.dev`  
Override at build time with `VITE_SITE_URL` (no trailing slash), e.g. a custom domain.

## Reality check (SPA vs SSR)

This repo is a **static Vite + React SPA**, not TanStack Start / SSR.

| Fact | Detail |
| --- | --- |
| Build | `npm run build` |
| Output | `dist/` |
| Server | None. No Pages Functions, no Worker SSR. |
| Routes | One HTML document (`/`). In-page sections: `#stay` `#gallery` `#auburn` `#concierge` `#book`. |
| Sitemap | `/` only. `/stay` `/gallery` `/book` `/golf` `/journal` **do not exist here** and must not be listed. |
| SEO HTML | Titles, canonical, OG, FAQPage, Review, and crawlable `tel:`/`mailto:` ship in `index.html` (not only in JS). |
| Booking | No Hospitable widget and no booking env vars in this repo. Guests text/email the hosts. |
| Photos | Hero is `public/images/home-hero.webp` (same-origin). |

## Cloudflare Pages settings (Git integration)

Match Tyler’s other brand projects (`allied-health-academy`, `alabama-pharm-tech`, …):

| Setting | Value |
| --- | --- |
| Project name | `hydrangea-house` |
| Repo | `Tylercdalton/ClubCreek` |
| Production branch | `main` |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (leave empty) |
| Node version | `22` (see `.nvmrc`) |
| Env (optional) | `VITE_SITE_URL=https://your-custom-domain` |

Repo config: `wrangler.jsonc` (`name`: `hydrangea-house`, `pages_build_output_dir`: `./dist`).  
`public/_headers` sets `Content-Type: application/xml` on `/sitemap.xml`.

**Tyler if the Pages project does not exist yet:** In Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → `Tylercdalton/ClubCreek`, project name `hydrangea-house`, build `npm run build`, output `dist`, production branch `main`.

After merge to `main`, Git-connected Pages deploys automatically. Direct upload (needs `wrangler login`):

```bash
npm run pages:deploy
```

## Blockers (not required to serve the static site)

1. **Pages project** `hydrangea-house` is not on the account yet — create it in the dashboard (one-liner above).
2. **Hospitable live calendar** is not in this repo. No widget key / env var to set. Booking is phone + email until a widget is added later.
3. **Deep routes** from the old Lovable app (`/stay`, `/book`, `/gallery`, `/area`, `/golf`, `/journal`, …) 404 here. Do not add a catch-all `/* → /index.html` rewrite just to hide that — it would serve the homepage at those URLs and duplicate SEO.
4. **Redirects from `clubcreekrental.lovable.app`** cannot be configured in this repo. After Pages is live, add 301s on the Lovable/custom-domain side (or a Cloudflare redirect on a hostname you control) to `https://hydrangea-house.pages.dev` (or the custom domain).
5. **Custom domain** (optional): attach it on the Pages project, then set `VITE_SITE_URL` and rebuild so canonical/OG/sitemap match.

## Local

```bash
npm install
npm run dev
```

```bash
npm run build
# optional: wrangler pages dev dist
```

```bash
curl -sI http://localhost:5173/sitemap.xml | grep -i content-type
curl -s http://localhost:5173/ | grep -E 'og:image|twitter:image|mailto:|tel:|FAQPage'
```

## SEO (this branch)

- Absolute `og:image` / `twitter:image` (`__SITE_ORIGIN__/images/home-hero.webp`) plus width/height.
- Crawlable NAP from existing ContactReveal values only: `(334) 797-1012`, `tdalton508@gmail.com`, Auburn AL **36832**. No street number.
- FAQPage from the four on-page FAQs. Review JSON-LD for the on-page Jed / Dallas quote only — **no AggregateRating**.
- `llms.txt` uses Hydrangea House (Club Creek = nickname).
