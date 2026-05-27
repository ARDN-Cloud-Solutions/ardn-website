import { Metadata } from "next";
import SalesforceWebflowAutomationContent from "./SalesforceWebflowAutomationContent";

export const metadata: Metadata = {
  title: "Best Salesforce Workflow Automation Tools | ARDN",
  description: "Find the right Salesforce workflow automation tools to simplify processes, reduce manual effort, and keep your setup clean as your business grows.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    languages: {
      "en-US": "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
      "x-default": "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    },
  },
  openGraph: {
    title: "Best Salesforce Workflow Automation Tools | ARDN",
    description: "Find the right Salesforce workflow automation tools to simplify processes, reduce manual effort, and keep your setup clean as your business grows.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Best Salesforce Workflow Automation Tools | ARDN",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salesforce Workflow Automation Tools | ARDN",
    description: "Find the right Salesforce workflow automation tools to simplify processes, reduce manual effort, and keep your setup clean as your business grows.",
    images: ["/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
        "name": "Best Salesforce Workflow Automation Tools | ARDN",
        "description": "Find the right Salesforce workflow automation tools to simplify processes, reduce manual effort, and keep your setup clean as your business grows.",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "Ardn Cloud Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ardncloudsolutions.com/logo/ardn_logo.png"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SalesforceWebflowAutomationContent />
    </>
  );
}
