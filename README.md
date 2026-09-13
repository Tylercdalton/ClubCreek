# Club Creek

Guest-facing brand is **Club Creek**. **Hydrangea House** is a house nickname / subtitle only — not the lead brand.

**Source of truth:** this GitHub repo (`Tylercdalton/ClubCreek`).  
**Production ship path:** GitHub `main` → Cloudflare Pages.  
**Lovable is not production.** Old preview: `https://clubcreekrental.lovable.app` — do not publish from Lovable.

## Brand / URL lock

| Item | Locked value |
| --- | --- |
| Public brand | **Club Creek** |
| Nickname / subtitle | Hydrangea House (“also known as”) |
| Pages **project name** | `hydrangea-house` (Cloudflare project id — do not rename) |
| Production origin **now** | **`https://hydrangea-house-d7s.pages.dev`** |
| Future custom domain | `clubcreekrental.com` (or similar) on **this same** Pages project |
| Env switch | `VITE_SITE_URL` — see `.env.example` |

**Use d7s until a custom clubcreekrental domain is live.** Canonicals, OG, sitemap, robots, and CTAs must stay on `https://hydrangea-house-d7s.pages.dev` until that host is attached to the `hydrangea-house` project **and** verified to serve this Auburn STR HTML. Then set `VITE_SITE_URL=https://clubcreekrental.com` (no trailing slash) and rebuild.

**Do not use `https://hydrangea-house.pages.dev`.** That hostname is a different, unrelated Kentucky interior design studio (“Hydrangea House Co.” / Ashley Schaaf). Cloudflare assigned this project the `-d7s` suffix because the short `pages.dev` name was already taken.

`wrangler.jsonc` `name` and `npm run pages:deploy -- --project-name hydrangea-house` refer to the **project name**, not the public brand or hostname.

## Live URLs (d7s until custom domain)

- Home: `https://hydrangea-house-d7s.pages.dev/`
- Graduation: `https://hydrangea-house-d7s.pages.dev/auburn-graduation-house/`
- Golf getaway: `https://hydrangea-house-d7s.pages.dev/auburn-golf-getaway/`

Preview host pattern: `https://<branch-alias>.hydrangea-house-d7s.pages.dev`

## Reality check (SPA vs static HTML documents)

This repo is a **static Vite + React multi-page app**, not TanStack Start / SSR.

| Fact | Detail |
| --- | --- |
| Build | `npm run build` |
| Output | `dist/` |
| Server | None. No Pages Functions, no Worker SSR. |
| Routes | `/` (`index.html`), `/auburn-graduation-house/` (`auburn-graduation-house/index.html`), `/auburn-golf-getaway/` (`auburn-golf-getaway/index.html`). Home sections: `#stay` `#gallery` `#auburn` `#concierge` `#book`. |
| Sitemap | those three URLs only. `/stay` `/gallery` `/book` `/journal` **do not exist** and must 404 — do not add `/* → /index.html`. |
| SEO HTML | Titles, canonical, OG, FAQPage, Review, H1, and crawlable `tel:`/`mailto:` ship in each HTML document. React hides `#seo-shell` after hydrate so the visible page is not double-H1. |
| Booking | No Hospitable widget. Guests text/email the hosts. |
| Photos | Hero is `public/images/home-hero.webp` (same-origin). |

## Cloudflare Pages settings (Git integration)

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
| Env (now) | unset, or `VITE_SITE_URL=https://hydrangea-house-d7s.pages.dev` |
| Env (later) | `VITE_SITE_URL=https://clubcreekrental.com` — **only** after that custom domain on **this** project is live and serving Auburn STR content |

`public/_headers` sets `Content-Type: application/xml` on `/sitemap.xml`.  
`public/404.html` is the not-found document so unknown paths do not serve the homepage.

After merge to `main`, Git-connected Pages deploys automatically. Direct upload (needs `wrangler login`):

```bash
npm run pages:deploy
```

## Blockers

1. **Custom domain** is not attached. Until one is, the public origin is `https://hydrangea-house-d7s.pages.dev`.
2. **Hospitable live calendar** is not in this repo. Booking is phone + email.
3. **Deep routes** from the old Lovable app (`/stay`, `/book`, `/gallery`, `/area`, `/journal`, …) should 404. `/golf` 301s to `/auburn-golf-getaway/`.
4. **Redirects from `clubcreekrental.lovable.app`** cannot be configured in this repo. After you control that hostname, 301 it to `https://hydrangea-house-d7s.pages.dev` (or the future custom domain).
5. **Search Console / Encited** are not connected to this hostname yet.

## Local

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

```bash
curl -s http://localhost:4173/ | grep -E 'canonical|Club Creek|og:site_name|Coming to Auburn|An Auburn golf|FAQPage|hydrangea-house-d7s'
curl -s http://localhost:4173/auburn-graduation-house/ | grep -E 'canonical|Coming to Auburn for graduation|Club Creek|FAQPage|hydrangea-house.pages.dev'
curl -s http://localhost:4173/auburn-golf-getaway/ | grep -E 'canonical|An Auburn golf getaway|Club Creek|FAQPage'
curl -sI http://localhost:4173/sitemap.xml | grep -i content-type
```

The graduation grep for `hydrangea-house.pages.dev` should print **nothing**.
