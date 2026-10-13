import type { AiConsultingContent } from "./types";
import { SITE } from "./shared";

const ORG = { "@id": `${SITE}/#organization` };

const faqPage = (url: string, faqs: AiConsultingContent["faqs"]) => ({
  "@type": "FAQPage",
  "@id": `${url}#faq`,
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

const offerCatalog = (c: AiConsultingContent) => ({
  "@type": "OfferCatalog",
  name: "AI consulting services",
  itemListElement: [...c.steps.items, ...c.offer.items.slice(0, 5)].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
});

/** Hub: WebPage + Service (areaServed US) + FAQPage + BreadcrumbList. */
export function hubJsonLd(c: AiConsultingContent, opts: { path: string; name: string; description: string; image: string }) {
  const url = `${SITE}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: ORG,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: opts.name,
        serviceType: "AI consulting",
        description: opts.description,
        url,
        image: `${SITE}${opts.image}`,
        provider: ORG,
        areaServed: { "@type": "Country", name: "United States" },
        audience: { "@type": "BusinessAudience", name: "Small and mid-size businesses" },
        hasOfferCatalog: offerCatalog(c),
      },
      faqPage(url, c.faqs),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "AI Consulting", item: url },
        ],
      },
    ],
  };
}

/** City page: WebPage + ProfessionalService (areaServed city + Florida) +
 *  FAQPage + BreadcrumbList. Address and contact details are the site's
 *  existing Organization NAP (Orlando, FL; no street address). */
export function cityJsonLd(c: AiConsultingContent, opts: { path: string; city: string; name: string; description: string; image: string }) {
  const url = `${SITE}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: ORG,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}#service`,
        name: `Ardn Cloud Solutions: AI Consulting in ${opts.city}, FL`,
        description: opts.description,
        url,
        image: `${SITE}${opts.image}`,
        logo: `${SITE}/logo/favicon.jpeg`,
        telephone: "+1-407-815-5303",
        email: "contactus@ardncloudsolutions.com",
        address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
        parentOrganization: ORG,
        knowsAbout: ["AI consulting", "AI implementation", "AI automation", "Custom software", "Salesforce"],
        areaServed: [
          { "@type": "City", name: opts.city, containedInPlace: { "@type": "State", name: "Florida" } },
          { "@type": "State", name: "Florida" },
        ],
        hasOfferCatalog: offerCatalog(c),
      },
      faqPage(url, c.faqs),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "AI Consulting", item: `${SITE}/ai-consulting` },
          { "@type": "ListItem", position: 3, name: opts.city, item: url },
        ],
      },
    ],
  };
}
