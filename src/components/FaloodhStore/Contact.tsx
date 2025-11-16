import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { submitViaWeb3Forms, WEB3FORMS_ACCESS_KEY } from "../../utils/formSubmit";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = "roseandlimefaloodeh@gmail.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "New Contact Form Submission",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await submitViaWeb3Forms(payload);

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-sage-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Have questions or want to reach out? Send us an email and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-900">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full border border-secondary-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-300"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-900">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full border border-secondary-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-300"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-900">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us what is on your mind..."
                className="w-full border border-secondary-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:border-secondary-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-secondary-500 to-sage-600 hover:from-secondary-600 hover:to-sage-700 text-white py-3 rounded-lg font-semibold shadow-lg inline-flex items-center justify-center transition-all duration-200"
              >
                <Send className="w-5 h-5 mr-2" /> Send Message
              </button>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-sage-50 border-l-4 border-sage-400 p-4 rounded-r-lg">
                <p className="text-sage-900 font-semibold">Message sent successfully!</p>
                <p className="text-sage-800 text-sm">We will get back to you soon.</p>
              </div>
            )}
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-12 pt-8 border-t border-dark-200">
            <p className="text-center text-dark-600 mb-4">Prefer to email directly?</p>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 text-secondary-600" />
              <a
                href={`mailto:${contactEmail}`}
                className="text-secondary-600 hover:text-secondary-700 font-semibold text-lg"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
