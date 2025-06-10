import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | HLD - Hire Laravel Developers",
  description: "Privacy Policy for HireLaravelDeveloper.dev. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | HLD - Hire Laravel Developers",
    description: "Privacy Policy for HireLaravelDeveloper.dev. Learn how we collect, use, and protect your personal information.",
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-base sm:text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Project requirements</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <p className="text-gray-600">
                  Email: privacy@hirelaraveldeveloper.dev<br />
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