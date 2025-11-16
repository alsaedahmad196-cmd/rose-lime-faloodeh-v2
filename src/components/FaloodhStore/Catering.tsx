import React from "react";
import { Phone, Mail, CreditCard } from "lucide-react";

export const Catering: React.FC = () => {
  const cateringContact = {
    phone: "613-265-7888",
    email: "roseandlimefaloodeh@gmail.com",
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Catering Image */}
        <img
          src="/catering-section.png"
          alt="Catering services for events"
          className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg mb-12"
        />

        {/* Catering Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-600 to-sage-600 bg-clip-text text-transparent">
            Catering
          </h2>

          <p className="text-lg text-dark-700 mb-8 leading-relaxed">
            Bring the authentic taste of Persian faloodeh to your special events and gatherings.
            For catering inquiries and custom orders, please reach out to us directly.
          </p>

          {/* Contact Information */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Phone */}
            <div className="flex items-start space-x-4 bg-secondary-100 p-6 rounded-lg border border-secondary-300">
              <Phone className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <a
                  href={`tel:${cateringContact.phone}`}
                  className="text-secondary-600 hover:text-secondary-700 font-medium text-lg"
                >
                  {cateringContact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 bg-sage-100 p-6 rounded-lg border border-sage-300">
              <Mail className="w-6 h-6 text-sage-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <a
                  href={`mailto:${cateringContact.email}`}
                  className="text-sage-600 hover:text-sage-700 font-medium text-lg break-all"
                >
                  {cateringContact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Notice */}
          <div className="bg-primary-100 border-l-4 border-primary-400 p-6 rounded-r-lg mb-8">
            <p className="text-primary-900 font-semibold mb-2">Time Notice</p>
            <p className="text-primary-900">
              A minimum of <strong>48 hours notice</strong> is required for catering orders, depending on the size and complexity of your order. Larger events may require additional lead time for preparation and logistics.
            </p>
          </div>

          {/* Payment Information */}
          <div className="bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-lg">
            <div className="flex items-center mb-3">
              <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
              <p className="text-primary-900 font-semibold">Payment Methods</p>
            </div>
            <p className="text-primary-900">
              We accept <strong>cash</strong> or <strong>email transfers</strong> only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
