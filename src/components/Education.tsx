"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const educationData = [
  {
    institution: "CodingGita x Swaminarayan University, Ahmedabad",
    degree: "Bachelor of Technology",
    period: "2025 – 2029",
    description: "Specializing in software architecture and modern full-stack engineering through an industry-integrated curriculum."
  },
  {
    institution: "Shree Nagindas Maganlal High School, Ahmedabad",
    degree: "Higher Secondary Education",
    period: "2025",
    description: "Completed secondary education with a focus on core mathematics and scientific principles."
  },
  {
    institution: "The H B Kapadia New High School, Ahmedabad",
    degree: "Secondary Education",
    period: "2021 – 2024",
    description: "Foundational education with strong emphasis on academic excellence and analytical thinking."
  }
];

/**
 * Premium Vertical Timeline Component
 * Features:
 * - Geometric alignment
 * - Progress line animation on scroll
 * - Glowing timeline nodes
 * - Sophisticated glass cards
 */
export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-bg" ref={containerRef}>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Academic Path
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[8rem] font-black tracking-tighter text-text leading-[0.8] italic uppercase"
          >
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Journey.</span>
          </motion.h2>
        </div>

        {/* Timeline Content */}
        <div className="relative max-w-5xl mx-auto mt-20">
          
          {/* Animated Progress Line */}
          <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--glass-bg)] md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 w-full bg-accent origin-top shadow-[0_0_15px_rgba(245,158,11,0.5)] h-full"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.institution} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Node (The Dot) */}
                  <div className="absolute left-0 md:left-1/2 w-11 h-11 md:-translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-bg shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
                  </div>

                  {/* Card Section */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="glass glass-hover p-8 md:p-10 rounded-[32px] group relative overflow-hidden"
                    >
                      {/* Subtitle / Period */}
                      <span className="text-accent text-[10px] font-black uppercase tracking-[.25em] opacity-60 block mb-4">
                        {item.period}
                      </span>
                      
                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-black text-text tracking-tight uppercase group-hover:text-accent transition-colors leading-tight">
                          {item.institution}
                        </h3>
                        <p className="text-lg font-bold text-muted italic tracking-tight">
                          {item.degree}
                        </p>
                        <p className="text-sm font-medium text-muted/60 leading-relaxed max-w-md ml-auto mr-0 md:mr-auto">
                          {item.description}
                        </p>
                      </div>

                      {/* Decor Glow */}
                      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
