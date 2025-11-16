import React from "react";
import { Phone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-dark-700 via-dark-600 to-sage-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Rose & Lime Faloodeh</h3>
            <p className="text-secondary-200 italic">Where every spoonful we honor Persian tradition.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sage-300">Contact</h4>
            <p className="text-secondary-200 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+16132657888" className="hover:text-white transition-colors">
                (613) 265-7888
              </a>
            </p>
            <p className="text-secondary-200 flex items-center gap-2 mt-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:roseandlimefaloodeh@gmail.com" className="hover:text-white transition-colors">
                roseandlimefaloodeh@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sage-300">Hours</h4>
            <p className="text-secondary-200">Available for pickup and delivery</p>
            <p className="text-secondary-200 text-sm mt-2">Please order in advance</p>
            <p className="text-secondary-200 text-sm mt-2">
              Orders are ready within 24 hours of being placed. Pickup only for orders under $35.
              Delivery in West end Ottawa is $5 for orders over $35, and free for orders above $75.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sage-300">Location</h4>
            <p className="text-secondary-200">Based in Ottawa</p>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center text-secondary-300 text-sm">
          <p>&copy; {currentYear} Rose &amp; Lime Faloodeh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
