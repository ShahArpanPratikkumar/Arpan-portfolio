"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const SECTIONS = [
  { id: "about",      label: "About"      },
  { id: "experience", label: "Experience" },
  { id: "stack",      label: "Stack"      },
  { id: "projects",   label: "Projects"   },
  { id: "contact",    label: "Contact"    },
];

export default function ScrollNav() {
  const [idx, setIdx] = useState(0);
  const atTop = idx >= SECTIONS.length;

  const handleClick = useCallback(() => {
    if (!atTop) {
      const el = document.getElementById(SECTIONS[idx].id);
      el?.scrollIntoView({ behavior: "smooth" });
      setIdx((i) => i + 1);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIdx(0);
    }
  }, [idx, atTop]);

  const label = atTop ? "Top" : SECTIONS[idx].label;

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-8 right-6 md:right-10 z-50 flex flex-col items-center gap-2 group cursor-pointer"
    >
      {/* Icon with bounce */}
      <motion.div
        animate={{ y: atTop ? [0, -7, 0] : [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="relative"
      >
        {/* Hover glow ring */}
        <div className="absolute -inset-2 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'rgba(255,140,0,0.15)' }} />

        <div
          className="relative w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full transition-all duration-300 border border-[var(--border)] group-hover:border-[var(--accent)] group-hover:shadow-[0_0_28px_rgba(255,140,0,0.3)] bg-[var(--card)]"
          style={{ backdropFilter: "blur(14px)" }}
        >
          {atTop
            ? <FaChevronUp  className="text-[var(--accent)] text-sm" />
            : <FaChevronDown className="text-[var(--accent)] text-sm" />
          }
        </div>
      </motion.div>

      {/* Section label */}
      <motion.span
        key={label}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-[9px] uppercase tracking-[0.35em] font-black text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors [writing-mode:vertical-lr]"
      >
        {label}
      </motion.span>
    </motion.button>
  );
}
