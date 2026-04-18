"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaArrowUpRightFromSquare,
} from "react-icons/fa6";

// ── Typed text hook ─────────────────────────────────────────────────────────
const PHRASES = [
  "Available for freelance",
  "Open to hackathons",
  "Let's collaborate",
  "Building the future",
];

function useTypingText() {
  const [display, setDisplay] = useState("");
  const [pi, setPi]   = useState(0);
  const [ci, setCi]   = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[pi];
    const speed  = del ? 38 : ci === phrase.length ? 1800 : 78;
    const t = setTimeout(() => {
      if (!del && ci < phrase.length)         { setDisplay(phrase.slice(0, ci + 1)); setCi(c => c + 1); }
      else if (!del && ci === phrase.length)  { setDel(true); }
      else if (del && ci > 0)                 { setDisplay(phrase.slice(0, ci - 1)); setCi(c => c - 1); }
      else                                    { setDel(false); setPi(p => (p + 1) % PHRASES.length); }
    }, speed);
    return () => clearTimeout(t);
  }, [pi, ci, del]);

  return display;
}

// ── Contact links ────────────────────────────────────────────────────────────
const LINKS = [
  {
    Icon: FaEnvelope, label: "Email Me", sub: "Drop me a line",
    href: "mailto:arpanshah@example.com",
    gradient: "from-orange-500/20 to-orange-900/5",
    glow: "rgba(255,140,0,0.22)", text: "text-orange-400",
  },
  {
    Icon: FaGithub, label: "GitHub", sub: "ShahArpanPratikkumar",
    href: "https://github.com/ShahArpanPratikkumar",
    gradient: "from-white/8 to-white/2",
    glow: "rgba(255,255,255,0.1)", text: "text-[var(--text)]",
  },
  {
    Icon: FaLinkedin, label: "LinkedIn", sub: "Connect professionally",
    href: "https://www.linkedin.com/in/arpan-shah-08301139b/",
    gradient: "from-blue-500/20 to-blue-900/5",
    glow: "rgba(59,130,246,0.22)", text: "text-blue-400",
  },
  {
    Icon: FaYoutube, label: "YouTube", sub: "@ARPANSHAH-v2v",
    href: "https://www.youtube.com/@ARPANSHAH-v2v",
    gradient: "from-red-500/20 to-red-900/5",
    glow: "rgba(239,68,68,0.22)", text: "text-red-400",
  },
];

// ── Magnetic Card ────────────────────────────────────────────────────────────
function MagneticCard({ item }: { item: typeof LINKS[0] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({
      x: (e.clientX - r.left - r.width  / 2) * 0.12,
      y: (e.clientY - r.top  - r.height / 2) * 0.12,
    });
  }, []);

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPos({ x: 0, y: 0 }); }}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
      className="group relative flex items-center gap-4 p-4 rounded-2xl border border-border overflow-hidden cursor-pointer transition-all duration-250 glass"
    >
      {/* Bg gradient on hover */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} pointer-events-none`}
      />
      {/* Box shadow glow */}
      <motion.div
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.22 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${item.glow}, 0 0 40px ${item.glow}` }}
      />

      {/* Icon */}
      <div
        className={`relative z-10 w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 text-xl border border-border/20 ${item.text} bg-card transition-all duration-250 group-hover:scale-110`}
      >
        <item.Icon />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col min-w-0">
        <span className="font-bold text-text group-hover:text-accent transition-colors">{item.label}</span>
        <span className="text-muted text-[11px] truncate">{item.sub}</span>
      </div>

      {/* Arrow */}
      <FaArrowUpRightFromSquare className="relative z-10 ml-auto flex-shrink-0 text-[var(--muted)] group-hover:text-[var(--text)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200 text-xs" />
    </motion.a>
  );
}

// ── Floating background shape ────────────────────────────────────────────────
function FloatShape({ size, left, top, delay, duration, color }: {
  size: number; left: string; top: string; delay: number; duration: number; color: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 8, 0], opacity: [0.04, 0.09, 0.04] }}
      transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, left, top, background: color, filter: "blur(2px)" }}
    />
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Contact() {
  const typed = useTypingText();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">

      {/* ── Background ambiance ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating rings */}
        <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[var(--border)]" style={{ opacity: 0.15 }} />
        <motion.div animate={{ rotate: [360, 0] }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[var(--accent)]" style={{ opacity: 0.08 }} />
        <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[var(--border)]" style={{ opacity: 0.15 }} />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-accent/3 blur-[90px]" />

        {/* Floating shapes */}
        <FloatShape size={10} left="12%"  top="18%"  delay={0}   duration={7}  color="rgba(255,140,0,1)"   />
        <FloatShape size={6}  left="28%"  top="72%"  delay={1.2} duration={9}  color="rgba(255,140,0,1)"   />
        <FloatShape size={8}  left="75%"  top="22%"  delay={0.5} duration={8}  color="rgba(255,255,255,1)" />
        <FloatShape size={5}  left="85%"  top="65%"  delay={2}   duration={6}  color="rgba(255,140,0,1)"   />
        <FloatShape size={12} left="55%"  top="85%"  delay={0.8} duration={11} color="rgba(100,100,255,1)" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 justify-center"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent/60" />
            <span className="text-accent text-[10px] font-black uppercase tracking-[0.45em]">Contact</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent/60" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-center text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-5 text-text"
          >
            Let&apos;s Build{" "}
            <span className="text-accent italic">Something</span>
            <br />Amazing
          </motion.h2>

          {/* Typing text */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.22 }}
            className="flex justify-center mb-12"
          >
            <span
              className="font-mono text-sm text-muted/60 border-r-2 border-accent/70 pr-1 min-w-[1ch] tracking-wide"
              style={{ minHeight: "1.4em" }}
            >
              {typed}
            </span>
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.28 }}
            className="relative rounded-3xl p-6 md:p-8 overflow-hidden glass shadow-sm"
          >
            {/* Card top gradient border */}
            <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LINKS.map((item) => (
                <MagneticCard key={item.label} item={item} />
              ))}
            </div>

            {/* Footer line */}
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.55 }}
              className="text-center text-muted/30 text-[10px] uppercase tracking-[0.3em] font-mono mt-8"
            >
              Based in Ahmedabad, India &nbsp;·&nbsp; Available Worldwide
            </motion.p>

            {/* Card bottom gradient border */}
            <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
