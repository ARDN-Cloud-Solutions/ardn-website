"use client";

import { motion } from "framer-motion";
import { C, headF, SectionLabel, FadeSection } from "./shared";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={36} height={36}>
        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" y1="12" x2="12" y2="21" />
      </svg>
    ),
    title: "Hosting & Infrastructure",
    desc: "Production-grade cloud hosting, autoscaling, monitoring, and security baked in.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={36} height={36}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Maintenance & Updates",
    desc: "Model upgrades, dependency patches, security updates, and uptime monitoring.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={36} height={36}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: "AI Compute",
    desc: "LLM tokens, vector storage, and embedding compute — metered transparently against your AI credit pool.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={36} height={36}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "Feature Iteration",
    desc: "Ongoing development of new features, tuning, and improvements — drawn from your service credits.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={36} height={36}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Support & Training",
    desc: "Direct access to our engineering team, onboarding sessions, and documentation for your users.",
  },
];

export default function IncludedSection() {
  return (
    <section
      id="included"
      className="relative z-10 py-24 lg:py-28"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <div className="container">
        <FadeSection>
          <SectionLabel>EVERY TIER INCLUDES</SectionLabel>
          <h2
            style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 max-w-3xl"
          >
            Five services,{" "}
            <span style={{ color: C.accent }}>one subscription.</span>
          </h2>
          <p
            className="text-[16px] lg:text-[18px] leading-relaxed max-w-[580px] mb-14 font-poppins text-white"
          >
            Your monthly fee isn&apos;t just hosting. It&apos;s the entire
            operating discipline of running an AI product — bundled.
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: C.accent }}
              className="rounded p-6 flex flex-col gap-4 cursor-default transition-colors"
              style={{ background: C.surface, border: `1px solid ${C.border}` }}
            >
              <span style={{ color: C.accent }}>{item.icon}</span>
              <h4
                className="text-white font-semibold text-[15px] leading-snug"
                style={{ ...headF, letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h4>
              <p
                className="text-[13px] leading-relaxed font-poppins"
                style={{ color: C.textDim }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
