# The Hydrangea House (Club Creek)

Guest-facing brand is **The Hydrangea House**. Club Creek remains the property nickname.

Production site: https://clubcreekrental.lovable.app

## SEO notes (this branch)

- Homepage `og:image` / `twitter:image` use absolute `https://` URLs (social crawlers cannot resolve site-relative `/__l5e/...` paths).
- `public/sitemap.xml` is static XML. Vite dev/preview force `Content-Type: application/xml; charset=utf-8`. `public/_headers` covers Cloudflare-style hosts.
- Footer (and a crawlable `<footer class="seo-contact">` in `index.html`) expose the host phone and email already stored in the live `ContactReveal` component — not invented:
  - `(334) 797-1012`
  - `tdalton508@gmail.com`
- LodgingBusiness JSON-LD uses Auburn, AL **36832** + geo (already on the live `/stay` schema). No street number is published in the repo, so none is added. `containedInPlace` is Auburn University Club → Auburn.
- Google Fonts CSS uses `display=swap`, `preload`, and a `media="print"` / `onload` swap so the stylesheet is not render-blocking.
- `public/llms.txt` and `og:site_name` use Hydrangea House.

## Local

```bash
npm install
npm run dev
```

```bash
curl -sI http://localhost:5173/sitemap.xml | grep -i content-type
curl -s http://localhost:5173/ | grep -E 'og:image|twitter:image|mailto:|tel:'
```
