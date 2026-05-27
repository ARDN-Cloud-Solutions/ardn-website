"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import TypingText from "@/components/ui/TypingText";
import Button from "@/components/ui/Button";

interface ValueCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface ProductValuePropsProps {
  heading: string;
  headingHighlight: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  rightHeading?: string;
  cards: ValueCard[];
  className?: string;
  eyebrow?: string;
  sectionHeading?: string;
  sectionHeadingHighlight?: string;
  sectionDescription?: string;
}

export default function ProductValueProps({
  heading,
  headingHighlight,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt = "",
  rightHeading,
  cards,
  className = "",
  eyebrow,
  sectionHeading,
  sectionHeadingHighlight,
  sectionDescription,
}: ProductValuePropsProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55 },
  };

  return (
    <section className={className}>
      <div className="container">

        <div className="grid lg:grid-cols-[45%_50%] gap-10 lg:gap-[5%] items-start">
          {/* Left — Sticky column */}
          <div className="lg:sticky lg:top-[10px]">
            <motion.div {...fadeIn} className="flex flex-col">
              {/* Heading */}
              <TypingText
                text={`${heading} <span class="text-heading">${headingHighlight}</span>`}
                as="h2"
                className="text-heading-dark font-semibold leading-tight mb-4"
              />

              <div className="relative flex items-center mb-8">
                <motion.div
                  variants={fadeIn}
                  className="w-20 h-[3px] bg-primary relative z-10"
                />
                <motion.div
                  variants={fadeIn}
                  className="w-40 md:w-60 h-[1px] bg-primary/50 absolute left-0 bottom-0"
                />
              </div>

              {/* Description */}
              <p className="text-paragraph text-base lg:text-[20px] leading-relaxed mb-8 max-w-xl">
                {description}
              </p>

              {/* CTA Button */}
              {ctaLabel && (
                <div className="mb-10 lg:mb-14">
                  <Button
                    variant="primary"
                    size="lg"
                    rounded="full"
                    href={ctaHref}
                  >
                    {ctaLabel}
                  </Button>
                </div>
              )}

              {/* Device/Image */}
              {imageSrc && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  {/* Decorative arrow image */}
                  <motion.div
                    className="absolute -top-28 right-4 w-40 h-40 hidden lg:block z-20"
                    animate={{ y: [0, -10, 0], x: [0, 2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/mv6.webp"
                      alt="arrow decorative"
                      fill
                      className="object-contain scale-y-[-1]"
                    />
                  </motion.div>

                  <div className="relative bg-white rounded-lg shadow-xl border-6 border-[#E6E6E6] overflow-hidden p-4">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right — Scrollable cards */}
          <div className="flex flex-col">
            {/* Right heading */}
            {rightHeading && (
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-semibold text-heading-dark leading-tight mb-8"
              >
                {rightHeading}
              </motion.h3>
            )}

            {/* Feature cards */}
            {cards.length > 0 && (
              <div className="flex flex-col gap-6">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="border border-[#E6E6E6] p-6 lg:p-12 group hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  >
                    {/* Icon */}
                    {card.icon && (
                      <div className="w-12 h-12 rounded-lg bg-[#F3F3F3] flex items-center justify-center text-heading-dark mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {card.icon}
                      </div>
                    )}

                    {/* Title */}
                    <h4 className="font-bold text-heading-dark text-lg lg:text-xl leading-tight mb-5">
                      {card.title}
                    </h4>
                    <div className="relative flex items-center mb-5">
                      <motion.div
                        variants={fadeIn}
                        className="w-full h-[1px] bg-primary/20 absolute left-0 bottom-0"
                      />
                    </div>
                    {/* Description */}
                    <p className="text-paragraph font-poppins text-sm lg:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Optional section header — eyebrow + heading + description */}
        {sectionHeading && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid lg:grid-cols-[30%_1fr] gap-6 lg:gap-16 items-start mt-12 lg:mt-20"
          >
            {/* Left — Eyebrow */}
            {eyebrow && (
              <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[3px] md:tracking-[4px] text-paragraph lg:pt-3">
                {eyebrow}
              </p>
            )}

            {/* Right — Heading + Description */}
            <div className={!eyebrow ? "lg:col-span-2" : ""}>
              <h2 className="text-heading-dark font-semibold leading-tight mb-4">
                {sectionHeading}{" "}
                {sectionHeadingHighlight && (
                  <span className="text-heading">{sectionHeadingHighlight}</span>
                )}
              </h2>
              {sectionDescription && (
                <p className="text-paragraph text-base lg:text-lg leading-relaxed">
                  {sectionDescription}
                </p>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
