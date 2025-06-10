import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hirelaraveldeveloper.dev'
  
  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Blog routes (you'll need to fetch these from your blog data source)
  // This is a placeholder - you should replace this with actual blog data
  const blogRoutes = [
    // Add your blog posts here
    // Example:
    // {
    //   url: `${baseUrl}/blog/post-1`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.7,
    // },
  ]

  return [...staticRoutes, ...blogRoutes]
} 