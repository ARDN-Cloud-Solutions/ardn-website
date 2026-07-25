import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Ardn — Free Salesforce & AI Strategy Call",
  description: "Book a free 30-minute strategy call with the Orlando-based Ardn team — custom AI development, Salesforce-native products, and 30+ years of expertise.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/contact-us",
    languages: {
      "en-US": "https://ardncloudsolutions.com/contact-us",
      "x-default": "https://ardncloudsolutions.com/contact-us",
    },
  },
  openGraph: {
    title: "Contact Ardn — Free Salesforce & AI Strategy Call",
    description: "Book a free 30-minute strategy call with the Orlando-based Ardn team. Custom AI development via the AI Forge Framework, Salesforce-native cloud products, and Salesforce consulting backed by 30+ years of expertise. Reply within 4 business hours.",
    url: "https://ardncloudsolutions.com/contact-us",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/contact-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Contact Ardn Cloud Solutions — book a free Salesforce and AI strategy call with our Orlando-based team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ardn — Free Salesforce & AI Strategy Call",
    description: "Book a free 30-minute strategy call with the Orlando-based Ardn team. Custom AI development via the AI Forge Framework, Salesforce-native cloud products, and Salesforce consulting backed by 30+ years of expertise. Reply within 4 business hours.",
    site: "@ardn_cloud_sol",
  },
};

export default function ContactUsPage() {
  // GEO/Local SEO: LocalBusiness schema on the contact page makes the
  // business eligible for the Google Local Pack and "near me" / local queries.
  // Includes geo coordinates (Orlando, FL), opening hours, contact point,
  // priceRange, and area served. Lives alongside the WebPage and
  // BreadcrumbList markup. References the site-wide Organization by @id.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://ardncloudsolutions.com/#localbusiness",
        name: "Ardn Cloud Solutions",
        url: "https://ardncloudsolutions.com",
        image: "https://ardncloudsolutions.com/images/ardn-home-hero.webp",
        logo: "https://ardncloudsolutions.com/logo/favicon.jpeg",
        description:
          "Orlando-based custom AI development, Salesforce consulting, and managed services. Custom AI applications via the AI Forge Framework, Salesforce-native cloud products, and 30+ years of Salesforce expertise.",
        telephone: "+1-407-815-5303",
        email: "contactus@ardncloudsolutions.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Orlando",
          addressRegion: "FL",
          addressCountry: "US",
        },
        // Approximate downtown-Orlando coordinates. Replace with the exact
        // business address when ready to claim a Google Business Profile.
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.5383,
          longitude: -81.3792,
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.linkedin.com/company/ardn-cloud-solutions/",
        ],
        parentOrganization: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/contact-us",
        url: "https://ardncloudsolutions.com/contact-us",
        name: "Contact Ardn — Free Salesforce & AI Strategy Call",
        description:
          "Book a free 30-minute strategy call with our Orlando-based team. Custom AI apps, Salesforce consulting, managed services, and a focused suite of cloud products — reply within 4 business hours.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/contact-us#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/#localbusiness",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/contact-us#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://ardncloudsolutions.com/contact-us",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-[70px] lg:pt-[154px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </div>
  );
}
