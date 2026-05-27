"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import React from "react";

interface ProductDetailHeroProps {
  heading?: string;
  headingHighlight?: string;
  description?: React.ReactNode;
  tags?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function ProductDetailHero({
  heading = "All-in-One Ecommerce Solution For Salesforce",
  headingHighlight = "",
  description = "Sell products, subscriptions, automate pricing, recover abandoned carts, and process payments—all natively within Salesforce. Supports memberships, digital goods, and discounts.",
  tags = [],
  ctaLabel = "Talk to Us",
  ctaHref = "/contact-us",
  imageSrc = "/images/storefront-hero.webp",
  imageAlt = "Product Illustration",
  className = "",
}: ProductDetailHeroProps) {
  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-xl"
          >
            {/* Heading */}
            <motion.h1
              variants={fadeIn}
              className="font-semibold text-heading-dark leading-[1.15] mb-6"
            >
              {heading}{" "}
              {headingHighlight && (
                <span className="text-heading">{headingHighlight}</span>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="text-paragraph text-sm lg:text-[17px] leading-relaxed mb-6 max-w-lg"
              {...(typeof description === "string"
                ? { dangerouslySetInnerHTML: { __html: description } }
                : { children: description })}
            />

            {/* Feature tags */}
            {tags.length > 0 && (
              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-x-8 gap-y-3 mb-8"
              >
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-heading-dark flex-shrink-0" />
                    <span className="text-heading-dark text-sm lg:text-[17px] font-medium">
                      {tag}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA */}
            <motion.div variants={fadeIn}>
              <Button
                variant="primary"
                size="lg"
                rounded="full"
                href={ctaHref}
              >
                {ctaLabel}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
