import { Metadata } from "next";
import HomeContent from "./HomeContent";
import { HOME_FAQS } from "./homeFaqs";

export const metadata: Metadata = {
  // Keyword focus (2026): lead with the money-buyer terms — custom
  // software / platforms / portals — NOT generic "AI app development"
  // (which draws free-seeker traffic that never converts). AI stays a
  // capability, surfaced on /ai-forge, not the homepage's primary term.
  // 2026-10-09: homepage CTR fell from 7.8% to 2.5% after the Sept rebrand
  // dropped Salesforce from the title; most of the site's ranking pages are
  // Salesforce cost/e-commerce posts, so the title names it again.
  title: "Ardn Cloud Solutions: Salesforce Experts & Industry Software",
  description:
    "Salesforce consulting, e-commerce and license savings, plus ready-to-run software for clubs, nonprofits and contractors. US team in Orlando. Reply in 4 hours.",
  alternates: {
    canonical: "https://ardncloudsolutions.com",
    languages: {
      "en-US": "https://ardncloudsolutions.com",
      "x-default": "https://ardncloudsolutions.com",
    },
  },
  openGraph: {
    title: "Ardn Cloud Solutions: Salesforce Experts & Industry Software",
    description: "Salesforce consulting, e-commerce and license savings, plus ready-to-run software for clubs, nonprofits and contractors. US team in Orlando. Reply in 4 hours.",
    url: "https://ardncloudsolutions.com",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-share.jpg",
        width: 1200,
        height: 630,
        alt: "Ardn Cloud Solutions Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ardn_cloud_sol",
    title: "Ardn Cloud Solutions: Salesforce Experts & Industry Software",
    description:
      "Salesforce consulting, e-commerce and license savings, plus ready-to-run software for clubs, nonprofits and contractors. US team in Orlando. Reply in 4 hours.",
    images: ["/images/ardn-share.jpg"],
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
        "name": "Industry Software, Built & Run for You | ARDN Cloud Solutions",
        "description": "Salesforce consulting, e-commerce and license savings, plus ready-to-run software for clubs, nonprofits and contractors. US team in Orlando. Reply in 4 hours.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://ardncloudsolutions.com/#website",
        "url": "https://ardncloudsolutions.com/",
        "name": "Ardn Cloud Solutions",
        "description": "Custom software, platforms, and portals — built and run for you.",
        "publisher": { "@id": "https://ardncloudsolutions.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ardncloudsolutions.com/blog/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
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
          "https://www.youtube.com/@ardncloudsolutions",
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
      <HomeContent />
    </>
  );
}
