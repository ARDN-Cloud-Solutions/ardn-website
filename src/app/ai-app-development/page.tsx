import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

// National hub page for the core commercial keyword family:
// "custom AI app development company / agency / AI development partner".
// Non-geo by design — Ardn serves clients across the US, so this page does
// NOT anchor on a city the way the Florida landing page does. It is the
// canonical top-of-funnel destination for AI Forge organic traffic.
export const metadata: Metadata = {
  title:
    "Custom AI App Development Company | Built & Run for You — Ardn AI Forge",
  description:
    "Ardn is a custom AI app development company that designs, builds, deploys, and operates production-ready AI applications in 2–6 weeks — under one flat monthly fee. New customers: we build your app free. Serving companies across the US.",
  keywords: [
    "custom AI app development company",
    "AI development agency",
    "AI app development services",
    "custom AI software development",
    "AI application development",
    "AI development partner",
    "build a custom AI app",
    "AI as a service",
    "managed AI development",
    "AI Forge Framework",
    "enterprise AI development",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-app-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-app-development",
      "x-default": "https://ardncloudsolutions.com/ai-app-development",
    },
  },
  openGraph: {
    title:
      "Custom AI App Development Company | Built & Run for You — Ardn AI Forge",
    description:
      "We design, build, deploy, and operate custom AI applications in 2–6 weeks under one flat monthly fee. New customers: free custom AI build. Serving the US.",
    url: "https://ardncloudsolutions.com/ai-app-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom AI app development company — Ardn AI Forge Framework",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom AI App Development Company | Built & Run for You — Ardn AI Forge",
    description:
      "Production-ready custom AI apps in 2–6 weeks under one monthly fee. New customers: free custom AI build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What does a custom AI app development company actually do?",
    a: "We turn a business problem into a working AI application. That means discovery and scoping, architecture, building the app on production-grade infrastructure, deploying it, and then operating it — hosting, monitoring, model upgrades, and ongoing iteration. With Ardn it is all one team and one monthly subscription, so you never get handed off after launch.",
  },
  {
    q: "How long does it take to build a custom AI app?",
    a: "Most Ardn AI Forge engagements ship a production-ready application in 2–6 weeks. We deliver a fixed quote and fixed delivery date within 48 hours of the first call, run weekly demos during the build, and go live on a committed date — not an open-ended timeline.",
  },
  {
    q: "How much does custom AI app development cost?",
    a: "AI Forge runs on a flat monthly subscription across three tiers (Launch at $3,000/mo, Scale at $4,500/mo, and custom Enterprise) that covers the build, hosting, and ongoing iteration. For new customers we waive the one-time build fee entirely — you only pay the monthly subscription once your app is live.",
  },
  {
    q: "What kinds of AI apps do you build?",
    a: "Customer-facing chatbots and support agents, internal workflow automation, document processing and data extraction, sales enablement and lead scoring, analytics and forecasting, and industry-specific vertical apps. We build to your exact specification — we do not sell templates.",
  },
  {
    q: "Do I own the AI app you build?",
    a: "You own the IP and the data. We retain rights only to the underlying frameworks and tooling we reuse across clients. If you ever leave, you get a complete data export and full documentation of your application — no lock-in.",
  },
  {
    q: "Can the AI app integrate with our existing systems?",
    a: "Yes. AI Forge applications routinely connect to CRMs like Salesforce and HubSpot, data warehouses, billing systems, internal APIs, and 5,000+ other tools — whichever stack your business actually runs on.",
  },
];

const services = [
  {
    title: "Discovery & Fixed Quote",
    body: "We map your workflow, pinpoint the highest-leverage AI opportunity, and return a fixed quote with a fixed delivery date — within 48 hours of the first call. No multi-week scoping cycle.",
  },
  {
    title: "Production-Grade Build",
    body: "Architecture, build, and test on production infrastructure with weekly demos. Built on the AI Forge Framework so it ships fast and stays maintainable long after launch.",
  },
  {
    title: "Deploy & Operate",
    body: "Live deployment with monitoring, security review, and team training. Your subscription starts the day your app goes live — not before. Then we run it for you.",
  },
  {
    title: "Continuous Iteration",
    body: "Hosting, model upgrades, security patches, new features, and prompt optimization — all rolled into one monthly subscription with AI credits and service credits that roll over.",
  },
  {
    title: "Custom Integrations",
    body: "Deep integrations with your CRM, data warehouse, internal APIs, billing, and 5,000+ tools. Built to your spec so the AI lives where your team already works.",
  },
  {
    title: "Vertical AI Applications",
    body: "Industry-specific builds for insurance, hospitality, membership organizations, healthcare, and professional services. If you can describe the problem, we can scope the build.",
  },
];

export default function AiAppDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/ai-app-development#service",
        name: "Custom AI App Development",
        serviceType: "Custom AI Application Development & Managed AI Service",
        description:
          "Ardn designs, builds, deploys, and operates custom AI applications for companies across the United States. Discovery to production in 2–6 weeks via the proprietary AI Forge Framework, then operated under one monthly subscription.",
        url: "https://ardncloudsolutions.com/ai-app-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Forge offerings",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI Discovery & Fixed Quote (48 hours)",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom AI Application Build (2–6 weeks)",
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
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/ai-app-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-app-development#breadcrumb",
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
            name: "Custom AI App Development",
            item: "https://ardncloudsolutions.com/ai-app-development",
          },
        ],
      },
    ],
  };

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
                <span className="eyebrow">Custom AI App Development</span>
                <h1 className="display reveal">
                  We build your AI app — <em>and run it for you.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most AI projects stall because the build is expensive, the
                  team disappears after launch, and the thing breaks the first
                  time a model changes. Ardn takes that risk off your plate: a
                  custom AI application designed around your exact workflow,
                  shipped in 2–6 weeks, then hosted and improved for one flat
                  monthly fee. New customers pay nothing to build it.
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
                  <span className="badge is-emerald">2–6 weeks to production</span>
                  <span className="badge is-canvas">Serving the US</span>
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
                    <li>Analytics, forecasting &amp; reporting AI</li>
                    <li>Industry-specific vertical apps</li>
                  </ul>
                  <p
                    className="body"
                    style={{
                      marginTop: "18px",
                      paddingTop: "16px",
                      borderTop: "1px solid #eceef5",
                      fontWeight: 600,
                      color: "var(--indigo)",
                    }}
                  >
                    🎁 New customers: we build it free.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

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
                  Most AI agencies hand you code and walk away. Most in-house
                  hires take six months to ramp. We do both jobs — build the
                  application, then operate it for you under one monthly
                  subscription.
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

        {/* WHY ARDN */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why build with Ardn</span>
                <h2 className="h1 mt-3">
                  One team. One bill. <em>No vanishing act.</em>
                </h2>
                <p className="body mt-4">
                  The reason 80% of AI projects fail is not the model — it is
                  everything around it. We close that gap by owning the whole
                  lifecycle: scope, build, deploy, host, and iterate. You meet
                  the senior engineers on the first call and work with them
                  through delivery and beyond.
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
                        Discovery call to written scope and price within two
                        business days — no open-ended discovery retainer.
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
                        The AI Forge Framework standardizes the plumbing so the
                        team focuses on what makes your app actually work.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">
                        We run it after launch
                      </div>
                      <p className="fl-body">
                        Hosting, monitoring, model upgrades, and new features —
                        all under one monthly subscription with credits that
                        roll over.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">
                        You own the IP and the data
                      </div>
                      <p className="fl-body">
                        Full export and documentation if you ever leave. Our
                        model only works if you want to stay — so we earn it.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES — internal link hub to vertical pages */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Built for your industry</span>
                <h2 className="h1 mt-3">
                  AI that speaks <em>your business.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  We build the most value where the workflows are specific and
                  the manual work is heavy. A few of the verticals we know well:
                </p>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/ai-for-insurance" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Insurance</h3>
                <p className="body">Automate claims triage, underwriting support, and policy document processing without adding headcount.</p>
                <span className="link">Explore AI for insurance →</span>
              </Link>
              <Link href="/ai-for-hospitality" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Hospitality</h3>
                <p className="body">Scale guest service, automate routine inquiries, and keep the experience personal across every property.</p>
                <span className="link">Explore AI for hospitality →</span>
              </Link>
              <Link href="/ai-for-membership-organizations" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Membership Orgs</h3>
                <p className="body">Cut admin for YMCAs, gyms, studios, and associations — onboarding, renewals, and member support on autopilot.</p>
                <span className="link">Explore AI for membership orgs →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section is-canvas" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">
                  Common <em>questions.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  What it costs, how long it takes, and what you actually own.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
              {FAQS.map((faq) => (
                <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "18px", color: "#14142B" }}>
                    {faq.q}
                  </summary>
                  <p style={{ marginTop: "14px", color: "#475467", fontSize: "16px", lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Tell us the problem. <em>We&apos;ll scope the build.</em>
              </h2>
              <p className="lede">
                30-minute free strategy call. We&apos;ll find the
                highest-leverage AI opportunity in your business and give you a
                fixed quote within 48 hours.
              </p>
              <div className="hero-ctas">
                <a
                  href={CALENDLY}
                  target="_blank"
                  className="btn btn-on-dark btn-lg btn-arrow"
                >
                  Book your free call
                </a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">
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
