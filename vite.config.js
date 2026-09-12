import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const ROOT = dirname(fileURLToPath(import.meta.url))
const DEFAULT_SITE_URL = 'https://hydrangea-house.pages.dev'

function resolveSiteUrl(mode) {
  const env = loadEnv(mode, ROOT, '')
  return (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
}

function rewriteOrigin(source, origin) {
  return source.replaceAll('__SITE_ORIGIN__', origin)
}

function sitemapXmlType(origin) {
  const serveRewritten = (file, type) => (req, res, next) => {
    const path = req.url?.split('?')[0]
    if (path !== `/${file}`) return next()
    const disk = resolve(ROOT, 'public', file)
    if (!existsSync(disk)) return next()
    res.setHeader('Content-Type', type)
    res.end(rewriteOrigin(readFileSync(disk, 'utf8'), origin))
  }

  const apply = (server) => {
    server.middlewares.use(serveRewritten('sitemap.xml', 'application/xml; charset=utf-8'))
    server.middlewares.use(serveRewritten('robots.txt', 'text/plain; charset=utf-8'))
  }

  return {
    name: 'sitemap-xml-content-type',
    configureServer: apply,
    configurePreviewServer: apply,
    transformIndexHtml(html) {
      return rewriteOrigin(html, origin)
    },
    closeBundle() {
      for (const file of [
        'index.html',
        'auburn-graduation/index.html',
        'sitemap.xml',
        'robots.txt',
        'llms.txt',
      ]) {
        const disk = resolve(ROOT, 'dist', file)
        if (!existsSync(disk)) continue
        writeFileSync(disk, rewriteOrigin(readFileSync(disk, 'utf8'), origin))
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const siteUrl = resolveSiteUrl(mode)
  return {
    plugins: [react(), sitemapXmlType(siteUrl)],
    build: {
      rollupOptions: {
        input: {
          main: resolve(ROOT, 'index.html'),
          graduation: resolve(ROOT, 'auburn-graduation/index.html'),
        },
      },
    },
  }
})
