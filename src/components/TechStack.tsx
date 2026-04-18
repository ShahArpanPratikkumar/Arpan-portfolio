"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiMui, SiNodedotjs, 
  SiExpress, SiNestjs, SiMongodb, SiMysql, SiVercel, SiDocker, SiLinux 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const stack = {
  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Vite", icon: SiVite },
  ],
  UI: [
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MUI", icon: SiMui },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "NestJS", icon: SiNestjs },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  Cloud: [
    { name: "AWS", icon: FaAws },
    { name: "Vercel", icon: SiVercel },
  ],
  Tools: [
    { name: "Docker", icon: SiDocker },
    { name: "Linux", icon: SiLinux },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05, rotateX: 5, rotateY: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="group relative flex flex-col items-center gap-4 px-6 py-8 transition-all duration-300 border hover:border-accent/40 cursor-default bg-card border-border hover:shadow-sm rounded-xl"
  >
    <div className="text-4xl transition-all duration-300 group-hover:scale-110 group-hover:text-accent z-10 text-text">
      <Icon />
    </div>
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted group-hover:text-text transition-colors z-10">{name}</span>
  </motion.div>
);

export default function TechStack() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-center justify-center text-center gap-4 relative">
          {/* Subtle Glow Pulse */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-accent/15 blur-[80px] rounded-full pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative z-10"
          >
            {/* Heading */}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter flex flex-wrap items-center justify-center gap-3 md:gap-5">
              <span className="text-text relative inline-flex">
                {"TECH".split("").map((char, i) => (
                  <motion.span 
                    key={`tech-${i}`} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 120 }} 
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
                {/* Underline */}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[3px] md:h-[4px] bg-accent origin-left rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                />
              </span>
              
              <span className="inline-flex">
                {"STACK".split("").map((char, i) => (
                  <motion.span 
                    key={`stack-${i}`} 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, type: "spring", stiffness: 120 }} 
                    viewport={{ once: true }} 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h2>

            {/* Futuristic Tech Animation Ring */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-70">
              {/* Outer Slow Rotating Dashed Ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full text-accent/40"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 4" opacity="0.6" />
              </motion.svg>
              {/* Inner Reverse Rotating Solid Arcs */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full text-orange-400"
              >
                <path d="M50 15 A35 35 0 0 1 85 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M50 85 A35 35 0 0 1 15 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </motion.svg>
              {/* Glowing Core Dot */}
              <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {Object.entries(stack).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold uppercase tracking-[0.2em] text-accent">
                {category}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                  <Card key={item.name} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
