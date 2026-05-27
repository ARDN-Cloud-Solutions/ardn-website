import { Metadata } from "next";
import StorefrontsContent from "./StorefrontsContent";

export const metadata: Metadata = {
  title: "Storefronts - Ardn Cloud Solutions",
  description:
    "Storefronts by ARDN is a native Salesforce eCommerce platform for B2B and B2C. Manage orders, pricing, and products directly inside your Salesforce org.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/storefronts",
    languages: {
      "en-US": "https://ardncloudsolutions.com/storefronts",
      "x-default": "https://ardncloudsolutions.com/storefronts",
    },
  },
  openGraph: {
    title: "Storefronts - Ardn Cloud Solutions",
    description:
      "Storefronts by ARDN is a native Salesforce eCommerce platform for B2B and B2C. Manage orders, pricing, and products directly inside your Salesforce org.",
    url: "https://ardncloudsolutions.com/storefronts",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/All-in-One-Ecommerce-Solution.webp",
        width: 1200,
        height: 630,
        alt: "All-in-One-Ecommerce-Solution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storefronts - Ardn Cloud Solutions",
    description:
      "Storefronts by ARDN is a native Salesforce eCommerce platform for B2B and B2C. Manage orders, pricing, and products directly inside your Salesforce org.",
    site: "@ardn_cloud_sol",
  },
};

export default function StorefrontsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/storefronts",
        url: "https://ardncloudsolutions.com/storefronts",
        name: "Storefronts - Ardn Cloud Solutions",
        description:
          "Storefronts by ARDN is a native Salesforce eCommerce platform for B2B and B2C. Manage orders, pricing, and products directly inside your Salesforce org.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/storefronts#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/storefronts#breadcrumb",
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
            name: "Storefronts",
            item: "https://ardncloudsolutions.com/storefronts",
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
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Storefronts integrate with Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storefronts connects directly to your Salesforce instance, leveraging your existing data and processes.",
            },
          },
          {
            "@type": "Question",
            name: "Can I customize my store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Storefronts offers extensive customization options to match your brand identity.",
            },
          },
          {
            "@type": "Question",
            name: "What payment methods are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storefronts supports multiple payment methods, including ACH, credit cards, and digital wallets like Google Pay and Apple Pay.",
            },
          },
          {
            "@type": "Question",
            name: "Is Storefronts scalable for growing businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely Storefronts is specifically designed for high volume and multi-location businesses.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StorefrontsContent />
    </main>
  );
}
