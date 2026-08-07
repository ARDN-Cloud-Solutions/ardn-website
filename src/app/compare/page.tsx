import { Metadata } from "next";
import Link from "next/link";

// Compare INDEX / hub page. Two jobs:
//   1. SEO fix — every /compare/* page emits a BreadcrumbList whose position-2
//      "Compare" crumb points to https://ardncloudsolutions.com/compare. That
//      URL previously 404'd (no index page), which can suppress the breadcrumb
//      rich result. This page makes that crumb resolve to a real destination.
//   2. Internal linking — a crawlable hub that links to every comparison with
//      keyword-rich anchors, tightening the cost-reduction wedge cluster and
//      distributing crawl equity across the compare pages.
export const metadata: Metadata = {
  title: "Compare: Custom Software vs. Salesforce Costs | Ardn",
  description:
    "Side-by-side cost comparisons: custom software vs. SaaS, Salesforce seat and Experience Cloud costs vs. a flat-fee custom portal. See which wins for you.",
  keywords: [
    "custom software vs SaaS",
    "Salesforce seat cost vs custom portal",
    "Salesforce Experience Cloud vs custom portal",
    "Salesforce Commerce Cloud alternatives",
    "reduce CRM licensing costs",
    "per-seat vs flat-fee software",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare",
      "x-default": "https://ardncloudsolutions.com/compare",
    },
  },
  openGraph: {
    title: "Compare: Custom Software vs. Salesforce Costs | Ardn",
    description:
      "Honest, side-by-side cost comparisons — per-seat SaaS and Salesforce licenses vs. a flat-fee custom portal you own. Run the math before you renew.",
    url: "https://ardncloudsolutions.com/compare",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Compare custom software and Salesforce license costs against a flat-fee custom portal — Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare: Custom Software vs. Salesforce Costs | Ardn",
    description:
      "Side-by-side cost comparisons — per-seat licenses vs. a flat-fee custom portal you own.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const comparisons = [
  {
    href: "/compare/salesforce-seat-cost-vs-custom-portal",
    title: "Salesforce Seat Cost vs. Custom Portal",
    body: "The per-seat math for Salesforce & HubSpot light users, next to a flat-fee custom portal that keeps your CRM as the system of record.",
    anchor: "See the seat-cost math →",
    wedge: true,
  },
  {
    href: "/compare/salesforce-experience-cloud-vs-custom-portal",
    title: "Salesforce Experience Cloud vs. Custom Portal",
    body: "Experience Cloud bills per login or per member. See how a flat-fee custom portal compares for external partners, members, and customers.",
    anchor: "Compare Experience Cloud →",
    wedge: true,
  },
  {
    href: "/compare/custom-software-vs-saas",
    title: "Custom Software vs. SaaS",
    body: "Per-seat SaaS climbs every time you hire. A flat monthly fee doesn't. The total-cost breakdown across your whole stack — do the math before you renew.",
    anchor: "Do the total-cost math →",
    wedge: true,
  },
  {
    href: "/compare/salesforce-commerce-cloud-alternatives",
    title: "Salesforce Commerce Cloud Alternatives",
    body: "What to weigh when Commerce Cloud is more platform (and more cost) than your store needs — and where a custom-built storefront fits.",
    anchor: "See the alternatives →",
    wedge: false,
  },
];

export default function CompareIndexPage() {
  const url = "https://ardncloudsolutions.com/compare";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: "Cost Comparisons",
        description:
          "Side-by-side cost comparisons of custom software and Salesforce licenses against a flat-fee custom portal.",
        url,
        isPartOf: { "@id": "https://ardncloudsolutions.com/#website" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: url },
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
                  The honest math: <em>per-seat licenses vs. a portal you own.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most cost-cutting advice comes from parties who profit when you
                  keep paying per seat — the CRM vendor, its partners, the portal
                  tools that bill per login. These comparisons take the other side:
                  what each option actually costs, where a flat-fee custom portal
                  wins, and where it doesn&apos;t. Keep your CRM as the system of
                  record throughout.
                </p>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href="/savings-calculator" className="btn btn-primary btn-lg btn-arrow">Calculate your per-seat savings</Link>
                  <Link href="/reduce-crm-licensing-costs" className="btn btn-secondary btn-lg">The full cost-reduction guide</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">What you&apos;ll find here</div>
                  <ul className="features mt-3">
                    <li>Salesforce &amp; HubSpot seat-cost math</li>
                    <li>Experience Cloud login vs. member pricing</li>
                    <li>Custom software vs. SaaS total cost</li>
                    <li>Commerce Cloud alternatives</li>
                    <li>Illustrative list prices, labeled — never invented</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* COMPARISONS GRID */}
        <section className="section" id="comparisons">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Compare</span>
                <h2 className="h1 mt-3">Pick the comparison <em>that fits your bill.</em></h2>
              </div>
              <div>
                <p className="lede">Every comparison is honest about when the incumbent is the right call — and specific about when a flat-fee custom portal cuts the cost.</p>
              </div>
            </div>
            <div className="grid-3">
              {comparisons.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="card"
                  style={{ textDecoration: "none", ...(c.wedge ? { borderColor: "var(--indigo)" } : {}) }}
                >
                  {c.wedge && (
                    <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Cost wedge</span>
                  )}
                  <h3 className="h3">{c.title}</h3>
                  <p className="body">{c.body}</p>
                  <span className="link">{c.anchor}</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">Explore custom portal development →</Link>
              <Link href="/custom-partner-portal-development" className="link">Cut per-login partner seats with a partner portal →</Link>
              <Link href="/license-guard" className="link">Reclaim dormant Salesforce seats first →</Link>
              <Link href="/custom-software-development" className="link">See everything we build to replace seats →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section is-canvas" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Run your own numbers. <em>Then decide.</em></h2>
              <p className="lede">Plug your seat count and rate into the calculator, or book a 30-minute call and we&apos;ll map your stack and return a fixed quote within 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Get my fixed monthly quote</a>
                <Link href="/savings-calculator" className="btn btn-outline-light btn-lg">Open the savings calculator</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
