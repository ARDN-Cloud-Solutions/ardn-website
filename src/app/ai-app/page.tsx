import { Metadata } from "next";
import AiCloudSolutionsContent from "./AiAppContent";

export const metadata: Metadata = {
  title: "Custom AI Apps, Built and Run for You — Ardn Cloud Solutions",
  description:
    "We build custom AI applications to your exact spec, then run them as a monthly service — hosting, maintenance, AI compute, support, and feature work. One bill.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-app",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-app",
      "x-default": "https://ardncloudsolutions.com/ai-app",
    },
  },
  // Orphaned duplicate of /ai-app-development (no inbound links, excluded from
  // sitemap) — noindex to stop it competing with the canonical spoke page.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    title: "Custom AI Apps, Built and Run for You — Ardn Cloud Solutions",
    description:
      "We build custom AI applications to your exact specifications, then operate them as a monthly service — hosting, maintenance, AI compute, support, and ongoing feature work.",
    url: "https://ardncloudsolutions.com/ai-app",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Apps, Built and Run for You — Ardn Cloud Solutions",
    description:
      "We build custom AI applications, then operate them as a monthly service. One predictable bill. Zero in-house engineering required.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiAppPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/ai-app",
        url: "https://ardncloudsolutions.com/ai-app",
        name: "Custom AI Apps, Built and Run for You — Ardn Cloud Solutions",
        description:
          "We build custom AI applications to your exact specifications, then operate them as a monthly service.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/ai-app#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-app#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Cloud Solutions",
            item: "https://ardncloudsolutions.com/ai-app",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiCloudSolutionsContent />
    </>
  );
}
