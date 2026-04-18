"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 10);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 10);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start p-8 glass rounded-2xl min-w-[250px] shadow-sm">
      <div className="flex items-center text-7xl md:text-9xl font-extrabold tracking-tighter text-text">
        <span>{count}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-lg md:text-xl font-bold uppercase tracking-widest text-muted mt-4">
        {label}
      </div>
    </div>
  );
};

export default function Stats() {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-grid border-y border-border">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <Counter value={50} label="Projects Built" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.1 }}
        >
           <Counter value={15} label="Technologies Mastered" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
           <Counter value={100} label="Learning Daily" suffix="%" />
        </motion.div>

      </div>
    </section>
  );
}
