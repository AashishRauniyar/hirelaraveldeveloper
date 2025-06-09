"use client"

import React from "react"
import { Star, MapPin, Clock, Award, Code, Database, Cloud } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function DeveloperProfilesSection() {
  const developers = [
    {
      name: "Ayesha Rahman",
      role: "Senior Laravel Developer",
      experience: "6+ years",
      timezone: "UTC+7 (overlaps EST mornings)",
      skills: ["Laravel", "PHP", "Vue.js", "MySQL", "Redis"],
      highlights: [
        "Built multi-tenant SaaS for fintech",
        "Migrated legacy PHP apps to Laravel 10+", 
        "Integrated Stripe, built custom REST and GraphQL APIs"
      ],
      softSkills: ["Agile team lead", "Clear communicator", "Excels at sprint planning"],
      certifications: ["AWS Certified Developer Associate"],
      rating: 4.9,
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Miguel Dominguez",
      role: "Laravel Backend Engineer", 
      experience: "4 years",
      timezone: "UTC-5 (EST)",
      skills: ["Laravel", "PHP 8", "Postgres", "Docker", "PHPUnit"],
      highlights: [
        "Developed high-volume RESTful APIs for logistics SaaS",
        "Implemented Docker CI/CD pipelines",
        "Strong with API documentation (OpenAPI/Swagger)"
      ],
      softSkills: ["Fluent English & Spanish", "Proactive in daily standups", "Keen on code quality"],
      certifications: ["Docker Certified Associate"],
      rating: 4.8,
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Natasha Bui",
      role: "Laravel Tech Lead",
      experience: "9+ years", 
      timezone: "Flexible overlap US/Europe",
      skills: ["Laravel", "Symfony", "React", "Node.js", "Microservices"],
      highlights: [
        "Led healthcare portal rebuild (HIPAA-compliant)",
        "Architected enterprise event-driven systems",
        "Champion of test-driven development"
      ],
      softSkills: ["Excellent mentorship", "Client workshop facilitator", "Speaks at PHP/Laravel meetups"],
      certifications: ["AWS Solutions Architect", "Certified Scrum Master"],
      rating: 5.0,
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Rahul Sethi",
      role: "Full Stack Laravel Developer",
      experience: "5 years",
      timezone: "UTC+5:30 (flexible PST/EST overlap)",
      skills: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS", "AWS"],
      highlights: [
        "Built headless e-commerce platforms",
        "Customized admin dashboards", 
        "Automated DevOps deployment on AWS with Terraform"
      ],
      softSkills: ["Strong documentation", "Fast learner", "Collaborative"],
      certifications: ["AWS Certified Developer"],
      rating: 4.9,
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Thao Nguyen",
      role: "Laravel & API Specialist",
      experience: "7 years",
      timezone: "UTC+7",
      skills: ["Laravel", "Lumen", "GraphQL", "RabbitMQ"],
      highlights: [
        "Scaled Laravel-based video streaming backend for EdTech",
        "Designed role-based access control",
        "Implemented advanced API rate limiting"
      ],
      softSkills: ["Analytical thinker", "Attentive to client needs", "Proactive status updates"],
      certifications: ["GraphQL Certified Developer"],
      rating: 4.8,
      avatar: "/placeholder-user.jpg"
    },
    {
      name: "Henry Osei",
      role: "Laravel Cloud Engineer",
      experience: "8 years",
      timezone: "UTC+0 (GMT)",
      skills: ["Laravel", "Docker", "Kubernetes", "AWS/GCP", "CI/CD"],
      highlights: [
        "Migrated on-prem apps to AWS EKS",
        "Set up automated Blue/Green deployments",
        "Optimized Laravel for Octane and Swoole"
      ],
      softSkills: ["Process-oriented", "Detail-focused", "Cross-team DevOps collaboration"],
      certifications: ["AWS Certified Solutions Architect", "Kubernetes CKA"],
      rating: 4.9,
      avatar: "/placeholder-user.jpg"
    }
  ]

  const getSkillIcon = (skill: string) => {
    if (skill.toLowerCase().includes('laravel') || skill.toLowerCase().includes('php')) return Code
    if (skill.toLowerCase().includes('docker') || skill.toLowerCase().includes('aws') || skill.toLowerCase().includes('cloud')) return Cloud
    if (skill.toLowerCase().includes('mysql') || skill.toLowerCase().includes('postgres') || skill.toLowerCase().includes('database')) return Database
    return Code
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Laravel Developer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Profiles
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet some of our top Laravel programmers—vetted, experienced, and ready to join your team. Each developer has passed our rigorous 5-stage vetting process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-200 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Image
                    src={developer.avatar}
                    alt={developer.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-purple-100 group-hover:border-purple-200 transition-colors"
                  />
                  <div className="absolute -top-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{developer.name}</CardTitle>
                <CardDescription className="text-purple-600 font-medium">{developer.role}</CardDescription>
                
                <div className="flex items-center justify-center mt-2">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(developer.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{developer.rating}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 text-purple-600" />
                  <span><strong>Experience:</strong> {developer.experience}</span>
                </div>

                <div className="flex items-start text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Timezone:</strong> {developer.timezone}</span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Core Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {developer.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights</h4>
                  <ul className="space-y-1">
                    {developer.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-xs text-gray-600">
                        <div className="w-1 h-1 bg-purple-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-1">
                    {developer.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="outline" className="text-xs border-purple-200 text-purple-700">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm py-2"
                  size="sm"
                >
                  Schedule Interview
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Our Laravel Developers Are Best in Class
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              With WPD, you don't just hire a Laravel programmer—you get a proven specialist, ready to deliver. Unlike freelance platforms or basic agencies, WPD's multi-stage vetting process ensures you always get the top 3% of Laravel talent.
            </p>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">Stage 1</div>
                <div className="text-sm text-gray-700">Automated Screening & Psychometrics</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">Stage 2</div>
                <div className="text-sm text-gray-700">Live Coding & System Design</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">Stage 3</div>
                <div className="text-sm text-gray-700">Architectural Review & Code Audit</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">Stage 4</div>
                <div className="text-sm text-gray-700">Communication & Culture Fit</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-purple-600 mb-1">Stage 5</div>
                <div className="text-sm text-gray-700">Background & Reference Checks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
