"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  eyebrow?: string;
  heading?: string;
  headingHighlight?: string;
  faqs?: FAQItem[];
  className?: string;
}

export default function ProductFAQ({
  eyebrow = "YOUR QUESTIONS ANSWERED",
  heading = "Frequently Asked Questions",
  headingHighlight = "About Storefronts",
  faqs = [],
  className = "",
}: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`bg-white ${className}`}>
      <div className="container">
        {/* Header — matches ProductCapabilities pattern */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
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
          <h2 className="text-heading-dark font-semibold leading-tight mb-6">
            <span className="text-heading">{heading}</span> {headingHighlight}
          </h2>

          {/* Two-tone divider */}
          <div className="w-64 h-[1px] bg-gray-200 relative flex items-center justify-center">
            <div className="w-24 h-[3px] bg-heading-dark"></div>
          </div>
        </div>

        {/* FAQ Accordion */}
        {faqs.length > 0 && (
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-[#F5F5F5]"
              >
                {/* Question toggle */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 lg:px-7 py-4 lg:py-5 text-left cursor-pointer"
                >
                  <span
                    className={`text-base lg:text-[18px] leading-snug transition-colors ${openIndex === index
                        ? "font-semibold text-heading-dark"
                        : "font-normal text-heading-dark"
                      }`}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-heading-dark">
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {/* Answer body */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 lg:px-7 pb-4 lg:pb-5">
                        <p className="text-heading text-sm lg:text-[15px] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
