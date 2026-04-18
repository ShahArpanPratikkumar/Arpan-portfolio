"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-24 relative overflow-hidden bg-[var(--card)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="text-xl font-black italic tracking-tighter uppercase text-[var(--text)]">
              ARPAN SHAH<span className="text-[var(--accent)]">.</span> 2026
            </div>
            <div className="hidden md:block w-32 h-[1px] bg-[var(--border)]"></div>
            <div className="text-[var(--muted)] font-bold tracking-[0.1em] text-sm uppercase italic">
              Let&apos;s build something amazing together
            </div>
          </div>

          <div className="flex items-center gap-12 font-bold uppercase tracking-[0.2em] italic text-xs text-[var(--muted)]">
            <a href="mailto:shaharpan.cg@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
            <a href="https://github.com/ShahArpanPratikkumar" className="hover:text-[var(--accent)] transition-colors">Github</a>
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-[var(--accent)] px-4 py-2 glass leading-none font-black"
            >
               V 2026.1
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-24">
            <div className="text-[var(--border)] font-black italic text-8xl md:text-[200px] select-none pointer-events-none tracking-tighter leading-none opacity-20">
                ARPAN.SHAH
            </div>
        </div>
      </div>
    </footer>
  );
}
