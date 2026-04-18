"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  FaRocket, FaCode, FaLightbulb, FaDownload, FaArrowRight, FaMapMarker, FaBriefcase, FaBullseye
} from "react-icons/fa";
import Background3D from "./Background3D";

const stats = [
  { icon: FaRocket, label: "50+ Projects Built" },
  { icon: FaCode, label: "15+ Technologies" },
  { icon: FaLightbulb, label: "100% Learning Daily" },
];

/**
 * Premium Glass Card Component (Right Side - 40%)
 */
const InfoCard = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
    className="relative group w-full max-w-[420px] lg:ml-auto"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    
    <div className="relative glass border border-[var(--border)] rounded-[48px] p-10 md:p-14 space-y-10 shadow-2xl backdrop-blur-3xl overflow-hidden">
      <div className="space-y-8 relative z-10 font-sans">
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass border border-[var(--border)] flex items-center justify-center">
            <FaBriefcase className="text-accent text-xl" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-[0.25em] font-black opacity-40">Role</p>
            <p className="text-base font-bold text-text tracking-tight">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass border border-[var(--border)] flex items-center justify-center">
            <FaBullseye className="text-accent text-xl" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-[0.25em] font-black opacity-40">Focus</p>
            <p className="text-base font-bold text-text tracking-tight">UI/UX & Performance</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl glass border border-[var(--border)] flex items-center justify-center">
            <FaMapMarker className="text-accent text-xl" />
          </div>
          <div>
            <p className="text-[10px] text-muted uppercase tracking-[0.25em] font-black opacity-40">Location</p>
            <p className="text-base font-bold text-text tracking-tight">Ahmedabad, India</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
));
InfoCard.displayName = "InfoCard";

/**
 * Minimalist Stat Item (Left Side Content)
 */
const StatItem = memo(({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
  <div className="flex items-center gap-4 group opacity-70 hover:opacity-100 transition-all duration-700">
    <div className="w-10 h-10 rounded-xl glass border border-[var(--border)] flex items-center justify-center group-hover:border-accent/40 transition-colors">
      <Icon className="text-accent text-sm" />
    </div>
    <span className="text-[11px] font-black text-text uppercase tracking-widest leading-none">
      {label}
    </span>
  </div>
));
StatItem.displayName = "StatItem";

export default function Hero({ onOpenResume }: { onOpenResume?: () => void }) {
  return (
    <section className="relative min-h-[100vh] w-full flex items-center justify-center pt-20 pb-12 overflow-hidden bg-bg">
      <Background3D />

      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-20">

          {/* Left Side: Editorial Content (60%) */}
          <div className="flex flex-col gap-10 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="flex items-center justify-center lg:justify-start gap-4 text-accent font-black tracking-[0.4em] text-[10px] uppercase"
              >
                <div className="w-10 h-[2px] bg-accent" />
                <span>EST. 2026</span>
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl md:text-8xl lg:text-[10.5rem] font-black tracking-[-0.05em] leading-[0.8] italic flex flex-col items-center lg:items-start select-none"
                >
                  <span className="text-text uppercase">ARPAN</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 uppercase filter drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    SHAH
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-xl md:text-2xl font-black text-muted tracking-tight italic opacity-60"
                >
                  Full Stack Developer
                </motion.p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <button
                onClick={onOpenResume}
                className="premium-btn-primary"
              >
                <FaDownload className="group-hover:-translate-y-1 transition-transform" /> 
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="premium-btn-secondary"
              >
                <span>View Projects</span> 
                <FaArrowRight className="text-accent group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="flex flex-col justify-center lg:justify-start gap-5 mt-6"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>

          {/* Right Side: High-End Glass Card (40%) */}
          <div className="flex items-center justify-center lg:justify-end">
            <InfoCard />
          </div>
        </div>
      </div>

      {/* Rhythmic Bottom Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-muted font-black rotate-180 [writing-mode:vertical-lr] opacity-40">Discover</span>
      </motion.div>
    </section>
  );
}
