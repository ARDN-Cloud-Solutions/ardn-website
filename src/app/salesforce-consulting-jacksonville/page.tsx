import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import CityBeyondSalesforce from "@/components/common/CityBeyondSalesforce";

// Local-intent landing page targeting Jacksonville / North Florida Salesforce
// buyer queries. Same template as /salesforce-consulting-orlando, customised
// for the Jacksonville market — finance/insurance, logistics, healthcare,
// and military-services concentrations.
export const metadata: Metadata = {
  title:
    "Jacksonville Salesforce Consulting & Services | Ardn",
  description:
    "Salesforce consulting, implementation, license audits & managed services for Jacksonville businesses. 30+ years of expertise. Book a free call.",
  keywords: [
    "Salesforce consultant Jacksonville",
    "Salesforce consulting Jacksonville",
    "Salesforce consulting North Florida",
    "Salesforce implementation partner Jacksonville",
    "Salesforce managed services Jacksonville",
    "Salesforce license audit Jacksonville",
    "Salesforce integration JAX",
    "Salesforce admin services Jacksonville",
    "Ardn Cloud Solutions",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/salesforce-consulting-jacksonville",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/salesforce-consulting-jacksonville",
      "x-default":
        "https://ardncloudsolutions.com/salesforce-consulting-jacksonville",
    },
  },
  openGraph: {
    title:
      "Salesforce Consulting & Managed Services in Jacksonville, FL | Ardn Cloud Solutions",
    description:
      "Florida-based Salesforce consultants serving Jacksonville and North Florida. 30+ years of expertise. Free 30-min strategy call.",
    url: "https://ardncloudsolutions.com/salesforce-consulting-jacksonville",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce consulting and managed services for Jacksonville-area businesses — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salesforce Consulting & Managed Services in Jacksonville, FL | Ardn Cloud Solutions",
    description:
      "Florida-based Salesforce consultants serving Jacksonville. Free 30-min strategy call.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export default function SalesforceConsultingJacksonvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://ardncloudsolutions.com/salesforce-consulting-jacksonville#service",
        name: "Salesforce Consulting & Managed Services — Jacksonville, FL",
        serviceType: "Salesforce Consulting & Managed Services",
        description:
          "Salesforce consulting, implementation, license audits, integration, and managed services delivered to Jacksonville and North Florida businesses by Ardn's Florida-based team with 30+ years of Salesforce expertise.",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Jacksonville",
            containedInPlace: { "@type": "State", name: "Florida" },
          },
          { "@type": "AdministrativeArea", name: "North Florida" },
          { "@type": "State", name: "Florida" },
          { "@type": "Country", name: "United States" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Salesforce services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Salesforce Implementation & Configuration",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Salesforce License Audit & Optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Salesforce Integration & Custom Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Salesforce Managed Services & Admin Support",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI on Salesforce (AI Forge Framework)",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://ardncloudsolutions.com/salesforce-consulting-jacksonville#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do you serve clients in Jacksonville and North Florida?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Ardn Cloud Solutions is headquartered in Orlando, Florida — about 2 hours from Jacksonville — and we work with clients across Duval, St. Johns, Clay, and Nassau counties. We deliver remote-first, with in-person engagement available when needed.",
            },
          },
          {
            "@type": "Question",
            name: "What Salesforce services do you offer Jacksonville businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Salesforce implementation and configuration, license audits and seat-cost optimization (powered by our License Guard product), integrations, custom development, ongoing managed services and admin support, and AI applications built on Salesforce using our AI Forge Framework.",
            },
          },
          {
            "@type": "Question",
            name: "Which Jacksonville industries do you typically work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Jacksonville finance and insurance (the region is a major insurance and banking hub), logistics and ports, healthcare and hospital systems, professional services, and defense-services contractors. Common thread: Salesforce orgs needing senior-led delivery without big-firm overhead.",
            },
          },
          {
            "@type": "Question",
            name: "How fast can you start a Salesforce engagement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We reply to every inquiry within four business hours. Most discovery calls happen within a week, and most engagements kick off within 2–3 weeks of the first call — much faster than the typical 8–12 week onboarding cycle from a national partner.",
            },
          },
          {
            "@type": "Question",
            name: "Can you reduce our Salesforce license spend?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually, yes. Most customers we audit are over-licensed by 15–30%. Our License Guard product detects inactive seats and unused features so you can right-size your contract at renewal. We can run a free first-pass audit on a 30-minute call.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://ardncloudsolutions.com/salesforce-consulting-jacksonville#breadcrumb",
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
            name: "Salesforce Consulting · Jacksonville",
            item: "https://ardncloudsolutions.com/salesforce-consulting-jacksonville",
          },
        ],
      },
    ],
  };

  const services = [
    {
      title: "Salesforce Implementation",
      body: "Stand up a new Salesforce org or refit an existing one. Sales Cloud, Service Cloud, Experience Cloud, and custom objects — configured by senior consultants, not offshore juniors.",
    },
    {
      title: "License Audit & Cost Optimization",
      body: "Free first-pass audit identifies inactive seats and unused features. Most customers reclaim 15–30% of their Salesforce spend at the next renewal. Powered by our License Guard product.",
    },
    {
      title: "Integrations & Custom Development",
      body: "Connect Salesforce to your billing, marketing automation, data warehouse, or internal APIs. Apex, LWC, and 5,000+ AppExchange tools — we build to your specs.",
    },
    {
      title: "Managed Services & Admin Support",
      body: "Ongoing admin, configuration, reports, and dashboards under one monthly retainer. 4-hour response SLA. No long-term contracts on month-to-month plans.",
    },
    {
      title: "AI on Salesforce",
      body: "Custom AI applications that read from, write to, and orchestrate work inside Salesforce — built on our proprietary AI Forge Framework. Production-ready in 2–6 weeks.",
    },
    {
      title: "Salesforce-Native Products",
      body: "Storefronts (Salesforce-native commerce), License Guard (license recovery), and Salesforce Payments (quote-to-cash inside SF). Productized, install in days.",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ardn-page">
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Salesforce · Jacksonville, FL</span>
                <h1 className="display reveal">
                  Salesforce consulting for <em>Jacksonville, FL.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Florida-based, 30+ years of Salesforce expertise. Implementation,
                  license audits, integrations, managed services, and AI on
                  Salesforce — for Jacksonville insurance, finance, logistics,
                  and healthcare operators.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "22px",
                  }}
                >
                  <span className="badge">Florida-based team</span>
                  <span className="badge is-emerald">30+ yrs Salesforce</span>
                  <span className="badge is-canvas">4-hour SLA</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    className="btn btn-primary btn-lg btn-arrow"
                  >
                    Book a free 30-min call
                  </Link>
                  <Link href="#services" className="btn btn-secondary btn-lg">
                    See what we do
                  </Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Jacksonville industries</div>
                  <ul className="features mt-3">
                    <li>Insurance &amp; financial services</li>
                    <li>Logistics, ports &amp; supply chain</li>
                    <li>Healthcare &amp; hospital systems</li>
                    <li>Professional &amp; defense services</li>
                    <li>Mid-market &amp; enterprise Salesforce orgs</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Services</span>
                <h2 className="h1 mt-3">
                  Everything Salesforce, <em>under one roof.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  From new-org implementation to ongoing managed services. From
                  free license audits to AI applications built directly inside
                  Salesforce on the AI Forge Framework.
                </p>
              </div>
            </div>
            <div className="grid-3">
              {services.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEYOND SALESFORCE — surfaces AI Forge + Membership Management to
            Jacksonville visitors so the page converts on either pillar. */}
        <CityBeyondSalesforce city="Jacksonville" />

        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why a Florida-based team</span>
                <h2 className="h1 mt-3">
                  Same time zone. <em>Senior consultants. No handoffs.</em>
                </h2>
                <p className="body mt-4">
                  Every Salesforce engagement at Ardn is led by senior consultants
                  based in Florida. Jacksonville clients work with the same lead
                  from the first discovery call through delivery — no offshore
                  handoff, no junior re-staffing, and full Eastern-Time business
                  overlap.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">
                        4-hour response SLA
                      </div>
                      <p className="fl-body">
                        We answer every inbound within four business hours.
                        Guaranteed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">
                        2 hours from Jacksonville
                      </div>
                      <p className="fl-body">
                        On-site visits available when they make sense. Otherwise
                        remote-first delivery with full Eastern-Time overlap.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">
                        No long-term contracts
                      </div>
                      <p className="fl-body">
                        Managed services on month-to-month plans. Project work on
                        fixed-quote, fixed-timeline engagements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">
                        30+ yrs Salesforce experience
                      </div>
                      <p className="fl-body">
                        Multi-cloud, multi-vertical, and AppExchange-built since
                        before Lightning. Battle-tested patterns from day one.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonial">
              <span className="eyebrow">What clients say</span>
              <p className="quote mt-4">
                Ardn Cloud Solutions went beyond our expectations, implementing a
                hands-on, cost-saving approach that has been invaluable to our
                business.
              </p>
              <div className="attribution">
                <div className="avatar">JV</div>
                <div>
                  <div className="who">Jay Vashi</div>
                  <div className="role">
                    Senior Delivery Manager · Fortune 500 insurance company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Talk to a senior Salesforce consultant in <em>Florida.</em>
              </h2>
              <p className="lede">
                30-minute free strategy call. No SOW, no slides — a working answer
                on what to do first.
              </p>
              <div className="hero-ctas">
                <a
                  href={CALENDLY}
                  target="_blank"
                  className="btn btn-on-dark btn-lg btn-arrow"
                >
                  Book your free call
                </a>
                <Link
                  href="/contact-us"
                  className="btn btn-outline-light btn-lg"
                >
                  Or send a message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
