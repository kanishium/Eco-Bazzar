import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaLeaf,
} from "react-icons/fa";

function SideNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { label: "Shop", path: "/Product" },
    { label: "Community", path: "/community" },
    { label: "About Us", path: "/privacy" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.toLowerCase().startsWith(path.toLowerCase());
  };

  return (
    <>
      {/* ═══════════════════════════════════
          ██  ANNOUNCEMENT BAR
          ═══════════════════════════════════ */}
      <div className="w-full bg-[#3A2F2E] text-gray-200 text-xs text-center py-2 tracking-wide">
        Free Shipping Over ₹999 • Easy Returns • Secure Checkout
      </div>

      {/* ═══════════════════════════════════
          ██  DESKTOP NAVBAR (md+)
          ═══════════════════════════════════ */}
      <nav className="hidden md:flex w-full bg-white border-b border-gray-200 px-10 py-5 items-center justify-between sticky top-0 z-50">
        {/* Left - Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-sm transition-colors duration-200 ${isActive(item.path)
                ? "text-cyan-900 font-semibold"
                : "text-gray-600 hover:text-cyan-900"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Center - Brand */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <FaLeaf size={20} className="text-[#1A7252]" />
          <span className="text-2xl font-colombo text-[#1A7252]">Eco</span>
          <span className="text-2xl font-yatra text-[#1A7252]">बाज़ार</span>
        </button>

        {/* Right - Icons */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => navigate("/search")}
            className={`flex items-center gap-2 text-sm transition-colors duration-200 ${isActive("/search")
              ? "text-cyan-900 font-semibold"
              : "text-gray-500 hover:text-cyan-900"
              }`}
          >
            <FaSearch size={15} />
            <span>Search</span>
          </button>
          <button
            onClick={() => navigate("/Product")}
            className="text-gray-500 hover:text-cyan-900 transition-colors relative"
          >
            <FaShoppingBag size={17} />
          </button>
          <button
            onClick={() => navigate("/login")}
            className={`transition-colors duration-200 ${isActive("/login")
              ? "text-cyan-900"
              : "text-gray-500 hover:text-cyan-900"
              }`}
          >
            <FaUser size={17} />
          </button>
        </div>
      </nav>

      {/* ═══════════════════════════════════
          ██  MOBILE NAVBAR (below md)
          ═══════════════════════════════════ */}
      <div className="md:hidden flex w-full bg-white border-b border-gray-200 px-4 py-3 items-center justify-between sticky top-0 z-50">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Open menu"
        >
          <FaBars size={18} className="text-gray-600" />
        </button>

        {/* Brand */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <FaLeaf size={16} className="text-cyan-900" />
          <span className="text-xl font-colombo text-cyan-900">Eco</span>
          <span className="text-xl font-yatra text-cyan-900">बाज़ार</span>
        </button>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/search")}
            className="text-gray-500 hover:text-cyan-900 transition-colors"
          >
            <FaSearch size={16} />
          </button>
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 hover:text-cyan-900 transition-colors"
          >
            <FaUser size={16} />
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════
          ██  MOBILE SLIDE-OUT PANEL
          ═══════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FaLeaf size={16} className="text-cyan-900" />
            <span className="text-2xl font-colombo text-cyan-900">Eco</span>
            <span className="text-2xl font-yatra text-cyan-900">बाज़ार</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <FaTimes size={14} className="text-gray-400" />
          </button>
        </div>

        {/* Section Label */}
        <div className="px-5 pt-4 pb-2">
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase">
            Main Menu
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-3 flex-1">
          {navLinks.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3 text-left transition-all duration-200 mb-0.5 ${isActive(item.path)
                ? "bg-cyan-900 text-white font-semibold"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
            >
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Account - pinned to bottom */}
        <div className="mt-auto border-t border-gray-200 px-3 py-3">
          <button
            onClick={() => navigate("/login")}
            className={`flex items-center gap-4 px-4 py-3 w-full text-left transition-all duration-200 ${isActive("/login")
              ? "bg-cyan-900 text-white font-semibold"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
          >
            <FaUser size={16} />
            <span className="text-sm">Account</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideNavbar;
