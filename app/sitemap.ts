import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hirelaraveldeveloper.dev'
  
  // Static routes with priority optimization
  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/contact',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/blog',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/privacy-policy',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/terms',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/disclaimer',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
  ]

  const staticRoutes = routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Blog routes (placeholder for future blog posts)
  const blogRoutes = [
    // When you add blog posts, add them here like:
    // {
    //   url: `${baseUrl}/blog/hire-laravel-developers-guide`,
    //   lastModified: new Date('2024-01-15'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.6,
    // },
  ]

  return [...staticRoutes, ...blogRoutes]
} 