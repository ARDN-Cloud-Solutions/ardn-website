"use client";

import { motion } from "framer-motion";
import { C, headF, monoF, SectionLabel, FadeSection } from "./shared";

const cards = [
  {
    num: "01",
    title: "The tooling moves too fast",
    body: "New models, frameworks, and protocols ship every week. By the time you've evaluated one stack, the right answer has changed. We track this so you don't have to.",
  },
  {
    num: "02",
    title: "Hiring AI engineers is brutal",
    body: "Senior AI talent runs $250K+ per role and turns over fast. A full team is seven figures before they ship anything. We give you a team for a fraction of that.",
  },
  {
    num: "03",
    title: "API costs are a black hole",
    body: "Token bills surprise teams every month. We meter usage transparently, optimize prompts continuously, and pass through compute at cost inside your tier credits.",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="relative z-10 py-24 lg:py-28"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <div className="container">
        <FadeSection>
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2
            style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 max-w-3xl"
          >
            You know AI matters.
            <br />
            <span style={{color: C.accent }}>
              The path to using it doesn&apos;t.
            </span>
          </h2>
          <p
            className="text-[16px] lg:text-[18px] leading-relaxed max-w-[600px] mb-14 font-poppins text-white"
          >
            The tooling shifts weekly. Costs are unpredictable. Engineers are
            expensive and rare. Most &quot;AI&quot; software is a thin wrapper
            around someone else&apos;s API. We solve all four.
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded p-8 flex flex-col gap-4 cursor-default"
              style={{ background: C.surface, border: `1px solid ${C.border}` }}
            >
              <span
                style={{ ...monoF, fontSize: 13, color: C.accent, letterSpacing: "0.05em" }}
              >
                {card.num}
              </span>
              <h3
                className="text-white font-semibold text-[20px] lg:text-[22px] leading-snug"
                style={{ ...headF, letterSpacing: "-0.02em" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[15px] leading-relaxed font-poppins"
                style={{ color: C.textDim }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
