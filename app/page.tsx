import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { LaravelAdvantagesSection } from "@/components/laravel-advantages-section"
import { ComprehensiveServicesSection } from "@/components/comprehensive-services-section"
import { DeveloperProfilesSection } from "@/components/developer-profiles-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { HiringProcessSection } from "@/components/hiring-process-section"
import { ComparisonTableSection } from "@/components/comparison-table-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TeamShowcaseSection } from "@/components/team-showcase-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import LaravelBenefits from "@/components/laravel-benefits"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { LaravelExpertiseSection } from "@/components/laravel-expertise-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hire Dedicated Laravel Developers | HLD - 5 Rounds Vetted Talent",
  description:
    "Hire top 3% Laravel developers vetted through 5 rigorous rounds. HLD provides skilled Laravel programmers for scalable web applications. 97% client retention. Start in 7 days!",
  keywords: [
    "hire Laravel developers",
    "dedicated Laravel programmers",
    "vetted Laravel talent",
    "Laravel development services",
    "hire Laravel coders",
    "Laravel web developers",
    "5 rounds vetting process",
    "elite Laravel developers",
    "Laravel experts",
    "custom Laravel development",
    "Laravel API development",
    "Laravel SaaS development",
    "Laravel microservices",
    "Laravel DevOps",
    "Laravel consulting",
    "Laravel migration services"
  ],
  openGraph: {
    title: "Hire Dedicated Laravel Developers | HLD - 5 Rounds Vetted Talent",
    description:
      "Access elite Laravel developers vetted through 5 rigorous rounds. Build scalable, secure applications with HLD's top-tier Laravel talent. 97% client retention rate.",
    url: "https://www.hirelaraveldeveloper.dev",
    siteName: "HLD - Hire Laravel Developers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HLD - Hire Elite Laravel Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Laravel Developers | HLD",
    description: "Access elite Laravel developers vetted through 5 rigorous rounds. 97% client retention rate.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.hirelaraveldeveloper.dev",
  },
  robots: {
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
}

// Structured Data for Services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laravel Development Services",
  description: "Hire top 3% Laravel developers vetted through 5 rigorous rounds for custom web applications, APIs, and enterprise solutions.",
  provider: {
    "@type": "Organization",
    name: "Hire Laravel Developer (HLD)",
    url: "https://www.hirelaraveldeveloper.dev"
  },
  areaServed: ["US", "UK", "CA", "AU"],
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://www.hirelaraveldeveloper.dev/contact",
    servicePhone: "+1-315-215-2005"
  },
  offers: {
    "@type": "Offer",
    description: "Dedicated Laravel developers starting at $18/hour",
    priceRange: "$18-$32/hour"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can I hire a Laravel developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start working with your vetted Laravel developer in as little as 7 days. Our streamlined hiring process and pre-vetted talent pool ensure rapid deployment."
      }
    },
    {
      "@type": "Question", 
      name: "What is the vetting process for Laravel developers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 5-round vetting process includes technical assessments, coding challenges, system design interviews, communication evaluation, and cultural fit assessment. Only top 3% of candidates pass."
      }
    },
    {
      "@type": "Question",
      name: "What are your Laravel developer rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Laravel developers are available at competitive rates of $18-$32 per hour, offering up to 60% cost savings compared to US-based developers while maintaining premium quality."
      }
    }
  ]
}

export default function Home() {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />
      <main role="main">
        <HeroSection />
        <StatsSection />
        <LaravelAdvantagesSection />
        <ComprehensiveServicesSection />
        {/* <DeveloperProfilesSection /> */}
        <CaseStudiesSection />
        <HiringProcessSection />
        <ComparisonTableSection />
        <ServicesSection />
        <AboutSection />
        <TeamShowcaseSection />
        <ProcessSection />
        <PricingSection />
        <LaravelExpertiseSection />
        <LaravelBenefits />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
