"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

interface GuideHeroProps {
  title: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function GuideHero({
  title,
  buttonText = "Getting Started with ARDN",
  buttonLink = "/contact-us",
}: GuideHeroProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[radial-gradient(at_bottom_center,_#717EFF_6%,_#1C2045_64%)]">
      <div className="container relative z-10">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="max-w-6xl"
        >
          <h1 className="font-semibold text-white mb-10 leading-[1.15] tracking-tight">
            {title}
          </h1>
          <Button 
            href={buttonLink} 
            variant="orange" 
            size="lg" 
            rounded="full"
            rightIcon={ArrowRight}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
