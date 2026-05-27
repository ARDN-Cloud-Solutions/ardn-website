import { Metadata } from "next";
import LandingPageContent from "./LandingPageContent";

export const metadata: Metadata = {
  title: "Ardn Cloud Solutions — Technology that pays for itself",
  description: "Ardn builds and integrates cloud products that cut costs, simplify operations, and unlock growth — standalone, alongside Salesforce, or wherever your business runs.",
  alternates: {
    canonical: "https://ardncloudsolutions.com",
    languages: {
      "en-US": "https://ardncloudsolutions.com",
      "x-default": "https://ardncloudsolutions.com",
    },
  },
  openGraph: {
    title: "Homepage - Ardn Cloud Solutions",
    description: "ARDN Cloud Solutions offers expert Salesforce services — storefronts, integrations, optimisation, and support.",
    url: "https://ardncloudsolutions.com",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Cloud Solutions Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/",
        "url": "https://ardncloudsolutions.com/",
        "name": "Homepage - Ardn Cloud Solutions",
        "description": "ARDN Cloud Solutions offers expert Salesforce services — storefronts, integrations, optimisation, and support. See what we can build for your business.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://ardncloudsolutions.com/#website",
        "url": "https://ardncloudsolutions.com/",
        "name": "Ardn Cloud Solutions",
        "description": "Power Up Salesforce with Next-Level Products",
        "publisher": { "@id": "https://ardncloudsolutions.com/#organization" },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://ardncloudsolutions.com/#organization",
        "name": "Ardn Cloud Solutions",
        "url": "https://ardncloudsolutions.com/",
        "email": "contactus@ardncloudsolutions.com",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://ardncloudsolutions.com/#/schema/logo/image/",
          "url": "https://ardncloudsolutions.com/logo/ardn_logo_white.svg",
          "contentUrl": "https://ardncloudsolutions.com/logo/ardn_logo_white.svg",
          "width": 350,
          "height": 90,
          "caption": "Ardn Cloud Solutions"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61569012437188",
          "https://x.com/ardn_cloud_sol",
          "https://www.instagram.com/ardncloudsolutions/",
          "https://www.youtube.com/@ardn_cloud_solutions",
          "https://www.linkedin.com/company/ardn-cloud-solutions/"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPageContent />
    </>
  );
}
