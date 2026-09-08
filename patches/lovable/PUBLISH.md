# How production actually updates (`clubcreekrental.lovable.app`)

This GitHub repo is a Vite scaffold. **Pushing here does not publish the live site.**

Live HTML is the Lovable TanStack Start app:

- Project: Club Creek Direct (`86103f67-e59e-4c37-ad94-2e8e042bbabd`)
- Editor: https://lovable.dev/projects/86103f67-e59e-4c37-ad94-2e8e042bbabd
- Production: https://clubcreekrental.lovable.app

## Publish steps

1. Apply the Wave 2 edits in the Lovable chat (paste `WAVE2.md`), or wait for the Cursor agent to `send_message` if credits remain.
2. Confirm the **preview** (`https://id-preview--86103f67-e59e-4c37-ad94-2e8e042bbabd.lovable.app`) shows the changes.
3. In the Lovable editor, click **Publish**. The published slug must stay `clubcreekrental`.
4. Wait ~30s, then run the verification curls in the PR body against `https://clubcreekrental.lovable.app` (not the preview host).

Preview and production are different hosts. Wave 1 sat in the sandbox until Publish; production stayed stale.

## Sitemap Content-Type (this stack)

Lovable TanStack Start serves `/sitemap.xml` through `src/server.ts`. The route file can return `application/xml`, but the edge still rewrote it to `text/html` until we wrapped the Start handler:

```ts
function forceSitemapXmlContentType(response: Response, request: Request): Response {
  const pathname = new URL(request.url).pathname;
  if (pathname !== "/sitemap.xml") return response;
  const headers = new Headers(response.headers);
  headers.set("Content-Type", "application/xml; charset=utf-8");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
```

Call it on the outgoing response in `fetch`. **Keep this wrapper.** After the 2026-09-08 publish, production returns `application/xml; charset=utf-8`. `public/sitemap.xml` + `public/_headers` are a static fallback only.

## If Lovable credits block the agent

**Tyler:** Add Lovable credits at https://lovable.dev/settings/billing, paste `patches/lovable/WAVE2.md` into the Club Creek Direct chat, then click **Publish**.
