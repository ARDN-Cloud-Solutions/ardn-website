import type { Metadata } from "next";
import AboutContent from "./AboutContent";


export const metadata: Metadata = {
    title: "About Ardn - Ardn Cloud Solutions",
    description:
        "Learn about ARDN Cloud Solutions — our mission, team, and expertise in Salesforce commerce, optimisation, and integration that drives measurable results.",
    alternates: {
        canonical: "https://ardncloudsolutions.com/about-ardn",
        languages: {
            "en-US": "https://ardncloudsolutions.com/about-ardn",
            "x-default": "https://ardncloudsolutions.com/about-ardn",
        },
    },
    openGraph: {
        title: "About Ardn - Ardn Cloud Solutions",
        description:
            "Learn about ARDN Cloud Solutions — our mission, team, and expertise in Salesforce commerce, optimisation, and integration that drives measurable results.",
        url: "https://ardncloudsolutions.com/about-ardn",
        siteName: "Ardn Cloud Solutions",
        images: [
            {
                url: "/images/about-ardn-hero.webp",
                width: 1200,
                height: 630,
                alt: "About Ardn Cloud Solutions",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Ardn - Ardn Cloud Solutions",
        description:
            "Learn about ARDN Cloud Solutions — our mission, team, and expertise in Salesforce commerce, optimisation, and integration that drives measurable results.",
        site: "@ardn_cloud_sol",
    },
};

export default function AboutArdnPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "About Ardn", "item": "https://ardncloudsolutions.com/about-ardn" }
    ]
  };

    return (
        <main>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AboutContent />
        </main>
    );
}
