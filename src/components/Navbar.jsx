import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.webp';

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    dropdown: [
      { label: "Live Class", href: "/services/live-class" },
      { label: "Athena LMS Website Creation", href: "/services/athena-lms" },
      { label: "Merchant Processing", href: "/services/merchant-processing" },
    ],
  },
  {
    label: "Courses",
    dropdown: [
      { label: "FRESHMAN: Sovereignty 101", href: "/courses/freshman" },
      { label: "SOPHOMORE: Become Private", href: "/courses/sophomore" },
      { label: "JUNIOR: Operate Private", href: "/courses/junior" },
      { label: "SENIOR: Private Business Credit", href: "/courses/senior" },
      { label: "I Want Remedy Now!", href: "/courses/remedy-now" },
      { label: "Private Merchant & Processing", href: "/courses/private-merchant" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const DevinNavbar = () => {
  const [activePage, setActivePage] = useState('/');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownInMobile, setDropdownInMobile] = useState(null);
  const [navIsDark, setNavIsDark] = useState(false);
  const navbarRef = useRef();

  // Detect background to toggle font color (as before)
  useEffect(() => {
    const section = navbarRef.current;
    if (!section || typeof window === 'undefined') return;
    const observer = new window.IntersectionObserver(
      ([e]) => setNavIsDark(!(e.isIntersecting && e.intersectionRatio > 0.5)),
      { threshold: [0.5] }
    );
    observer.observe(section);
    return () => { observer.disconnect(); };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const onClick = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
        setDropdownInMobile(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Handle dropdown on hover (desktop)
  const handleDropdownEnter = (idx) => setOpenDropdown(idx);
  const handleDropdownLeave = () => setOpenDropdown(null);

  // Color classes
  const textClass = navIsDark ? "text-white" : "text-gray-900";
  const hoverText = navIsDark ? "hover:text-gray-300" : "hover:text-blue-700";
  const dotColorClass = navIsDark ? "text-blue-400" : "text-blue-700";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      {/* Floating Navbar Container */}
      <div
        ref={navbarRef}
        className={`
          relative mt-6
          w-full max-w-5xl
          pointer-events-auto
        `}
      >
        {/* Logo: floating outside and to the left */}
        <div className="absolute -left-16 top-0 flex items-center h-full z-50">
          <a
            href="/"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/60 shadow-lg border-4 border-white/80 backdrop-blur-xl"
            style={{ boxShadow: '0 4px 32px 0 rgba(31,38,135,0.18)' }}
          >
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </a>
        </div>

        {/* Main Glassmorphic Navbar */}
        <nav
          className={`
            flex items-center justify-between
            bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl
            px-6 py-3
            transition-all duration-500
            z-40
          `}
          style={{
            minHeight: '68px',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.24)',
            background: 'rgba(255,255,255,0.14)',
          }}
        >
          {/* LEFT: nav links */}
          <div className="flex items-center space-x-1 md:space-x-5 pl-8">
            <div className="hidden md:flex items-center space-x-2">
              {NAV_ITEMS.map((item, idx) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`
                        flex items-center px-3 py-2 rounded-lg font-semibold
                        text-base ${textClass} ${hoverText}
                        transition-all duration-150 group
                        focus:outline-none
                        relative
                      `}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === idx}
                    >
                      {activePage.startsWith(item.label.toLowerCase()) && (
                        <span className={`mr-2 text-sm ${dotColorClass}`}>&#9679;</span>
                      )}
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === idx && (
                      <div
                        className={`
                          absolute left-0 mt-3 w-64 bg-white/80 backdrop-blur-xl border border-white/30 
                          rounded-xl shadow-lg z-40 animate-fadeIn overflow-hidden
                        `}
                      >
                        {item.dropdown.map((sub, i) => (
                          <a
                            href={sub.href}
                            key={sub.label}
                            className={`
                              flex items-center px-6 py-3 text-gray-800 group-hover:text-blue-800 transition-all
                              hover:bg-blue-50/70 hover:text-blue-800
                              font-medium text-base
                              ${activePage === sub.href ? 'font-bold bg-blue-100/60' : ''}
                            `}
                            onClick={() => setActivePage(sub.href)}
                          >
                            {activePage === sub.href && (
                              <span className={`mr-2 text-sm ${dotColorClass}`}>&#9679;</span>
                            )}
                            {sub.label}
                            <ChevronRight className="ml-auto h-4 w-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setActivePage(item.href)}
                    className={`
                      px-3 py-2 rounded-lg font-semibold flex items-center text-base
                      transition-all duration-150 ${textClass} ${hoverText} relative
                    `}
                  >
                    {activePage === item.href && (
                      <span className={`mr-2 text-sm ${dotColorClass}`}>&#9679;</span>
                    )}
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* RIGHT: Join Now Button */}
          <div className="hidden md:block ml-auto">
            <a
              href="/join"
              className="
                bg-gradient-to-r from-blue-600 to-blue-800 
                text-white px-7 py-2 rounded-full font-semibold shadow-lg
                hover:scale-105 transition-transform duration-300
                border border-white/30 backdrop-blur-sm
              "
            >
              Join Now
            </a>
          </div>

          {/* MOBILE: Join Now, hamburger */}
          <div className="flex md:hidden items-center ml-auto space-x-1">
            <a
              href="/join"
              className="
                bg-gradient-to-r from-blue-600 to-blue-800 text-white 
                px-4 py-1.5 rounded-full font-semibold 
                shadow hover:scale-105 transition-all
              "
            >
              Join Now
            </a>
            {/* Hamburger */}
            <button
              className="ml-1 rounded-full p-2 bg-white/30"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Open menu"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
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
      {/* <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="pt-32 px-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Glassmorphic Navigation</h1>
          <p className="text-xl opacity-80">Beautiful transparent navbar with backdrop blur effect</p>
        </div>
      </div> */}
    </div>
  );
};

export default DevinNavbar;
