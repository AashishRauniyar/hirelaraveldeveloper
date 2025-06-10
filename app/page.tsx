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
    "Hire top 3% Laravel developers vetted through 5 rigorous rounds. HLD provides skilled Laravel programmers for scalable web applications. 97% client retention. Get started today!",
  keywords: [
    "hire Laravel developers",
    "dedicated Laravel programmers",
    "vetted Laravel talent",
    "Laravel development services",
    "hire Laravel coders",
    "Laravel web developers",
    "5 rounds vetting process",
    "elite Laravel developers",
    "hld laravel hiring",
    "laravel experts",
    "custom laravel development",
    "laravel api development",
    "laravel saas development",
    "laravel microservices",
    "laravel devops"
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

export default function Home() {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <Header />
      <main>
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
