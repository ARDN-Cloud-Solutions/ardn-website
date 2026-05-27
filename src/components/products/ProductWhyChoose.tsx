"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import TypingText from "@/components/ui/TypingText";
import Button from "../ui/Button";

interface Benefit {
  title?: string;
  description: string;
}

interface ProductWhyChooseProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  benefits?: Benefit[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function ProductWhyChoose({
  heading = "Seamless Integrations for",
  headingHighlight = "Maximum Efficiency",
  description,
  benefits = [],
  ctaLabel,
  ctaHref,
  imageSrc = "/images/placeholder-why-choose.webp",
  imageAlt = "Why choose us",
  className = "",
}: ProductWhyChooseProps) {
  return (
    <section className={className}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Heading + Description + Benefits + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <TypingText
              text={`${heading} <span class="text-heading">${headingHighlight}</span>`}
              as="h2"
              className="text-heading-dark font-semibold leading-tight"
            />

            {/* Description */}
            {description && (
              <p className="text-paragraph text-sm lg:text-[15px] leading-relaxed font-poppins">
                {description}
              </p>
            )}

            {/* Divider */}
            {benefits.length > 0 && (
              <div className="h-px bg-[#E5E7EB]" />
            )}

            {/* Benefits list */}
            {benefits.length > 0 && (
              <div className="flex flex-col gap-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full border border-[#DDDDE3] flex items-center justify-center shrink-0 mt-0.5 bg-[#DDDDE3]">
                      <Check size={13} className="text-paragraph" />
                    </div>
                    <p className="text-heading-dark text-sm lg:text-[17px] leading-relaxed">
                      {benefit.title && (
                        <strong className="text-heading-dark font-bold">
                          {benefit.title}:{" "}
                        </strong>
                      )}
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {ctaLabel && ctaHref && (
              <div className="pt-2">
                <Button
                  href={ctaHref}
                  size="lg"
                  variant="primary"
                >
                  {ctaLabel}
                </Button>
              </div>
            )}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
