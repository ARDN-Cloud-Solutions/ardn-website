import type { Metadata } from "next";
import AboutContent from "./AboutContent";

// SEO/positioning: About Ardn is the hybrid identity page. It anchors both
// pillars — Florida-based custom AI/development practice (AI Forge Framework,
// Cat 2) AND Salesforce consulting/managed services with 30+ years of expertise
// (Cat 1). Metadata keywords cover both intent buckets so the page ranks for
// "Salesforce consulting Florida" AND "AI development Orlando" searches.
export const metadata: Metadata = {
  title:
    "About Ardn — Industry Software, Custom AI & Consulting",
  description:
    "Ardn Cloud Solutions is an Orlando, FL custom software & AI development team with 30+ years of technology and consulting experience and managed services.",
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
      "About Ardn — Industry Software, Custom AI & Consulting",
    description:
      "Orlando, FL custom AI and software development with 30+ years of technology and consulting experience. Industry software products, custom software and AI, and consulting under one roof.",
    url: "https://ardncloudsolutions.com/about-ardn",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/about-ardn-hero.webp",
        width: 1200,
        height: 630,
        alt: "About Ardn Cloud Solutions — Orlando-based software, AI and consulting team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Ardn — Industry Software, Custom AI & Consulting",
    description:
      "Orlando, FL custom AI and software development with 30+ years of technology and consulting experience. AI Forge Framework + Salesforce-native products + consulting.",
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
          "Ardn Cloud Solutions is an Orlando, FL custom AI and software development team with 30+ years of technology and consulting experience. We build software products for specific industries, design custom software and AI with the AI Forge Framework, and run everything as a managed service.",
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
              text: "Three things. (1) Software products for specific industries: Club Steward for golf and country clubs, Nonprofit Management and Membership Management. (2) Custom software and AI applications, built and operated by our Florida-based team using the AI Forge Framework. (3) Technology consulting, implementation and managed services, including for teams that run on Salesforce.",
            },
          },
          {
            "@type": "Question",
            name: "How much experience does the Ardn team have?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our team has 30+ years of combined experience designing, building, integrating and running business software, from AI applications to enterprise platforms such as Salesforce. Most engagements are led directly by partners, not handed to junior staff or offshore teams.",
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
