import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | HLD",
  description: "Get in touch with our team for your Laravel development needs",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "123 Business Avenue",
        "Suite 456",
        "New York, NY 10001",
        "United States"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main: +1 (555) 123-4567",
        "Support: +1 (555) 987-6543"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@fishtailinfosolutions.com",
        "support@fishtailinfosolutions.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Saturday - Sunday: Closed"
      ]
    }
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a question or want to discuss your project? We're here to help.
                Fill out the form below or use our contact information to reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <detail.icon className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {detail.title}
                      </h3>
                      <ul className="space-y-2">
                        {detail.details.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Map Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Our Location
                  </h3>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750981!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 