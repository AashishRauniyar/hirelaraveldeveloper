import { MapPin, Phone, Mail, ArrowRight } from "lucide-react" // Removed Code2
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          <div className="space-y-4 sm:space-y-5">
            <Link href="/" className="flex items-center space-x-2 mb-2 sm:mb-3">
              <Image
                src="/placeholder.svg?width=40&height=40"
                alt="Fishtail Infosolutions Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
              />
              <div>
                <span className="text-lg sm:text-xl font-semibold text-white">Fishtail Infosolutions</span>
                <div className="text-[10px] sm:text-xs text-gray-400">Hire Laravel Developer</div>
              </div>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed">
              Delivering exceptional value with industry-leading web and mobile solutions.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-base sm:text-lg font-semibold text-white">Office Locations</h3>
            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-2 sm:space-x-2.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>459 Columbus Ave #387, New York, NY 10024, USA</span>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-2.5">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>DLF IT Park, Phase-I, Sector 13, Chandigarh, 160101, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-base sm:text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
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

          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-base sm:text-lg font-semibold text-white">Stay Connected</h3>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 text-xs sm:text-sm flex-grow"
                aria-label="Email for newsletter"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </form>
            <div className="space-y-2 sm:space-y-2.5 pt-2 text-xs sm:text-sm">
              <h4 className="font-medium text-white">Support</h4>
              <a href="tel:+13152152005" className="flex items-center space-x-2 sm:space-x-2.5 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <span>+1 315 215 2005</span>
              </a>
              <a
                href="mailto:info@fishtailinfosolutions.com"
                className="flex items-center space-x-2 sm:space-x-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <span>info@fishtailinfosolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
          <div className="text-center text-[10px] sm:text-xs text-gray-500">
            <p className="flex flex-wrap justify-center gap-x-2 gap-y-1">
              <span>&copy; {new Date().getFullYear()} Fishtail Infosolutions. All Rights Reserved.</span>
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="/disclaimer" className="hover:text-gray-300">
                Disclaimer
              </Link>
              <span>|</span>
              <Link href="/sitemap.xml" className="hover:text-gray-300">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
