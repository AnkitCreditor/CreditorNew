import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const DevinNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="relative">
      {/* Logo - Positioned outside navbar */}
      <div className="fixed top-6 left-6 z-50">
        <div className="text-white font-bold text-2xl bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          Devin
        </div>
      </div>

      {/* Glassmorphic Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
          <div className="px-6 py-4">
            <div className="flex justify-center items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">
                  Home
                </a>
                
                {/* Product Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('product')}
                    className="flex items-center text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105"
                  >
                    Product
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'product' && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        Features
                      </a>
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        Integrations
                      </a>
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        API
                      </a>
                    </div>
                  )}
                </div>

                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('solutions')}
                    className="flex items-center text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105"
                  >
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {activeDropdown === 'solutions' && (
                    <div className="absolute top-full left-0 mt-3 w-52 bg-white/15 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        Enterprise
                      </a>
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        Startups
                      </a>
                      <a href="#" className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200">
                        Developers
                      </a>
                    </div>
                  )}
                </div>

                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">
                  Pricing
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">
                  Docs
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">
                  Blog
                </a>

                {/* Desktop CTA Buttons */}
                <div className="flex items-center space-x-4 ml-6">
                  <button className="text-white/90 hover:text-white transition-all duration-300 font-medium hover:scale-105">
                    Sign In
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 border border-white/30">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center justify-between w-full">
                <div className="text-white font-medium">Menu</div>
                <button
                  onClick={toggleMobileMenu}
                  className="text-white/90 hover:text-white transition-all duration-300"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/20">
              <div className="px-6 py-6 space-y-4">
                <a href="#" className="block text-white/90 hover:text-white transition-all duration-300 font-medium py-2">
                  Home
                </a>
                
                {/* Mobile Product Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-product')}
                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-all duration-300 font-medium py-2"
                  >
                    Product
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'mobile-product' && (
                    <div className="mt-2 pl-4 space-y-3">
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        Features
                      </a>
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        Integrations
                      </a>
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        API
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Solutions Dropdown */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-solutions')}
                    className="flex items-center justify-between w-full text-white/90 hover:text-white transition-all duration-300 font-medium py-2"
                  >
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'mobile-solutions' && (
                    <div className="mt-2 pl-4 space-y-3">
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        Enterprise
                      </a>
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        Startups
                      </a>
                      <a href="#" className="block text-white/70 hover:text-white transition-all duration-200">
                        Developers
                      </a>
                    </div>
                  )}
                </div>

                <a href="#" className="block text-white/90 hover:text-white transition-all duration-300 font-medium py-2">
                  Pricing
                </a>
                <a href="#" className="block text-white/90 hover:text-white transition-all duration-300 font-medium py-2">
                  Docs
                </a>
                <a href="#" className="block text-white/90 hover:text-white transition-all duration-300 font-medium py-2">
                  Blog
                </a>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 space-y-3">
                  <button className="block w-full text-left text-white/90 hover:text-white transition-all duration-300 font-medium py-2">
                    Sign In
                  </button>
                  <button className="block w-full bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/30 text-center">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo background to show glassmorphism effect */}
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="pt-32 px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Glassmorphic Navigation</h1>
          <p className="text-xl opacity-80">Beautiful transparent navbar with backdrop blur effect</p>
        </div>
      </div>
    </div>
  );
};

export default DevinNavbar;