"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { SuccessModal } from "@/components/success-modal";
import { CustomPhoneInput } from "./phone-input";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Show success modal and reset form
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast.error(error.message || "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="min-w-0">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
            <div className="min-w-0">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="min-w-0">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <CustomPhoneInput
                value={formData.phone}
                onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                error={formData.phone && !/^\+?[1-9]\d{1,14}$/.test(formData.phone) ? "Please enter a valid phone number" : undefined}
                className="w-full"
                inputStyle={{ width: '100%' }}
              />
            </div>
            <div className="min-w-0">
              <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full h-12 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide details about your inquiry..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              required
            />
          </div>
          <div className="flex justify-end mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-10 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </form>
      </div>

      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  );
} 