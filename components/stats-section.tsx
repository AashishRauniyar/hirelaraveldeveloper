import { TrendingUp, DollarSign, Clock, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Performance Boost",
      description: "Dramatic improvements for clients",
    },
    {
      icon: DollarSign,
      value: "60%",
      label: "Cost Efficiency",
      description: "Significant cost savings",
    },
    {
      icon: Clock,
      value: "7 Days",
      label: "Rapid Onboarding",
      description: "From interview to coding",
    },
    {
      icon: CheckCircle,
      value: "98%",
      label: "On-Time Delivery",
      description: "Industry-leading reliability",
    },
  ]

  return (
    <section className="py-2 lg:py-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. Here's what sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={cn(
                  "text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm",
                  "transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 group",
                )}
              >
                <IconComponent className="w-10 h-10 text-blue-600 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-800 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
