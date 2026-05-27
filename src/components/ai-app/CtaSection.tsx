"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { C, headF, SectionLabel } from "./shared";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative z-10 pb-24 lg:pb-28 text-center"
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 60%, rgba(129,140,248,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center mb-8"
        >
          <SectionLabel>START HERE</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06 }}
          style={{ ...headF, lineHeight: 1.02, letterSpacing: "-0.035em" }}
          className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 mx-auto max-w-3xl"
        >
          Stop evaluating AI tools.
          <br />
          <span style={{ color: C.accent }}>Ship an AI app.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="text-[17px] lg:text-[18px] leading-relaxed max-w-[540px] mx-auto mb-12 font-poppins"
          style={{ color: C.textDim }}
        >
          Book a 30-minute discovery call. We&apos;ll map your
          highest-leverage AI opportunity and give you a fixed quote within 48
          hours. No deck, no upsell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button variant="white" size="lg" rounded="full" href="/contact-us">
            Book a discovery call
          </Button>
          <Button
            variant="glass"
            size="lg"
            rounded="full"
            href="mailto:contactus@ardncloudsolutions.com"
            external
          >
            Email us directly →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
