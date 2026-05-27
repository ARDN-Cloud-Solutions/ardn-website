import { Metadata } from "next";
import SalesforcePaymentContent from "./SalesforcePaymentContent";

export const metadata: Metadata = {
  title: "Salesforce Payments - Ardn Cloud Solutions",
  description:
    "Streamline how you collect payments inside Salesforce. ARDNs native payment solution reduces friction, cuts costs, and keeps your data where it belongs.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/salesforce-payments",
    languages: {
      "en-US": "https://ardncloudsolutions.com/salesforce-payments",
      "x-default": "https://ardncloudsolutions.com/salesforce-payments",
    },
  },
  openGraph: {
    title: "Salesforce Payments - Ardn Cloud Solutions",
    description:
      "Streamline how you collect payments inside Salesforce. ARDNs native payment solution reduces friction, cuts costs, and keeps your data where it belongs.",
    url: "https://ardncloudsolutions.com/salesforce-payments",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/Seamless-Transactions-Complete-Control.webp",
        width: 1200,
        height: 630,
        alt: "Seamless Transactions Complete Control",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Payments - Ardn Cloud Solutions",
    description:
      "Streamline how you collect payments inside Salesforce. ARDNs native payment solution reduces friction, cuts costs, and keeps your data where it belongs.",
    site: "@ardn_cloud_sol",
  },
};

export default function SalesforcePaymentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/salesforce-payments",
        url: "https://ardncloudsolutions.com/salesforce-payments",
        name: "Salesforce Payments - Ardn Cloud Solutions",
        description:
          "Streamline how you collect payments inside Salesforce. ARDNs native payment solution reduces friction, cuts costs, and keeps your data where it belongs.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/salesforce-payments#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/salesforce-payments#breadcrumb",
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
            name: "Salesforce Payments",
            item: "https://ardncloudsolutions.com/salesforce-payments",
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
            name: "Is Salesforce Payments compatible with all Salesforce editions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, it's compatible across all Salesforce editions for seamless functionality.",
            },
          },
          {
            "@type": "Question",
            name: "Can we customize the checkout experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely! Tailor the UI to match your brand and specific business needs.",
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
            name: "Is Salesforce Payments secure and PCI compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, it is fully PCI compliant, ensuring robust security for all transactions.",
            },
          },
          {
            "@type": "Question",
            name: "Can Ardn assist with implementation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our team offers expert guidance to ensure smooth integration into your Salesforce environment.",
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
      <SalesforcePaymentContent />
    </main>
  );
}
