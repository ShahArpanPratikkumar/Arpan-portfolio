"use client";

import React, { memo } from "react";

/**
 * Premium Spline 3D Scene Component (Stable Iframe Method)
 * 
 * WHY THIS METHOD? 
 * - The "@splinetool/react-spline" component currently triggers a "Data read, but end of buffer not reached" 
 *   runtime error in this Turbopack environment. 
 * - This Iframe method is 100% stable, resolves all runtime errors, and ensures smooth 
 *   rendering without crashing the site.
 * 
 * REDESIGNED FOR:
 * - No Borders / No harsh boxes
 * - Clean transparency-emulation (matching #0a0a0a)
 * - Perfect 420px centering
 */
const SplineScene = memo(() => {
  return (
    <div className="relative w-full max-w-[420px] h-[420px] flex items-center justify-center mx-auto overflow-visible select-none pointer-events-none">
      
      {/* Premium Background Glow - Soft orange radial blur */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "scale(1.3)",
        }}
      />
      
      {/* Glow Core for depth */}
      <div 
        className="absolute w-40 h-40 bg-accent/5 rounded-full blur-[90px] animate-pulse pointer-events-none" 
      />

      {/* Main Spline Wrapper - Zero Borders, Zero Overflow issues */}
      <div className="w-full h-full relative z-10 flex items-center justify-center rounded-[40px] overflow-hidden pointer-events-auto">
        <iframe 
          src="https://my.spline.design/i97SmS2G0uE6iEx-0aa3/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="scale-110" // Slight scale up to remove any possible edge pixels
          title="Interactive 3D Scene"
          loading="lazy"
        />
      </div>

      {/* Edge Polish - A very faint ring for premium depth */}
      <div className="absolute inset-0 rounded-[40px] pointer-events-none ring-1 ring-white/5 shadow-[0_0_50px_rgba(0,0,0,0.3)]" />
    </div>
  );
});

SplineScene.displayName = "SplineScene";

export default SplineScene;
