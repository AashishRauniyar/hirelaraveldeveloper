"use client"

import type React from "react"
import { useState } from "react"
import { Star, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const partnerLogos = [
    { name: "Google Partner", src: "/placeholder.svg?width=100&height=30", alt: "Google Partner Logo" },
    { name: "Trustpilot", src: "/placeholder.svg?width=100&height=30", alt: "Trustpilot Logo" },
    { name: "Clutch", src: "/placeholder.svg?width=80&height=30", alt: "Clutch Logo" },
  ]

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Star className="w-4 h-4 mr-1.5 text-purple-600" />
              Top 3% Vetted Laravel Experts - 5 Rounds of Rigorous Vetting
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight">
              Hire Dedicated{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Laravel Developers
              </span>{" "}
              Through Fishtail Infosolutions
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Hire dedicated Laravel developers from Fishtail Infosolutions (FI) and transform your web initiatives
              with elite, security-cleared engineers from around the globe. Gain the firepower of a full-stack
              Laravel expert—delivering bullet-proof code, transparent reporting, and measurable ROI—
              without the delays, HR friction, or bloated costs of traditional hiring.
            </p>

            {/* Key Benefits List */}
            <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span><strong>Top 3% Vetted Talent:</strong> Only 1 in 30 developers pass our rigorous selection process</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span><strong>Cost Savings Up to 60%:</strong> Scale your team at $18–$32/hr—half the average US rate</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span><strong>Rapid Onboarding:</strong> Start with your Laravel expert in as little as 7 days</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span><strong>100% Client Retention:</strong> Trusted by startups, agencies, and enterprises across 4 continents</span>
              </div>
              <div className="flex items-center md:col-span-2">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                <span><strong>US-Based Project Oversight:</strong> Seamless communication, real-time updates, zero timezone headaches</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-md text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                START 7-DAYS TRIAL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-3.5 rounded-md text-base font-medium flex items-center group"
              >
                <Phone className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" />
                +1 315 215 2005
              </Button>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-700 font-medium">4.8</span>
                <span className="ml-1 text-sm text-gray-500">(500+ Google Reviews)</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Partners:</span>
                {partnerLogos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={100}
                    height={24} // Adjusted height for better proportion
                    className="object-contain h-6 filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="bg-white border-gray-200 shadow-xl rounded-lg">
              <CardHeader className="p-6 md:p-8 text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800">Get a Custom Quote</CardTitle>
                <CardDescription className="text-gray-600 mt-2 text-sm md:text-base">
                  Please complete the requested fields and we'll be in touch within one business day to discuss options
                  and pricing.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0 md:pt-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-md text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
