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

  const handleDropdownEnter = (idx) => setOpenDropdown(idx);
  const handleDropdownLeave = () => setOpenDropdown(null);

  const textClass = navIsDark ? "text-white" : "text-gray-900";
  const hoverText = navIsDark ? "hover:text-gray-300" : "hover:text-blue-700";
  const dotColorClass = navIsDark ? "text-blue-400" : "text-blue-700";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <div ref={navbarRef} className="relative mt-6 w-full max-w-6xl pointer-events-auto">

        {/* Floating Logo */}
        <div className="absolute -left-16 top-0 flex items-center h-full z-50">
          <a
            href="/"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/60 shadow-lg border-4 border-white/80 backdrop-blur-xl"
            style={{ boxShadow: '0 4px 32px 0 rgba(31,38,135,0.18)' }}
          >
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          </a>
        </div>

        {/* Main Glass Navbar */}
        <nav
          className="flex items-center justify-between bg-white/10 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl px-6 py-3 z-40 transition-all duration-500"
          style={{
            minHeight: '68px',
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.24)',
            background: 'rgba(255,255,255,0.14)',
          }}
        >
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-5 pl-8">
            {NAV_ITEMS.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(idx)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`flex items-center px-3 py-2 rounded-lg font-semibold text-base ${textClass} ${hoverText} transition-all duration-150 group relative`}
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
                    <div className="absolute left-0 mt-3 w-64 bg-white/80 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg z-40 animate-fadeIn overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <a
                          href={sub.href}
                          key={sub.label}
                          className={`flex items-center px-6 py-3 text-gray-800 hover:bg-blue-50/70 hover:text-blue-800 font-medium text-base ${activePage === sub.href ? 'font-bold bg-blue-100/60' : ''}`}
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
                  className={`px-3 py-2 rounded-lg font-semibold text-base ${textClass} ${hoverText} flex items-center`}
                >
                  {activePage === item.href && (
                    <span className={`mr-2 text-sm ${dotColorClass}`}>&#9679;</span>
                  )}
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Join Now */}
          <div className="hidden md:block ml-auto">
            <a
              href="/join"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-7 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300 border border-white/30 backdrop-blur-sm"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Join Now + Hamburger */}
          <div className="flex md:hidden items-center ml-auto space-x-1">
            <a
              href="/join"
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1.5 rounded-full font-semibold shadow hover:scale-105 transition-all"
            >
              Join Now
            </a>
            <button
              className="ml-1 rounded-full p-2 bg-white/30"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Open menu"
            >
              {mobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenu && (
          <div className="fixed inset-0 bg-black/80 z-40 p-6 pt-24 transition-all duration-500 backdrop-blur-2xl">
            <div className="space-y-6">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full text-white font-semibold text-lg"
                        onClick={() =>
                          setDropdownInMobile(dropdownInMobile === idx ? null : idx)
                        }
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {dropdownInMobile === idx && (
                        <div className="mt-2 ml-4 space-y-3">
                          {item.dropdown.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              className="block text-white/70 hover:text-white font-medium transition-all"
                              onClick={() => {
                                setActivePage(sub.href);
                                setMobileMenu(false);
                              }}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-white text-lg font-semibold hover:text-blue-300"
                      onClick={() => setMobileMenu(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DevinNavbar;
