import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | HLD - Hire Laravel Developers",
  description: "Terms and Conditions for HireLaravelDeveloper.dev. Read our terms of service and conditions for using our platform.",
  openGraph: {
    title: "Terms and Conditions | HLD - Hire Laravel Developers",
    description: "Terms and Conditions for HireLaravelDeveloper.dev. Read our terms of service and conditions for using our platform.",
  },
}

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-base sm:text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using HireLaravelDeveloper.dev, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                We provide Laravel development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Custom Laravel development</li>
                <li>Laravel API development</li>
                <li>Laravel maintenance and support</li>
                <li>Laravel consulting services</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms and conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>All prices are in USD unless otherwise specified</li>
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All intellectual property rights related to our services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Software code</li>
                <li>Designs</li>
                <li>Documentation</li>
                <li>Branding materials</li>
              </ul>
              <p className="text-gray-600 mb-4">
                remain the property of HireLaravelDeveloper.dev unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Confidentiality</h2>
              <p className="text-gray-600 mb-4">
                Both parties agree to maintain the confidentiality of all proprietary information shared during the course of the engagement.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                HireLaravelDeveloper.dev shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these Terms and Conditions, please contact us at:
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