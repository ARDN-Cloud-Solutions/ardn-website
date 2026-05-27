"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const marqueeItems = [
  "Elite Business Coaching That Turns Hard-Earned Success Into Predictable Growth",
  "Unlock Your Company's True Potential",
  "Scale Their Companies Faster With Our System",
];

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutArdnHero() {
  return (
    <section className="w-full overflow-hidden">

      {/* ── 1. Full-width top banner image ── */}
      <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[420px] mt-[60px] lg:mt-[100px]">
        <Image
          src="/images/about-ardn-hero.webp"
          alt="Ardn Cloud Solutions team collaborating in a business meeting"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── 2. Two-column section below the image ── */}
      <div className="grid md:grid-cols-[50%_50%] lg:grid-cols-[55%_45%] bg-[#F3F3F3]">

        {/* LEFT: white bg — headline + paragraph */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="flex flex-col justify-center
                     px-6 sm:px-8 lg:px-16 xl:px-20
                     pt-12 lg:pt-16 pb-8 lg:pb-12"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading font-medium leading-[1.12] mb-6"
          >
            Your Partner in Transforming <span className="text-heading-dark">Salesforce for Efficiency and Impact</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-paragraph text-[15px] lg:text-[16px] leading-relaxed max-w-[480px]"
          >
            At Ardn Cloud Solutions, we believe in making Salesforce a more
            powerful, flexible, and cost-effective tool for your business. We
            create Salesforce solutions that not only maximize your investment
            but also make it easier for you to scale, simplify, and innovate
            without overextending your budget.
          </motion.p>
        </motion.div>

        {/* RIGHT: light gray bg — card floats up to overlap the banner image */}
        <div className="flex items-start
                        px-6 sm:px-8 lg:px-12 xl:px-16
                        pb-8 lg:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-10 bg-white shadow-xl
                       px-6 md:px-8 lg:px-8 py-6 md:py-12 lg:py-16 w-full max-w-[500px]
                       mt-4 lg:-mt-20"
          >
            {/* Card header */}
            <div className="mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 512 512"><path d="m427.1 84.9c-45.7-45.7-106.5-70.9-171.1-70.9s-125.4 25.2-171.1 70.9-70.9 106.5-70.9 171.1 25.2 125.4 70.9 171.1 106.5 70.9 171.1 70.9 125.4-25.2 171.1-70.9 70.9-106.5 70.9-171.1-25.2-125.4-70.9-171.1zm-339.4 339.4c-44.9-45-69.7-104.7-69.7-168.3s24.8-123.3 69.7-168.3c33.3-33.3 74.7-55.5 119.7-64.8-29.3 11.1-56.2 32.2-78.3 62.2-33.7 45.7-52.3 106.4-52.3 170.9s18.6 125.2 52.3 170.9c22.1 29.9 49 51.1 78.3 62.2-45-9.3-86.4-31.5-119.7-64.8zm-6.9-168.3c0-122.3 68.3-223.4 155.8-236.5-17.1 9.7-32.7 32.4-45.1 66.1-16.8 45.5-26.1 106.1-26.1 170.4s9.3 124.9 26.1 170.4c12.4 33.7 28 56.4 45.1 66.1-87.5-13.1-155.8-114.2-155.8-236.5zm173.2 238c-22-1.4-42.8-25.7-58.8-68.9-16.7-45.1-25.8-105.1-25.8-169s9.2-123.9 25.8-169c16-43.3 36.8-67.6 58.8-69z"></path></svg>
              </div>
              <h2 className="font-heading font-semibold leading-tight">
                <span className="text-heading-dark">The Ardn </span>
                <span className="text-heading">Approach</span>
              </h2>
            </div>

            {/* Card body */}
            <p className="text-paragraph text-sm lg:text-[15px] leading-relaxed mb-5">
              We believe in pushing boundaries. Our team approaches each project
              with a critical eye, focusing on high-value impact and cost
              efficiency. Whether enhancing existing Salesforce functions or
              implementing new systems, we&apos;re committed to delivering
              measurable results that drive growth.
            </p>

            {/* Checkmark list */}
            <ul className="space-y-2.5">
              {[
                "30+ years of Salesforce innovation experience",
                "100% customer-focused solutions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm lg:text-[15px] text-paragraph"
                >
                  <Check size={16} className="text-heading flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>

      {/* ── 3. Marquee ticker strip ── */}
      <div className="w-full overflow-hidden bg-[#F5F5F5] pt-2 pb-4 lg:pb-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 text-heading-dark font-medium text-base lg:text-[20px] mx-3"
            >
              {item}
              <span className="text-[#C7C9CA] text-lg">•</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
