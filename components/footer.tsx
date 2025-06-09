import { MapPin, Phone, Mail, ArrowRight } from "lucide-react" // Removed Code2
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2 mb-3">
              <Image
                src="/placeholder.svg?width=40&height=40" // Adjusted query for dark bg
                alt="Fishtail Infosolutions Logo"
                width={40}
                height={40}
                className="rounded-lg" // Assuming the placeholder can be styled or is an icon
              />
              <div>
                <span className="text-xl font-semibold text-white">Fishtail Infosolutions</span>
                <div className="text-xs text-gray-400">Hire Laravel Developer</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Delivering exceptional value with industry-leading web and mobile solutions.
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Office Locations</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>459 Columbus Ave #387, New York, NY 10024, USA</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>DLF IT Park, Phase-I, Sector 13, Chandigarh, 160101, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2.5 text-sm">
              <Link href="#" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#services" className="hover:text-white transition-colors">
                Hire Developers
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 text-sm flex-grow"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
            <div className="space-y-2.5 pt-2 text-sm">
              <h4 className="font-medium text-white">Support</h4>
              <a href="tel:+13152152005" className="flex items-center space-x-2.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+1 315 215 2005</span>
              </a>
              <a
                href="mailto:info@fishtailinfosolutions.com"
                className="flex items-center space-x-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@fishtailinfosolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 lg:mt-16 pt-8">
          <div className="text-center text-xs text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Fishtail Infosolutions. All Rights Reserved.{" "}
              <Link href="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-gray-300">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
