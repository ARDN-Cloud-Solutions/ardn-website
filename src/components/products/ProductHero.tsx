"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const innovations = [
  {
    title: "Ardn Innovations",
    description: "Manage your entire online store, from product listings to order fulfillment, directly within Salesforce.",
    href: "#ardn-innovations",
  },
  {
    title: "Upcoming Innovations",
    description: "Our upcoming product is designed to streamline employee time tracking and billing for more accurate results.",
    href: "#upcoming",
  },
  {
    title: "Suggest a New Product",
    description: "If you suggest a product we develop, you could qualify for free licensing and even royalties! Let's build something great together!",
    href: "#suggest",
  },
];

export default function ProductHero() {
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
    <section className="relative bg-white pt-2 md:pt-10 pb-10 md:pb-12 lg:pb-20">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 lg:gap-12 items-stretch min-h-[300px] lg:min-h-[650px]">
          {/* Left: Image with cut-out style matching branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="relative h-full aspect-[4/3] lg:aspect-auto overflow-hidden">
              <Image
                src="/images/product-hero.webp"
                alt="Product Team Collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:pl-10 lg:pt-10 pt-4 pb-32 md:pb-40 lg:pb-48 flex flex-col justify-start"
          >
            <motion.p
              variants={fadeIn}
              className="text-paragraph text-sm lg:text-[17px] leading-relaxed mb-6"
            >
              We believe in pushing boundaries. Whether you have a product idea to enhance Salesforce or need expert advice on optimizing your current system, we&apos;re here to help.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="text-[13px] font-medium uppercase tracking-[3.8px] text-paragraph mb-4"
            >
              OUR FEATURED PRODUCTS
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-heading font-medium leading-[1.2] mb-8"
            >Transform Your Salesforce <span className="text-heading-dark">with Ardn</span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Bottom Innovation Row - Overlapping Section */}
        <div className="relative z-20 -mt-30 md:-mt-36 lg:-mt-70 bg-white p-2 lg:p-8  lg:w-[85%] lg:ml-auto">
          {/* Horizontal Line across */}
          <div className="absolute top-[34px] md:top-[56px] lg:top-[50px] left-12 md:left-24 lg:left-10 right-12 md:right-24 lg:right-10 h-[1px] bg-slate-200 z-0 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative z-10">
            {innovations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col gap-6 group"
              >
                {/* Icon Node */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg relative z-10 group-hover:bg-secondary transition-colors duration-300">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-heading-dark leading-tight group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-paragraph text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="text-[#3ca2ff] font-semibold text-sm lg:text-base flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Explore More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
