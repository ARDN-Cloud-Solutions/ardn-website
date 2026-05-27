"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import TypingText from "../ui/TypingText";

interface FeatureItem {
  title: string;
  description?: string;
  highlights?: string[];
}

interface ProductFeatureOverviewProps {
  heading?: string;
  description?: string;
  items?: FeatureItem[];
  className?: string;
}

export default function ProductFeatureOverview({
  heading,
  description,
  items = [],
  className = "",
}: ProductFeatureOverviewProps) {
  const stagger = {
    animate: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const colClass =
    items.length === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={className}>
      <div className="container">
        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          {heading && (
            <TypingText
              text={heading}
              as="h3"
              className="text-white font-semibold leading-tight mb-4"
            />
          )}
          {description && (
            <p className="text-white text-sm lg:text-[17px] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        {/* Items grid */}
        {items.length > 0 && (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className={`grid ${colClass} gap-x-8 gap-y-12 lg:gap-x-12`}
          >
            {items.map((item, index) => {
              const hasHighlights = item.highlights && item.highlights.length > 0;
              
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`flex flex-col ${hasHighlights ? "items-start text-left" : "items-center text-center"} gap-4`}
                >
                  {/* Icon/Decoration - Only show check for non-highlight items */}
                  {!hasHighlights && (
                    <div className="w-12 h-12 rounded-full bg-[#3a4040] flex items-center justify-center shrink-0">
                      <Check size={20} className="text-white" />
                    </div>
                  )}

                  {/* Title */}
                  <h4 className={`text-white font-bold text-lg lg:text-xl leading-tight ${hasHighlights ? "w-full text-center mb-2" : ""}`}>
                    {item.title}
                  </h4>

                  {/* Description */}
                  {item.description && (
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Highlights List */}
                  {hasHighlights && (
                    <ul className="flex flex-col gap-6 mt-2">
                      {item.highlights?.map((highlight, hIndex) => {
                        // Support bold titles in highlights if separated by ":"
                        const hasColon = highlight.includes(":");
                        const [boldPart, rest] = hasColon ? highlight.split(/:(.*)/) : [null, highlight];
                        
                        return (
                          <li key={hIndex} className="flex items-start gap-3 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0 group-hover:bg-white transition-colors" />
                            <p className="text-white text-[14px] lg:text-[15px] leading-relaxed">
                              {boldPart ? (
                                <>
                                  <strong className="text-white font-semibold">{boldPart}:</strong>
                                  {rest}
                                </>
                              ) : (
                                highlight
                              )}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
