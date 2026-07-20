import type { Metadata } from "next";
import AboutContent from "./AboutContent";

// SEO/positioning: About Ardn is the hybrid identity page. It anchors both
// pillars — Florida-based custom AI/development practice (AI Forge Framework,
// Cat 2) AND Salesforce consulting/managed services with 30+ years of expertise
// (Cat 1). Metadata keywords cover both intent buckets so the page ranks for
// "Salesforce consulting Florida" AND "AI development Orlando" searches.
export const metadata: Metadata = {
  title:
    "About Ardn — Custom AI & Salesforce Experts",
  description:
    "Ardn Cloud Solutions is an Orlando, FL custom software & AI development team with 30+ years of Salesforce consulting expertise and managed services.",
  keywords: [
    "Ardn Cloud Solutions",
    "Salesforce consultant Florida",
    "Salesforce consulting Orlando",
    "custom AI development team",
    "AI Forge Framework",
    "Orlando software development",
    "Florida-based AI agency",
    "Salesforce managed services",
    "Salesforce implementation partner",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/about-ardn",
    languages: {
      "en-US": "https://ardncloudsolutions.com/about-ardn",
      "x-default": "https://ardncloudsolutions.com/about-ardn",
    },
  },
  openGraph: {
    title:
      "About Ardn — Custom AI & Salesforce Experts",
    description:
      "Orlando, FL custom AI and software development with 30+ years of Salesforce expertise. AI Forge Framework + Salesforce-native products + consulting under one roof.",
    url: "https://ardncloudsolutions.com/about-ardn",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/about-ardn-hero.webp",
        width: 1200,
        height: 630,
        alt: "About Ardn Cloud Solutions — Orlando-based custom AI development and Salesforce consulting team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Ardn — Custom AI & Salesforce Experts",
    description:
      "Orlando, FL custom AI and software development with 30+ years of Salesforce expertise. AI Forge Framework + Salesforce-native products + consulting.",
    site: "@ardn_cloud_sol",
  },
};

export default function AboutArdnPage() {
  // SEO: AboutPage + Organization-by-reference + FAQPage + BreadcrumbList.
  // AboutPage is the right primary type for the company identity page.
  // The Organization is referenced by @id back to the site-wide entity.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://ardncloudsolutions.com/about-ardn",
        url: "https://ardncloudsolutions.com/about-ardn",
        name: "About Ardn Cloud Solutions",
        description:
          "Ardn Cloud Solutions is an Orlando, FL custom AI and software development team with 30+ years of Salesforce consulting expertise. We build AI-powered products using the AI Forge Framework and deliver Salesforce-native cloud products and managed services.",
        mainEntity: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/about-ardn#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/about-ardn#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Ardn Cloud Solutions based?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ardn Cloud Solutions is headquartered in Orlando, Florida. Our team works with clients across the United States and globally, with Eastern Time overlap that covers every US business day.",
            },
          },
          {
            "@type": "Question",
            name: "What does Ardn Cloud Solutions do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Two pillars. (1) Custom AI applications and bespoke software, built and operated by our Florida-based team using the proprietary AI Forge Framework. (2) Salesforce-native cloud products (Storefronts, License Guard, Salesforce Payments), Salesforce consulting, implementation, and managed services backed by 30+ years of expertise.",
            },
          },
          {
            "@type": "Question",
            name: "How long has Ardn been doing Salesforce work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our team has 30+ years of combined Salesforce design, build, integration, and deployment experience. Most engagements are led directly by partners, not handed to junior staff or offshore teams.",
            },
          },
          {
            "@type": "Question",
            name: "Do you take small clients or only enterprise?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Both. Our AI Forge Launch tier starts at $3,000/month for small businesses, and our Enterprise tier supports Fortune 500 customers with dedicated infrastructure. Same Florida-based team, scaled to fit.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/about-ardn#breadcrumb",
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
            name: "About Ardn",
            item: "https://ardncloudsolutions.com/about-ardn",
          },
        ],
      },
    ],
  };

  return (
    // Semantic HTML5: <main> is the primary page landmark.
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </main>
  );
}
