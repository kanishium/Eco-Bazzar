import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLeaf,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Bottombar() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#F5F0EA]">

      {/* ═══════════════════════════════════
          ██  DISCOUNT BANNER
          ═══════════════════════════════════ */}
      <div className="mx-8 pt-8 md:mx-20 ">
        <div className="bg-[#6b7c5e] flex  flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-14">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-3xl md:text-4xl font-yatra leading-tight">
              10% Off First Order
            </h2>
            <p className="text-white/80 text-sm mt-2 max-w-sm">
              Join our eco community and receive exclusive deals, new arrivals,
              and sustainability tips.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 bg-white text-gray-700 text-sm w-full sm:w-72 outline-none placeholder-gray-400"
            />
            <button className="bg-cyan-900 hover:bg-cyan-800 text-white text-xs font-semibold tracking-wider px-6 py-3 transition-colors whitespace-nowrap">
              UNLOCK MY DISCOUNT
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          ██  MAIN FOOTER CONTENT
          ═══════════════════════════════════ */}
      <div className="bg-[#f5f0ea] px-8 md:px-20 pt-16 pb-10 mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaLeaf size={22} className="text-cyan-900" />
              <div>
                <span className="text-2xl font-colombo text-cyan-900">Eco</span>
                <span className="text-2xl font-yatra text-cyan-900">बाज़ार</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Ecoबाज़ार is a sustainable lifestyle brand creating stylish,
              eco-friendly fashion made from recycled, organic, and cruelty-free
              materials.
            </p>
            <div className="flex items-center gap-3">
              <FaCcPaypal size={32} className="text-gray-500" />
              <FaCcVisa size={32} className="text-gray-500" />
              <FaCcMastercard size={32} className="text-gray-500" />
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-yatra text-gray-800 mb-5">Shop</h3>
            <ul className="space-y-3">
              {[
                "Men's Fashion",
                "Women's Fashion",
                "Accessories",
                "Recycled Wear",
                "Best Sellers",
                "New Arrivals",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate("/Product")}
                    className="text-gray-500 text-sm hover:text-cyan-900 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-yatra text-gray-800 mb-5">About Us</h3>
            <ul className="space-y-3">
              {[
                { label: "Our Story", path: "/privacy" },
                { label: "Sustainability Promise", path: "/community" },
                { label: "Ethical Manufacturing", path: "/community" },
                { label: "Impact Report", path: "/community" },
                { label: "Press & Media", path: "/community" },
                { label: "Careers", path: "/community" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-500 text-sm hover:text-cyan-900 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support Column */}
          <div>
            <h3 className="text-lg font-yatra text-gray-800 mb-5">
              Help & Support
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Contact Us", path: "/contact" },
                { label: "Shipping & Delivery", path: "/privacy" },
                { label: "Returns & Exchanges", path: "/privacy" },
                { label: "Size Guide", path: "/privacy" },
                { label: "Care Instructions", path: "/privacy" },
                { label: "FAQs", path: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="text-gray-500 text-sm hover:text-cyan-900 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════
          ██  BOTTOM COPYRIGHT BAR
          ═══════════════════════════════════ */}
      <div className="bg-[#c4b49a] px-8 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            Copyright © 2026 Ecoबाज़ार. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-700 hover:text-cyan-900 transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-900 transition-colors">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-900 transition-colors">
              <FaXTwitter size={16} />
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-900 transition-colors">
              <FaYoutube size={16} />
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-xs">
            <span>English ▾</span>
            <span>INR ▾</span>
          </div>
        </div>
      </div>
      <div className="w-full h-8 bg-[#f5f0ea] flex items-center justify-center overflow-hidden">
        <svg className="w-full h-6" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path
            d="M0,12 L15,0 L30,12 L45,0 L60,12 L75,0 L90,12 L105,0 L120,12 L135,0 L150,12 L165,0 L180,12 L195,0 L210,12 L225,0 L240,12 L255,0 L270,12 L285,0 L300,12 L315,0 L330,12 L345,0 L360,12 L375,0 L390,12 L405,0 L420,12 L435,0 L450,12 L465,0 L480,12 L495,0 L510,12 L525,0 L540,12 L555,0 L570,12 L585,0 L600,12 L615,0 L630,12 L645,0 L660,12 L675,0 L690,12 L705,0 L720,12 L735,0 L750,12 L765,0 L780,12 L795,0 L810,12 L825,0 L840,12 L855,0 L870,12 L885,0 L900,12 L915,0 L930,12 L945,0 L960,12 L975,0 L990,12 L1005,0 L1020,12 L1035,0 L1050,12 L1065,0 L1080,12 L1095,0 L1110,12 L1125,0 L1140,12 L1155,0 L1170,12 L1185,0 L1200,12"
            fill="none"
            stroke="#6b9e8a"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M0,20 L15,8 L30,20 L45,8 L60,20 L75,8 L90,20 L105,8 L120,20 L135,8 L150,20 L165,8 L180,20 L195,8 L210,20 L225,8 L240,20 L255,8 L270,20 L285,8 L300,20 L315,8 L330,20 L345,8 L360,20 L375,8 L390,20 L405,8 L420,20 L435,8 L450,20 L465,8 L480,20 L495,8 L510,20 L525,8 L540,20 L555,8 L570,20 L585,8 L600,20 L615,8 L630,20 L645,8 L660,20 L675,8 L690,20 L705,8 L720,20 L735,8 L750,20 L765,8 L780,20 L795,8 L810,20 L825,8 L840,20 L855,8 L870,20 L885,8 L900,20 L915,8 L930,20 L945,8 L960,20 L975,8 L990,20 L1005,8 L1020,20 L1035,8 L1050,20 L1065,8 L1080,20 L1095,8 L1110,20 L1125,8 L1140,20 L1155,8 L1170,20 L1185,8 L1200,20"
            fill="none"
            stroke="#6b9e8a"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>
    </footer>
  );
}

export default Bottombar;
