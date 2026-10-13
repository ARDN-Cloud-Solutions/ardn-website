import { Metadata } from "next";
import AiConsultingPage from "@/components/ai-consulting/AiConsultingPage";
import { hubJsonLd } from "@/components/ai-consulting/jsonld";
import { CALL, CITY_LINKS, HUB_FAQS, OFFER, PROOF, STEPS, THEME, TRUST, WHY } from "@/components/ai-consulting/shared";
import type { AiConsultingContent } from "@/components/ai-consulting/types";

// National AI consulting hub. Targets "AI consulting services", "hire an AI
// consultant", "AI implementation consultant" and "AI consultant for small
// business". City pages (Orlando, Tampa, Miami, Jacksonville) and the cost
// guide hang off this page.

const URL = "https://ardncloudsolutions.com/ai-consulting";
const TITLE = "AI Consulting Services for Small & Mid-Size Businesses | Ardn";
const DESC =
  "AI consulting services from a US AI consulting company: AI strategy, implementation and a managed service after launch, for small and mid-size businesses. Free 30-min call.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI consulting services",
    "AI consulting company",
    "AI business consulting",
    "AI consulting firm",
    "AI strategy consulting",
    "generative AI consulting",
    "AI implementation",
    "AI consultant",
    "AI consultant for small business",
  ],
  alternates: { canonical: URL, languages: { "en-US": URL, "x-default": URL } },
  openGraph: {
    title: "AI Consulting Services: from AI strategy to AI your team uses | Ardn",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: "AI consulting services by Ardn Cloud Solutions" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, site: "@ardn_cloud_sol", images: ["/images/ardn-share.jpg"] },
};

const CONTENT: AiConsultingContent = {
  slug: "ai-consulting",
  theme: THEME,
  hero: {
    eyebrow: "AI consulting company · US team",
    title: "AI consulting services that end in",
    titleEm: "software your team actually uses.",
    lede: "We find where AI will cut real work out of your business, build it around your systems and data, and then run it for you. One US team from the first assessment to everyday operation.",
    primaryCta: { label: "Book a free 30-min AI assessment call", href: CALL },
    secondaryCta: { label: "How it works", href: "#how-it-works" },
    proof: ["Fixed quote before any build", "Built around your data and systems", "Run for you after launch"],
    shot: { src: "/images/approach/roadmap.webp", alt: "Example AI roadmap with phased capabilities, stakeholders and outcomes", url: "AI assessment · Roadmap" },
    caption: "Example roadmap with a fictional company and figures.",
  },
  trust: TRUST,
  intro: {
    kicker: "Who it's for",
    title: "Hiring an AI consultant? Here's who we work best with.",
    sub: "Owners and executives of small and mid-size businesses who want AI to cut work, not start a science project, and who don't want to hire a data science team or gamble on tools that don't fit.",
    items: [
      { label: "Too much manual work", text: "Your team re-keys data, chases status and answers the same questions every day." },
      { label: "Pilots that went nowhere", text: "You've tried AI tools or a proof of concept, and nothing made it into daily use." },
      { label: "No one to own it", text: "There's no in-house AI team, and you don't want to build one just to get started." },
      { label: "Systems that don't talk", text: "Your CRM, ERP, inbox and spreadsheets each hold part of the picture." },
    ],
    links: [...CITY_LINKS, { label: "How much does AI consulting cost?", href: "/ai-consulting/cost" }],
  },
  offer: OFFER,
  steps: STEPS,
  proof: PROOF,
  why: WHY,
  faqs: HUB_FAQS,
  related: {
    kicker: "Keep reading",
    title: "Plan your next step",
    links: [
      { label: "How much does AI consulting cost? (and what you should get for it)", href: "/ai-consulting/cost" },
      { label: "Our approach: how we map your business before building", href: "/approach" },
      { label: "AI Forge: custom AI apps, built and run for you", href: "/ai-forge" },
      { label: "AI app development in Florida", href: "/ai-app-development-florida" },
      { label: "Everything we've launched", href: "/work" },
    ],
  },
  form: {
    heading: "Tell us where the work piles up",
    sub: "A sentence or two is plenty. We'll reply within 4 business hours to set up your free 30-minute AI assessment call.",
    submitLabel: "Request my free assessment call",
    messageLabel: "What would you most like AI to take off your team's plate?",
  },
  final: {
    title: "Find out where AI pays off",
    titleEm: "in your business.",
    lede: "Book a free 30-minute AI assessment call. You'll leave with a clear view of the first use worth building, and we'll follow up with a fixed quote.",
    cta: { label: "Book a free 30-min AI assessment call", href: CALL },
  },
};

export default function Page() {
  const jsonLd = hubJsonLd(CONTENT, {
    path: "/ai-consulting",
    name: "AI Consulting Services",
    description: DESC,
    image: "/images/approach/roadmap.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiConsultingPage content={CONTENT} />
    </>
  );
}
