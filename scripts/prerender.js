// Runs after `vite build`. Bakes the rendered page into dist/index.html so search engines and
// link previews see real content, then generates structured data, sitemap.xml and robots.txt
// from src/data/site.js so they never drift from what the page shows.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { profile, projects, coreSkills, skills, seo } from '../src/data/site.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const url = seo.url
const today = new Date().toISOString().slice(0, 10)
const ids = { site: `${url}#website`, page: `${url}#profile`, person: `${url}#person` }

const knowsAbout = [...new Set([...coreSkills.map((c) => c.name), ...skills.flatMap((s) => s.items)])]

const projectItem = (p, i) => {
  const code = p.links.find((l) => l.label.toLowerCase() === 'code')
  const live = p.links.find((l) => l.label.toLowerCase() !== 'code')
  const item = {
    '@type': code ? 'SoftwareSourceCode' : 'CreativeWork',
    name: p.title,
    description: p.description,
    creator: { '@id': ids.person },
    keywords: p.tech.join(', ') || undefined,
    url: (live ?? code)?.url,
    codeRepository: code?.url,
  }
  return { '@type': 'ListItem', position: i + 1, item }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': ids.site,
      url,
      name: profile.name,
      alternateName: seo.handles,
      inLanguage: 'en',
      publisher: { '@id': ids.person },
    },
    {
      '@type': 'ProfilePage',
      '@id': ids.page,
      url,
      name: `${profile.name} | ${profile.role}`,
      isPartOf: { '@id': ids.site },
      mainEntity: { '@id': ids.person },
      dateModified: today,
    },
    {
      '@type': 'Person',
      '@id': ids.person,
      name: profile.name,
      alternateName: seo.handles,
      url,
      image: `${url}icon-512.png`,
      jobTitle: profile.role,
      description: profile.tagline,
      email: `mailto:${profile.email}`,
      sameAs: [profile.github, ...seo.otherProfiles],
      knowsAbout,
    },
    {
      '@type': 'ItemList',
      name: `Projects by ${profile.name}`,
      itemListElement: projects.map(projectItem),
    },
  ],
}

// JSON.stringify drops undefined fields; escape "<" so content can never close the script tag.
const ldScript = `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`

const htmlPath = path.join(dist, 'index.html')
let html = await fs.readFile(htmlPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('prerender: root placeholder not found in dist/index.html')
html = html
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
  .replace('</head>', `  ${ldScript}\n  </head>`)
await fs.writeFile(htmlPath, html)

await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
)

await fs.writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${url}sitemap.xml\n`)

await fs.rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: wrote index.html (${(html.length / 1024).toFixed(1)} kB), sitemap.xml, robots.txt`)
