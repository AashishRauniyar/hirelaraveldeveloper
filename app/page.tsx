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
  title: "Hire Dedicated Laravel Developers | FIS - 5 Rounds Vetted Talent",
  description:
    "Hire top 3% Laravel developers vetted through 5 rigorous rounds. WPD provides skilled Laravel programmers for scalable web applications. 97% client retention. Get started today!",
  keywords: "hire Laravel developers, dedicated Laravel programmers, vetted Laravel talent, Laravel development services, hire Laravel coders, Laravel web developers",
  openGraph: {
    title: "Hire Dedicated Laravel Developers | WPD - 5 Rounds Vetted Talent",
    description:
      "Access elite Laravel developers vetted through 5 rigorous rounds. Build scalable, secure applications with WPD's top-tier Laravel talent. 97% client retention rate.",
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
