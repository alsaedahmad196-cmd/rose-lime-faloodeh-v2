import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOrderClick: () => void;
  onStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onStoryClick }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-white to-sage-100 opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 via-primary-400 to-sage-500">
              Where every spoonful
            </span>
            <br />
            <span className="text-dark-700">we honor Persian tradition</span>
          </h1>

          <p className="text-lg sm:text-xl text-dark-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the authentic taste of Persian tradition with our handcrafted faloodeh,
            made with delicate starch noodles, fragrant rose water, and pure love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onOrderClick}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl inline-flex items-center transition-all duration-200"
            >
              Order Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={onStoryClick}
              className="border-2 border-secondary-300 text-secondary-700 hover:bg-secondary-100 px-8 py-3 text-lg rounded-full inline-flex items-center transition-all duration-200"
            >
              Our Story
            </button>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto bg-white">
            <div className="flex justify-center items-center h-[350px] sm:h-[500px] bg-white">
              <img
                src="/hero-image.png"
                alt="Delicious Persian Faloodeh"
                className="h-full w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
