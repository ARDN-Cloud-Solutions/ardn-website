"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { C, headF, monoF, SectionLabel, FadeSection } from "./shared";

interface Tier {
  label: string;
  title: string;
  for: string;
  build: string;
  monthly: string;
  aiCredits: string;
  aiLabel: string;
  svcCredits: string;
  svcLabel: string;
  features: string[];
  cta: string;
  featured: boolean;
}

const tiers: Tier[] = [
  {
    label: "TIER 01 · LAUNCH",
    title: "Launch",
    for: "For small businesses validating their first AI workflow. 1–25 employees.",
    build: "$7,500",
    monthly: "$3,000",
    aiCredits: "500K",
    aiLabel: "tokens / month",
    svcCredits: "10",
    svcLabel: "≈ 10 dev hours",
    features: [
      "1 production AI application",
      "Up to 3 user accounts",
      "Standard hosting & infrastructure",
      "Email support · 48-hour response",
      "Monthly performance report",
      "Quarterly roadmap review",
    ],
    cta: "Start with Launch",
    featured: false,
  },
  {
    label: "TIER 02 · SCALE",
    title: "Scale",
    for: "For growing businesses running AI across multiple workflows. 25–250 employees.",
    build: "$25,000",
    monthly: "$4,500",
    aiCredits: "2.5M",
    aiLabel: "tokens / month",
    svcCredits: "40",
    svcLabel: "≈ 40 dev hours",
    features: [
      "Up to 3 production AI applications",
      "Up to 25 user accounts",
      "Priority hosting & autoscaling",
      "Priority support · 24-hour response",
      "Weekly performance & usage reports",
      "Monthly roadmap & feature planning",
      "Integration with your existing stack",
      "Custom domains & branding",
    ],
    cta: "Start with Scale",
    featured: true,
  },
  {
    label: "TIER 03 · ENTERPRISE",
    title: "Enterprise",
    for: "For mid-market and large organizations with mission-critical AI. 250+ employees.",
    build: "From $75K",
    monthly: "From $12K",
    aiCredits: "10M+",
    aiLabel: "tokens / month",
    svcCredits: "120+",
    svcLabel: "≈ 120 dev hours",
    features: [
      "Unlimited production AI applications",
      "Unlimited user accounts (SSO included)",
      "Dedicated infrastructure & private cloud option",
      "Dedicated team · 4-hour SLA · phone support",
      "Real-time dashboards & custom reporting",
      "Weekly engineering syncs",
      "SOC 2 / HIPAA / compliance support",
      "Custom contract terms & procurement",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative z-10 py-24 lg:py-28"
      style={{
        borderTop: `1px solid ${C.border}`,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(129,140,248,0.04) 50%, transparent 100%)",
      }}
    >
      <div className="container">
        <FadeSection>
          <SectionLabel>THREE TIERS · ONE OPERATING MODEL</SectionLabel>
          <h2
            style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
            className="font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 max-w-3xl"
          >
            Pick your scale.
            <br />
            <span style={{ color: C.accent }}>We handle the rest.</span>
          </h2>
          <p
            className="text-[16px] lg:text-[18px] leading-relaxed max-w-[660px] mb-14 font-poppins text-white"
          >
            Every tier includes a one-time build fee and a monthly operating
            subscription. Subscriptions are metered against two pools:{" "}
            <strong className="text-white">AI credits</strong> (model usage) and{" "}
            <strong className="text-white">service credits</strong> (our
            engineering time for new features, changes, and support).
          </p>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -8 }}
              className="rounded flex flex-col relative overflow-hidden"
              style={{
                background: tier.featured
                  ? `linear-gradient(180deg, rgba(129,140,248,0.08) 0%, ${C.surface} 30%)`
                  : C.surface,
                border: `1px solid ${tier.featured ? C.accent : C.border}`,
                padding: "36px 28px 32px",
              }}
            >
              {/* Most Popular badge */}
              {tier.featured && (
                <div
                  className="absolute top-0 right-6"
                  style={{
                    background: C.accent,
                    color: C.accentDark,
                    ...monoF,
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "5px 12px",
                    letterSpacing: "0.1em",
                    borderRadius: "0 0 4px 4px",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              {/* Header block */}
              <div
                className="pb-6 mb-6"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <p
                  style={{
                    ...monoF,
                    fontSize: 11,
                    color: C.textDim,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {tier.label}
                </p>
                <p
                  style={{
                    ...headF,
                    fontSize: 30,
                    fontWeight: 600,
                    letterSpacing: "-0.025em",
                    marginBottom: 10,
                    color: "#fff",
                  }}
                >
                  {tier.title}
                </p>
                <p
                  className="text-[14px] leading-snug font-poppins mb-6"
                  style={{ color: C.textDim }}
                >
                  {tier.for}
                </p>

                {/* Prices */}
                <div className="flex flex-col gap-3">
                  {[
                    { label: "ONE-TIME BUILD", value: tier.build, monthly: false },
                    { label: "MONTHLY SUBSCRIPTION", value: tier.monthly, monthly: true },
                  ].map((row) => (
                    <div key={row.label}>
                      <p
                        style={{
                          ...monoF,
                          fontSize: 10,
                          color: C.textFaint,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 3,
                        }}
                      >
                        {row.label}
                      </p>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          style={{
                            ...headF,
                            fontSize: 32,
                            fontWeight: 600,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            color: row.monthly && tier.featured ? C.accent : "#fff",
                          }}
                        >
                          {row.value}
                        </span>
                        {row.monthly && (
                          <span
                            className="text-[14px] font-poppins"
                            style={{ color: C.textDim }}
                          >
                            / month
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credits block */}
              <div
                className="grid grid-cols-2 gap-3 rounded p-4 mb-6"
                style={{ background: C.accentDark, border: `1px solid ${C.border}` }}
              >
                {[
                  { label: "AI CREDITS", value: tier.aiCredits, sub: tier.aiLabel },
                  { label: "SERVICE CREDITS", value: tier.svcCredits, sub: tier.svcLabel },
                ].map((credit) => (
                  <div key={credit.label}>
                    <p
                      style={{
                        ...monoF,
                        fontSize: 10,
                        color: C.textFaint,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {credit.label}
                    </p>
                    <p
                      style={{
                        ...headF,
                        fontSize: 20,
                        fontWeight: 600,
                        color: C.accent,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {credit.value}
                    </p>
                    <p
                      className="text-[11px] font-poppins mt-1"
                      style={{ color: C.textDim }}
                    >
                      {credit.sub}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features list */}
              <ul className="flex flex-col flex-grow mb-8">
                {tier.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-3 py-2.5 text-[14px] font-poppins text-white"
                    style={{
                      borderBottom:
                        fi < tier.features.length - 1
                          ? `1px solid ${C.border}`
                          : undefined,
                      lineHeight: 1.45,
                    }}
                  >
                    <span
                      style={{
                        ...monoF,
                        color: C.accent,
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      +
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "secondary" : "glass"}
                size="lg"
                rounded="full"
                href="/contact-us"
                fullWidth
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p
          className="text-center mt-12 text-[12px] tracking-widest"
          style={{ ...monoF, color: C.textFaint }}
        >
          OVERAGES BILLED AT COST · ROLL-OVER UP TO 30% OF UNUSED CREDITS · NO
          LONG-TERM CONTRACT REQUIRED
        </p>
      </div>
    </section>
  );
}
