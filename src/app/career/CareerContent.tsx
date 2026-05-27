"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─── Data ───────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.735 412.735" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M295.706,35.522c-34.43-0.184-67.161,14.937-89.339,41.273c-22.039-26.516-54.861-41.68-89.339-41.273C52.395,35.522,0,87.917,0,152.55C0,263.31,193.306,371.456,201.143,375.636c3.162,2.113,7.286,2.113,10.449,0c7.837-4.18,201.143-110.759,201.143-223.086C412.735,87.917,360.339,35.522,295.706,35.522zM206.367,354.738C176.065,336.975,20.898,242.412,20.898,152.55c0-53.091,43.039-96.131,96.131-96.131c32.512-0.427,62.938,15.972,80.457,43.363c3.557,4.905,10.418,5.998,15.323,2.44c0.937-0.68,1.761-1.503,2.44-2.44c29.055-44.435,88.631-56.903,133.066-27.848c27.202,17.787,43.575,48.114,43.521,80.615C391.837,243.456,236.669,337.497,206.367,354.738z"/>
      </svg>
    ),
    title: "Innovate with Impact",
    description:
      "Be a part of creating cutting-edge solutions that solve real challenges for medium to large businesses across industries. At Ardn, your work has a direct impact on our clients' success and their transformation journeys.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"/>
      </svg>
    ),
    title: "Career Growth and Development",
    description:
      "Your career journey matters to us. We're committed to helping you achieve your professional goals through personalized growth pathways, training, and mentorship from industry experts.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z"/>
      </svg>
    ),
    title: "Collaborative and Inclusive Culture",
    description:
      "Join a dynamic team where your voice is valued. Our inclusive culture encourages fresh ideas and teamwork, creating a space where innovation thrives and everyone contributes to shared success.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM216,208H192V184a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v24H40V128H216Z"/>
      </svg>
    ),
    title: "Meaningful Work",
    description:
      "Drive meaningful change in technology as part of a team dedicated to helping businesses save costs, boost productivity, and reach new heights with Salesforce-driven solutions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm90.88,155.92-54.56-92.08A15.87,15.87,0,0,0,186.55,96h0a15.85,15.85,0,0,0-13.76,7.84L146.63,148l-44.84-76.1a16,16,0,0,0-27.58,0L1.11,195.94A8,8,0,0,0,8,208H248a8,8,0,0,0,6.88-12.08ZM88,80l23.57,40H64.43ZM22,192l33-56h66l18.74,31.8L154,192Zm150.57,0-16.66-28.28L186.55,112,234,192Z"/>
      </svg>
    ),
    title: "Flexibility and Balance",
    description:
      "We support work-life balance through flexible work options that allow you to excel in your role without sacrificing your personal life.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-6 h-6 lg:w-8 lg:h-8" fill="white">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"/>
      </svg>
    ),
    title: "Cutting-Edge Technology",
    description:
      "At Ardn, we invest in advanced resources that empower you to innovate, streamline processes, and stay at the forefront of digital transformation.",
  },
];

const openings: {
  title: string;
  description: string;
  location?: string;
}[] = [
  {
    title: "AI Claude Specialist",
    location: "Remote · Open to Nearshore",
    description:
      "We are looking for an AI Claude Specialist to design, build, and optimize AI-powered solutions on top of Anthropic's Claude models. You'll craft and refine prompts, build agentic workflows and tool integrations, and embed Claude across our products — including AI Forge and ReplyCX — as well as our clients' Salesforce environments. The ideal candidate has hands-on experience with large language models and the Claude API, strong prompt-engineering skills, familiarity with retrieval-augmented generation (RAG) and agent frameworks, and a track record of shipping reliable, production-grade AI features. Experience integrating LLMs with CRM platforms such as Salesforce is a strong plus.",
  },
  {
    title: "Salesforce UI Expert",
    description:
      "We are seeking a skilled and innovative Salesforce UI Expert to join our team. The ideal candidate will specialize in designing and developing intuitive, user-friendly interfaces within the Salesforce platform, ensuring seamless interaction and functionality for our users.",
  },
  {
    title: "Salesforce Technical Lead",
    description:
      "Our client is a leading provider of enterprise solutions, and they are seeking an experienced Salesforce Technical Lead to join their team. The successful candidate will be responsible for leading the technical design, development, testing, and implementation of Salesforce-based solutions. The ideal candidate will have extensive experience in Salesforce development and architecture, including customizations, configurations, and integrations. They will have strong leadership and communication skills, as well as a track record of delivering high-quality solutions on time and within budget.",
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-5 group"
    >
      <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center">
        <span className="group-hover:animate-bounce inline-flex">
          {icon}
        </span>
      </div>
      <div>
        <h6 className="!font-semibold text-heading-dark mb-2">{title}</h6>
        <p className="text-paragraph text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function JobAccordion({
  title,
  description,
  location,
  isOpen,
  onToggle,
}: {
  title: string;
  description: string;
  location?: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-primary text-white text-left cursor-pointer transition-colors hover:bg-primary/90"
      >
        <span className="flex flex-col">
          <span className="font-semibold text-[17px]">{title}</span>
          {location && (
            <span className="text-[13px] font-normal text-white/80 mt-0.5">
              {location}
            </span>
          )}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-[#E9EAEA]"
          >
            <div className="px-6 py-6">
              <h6 className="!font-semibold text-heading-dark mb-3">
                About the Role
              </h6>
              <p className="text-paragraph text-[15px] leading-relaxed mb-5">
                {description}
              </p>
              <Button variant="primary" size="md" href="/contact-us">
                Apply Job Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function CareerContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <div
      className="flex flex-col min-h-screen bg-white"
      style={{ overflowX: "clip" }}
    >
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-10 lg:pt-60 lg:pb-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.h1
                variants={fadeIn}
                className="font-medium mb-6 text-heading-dark leading-[1.1]"
              >
                Join Ardn Cloud Solutions –{" "}
                <span className="text-heading">
                  Where Innovation Meets Impact
                </span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-paragraph text-base text-[18px] leading-relaxed"
              >
                At Ardn, we&apos;re building a team of forward-thinking
                individuals who are passionate about creating Salesforce
                solutions that redefine business efficiency and scalability. If
                you&apos;re looking to advance your career in a place that values
                innovation, collaboration, and meaningful work, explore the
                opportunities with us.
              </motion.p>
            </motion.div>

            {/* Circular CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex itms-center justify-center"
            >
              <a
                href="#openings"
                className="w-40 lg:w-60 h-40 lg:h-60 rounded-full bg-primary flex flex-col items-center justify-center text-white hover:bg-[#3ca2ff] transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" id="carton_box" height="44" viewBox="0 0 98 98" width="44" fill="white" data-name="carton box"><path d="m81.1 55.5v17.2c0 .4-.2.7-.6.9l-30.5 14.1v-31.8l10.2 8.4c.5.4 1.2.7 1.9.7s1-.1 1.4-.3l17.5-9.1zm-43.3 8.8c-.5.4-1.2.7-1.9.7s-1-.1-1.4-.3l-17.5-9.1v17.2c0 .4.2.7.6.9l30.5 14.1v-31.8l-10.2 8.4zm55.2-17.8c0 .3-.2.6-.5.8l-29.9 15.5c-.1 0-.3.1-.5.1s-.5 0-.6-.2l-12.5-10.2-12.5 10.2c-.2.1-.4.2-.6.2s-.3 0-.5-.1l-29.9-15.5c-.3-.2-.5-.5-.5-.8s.1-.7.4-.9l11.1-8.9-10-10c-.2-.2-.3-.6-.3-.9s.3-.6.6-.7l31.1-14.3c.4-.2.8 0 1.1.2l10 10 10-10c.3-.3.7-.4 1.1-.2l31.1 14.3c.3.1.5.4.6.7 0 .3 0 .7-.3.9l-10 10 11.1 8.9c.3.2.4.5.4.9zm-15.3-9.7-28.7-13.2-28.7 13.2 28.7 13.2z"></path></svg>
                <span className="text-sm font-semibold text-center leading-tight">
                  View Open Positions
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY WORK WITH ARDN
      ═══════════════════════════════════════════ */}
      <section className="pt-10 lg:pt-12 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-heading-dark font-medium leading-[1.1]">
              Why <span className="text-heading">Work</span> with Ardn?
            </h2>
            <hr className="w-full border-t border-heading-dark mx-auto mt-6" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CURRENT OPENINGS
      ═══════════════════════════════════════════ */}
      <section id="openings" className="py-16 lg:py-24 bg-white scroll-mt-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-heading-dark font-medium leading-[1.1]">
              Current <span className="text-heading">Openings</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-paragraph text-base lg:text-lg max-w-4xl mx-auto mb-12"
          >
            Explore our open positions and find the one that matches your skills
            and interests. Whether you&apos;re an experienced professional or
            just starting out, Ardn offers roles across multiple disciplines.
          </motion.p>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {openings.map((job, index) => (
              <JobAccordion
                key={job.title}
                title={job.title}
                description={job.description}
                location={job.location}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {/* LinkedIn callout */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-paragraph mt-12"
          >
            We are always on the lookout for talented folk to join our team.{" "}
            <Link
              href="https://www.linkedin.com/company/ardn-cloud-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-heading-dark hover:text-heading transition-colors"
            >
              Follow us on LinkedIn
            </Link>
            !
          </motion.p>
        </div>
      </section>
    </div>
  );
}
