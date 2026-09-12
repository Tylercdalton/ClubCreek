/** Apply inside src/server.ts fetch() after the Start handler returns. */
export function forceSitemapXmlContentType(response: Response, request: Request): Response {
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
