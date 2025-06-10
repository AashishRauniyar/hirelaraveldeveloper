"use client"

import React from "react"
import { useState } from "react"
import { 
  MessageCircle, 
  FileSearch, 
  Users, 
  Video, 
  TestTube, 
  Rocket, 
  Target, 
  LifeBuoy, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Zap
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HiringProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const hiringSteps = [
    {
      step: 1,
      title: "Initial Consultation & Discovery",
      icon: MessageCircle,
      description: "Our process begins with a confidential, obligation-free consultation with a senior WPD project manager based in the U.S.",
      details: undefined,
      outcome: undefined,
      duration: "30-60 minutes"
    },
    {
      step: 2,
      title: "Role Definition & Skill Blueprint",
      icon: FileSearch,
      description: "WPD's technical lead crafts a detailed Laravel developer role profile based on your needs.",
      details: undefined,
      outcome: undefined,
      duration: "1-2 business days"
    },
    {
      step: 3,
      title: "Candidate Pre-Screening", 
      icon: Users,
      description: "Our talent acquisition team taps into WPD's exclusive pool of pre-vetted Laravel experts.",
      details: undefined,
      outcome: undefined,
      duration: "2-3 business days"
    },
    {
      step: 4,
      title: "Live Technical & Cultural Interviews",
      icon: Video,
      description: "You review detailed developer profiles and resumes, then conduct live interviews with your shortlisted candidates.",
      details: undefined,
      outcome: undefined,
      duration: "1-2 hours per candidate"
    },
    {
      step: 5,
      title: "Risk-Free Trial Assignment",
      icon: TestTube,
      description: "WPD offers a risk-free trial period (typically one to two weeks).",
      details: undefined,
      outcome: undefined,
      duration: "1-2 weeks"
    },
    {
      step: 6,
      title: "Seamless Onboarding",
      icon: Rocket,
      description: "Once you approve your Laravel developer, WPD handles the onboarding logistics.",
      details: undefined,
      outcome: undefined,
      duration: "2-3 business days"
    },
    {
      step: 7,
      title: "Sprint-Based Kickoff & Integration",
      icon: Target,
      description: "Your Laravel developer joins daily standups, sprint planning, and code reviews—just like an in-house teammate.",
      details: undefined,
      outcome: undefined,
      duration: "Ongoing"
    },
    {
      step: 8,
      title: "Ongoing Support, Feedback, and Scaling",
      icon: LifeBuoy,
      description: "WPD's dedicated client success team stays in touch, ensuring smooth communication and ongoing satisfaction.",
      details: undefined,
      outcome: undefined,
      duration: "Ongoing"
    },
    {
      step: 9,
      title: "Secure, Transparent Billing",
      icon: CreditCard,
      description: "You receive weekly or monthly invoices with full time logs, code contribution reports, and sprint summaries.",
      details: undefined,
      outcome: undefined,
      duration: "Weekly/Monthly"
    }
  ]

  const engagementModels = [
    {
      title: "Dedicated Developer Model",
      icon: Users,
      structure: "A full-time (or part-time) Laravel developer works exclusively on your project(s), following your processes and integrating with your team.",
      bestFor: "Long-term initiatives, core product development, ongoing SaaS, complex migrations.",
      billing: "Monthly (with detailed timesheets and activity logs).",
      scaling: "Add or reduce developers with just two weeks' notice—no fixed term required.",
      priceRange: "$2,800–$5,120/month"
    },
    {
      title: "Elastic Pod Model (Agile Team)",
      icon: Target,
      structure: "An on-demand, cross-functional team (2–6 developers, QA, DevOps, optionally UX) managed by a dedicated Scrum Master or Project Manager.",
      bestFor: "Feature sprints, parallel development, rapid prototyping, digital transformation.",
      billing: "Bi-weekly statement of work (SOW) or retainer.",
      scaling: "Team size can flex sprint-to-sprint; velocity is tracked to project burn-down charts.",
      priceRange: "$8,000–$25,000/month"
    },
    {
      title: "Project-Based (Fixed Scope) Model",
      icon: CheckCircle,
      structure: "Define a scope, get a fixed-price bid, and receive milestone-based delivery.",
      bestFor: "MVP launches, proof-of-concept, defined migration, non-core app modules.",
      billing: "40% upfront, 60% tied to project milestones and acceptance.",
      scaling: "Change requests handled via backlog addendums and agreed impact to timeline/cost.",
      priceRange: "$15,000–$100,000+"
    },
    {
      title: "Consulting & Rescue Missions",
      icon: LifeBuoy,
      structure: "Hire WPD for a technical audit, code review, security analysis, or to rescue a troubled project.",
      bestFor: "Due diligence, technical debt, performance, or compliance fixes.",
      billing: "Hourly (minimum 20-hour bank, flexible use).",
      scaling: "Flexible based on project needs and urgency.",
      priceRange: "$75–$150/hour"
    }
  ]

  const guarantees = [
    {
      icon: Clock,
      title: "No Minimum Lock-in",
      description: "Start with as little as 40 billable hours."
    },
    {
      icon: TestTube,
      title: "Risk-Free Trial",
      description: "First 40 hours can be refunded or swapped to a different developer if you're unsatisfied."
    },
    {
      icon: Zap,
      title: "Seamless Ramp-Up/Down",
      description: "Capacity adjusts based on your backlog, market, or investor runway."
    },
    {
      icon: Rocket,
      title: "Rapid Onboarding",
      description: "New hires or team scale-ups can be deployed in under seven business days."
    }
  ]

  // const hiringSteps = hiringSteps.map(step => ({
  //   ...step,
  //   description: step.description.split('.')[0] + '.',
  //   details: undefined,
  //   outcome: undefined
  // }));
  // const engagementModels = engagementModels.map(model => ({
  //   ...model,
  //   structure: model.structure.split('.')[0] + '.',
  //   bestFor: model.bestFor.split('.')[0] + '.',
  //   billing: model.billing.split('.')[0] + '.',
  //   scaling: model.scaling.split('.')[0] + '.'
  // }));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Laravel Developer Hiring:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Step-by-Step Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Looking to hire dedicated Laravel developers for your next project? With WPD, the Laravel developer hiring process is streamlined, secure, and designed to match your business with world-class Laravel talent—fast.
          </p>
        </div>

        <Tabs defaultValue="process" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="process" className="text-lg py-3">Hiring Process</TabsTrigger>
            <TabsTrigger value="models" className="text-lg py-3">Engagement Models</TabsTrigger>
          </TabsList>
          
          <TabsContent value="process">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Step Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Process Steps</h3>
                  <div className="space-y-2">
                    {hiringSteps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          activeStep === index
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-bold ${
                            activeStep === index ? 'bg-white text-purple-600' : 'bg-purple-100 text-purple-600'
                          }`}>
                            {step.step}
                          </div>
                          <span className="font-medium text-sm">{step.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step Details */}
              <div className="lg:col-span-2">
                <Card className="bg-white shadow-xl border-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                        {React.createElement(hiringSteps[activeStep].icon, { 
                          className: "w-8 h-8 text-purple-600" 
                        })}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm text-purple-600 font-medium">Step {hiringSteps[activeStep].step}</div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {hiringSteps[activeStep].title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-gray-600">
                      {hiringSteps[activeStep].description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Details</h4>
                      <p className="text-gray-600">{hiringSteps[activeStep].details}</p>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        What You Get
                      </h4>
                      <p className="text-green-800">{hiringSteps[activeStep].outcome}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {hiringSteps[activeStep].duration}
                      </div>
                      {activeStep < hiringSteps.length - 1 && (
                        <Button 
                          onClick={() => setActiveStep(activeStep + 1)}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          Next Step
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="models">
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {engagementModels.map((model, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          {React.createElement(model.icon, { className: "w-6 h-6 text-purple-600" })}
                        </div>
                        <div className="ml-4">
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {model.title}
                          </CardTitle>
                          <div className="text-lg font-semibold text-purple-600">
                            {model.priceRange}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                        <p className="text-sm text-gray-600">{model.structure}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                        <p className="text-sm text-gray-600">{model.bestFor}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Billing</h4>
                        <p className="text-sm text-gray-600">{model.billing}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Scaling</h4>
                        <p className="text-sm text-gray-600">{model.scaling}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Scaling Logic & Guarantees */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Scaling Logic & Guarantees
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {React.createElement(guarantee.icon, { className: "w-6 h-6 text-purple-600" })}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{guarantee.title}</h4>
                      <p className="text-sm text-gray-600">{guarantee.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-lg">
            Start Your 7-Day Risk-Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-gray-500 mt-3">No upfront costs • Cancel anytime • Get started in 7 days</p>
        </div>
      </div>
    </section>
  )
}
