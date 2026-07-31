import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Comparison HUB / index for the /compare cluster. Fixes the previously broken
// "Compare" breadcrumb (which pointed at /compare — a URL with no page) and
// gives the four cost-comparison spokes a real parent that links down to each,
// reinforcing the per-seat cost-reduction wedge. Money-keyword anchors, one
// clean H1, BreadcrumbList + ItemList schema.
export const metadata: Metadata = {
  title: "Cost Comparisons: Salesforce, SaaS vs. Custom | Ardn",
  description:
    "Side-by-side cost comparisons for cutting per-seat software spend — Salesforce seats, Experience Cloud, Commerce Cloud & SaaS vs. a flat-fee custom build.",
  keywords: [
    "Salesforce cost comparison",
    "custom software vs SaaS cost",
    "Salesforce seat cost vs custom portal",
    "Experience Cloud vs custom portal",
    "Salesforce Commerce Cloud alternatives",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare",
      "x-default": "https://ardncloudsolutions.com/compare",
    },
  },
  openGraph: {
    title: "Cost Comparisons: Salesforce, SaaS vs. Custom | Ardn",
    description:
      "Side-by-side cost comparisons for cutting per-seat software spend — Salesforce seats, Experience Cloud, Commerce Cloud & SaaS vs. a flat-fee custom build.",
    url: "https://ardncloudsolutions.com/compare",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cost comparisons: per-seat software vs. a flat-fee custom build — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Comparisons: Salesforce, SaaS vs. Custom | Ardn",
    description:
      "Side-by-side cost comparisons for cutting per-seat software spend vs. a flat-fee custom build.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const comparisons = [
  {
    href: "/compare/salesforce-seat-cost-vs-custom-portal",
    title: "Salesforce Seat Costs vs. Custom Portal",
    body: "The core per-seat math: what full CRM seats cost for light users, and where a flat-fee portal wins — no CRM switch required.",
    anchor: "See the Salesforce seat-cost math →",
  },
  {
    href: "/compare/salesforce-experience-cloud-vs-custom-portal",
    title: "Experience Cloud vs. Custom Portal",
    body: "Weighing Salesforce Experience Cloud login/member licenses against a flat-fee custom portal for external and light users.",
    anchor: "Compare Experience Cloud vs. a portal →",
  },
  {
    href: "/compare/custom-software-vs-saas",
    title: "Custom Software vs. SaaS",
    body: "The total-cost picture: stacked per-seat SaaS subscriptions vs. owning a flat-fee custom build, over time.",
    anchor: "See custom vs. SaaS total cost →",
  },
  {
    href: "/compare/salesforce-commerce-cloud-alternatives",
    title: "Salesforce Commerce Cloud Alternatives",
    body: "What to weigh if Commerce Cloud is too heavy or too costly for your model — and where a custom storefront fits instead.",
    anchor: "See Commerce Cloud alternatives →",
  },
];

export default function CompareIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ardncloudsolutions.com/compare#page",
        name: "Cost Comparisons",
        url: "https://ardncloudsolutions.com/compare",
        description:
          "Side-by-side cost comparisons for cutting per-seat software spend versus a flat-fee custom build.",
        isPartOf: { "@id": "https://ardncloudsolutions.com/#website" },
      },
      {
        "@type": "ItemList",
        "@id": "https://ardncloudsolutions.com/compare#list",
        itemListElement: comparisons.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.title,
          url: `https://ardncloudsolutions.com${c.href}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/compare#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://ardncloudsolutions.com/compare" },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="ardn-page">
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Cost Comparisons</span>
                <h1 className="display reveal">
                  Per-seat software vs. <em>a flat-fee custom build.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Every comparison here answers the same question from a different
                  angle: what are you overpaying for per-seat software, and where
                  does a flat-fee custom build cost less? Honest math, publicly
                  listed prices labeled illustrative, and a calculator for your own
                  numbers — no CRM switch required.
                </p>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Get a fixed monthly quote</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-seat savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Start with the wedge</div>
                  <ul className="features mt-3">
                    <li>Keep your CRM &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Cost stops scaling with headcount</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">How to cut CRM licensing costs →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* COMPARISONS */}
        <section className="section" id="comparisons">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The comparisons</span>
                <h2 className="h1 mt-3">Pick the <em>cost question</em> you&apos;re asking.</h2>
              </div>
              <div>
                <p className="lede">Each page lays out the tradeoffs honestly — including when the per-seat option is the right call and when a custom build wins.</p>
              </div>
            </div>
            <div className="grid-3">
              {comparisons.map((c) => (
                <Link href={c.href} className="card" key={c.href} style={{ textDecoration: "none" }}>
                  <h3 className="h3">{c.title}</h3>
                  <p className="body">{c.body}</p>
                  <span className="link">{c.anchor}</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">Custom portal development →</Link>
              <Link href="/reduce-hubspot-seat-costs" className="link">Reduce HubSpot seat costs →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platform builds →</Link>
            </div>
          </div>
        </section>

        <LeadForm source="Compare index page" heading="Not sure which comparison fits?" showSeatQualifiers sub="Tell us which platform you run and roughly how many users. We'll point you to the right cost breakdown — and a fixed quote." />
      </div>
    </main>
  );
}
