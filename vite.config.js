import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const ROOT = dirname(fileURLToPath(import.meta.url))
/** Public hostname of Pages project `hydrangea-house`. Not hydrangea-house.pages.dev. */
const DEFAULT_SITE_URL = 'https://hydrangea-house-d7s.pages.dev'
const LANDING_DIRS = ['/auburn-graduation-house', '/auburn-golf-getaway']

function resolveSiteUrl(mode) {
  const env = loadEnv(mode, ROOT, '')
  return (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '')
}

function rewriteOrigin(source, origin) {
  return source.replaceAll('__SITE_ORIGIN__', origin)
}

function walkFiles(dir) {
  if (!existsSync(dir)) return []
  const files = []
  for (const name of readdirSync(dir)) {
    const full = resolve(dir, name)
    if (statSync(full).isDirectory()) files.push(...walkFiles(full))
    else files.push(full)
  }
  return files
}

function prettyLandingUrls() {
  return (req, _res, next) => {
    const [pathname, search = ''] = (req.url || '').split('?')
    if (LANDING_DIRS.includes(pathname)) {
      req.url = `${pathname}/${search ? `?${search}` : ''}`
    }
    next()
  }
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
    server.middlewares.use(prettyLandingUrls())
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
      const rewriteNames = new Set(['index.html', 'sitemap.xml', 'robots.txt', 'llms.txt', '404.html'])
      for (const file of walkFiles(resolve(ROOT, 'dist'))) {
        const base = file.split('/').pop()
        if (!rewriteNames.has(base) && !file.endsWith('.html')) continue
        writeFileSync(file, rewriteOrigin(readFileSync(file, 'utf8'), origin))
      }
    },
  }
}

export default defineConfig(({ mode }) => {
  const siteUrl = resolveSiteUrl(mode)
  return {
    appType: 'mpa',
    plugins: [react(), sitemapXmlType(siteUrl)],
    build: {
      rollupOptions: {
        input: {
          main: resolve(ROOT, 'index.html'),
          graduation: resolve(ROOT, 'auburn-graduation-house/index.html'),
          golf: resolve(ROOT, 'auburn-golf-getaway/index.html'),
        },
      },
    },
  }
})
