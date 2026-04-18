"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Layout, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import dynamic from "next/dynamic";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
  loading: () => null,
});

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  heroImage: string;
  images: string[];
  githubUrl: string;
  liveUrl: string;
}

const featuredProjects: Project[] = [
  {
    id: "krishisetu",
    title: "KrishiSetu",
    subtitle: "SMART FARMING & SOIL INTELLIGENCE",
    description: "An AI-powered smart farming & soil intelligence platform providing real-time crop monitoring, soil analysis, and predictive insights for modern agriculture.",
    tags: ["AI", "Dashboard", "React", "Node.js"],
    heroImage: "/projects/krishisetu/hero.png",
    images: [
      "/projects/krishisetu/hero.png",
      "/projects/krishisetu/dashboard.png",
      "/projects/krishisetu/upload.png",
      "/projects/krishisetu/profile.png",
      "/projects/krishisetu/analytics.png",
    ],
    githubUrl: "https://github.com/AnshPatel191207/CraftCore",
    liveUrl: "https://craft-core-sage.vercel.app/",
  },
  {
    id: "skillsense",
    title: "SkillSense AI",
    subtitle: "AI-POWERED SKILL ANALYSIS",
    description: "An AI-powered skill intelligence platform for predictive analytics and workforce insights designed to bridge the gap between education and industry.",
    tags: ["React", "Next.js", "AI", "FastAPI", "MongoDB"],
    heroImage: "/projects/skillsense/hero.png",
    images: [
      "/projects/skillsense/hero.png",
      "/projects/skillsense/dashboard.png",
      "/projects/skillsense/login.png",
      "/projects/skillsense/pricing.png",
      "/projects/skillsense/stats.png",
    ],
    githubUrl: "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    liveUrl: "https://skillsense-ai-seven.netlify.app/",
  },
  {
    id: "transvora",
    title: "Transvora FleetFlow", 
    subtitle: "FLEET MANAGEMENT PLATFORM",
    description: "Smart fleet management platform with real-time tracking, analytics, and operations dashboard for modern logistics and transport operations.",
    tags: ["React", "Dashboard", "Analytics", "Fleet Management"],
    heroImage: "/projects/transvora/hero.png",
    images: [
      "/projects/transvora/hero.png",
      "/projects/transvora/settings.png",
      "/projects/transvora/vehicles.png",
      "/projects/transvora/drivers.png",
    ],
    githubUrl: "https://github.com/ShahArpanPratikkumar/Odoo_x_Gujarat_Vidhyapith_Hackathon_2026",
    liveUrl: "https://transvora-fleetflow.netlify.app/",
  },
];

const clones = [
  {
    name: "Prime Video Clone",
    desc: "Cinematic streaming UI path with dynamic slider and grid.",
    tags: ["HTML", "CSS", "JS"],
    img: "/clones/primevideo.png",
    theme: "from-blue-900 via-black to-slate-900",
    live: "https://arpanshah-amazonprimevideoclone.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/primevideo-clone"
  },
  {
    name: "Crocs Clone",
    desc: "Vibrant product landing page with grid layout.",
    tags: ["React", "Tailwind"],
    img: "/clones/crocs.png",
    theme: "from-green-600 via-black to-emerald-900",
    live: "https://stirring-brigadeiros-69357a.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/Crocs-clone"
  },
  {
    name: "Flipkart Clone",
    desc: "Ecommerce feature set with navigation and categories.",
    tags: ["HTML", "CSS", "JS"],
    img: "/clones/flipkart.png",
    theme: "from-blue-600 via-black to-yellow-600/20",
    live: "https://lustrous-fudge-1d3023.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/flipkart-clone"
  },
  {
    name: "Ajio Clone",
    desc: "Fashion-centric minimalist ecommerce UI experience.",
    tags: ["React", "CSS"],
    img: "/clones/ajio.png",
    theme: "from-gray-800 via-black to-indigo-900",
    live: "https://fanciful-bublanina-da47ce.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/Ajio-Clone"
  },
  {
    name: "Spinny Clone",
    desc: "Modern car marketplace UI with filter systems.",
    tags: ["HTML", "CSS", "JS"],
    theme: "from-orange-700 via-black to-red-900",
    live: "https://classy-empanada-6bf9b1.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/Spinny-clone"
  },
  {
    name: "Ather Clone",
    desc: "High-end electric vehicle brand landing page.",
    tags: ["React", "Framer"],
    img: "/clones/ather.png",
    theme: "from-cyan-900 via-black to-teal-900",
    live: "https://symphonious-kitten-d9d18f.netlify.app/",
    github: "https://github.com/ShahArpanPratikkumar/Ather-clone"
  }
];

/**
 * Safe Image Component with Fallback Logic
 */
const SafeImage = ({ src, alt, className = "", themeClass = "" }: { src?: string, alt: string, className?: string, themeClass?: string }) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${themeClass || 'from-accent/20 via-black to-accent/10'} flex flex-col items-center justify-center gap-3 ${className}`}>
        <Layout className="w-10 h-10 text-[var(--text)]/20" />
        <span className="text-[10px] font-black uppercase tracking-[.4em] text-[var(--text)]/20">Preview</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${className}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const CloneCard = memo(({ project, idx }: { project: any, idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.8 }}
    className="group relative"
  >
    <div className="relative glass border border-[var(--border)] rounded-[32px] overflow-hidden bg-white/[0.02] transition-all duration-500 hover:translate-y-[-8px] hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(245,158,11,0.1)]">
      <div className="relative aspect-video overflow-hidden">
        <SafeImage src={project.img} alt={project.name} themeClass={project.theme} />
      </div>
      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <h4 className="text-xl font-black text-text uppercase tracking-tight tracking-[-0.02em]">{project.name}</h4>
          <p className="text-xs text-muted font-medium line-clamp-1">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t: any) => (
            <span key={t} className="px-3 py-1 bg-[var(--glass-bg)] rounded-lg text-[8px] font-black text-muted uppercase tracking-widest">{t}</span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <a href={project.live} target="_blank" className="flex-1 py-3 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-xl text-center hover:bg-accent transition-all">Live Demo</a>
          <a href={project.github} target="_blank" className="p-3 glass border border-[var(--border)] rounded-xl hover:bg-[var(--glass-bg)] transition-all"><FaGithub className="w-4 h-4 opacity-60" /></a>
        </div>
      </div>
    </div>
  </motion.div>
));
CloneCard.displayName = "CloneCard";

/**
 * Premium Featured Project Component
 */
const FeaturedProject = memo(({ project, index }: { project: Project, index: number }) => {
  const [activeImage, setActiveImage] = useState(project.heroImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="mb-32 last:mb-0 group"
    >
      <div className="relative glass border border-[var(--border)] rounded-[48px] overflow-hidden bg-[var(--glass-bg)] p-6 md:p-10 lg:p-14">
        <div className={`grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-center`}>
          
          <div className="space-y-6">
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl border border-[var(--border)] bg-[var(--glass-bg)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <SafeImage src={activeImage} alt={project.title} />
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveImage(img)}
                  onClick={() => setActiveImage(img)}
                  className={`relative min-w-[100px] md:min-w-[120px] aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === img ? "border-accent scale-105 shadow-lg shadow-accent/20" : "border-[var(--border)] opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-accent/40" />
                <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase">Featured Case Study</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-text tracking-tighter uppercase leading-[0.8] italic">
                {project.title.split(' ')[0]} <br/> 
                <span className="opacity-40">{project.title.split(' ').slice(1).join(' ')}</span>
              </h3>
              <p className="text-lg font-bold text-muted italic tracking-tight opacity-70 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 glass rounded-xl text-[9px] font-black text-muted/50 uppercase tracking-[0.2em] border-[var(--border)]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-accent text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group/btn"
              >
                Live Experience <ExternalLink className="w-4 h-4" />
              </a>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 glass border border-[var(--border)] text-muted font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl hover:bg-[var(--glass-bg)] hover:text-text transition-all flex items-center justify-center gap-3"
              >
                GitHub Source <FaGithub className="w-4 h-4 opacity-60 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
FeaturedProject.displayName = "FeaturedProject";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-[2px] bg-accent"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--text)] font-black text-6xl md:text-[8rem] tracking-tighter uppercase leading-[0.8] italic"
            >
              Hackathon Selected <span className="text-accent underline underline-offset-8 decoration-4">Projects</span>
            </motion.h2>
          </div>
          <p className="text-muted text-[10px] font-black uppercase tracking-[0.5em] max-w-[250px] leading-relaxed opacity-40 italic">
            HIGH-PERFORMANCE CASE STUDIES BUILT FOR SCALE
          </p>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, idx) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* ── NEW SECTION: FRONTEND CLONES ── */}
        <div id="clones" className="pt-40 mt-40 border-t border-[var(--border)]">
           <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                className="h-[2px] bg-accent/40"
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[var(--text)] font-black text-6xl md:text-8xl tracking-tighter uppercase leading-[0.8] italic"
              >
                Frontend Clone <span className="text-[var(--text)] opacity-40">Projects</span>
              </motion.h2>
            </div>
            <p className="text-muted text-[10px] font-black uppercase tracking-[0.5em] max-w-[220px] leading-relaxed opacity-40 italic">
              PIXEL-PERFECT RECREATIONS OF GLOBAL BRANDS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clones.map((project, idx) => (
              <CloneCard key={project.name} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject as any}
        />
      )}
    </section>
  );
}
