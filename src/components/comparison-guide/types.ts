export type GuideLink = { label: string; url: string };

export type GuideVendor = {
  /** Anchor id for the vendor section. */
  id: string;
  name: string;
  /** Short "who makes it / what it is" line. */
  maker: string;
  bestFor: string;
  summary: string;
  points: string[];
  limits?: string[];
  limitsLabel?: string;
  pricing: string;
  sources: GuideLink[];
};

export type ComparisonGuideData = {
  path: string;
  h1: string;
  /** Short name used in the breadcrumb and ItemList. */
  shortName: string;
  updated: string;
  byline: string;
  datePublished: string;
  dateModified: string;
  heroCta: { label: string; href: string };
  quickAnswer: { lead: string; bullets: string[] };
  intro: string[];
  table: {
    heading: string;
    note: string;
    columns: string[];
    rows: { product: string; cells: string[] }[];
  };
  criteria: { heading: string; lead: string; items: { title: string; body: string }[] };
  vendorsHeading: string;
  vendors: GuideVendor[];
  howToChoose: {
    heading: string;
    lead: string;
    items: { if: string; then: string }[];
    questions: string[];
  };
  faqs: { q: string; a: string }[];
  cta: { text: string; label: string; href: string };
  sources: GuideLink[];
  related: { label: string; href: string }[];
  disclaimers: string[];
};
