import { Metadata } from "next";
import CareerContent from "./CareerContent";
import ContactSection from "@/components/common/ContactSection";

export const metadata: Metadata = {
  title: "Careers - Join Ardn Cloud Solutions",
  description:
    "Join Ardn Cloud Solutions and build a career in Salesforce innovation. Explore open positions and discover why Ardn is a great place to work.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/career",
    languages: {
      "en-US": "https://ardncloudsolutions.com/career",
      "x-default": "https://ardncloudsolutions.com/career",
    },
  },
  openGraph: {
    title: "Careers - Join Ardn Cloud Solutions",
    description:
      "Join Ardn Cloud Solutions and build a career in Salesforce innovation. Explore open positions and discover why Ardn is a great place to work.",
    url: "https://ardncloudsolutions.com/career",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join Ardn Cloud Solutions",
    description:
      "Join Ardn Cloud Solutions and build a career in Salesforce innovation. Explore open positions and discover why Ardn is a great place to work.",
    site: "@ardn_cloud_sol",
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
