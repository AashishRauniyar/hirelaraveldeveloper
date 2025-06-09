"use client"

import React from "react"
import { Shield, Zap, Database, Code, Cloud, Users, Rocket, Globe } from "lucide-react"

export function LaravelAdvantagesSection() {
  const advantages = [
    {
      icon: Code,
      title: "Architectural Elegance and Practicality",
      description: "Laravel's adherence to the MVC (Model-View-Controller) pattern brings organizational clarity and maintainability to PHP development. Its expressive syntax and structure allow for rapid prototyping without sacrificing long-term codebase health."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Security is deeply integrated into Laravel's architecture. With built-in CSRF and XSS protection, strict input validation, robust authentication options, and advanced encryption methods, Laravel fortifies every layer of your application."
    },
    {
      icon: Zap,
      title: "Scalability and Performance",
      description: "Laravel is engineered to handle high traffic and complex data workflows, making it suitable for everything from startups to global enterprises. Features like queue management, event broadcasting, and native support for concurrent processing allow applications to scale seamlessly."
    },
    {
      icon: Database,
      title: "API-First Development",
      description: "Modern web and mobile applications demand robust, flexible APIs. Laravel streamlines the process with first-class support for RESTful architectures, seamless authentication, and powerful JSON handling."
    },
    {
      icon: Cloud,
      title: "Cloud-Native and DevOps Ready",
      description: "Laravel's toolchain is designed for the realities of modern deployment. Native Docker support and instant compatibility with serverless platforms like AWS Lambda (via Laravel Vapor) make it easy to achieve continuous delivery."
    },
    {
      icon: Users,
      title: "Unmatched Ecosystem and Community",
      description: "Laravel's extensive ecosystem reduces development time and increases reliability. Tools like Eloquent ORM, Blade templating, Nova admin, and a vast package library streamline every phase of a project."
    },
    {
      icon: Rocket,
      title: "Faster MVPs, Lower Total Cost of Ownership",
      description: "Laravel's scaffolding tools, code generation, and consistent upgrade paths enable teams to launch products and features rapidly. The framework's focus on maintainability and long-term support minimizes ongoing costs."
    },
    {
      icon: Globe,
      title: "Universal Applicability",
      description: "From high-growth startups to established enterprises, Laravel adapts to any scale or vertical. Its versatility, robust security, and operational maturity make it a dependable foundation for mission-critical web solutions."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Laravel Still{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Leads the Pack?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Laravel is the gold standard for rapid, secure, and scalable PHP development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-5 shadow-md border border-gray-100 group cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-purple-300"
            >
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                  <advantage.icon className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">
                {advantage.title}
              </h3>
              <p className="text-gray-500 text-xs line-clamp-2 group-hover:line-clamp-none group-hover:text-gray-700 transition-all duration-300 max-h-10 group-hover:max-h-40 overflow-hidden">
                {advantage.description}
              </p>
              <div className="absolute inset-0 rounded-xl ring-2 ring-purple-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300" />
              <span className="absolute top-2 right-3 text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300">Read more</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
