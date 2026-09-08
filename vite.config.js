import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function sitemapXmlType() {
  const apply = (server) => {
    server.middlewares.use((req, res, next) => {
      const path = req.url?.split('?')[0]
      if (path === '/sitemap.xml') {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8')
      }
      next()
    })
  }
  return {
    name: 'sitemap-xml-content-type',
    configureServer: apply,
    configurePreviewServer: apply,
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitemapXmlType()],
})
