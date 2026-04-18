"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const LINKS = [
  { Icon: FaGithub,   href: "https://github.com/ShahArpanPratikkumar",              label: "GitHub",   glowColor: "rgba(255,255,255,0.15)" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/arpan-shah-08301139b/",    label: "LinkedIn", glowColor: "rgba(59,130,246,0.25)"  },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/qu3XgoVbfn/",                  label: "LeetCode", glowColor: "rgba(255,192,0,0.25)"   },
  { Icon: FaYoutube,  href: "https://www.youtube.com/@ARPANSHAH-v2v",              label: "YouTube",  glowColor: "rgba(239,68,68,0.25)"   },
  { Icon: FaEnvelope, href: "mailto:arpanshah@example.com",                         label: "Email",    glowColor: "rgba(255,140,0,0.25)"   },
];

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (e.clientX < 72)        setVisible(true);
      else if (e.clientX > 220)  setVisible(false);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: -90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="pointer-events-auto ml-3 flex flex-col items-center gap-2 py-4 px-2.5 rounded-2xl"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--glass-border)",
              boxShadow: "4px 0 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Top accent line */}
            <div className="w-4 h-px mb-1" style={{ background: 'var(--accent)', opacity: 0.4 }} />

            {LINKS.map(({ Icon, href, label, glowColor }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055 }}
                whileHover={{ scale: 1.22, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="group relative w-9 h-9 flex items-center justify-center rounded-xl text-[var(--muted)] hover:text-[var(--text)] transition-all duration-200 cursor-pointer"
              >
                {/* Glow bg on hover */}
                <span
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  style={{ background: glowColor, filter: "blur(8px)" }}
                />
                <Icon className="text-[18px] relative z-10" />

                {/* Tooltip */}
                <span className="absolute left-[calc(100%+10px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap text-[10px] font-bold uppercase tracking-wider text-[var(--text)] px-2.5 py-1 rounded-lg transition-all duration-200 translate-x-[-4px] group-hover:translate-x-0"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--glass-border)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {label}
                </span>
              </motion.a>
            ))}

            {/* Bottom accent */}
            <div className="w-4 h-px mt-1" style={{ background: 'var(--accent)', opacity: 0.2 }} />
            <div className="w-1 h-1 rounded-full" style={{ background: 'var(--accent)', opacity: 0.4 }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invisible hover trigger strip */}
      <div className="absolute left-0 top-0 w-3 h-full pointer-events-auto" />
    </div>
  );
}
