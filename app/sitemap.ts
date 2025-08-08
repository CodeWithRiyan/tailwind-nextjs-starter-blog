import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { setSlug } from 'lib/slug'

export const dynamic = 'force-static'

export interface City {
  id: number
  nama: string
  latitude: number
  longitude: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'monthly' as const, // Fix: Add 'as const' assertion
      priority: 0.8,
    }))

  const routes = ['', 'blog', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  const blogId = async () => {
    try {
      const response = await fetch('https://ibnux.github.io/data-indonesia/kota/33.json')

      if (!response.ok) throw new Error('Failed to fetch data')
      
      const data = await response.json() as City[]
      return data.map((city) => ({
        url: `${siteUrl}/blog/id/jasa-pembuatan-website-murah-di-${setSlug(city.nama)}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'daily' as const,
        priority: 0.7,
      }))
    } catch (error) {
      console.error(error)
      return []
    }
  }

  const blogIdRoutes = await blogId()

  return [...routes, ...blogRoutes, ...blogIdRoutes]
}
