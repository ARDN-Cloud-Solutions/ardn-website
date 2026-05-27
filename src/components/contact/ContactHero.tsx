"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function ContactHero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative w-full h-[400px] lg:h-[400px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/contact-hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container relative z-10 text-white">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeIn}
            className="font-medium mb-2 text-white"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="font-medium text-white mb-4 max-w-2xl leading-relaxed opacity-90"
          >
            Reach out for more information on any of our products or to discuss your
            needs or ideas with one of our Salesforce professionals.
          </motion.p>

          <div className="relative flex items-center mb-8">
            <motion.div 
              variants={fadeIn}
              className="w-20 h-[3px] bg-white relative z-10" 
            />
            <motion.div 
              variants={fadeIn}
              className="w-[300px] md:w-[600px] h-[1px] bg-white/50 absolute left-0 bottom-0" 
            />
          </div>

          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4 text-sm md:text-base font-medium"
          >
            <Link 
              href="/" 
              className="hover:text-primary-light transition-colors"
            >
              Homepage
            </Link>
            <MoveRight size={18} className="text-white/60" />
            <span className="text-white/80">Contact Us</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
