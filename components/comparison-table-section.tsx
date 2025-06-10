"use client"

import React, { useState } from "react"
import { Check, X, Star, DollarSign, Clock, Shield, Users, MessageCircle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

export function ComparisonTableSection() {
  // Animation variants
  const tableVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const rowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: i * 0.2
      }
    })
  };

  const featureCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  const providerComparison = [
    {
      provider: "HLD",
      logo: "/logo/companyLogo.png",
      talentVetting: "Top 3%, live interviews, technical tests",
      usBasedManagement: true,
      transparentPricing: true,
      hourlyRate: "$18–$32/hr",
      timezoneFlexibility: true,
      directCommunication: true,
      engagementFlexibility: "High",
      ipNdaProtection: true,
      highlight: true
    },
    {
      provider: "Toptal",
      logo: "/placeholder.svg",
      talentVetting: "High",
      usBasedManagement: "Partial",
      transparentPricing: false,
      hourlyRate: "$40–$80/hr",
      timezoneFlexibility: "Some",
      directCommunication: true,
      engagementFlexibility: "High",
      ipNdaProtection: true,
      highlight: false
    },
    {
      provider: "Upwork",
      logo: "/placeholder.svg",
      talentVetting: "None/self",
      usBasedManagement: false,
      transparentPricing: false,
      hourlyRate: "$15–$70/hr",
      timezoneFlexibility: "No guarantee",
      directCommunication: true,
      engagementFlexibility: "High",
      ipNdaProtection: "Varies",
      highlight: false
    },
    {
      provider: "Aglowid",
      logo: "/placeholder.svg",
      talentVetting: "Moderate",
      usBasedManagement: false,
      transparentPricing: "Partial",
      hourlyRate: "$20–$45/hr",
      timezoneFlexibility: "Partial",
      directCommunication: "Partial",
      engagementFlexibility: "Low",
      ipNdaProtection: "Varies",
      highlight: false
    },
    {
      provider: "Qalbit",
      logo: "/placeholder.svg",
      talentVetting: "Moderate",
      usBasedManagement: false,
      transparentPricing: "Partial",
      hourlyRate: "$20–$35/hr",
      timezoneFlexibility: "Partial",
      directCommunication: "Partial",
      engagementFlexibility: "Moderate",
      ipNdaProtection: "Varies",
      highlight: false
    }
  ]

  const hiringComparison = [
    {
      criteria: "Talent Quality",
      hld: "Highly vetted, top 3%",
      inHouse: "Varies by region",
      outsourcing: "Varies by agency",
      icon: Star
    },
    {
      criteria: "Cost",
      hld: "$18–$32/hr (avg)",
      inHouse: "$65–$120/hr (US avg)",
      outsourcing: "$30–$90/hr (varied)",
      icon: DollarSign
    },
    {
      criteria: "Hiring Speed",
      hld: "1–2 weeks",
      inHouse: "4–12 weeks",
      outsourcing: "2–8 weeks",
      icon: Clock
    },
    {
      criteria: "Flexibility",
      hld: "Scale up/down anytime",
      inHouse: "Hard to scale fast",
      outsourcing: "Project-based, rigid scope",
      icon: Users
    },
    {
      criteria: "Oversight",
      hld: "US-based project managers",
      inHouse: "Internal managers",
      outsourcing: "Agency PM (offshore)",
      icon: Shield
    },
    {
      criteria: "IP Security",
      hld: "NDA, strict contracts",
      inHouse: "Internal",
      outsourcing: "Varies",
      icon: Shield
    },
    {
      criteria: "Engagement Models",
      hld: "Dedicated, flexible",
      inHouse: "FTE only",
      outsourcing: "Fixed or retainer",
      icon: Users
    },
    {
      criteria: "Timezone Alignment",
      hld: "Yes",
      inHouse: "Yes",
      outsourcing: "Often no",
      icon: Clock
    },
    {
      criteria: "Communication",
      hld: "Direct with devs + US PM",
      inHouse: "Internal",
      outsourcing: "May be indirect",
      icon: MessageCircle
    }
  ]

  const renderBooleanValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      )
    }
    if (value === "Partial" || value === "Some") {
      return <span className="text-yellow-600 text-sm font-medium">{value}</span>
    }
    if (value === "Varies") {
      return <span className="text-gray-500 text-sm">{value}</span>
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Provider Comparison */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Top Laravel Developer Providers:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                How HLD Stands Out
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You have many options to hire Laravel experts—from freelance platforms to global agencies. Here's how HLD compares with other top providers:
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={tableVariants}
              className="min-w-full bg-white rounded-xl shadow-xl border border-gray-200"
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <motion.tr variants={rowVariants}>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    {providerComparison.map((provider, index) => (
                      <th key={index} className={`px-6 py-4 text-center text-sm font-semibold ${
                        provider.highlight ? 'text-purple-900 bg-purple-50' : 'text-gray-900'
                      }`}>
                        <div className="flex flex-col items-center">
                          <div className={`text-base font-bold ${provider.highlight ? 'text-purple-600' : 'text-gray-900'}`}>
                            {provider.provider}
                          </div>
                          {provider.highlight && (
                            <Badge className="mt-1 bg-purple-600 text-white">Recommended</Badge>
                          )}
                        </div>
                      </th>
                    ))}
                  </motion.tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Talent Vetting</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center text-sm ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        <span className={provider.highlight ? 'font-semibold text-purple-900' : 'text-gray-700'}>
                          {provider.talentVetting}
                        </span>
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">US-Based Management</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        {renderBooleanValue(provider.usBasedManagement)}
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Transparent Pricing</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        {renderBooleanValue(provider.transparentPricing)}
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Pricing (Hourly)</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        <span className={`text-sm font-semibold ${
                          provider.highlight ? 'text-purple-600' : 'text-gray-900'
                        }`}>
                          {provider.hourlyRate}
                        </span>
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Timezone Flexibility</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        {renderBooleanValue(provider.timezoneFlexibility)}
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Direct Communication</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        {renderBooleanValue(provider.directCommunication)}
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Engagement Flexibility</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center text-sm ${
                        provider.highlight ? 'bg-purple-50 font-semibold text-purple-900' : 'text-gray-700'
                      }`}>
                        {provider.engagementFlexibility}
                      </td>
                    ))}
                  </motion.tr>
                  <motion.tr className="hover:bg-gray-50" variants={rowVariants}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">IP/NDA Protection</td>
                    {providerComparison.map((provider, index) => (
                      <td key={index} className={`px-6 py-4 text-center ${
                        provider.highlight ? 'bg-purple-50' : ''
                      }`}>
                        {renderBooleanValue(provider.ipNdaProtection)}
                      </td>
                    ))}
                  </motion.tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>

        {/* HLD vs In-House vs Outsourcing */}
        <div>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              HLD vs In-House vs Outsourcing:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Laravel Developer Comparison
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Making the right hiring decision impacts your project's cost, quality, and delivery speed. Here's how hiring a Laravel developer from HLD compares to building an in-house team or outsourcing to a traditional agency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HLD Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-purple-900">HLD (Dedicated Developers)</CardTitle>
                  <Badge className="bg-purple-600 text-white">Recommended</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hiringComparison.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start" 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={cardVariants} 
                      custom={index}
                    >
                      <item.icon className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.criteria}</div>
                        <div className="text-purple-700 font-medium text-sm">{item.hld}</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* In-House Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Users className="w-8 h-8 text-gray-600" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900">In-House Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hiringComparison.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={cardVariants} 
                      custom={index}
                    >
                      <item.icon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.criteria}</div>
                        <div className="text-gray-600 text-sm">{item.inHouse}</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Outsourcing Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <MessageCircle className="w-8 h-8 text-gray-600" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Outsourcing Project (Agency)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hiringComparison.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={cardVariants} 
                      custom={index}
                    >
                      <item.icon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.criteria}</div>
                        <div className="text-gray-600 text-sm">{item.outsourcing}</div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Why Choose HLD Summary */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose HLD for Hiring Vetted Laravel Developers?
              </h3>
              <p className="text-xl mb-6 text-blue-100">
                Hiring Laravel coders through HLD is more than just filling a skills gap—it's investing in peace of mind, predictable results, and project success.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <motion.div 
                  className="bg-white/10 rounded-lg p-4"
                  variants={featureCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <h4 className="font-semibold mb-2">Elite Talent, No Guesswork</h4>
                  <p className="text-sm text-blue-100">Every developer represents the top 3% of applicants, verified through stringent multi-stage assessment.</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 rounded-lg p-4"
                  variants={featureCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <h4 className="font-semibold mb-2">US-Based Oversight, Global Affordability</h4>
                  <p className="text-sm text-blue-100">Dedicated U.S.-based project management with 60%+ cost savings while maintaining American business standards.</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 rounded-lg p-4"
                  variants={featureCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <h4 className="font-semibold mb-2">Security, Compliance & Transparency</h4>
                  <p className="text-sm text-blue-100">Operating under US law with robust NDAs, SOC-2 aligned processes, and complete intellectual property protection.</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
