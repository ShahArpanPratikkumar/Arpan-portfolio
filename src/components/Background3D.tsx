"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax spring settings for ultra-smooth movement
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position (-1 to 1) to translation values (-15% to 15%)
  const x = useTransform(smoothX, [-1, 1], ["-10%", "10%"]);
  const y = useTransform(smoothY, [-1, 1], ["-10%", "10%"]);

  useEffect(() => {
    setMounted(true);
    
    // Parallax tracking only on desktop
    if (window.innerWidth >= 1024) {
      const handleMouseMove = (e: MouseEvent) => {
        // Normalize mouse coordinates from -1 to 1 based on screen size
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        mouseX.set(nx);
        mouseY.set(ny);
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen z-[-100] overflow-hidden pointer-events-none selection:bg-transparent">
      
      {/* 1. Base Gradient Layer (CSS handles dark/light transition) */}
      <div className="absolute inset-0 bg-base-gradient transition-colors duration-700" />

      {/* 2. Slow Animated Glow Layer (Center-Right with Parallax) */}
      <motion.div 
        style={{ x, y }}
        className="absolute inset-0 flex items-center justify-center lg:justify-end opacity-100 transition-opacity duration-1000"
      >
        {/* Giant radial gradient acting as a soft glow, mapped via CSS vars for theme switching */}
        <div className="w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] translate-x-0 lg:translate-x-[20%] rounded-full bg-theme-glow blur-[100px] md:blur-[150px] animate-slow-spin opacity-80" />
      </motion.div>

      {/* 3. Subtle Noise Texture Overlay (Apple / Stripe Premium Feel) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
