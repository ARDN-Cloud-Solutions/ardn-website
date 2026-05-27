"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import TypingText from "@/components/ui/TypingText";

export interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
}

interface ClientTestimonialsProps {
  heading?: string;
  headingHighlight?: string;
  image?: string;
  imageAlt?: string;
  statValue?: string;
  statLabel?: string;
  testimonials?: Testimonial[];
}


const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, transition: { duration: 0.25 } }),
};

export default function ClientTestimonials({
  heading = "What",
  headingHighlight = "Our Clients",
  image = "/images/ardn-our-clients.webp",
  imageAlt = "Happy clients",
  statValue = "100%",
  statLabel = "Happy Customers & committed to keeping it that way",
  testimonials = [],
  className = "pt-20 pb-30",
}: ClientTestimonialsProps & { className?: string }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className={`${className} bg-white`}>
      <div className="container">
        {/* Heading */}
        <TypingText text={`${heading} <span class="text-heading">${headingHighlight}</span> Are Saying`} as="h2" className="text-center font-semibold text-heading-dark mb-14" />
       

        <div className="grid md:grid-cols-[35%_62%] gap-10 items-stretch">
          {/* Left: image + stat overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col"
          >
            {/* Image */}
            <div className="relative flex-1 min-h-[340px] overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Stat — overlaps bottom of image via negative margin, stays in flow */}
            <div className="-mt-[100px] relative z-10 bg-[#121C2761] backdrop-blur-sm p-12 max-w-[280px]">
              <p className="text-white text-5xl font-bold mb-2">{statValue}</p>
              <p className="text-white text-xs font-semibold uppercase tracking-widest leading-relaxed">
                {statLabel}
              </p>
            </div>
          </motion.div>

          {/* Right: testimonial carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-gray-200 flex flex-col justify-between p-8 lg:p-20 pb-[80px] lg:pb-[80px]"
          >
            <div className="overflow-hidden min-h-[700px] md:min-h-[600px] xl:min-h-[420px] relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col border border-[#D3D5D6] sm:px-12 px-5 py-14 absolute inset-0"
              >
                {/* Avatar + quote icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-heading-dark flex items-center justify-center flex-shrink-0">
                    <Quote size={16} className="text-white fill-white" />
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-8 flex-1">
                  <p className="text-paragraph leading-relaxed">
                    &ldquo; {t.quote} &rdquo;
                  </p>
                </div>

                <hr className="border-t border-[#C7C9CA] mb-6" />

                {/* Author + stars */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-heading-dark">{t.name}</p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-heading-dark fill-heading-dark"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-paragraph">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-end gap-3 mt-20">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="w-18 h-18 rounded-full hover:bg-btn-primary hover:text-white border border-gray-300 flex items-center justify-center text-heading-dark transition-colors"
              >
                <ArrowLeft size={28} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="w-18 h-18 rounded-full hover:bg-btn-primary hover:text-white border border-gray-300 flex items-center justify-center text-heading-dark transition-colors"
              >
                <ArrowRight size={28} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
