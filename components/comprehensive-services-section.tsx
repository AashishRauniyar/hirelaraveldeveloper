"use client"

import React from "react"
import { 
  Code, 
  Database, 
  ShoppingCart, 
  RefreshCw, 
  Users, 
  Cloud, 
  Zap, 
  Link, 
  TestTube, 
  Headphones, 
  Shield, 
  Search,
  Palette,
  Package,
  Globe,
  FileText,
  Settings,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ComprehensiveServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Custom Laravel Web Application Development",
      description: "Our dedicated Laravel developers deliver robust, scalable web applications meticulously crafted to your business logic and vision.",
      features: [
        "Responsive, accessibility-first user interfaces (WCAG 2.1 compliant)",
        "Multi-layered authentication and authorization",
        "Feature flagging for safe rollout and experimentation",
        "Modular, service-oriented architecture for rapid feature delivery"
      ],
      category: "Development"
    },
    {
      icon: Database,
      title: "API and Microservices Development", 
      description: "WPD Laravel specialists build future-ready RESTful and GraphQL APIs, leveraging Laravel's strengths in routing, middleware, and data serialization.",
      features: [
        "JWT, OAuth2, and Laravel Sanctum for secure authentication",
        "Advanced rate-limiting and abuse prevention",
        "API versioning, documentation (Swagger/OpenAPI), and automated tests",
        "Service mesh deployment (Istio/Linkerd) for zero-downtime scaling"
      ],
      category: "API Development"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Headless Commerce Solutions",
      description: "WPD engineers power online stores—from B2C startups to global multi-storefront enterprises—using Laravel as the digital backbone.",
      features: [
        "Custom-built checkout, cart, and payment integrations (Stripe, PayPal, Square)",
        "Multi-currency, multi-language, and region-based tax compliance",
        "Headless setups (Laravel backend + React/Vue/Next frontend)",
        "Advanced inventory, order management, CRM, and ERP integrations"
      ],
      category: "E-Commerce"
    },
    {
      icon: RefreshCw,
      title: "Legacy PHP Migration to Laravel",
      description: "Outgrowing your old PHP, CodeIgniter, Zend, or CakePHP codebase? We design and execute phased migrations to Laravel—without interrupting your business.",
      features: [
        "Automated static analysis and code conversion where feasible",
        "Modular refactoring to Laravel's MVC, leveraging Eloquent ORM",
        "Parallel 'strangler' deployments to avoid risky 'big bang' launches",
        "Real-time and batch data migration, with integrity checks"
      ],
      category: "Migration"
    },
    {
      icon: Users,
      title: "SaaS Multi-Tenancy Architecture",
      description: "If your business model is software-as-a-service, our Laravel engineers build truly isolated, scalable multi-tenant applications.",
      features: [
        "Tenant-aware authentication and authorization",
        "Resource throttling and per-tenant usage limits",
        "Stripe/Braintree/Chargebee billing automation (Laravel Cashier)",
        "Audit logging, GDPR/CCPA data compliance for every tenant"
      ],
      category: "SaaS"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Enablement",
      description: "WPD brings DevOps DNA to every Laravel build, ensuring your applications are as robust in production as they are in staging.",
      features: [
        "Dockerized environments and reproducible builds",
        "CI/CD automation (GitHub Actions, GitLab CI, Jenkins)",
        "Blue/green and canary deployment strategies",
        "Real-time monitoring (Datadog, Prometheus, Grafana) and SLO alerting"
      ],
      category: "DevOps"
    },
    {
      icon: Zap,
      title: "Performance Optimization & Scalability Engineering",
      description: "Our Laravel programmers specialize in diagnosing and eliminating performance issues at the code, database, and infrastructure levels.",
      features: [
        "Query optimization, caching with Redis/Memcached, database sharding",
        "PHP-FPM tuning, Laravel Octane for async request handling",
        "Full-stack load testing and profiling (Blackfire, Xdebug, Siege)",
        "CDN integration, asset optimization, image lazy-loading"
      ],
      category: "Performance"
    },
    {
      icon: Link,
      title: "Third-Party Integrations & Extensions",
      description: "Extend your app's reach and capabilities through secure integrations.",
      features: [
        "Payment gateways, CRM/ERP systems, SMS/Email providers, analytics tools",
        "Single Sign-On (SSO), OAuth2, OpenID Connect for enterprise logins",
        "Real-time data sync with WebSockets (Pusher, Socket.io), and scheduled jobs",
        "Custom Laravel package development for business-specific functionality"
      ],
      category: "Integration"
    },
    {
      icon: TestTube,
      title: "Automated Testing, QA, and Continuous Delivery",
      description: "WPD enforces quality at every step—no code is merged without tests and reviews.",
      features: [
        "PHPUnit, Pest for automated unit and feature tests",
        "Dusk for browser automation and end-to-end UI testing",
        "Mutation testing to ensure real-world robustness",
        "Pre-deployment static code analysis, code coverage enforcement"
      ],
      category: "Quality Assurance"
    },
    {
      icon: Headphones,
      title: "Maintenance, Monitoring & 24/7 Support",
      description: "Our job doesn't end at launch. WPD delivers ongoing support, system health monitoring, and proactive improvements.",
      features: [
        "24/7 incident monitoring, real-time alerts, and rapid issue response",
        "Regular patching, framework upgrades, and dependency management",
        "Proactive vulnerability scanning and security remediation",
        "User analytics, error tracking, and performance dashboards"
      ],
      category: "Support"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Every application is architected with security first, not bolted on later.",
      features: [
        "Secure development lifecycle (SDL) practices from day one",
        "Penetration testing, threat modeling, and OWASP Top 10 remediation",
        "End-to-end encryption, 2FA/MFA, secure secret management",
        "Regular security training and updates for all engineers"
      ],
      category: "Security"
    },
    {
      icon: Search,
      title: "Laravel Consulting, Code Audit, and Rescue Missions",
      description: "Need guidance on architecture, a codebase health check, or to salvage a failing project? Our Laravel experts perform in-depth audits and provide actionable remediation plans.",
      features: [
        "Architectural review, codebase analysis, and technical debt mapping",
        "Refactoring strategy and performance profiling",
        "Security audit and risk assessment",
        "Emergency team deployment for project recovery"
      ],
      category: "Consulting"
    }
  ]

  const categories = ["All", "Development", "API Development", "E-Commerce", "Migration", "SaaS", "DevOps", "Performance", "Integration", "Quality Assurance", "Support", "Security", "Consulting"]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Laravel Services:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hire For Every Need
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Fishtail Infosolutions, our Laravel developers don't just "code"-they architect, deliver, and support solutions that solve real business problems and future-proof your organization. Below is a breakdown of our core Laravel development services, each executed with a relentless commitment to best practices, security, scalability, and measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="ml-3 text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Palette className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">UI/UX Engineering</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-3">User journey mapping, interactive frontends, accessibility compliance, and rapid prototyping.</p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Package className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Custom Package Development</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-3">Reusable internal libraries, open-source packages, and private modules for specialized functionality.</p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Internationalization (i18n)</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-3">Laravel localization features, RTL support, language switchers, and dynamic translation loading.</p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">Data Migration & ETL</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-3">Automated ETL pipelines, large dataset migration with zero data loss, and data cleansing.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Custom Quote for Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
