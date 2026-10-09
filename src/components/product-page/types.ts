import type { LucideIcon } from "lucide-react";
import type { VideoKey } from "@/components/media/videos";

// Content model for a product or service page. A page is one of these
// objects; ProductPage renders it. Every section except hero, faqs, form and
// final is optional, so pages pick the mix that fits (cohesive, not
// identical). See src/app/license-guard/content.ts for an example.

export type Theme = {
  /** Primary accent (buttons, display italics, kickers on dark). */
  accent: string;
  accentSoft: string;
  /** "r, g, b" of accent, for translucent fills. */
  accentRgb: string;
  /** Text colour on accent buttons. */
  accentInk: string;
  /** Secondary accent (kickers, ticks, icons on light). */
  accent2: string;
  accent2Deep: string;
  accent2Rgb: string;
};

export type Cta = { label: string; href: string };
export type Shot = { src: string; alt: string; url: string };
export type IconItem = { icon: LucideIcon; title: string; body: string };
export type Stat = { value: string; label: string };

/** A self-hosted video band (keys in src/components/media/videos.ts). */
export type VideoSection = {
  video: VideoKey;
  kicker: string;
  title: string;
  sub?: string;
  /** Anchor id. The first video on a page keeps the default "video" so
   *  /work's "Watch" links land on it. */
  id?: string;
};

/** A row of short silent loops, each one step of a flow. */
export type LoopSection = {
  kicker: string;
  title: string;
  sub?: string;
  items: { clip: string; caption: string }[];
};

export type ProductPageContent = {
  /** Page id used for analytics (lead source, click locations). */
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
    float?: { label: string; stats: Stat[] };
    caption?: string;
  };
  trust: string[];
  /** Feature video directly under the hero (anchor #video). */
  video?: VideoSection;
  /** A second video lower on the page, after the modules. */
  videoLower?: VideoSection;
  /** "See it move" loops, rendered after the tour. */
  loops?: LoopSection;
  figures?: Stat[];
  pains?: { kicker: string; title: string; sub: string; items: { label: string; text: string }[] };
  promises?: { kicker: string; title: string; sub: string; items: IconItem[] };
  tour?: {
    kicker: string;
    title: string;
    sub: string;
    rows: { kicker: string; title: string; body: string; points: string[]; shot: Shot }[];
    cta?: { text: string; action: Cta };
  };
  feature?: { kicker: string; title: string; sub: string; points: string[]; shot: Shot };
  modules?: { kicker: string; title: string; sub: string; items: IconItem[] };
  gallery?: { kicker: string; title: string; items: { img: string; title: string; body: string; alt: string }[] };
  security?: { kicker: string; title: string; sub: string; shot?: Shot; items: IconItem[] };
  steps?: { kicker: string; title: string; sub: string; items: { title: string; body: string }[] };
  plans?: {
    kicker: string;
    title: string;
    sub: string;
    items: { name: string; for: string; price: string; priceNote: string; extra?: string; features: string[]; cta: Cta; featured?: boolean }[];
    note?: string;
  };
  compare?: { kicker: string; title: string; sub: string; cols: string[]; ours: string; rows: { feature: string; cells: string[]; ours: string }[] };
  /** Short list of related blog articles near the end ("Compare the costs"). */
  readMore?: { kicker: string; title: string; links: Cta[]; more?: Cta };
  faqs: { q: string; a: string }[];
  form: { heading: string; sub: string; submitLabel: string; messageLabel?: string };
  final: { title: string; titleEm: string; lede: string; cta: Cta; links?: Cta[] };
  /** Small print under the tour, e.g. "Screens show sample data." */
  sampleNote?: string;
};
