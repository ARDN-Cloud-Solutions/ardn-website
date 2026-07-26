import { Metadata } from "next";
import CareerContent from "./CareerContent";
import ContactSection from "@/components/common/ContactSection";

// Title expanded from 35 → ~60 chars to use Google's full SERP title budget.
// OG image added so LinkedIn / Slack / Twitter previews render correctly when
// the careers page is shared.
export const metadata: Metadata = {
  title:
    "Careers at Ardn — Orlando AI & Salesforce Roles",
  description:
    "Join Ardn Cloud Solutions in Orlando, FL. Open AI engineering, Salesforce & custom development roles — senior-led teams and ownership from day one.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/career",
    languages: {
      "en-US": "https://ardncloudsolutions.com/career",
      "x-default": "https://ardncloudsolutions.com/career",
    },
  },
  openGraph: {
    title:
      "Careers at Ardn Cloud Solutions — Orlando AI & Salesforce Roles",
    description:
      "Join Ardn Cloud Solutions in Orlando, Florida. Open AI engineering, Salesforce, and custom development roles. Senior-led teams, direct ownership.",
    url: "https://ardncloudsolutions.com/career",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Careers at Ardn Cloud Solutions — Orlando-based AI and Salesforce engineering roles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Careers at Ardn Cloud Solutions — Orlando AI & Salesforce Roles",
    description:
      "Join Ardn Cloud Solutions in Orlando, Florida. Senior-led AI engineering and Salesforce roles.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

export default function CareerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Career", "item": "https://ardncloudsolutions.com/career" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareerContent />
      <ContactSection />
    </main>
  );
}
