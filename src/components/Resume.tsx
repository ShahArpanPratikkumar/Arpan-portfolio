"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";

export default function Resume({ onOpenResume }: { onOpenResume: () => void }) {

  return (
    <section id="resume" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/5 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.45em]">Resume</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6"
          >
            My Professional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent italic">
              Profile
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg md:text-xl max-w-2xl mb-12"
          >
            Download my latest resume to know more about my skills, projects and experience. Let&apos;s create something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 md:p-12 rounded-3xl border border-border w-full overflow-hidden group glass shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <FaFilePdf className="text-6xl md:text-8xl text-accent/20 mx-auto mb-8 group-hover:text-accent/40 group-hover:scale-110 transition-all duration-500" />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a
                href="/resume.pdf"
                download="Arpan_Shah_Resume.pdf"
                className="w-full sm:w-auto relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border overflow-hidden hover:border-accent/60 transition-all group/btn bg-accent/5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                <FaDownload className="text-accent group-hover/btn:-translate-y-1 group-hover/btn:scale-110 transition-transform relative z-10" />
                <span className="font-bold tracking-wide text-text relative z-10 text-sm">Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl border border-border bg-card hover:bg-card/80 transition-all group/view"
              >
                <FaEye className="text-muted group-hover/view:text-text transition-colors" />
                <span className="font-bold tracking-wide text-muted group-hover/view:text-text text-sm">View Resume</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
