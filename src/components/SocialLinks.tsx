"use client";

import { motion } from "framer-motion";
import { 
  FaGithub, FaLinkedin, FaYoutube, FaEnvelope
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { 
    name: "GitHub", 
    icon: FaGithub, 
    href: "https://github.com/ShahArpanPratikkumar",
    color: "#ffffff"
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    href: "https://www.linkedin.com/in/arpan-shah-08301139b/",
    color: "#0077b5"
  },
  { 
    name: "LeetCode", 
    icon: SiLeetcode, 
    href: "https://leetcode.com/u/qu3XgoVbfn/",
    color: "#ffa116"
  },
  { 
    name: "YouTube", 
    icon: FaYoutube, 
    href: "https://www.youtube.com/@ARPANSHAH-v2v",
    color: "#ff0000"
  },
  { 
    name: "Email", 
    icon: FaEnvelope, 
    href: "mailto:shaharpan.cg@gmail.com",
    color: "#ffa500"
  },
];

export default function SocialLinks() {
  return (
    <section className="py-12 relative overflow-hidden bg-[var(--card)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative flex flex-col items-center gap-3"
            >
              {/* Tooltip */}
              <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--accent)] text-[var(--bg)] text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter whitespace-nowrap z-20">
                {social.name}
              </span>
              
              {/* Icon with Glow */}
              <div className="relative glass p-4 text-3xl md:text-4xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] group-hover:border-[var(--accent)]">
                <social.icon className="transition-colors group-hover:text-[var(--accent)] text-[var(--text)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
