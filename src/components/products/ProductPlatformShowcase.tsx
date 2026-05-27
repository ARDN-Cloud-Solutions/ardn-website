"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypingText from "@/components/ui/TypingText";
import useEmblaCarousel from "embla-carousel-react";
import Button from "../ui/Button";

interface ShowcaseStep {
  icon: string;
  title: string;
  description: string;
}

interface ProductPlatformShowcaseProps {
  heading?: string;
  headingHighlight?: string;
  description?: string;
  steps?: ShowcaseStep[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function ProductPlatformShowcase({
  heading,
  headingHighlight,
  description,
  steps = [],
  ctaLabel,
  ctaHref,
  className = "",
}: ProductPlatformShowcaseProps) {
  const [emblaRef] = useEmblaCarousel({ 
    align: "start", 
    loop: false,
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 1024px)": { active: false }
    }
  });

  // Reusable Step Card Component to keep consistency
  const StepCard = ({ step, index, isLast }: { step: ShowcaseStep; index: number; isLast: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col items-center text-center group h-full"
    >
      {/* Icon Container */}
      <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
        <div className="relative w-16 h-16 group-hover:scale-105 transition-transform duration-300">
          <Image
            src={step.icon}
            alt={step.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Step Number Circle & Connecting Line (Mobile/Tablet) */}
      <div className="relative mb-8 flex items-center justify-center w-full">
        {/* Line for Mobile/Tablet - hidden on desktop as desktop has its own line */}
        {!isLast && (
          <div className="lg:hidden absolute left-[50%] right-[-50%] h-[2px] bg-heading/20 top-1/2 -translate-y-1/2 -z-0" />
        )}
        
        <div className="w-12 h-12 rounded-full bg-[#2A2E4B] flex items-center justify-center text-white font-bold text-lg relative z-10">
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="px-2">
        <h5 className="font-semibold text-heading-dark mb-4 group-hover:text-heading transition-colors duration-300">
          {step.title}
        </h5>
        <p className="text-paragraph leading-relaxed text-[15px] max-w-[300px] mx-auto">
          {step.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className={className}>
      <div className="container px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <TypingText
            text={`${heading}${headingHighlight ? ` <span class="text-heading font-bold">${headingHighlight}</span>` : ""}`}
            as="h2"
            className="text-heading-dark font-semibold mb-4"
          />
          {description && (
            <p className="text-paragraph text-base lg:text-[20px] max-w-6xl mx-auto leading-relaxed mb-10">
              {description}
            </p>
          )}
        </motion.div>

        {/* Steps Visualization */}
        <div className="relative">
          {/* Horizontal Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[152px] left-[12%] right-[12%] h-[2px] bg-heading/20 -z-0" />

          {/* Embla / Grid Wrapper */}
          <div className="embla overflow-hidden lg:overflow-visible" ref={emblaRef}>
            <div 
              className="flex lg:grid gap-8 lg:gap-8 relative z-10"
              style={{ 
                gridTemplateColumns: steps.length > 0 ? `repeat(${steps.length}, minmax(0, 1fr))` : undefined
              }}
            >
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-1 px-4 lg:px-0 min-w-0"
                >
                  <StepCard 
                    step={step} 
                    index={index} 
                    isLast={index === steps.length - 1} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {(ctaLabel && ctaHref) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 lg:mt-12 text-center"
          >
            <Button
            href={ctaHref}
            size="lg"
            variant="primary"
            >
              {ctaLabel}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}


