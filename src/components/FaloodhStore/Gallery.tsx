import React from "react";
import { galleryImages } from "../mock/galleryData";

export const Gallery: React.FC = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Gallery</h3>
      {/* Responsive gallery grid:
          - Mobile (xs): 2-3 columns, larger images
          - Tablet (sm/md): 3-4 columns
          - Desktop (lg): 5 columns full size
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4 lg:gap-5">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-square"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
