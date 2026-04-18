"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // ── Lock body scroll when open ──
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ── ESC key to close ──
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handleKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop — click outside to close ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-[var(--glass-bg)] backdrop-blur-sm cursor-pointer"
          />

          {/* ── Modal panel ── */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-10 z-[999] flex flex-col rounded-2xl border border-border shadow-2xl overflow-hidden"
            style={{ background: "var(--card)" }}
            // Stop clicks inside panel from bubbling to backdrop
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <h3 className="text-lg font-bold text-text tracking-tight">
                Resume Preview
              </h3>
              <div className="flex items-center gap-2">
                {/* Download */}
                <a
                  href="/resume.pdf"
                  download="Arpan_Shah_Resume.pdf"
                  title="Download PDF"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  <FaDownload size={12} />
                  <span className="hidden sm:block">Download</span>
                </a>

                {/* Open in new tab */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
                  style={{ background: "var(--glass-bg)", color: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  <FaExternalLinkAlt size={11} />
                  <span className="hidden sm:block">New Tab</span>
                </a>

                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                  style={{ background: "rgba(156,163,175,0.15)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(156,163,175,0.28)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(156,163,175,0.15)")
                  }
                >
                  <FaTimes className="text-text" size={13} />
                </button>
              </div>
            </div>

            {/* PDF iframe — fills remaining height */}
            <div className="flex-1 relative overflow-hidden">
              <iframe
                src="/resume.pdf"
                className="absolute inset-0 w-full h-full border-none"
                title="Resume PDF"
              />
            </div>

            {/* Keyboard hint */}
            <div className="px-6 py-2 border-t border-border shrink-0">
              <span className="text-[11px] text-muted tracking-wide">
                Press <kbd className="px-1 py-px border border-border rounded text-[10px]">ESC</kbd> or click outside to close
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
