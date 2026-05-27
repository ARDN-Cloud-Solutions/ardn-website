"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { C, monoF } from "./shared";
import { ArrowRightIcon } from "lucide-react";

const stats = [
  { num: "2–6", accent: " weeks", label: "FROM SPEC TO PRODUCTION" },
  { num: "3 ", accent: "tiers", label: "SMALL · MEDIUM · LARGE" },
  { num: "1 ", accent: "bill", label: "EVERYTHING INCLUDED" },
];

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-32 lg:pt-60">
      <div className="container">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-[7px] rounded-full border mb-8 select-none"
          style={{
            background: C.surface,
            borderColor: C.borderStrong,
            ...monoF,
            fontSize: 11,
            letterSpacing: "0.06em",
            color: C.textDim,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{
              background: C.accent,
              boxShadow: `0 0 10px ${C.accent}`,
              animation: "acs-pulse 2s infinite",
            }}
          />
          SYSTEM ONLINE — ACCEPTING NEW CLIENTS
        </motion.div>

        {/* Headline — matches HeroHeader h1 pattern */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-semibold leading-tight mb-6 text-white max-w-[900px]"
        >
          The AI app your business needs.{" "}
          <span style={{ color: C.accent }}>
            Built in weeks. Run by us. Forever.
          </span>
        </motion.h1>

        {/* Description — matches HeroHeader paragraph pattern */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-base leading-relaxed max-w-[620px] mb-8 font-poppins text-white"
        >
          We build custom AI applications to your exact specifications, then
          operate them as a monthly service — hosting, maintenance, AI compute,
          support, and ongoing feature work. One predictable bill. Zero in-house engineering required.
        </motion.p>

        {/* CTA buttons — matches HeroHeader flex pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Button
            variant="white"
            size="lg"
            rounded="full"
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See pricing
          </Button>
          <Button variant="glass" size="lg" rightIcon={<ArrowRightIcon />} rounded="full" href="/contact-us">
            Book a discovery call
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`px-4 py-6 sm:px-6 sm:py-8${i < stats.length - 1 ? " border-b sm:border-b-0 sm:border-r" : ""}`}
              style={{ borderColor: C.border }}
            >
              <p className="text-3xl sm:text-4xl font-semibold leading-none mb-2 text-white">
                {s.num}
                <span style={{ color: C.accent }}>{s.accent}</span>
              </p>
              <p
                className="text-[11px] uppercase font-poppins"
                style={{ ...monoF, color: C.textDim, letterSpacing: "0.1em" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

