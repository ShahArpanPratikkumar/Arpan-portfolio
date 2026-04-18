"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const springConfig = { damping: 20, stiffness: 200 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Side: About Text */}
          <div className="w-full md:w-3/5 flex flex-col gap-8 order-2 md:order-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black italic tracking-tighter"
            >
              ABOUT <span className="text-accent">ME</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6 text-lg md:text-xl text-muted leading-relaxed font-medium"
            >
              <p>
                I am <span className="text-text">Arpan Shah</span>, a passionate Full Stack Developer from Ahmedabad, Gujarat, India. 
                I am currently a student at <span className="text-accent">Coding Gita</span>, where I am continuously learning modern web development technologies and building real-world projects.
              </p>
              <p>
                I specialize in building responsive frontend interfaces using <span className="text-text">React, Next.js and Tailwind CSS</span>, and scalable backend systems using <span className="text-text">Node.js, Express and MongoDB</span>. I enjoy creating clean UI, smooth animations and interactive user experiences.
              </p>
              <p>
                My goal is to become a top full stack developer and build impactful digital products. I am always learning, experimenting and improving my development skills.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {["Full Stack", "clean UI", "Scalable Systems", "Interactive UX"].map((s) => (
                <div key={s} className="px-6 py-2 glass shadow-sm text-accent font-bold uppercase text-xs tracking-widest border-border border rounded-lg">
                  {s}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0 relative"
          >
            <div 
              className="relative group flex justify-center items-center" 
              onMouseMove={handleMouseMove} 
              onMouseLeave={handleMouseLeave} 
              style={{ perspective: "1000px" }}
            >
              {/* Animations Container - Slightly larger than the image */}
              <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] inset-0 m-auto pointer-events-none">
                {/* 1. Rotating Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full rounded-full border border-orange-500/30 border-dashed"
                />

                {/* 2. Glow Pulse */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-orange-500/20 rounded-full blur-[60px] z-0"
                />

                {/* 3. Floating Dots */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-orange-500/50"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, (i % 2 === 0 ? 15 : -15), 0],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    style={{
                      top: `${15 + i * 15}%`,
                      left: `${(i % 3 === 0 ? 10 : 80)}%`,
                    }}
                  />
                ))}
              </div>

              {/* 4. 3D Tilt Image Container */}
              <motion.div
                style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
                className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-[var(--accent)] shadow-2xl hover:scale-105 transition-transform duration-500"
              >
                <Image 
                  src="/profile.jpg" 
                  alt="Arpan Shah" 
                  fill 
                  priority 
                  sizes="(max-width: 768px) 300px, 380px"
                  className="object-cover" 
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
