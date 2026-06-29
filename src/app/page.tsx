import { Metadata } from "next";
import LandingPageContent from "./LandingPageContent";
import { HOME_FAQS } from "./homeFaqs";

export const metadata: Metadata = {
  // Title trimmed to ≤60 chars and description to ≤160 so neither is
  // truncated in Google's results. Keyword "Custom AI App Development"
  // stays at the front (most weight).
  title: "Custom AI App Development — Built & Run for You | ARDN",
  description:
    "We design, build, and run custom AI applications for businesses across the US — live in 2–6 weeks for one flat monthly fee. New customers: free build.",
  alternates: {
    canonical: "https://ardncloudsolutions.com",
    languages: {
      "en-US": "https://ardncloudsolutions.com",
      "x-default": "https://ardncloudsolutions.com",
    },
  },
  openGraph: {
    title: "ARDN Cloud Solutions — Custom AI Apps, Built & Run for You",
    description: "Custom AI apps designed, built, and run for you — production-ready in 2–6 weeks under one flat monthly fee. New customers: we build your app free.",
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
        "name": "Custom AI App Development — Built & Run for You | ARDN Cloud Solutions",
        "description": "We design, build, and run custom AI applications for businesses across the US — live in 2–6 weeks for one flat monthly fee. New customers: free build.",
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
