"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar              from "@/components/Navbar";
import Hero                from "@/components/Hero";
import Stats               from "@/components/Stats";
import TechStack           from "@/components/TechStack";
import Projects            from "@/components/Projects";
import About               from "@/components/About";
import WhyMe               from "@/components/WhyMe";
import Contact             from "@/components/Contact";
import NewContact          from "@/components/NewContact";
import Footer              from "@/components/Footer";
import SmoothScroll        from "@/components/SmoothScroll";
import Education           from "@/components/Education";
import Resume              from "@/components/Resume";
import FloatingDock        from "@/components/FloatingDock";
import ScrollNav           from "@/components/ScrollNav";
import HackathonExperience from "@/components/HackathonExperience";
import { useState, useEffect } from "react";
import Loader              from "@/components/Loader";
import ResumeModal         from "@/components/ResumeModal";

export default function Home() {
  const [isLoading, setIsLoading]       = useState(true);
  const [resumeOpen, setResumeOpen]     = useState(false);

  // ── Force scroll to top on every page load/refresh ──
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* ── Loader ── */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* ── Resume Modal — rendered at root so NO section stacking context traps it ── */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      <SmoothScroll key="main">
        <motion.main
          className="relative selection:bg-[var(--accent)] selection:text-[var(--bg)] min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Navbar />
          {/* Pass open handler down so Hero/Resume buttons can trigger root-level modal */}
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <WhyMe />
          <Stats />
          <HackathonExperience />
          <TechStack />
          <Education />
          <Resume onOpenResume={() => setResumeOpen(true)} />
          <Projects />
          <Contact />
          <NewContact />
          <Footer />
        </motion.main>

        {/* ── Global Fixed UI ── */}
        <FloatingDock />
        <ScrollNav />
      </SmoothScroll>
    </>
  );
}
