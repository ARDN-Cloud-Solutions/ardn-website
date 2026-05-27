"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C, headF, monoF, SectionLabel } from "./shared";

const faqs = [
  {
    question: "What kinds of apps do you build?",
    answer:
      "Anything that can be built with modern AI. Customer-facing chatbots and support agents. Internal workflow automations. Document processing and data extraction. Sales enablement tools. Analytics and forecasting systems. Industry-specific vertical apps. If you can describe the problem, we can scope the build. We don't sell templates — we build to your exact specifications.",
  },
  {
    question: 'What exactly is a "service credit"?',
    answer:
      "One service credit equals one hour of senior engineering or design work. You use them for new features, change requests, integrations, custom reporting, troubleshooting beyond standard support, or anything else that needs human work. Unused credits roll over up to 30% of your monthly allocation. Overages are billed at our standard hourly rate.",
  },
  {
    question: "What if I burn through my AI credits?",
    answer:
      "You get real-time usage dashboards and alerts at 50%, 75%, and 90% of your monthly allocation. If you exceed the pool, overages are passed through at cost (no markup) or you can upgrade your tier mid-cycle and we prorate. We also continuously optimize your prompts to reduce token consumption — usually 30–50% over the first quarter.",
  },
  {
    question: "Do I own the app you build?",
    answer:
      "You own the IP and the data. We retain rights to the underlying frameworks and tooling we use across clients. If you ever leave, you get a complete export of your data and full documentation of your application. We have no interest in lock-in — our model only works if you want to stay.",
  },
  {
    question: "How is this different from hiring an agency?",
    answer:
      "Traditional agencies hand you a finished product and disappear. Six months later you have a broken app, an outdated model, and nobody to call. We are not an agency — we are an operating partner. We build the app and then run it as a service, indefinitely, with predictable monthly pricing that includes ongoing development.",
  },
  {
    question: "Is there a minimum contract?",
    answer:
      "No long-term contract required on Launch or Scale tiers — month-to-month after the build is delivered. Enterprise engagements typically include a 12-month commitment in exchange for negotiated rates and dedicated capacity. You can upgrade, downgrade, or cancel any tier with 30 days notice.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className="relative z-10 py-24 lg:py-28"
      style={{ borderTop: `1px solid ${C.border}` }}
    >
      <div className="container">
        <SectionLabel>COMMON QUESTIONS</SectionLabel>
        <h2
          style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
          className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-0 max-w-3xl"
        >
          You probably want to know.
        </h2>

        {/* FAQ list */}
        <div
          className="mt-14"
          style={{ borderTop: `1px solid ${C.border}` }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-6 py-7 text-left cursor-pointer"
              >
                <span
                  style={{ ...headF, letterSpacing: "-0.02em" }}
                  className={`text-[18px] lg:text-[20px] font-medium leading-snug transition-colors ${
                    openIndex === i ? "text-white" : "text-white/80"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    ...monoF,
                    fontSize: 18,
                    color: C.accent,
                    transition: "transform 0.2s",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="text-[15px] leading-[1.7] font-poppins max-w-[800px] pb-7"
                      style={{ color: C.textDim }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
