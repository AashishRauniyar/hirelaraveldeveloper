import { Code, Database, ShoppingCart, RefreshCw, Building, Shield, Zap, GitBranch } from "lucide-react"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
// For schema, similar to FAQ, it's best handled at page/layout level or via generateMetadata.
// Adding a script tag here directly is not the cleanest for App Router.
// The schema definition is useful, but its injection point is key.

const servicesData = [
  { icon: Code, title: "Custom Laravel Apps", description: "Scalable web apps to exact specifications." },
  { icon: Database, title: "API Development", description: "Secure RESTful & GraphQL APIs.", featured: true },
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "High-converting online stores." },
  { icon: RefreshCw, title: "Legacy Migration", description: "Seamless PHP to Laravel migration." },
  { icon: Building, title: "SaaS Architecture", description: "Multi-tenant, isolated data layers." },
  { icon: Shield, title: "Security Hardening", description: "Enterprise security & compliance." },
  { icon: Zap, title: "Performance Optimization", description: "Fast apps with advanced caching." },
  { icon: GitBranch, title: "DevOps Integration", description: "CI/CD & cloud-native deployments." },
]

// Example Service Schema (would be placed in page.tsx or layout.tsx)
/*
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Laravel Development",
  provider: {
    "@type": "Organization",
    name: "Fishtail Infosolutions"
  },
  areaServed: {
    "@type": "Country",
    name: "USA" // Or more specific regions
  },
  description: "Expert Laravel development services including custom web applications, API development, e-commerce solutions, legacy migration, SaaS architecture, security hardening, performance optimization, and DevOps integration.",
  name: "Laravel Development Services",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laravel Development Offers",
    itemListElement: servicesData.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description
      }
    }))
  }
};
*/

export function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Our Laravel Development Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting enterprise-grade solutions for scalability, security, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={cn(
                  "text-center p-6 border border-gray-200 bg-white group",
                  "hover:shadow-lg hover:border-blue-500 hover:scale-105 transition-all duration-300 rounded-lg",
                  service.featured ? "shadow-md border-blue-200" : "shadow-sm",
                )}
              >
                <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />
                <CardTitle className="text-xl font-semibold text-gray-800 mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-sm">{service.description}</CardDescription>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
