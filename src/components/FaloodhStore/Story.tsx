import React from "react";
import { Heart, Sparkles } from "lucide-react";
import { Gallery } from "./Gallery";

export const Story: React.FC = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-sage-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 via-primary-400 to-sage-500">
              Story
            </span>
          </h1>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 via-primary-400 to-sage-400 rounded-full"></div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">


            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-xl italic">
                "Where tradition meets tenderness, and every spoonful carries a story of love"
              </p>
            </div>
          </div>
        </div>

        {/* Story Card */}
        <div className="p-8 sm:p-12 border-2 border-secondary-100 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Welcome to Rose &amp; Lime Faloodeh
          </h2>

          <div className="space-y-6 text-dark-700 leading-relaxed text-lg">
            <p>
              Where tradition meets tenderness, and every spoonful carries a story of love. At{" "}
              <strong className="text-secondary-600">Rose &amp; Lime Faloodeh</strong>, we bring you the authentic taste of
              Persian Faloodeh; a delicately sweet, icy dessert born centuries ago in the ancient city of
              Shiraz.
            </p>

            <div className="bg-gradient-to-r from-secondary-50 to-sage-50 border-l-4 border-secondary-400 p-6 rounded-r-lg my-8">
              <p className="mb-0 italic text-dark-800">
                <Sparkles className="inline w-5 h-5 text-secondary-500 mr-2" />
                Made with fine starch noodles, cooling rosewater, and a hint of tangy lime, Faloodeh is
                more than a treat; it's a symbol of Persian hospitality and joy.
              </p>
            </div>

            <p>
              Our family journey began with a simple desire: to preserve the cherished flavors that connected
              our past, nurtured our present, and will inspire our future. Every batch we craft is infused
              with care, following the same time-honored recipes that filled our grandparents' homes with
              warmth and celebration.
            </p>

            <p>
              At <strong className="text-secondary-600">Rose &amp; Lime Faloodeh</strong>, each taste invites you into a
              moment; a memory of rose gardens in full bloom, laughter shared around the table, and the
              timeless comfort of home.
            </p>

            <div className="bg-gradient-to-br from-secondary-100 via-primary-50 to-sage-100 p-8 rounded-2xl text-center my-8 border-2 border-secondary-200">
              <p className="text-2xl font-bold text-gray-900 mb-2">Made with love. Shared with heart.</p>
              <p className="text-lg text-dark-700 italic">
                This is Persian Faloodeh, the way it was meant to be.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <Gallery />
      </div>
    </section>
  );
};
