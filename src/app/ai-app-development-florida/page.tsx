import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

// Local-intent landing page targeting Florida AI custom-development queries.
// Companion to /salesforce-consulting-orlando — together they cover the two
// commercial pillars (Cat 1 Salesforce, Cat 2 Custom AI) for the local buyer.
// Single CTA (Calendly), single conversion path.
export const metadata: Metadata = {
  title:
    "AI App Development in Florida — Custom AI in Weeks | Ardn",
  description:
    "Custom AI app development by a Florida team. AI Forge ships production-ready AI apps in 2–6 weeks — designed, built, deployed & run for one monthly fee.",
  keywords: [
    "AI app development Florida",
    "AI development Orlando",
    "custom AI development Florida",
    "AI consultant Florida",
    "AI implementation Florida",
    "AI software development Orlando",
    "AI agency Florida",
    "AI Forge Framework",
    "AI as a service Florida",
    "Salesforce AI integration",
    "Ardn AI Forge",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/ai-app-development-florida",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/ai-app-development-florida",
      "x-default":
        "https://ardncloudsolutions.com/ai-app-development-florida",
    },
  },
  openGraph: {
    title:
      "AI App Development in Florida — Custom AI in Weeks | Ardn",
    description:
      "Florida-based team. AI Forge Framework ships production AI apps in 2–6 weeks under one monthly subscription. Free 30-min strategy call.",
    url: "https://ardncloudsolutions.com/ai-app-development-florida",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom AI app development in Florida — Ardn AI Forge Framework, Orlando-based team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI App Development in Florida — Custom AI in Weeks | Ardn",
    description:
      "Florida-based team. AI Forge Framework ships production AI apps in 2–6 weeks. Free 30-min strategy call.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export default function AiAppDevelopmentFloridaPage() {
  // SEO: Service + FAQPage + BreadcrumbList. The Service binds to the site
  // Organization @id and lists each AI Forge offering as an Offer in the
  // OfferCatalog so each is independently surfaceable in rich results.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id":
          "https://ardncloudsolutions.com/ai-app-development-florida#service",
        name: "Custom AI App Development — Florida",
        serviceType: "Custom AI Application Development & Managed AI Service",
        description:
          "Custom AI application development by Ardn's Orlando-based team. Discovery to production in 2–6 weeks via the proprietary AI Forge Framework, then operated under one monthly subscription.",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          {
            "@type": "City",
            name: "Orlando",
            containedInPlace: {
              "@type": "State",
              name: "Florida",
            },
          },
          { "@type": "State", name: "Florida" },
          { "@type": "Country", name: "United States" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Forge offerings",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Discovery & Scope (Week 1)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Application Build (Weeks 1–4)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Deployment & Production Operation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ongoing AI Iteration & Managed Service",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI on Salesforce, HubSpot, and Internal Systems",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://ardncloudsolutions.com/ai-app-development-florida#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is the development team based?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Orlando, Florida. Every AI Forge engagement is led by senior engineers on the Ardn team — no offshore handoffs after the sales call. Eastern Time overlaps with every US business day in full.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an AI app take to build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most AI Forge engagements ship a production-ready application in 2–6 weeks. Discovery and fixed-quote within 48 hours of the first call; weekly demos during the build; live deployment on a fixed date.",
            },
          },
          {
            "@type": "Question",
            name: "What does the AI Forge Framework cover?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Discovery, architecture, build, deployment, hosting, monitoring, model upgrades, and continuous iteration — all under one monthly subscription. Three tiers (Launch / Scale / Enterprise) and a one-time build fee, with rolled-over AI credits and service credits each month.",
            },
          },
          {
            "@type": "Question",
            name: "Can you integrate AI apps with Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — Salesforce integration is one of our specialties. Ardn has 30+ years of Salesforce experience as a company, so AI Forge applications routinely read from, write to, and orchestrate work inside Salesforce. We also integrate with HubSpot, Microsoft Dynamics, data warehouses, internal APIs, and 5,000+ other tools.",
            },
          },
          {
            "@type": "Question",
            name: "Do I own the AI app you build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You own the IP and the data. We retain rights to the frameworks and tooling we use across clients. If you ever leave, you get a complete data export and full application documentation — no lock-in.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://ardncloudsolutions.com/ai-app-development-florida#breadcrumb",
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
            name: "AI App Development · Florida",
            item: "https://ardncloudsolutions.com/ai-app-development-florida",
          },
        ],
      },
    ],
  };

  const services = [
    {
      title: "Discovery & Fixed Quote",
      body: "We map your workflow, identify the highest-leverage AI opportunity, and return a fixed quote with a fixed delivery date — within 48 hours of the first call.",
    },
    {
      title: "Production-Grade Build",
      body: "Architecture, build, and test on production-grade infrastructure. Weekly demos — never months of silence. Built on the AI Forge Framework so it ships fast and stays maintainable.",
    },
    {
      title: "Deploy & Operate",
      body: "Live deployment with monitoring, security review, and team training. Your monthly subscription starts the day your app goes live — not before.",
    },
    {
      title: "Continuous Iteration",
      body: "Hosting, model upgrades, security patches, new features, and prompt optimization — all rolled into one monthly subscription with AI credits and service credits.",
    },
    {
      title: "Custom Integrations",
      body: "Deep integrations with Salesforce, HubSpot, Microsoft Dynamics, your data warehouse, internal APIs, billing, and 5,000+ tools. Built to your spec, not a template.",
    },
    {
      title: "Vertical AI Applications",
      body: "Customer-facing chatbots, support automation, document processing, sales enablement, analytics, forecasting, and industry-specific vertical apps. If you can describe it, we can build it.",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ardn-page">
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">AI Development · Florida</span>
                <h1 className="display reveal">
                  Custom AI apps, built in <em>Florida.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Our Orlando-based development team uses the proprietary AI
                  Forge Framework to design, build, deploy, and operate custom AI
                  applications in 2–6 weeks. Backed by 30+ years of Salesforce
                  expertise so the integrations are deep from day one.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "22px",
                  }}
                >
                  <span className="badge">AI Forge Framework</span>
                  <span className="badge is-emerald">
                    2–6 weeks to production
                  </span>
                  <span className="badge is-canvas">Orlando, FL · ET</span>
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
                    How it works
                  </Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">What we build</div>
                  <ul className="features mt-3">
                    <li>Customer-facing chatbots &amp; support agents</li>
                    <li>Internal workflow &amp; document automation</li>
                    <li>Sales enablement &amp; lead-scoring AI</li>
                    <li>AI inside Salesforce &amp; HubSpot</li>
                    <li>Vertical AI for healthcare, fitness, services</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Trust strip below hero — Florida + AI Forge + SF credibility. */}
        <TrustBar />

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How it works</span>
                <h2 className="h1 mt-3">
                  From idea to production, <em>in weeks.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Most AI agencies disappear after delivery, and most in-house
                  hires take six months to ramp. We do both — build the
                  application, then run it for you under one monthly subscription.
                </p>
              </div>
            </div>
            <div className="grid-3">
              {services.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/ai-forge" className="link">
                See full AI Forge pricing &amp; tiers →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY FLORIDA */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why a Florida-based AI team</span>
                <h2 className="h1 mt-3">
                  Senior engineers, <em>on Eastern Time.</em>
                </h2>
                <p className="body mt-4">
                  Every AI Forge engagement is led by senior engineers based in
                  Orlando. You meet the lead on the first call and work with them
                  through delivery. No offshore handoff, no junior re-staffing,
                  and full-business-day overlap with every US client.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">
                        Fixed quote in 48 hours
                      </div>
                      <p className="fl-body">
                        Discovery call → written scope and price within two
                        business days. No multi-week scoping cycle.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">
                        Production in 2–6 weeks
                      </div>
                      <p className="fl-body">
                        AI Forge Framework standardizes the boring parts so the
                        team can focus on what makes your app actually work.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">
                        One bill, one team, forever
                      </div>
                      <p className="fl-body">
                        Build, host, monitor, upgrade, and iterate — all under
                        one monthly subscription with rolled-over credits.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">
                        Deep Salesforce + HubSpot integrations
                      </div>
                      <p className="fl-body">
                        30+ years of Salesforce expertise feeds every AI build —
                        if your AI needs to live inside your CRM, we make it work.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
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

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Talk to a senior AI engineer in <em>Florida.</em>
              </h2>
              <p className="lede">
                30-minute free strategy call. We&apos;ll map the highest-leverage
                AI opportunity in your business and give you a fixed quote within
                48 hours.
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
                  href="/ai-forge"
                  className="btn btn-outline-light btn-lg"
                >
                  See AI Forge pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
