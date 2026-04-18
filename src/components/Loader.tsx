"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Redesigned minimal loader.
 * Clean, professional, Apple-style.
 * Duration: ~1.5s
 */
export default function Loader({ onComplete }: { onComplete: () => void }) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    timerRef.current = setTimeout(() => onComplete(), 1500);
    return () => {
      document.body.style.overflow = "";
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Main Text Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[var(--text)]">
            Arpan Shah
          </h1>
          
          <motion.div 
            className="w-full h-px bg-accent/30 mt-2 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
          />

          <motion.p
            className="mt-3 text-[10px] tracking-[0.4em] uppercase text-muted font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>

        {/* Minimal Loading Indicator */}
        <div className="h-1 w-32 bg-[var(--glass-bg)] rounded-full overflow-hidden relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
