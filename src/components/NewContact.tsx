"use client";

import { useState, useRef, useEffect, memo } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaMapMarker, FaPhoneAlt, FaPaperPlane, FaUser } from "react-icons/fa";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { IconType } from "react-icons";

/**
 * Premium Contact Card
 * Minimalist design with Stripe-level depth.
 */
const ContactCard = memo(({ icon: Icon, title, content, href }: {
  icon: IconType;
  title: string;
  content: string;
  href?: string;
}) => (
  <motion.a
    href={href}
    target={href?.startsWith("mailto") || href?.startsWith("tel") ? "_self" : "_blank"}
    className="group relative flex items-center gap-6 p-6 rounded-[32px] glass glass-hover gpu-accel"
  >
    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl glass border border-[var(--border)] group-hover:border-accent/50 transition-all shadow-inner">
      <Icon className="text-xl text-muted group-hover:text-accent transition-colors" />
    </div>
    <div>
      <p className="text-[10px] text-muted mb-1 uppercase tracking-[0.2em] font-black opacity-40">{title}</p>
      <p className="text-sm font-bold text-text group-hover:text-accent transition-colors tracking-tight">{content}</p>
    </div>
  </motion.a>
));
ContactCard.displayName = "ContactCard";

/**
 * Editorial Floating Label Input
 */
const InputField = memo(({ label, id, type = "text", value, onChange, required, isTextArea }: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextArea?: boolean;
}) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative group">
       {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full bg-[var(--glass-bg)] border border-[var(--border)] rounded-2xl px-5 pt-8 pb-3 text-text text-sm outline-none focus:border-accent/30 focus:bg-white/[0.08] transition-all min-h-[160px] resize-none"
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className="w-full bg-[var(--glass-bg)] border border-[var(--border)] rounded-2xl px-5 pt-8 pb-3 text-text text-sm outline-none focus:border-accent/30 focus:bg-white/[0.08] transition-all"
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-5 transition-all duration-300 pointer-events-none font-bold uppercase tracking-widest ${isActive
            ? "top-3 text-[9px] text-accent opacity-100"
            : "top-6 text-xs text-muted opacity-40"
          }`}
      >
        {label}
      </label>
      <div className={`absolute inset-0 -z-10 rounded-2xl transition-opacity duration-500 blur-2xl ${focused ? "opacity-20 bg-accent/20" : "opacity-0"}`} />
    </div>
  );
});
InputField.displayName = "InputField";

export default function NewContact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toastMsg, setToastMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const showToast = (msg: string, type: "success" | "error") => {
    setToastMsg(msg);
    setStatus(type);
    setTimeout(() => {
      setStatus("idle");
      setToastMsg("");
    }, 4000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    showToast("Redirecting to Gmail...", "success");
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=shaharpan.cg@gmail.com&su=${encodeURIComponent("Portfolio Contact")}&body=${encodeURIComponent(emailBody)}`;
    setTimeout(() => { window.open(gmailLink, "_blank"); }, 500);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-screen py-32 flex items-center overflow-hidden">
      {/* Visual Depth Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square rounded-full bg-accent/5 blur-[160px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Editorial Header */}
        <div className="text-center mb-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Connection
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-black tracking-tighter text-text leading-[0.8] italic uppercase"
          >
            Let&apos;s build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Something Unique</span>
          </motion.h2>
          <motion.div
             initial={{ width: 0 }}
             whileInView={{ width: 120 }}
             className="h-[1px] bg-[var(--glass-bg)] mx-auto mt-12"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <ContactCard icon={FaUser} title="Name" content="Arpan Shah" />
            <ContactCard icon={FaEnvelope} title="Email" content="shaharpan.cg@gmail.com" href="mailto:shaharpan.cg@gmail.com" />
            <ContactCard icon={FaPhoneAlt} title="Phone" content="+91 9499629931" href="tel:+919499629931" />
            <ContactCard icon={FaMapMarker} title="Location" content="Ahmedabad, India" />
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-8"
          >
            <div className="relative rounded-[48px] p-10 md:p-16 glass overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)]">
              {/* Shine Overlay */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField id="name" label="Full Name" value={formData.name} onChange={handleChange} required />
                  <InputField id="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
                <InputField id="subject" label="Subject" value={formData.subject} onChange={handleChange} />
                <InputField id="message" label="Your Message" value={formData.message} onChange={handleChange} isTextArea required />

                <div className="pt-6">
                  <button type="submit" className="premium-btn-primary w-full justify-center group">
                    <FaPaperPlane className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    <span>Send Connection Request</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-10 right-10 z-50 flex items-center gap-4 px-8 py-5 rounded-2xl glass shadow-2xl ${status === "success" ? "border-green-500/30 text-green-400" : "border-red-500/30 text-red-500"}`}
          >
            {status === "success" ? <FiCheckCircle className="text-xl" /> : <FiAlertCircle className="text-xl" />}
            <span className="font-bold tracking-tight">{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
