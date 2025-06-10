import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider" // Assuming ThemeProvider is not used for now

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hirelaraveldeveloper.dev"), // Replace with your actual domain
  title: {
    template: "%s | HLD - 5 Rounds Vetted Laravel Developers",
    default: "HLD - Hire Elite Laravel Developers Vetted in 5 Rounds",
  },
  description:
    "Hire top 3% Laravel developers vetted through 5 rigorous rounds. HLD provides dedicated Laravel programmers with 97% client retention. Scale your projects with elite talent today.",
  keywords: [
    "hire laravel developers",
    "dedicated laravel programmers",
    "vetted laravel talent",
    "laravel development services",
    "hire laravel coders",
    "laravel web developers",
    "5 rounds vetting process",
    "elite laravel developers",
    "hld laravel hiring",
    "laravel experts",
    "custom laravel development",
    "laravel api development",
    "laravel saas development",
    "laravel microservices",
    "laravel devops",
  ],
  openGraph: {
    title: "HLD - Hire Elite Laravel Developers Vetted in 5 Rounds",
    description:
      "Access top 3% Laravel developers vetted through 5 rigorous rounds. Build scalable, secure applications with HLD's elite Laravel talent. 97% client retention rate.",
    url: "https://www.hirelaraveldeveloper.dev", // Replace with your actual domain
    images: [
      {
        url: "/og-image.png", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "HLD - Hire Elite Laravel Developers",
      },
    ],
    siteName: "HLD",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HLD - Hire Elite Laravel Developers Vetted in 5 Rounds",
    description: "Hire top 3% Laravel developers vetted through 5 rigorous rounds. 97% client retention. Scale with elite talent.",
    // creator: "@HLDHiring", // Replace with your actual Twitter handle
    images: ["/og-image.png"], // Replace with your actual OG image path
  },
  robots: {
    // Added robots meta tag
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // icons: { // Example for favicons
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
    generator: 'v0.dev'
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HLD",
  url: "https://www.hirelaraveldeveloper.dev", // Replace with your actual domain
  logo: "https://www.hirelaraveldeveloper.dev/logo.png", // Replace with your actual logo URL
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-315-215-2005",
    contactType: "Customer Service",
    areaServed: ["US", "IN", "UK", "CA", "AU"], // Specify countries served
    availableLanguage: ["en"],
  },
  sameAs: [
    // Add URLs to your social media profiles
    // "https://www.linkedin.dev/company/hld",
    // "https://twitter.dev/HLDHiring",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "459 Columbus Ave #387",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10024",
    addressCountry: "US",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HLD",
  url: "https://www.hirelaraveldeveloper.dev", // Replace with your actual domain
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.hirelaraveldeveloper.dev/search?q={search_term_string}", // Replace with your actual search URL
    "query-input": "required name=search_term_string",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Laravel Development",
  "provider": {
    "@type": "Organization",
    "name": "HLD",
    "url": "https://www.hirelaraveldeveloper.dev"
  },
  "areaServed": {
    "@type": "Country",
    "name": ["USA", "UK", "India", "Australia", "Canada"]
  },
  "description": "Hire top 3% Laravel developers vetted in 5 rounds. HLD offers custom Laravel web apps, API development, e-commerce, SaaS, DevOps, and more. US-based project management. Start in 7 days.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "18-32",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "minPrice": 18,
      "maxPrice": 32,
      "unitCode": "HUR"
    },
    "availability": "https://schema.org/InStock"
  }
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "HireLaravelDeveloper.dev",
  "image": "https://www.hirelaraveldeveloper.dev/logo/logo.png",
  "@id": "https://www.hirelaraveldeveloper.dev/",
  "url": "https://www.hirelaraveldeveloper.dev/",
  "telephone": "+1-774-418-0436",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "604 Carson Dr, CAK-953",
    "addressLocality": "Bear",
    "addressRegion": "DE",
    "postalCode": "19701-1450",
    "addressCountry": "US"
  },
  "priceRange": "$$$",
  "offers": {
    "@type": "Offer",
    "price": "120.00",
    "priceCurrency": "USD",
    "description": "Laravel development services at $120 per hour"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes HLD's 5-round vetting process unique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our rigorous 5-round process includes: (1) Resume & Portfolio Review, (2) Technical Skills Assessment, (3) Laravel-specific Coding Challenge, (4) System Design & Architecture Interview, and (5) Cultural Fit & Communication Evaluation. Only the top 3% of candidates pass all rounds, ensuring you get elite Laravel developers."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a dedicated Laravel developer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With our pre-vetted talent pool, you can hire a Laravel developer within 48-72 hours. Our streamlined process eliminates lengthy recruitment cycles, allowing you to start your project immediately with the perfect developer match."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between HLD and freelance platforms like Upwork?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike freelance platforms, HLD provides full-time dedicated developers who work exclusively on your project. You get consistent availability, US-based project management, quality assurance, legal compliance, and seamless communication - all backed by our 97% client retention rate."
      }
    },
    {
      "@type": "Question",
      "name": "Do your Laravel developers have experience with modern frameworks and tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our Laravel developers are proficient in the entire modern ecosystem including Laravel 10+, Vue.js, React, Node.js, Docker, AWS, PHP 8+, MySQL, PostgreSQL, Redis, and DevOps tools. They stay updated with the latest Laravel features and best practices."
      }
    },
    {
      "@type": "Question",
      "name": "What engagement models do you offer for hiring Laravel developers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer flexible engagement models: (1) Full-time Dedicated (160 hours/month), (2) Part-time Dedicated (80 hours/month), (3) Hourly Engagement (minimum 20 hours/week), and (4) Project-based Fixed Cost. Choose what works best for your project scope and budget."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
