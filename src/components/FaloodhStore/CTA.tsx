import React from "react";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOrderClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOrderClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-600 via-secondary-500 to-sage-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
          Discover The Chill Of Persian Tradition!
        </h2>
        <p className="text-xl text-secondary-100 mb-8">
          Order now for pickup or delivery and taste the tradition
        </p>
        <button
          onClick={onOrderClick}
          className="bg-white text-secondary-600 hover:bg-secondary-50 px-10 py-3 text-lg rounded-full shadow-xl hover:shadow-2xl inline-flex items-center font-bold transition-all duration-200"
        >
          Place Your Order
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
