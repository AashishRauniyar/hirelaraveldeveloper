"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(2) // Start at step 3 (index 2)

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Understanding your project, timeline, and objectives to tailor our approach.",
      highlight: "Outcome: Clear project roadmap and timeline estimation.",
    },
    {
      number: "02",
      title: "Skill Blueprint",
      description: "Crafting a detailed developer profile based on your specific technical and soft skill needs.",
      highlight: "Outcome: Transparent 'skills blueprint' for tailored developer matching.",
    },
    {
      number: "03",
      title: "Candidate Pre-Screening",
      description: "Tapping into our exclusive pool of pre-vetted Laravel experts, re-screened for your project.",
      highlight: "Outcome: Access to top-tier Laravel developers, not generic applicants.",
    },
    {
      number: "04",
      title: "Interviews",
      description: "Conducting technical and cultural interviews with shortlisted candidates for your review.",
      highlight: "Outcome: Full transparency and control to meet your potential team.",
    },
    {
      number: "05",
      title: "Contract & Onboarding",
      description: "Handling all paperwork and ensuring a smooth onboarding process for your selected developer(s).",
      highlight: "Outcome: Hassle-free setup with complete legal protection.",
    },
  ]

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Our Hiring Process: Step-by-Step</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamlined, secure, and designed to match your business with world-class Laravel talent—fast.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full mx-1.5 transition-all duration-300 ${
                index === currentStep ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
        <div className="text-center mb-10 text-blue-600 font-medium">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-gray-200 shadow-sm bg-gray-50/80">
            <CardHeader className="text-center pt-8">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-semibold">
                {steps[currentStep].number}
              </div>
              <CardTitle className="text-2xl font-semibold text-gray-800">{steps[currentStep].title}</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-5">
              <CardDescription className="text-lg text-gray-600 text-center leading-relaxed">
                {steps[currentStep].description}
              </CardDescription>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                <p className="text-blue-700 font-medium">{steps[currentStep].highlight}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-4 mt-10">
          <Button
            variant="outline"
            onClick={prevStep}
            className="px-6 py-2.5 text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </Button>
          <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5">
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
