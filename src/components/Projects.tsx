"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Layout } from "lucide-react";
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

/* ---------------- FIXED PROJECT DATA ---------------- */

const featuredProjects: Project[] = [
  {
    id: "krishisetu",
    title: "KrishiSetu",
    subtitle: "SMART FARMING & SOIL INTELLIGENCE",
    description:
      "AI-powered smart farming platform with soil analysis and predictive insights.",
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
    description:
      "AI-powered platform for predictive skill analytics and workforce insights.",
    tags: ["React", "Next.js", "AI", "FastAPI", "MongoDB"],
    heroImage: "/projects/skillsense/hero.png",
    images: [
      "/projects/skillsense/hero.png",
      "/projects/skillsense/dashboard.png",
      "/projects/skillsense/login.png",
      "/projects/skillsense/pricing.png",
      "/projects/skillsense/stats.png",
    ],
    githubUrl:
      "https://github.com/TrikamDevasi/TEAM_QUANTUM_CODERS-SU-",
    liveUrl: "https://skillsense-ai-seven.vercel.app/",
  },
  {
    id: "transvora",
    title: "Transvora FleetFlow",
    subtitle: "FLEET MANAGEMENT PLATFORM",
    description:
      "Fleet management system with analytics, tracking and dashboard insights.",
    tags: ["React", "Dashboard", "Analytics"],
    heroImage: "/projects/transvora/hero.png",
    images: [
      "/projects/transvora/hero.png",
      "/projects/transvora/settings.png",
      "/projects/transvora/vehicles.png",
      "/projects/transvora/drivers.png",
    ],
    githubUrl:
      "https://github.com/ShahArpanPratikkumar/Odoo_x_Gujarat_Vidhyapith_Hackathon_2026",
    liveUrl: "https://transvora-fleetflow.netlify.app/",
  },
];

/* ---------------- SAFE IMAGE ---------------- */

const SafeImage = ({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <Layout className="w-8 h-8 opacity-20" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
    />
  );
};

/* ---------------- FEATURED PROJECT ---------------- */

const FeaturedProject = memo(({ project }: { project: Project }) => {
  const [activeImage, setActiveImage] = useState(project.heroImage);

  return (
    <div className="mb-24">
      <div className="grid lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div className="relative aspect-video">
          <SafeImage src={activeImage} alt={project.title} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            {project.title}
          </h2>

          <p className="text-gray-400">
            {project.description}
          </p>

          {/* TAGS */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              className="px-4 py-2 bg-yellow-400 text-black flex gap-2 items-center"
            >
              Live <ExternalLink size={16} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 border flex gap-2 items-center"
            >
              GitHub <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturedProject.displayName = "FeaturedProject";

/* ---------------- MAIN ---------------- */

export default function Projects() {
  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold mb-16">
        Projects
      </h1>

      {featuredProjects.map((project) => (
        <FeaturedProject key={project.id} project={project} />
      ))}
    </section>
  );
}