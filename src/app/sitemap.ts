import type { MetadataRoute } from 'next'
import { venues } from '@/data/venues'
import { posts } from '@/data/posts'

const BASE = 'https://allnight.kr'

export default function sitemap(): MetadataRoute.Sitemap {
  const venuePages = venues.map((v) => ({
    url: `${BASE}/${v.type === 'club' ? 'clubs' : 'lounges'}/${v.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const blogPages = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/rental`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...venuePages,
    ...blogPages,
  ]
}
