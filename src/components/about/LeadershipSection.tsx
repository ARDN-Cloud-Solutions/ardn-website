"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import TypingText from "@/components/ui/TypingText";
import Link from "next/link";

const members = [
  {
    name: "Deep Patel",
    role: "Partner at Ardn Cloud Solutions",
    image: "/images/deep-patel.webp",
    linkedin: "https://www.linkedin.com/in/deep-patel-25043526/",
  },
  {
    name: "Jaimin Patel",
    role: "Partner at Ardn Cloud Solutions",
    image: "/images/jaimin-patel.webp",
    linkedin: "https://www.linkedin.com/in/jaiminp314/",
  },
  {
    name: "Dan Brennan",
    role: "Executive Advisor at Ardn Cloud Solutions",
    image: "/images/Dan-Brennan.webp",
    linkedin: "https://www.linkedin.com/in/dan-brennan-192a0611/",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[13px] font-medium uppercase tracking-[4px] text-paragraph mb-3"
          >
            Our Leadership Members
          </motion.p>

          <TypingText
            text={`Guiding Minds, <span class="text-heading">Driving Innovations</span>`}
            as="h2"
            className="text-heading-dark font-semibold leading-tight mb-4"
          />

          <p className="text-paragraph text-sm lg:text-[17px] leading-relaxed mb-6">
            Our core principle was to invest in people, communities, and the
            success of our clients
          </p>
          <div className="w-64 h-[1px] bg-gray-200 relative flex items-center justify-center">
            <div className="w-24 h-[3px] bg-heading-dark"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              {/* Image wrapper */}
              <div className="relative w-full aspect-[4/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* LinkedIn badge — visible on hover */}
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                >
                  <Linkedin className="w-4 h-4 text-heading " />
                </Link>
              </div>

              {/* Info */}
              <div className="text-center">
                <h5 className="text-heading-dark font-semibold">{member.name}</h5>
                <p className="text-paragraph text-base lg:text-lg mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
