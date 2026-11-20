import type { MetadataRoute } from 'next'

const siteUrl = 'https://developer-portfolio-black-iota.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${siteUrl}/sitemap.xml` }
}
