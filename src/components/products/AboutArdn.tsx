"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Button from "../ui/Button";

const accordionItems = [
  {
    id: "mission",
    title: "Mission Statement",
    content:
      '"To build cost-effective Salesforce products that empower businesses to simplify, scale, and succeed."',
  },
  {
    id: "vision",
    title: "Vision Statement",
    content:
      '"To be recognized as a trusted innovation partner in the Salesforce ecosystem, dedicated to redefining possibilities for efficiency and growth."',
  },
  {
    id: "approach",
    title: "The Ardn Approach",
    content:
      "We believe in pushing boundaries. Our team approaches each project with a critical eye, focusing on high-value impact and cost efficiency. Whether enhancing existing Salesforce functions or implementing new systems, we’re committed to delivering measurable results that drive growth.",
  },
];

export default function AboutArdn({ className = "" }: { className?: string }) {
  const [openId, setOpenId] = useState<string>("mission");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className={className}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <p className="text-[13px] font-medium uppercase tracking-[4px] text-white">
              About Ardn Cloud Solutions
            </p>

            {/* Heading */}
            <h2 className="text-white font-semibold leading-[1.1]">Ardn Cloud Solutions: Redefining What&apos;s Possible with Salesforce</h2>

            {/* Body */}
            <div className="flex flex-col gap-4 text-white text-sm lg:text-[15px] leading-relaxed">
              <p className="text-white/80">
                At Ardn Cloud Solutions, we&apos;re more than a Salesforce partner—we&apos;re innovators
                who look beyond conventional approaches to transform your Salesforce
                experience. From developing tailored solutions to implementing our own
                suite of products, we focus on driving efficiency, reducing costs, and
                expanding Salesforce&apos;s potential for your unique needs.
              </p>
              <p className="text-white/80">
                We take pride in our close-knit, agile team of experts who bring big
                ideas and a hands-on approach to every project.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                href="/our-products"
                size="lg"
                variant="white"
              >
                Explore All Ardn Products
              </Button>
              <Button
                href="https://calendly.com/ardncloudsolutions/prioritymeetings"
                size="lg"
                variant="white"
              >
                Request a Demo
              </Button>

            </div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col divide-y divide-white/20"
          >
            {accordionItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5">
                  {/* Trigger */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base lg:text-lg font-semibold transition-colors duration-200 ${isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-white transition-colors duration-200 group-hover:border-white">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {/* Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm lg:text-[15px] text-white/60 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
