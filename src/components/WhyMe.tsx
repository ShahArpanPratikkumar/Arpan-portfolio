"use client";

import { motion } from "framer-motion";
import { FaBolt, FaPuzzlePiece, FaTrophy } from "react-icons/fa6";

const cards = [
  {
    title: "Fast Learner",
    text: "I quickly adapt to new technologies and tools.",
    icon: FaBolt,
    delay: 0.1,
  },
  {
    title: "Problem Solver",
    text: "I enjoy solving real-world problems using code.",
    icon: FaPuzzlePiece,
    delay: 0.2,
  },
  {
    title: "Hackathon Mindset",
    text: "I build fast, think smart and focus on results.",
    icon: FaTrophy,
    delay: 0.3,
  }
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.45em]">Strengths</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text font-black text-5xl md:text-7xl tracking-tighter"
          >
            Why <span className="text-accent italic">Me?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center gap-6 group hover:border-accent/40 hover:shadow-[0_0_30px_rgba(255,165,0,0.15)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-border bg-bg flex items-center justify-center text-2xl text-muted group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md pointer-events-none" />
                <card.icon className="relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-muted leading-relaxed font-medium">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
