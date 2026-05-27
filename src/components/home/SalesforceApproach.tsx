"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Minus, Plus, MoveRight } from "lucide-react";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";

interface AccordionItem {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

interface Tab {
  label: string;
  panelHeading: string;
  layout?: "image-accordion" | "full-accordion" | "suggest";
  singleOpen?: boolean;
  image?: string;
  imageAlt?: string;
  panelDescription?: string;
  panelSubheading?: string;
  panelCtaLabel?: string;
  panelCtaHref?: string;
  items: AccordionItem[];
}

const defaultTabs: Tab[] = [
  {
    label: "Ardn Innovations",
    panelHeading: "Cost-Effective Salesforce Solutions",
    image: "/images/ardncloudsolutions-Ardn-Innovations.webp",
    imageAlt: "Ardn Innovations",
    items: [
      {
        title: "Storefronts: Setup and run your stores without ever leaving Salesforce",
        description:
          "Now you can seamlessly run your business from prospects to payments, simplifying your operations and dramatically improving your customer experience.",
        ctaLabel: "Explore Now",
        ctaHref: "/storefronts",
      },
      {
        title: "Salesforce Payments: Seamlessly transition salespeople or customers from buying to paying.",
        description:
          "Process payments online or in store with a few clicks, without ever leaving Salesforce.",
        ctaLabel: "Explore Now",
        ctaHref: "/salesforce-payments",
      },
      {
        title: "License Guard : Automate License Control, Built for Salesforce.",
        description:
          "License Guard monitors user logins and activity to identify inactive accounts, allowing organizations to deactivate or reassign licenses. This feature helps reduce unnecessary licensing costs and ensures that all licenses are used efficiently.",
        ctaLabel: "Explore Now",
        ctaHref: "/license-guard",
      },
    ],
  },
  {
    label: "Upcoming Innovations",
    panelHeading: "New Solutions on the Horizon",
    singleOpen: true,
    image: "/images/ardncloudsolutions-Upcoming-Innovations.webp",
    imageAlt: "Upcoming Innovations",
    items: [
      {
        title: "Salesforce FlexiStore: Expand Your Storage, Cut Costs",
        description:
          "FlexiStore provides integration with major file storage providers like Amazon S3, Google Drive, and Box. This feature enables flexible file storage management and helps in reducing storage costs by leveraging multiple providers.",
      },
      {
        title: "Salesforce StageGuard: Enforce Process Compliance with Record Locking",
        description:
          "StageGuard locks records in Salesforce based on custom criteria, ensuring users follow the required sequence in processes like the Opportunity sales path.",
      },
      {
        title: "FlowForward: Modernize Automation, Reduce Training Needs",
        description:
          "FlowForward assists administrators in converting older Workflows and Process Builders to more advanced Flows and Apex, modernizing automation and reducing the need for extensive training on outdated systems.",
      },
      {
        title: "KnowledgeBuilder: Create In-Context Help for Better Self-Service",
        description:
          "KnowledgeBuilder allows the creation of FAQ-style help documents and Knowledge Articles that can be embedded in Salesforce Lightning Record Pages. This feature offers users accessible, in-context support to improve self-service capabilities.",
      },
      {
        title: "PageAlert: Timely Notifications for Better Engagement",
        description:
          "PageAlert provides customizable, time-based alerts and banners on Lightning Record Pages, enabling administrators to communicate important updates and reminders effectively within Salesforce.",
      },
    ],
  },
  {
    label: "Suggest a New Product",
    layout: "suggest",
    panelHeading: "Shape the Future of Salesforce Products",
    panelDescription:
      "Help us build the next Salesforce innovation. If you suggest a product we develop, you could qualify for free licensing and even royalties. Let's build something great together!",
    panelSubheading: "How It Works",
    image: "/images/ardn-Maximum-Business-Impact.webp",
    imageAlt: "Suggest a New Product",
    panelCtaLabel: "Submit Your Idea",
    panelCtaHref: "/our-products",
    items: [
      {
        title: "Submit Your Idea",
        description:
          "Complete the form to provide details about your concept for a Salesforce product or solution. Share the problem it solves and any specific goals or features you envision.",
      },
      {
        title: "Receive Our Feedback",
        description:
          "Our team will reach out to review your submission, answer questions, and schedule a call to discuss your idea in detail.",
      },
      {
        title: "Feasibility & Development",
        description:
          "We'll explore the feasibility of your concept. If it's a fit, we'll dive into development, keeping you updated as we bring your idea to life.",
      },
    ],
  },
];

interface SalesforceApproachProps {
  eyebrow?: string;
  headingStart?: string;
  headingHighlight?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  tabs?: Tab[];
}

export default function SalesforceApproach({
  eyebrow = "Learn More About Our Approach",
  headingStart = "Optimize Salesforce for",
  headingHighlight = "Maximum Business Impact",
  description = "There are lots of big ideas and people who can help you spend your money, we're different, our primary lens is cost savings, doing way more with Salesforce for way less.",
  ctaLabel = "Discover Storefronts",
  ctaHref = "/storefronts",
  tabs = defaultTabs,
}: SalesforceApproachProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (currentTab.singleOpen) {
        return next.has(index) ? new Set<number>() : new Set([index]);
      }
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const tab = tabs[index];
    setOpenItems(tab.singleOpen ? new Set([0]) : new Set([0, 1, 2]));
  };

  const currentTab = tabs[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="container bg-right-top bg-no-repeat" style={{ backgroundImage: "url('/images/ardn-Maximum-Business-Impact-tab.webp')" }}>
        {/* Top row: heading + CTA */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <p className="text-[13px] font-normal uppercase tracking-[4px] text-[#121c27] mb-4">
              {eyebrow}
            </p>
            <TypingText 
              text={`${headingStart} <br /><span class="text-heading">${headingHighlight}</span>`}
              as="h2"
              className="text-heading-dark font-semibold leading-tight mb-8 max-w-2xl"
            />
            <p className="text-paragraph leading-relaxed">{description}</p>
          </div>
          <div className="flex-shrink-0 self-center md:self-end md:mt-10">
            <Button variant="primary" size="lg" rounded="full" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-x-4 sm:gap-x-16 gap-y-4 border-b border-[#C7C9CA] mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`relative pb-2 md:pb-4 lg:pb-6 text-[15px] sm:text-xl cursor-pointer font-medium whitespace-nowrap transition-colors ${
                activeTab === index
                  ? "text-heading-dark"
                  : "text-heading-dark"
              }`}
            >
              {index + 1}. {tab.label}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-heading-dark" />
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-[35%_60%] gap-10 items-start"
          >
            {/* Left: Image (all layouts) */}
            {currentTab.image && (
              <div className="overflow-hidden">
                <Image
                  src={currentTab.image}
                  alt={currentTab.imageAlt ?? ""}
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Right: suggest layout */}
            {currentTab.layout === "suggest" && (
              <div className="flex flex-col self-center">
                <h3 className="font-semibold text-heading-dark mb-3">
                  {currentTab.panelHeading}
                </h3>
                {currentTab.panelDescription && (
                  <p className="text-paragraph leading-relaxed mb-6">
                    {currentTab.panelDescription}
                  </p>
                )}
                {currentTab.panelSubheading && (
                  <h4 className="font-semibold text-heading-dark text-[30px] mb-4">
                    {currentTab.panelSubheading}
                  </h4>
                )}
                <div className="flex flex-col gap-4 mb-8">
                  {currentTab.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 flex items-center p-2 rounded-xl">
                           <MoveRight size={18} className="flex-shrink-0 text-heading-dark" />
                        </div>
                        <div className="pl-5">
                            <p className="font-bold text-heading-dark text-[18px] mb-1">{item.title}</p>
                            <p className="text-paragraph leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {currentTab.panelCtaLabel && (
                    <div>
                        <Button
                            variant="primary"
                            size="lg"
                            rounded="full"
                            {...(currentTab.panelCtaHref ? { href: currentTab.panelCtaHref } : {})}
                        >
                            {currentTab.panelCtaLabel}
                        </Button>
                    </div>
                )}
              </div>
            )}

            {/* Right: accordion layout (image-accordion + full-accordion) */}
            {currentTab.layout !== "suggest" && (
              <div className="flex flex-col self-center">
                <h3 className="font-semibold text-heading-dark mb-6">
                  {currentTab.panelHeading}
                </h3>

                <div className="flex flex-col">
                  {currentTab.items.map((item, index) => (
                    <div key={index}>
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-start justify-between gap-4 py-4 text-left"
                      >
                        <span className="text-[20px] font-medium leading-snug text-heading-dark">
                          {item.title}
                        </span>
                        {openItems.has(index) ? (
                          <Minus size={24} className="flex-shrink-0 mt-0.5 text-black" />
                        ) : (
                          <Plus size={24} className="flex-shrink-0 mt-0.5 text-black" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {openItems.has(index) && (
                          <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <p className="text-paragraph leading-relaxed pb-4">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="border-b border-gray-200 mb-4" />

                      {/* Per-item CTA (not full-accordion) */}
                      {currentTab.layout !== "full-accordion" && item.ctaLabel && (
                        <div className="pb-5">
                          <Button
                            variant="primary"
                            size="lg"
                            rounded="full"
                            {...(item.ctaHref ? { href: item.ctaHref } : {})}
                          >
                            {item.ctaLabel}
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Panel-level CTA (full-accordion only) */}
                {currentTab.layout === "full-accordion" && currentTab.panelCtaLabel && (
                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="lg"
                      rounded="full"
                      {...(currentTab.panelCtaHref ? { href: currentTab.panelCtaHref } : {})}
                    >
                      {currentTab.panelCtaLabel}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
