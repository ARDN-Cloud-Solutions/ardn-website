"use client";

import { C } from "../../components/ai-app/shared";
import HeroSection from "../../components/ai-app/HeroSection";
import ProblemSection from "../../components/ai-app/ProblemSection";
import ProcessSection from "../../components/ai-app/ProcessSection";
import PricingSection from "../../components/ai-app/PricingSection";
import IncludedSection from "../../components/ai-app/IncludedSection";
import FaqSection from "../../components/ai-app/FaqSection";
import CtaSection from "../../components/ai-app/CtaSection";

export default function AiAppContent() {
  return (
    <div
      style={{ background: C.bg, color: "#fff", overflowX: "hidden" }}
      className="relative"
    >
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: "radial-gradient(circle at 20% 0%, rgba(129,140,248,0.09) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(28,32,69,0.6) 0%, transparent 55%)" }}
      />

      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <PricingSection />
      <IncludedSection />
      <FaqSection />
      <CtaSection />

      <style>{`@keyframes -pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }`}</style>
    </div>
  );
}