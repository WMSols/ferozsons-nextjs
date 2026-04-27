"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/97 backdrop-blur-xl shadow-md shadow-blue-900/5 border-b border-blue-100"
          : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-black text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-[#0d2d6b]" : "text-white"}`}
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Ferozsons
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            "About Us",
            "How It Works",
            "Clinical Excellence",
            "Innovation",
            "Newsroom",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-blue-900/70 hover:text-[#1a56db]" : "text-white/85 hover:text-white"}`}
            >
              {item}
            </a>
          ))}
        </div>
        <motion.a
          href="#"
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
            scrolled
              ? "bg-[#1a56db] text-white hover:bg-[#0d2d6b]"
              : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white hover:text-[#0d2d6b]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Investors
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Nav;
