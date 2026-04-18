"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, memo } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Clones", href: "#clones" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

/**
 * Premium Navigation Bar (Apple/Stripe Inspired)
 * Features:
 * - Floating glass dock design
 * - Smooth scroll-aware refinement
 * - Refined typography
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 pointer-events-none ${
        scrolled ? "py-4 md:py-6" : "py-8 md:py-10"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        
        {/* Brand */}
        <Link 
          href="/" 
          className="text-xl font-black tracking-tighter text-text pointer-events-auto flex items-center group select-none"
        >
          <span className="opacity-40 group-hover:opacity-100 transition-opacity">ARPAN</span>
          <span className="text-accent">.</span>
        </Link>

        {/* Floating Dock (Desktop) */}
        <div className="hidden md:flex gap-10 items-center glass rounded-[24px] px-8 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.2)] pointer-events-auto border-[var(--border)] bg-white/[0.02]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-black uppercase tracking-[0.25em] text-muted hover:text-accent transition-all hover:scale-105 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-[var(--glass-bg)] mx-2" />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden glass rounded-2xl p-4 pointer-events-auto active:scale-95 transition-transform shadow-lg">
          <div className="w-5 h-[1.5px] bg-text mb-1.5 opacity-60"></div>
          <div className="w-5 h-[1.5px] bg-text opacity-60"></div>
        </button>

      </div>
    </motion.nav>
  );
}
