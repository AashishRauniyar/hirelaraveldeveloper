"use client"

import React from "react"
import { Star, Quote, TrendingUp, Clock, DollarSign, Users, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Rapid FinTech SaaS Launch",
      client: "Pinewave, a U.S.-based financial startup",
      challenge: "Launch a compliant, secure MVP for a banking platform in under 100 days.",
      solution: "WPD deployed a senior Laravel developer team using Laravel, Vue.js, and AWS with bank-level encryption. Features included multi-factor authentication, real-time API integrations, and audit logging.",
      results: [
        "Go-live achieved in 78 days",
        "PCI DSS compliance passed on first audit", 
        "$1.8M seed funding secured within three months of launch"
      ],
      industry: "FinTech",
      duration: "78 days",
      teamSize: "3 developers",
      technologies: ["Laravel", "Vue.js", "AWS", "MySQL"]
    },
    {
      title: "E-Commerce Platform Modernization",
      client: "Blush Boutique, a fashion retailer with 8,000+ daily users",
      challenge: "Replace legacy PHP with a scalable, mobile-ready e-commerce site supporting flash sales and third-party logistics.",
      solution: "WPD's dedicated Laravel developers built a new API-first backend, implemented headless checkout, and integrated Shippo, Stripe, and Algolia.",
      results: [
        "42% faster load times",
        "31% increase in conversion rate",
        "Zero downtime Black Friday",
        "99.98% uptime SLA maintained for 18 months"
      ],
      industry: "E-Commerce",
      duration: "4 months",
      teamSize: "4 developers",
      technologies: ["Laravel", "React", "Stripe", "Algolia"]
    },
    {
      title: "Healthcare Portal with HIPAA Compliance",
      client: "WellCare Solutions, telemedicine provider",
      challenge: "Migrate from ASP.NET to Laravel, adding secure patient records, video appointments, and e-prescriptions.",
      solution: "WPD assembled a dedicated Laravel team with healthcare expertise, ensuring encrypted PHI storage, custom user permissions, and secure video API integration.",
      results: [
        "Achieved HIPAA compliance",
        "Doubled monthly active users in six months",
        "Reduced support tickets by 65%"
      ],
      industry: "Healthcare",
      duration: "6 months",
      teamSize: "5 developers",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "WebRTC"]
    },
    {
      title: "EdTech Startup Scales Fast with WPD",
      client: "EdVantage, an online learning platform",
      challenge: "Quickly expand their Laravel-powered LMS to handle 10,000+ concurrent students, while rolling out gamification and video features.",
      solution: "A dedicated pod of three Laravel experts worked hand-in-hand with EdVantage's CTO. The team optimized database queries, introduced Redis caching, built a microservice for streaming, and rolled out new achievement badges—all in 14 weeks.",
      results: [
        "Supported a 300% surge in daily active users without performance issues",
        "Cut page load times by 48%",
        "Won 'Best UX in EdTech 2024' from a leading education technology review board"
      ],
      industry: "EdTech",
      duration: "14 weeks",
      teamSize: "3 developers",
      technologies: ["Laravel", "Redis", "Microservices", "Vue.js"]
    }
  ]

  const testimonials = [
    {
      quote: "WPD's dedicated Laravel developer delivered exactly what we needed—on time, on budget, and with code quality that passed our strictest audits. Communication was flawless.",
      author: "Rachel T.",
      role: "VP of Product",
      company: "Pinewave",
      rating: 5
    },
    {
      quote: "The onboarding process was seamless. Our dedicated Laravel developer became an extension of our team, helping us launch new e-commerce features faster than ever.",
      author: "Mike P.",
      role: "Head of Digital", 
      company: "Blush Boutique",
      rating: 5
    },
    {
      quote: "We switched to WPD after a poor experience with another agency, and the difference was night and day. Their attention to security and best practices is world-class.",
      author: "Dr. Jonathan Lee",
      role: "CEO",
      company: "WellCare Solutions",
      rating: 5
    },
    {
      quote: "WPD scaled our Laravel development team in less than a week. We've seen dramatic improvements in performance and stability since.",
      author: "Tara Benson",
      role: "COO",
      company: "TrackFlow Inc.",
      rating: 5
    },
    {
      quote: "If you want developers who take ownership, communicate clearly, and deliver results, you want WPD. WPD is the best decision we made all year—responsive, brilliant, and committed.",
      author: "Samir Desai",
      role: "CTO",
      company: "EdVantage",
      rating: 5
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sample Projects Delivered by Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Laravel Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When you hire vetted Laravel developers from WPD, you get proven expertise across a diverse range of high-impact projects for startups and enterprises alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {study.industry}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    <strong>Client:</strong> {study.client}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start text-sm text-gray-600">
                          <TrendingUp className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {study.teamSize}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {study.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{study.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Reviews
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See why businesses choose to hire Laravel developers from WPD and trust us as their long-term technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-8 h-8 text-purple-600" />
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence in providing best Laravel consultant has earned WPD industry-leading awards and recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border border-purple-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Clutch Top B2B Service Provider</h4>
                <p className="text-sm text-gray-600 mb-1">2024, 2025</p>
                <p className="text-xs text-gray-500">Recognized for consistent 5-star client feedback and technical excellence</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-purple-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Best Emerging Tech Talent Partner</h4>
                <p className="text-sm text-gray-600 mb-1">GoodFirms 2024</p>
                <p className="text-xs text-gray-500">Awarded for excellence in offshore development and client satisfaction</p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-purple-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Top 10 Global Laravel Development Companies</h4>
                <p className="text-sm text-gray-600 mb-1">SoftwareWorld 2025</p>
                <p className="text-xs text-gray-500">Placed for innovation, delivery speed, and customer retention</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
