import React from "react";
import { Heart, Sparkles, Leaf } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-gray-900">
            A Taste of Persian{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 via-primary-400 to-sage-500">
              Heritage
            </span>
          </h2>
          <p className="text-lg text-dark-600 leading-relaxed">
            Faloodeh is more than just a frozen dessert—it's a centuries-old Persian tradition
            that brings families together and creates memories. Our handcrafted faloodeh combines
            delicate starch noodles with aromatic rose water and fresh lime juice, creating an
            experience that transports you to the bustling bazaars and warm kitchens of Iran.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-secondary-200 hover:border-secondary-400 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Authentic Persian Recipe</h3>
            <p className="text-dark-600">Traditional faloodeh made with love and heritage</p>
          </div>

          <div className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-secondary-200 hover:border-secondary-400 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Premium Ingredients</h3>
            <p className="text-dark-600">Fresh rose water, real saffron, and quality starch noodles</p>
          </div>

          <div className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-secondary-200 hover:border-secondary-400 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Handcrafted Fresh</h3>
            <p className="text-dark-600">Made to order with care and attention to detail</p>
          </div>
        </div>
      </div>
    </section>
  );
};
