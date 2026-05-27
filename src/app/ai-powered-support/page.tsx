import { Metadata } from "next";
import AiPoweredSupportContent from "./AiPoweredContent";

export const metadata: Metadata = {
  title: "AI-Powered Support That Feels Human - Ardn Cloud Solutions",
  description:
    "AI-powered support blends automation with a human touch. Resolve issues faster and keep your Salesforce users productive without added overhead.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-powered-support",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-powered-support",
      "x-default": "https://ardncloudsolutions.com/ai-powered-support",
    },
  },
  openGraph: {
    title: "AI-Powered Support That Feels Human - Ardn Cloud Solutions",
    description:
      "AI-powered support blends automation with a human touch. Resolve issues faster and keep your Salesforce users productive without added overhead.",
    url: "https://ardncloudsolutions.com/ai-powered-support",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/AI-Powered-Support.webp",
        width: 1200,
        height: 630,
        alt: "AI-Powered-Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Support That Feels Human - Ardn Cloud Solutions",
    description:
      "AI-powered support blends automation with a human touch. Resolve issues faster and keep your Salesforce users productive without added overhead.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiPoweredSupportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/ai-powered-support",
        url: "https://ardncloudsolutions.com/ai-powered-support",
        name: "AI-Powered Support That Feels Human - Ardn Cloud Solutions",
        description:
          "AI-powered support blends automation with a human touch. Resolve issues faster and keep your Salesforce users productive without added overhead.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/ai-powered-support#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-powered-support#breadcrumb",
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
            name: "Ai Powered Support",
            item: "https://ardncloudsolutions.com/ai-powered-support",
          },
        ],
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Organization",
          name: "Ardn Cloud Solutions",
        },
        reviewBody:
          "Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business. Their strategic focus on high-impact efficiencies transformed our operations, delivering substantial cost reductions and measurable improvements throughout our processes.",
        author: {
          "@type": "Person",
          name: "Jay Vashi",
          jobTitle: "Salesforce Delivery Manager",
          worksFor: {
            "@type": "Organization",
            name: "Fortune 500 insurance company",
          },
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiPoweredSupportContent />
    </main>
  );
}
