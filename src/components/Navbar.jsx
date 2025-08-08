import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.webp';

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    dropdown: [
      { label: "BECOME PRIVATE + NEW SOV 101", href: "/courses/become-private" },
      { label: "JUNIOR: OPERATE PRIVATE", href: "/courses/operate-private" },
      { label: "SENIOR: PRIVATE BUSINESS CREDIT", href: "/courses/business-credit" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "Live Class", href: "/services/live-class" },
      { label: "Athena LMS", href: "/services/athena-lms" },
      { label: "Website Creation", href: "/services/website-creation" },
      { label: "Merchant Processing", href: "/services/merchant-processing" },
    ],
  },
  {
    label: "Membership",
    href: "/membership",
  },
];

const RIGHT_NAV_ITEMS = [
  {
    label: "Contact",
    href: "/contact",
  }
];

const Navbar = () => {
  const [activePage, setActivePage] = useState('/');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdownInMobile, setDropdownInMobile] = useState(null);
  const [textColor, setTextColor] = useState('#000000');
  const navbarRef = useRef();
  const dropdownTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isDarkBackground = window.scrollY > window.innerHeight / 2;
      setTextColor(isDarkBackground ? '#ffffff' : '#000000');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setDropdownInMobile(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleDropdownEnter = (idx) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(idx);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      {/* Logo absolutely positioned on the left */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 pointer-events-auto">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
        </a>
      </div>

      <div
        ref={navbarRef}
        className="relative mt-3 w-full flex justify-center pointer-events-auto"
      >
        <nav
          className={`flex items-center justify-between
            bg-white/10 backdrop-blur-2xl border border-white/30
            rounded-2xl shadow-xl px-7 py-1
            w-[900px] max-w-[92vw] mx-auto
            transition-all duration-500 z-40`}
          style={{
            minHeight: 40,
            maxHeight: 48,
            boxShadow: '0 4px 18px 0 rgba(31,38,135,0.20)',
            background: 'rgba(255,255,255,0.13)',
          }}
        >
          {/* Left: Main nav items (logo is absolutely positioned) */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              {NAV_ITEMS.map((item, idx) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(idx)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className="flex items-center px-3 py-1 rounded-md font-medium text-sm focus:outline-none relative transition"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === idx}
                      style={{ color: textColor }}
                    >
                      {activePage.startsWith(item.label.toLowerCase()) && (
                        <span className="mr-2 text-xs" style={{ color: textColor }}>&#9679;</span>
                      )}
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3" style={{ stroke: textColor }} />
                    </button>
                    {openDropdown === idx && (
                      <div
                        className="absolute left-0 mt-2 w-56 rounded-xl shadow-lg z-40 animate-fadeIn overflow-hidden"
                        style={{
                          backgroundColor: 'rgba(10,19,36,0.97)',
                          backdropFilter: 'blur(14px)',
                          border: '1px solid rgba(255,255,255,0.2)'
                        }}
                      >
                        {item.dropdown.map(sub => (
                          <a
                            href={sub.href}
                            key={sub.label}
                            className={`flex items-center px-4 py-2 font-medium text-sm transition-colors duration-150
                              hover:bg-[rgba(255,255,255,0.16)] hover:text-white
                              ${activePage === sub.href ? 'bg-[rgba(255,255,255,0.22)] font-bold' : ''}
                            `}
                            style={{ color: '#ffffff' }}
                            onClick={() => setActivePage(sub.href)}
                          >
                            {activePage === sub.href && (
                              <span className="mr-2 text-xs">&#9679;</span>
                            )}
                            {sub.label}
                            <ChevronRight className="ml-auto h-3 w-3" stroke="#ffffff" />
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
                    className="px-3 py-1 rounded-md font-medium flex items-center text-sm transition relative"
                    style={{ color: textColor }}
                  >
                    {activePage === item.href && (
                      <span className="mr-2 text-xs" style={{ color: textColor }}>&#9679;</span>
                    )}
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right: Contact and Login */}
          <div className="hidden md:flex items-center space-x-4">
            {RIGHT_NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActivePage(item.href)}
                className="px-3 py-1 rounded-md font-medium flex items-center text-sm transition relative"
                style={{ color: textColor }}
              >
                {activePage === item.href && (
                  <span className="mr-2 text-xs" style={{ color: textColor }}>&#9679;</span>
                )}
                {item.label}
              </a>
            ))}

            <a
              href="/login"
              className="px-4 py-1 rounded-full font-semibold shadow-lg transition-transform duration-300"
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.875rem'
              }}
            >
              Login
            </a>
          </div>

          {/* Mobile menu toggle & Login (right side) */}
          <div className="flex md:hidden items-center ml-auto space-x-1">
            <a
              href="/login"
              className="px-3 py-1 rounded-full font-semibold shadow transition-all"
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.875rem'
              }}
            >
              Login
            </a>
            <button
              className="ml-1 rounded-full p-1.5 bg-white/30"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Open menu"
              style={{ color: textColor }}
            >
              {mobileMenu ? (
                <X size={24} style={{ stroke: textColor }} />
              ) : (
                <Menu size={24} style={{ stroke: textColor }} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenu && (
          <div
            className="fixed inset-0 z-30 animate-bgSpread"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              backdropFilter: 'blur(22px)',
              marginTop: '64px'
            }}
          >
            <div className="flex flex-col px-5 pt-6 space-y-4">
              {[...NAV_ITEMS, ...RIGHT_NAV_ITEMS].map((item, idx) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      className="w-full flex items-center justify-between font-medium text-base py-1.5"
                      style={{ color: "#ffffff" }}
                      onClick={() =>
                        setDropdownInMobile(dropdownInMobile === idx ? null : idx)
                      }
                    >
                      <div className="flex items-center">
                        {activePage.startsWith(item.label.toLowerCase()) && (
                          <span className="mr-2 text-xs">&#9679;</span>
                        )}
                        {item.label}
                      </div>
                      <ChevronDown className="h-4 w-4" stroke="#ffffff" />
                    </button>
                    {dropdownInMobile === idx && (
                      <div className="pl-5 mt-1 space-y-1">
                        {item.dropdown.map(sub => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className={`block font-medium py-1.5 text-sm flex items-center rounded transition
                              hover:bg-[#ffffff]/20
                              ${activePage === sub.href ? 'bg-[#ffffff]/30 font-semibold' : ''}
                            `}
                            style={{ color: "#ffffff" }}
                            onClick={() => {
                              setActivePage(sub.href);
                              setMobileMenu(false);
                              setDropdownInMobile(null);
                            }}
                          >
                            {activePage === sub.href && (
                              <span className="mr-2 text-xs">&#9679;</span>
                            )}
                            {sub.label}
                            <ChevronRight className="ml-auto h-3 w-3" stroke="#ffffff" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-medium text-base py-1.5 flex items-center"
                    style={{ color: "#ffffff" }}
                    onClick={() => {
                      setActivePage(item.href);
                      setMobileMenu(false);
                      setDropdownInMobile(null);
                    }}
                  >
                    {activePage === item.href && (
                      <span className="mr-2 text-xs">&#9679;</span>
                    )}
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn 0.22s; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .animate-bgSpread {
          animation: bgSpread 0.7s cubic-bezier(0.32,0,0.67,0);
        }
        @keyframes bgSpread {
          0% { clip-path: circle(0% at 88% 7%); }
          100% { clip-path: circle(140% at 50% 50%); }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
