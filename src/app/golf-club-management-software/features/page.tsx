import { Metadata } from "next";
import { gcSerif as serif } from "@/fonts/serif";
import FeaturesContent from "./FeaturesContent";
import { MODULES, TIER_LABEL } from "../content";
import "../golf.css";
import "../proposal/proposal.css";

/**
 * /golf-club-management-software/features — every Club Steward feature, app
 * by app. The long-form detail moved off the landing page on 2026-10-14; see
 * FeaturesContent. Indexed and in the sitemap (unlike proposal/ and fit-gap/)
 * so the long-tail feature searches still land on a page that answers them.
 */

const HOME = "https://ardncloudsolutions.com/golf-club-management-software";
const URL = `${HOME}/features`;
const TITLE = "All Club Steward Features | Golf & Country Club Software";
const DESC =
  "Every Club Steward app and feature for golf and country clubs: membership sales, members app, tee sheet, POS, events, dues, accounting, HR and multi-club reporting.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: URL,
    languages: { "en-US": URL, "x-default": URL },
  },
  openGraph: {
    title: "All Club Steward features, app by app",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/golf/og-club-steward.jpg",
        width: 1200,
        height: 630,
        alt: "Club Steward: every club in your portfolio, one member record",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    site: "@ardn_cloud_sol",
    images: ["/images/golf/og-club-steward.jpg"],
  },
};

// Same graph as the landing page: the apps are an ItemList about the
// SoftwareApplication node defined there (#software), not a second product.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      isPartOf: { "@id": "https://ardncloudsolutions.com/#website" },
      about: { "@id": `${HOME}#software` },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      mainEntity: { "@id": `${URL}#apps` },
      primaryImageOfPage: "https://ardncloudsolutions.com/images/golf/online-join-plans.webp",
      publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Our Products", item: "https://ardncloudsolutions.com/our-products" },
        { "@type": "ListItem", position: 3, name: "Golf & Country Club Management Software", item: HOME },
        { "@type": "ListItem", position: 4, name: "All Club Steward features", item: URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${URL}#apps`,
      name: "Club Steward apps",
      numberOfItems: MODULES.length,
      itemListElement: MODULES.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${URL}#${m.slug}`,
        name: `${m.title} (${TIER_LABEL[m.tier]})`,
        description: m.body,
      })),
    },
  ],
};

export default function ClubStewardFeaturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <div className={serif.variable}>
        <FeaturesContent />
      </div>
    </>
  );
}
