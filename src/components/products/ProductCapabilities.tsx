"use client";

import { motion } from "framer-motion";
import React from "react";
import TypingText from "@/components/ui/TypingText";

interface CapabilityFeature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface ProductCapabilitiesProps {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  features?: CapabilityFeature[];
  className?: string;
}

export default function ProductCapabilities({
  eyebrow,
  heading = "Everything You Need to",
  headingHighlight = "Run Your Business",
  description,
  features = [],
  className = "",
}: ProductCapabilitiesProps) {
  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className={className}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 lg:mb-16">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[13px] font-medium uppercase tracking-[4px] text-paragraph mb-3"
            >
              {eyebrow}
            </motion.p>
          )}

          <TypingText
            text={`${heading} <span class="text-heading">${headingHighlight}</span>`}
            as="h3"
            className="text-heading-dark font-semibold leading-tight mb-4"
          />

          {description && (
            <>
            <p
              className="text-paragraph text-sm lg:text-[17px] leading-relaxed mb-6"
            >
              {description}
            </p>
          <div className="w-64 h-[1px] bg-gray-200 relative flex items-center justify-center">
            <div className="w-24 h-[3px] bg-heading-dark"></div>
          </div>
          </>
          )}
        </div>

        {/* Features grid */}
        {features.length > 0 && (
          <div className="border-l border-t border-[#E5E7EB]">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="border-r border-b border-[#E5E7EB] p-6 lg:p-8 flex flex-col gap-4 group"
                >
                  {/* Icon + Number row */}
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 lg:w-18 lg:h-18 rounded-2xl bg-[#F0F0F0] flex items-center justify-center text-heading-dark group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-[#ABABAB] text-sm font-medium mt-1">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#E5E7EB]" />

                  {/* Title */}
                  <h4 className="font-bold text-heading-dark text-lg leading-tight">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-paragraph text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
