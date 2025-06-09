import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function PricingSection() {
  const plans = [
    {
      title: "Fixed Price Model",
      subtitle: "For well-defined scope projects",
      features: ["One-time fixed contract", "Fixed budgets & deadlines", "Milestone payments", "Risk-free development"],
      popular: false,
    },
    {
      title: "Dedicated Developers",
      subtitle: "For long-term projects",
      features: [
        "Full-time Laravel dev",
        "One-to-one reporting",
        "Client-centric work",
        "Direct communication",
        "Dedicated PM",
      ],
      popular: true,
    },
    {
      title: "Hourly Model",
      subtitle: "For flexible ongoing support",
      features: [
        "Hour-wise rolling contract",
        "Pay for measurable work",
        "Bi-Weekly/Monthly billing",
        "Transparent tracking",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Flexible Pricing Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the engagement model that fits your project needs and budget, all with our quality guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                "relative flex flex-col bg-white rounded-lg p-8 border border-gray-200 transition-all duration-300 ease-in-out",
                "hover:border-blue-500 hover:shadow-xl focus-within:border-blue-500 focus-within:shadow-xl",
                plan.popular ? "shadow-md" : "shadow-sm", // Popular plan can have a slightly more prominent default shadow
              )}
              tabIndex={0} // Make card focusable
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center shadow-md">
                    <Star className="w-3 h-3 mr-1.5 fill-current" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              <CardHeader className="text-center pt-6 pb-4">
                <CardTitle className="text-2xl font-semibold text-gray-900 mb-1">{plan.title}</CardTitle>
                <CardDescription className="text-gray-600">{plan.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2.5">
                      <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="mt-auto pt-6">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={cn(
                    "w-full py-3 text-lg font-medium",
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "text-blue-600 border-blue-600 hover:bg-blue-50",
                  )}
                >
                  Choose Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md text-xl font-medium"
          >
            Get A Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
