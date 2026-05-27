"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const features = [
  {
    id: "innovative",
    title: "Innovative Product Line",
    description:
      "Our products are designed to extend Salesforce functionality. Tools like Salesforce Storefront and Billing Connector streamline operations, enhance customer experiences, and allow you to focus on what matters: growing your business.",
    highlight: false,
  },
  {
    id: "consulting",
    title: "Expert Consulting & Strategy",
    description:
      "Leveraging deep Salesforce expertise, our team offers clear, actionable strategies to help you achieve more impact without overextending resources. Whether it's consulting on current systems or proposing new ones, we're dedicated to helping you find the right solutions for your business.",
    highlight: true,
  },
  {
    id: "implementation",
    title: "Seamless Implementation",
    description:
      "We're with you at every stage—from consultation through to integration and beyond. Our collaborative approach ensures that every solution we implement is tailored to your needs, fitting seamlessly within your existing processes.",
    highlight: false,
  },
];

export default function InnovatingSalesforceSection() {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#0D1340" }}>
      <div className="container">
        {/* Heading */}
        <motion.h2
          {...fadeUp(0)}
          className="text-white font-semibold text-center mb-12 lg:mb-16"
        >
          Innovating Salesforce with Purpose
        </motion.h2>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
          {/* ─── Row 1 ─── */}

          {/* Cell 1: Image */}
          <motion.div {...fadeUp(0.05)} className="relative overflow-hidden min-h-[240px] md:min-h-[280px]">
            <Image
              src="/images/business-people-using-laptop-at-meeting-in-office.webp"
              alt="People collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Cell 2: Innovative Product Line text */}
          <motion.div
            {...fadeUp(0.1)}
            className="p-4 lg:p-8 flex flex-col justify-center gap-4"
          >
            <h3 className="text-white font-semibold leading-snug">
              {features[0].title}
            </h3>
            <p className="text-white/90 text-sm lg:text-[15px] leading-relaxed">
              {features[0].description}
            </p>
          </motion.div>

          {/* Cell 3: Image */}
          <motion.div {...fadeUp(0.15)} className="relative overflow-hidden min-h-[240px] md:min-h-[280px]">
            <Image
              src="/images/group-of-happy-business-people.webp"
              alt="Happy business people"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* ─── Row 2 ─── */}

          {/* Cell 4: Expert Consulting text */}
          <motion.div
            {...fadeUp(0.2)}
            className="p-8 flex flex-col justify-center gap-4"
          >
            <h3 className="text-white font-semibold leading-snug">
              {features[1].title}
            </h3>
            <p className="text-white/90 text-sm lg:text-[15px] leading-relaxed">
              {features[1].description}
            </p>
          </motion.div>

          {/* Cell 5: Image */}
          <motion.div {...fadeUp(0.25)} className="relative overflow-hidden min-h-[240px] md:min-h-[280px]">
            <Image
              src="/images/PeopleImages.webp"
              alt="Business meeting with laptop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Cell 6: Seamless Implementation text */}
          <motion.div
            {...fadeUp(0.3)}
            className="p-8 flex flex-col justify-center gap-4"
          >
            <h3 className="text-white font-semibold leading-snug">
              {features[2].title}
            </h3>
            <p className="text-white/90 text-sm lg:text-[15px] leading-relaxed">
              {features[2].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
