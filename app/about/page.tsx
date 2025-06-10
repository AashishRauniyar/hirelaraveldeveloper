import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Check, Award, Eye, Settings2, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Fishtail Infosolutions",
  description: "Learn about our expertise in Laravel development and our commitment to excellence.",
};

export default function AboutPage() {
  const features = [
    "Dedicated project managers for seamless execution.",
    "AI integration in web apps for enhanced functionality.",
    "Over 300+ successfully delivered web applications.",
    "A strong team of 30+ dedicated Laravel developers.",
  ];

  const advantages = [
    {
      icon: Award,
      title: "Elite, Vetted Talent",
      description: "Access the top 3% of Laravel developers, rigorously selected through our multi-stage process.",
    },
    {
      icon: Eye,
      title: "U.S.-Based Project Leadership",
      description: "Benefit from seamless communication and project oversight in your timezone for clarity and results.",
    },
    {
      icon: Settings2,
      title: "Flexible Engagement Models",
      description: "Choose how you work with us—full-time, part-time, or project-based—scaling as your needs evolve.",
    },
    {
      icon: ThumbsUp,
      title: "Proven Results & Reliability",
      description: "Partner with a team known for high client retention and consistent on-time project delivery.",
    },
  ];

  return (
    <div className="antialiased text-gray-800 bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                About Fishtail Infosolutions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With a decade of experience in Laravel and PHP, we've empowered diverse industries with expert solutions. Our portfolio showcases our commitment to excellence and client success.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  We are a team of passionate developers and technology enthusiasts dedicated to delivering exceptional web solutions. Our expertise in Laravel development has helped numerous businesses transform their digital presence.
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
                    asChild
                  >
                    <a href="/contact">
                      Get A Custom Quote
                      <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-image.png"
                    alt="Team collaborating on a project"
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                Why Choose Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <advantage.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 