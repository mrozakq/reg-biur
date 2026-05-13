import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://reg-biur.com.pl/v1'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
  ]
}
