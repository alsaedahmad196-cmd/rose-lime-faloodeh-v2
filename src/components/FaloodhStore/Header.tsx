import React from "react";
import { Home, BookOpen, ShoppingBag } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick }) => {
  const isActive = (section: string) => activeSection === section;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-secondary-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
          <a href="#" className="flex items-center gap-3">
            <img 
              src="/logo.png"
              alt="Rose & Lime Faloodeh Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </a>

          <div className="flex gap-2">
            <button
              onClick={() => onNavClick("home")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive("home")
                  ? "text-white shadow-md bg-gradient-to-r from-secondary-600 to-secondary-500"
                  : "text-gray-700 hover:bg-secondary-100"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Home</span>
            </button>

            <button
              onClick={() => onNavClick("story")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive("story")
                  ? "text-white shadow-md bg-gradient-to-r from-secondary-600 to-secondary-500"
                  : "text-gray-700 hover:bg-secondary-100"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Our Story</span>
            </button>

            <button
              onClick={() => onNavClick("order")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive("order")
                  ? "text-white shadow-md bg-gradient-to-r from-secondary-600 to-secondary-500"
                  : "text-gray-700 hover:bg-secondary-100"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Order</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
