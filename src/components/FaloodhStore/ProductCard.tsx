import React, { useState } from "react";
import { Product } from "../mock/productsData";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: number, size: string, price: number, name: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState<number>(0);

  const variant = product.variants ? product.variants[selectedVariant] : null;
  const displayName = variant ? `${product.name} - ${variant.name}` : product.name;
  const displayDescription = variant?.description || product.description;
  const displayIngredients = variant?.ingredients || product.ingredients;

  return (
    <div className="overflow-hidden border-2 border-transparent hover:border-secondary-300 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white">
      <div className="flex flex-col">
        <div className="relative w-full h-64">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {product.badge && (
            <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full text-primary-900 bg-gradient-to-r from-primary-300 to-primary-400">
              Specialty
            </span>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{product.name}</h3>

          {/* Variant selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-4 space-y-2">
              {product.variants.map((variant, idx) => (
                <label key={idx} className="flex items-center p-2 border border-secondary-200 rounded-lg hover:bg-secondary-100 cursor-pointer transition-colors min-w-0">
                  <input
                    type="radio"
                    name={`variant-${product.id}`}
                    value={idx}
                    checked={selectedVariant === idx}
                    onChange={() => setSelectedVariant(idx)}
                    className="w-4 h-4 text-secondary-600 accent-secondary-600"
                  />
                  <span className="ml-3 font-medium text-gray-900 break-words">{variant.name}</span>
                </label>
              ))}
            </div>
          )}

          <p className="text-dark-600 mb-2 text-sm">{displayDescription}</p>
          <p className="text-xs text-dark-500 italic mb-4">
            Ingredients: {displayIngredients}
          </p>

          <div className="space-y-2">
            {product.prices.map((option, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-secondary-100 p-3 rounded-lg"
              >
                <div>
                  <span className="font-semibold text-gray-900">{option.size}</span>
                  <span className="text-dark-700 ml-2">${option.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() =>
                    onAddToCart(product.id, option.size, option.price, displayName)
                  }
                  className="w-full sm:w-auto px-3 py-1.5 text-white rounded-md bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 transition-all duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
