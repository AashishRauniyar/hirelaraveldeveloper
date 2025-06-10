import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Disclaimer | HLD - Hire Laravel Developers",
  description: "Disclaimer for HireLaravelDeveloper.dev. Read our legal disclaimers and limitations of liability.",
  openGraph: {
    title: "Disclaimer | HLD - Hire Laravel Developers",
    description: "Disclaimer for HireLaravelDeveloper.dev. Read our legal disclaimers and limitations of liability.",
  },
}

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
            <p className="text-base sm:text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. No Warranties</h2>
              <p className="text-gray-600 mb-4">
                The information provided on HireLaravelDeveloper.dev is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on our website.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Professional Advice</h2>
              <p className="text-gray-600 mb-4">
                The information on our website is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals regarding any specific matter.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. External Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Testimonials and Reviews</h2>
              <p className="text-gray-600 mb-4">
                Testimonials and reviews on our website reflect the experiences of individual clients and may not be representative of all clients' experiences. Results may vary.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Service Availability</h2>
              <p className="text-gray-600 mb-4">
                While we strive to ensure the availability of our services, we cannot guarantee uninterrupted access to our website or services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-600">
                  Email: legal@hirelaraveldeveloper.dev<br />
                  Phone: +1-774-418-0436<br />
                  Address: 604 Carson Dr, CAK-953, Bear, DE 19701-1450, US
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 