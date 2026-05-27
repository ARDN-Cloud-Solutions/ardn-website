"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import React from "react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const defaultServices: ServiceItem[] = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 256 256" fill="#1c2045">
          <path d="M168,112a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,112Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm72-12A100.11,100.11,0,0,1,132,224H47.67A15.69,15.69,0,0,1,32,208.33V124a100,100,0,0,1,200,0Zm-16,0a84,84,0,0,0-168,0v84h84A84.09,84.09,0,0,0,216,124Z" />
        </svg>,
    title: "Innovative Product Offerings",
    description:
      "At Ardn, our product suite extends or simplifies Salesforce functionality, workflow, and integration.",
    href: "#",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1c2045" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>,
    title: "Strategy & Consulting",
    description:
      "Alternatives that can improve effectiveness or efficiency…whether it is our products or someone else's.",
    href: "#",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1c2045" viewBox="0 0 256 256"><path d="M34.76,42A8,8,0,0,0,32,48V216a8,8,0,0,0,16,0V171.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V48A8,8,0,0,0,210.76,42c-28,24.23-51.72,12.49-79.21-1.12C103.07,26.76,70.78,10.79,34.76,42ZM208,164.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V51.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path></svg>,
    title: "Implementation & Integration",
    description:
      "We can collaborate with your team, partners, or handle the implementation ourselves to ensure exceptional results.",
    href: "#",
  },
];

interface ServiceHighlightsProps {
  services?: ServiceItem[];
}

export default function ServiceHighlights({
  services = defaultServices,
}: ServiceHighlightsProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55 },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="bg-primary py-20">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -16, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex flex-col items-center text-center px-10 py-10 md:py-0"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0D1B3E] mb-7 shadow-md">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-[23px] font-medium mb-3">
                {service.title}
              </h3>

              {/* Divider */}
              <div
                className="w-[50%] h-[1px] mb-5"
                style={{ background: "linear-gradient(to right,  #393d5d 20%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%,  #393d5d 80%)" }}
              />

              {/* Description */}
              <p className="text-[#C4C4C4] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow link — only shown when href is provided */}
              {service.href && (
                <a
                  href={service.href}
                  className="mt-auto text-white transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <MoveRight size={28} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
