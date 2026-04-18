"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Motion values for instant tracking (dot)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth tracking (ring) - tuned for Apple-like perfectly damped lerp
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 1024) return;
    setMounted(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers interactive expansion on links/buttons
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block overflow-hidden">
      
      {/* Outer Soft Ring (Delayed Lerp) */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          width: isHovered ? 60 : 36,
          height: isHovered ? 60 : 36,
          x: "-50%",
          y: "-50%",
          backgroundColor: isHovered ? "rgba(245, 158, 11, 0.1)" : "transparent",
          borderColor: isHovered ? "rgba(245, 158, 11, 0.4)" : "var(--accent)",
        }}
        transition={{ type: "tween", duration: 0.15 }}
        className="fixed rounded-full border border-solid flex items-center justify-center pointer-events-none"
      />

      {/* Inner Small Dot (Instant) */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ type: "tween", duration: 0.1 }}
        className="fixed w-2 h-2 rounded-full bg-accent pointer-events-none shadow-[0_0_8px_rgba(245,158,11,0.8)]"
      />
    </div>
  );
}
