"use client"

import { useState, useEffect, useCallback } from "react"
import {
  ShieldCheck,
  Zap,
  Users,
  CloudCog,
  Cpu,
  Code,
  DatabaseZap,
  ShoppingCart,
  Layers,
  Rocket,
  BarChartBig,
  Settings2,
  Puzzle,
  Replace,
  Award,
  Eye,
  ThumbsUp,
  ClipboardList,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const laravelAdvantages = [
  {
    icon: Cpu,
    title: "Architectural Elegance",
    description:
      "MVC pattern for clarity, maintainability, and rapid prototyping without sacrificing long-term codebase health.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Built-in CSRF/XSS protection, input validation, robust authentication, and encryption to fortify every layer.",
  },
  {
    icon: Zap,
    title: "Scalability & Performance",
    description: "Engineered for high traffic with queue management, event broadcasting, and concurrent processing.",
  },
  {
    icon: Code,
    title: "API-First Development",
    description: "Streamlined RESTful/GraphQL API creation with first-class support for modern web and mobile apps.",
  },
  {
    icon: CloudCog,
    title: "Cloud-Native & DevOps Ready",
    description: "Docker support, serverless compatibility (AWS Lambda via Vapor), and mature CI/CD integrations.",
  },
  {
    icon: Users,
    title: "Unmatched Ecosystem",
    description:
      "Eloquent ORM, Blade templating, Nova, and a vast package library reduce development time and increase reliability.",
  },
]

const fishtailServices = [
  {
    icon: Code,
    title: "Custom Web Applications",
    shortDescription: "Robust, scalable apps crafted to your vision.",
    details: [
      "Responsive, accessibility-first UIs (WCAG 2.1)",
      "Multi-layered authentication & authorization",
      "Modular, service-oriented architecture",
    ],
  },
  {
    icon: DatabaseZap,
    title: "API & Microservices",
    shortDescription: "Future-ready RESTful & GraphQL APIs.",
    details: [
      "JWT, OAuth2, Laravel Sanctum security",
      "Advanced rate-limiting & abuse prevention",
      "API versioning, documentation & automated tests",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    shortDescription: "High-converting online stores, B2C to enterprise.",
    details: [
      "Custom checkout & payment integrations",
      "Multi-currency, multi-language, tax compliance",
      "Headless commerce (Laravel + React/Vue/Next)",
    ],
  },
  {
    icon: Replace,
    title: "Legacy PHP Migration",
    shortDescription: "Seamless migration from older PHP frameworks.",
    details: [
      "Automated static analysis & code conversion",
      "Modular refactoring to Laravel’s MVC",
      "Parallel “strangler” deployments to avoid risk",
    ],
  },
  {
    icon: Layers,
    title: "SaaS Multi-Tenancy",
    shortDescription: "Isolated, scalable multi-tenant applications.",
    details: [
      "Tenant-aware authentication & authorization",
      "Resource throttling & per-tenant usage limits",
      "Stripe/Braintree billing automation (Cashier)",
    ],
  },
  {
    icon: Rocket,
    title: "Cloud & DevOps Enablement",
    shortDescription: "Robust CI/CD, Docker, Kubernetes, IaC.",
    details: [
      "Dockerized environments, reproducible builds",
      "CI/CD automation (GitHub Actions, GitLab CI)",
      "Blue/green & canary deployment strategies",
    ],
  },
  {
    icon: BarChartBig,
    title: "Performance Optimization",
    shortDescription: "Diagnosing & eliminating performance bottlenecks.",
    details: [
      "Query optimization, Redis/Memcached caching",
      "PHP-FPM tuning, Laravel Octane for async",
      "Full-stack load testing & profiling",
    ],
  },
  {
    icon: Puzzle,
    title: "Third-Party Integrations",
    shortDescription: "Secure integrations: payment, CRM, ERP, etc.",
    details: [
      "Payment gateways, CRM/ERP, SMS/Email providers",
      "Single Sign-On (SSO), OAuth2, OpenID Connect",
      "Custom Laravel package development",
    ],
  },
]

const fishtailAdvantage = [
  {
    icon: Award,
    title: "Elite, Vetted Talent",
    description: "Access the top 3% of Laravel developers, rigorously selected through our multi-stage process.",
  },
  {
    icon: Eye,
    title: "U.S.-Based Project Leadership",
    description: "Benefit from seamless communication and project oversight in your timezone for clarity and results.",
  },
  {
    icon: Settings2,
    title: "Flexible Engagement Models",
    description: "Choose how you work with us—full-time, part-time, or project-based—scaling as your needs evolve.",
  },
  {
    icon: ThumbsUp,
    title: "Proven Results & Reliability",
    description: "Partner with a team known for high client retention and consistent on-time project delivery.",
  },
]

const vettingProcessSteps = [
  {
    stage: "1. Automated Screening & Psychometrics",
    description:
      "Initial skills assessment (PHP, Laravel, OOP, JS, SQL) and psychometric profiling for work ethic & agility.",
  },
  {
    stage: "2. Live Coding & System Design",
    description: "Real-time problem-solving and system design challenges with senior engineers.",
  },
  {
    stage: "3. Architectural Review & Code Audit",
    description:
      "Analysis of open-source Laravel repos, PSR-12 compliance, SOLID principles, and test coverage checks.",
  },
  {
    stage: "4. Communication & Culture Fit",
    description: "English proficiency tests (CEFR B2/C1), mock scrums, and scenario-based soft skills checks.",
  },
  {
    stage: "5. Background & Reference Checks",
    description: "Verification of professional references, employment history, and relevant background details.",
  },
]

const hiringSteps = [
  {
    title: "Initial Consultation & Discovery",
    description:
      "We listen—carefully—to your business goals, project requirements, technology stack, timeline, and team dynamics.",
    youGet: "Clear advice on team structure, a realistic feasibility assessment, and an estimated budget.",
  },
  {
    title: "Role Definition & Skill Blueprint",
    description:
      "Our technical lead crafts a detailed Laravel developer role profile based on your needs—covering all required skills.",
    youGet: "A transparent 'skills blueprint' to ensure every candidate is tailored to your vision.",
  },
  {
    title: "Candidate Pre-Screening",
    description:
      "Our talent acquisition team taps into our exclusive pool of pre-vetted Laravel experts, re-screened for your project.",
    youGet: "Only top-tier Laravel developers, not generic applicants.",
  },
  {
    title: "Live Technical & Cultural Interviews",
    description:
      "You review detailed profiles and resumes, then conduct live interviews with your shortlisted candidates.",
    youGet: "Total transparency and control—meet your potential developer(s) before you commit.",
  },
  {
    title: "Risk-Free Trial Assignment",
    description:
      "We offer a risk-free trial period so you can assess your developer’s skills and collaborative ability in a real-world setting.",
    youGet: "Peace of mind—only continue if you’re 100% satisfied.",
  },
  {
    title: "Seamless Onboarding",
    description:
      "Once you approve your developer, we handle the onboarding logistics: NDAs, contracts, and secure access setup.",
    youGet: "Your developer working on your codebase within days, not weeks or months.",
  },
  {
    title: "Sprint-Based Kickoff & Integration",
    description:
      "Your developer joins daily standups and sprint planning, just like an in-house teammate, with U.S.-based oversight.",
    youGet: "Real-time updates, detailed progress metrics, and the ability to scale at any sprint boundary.",
  },
  {
    title: "Ongoing Support, Feedback, and Scaling",
    description:
      "Our dedicated client success team stays in touch, ensuring smooth communication and ongoing satisfaction.",
    youGet: "Flexible, risk-free engagement for every phase of your Laravel project.",
  },
  {
    title: "Secure, Transparent Billing",
    description:
      "You receive weekly or monthly invoices with full time logs, code contribution reports, and sprint summaries.",
    youGet: "No hidden fees, no 'bench' costs, and always full cost visibility.",
  },
]

const engagementModels = [
  {
    icon: Users,
    title: "Dedicated Developer",
    description: "Full-time or part-time expert exclusively on your projects, integrated with your team.",
    bestFor: "Long-term initiatives, core product development, ongoing SaaS.",
  },
  {
    icon: Briefcase,
    title: "Elastic Pod (Agile Team)",
    description: "On-demand, cross-functional team (devs, QA, DevOps) managed by a Scrum Master/PM.",
    bestFor: "Feature sprints, rapid prototyping, digital transformation.",
  },
  {
    icon: ClipboardList,
    title: "Project-Based (Fixed Scope)",
    description: "Defined scope, fixed-price bid, and milestone-based delivery for clear outcomes.",
    bestFor: "MVP launches, proof-of-concepts, defined migrations.",
  },
]

const HiringProcessSlider = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])
  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api])

  const colors = ["bg-green-100", "bg-blue-100", "bg-purple-100", "bg-pink-100", "bg-yellow-100"]

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center space-x-2 mb-4">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                current === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-blue-600">
          Step {current + 1} of {count}
        </p>
      </div>

      <div className="relative">
        <Carousel setApi={setApi} opts={{ align: "center", loop: true }}>
          <CarouselContent className="-ml-4">
            {hiringSteps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card
                    className={cn(
                      "transition-all duration-300 ease-in-out transform",
                      current === index
                        ? "scale-105 shadow-2xl border-blue-500"
                        : "scale-90 opacity-60 hover:opacity-100",
                    )}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-lg flex items-center justify-center mb-4",
                          colors[index % colors.length],
                        )}
                      >
                        <span className="text-2xl font-bold text-gray-700">0{index + 1}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 h-14 flex items-center">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed h-24">{step.description}</p>
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md w-full mt-4">
                        <p className="text-sm text-blue-800 text-left">
                          <span className="font-bold">You get:</span> {step.youGet}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  )
}

export function LaravelExpertiseSection() {
  return (
    <section id="laravel-expertise" className="py-8 lg:py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Unlock Excellence with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Laravel Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why Laravel is the framework of choice and how our processes ensure you get top-tier talent for
            your projects.
          </p>
        </div>

        {/* Why Laravel Sub-section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Why Laravel Still Leads the Pack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laravelAdvantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div key={advantage.title} className="group relative cursor-pointer">
                  <Card className="bg-white shadow-sm border border-gray-200 h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-2">
                        <Icon className="w-7 h-7 text-blue-600 mr-3 transition-colors group-hover:text-purple-600" />
                        <CardTitle className="text-lg font-semibold text-gray-800">{advantage.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 text-sm mb-3 line-clamp-1 group-hover:line-clamp-none group-hover:text-gray-700 transition-all duration-300 max-h-6 group-hover:max-h-32 overflow-hidden">
                        {advantage.description}
                      </p>
                      <div className="absolute inset-0 rounded-xl ring-2 ring-purple-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300" />
                      <span className="absolute top-2 right-3 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">Read more</span>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Our Services Sub-section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Comprehensive Laravel Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fishtailServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="group relative">
                  <Card className="bg-white shadow-sm border border-gray-200 h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-2">
                        <Icon className="w-7 h-7 text-blue-600 mr-3 transition-colors group-hover:text-purple-600" />
                        <CardTitle className="text-lg font-semibold text-gray-800">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 text-sm mb-3">{service.shortDescription}</p>
                      <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-screen transition-all duration-500 ease-in-out overflow-hidden">
                        <ul className="space-y-1.5 text-xs text-gray-500 list-disc list-inside pl-1">
                          {service.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* The Fishtail Advantage Sub-section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">
            The Fishtail Infosolutions Advantage
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {fishtailAdvantage.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div
                  key={advantage.title}
                  className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">{advantage.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* NEW HIRING PROCESS SLIDER */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-800">Steps for Laravel Developer Hiring: Step-by-Step</h3>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Our hiring process is streamlined, secure, and designed to match your business with world-class Laravel
              talent—fast.
            </p>
          </div>
          <HiringProcessSlider />
        </div>

        {/* Rigorous Vetting Process Sub-section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Rigorous Vetting Process</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {vettingProcessSteps.map((step, index) => (
              <Card key={index} className="bg-white border-l-4 border-blue-500 shadow-sm">
                <CardContent className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1.5">{step.stage}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flexible Engagement Models Sub-section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-12">Flexible Engagement Models</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => {
              const Icon = model.icon
              return (
                <div key={model.title} className="group">
                  <Card className="bg-white shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <Icon className="w-8 h-8 text-blue-600 mr-3" />
                        <CardTitle className="text-xl font-semibold text-gray-800">{model.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                      <p className="text-gray-600 text-sm leading-relaxed">{model.description}</p>
                      <p className="text-xs text-gray-500">
                        <span className="font-medium text-gray-700">Best for:</span> {model.bestFor}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
