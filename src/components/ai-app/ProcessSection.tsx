"use client";

import { motion } from "framer-motion";
import { C, headF, monoF, SectionLabel, FadeSection } from "./shared";

const steps = [
  {
    week: "WEEK 1",
    num: "01",
    title: "Discovery",
    body: "We map your workflow, identify the highest-leverage automation, and scope the build. You get a fixed quote and a delivery date.",
  },
  {
    week: "WEEK 1–4",
    num: "02",
    title: "Build",
    body: "Our team architects, builds, and tests your app on production-grade infrastructure. You see weekly demos, not month-long silence.",
  },
  {
    week: "WEEK 4–6",
    num: "03",
    title: "Deploy",
    body: "Live deployment with monitoring, security review, and team training. Your subscription starts the day your app goes into production.",
  },
  {
    week: "ONGOING",
    num: "04",
    title: "Operate",
    body: "We run it. Hosting, model updates, security patches, new features, and support — all inside your monthly subscription and credit allowance.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative z-10 py-24 lg:py-28"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <div className="container">
        <FadeSection>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2
            style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 max-w-3xl"
          >
            Discovery to deployment,{" "}
            <span style={{color: C.accent }}>in weeks not months.</span>
          </h2>
          <p
            className="text-[16px] lg:text-[18px] leading-relaxed max-w-[580px] mb-14 font-poppins text-white"
          >
            A four-stage process designed for speed. Most clients are in
            production inside 30 days.
          </p>
        </FadeSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded overflow-hidden"
          style={{ border: `1px solid ${C.border}` }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 lg:p-9 flex flex-col gap-5"
              style={{
                background: C.surface,
                borderRight: i < steps.length - 1 ? `1px solid ${C.border}` : undefined,
                borderBottom:
                  i < 2
                    ? `1px solid ${C.border}`
                    : undefined,
              }}
            >
              {/* Week tag */}
              <span
                className="absolute top-7 right-7 text-white"
                style={{
                  ...monoF,
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {step.week}
              </span>

              {/* Italic serif number */}
              <span
                style={{
                  fontFamily: "var(--font-instrument), serif",
                  fontStyle: "italic",
                  fontSize: 56,
                  fontWeight: 400,
                  color: C.accent,
                  lineHeight: 1,
                }}
              >
                {step.num}
              </span>

              <h3
                className="text-white font-semibold text-[18px] lg:text-[19px]"
                style={{ ...headF, letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed font-poppins"
                style={{ color: C.textDim }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
