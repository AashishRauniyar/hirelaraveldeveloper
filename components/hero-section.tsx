"use client"

import type React from "react"
import { useState } from "react"
import { Star, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { toast } from "sonner"
import { SuccessModal } from "@/components/success-modal"
import { CustomPhoneInput } from "./phone-input"

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnerLogos = [
    { name: "Google Partner", src: "/placeholder.svg?width=100&height=30", alt: "Google Partner Logo" },
    { name: "Trustpilot", src: "/placeholder.svg?width=100&height=30", alt: "Trustpilot Logo" },
    { name: "Clutch", src: "/placeholder.svg?width=80&height=30", alt: "Clutch Logo" },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Star className="w-4 h-4 mr-1.5 text-purple-600" />
              <span className="whitespace-normal sm:whitespace-nowrap">Top 3% Vetted Laravel Experts - 5 Rounds of Rigorous Vetting</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-tight">
              Hire Top 3% <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Laravel Developers</span> Vetted in 5 Rounds
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Start in 7 days with elite, security-cleared engineers. US-based project oversight, 100% client retention, and rapid onboarding. Scale your web initiatives with HLD—no HR friction, no hidden costs.
            </p>

            {/* Key Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="flex items-start">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-1" />
                <span><strong>Top 3% Vetted Talent:</strong> Only 1 in 30 developers pass our rigorous selection process</span>
              </div>
              <div className="flex items-start">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-1" />
                <span><strong>Cost Savings Up to 60%:</strong> Scale your team at $18–$32/hr—half the average US rate</span>
              </div>
              <div className="flex items-start">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-1" />
                <span><strong>Rapid Onboarding:</strong> Start with your Laravel expert in as little as 7 days</span>
              </div>
              <div className="flex items-start">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-1" />
                <span><strong>100% Client Retention:</strong> Trusted by startups, agencies, and enterprises across 4 continents</span>
              </div>
              <div className="flex items-start sm:col-span-2">
                <Star className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0 mt-1" />
                <span><strong>US-Based Project Oversight:</strong> Seamless communication, real-time updates, zero timezone headaches</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3.5 rounded-md text-base font-semibold shadow-md hover:shadow-lg transition-shadow"
              >
                START 7-DAYS TRIAL
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 py-3.5 rounded-md text-base font-medium flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-600 transition-colors" />
                +1 315 215 2005
              </Button>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-700 font-medium">4.8</span>
                <span className="text-sm text-gray-500">(500+ Google Reviews)</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Partners:</span>
                <div className="flex flex-wrap gap-4">
                  {partnerLogos.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={100}
                      height={24}
                      className="object-contain h-6 filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="min-w-0">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="min-w-0">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <CustomPhoneInput
                      value={formData.phone}
                      onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                      error={formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone) ? "Please enter a valid phone number" : undefined}
                      className="w-full"
                      inputStyle={{ width: '100%' }}
                    />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                    required
                  />
                </div>
                <div className="flex justify-end mt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-10 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </section>
  )
}
