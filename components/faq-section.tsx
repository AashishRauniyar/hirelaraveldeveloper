"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils" // Import cn

const faqsData = [
  {
    question: "What makes HLD's 5-round vetting process unique?",
    answer: "Our rigorous 5-round process includes: (1) Resume & Portfolio Review, (2) Technical Skills Assessment, (3) Laravel-specific Coding Challenge, (4) System Design & Architecture Interview, and (5) Cultural Fit & Communication Evaluation. Only the top 3% of candidates pass all rounds, ensuring you get elite Laravel developers."
  },
  {
    question: "How quickly can I hire a dedicated Laravel developer?",
    answer: "With our pre-vetted talent pool, you can hire a Laravel developer within 48-72 hours. Our streamlined process eliminates lengthy recruitment cycles, allowing you to start your project immediately with the perfect developer match."
  },
  {
    question: "What's the difference between HLD and freelance platforms like Upwork?",
    answer: "Unlike freelance platforms, HLD provides full-time dedicated developers who work exclusively on your project. You get consistent availability, US-based project management, quality assurance, legal compliance, and seamless communication - all backed by our 97% client retention rate."
  },
  {
    question: "Do your Laravel developers have experience with modern frameworks and tools?",
    answer: "Yes! Our Laravel developers are proficient in the entire modern ecosystem including Laravel 10+, Vue.js, React, Node.js, Docker, AWS, PHP 8+, MySQL, PostgreSQL, Redis, and DevOps tools. They stay updated with the latest Laravel features and best practices."
  },
  {
    question: "What engagement models do you offer for hiring Laravel developers?",
    answer: "We offer flexible engagement models: (1) Full-time Dedicated (160 hours/month), (2) Part-time Dedicated (80 hours/month), (3) Hourly Engagement (minimum 20 hours/week), and (4) Project-based Fixed Cost. Choose what works best for your project scope and budget."
  },
  {
    question: "How do you ensure code quality and project success?",
    answer: "We ensure quality through rigorous code reviews, automated testing, CI/CD pipelines, daily standups, and weekly progress reports. Each developer follows Laravel best practices, PSR standards, and uses tools like PHPStan, Larastan, and comprehensive unit testing."
  },
  {
    question: "Can I scale my development team up or down as needed?",
    answer: "Absolutely! Our flexible scaling allows you to add more Laravel developers within 48 hours or reduce team size with 2 weeks' notice. We've successfully scaled teams from 1 to 20+ developers based on project requirements."
  },
  {
    question: "What if I'm not satisfied with the developer's performance?",
    answer: "We offer a 2-week risk-free trial period. If you're not completely satisfied, we'll replace the developer at no additional cost or provide a full refund. Our 97% client retention rate speaks to our commitment to your success."
  },
  {
    question: "Do you provide ongoing support and maintenance for Laravel applications?",
    answer: "Yes! We offer comprehensive post-development support including bug fixes, security updates, Laravel version upgrades, performance optimization, and feature enhancements. Our support plans ensure your application stays secure and performant."
  },
  {
    question: "How do you handle time zone differences and communication?",
    answer: "Our developers work in flexible time zones to overlap with your business hours. We provide daily standup calls, weekly progress reports, and use collaboration tools like Slack, Jira, and GitHub. US-based project managers ensure seamless communication."
  },
  {
    question: "What industries do your Laravel developers have experience in?",
    answer: "Our Laravel developers have extensive experience across industries including FinTech, HealthTech, E-commerce, SaaS, EdTech, Real Estate, Media & Entertainment, and Enterprise solutions. They understand industry-specific compliance and requirements."
  },
  {
    question: "Can your developers work with existing Laravel codebases?",
    answer: "Absolutely! Our developers excel at code reviews, legacy system modernization, performance optimization, and seamless integration with existing Laravel applications. They can quickly understand and improve your current codebase."
  },
  {
    question: "What's included in your Laravel development services?",
    answer: "Our comprehensive services include custom Laravel development, API development, database design, third-party integrations, payment gateway setup, cloud deployment, performance optimization, security implementation, and ongoing maintenance."
  },
  {
    question: "How do you ensure data security and IP protection?",
    answer: "We maintain strict security protocols including signed NDAs, secure development environments, encrypted communication channels, regular security audits, and compliance with GDPR, HIPAA, and SOC 2 standards. Your intellectual property is fully protected."
  },
  {
    question: "What are the typical costs for hiring Laravel developers through HLD?",
    answer: "Our transparent pricing starts at $25/hour for junior developers and goes up to $60/hour for senior architects. Full-time dedicated developers range from $4,000-$9,000/month. We provide detailed quotes based on your specific requirements with no hidden costs."
  }
]

const shortenedFaqsData = faqsData.slice(0, 10).map(faq => ({
  ...faq,
  answer: faq.answer.split('. ').slice(0, 2).join('. ') + '.'
}));

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about hiring elite Laravel developers through HLD's 5-round vetting process.</p>
        </div>

        <div className="space-y-5">
          {shortenedFaqsData.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              {" "}
              {/* Added overflow-hidden */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors focus:outline-none"
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openFAQ === index ? (
                  <Minus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>
              <div // Changed from conditional rendering to class-based visibility
                id={`faq-answer-${index}`}
                className={cn(
                  "px-6 pt-2 pb-5 border-t border-gray-200 transition-all duration-300 ease-in-out",
                  openFAQ === index ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible", // Adjusted for better transition
                )}
              >
                <p className="text-gray-600 leading-relaxed text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
