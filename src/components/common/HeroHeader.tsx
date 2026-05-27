import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import React from "react";

interface HeroHeaderProps {
  eyebrow?: string;
  headingStart?: string;
  headingHighlight?: string;
  description?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroHeader({
  eyebrow,
  headingStart,
  headingHighlight,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: HeroHeaderProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeIn}
              className="text-[15px] font-normal uppercase tracking-[4.8px] text-primary mb-6"
            >
              {eyebrow}
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="font-semibold mb-6 text-heading-dark leading-tight"
            >
              {headingStart}{" "}
              <span className="text-heading">{headingHighlight}</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-base text-paragraph mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
            <hr className="border-t border-[#C7C9CA] mb-8" />

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                rounded="full"
                {...(ctaHref ? { href: ctaHref } : {})}
              >
                {ctaLabel}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <Image
              src={imageSrc || "/images/cloud-hero.webp"}
              alt={imageAlt || "Hero Illustration"}
              width={800}
              height={400}
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}