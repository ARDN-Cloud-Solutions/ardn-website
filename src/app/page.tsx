import { Metadata } from "next";
import LandingPageContent from "./LandingPageContent";
import { HOME_FAQS } from "./homeFaqs";

export const metadata: Metadata = {
  title: "Custom AI App Development & Salesforce Solutions | ARDN",
  description:
    "We design, build, and run custom AI applications and Salesforce-native products that cut costs, simplify operations, and unlock growth — for clients across the US. Book a free demo.",
  alternates: {
    canonical: "https://ardncloudsolutions.com",
    languages: {
      "en-US": "https://ardncloudsolutions.com",
      "x-default": "https://ardncloudsolutions.com",
    },
  },
  openGraph: {
    title: "ARDN Cloud Solutions — Custom AI Apps, Built & Run for You",
    description: "Custom AI apps and Salesforce-native products, built and run by an Orlando team — cut costs, simplify operations, and unlock growth.",
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
        "name": "Custom AI App Development & Salesforce Solutions | ARDN Cloud Solutions",
        "description": "We design, build, and run custom AI applications and Salesforce-native products that cut costs, simplify operations, and unlock growth — for clients across the US.",
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
      },
      {
        // GEO/SEO: homepage FAQPage. Questions/answers mirror the visible FAQ
        // section exactly (both import HOME_FAQS) so the rich result is valid
        // and AI engines can extract clean, quotable answers about Ardn.
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/#faq",
        "mainEntity": HOME_FAQS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
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
