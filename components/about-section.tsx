import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  const features = [
    "Dedicated project managers for seamless execution.",
    "AI integration in web apps for enhanced functionality.",
    "Over 300+ successfully delivered web applications.",
    "A strong team of 30+ dedicated Laravel developers.",
  ]

  return (
    <section id="about" className="py-8 lg:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">Why Choose Fishtail Infosolutions?</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl text-gray-600 leading-relaxed">
              With a decade of experience in Laravel and PHP, we've empowered diverse industries with expert solutions.
              Our portfolio showcases our commitment to excellence and client success.
            </p>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium"
              >
                Get A Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-image.png"
                alt="Team collaborating on a project"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
