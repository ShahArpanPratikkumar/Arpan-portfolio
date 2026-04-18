"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaExternalLinkAlt, FaGithub, FaCertificate, FaRocket, FaStopwatch } from "react-icons/fa";
import { FaLaptopCode, FaDiagramProject } from "react-icons/fa6";

const experiences = [
  {
    title: "2+ National Level Offline Hackathons",
    description: "Participated in prestigious national hackathons, building solutions in intensive 24-48 hour sessions.",
    icon: FaTrophy,
    stats: "2+ National",
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "10+ Online Hackathons Participated",
    description: "Regularly competing in global online hackathons across platforms like Devpost and Unstop.",
    icon: FaLaptopCode,
    stats: "10+ Global",
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "50+ Projects Built",
    description: "Diverse portfolio of web applications, CLI tools, and background processing systems.",
    icon: FaDiagramProject,
    stats: "50+ Projects",
    color: "from-emerald-500/10 to-transparent"
  }
];

export default function HackathonExperience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--border)] bg-[var(--glass-bg)] text-accent font-black tracking-[0.4em] text-[10px] uppercase shadow-sm"
          >
            <FaTrophy className="text-yellow-500" /> Recognition
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-[6rem] lg:text-[7rem] font-black tracking-tighter text-text uppercase italic leading-[0.85]"
          >
            Hackathon <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 pb-2">Achievements</span>
          </motion.h2>
        </div>

        {/* ────── TOP GRID: Stats ────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="group relative glass p-8 md:p-10 rounded-[32px] border border-[var(--border)] hover:border-yellow-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] overflow-hidden flex flex-col"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col flex-1">
                <div className="w-14 h-14 bg-[var(--glass-bg)] border border-[var(--border)] rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <exp.icon className="text-xl" />
                </div>
                
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl lg:text-3xl font-black text-text italic tracking-tighter leading-tight group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-muted text-sm font-medium leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-8 text-[10px] uppercase tracking-[0.2em] font-black text-accent/60 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-accent/40"></span>
                  {exp.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Layout: Left (Main Highlight) + Right (Upcoming) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 max-w-7xl mx-auto">
          
          {/* ────── LEFT SIDE: Main Highlight ────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative glass rounded-[40px] overflow-hidden border border-[var(--border)] hover:border-yellow-500/30 hover:shadow-[0_0_60px_rgba(245,158,11,0.1)] transition-all duration-700 flex flex-col"
          >
            {/* Subtle Trophy Behind Text (Floating) */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -left-20 top-10 md:top-1/2 md:-translate-y-1/2 opacity-10 md:opacity-[0.15] z-0 pointer-events-none"
            >
              <FaTrophy className="text-[250px] md:text-[400px] text-yellow-500 drop-shadow-[0_0_80px_rgba(245,158,11,1)] mix-blend-screen" />
            </motion.div>

            <div className="p-10 md:p-14 flex flex-col h-full relative z-10">
              <div className="space-y-6 flex-1">
                <div className="inline-flex items-center gap-3 text-yellow-500 text-[11px] font-black uppercase tracking-[0.3em]">
                  <FaMedal className="text-base" /> Top Tier Focus
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-text uppercase tracking-[-0.04em] leading-[0.9] italic">
                  3rd Place Winner <br/>
                  <span className="text-2xl md:text-3xl opacity-60 mt-4 block tracking-tighter">National Level Hackathon</span>
                </h3>
                
                <p className="text-muted text-base md:text-lg font-medium leading-relaxed max-w-2xl mt-6">
                  Secured 3rd position by building an AI-powered skill intelligence platform (SkillSense AI) in a highly competitive, high-pressure hackathon environment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-12">
                <a 
                  href="https://drive.google.com/file/d/1vqgUXDCSRH2issbEwdQUNwzeVOVYOwf0/view?usp=drive_link" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 min-w-[200px] py-4 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  View Certificate <FaCertificate className="text-base" />
                </a>
                <a 
                  href="https://skillsense-ai-seven.vercel.app/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex-1 py-4 px-6 glass border border-[var(--border)] text-text font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-[var(--glass-bg)] hover:border-yellow-500/30 transition-all flex items-center justify-center gap-3 group/btn"
                >
                  Live Demo <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full sm:w-auto py-4 px-6 glass border border-[var(--border)] text-muted hover:text-text font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-[var(--glass-bg)] hover:border-white/30 transition-all flex items-center justify-center gap-3 group/btn"
                >
                  GitHub Repo <FaGithub className="text-base group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ────── RIGHT SIDE: Upcoming ────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 mb-2 pl-2">
              <FaRocket className="text-accent text-2xl" />
              <h3 className="text-3xl lg:text-4xl font-black text-text uppercase tracking-tighter italic leading-none">
                Upcoming <br/> <span className="opacity-40 text-xl lg:text-2xl">Achievements</span>
              </h3>
            </div>

            <div className="glass p-8 rounded-[32px] border border-[var(--border)] hover:border-accent/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-500 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border)] flex items-center justify-center shrink-0 relative z-10">
                <FaStopwatch className="text-accent opacity-80 text-xl" />
              </div>
              <div className="space-y-2 relative z-10">
                <h4 className="text-text font-black text-lg tracking-tight uppercase">National Hackathons</h4>
                <p className="text-muted text-sm font-medium leading-relaxed">Participating in upcoming national hackathons with a focus on web performance and AI.</p>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] border border-[var(--border)] hover:border-accent/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.05)] transition-all duration-500 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[var(--glass-bg)] border border-[var(--border)] flex items-center justify-center shrink-0 relative z-10">
                <FaTrophy className="text-accent opacity-80 text-xl" />
              </div>
              <div className="space-y-2 relative z-10">
                <h4 className="text-text font-black text-lg tracking-tight uppercase">Future Competitions</h4>
                <p className="text-muted text-sm font-medium leading-relaxed">Targeting top 3 positions in future engineering competitions.</p>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
