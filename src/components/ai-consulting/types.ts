import type { Cta, IconItem, Shot, Theme } from "@/components/product-page/types";

/** Content model for the AI consulting hub and city pages. Rendered by
 *  AiConsultingPage with the product page kit's styles. */
export type AiConsultingContent = {
  slug: string;
  theme: Theme;
  hero: {
    eyebrow: string;
    title: string;
    titleEm: string;
    lede: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    proof: string[];
    shot: Shot;
    caption?: string;
  };
  trust: string[];
  /** Who it's for (hub) or the local framing (city pages). */
  intro: { kicker: string; title: string; sub: string; items: { label: string; text: string }[]; links?: Cta[] };
  /** City pages: industries common in the metro, three AI use cases each. */
  industries?: { kicker: string; title: string; sub: string; items: { name: string; why: string; uses: { title: string; body: string }[] }[] };
  offer: { kicker: string; title: string; sub: string; items: IconItem[] };
  steps: { kicker: string; title: string; sub: string; items: IconItem[] };
  proof: {
    kicker: string;
    title: string;
    sub: string;
    items: { name: string; industry: string; outcome: string; image: string; imageAlt: string; href: string; caseStudyHref: string }[];
  };
  why: { kicker: string; title: string; sub: string; cols: string[]; ours: string; rows: { feature: string; cells: string[]; ours: string }[] };
  faqs: { q: string; a: string }[];
  related: { kicker: string; title: string; links: Cta[] };
  form: { heading: string; sub: string; submitLabel: string; messageLabel: string };
  final: { title: string; titleEm: string; lede: string; cta: Cta };
  sampleNote?: string;
};
