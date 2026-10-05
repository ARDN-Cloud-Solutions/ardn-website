// The launches shown on /work, in display order. Each is a product Ardn
// designed, built and runs as a managed service. The product site links are
// to the products' own sites; Ardn is the vendor, not the owner of the
// companies behind them.

export const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export type Launch = {
  slug: string;
  name: string;
  industry: string;
  outcome: string;
  chips: string[];
  image: string;
  imageAlt: string;
  productHref: string;
  caseStudyHref: string;
  externalHref?: string;
  externalLabel?: string;
  /** schema.org applicationCategory for the ItemList. */
  category: string;
};

export const LAUNCHES: Launch[] = [
  {
    slug: "club-steward",
    name: "Club Steward",
    industry: "Golf & country clubs",
    outcome: "One member record across every club in a portfolio, from online join to the tee sheet.",
    chips: ["Online join", "E-signed contracts", "Dues on autopay", "Tee sheet & pro shop"],
    image: "/images/golf/corporate-dashboard.webp",
    imageAlt: "Club Steward corporate dashboard across a multi-club portfolio",
    productHref: "/golf-club-management-software",
    caseStudyHref: "/case-studies/club-steward-multi-club-golf-platform",
    category: "Golf and country club management software",
  },
  {
    slug: "membership-fundraising",
    name: "Membership & Fundraising platform",
    industry: "Nonprofits & community centers",
    outcome: "Members and donors on one record, with household billing, check-in and board-ready reporting.",
    chips: ["Household billing", "One-scan check-in", "Programs & waitlists", "Campaigns & gifts"],
    image: "/images/nonprofit/operations-overview-dashboard.webp",
    imageAlt: "Operations overview dashboard for a multi-branch community nonprofit",
    productHref: "/nonprofit-management-software",
    caseStudyHref: "/case-studies/membership-and-fundraising-platform-community-nonprofits",
    category: "Nonprofit membership and fundraising software",
  },
  {
    slug: "construction-crm",
    name: "Ardn CRM for construction",
    industry: "Roofing, home improvement, residential & commercial GCs",
    outcome: "Quotes that become jobs in one click, a service desk with SLA clocks and a dispatch board the whole team can see.",
    chips: ["Pipeline & quotes", "Jobs & work orders", "Service desk SLAs", "Dispatch"],
    image: "/images/crm/dashboard.webp",
    imageAlt: "Ardn CRM business-health dashboard for a contractor",
    productHref: "/construction-crm",
    caseStudyHref: "/case-studies/construction-crm-jobs-service-dispatch",
    externalHref: "https://www.ardnai.com",
    externalLabel: "Product site",
    category: "Construction and field service CRM",
  },
  {
    slug: "rx-dr",
    name: "Rx-Dr",
    industry: "White-label telehealth",
    outcome: "A brand launches online care under its own name, with intake, clinician review, pharmacy routing and payments ready.",
    chips: ["Multi-tenant", "Clinician review", "Subscriptions & refills", "HIPAA controls"],
    image: "/media/case-studies/rx-dr/white-label.webp",
    imageAlt: "Rx-Dr white-label telehealth platform",
    productHref: "/glp-1-ecommerce",
    caseStudyHref: "/case-studies/rx-dr-white-label-telehealth-platform",
    externalHref: "https://rx-dr.com",
    externalLabel: "rx-dr.com",
    category: "Telehealth platform",
  },
  {
    slug: "research-only",
    name: "Research Only",
    industry: "Regulated e-commerce",
    outcome: "A compliance-first e-commerce storefront for a regulated product category, with the checks built into checkout.",
    chips: ["Compliance on every page", "Multi-rail payments", "Partner program", "Full back office"],
    image: "/media/case-studies/research-only/gate.webp",
    imageAlt: "Research Only eligibility confirmation before entering the store",
    productHref: "/custom-ecommerce-development",
    caseStudyHref: "/case-studies/research-only-compliance-first-ecommerce",
    category: "E-commerce platform",
  },
];

export const STEPS = [
  { title: "Discover", body: "We map how the organization runs today: systems, people and the work that moves between them." },
  { title: "Build", body: "A platform shaped around that work, with automation built in from the start rather than added later." },
  { title: "Launch", body: "Data moved, people trained, and a go-live planned around the business calendar." },
  { title: "Run", body: "Hosting, support and ongoing improvements as a managed service, by the team that built it." },
];
