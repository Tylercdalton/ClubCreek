# Part 3 — apply in Lovable when credits are available

Workspace ran out of Lovable credits after parts 1–2. Apply these by hand or re-run the agent.

## concierge.tsx

```ts
import { absoluteUrl } from "@/lib/site";
// ...
{ property: "og:image", content: absoluteUrl(porch) },
{ name: "twitter:image", content: absoluteUrl(porch) },
```

## Footer in `__root.tsx`

**Superseded (2026-09 privacy):** do not publish personal phone or Gmail. City + postal code and a Book direct link only. No `tel:` / `mailto:`.

## Root LodgingBusiness JSON-LD

- `postalCode: HOST_POSTAL_CODE` (`36832`, already on `/stay`)
- Do not add `telephone` or `email`
- `containedInPlace`: Auburn University Club → City of Auburn
- No `streetAddress`

## Fonts in `__root.tsx`

Keep the existing Google Fonts URL (`display=swap` already present). Add `rel="preload" as="style"` and load the stylesheet with `media="print"` + `onload="this.media='all'"` plus `<noscript>`.

## `public/llms.txt`

Primary brand: The Hydrangea House. Club Creek = nickname only.

## `area.tsx`

Change “Distances from Club Creek” → “Distances from The Hydrangea House”.
