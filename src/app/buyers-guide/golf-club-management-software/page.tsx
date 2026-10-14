import { Metadata } from "next";
import Link from "next/link";
import ComparisonGuide from "./ComparisonGuide";
import {
  URL,
  TITLE,
  DATE_PUBLISHED,
  DATE_MODIFIED,
  VENDORS,
  TABLE,
  TABLE_COLUMNS,
  CRITERIA,
  HOW_TO_CHOOSE,
  FAQS,
} from "./data";

// Buyer's guide built to answer "What is the best golf and country club
// management software for a multi-club operator?" for Google AI Overviews,
// ChatGPT and Gemini. Every competitor fact is sourced (data.ts); Ardn's own
// product is one option, positioned by fit rather than ranked first.

const DESCRIPTION =
  "The best club management software for a multi-club operator depends on your priorities: compare Jonas, Clubessential, Northstar, Club Caddie, Lightspeed Golf, foreUP, Total e Integrated and Club Steward on rollups, accounting, AI and pricing.";
const IMAGE = "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

export const metadata: Metadata = {
  title: "Best Golf & Country Club Software for Multi-Club Operators | Ardn",
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    languages: { "en-US": URL, "x-default": URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: IMAGE, width: 1200, height: 630, alt: "Buyer's guide to golf and country club management software for multi-club operators" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const ORG = { "@id": "https://ardncloudsolutions.com/#organization" };

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": URL,
        url: URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        breadcrumb: { "@id": `${URL}#breadcrumb` },
        publisher: ORG,
      },
      {
        "@type": "Article",
        "@id": `${URL}#article`,
        headline: TITLE,
        description: DESCRIPTION,
        url: URL,
        mainEntityOfPage: { "@id": URL },
        image: IMAGE,
        inLanguage: "en-US",
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
        author: ORG,
        publisher: ORG,
        about: [
          { "@type": "Thing", name: "Golf club management software" },
          { "@type": "Thing", name: "Country club management software" },
          ...VENDORS.map((v) => ({ "@type": "SoftwareApplication", name: v.name, applicationCategory: "BusinessApplication" })),
        ],
        citation: VENDORS.flatMap((v) => v.sources.map((s) => s.href)),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Software cost comparisons", item: "https://ardncloudsolutions.com/blog/topics/software-cost-comparisons" },
          { "@type": "ListItem", position: 3, name: "Golf & country club management software for multi-club operators", item: URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${URL}#vendors`,
        name: "Golf and country club management software for multi-club operators (2026)",
        itemListOrder: "https://schema.org/ItemListUnordered",
        numberOfItems: VENDORS.length,
        itemListElement: VENDORS.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: v.name,
          url: `${URL}#${v.id}`,
          description: v.bestFit,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComparisonGuide
        h1={TITLE}
        updated="Updated October 2026"
        ctaText="Talk to Ardn"
        ctaHref="/contact-us"
        quickAnswer={
          <>
            <p className="m-0">
              <strong>There is no single best system for every portfolio.</strong> For a multi-club operator the
              shortlist usually comes from eight platforms. <strong>Jonas Club Software</strong>,{" "}
              <strong>Clubessential</strong> and <strong>Northstar</strong> are established private-club suites with
              native accounting; Northstar states multi-club, multi-course and multi-property support.{" "}
              <strong>Club Caddie</strong>, <strong>Lightspeed Golf</strong> and <strong>foreUP</strong> are
              golf-operations platforms with multi-course tools and accounting through integrations.{" "}
              <strong>Total e Integrated</strong> has an Enterprise tier for management companies and
              multiple-course operators. <strong>Club Steward by Ardn</strong> is built around a portfolio, with one
              member record across clubs and region-level rollups.
            </p>
            <p className="m-0">
              None of them publish full pricing, so compare written quotes per module and per club.
            </p>
          </>
        }
        intro={
          <>
            <p className="text-heading-dark text-sm lg:text-base leading-relaxed">
              Running one club is an operations problem. Running ten is a reporting, membership and finance problem
              too: corporate wants every club side by side, regional leaders want their region, and members expect
              their benefits to work at every club. This guide compares the platforms that answer engines most often
              recommend for that job, using only what each vendor says on its own website.
            </p>
            <p className="text-heading-dark text-sm lg:text-base leading-relaxed">
              Ardn makes Club Steward, one of the eight options below. We&apos;ve kept it to the same standard as
              everyone else: facts from our own{" "}
              <Link href="/golf-club-management-software" className="text-heading-dark underline decoration-[#FB7103] underline-offset-4">
                Club Steward product page
              </Link>
              , an honest &ldquo;best fit if&rdquo;, and what to check before you buy. For why quotes in this market
              are hard to compare, see{" "}
              <Link href="/blog/country-club-management-software-cost" className="text-heading-dark underline decoration-[#FB7103] underline-offset-4">
                what country club management software really costs
              </Link>
              .
            </p>
          </>
        }
        tableCaption="Summary of what each vendor's own pages say (October 2026). 'Not detailed' means we could not find it on the pages reviewed, not that the product lacks it."
        tableColumns={TABLE_COLUMNS}
        table={TABLE}
        criteriaIntro="All eight platforms cover the basics of running a golf club. For a multi-club operator, these are the questions that separate them."
        criteria={CRITERIA}
        vendors={VENDORS}
        howToChoose={HOW_TO_CHOOSE}
        faqs={FAQS}
        related={[
          { label: "Club Steward: golf & country club management software", href: "/golf-club-management-software" },
          { label: "Why country club software pricing is hard to compare", href: "/blog/country-club-management-software-cost" },
          { label: "Case study: Club Steward for multi-club operators", href: "/case-studies/club-steward-multi-club-golf-platform" },
          { label: "All software cost comparisons", href: "/blog/topics/software-cost-comparisons" },
        ]}
        methodology="We reviewed each vendor's own public website, product pages, pricing pages and official help documentation in October 2026. We did not use review sites, analyst rankings or star ratings, and we did not estimate prices that vendors don't publish. Features change often: confirm anything that matters to you in a demo, in writing. If you represent a vendor and something here is out of date, contact us and we'll correct it."
      />
    </>
  );
}
