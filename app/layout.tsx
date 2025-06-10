import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider" // Assuming ThemeProvider is not used for now

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wpd.com"), // Replace with your actual domain
  title: {
    template: "%s | WPD - 5 Rounds Vetted Laravel Developers",
    default: "WPD - Hire Elite Laravel Developers Vetted in 5 Rounds",
  },
  description:
    "Hire top 3% Laravel developers vetted through 5 rigorous rounds. WPD provides dedicated Laravel programmers with 97% client retention. Scale your projects with elite talent today.",
  keywords: [
    "hire laravel developers",
    "dedicated laravel programmers",
    "vetted laravel talent",
    "laravel development services",
    "hire laravel coders",
    "laravel web developers",
    "5 rounds vetting process",
    "elite laravel developers",
    "wpd laravel hiring",
    "laravel experts",
    "custom laravel development",
    "laravel api development",
    "laravel saas development",
    "laravel microservices",
    "laravel devops",
  ],
  openGraph: {
    title: "WPD - Hire Elite Laravel Developers Vetted in 5 Rounds",
    description:
      "Access top 3% Laravel developers vetted through 5 rigorous rounds. Build scalable, secure applications with WPD's elite Laravel talent. 97% client retention rate.",
    url: "https://www.wpd.com", // Replace with your actual domain
    images: [
      {
        url: "/og-image.png", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "WPD - Hire Elite Laravel Developers",
      },
    ],
    siteName: "WPD",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "WPD - Hire Elite Laravel Developers Vetted in 5 Rounds",
    description: "Hire top 3% Laravel developers vetted through 5 rigorous rounds. 97% client retention. Scale with elite talent.",
    // creator: "@WPDHiring", // Replace with your actual Twitter handle
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
  name: "WPD",
  url: "https://www.wpd.com", // Replace with your actual domain
  logo: "https://www.wpd.com/logo.png", // Replace with your actual logo URL
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-315-215-2005",
    contactType: "Customer Service",
    areaServed: ["US", "IN", "UK", "CA", "AU"], // Specify countries served
    availableLanguage: ["en"],
  },
  sameAs: [
    // Add URLs to your social media profiles
    // "https://www.linkedin.com/company/wpd",
    // "https://twitter.com/WPDHiring",
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
  name: "WPD",
  url: "https://www.wpd.com", // Replace with your actual domain
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.wpd.com/search?q={search_term_string}", // Replace with your actual search URL
    "query-input": "required name=search_term_string",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Laravel Development",
  "provider": {
    "@type": "Organization",
    "name": "WPD",
    "url": "https://www.wpd.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": ["USA", "UK", "India", "Australia", "Canada"]
  },
  "description": "Hire top 3% Laravel developers vetted in 5 rounds. WPD offers custom Laravel web apps, API development, e-commerce, SaaS, DevOps, and more. US-based project management. Start in 7 days.",
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
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
