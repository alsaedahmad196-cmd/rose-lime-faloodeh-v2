import React from "react";
import { PRODUCTS } from "../mock/productsData";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";

interface ProductListProps {
  onAddToCart: (productId: number, size: string, price: number, name: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onAddToCart }) => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-secondary-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          src="https://public.youware.com/image/4e94c180-bbe5-4f93-b387-1fc1252cd56d/ej68qz7ncd.png"
          alt="Place your order"
          className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-lg mb-12"
        />
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 via-primary-400 to-sage-500">
              Signature Flavors
            </span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Each flavor is carefully crafted to bring you an authentic taste of Persian culture
          </p>
        </div>

        <div className="flex flex-col gap-6 mb-12">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center">
          <div className="mt-8 bg-gradient-to-r from-primary-400 to-secondary-400 shadow-xl rounded-2xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">More Flavors Coming Soon</h3>
              <p className="text-base text-white/90 font-medium">Stay tuned for new creations!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
