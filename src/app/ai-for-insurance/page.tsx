import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Vertical landing page targeting insurance-AI buyer intent. Matches the ICP
// our outbound research surfaces (carriers 500–5,000 employees automating
// underwriting/claims). Non-geo; single conversion path (Calendly).
export const metadata: Metadata = {
  title:
    "AI for Insurance — Claims & Underwriting Automation | Ardn",
  description:
    "Custom AI for insurance carriers — automate claims triage, underwriting support & document processing. Built and run in 2–6 weeks. New customers: free build.",
  keywords: [
    "AI for insurance",
    "insurance claims automation AI",
    "AI underwriting software",
    "insurance document processing AI",
    "custom AI for insurers",
    "insurance workflow automation",
    "AI claims triage",
    "AI Forge Framework",
    "insurance AI development company",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-for-insurance",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-for-insurance",
      "x-default": "https://ardncloudsolutions.com/ai-for-insurance",
    },
  },
  openGraph: {
    title:
      "AI for Insurance — Claims & Underwriting Automation | Ardn",
    description:
      "Custom AI for carriers — claims triage, underwriting support, document processing. Built and run in 2–6 weeks under one monthly fee. New customers: free build.",
    url: "https://ardncloudsolutions.com/ai-for-insurance",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom AI for insurance — claims and underwriting automation by Ardn AI Forge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Insurance | Claims & Underwriting Automation — Ardn AI Forge",
    description:
      "Custom AI for carriers, built and run in 2–6 weeks under one monthly fee. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What insurance workflows can AI actually automate?",
    a: "The highest-return targets are first-notice-of-loss intake and claims triage, document classification and data extraction from policies and submissions, underwriting support and risk summarization, customer and broker self-service, and renewal and retention outreach. We build to your lines of business and your rules — not a generic template.",
  },
  {
    q: "Will the AI replace adjusters or underwriters?",
    a: "No. The pattern that works is AI doing the repetitive reading, sorting, and drafting so your licensed professionals spend their time on judgment calls. Every Ardn build keeps a human in the loop on decisions that carry risk, with full audit trails.",
  },
  {
    q: "How does this work with our policy and claims systems?",
    a: "AI Forge applications integrate with the systems carriers already run — Salesforce, Guidewire-style core systems, document repositories, data warehouses, and internal APIs. The AI lives where your team already works rather than becoming another tab.",
  },
  {
    q: "How do you handle compliance and data security?",
    a: "We build on production-grade infrastructure with encryption, access controls, audit logging, and a security review before launch. You own the data and the IP, sensitive data stays within your controls, and we keep humans in the loop on regulated decisions.",
  },
  {
    q: "How fast can a carrier get something live?",
    a: "Most engagements ship a production-ready application in 2–6 weeks, with a fixed quote and delivery date within 48 hours of the first call. We start with one high-value workflow, prove it, then expand.",
  },
  {
    q: "What does it cost?",
    a: "One flat monthly subscription covers the build, hosting, and ongoing iteration. New customers pay nothing for the one-time build — you only pay the monthly fee once your app is live.",
  },
];

const useCases = [
  {
    title: "Claims Triage & FNOL",
    body: "Intake first-notice-of-loss from any channel, classify severity, route to the right queue, and draft the initial response — cutting time-to-acknowledge from hours to minutes.",
  },
  {
    title: "Document Processing",
    body: "Extract structured data from policies, submissions, loss runs, and medical records automatically. No more manual rekeying into your core system.",
  },
  {
    title: "Underwriting Support",
    body: "Summarize risk from unstructured submissions, flag missing information, and surface comparable accounts so underwriters decide faster with better context.",
  },
  {
    title: "Broker & Customer Self-Service",
    body: "AI agents that answer coverage questions, status claims, and handle routine requests across chat, email, and phone — escalating cleanly when judgment is needed.",
  },
  {
    title: "Renewals & Retention",
    body: "Spot at-risk accounts early and automate personalized renewal outreach so your team focuses on the relationships that need a human.",
  },
  {
    title: "Compliance Audit Trails",
    body: "Every AI action logged and explainable, with humans in the loop on regulated decisions — built for examiners, not just for speed.",
  },
];

export default function AiForInsurancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/ai-for-insurance#service",
        name: "AI for Insurance — Custom Development",
        serviceType: "Custom AI Application Development for Insurance",
        description:
          "Ardn builds and operates custom AI applications for insurance carriers and agencies — claims triage, underwriting support, document processing, and self-service — via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/ai-for-insurance",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: { "@type": "Audience", audienceType: "Insurance carriers and agencies" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/ai-for-insurance#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-for-insurance#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "AI for Insurance", item: "https://ardncloudsolutions.com/ai-for-insurance" },
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
                <span className="eyebrow">AI for Insurance</span>
                <h1 className="display reveal">
                  Clear the backlog. <em>Keep the judgment human.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Your team spends its day reading documents, rekeying data, and
                  routing claims — work AI does in seconds. We build custom AI
                  applications that handle the repetitive reading and drafting so
                  your adjusters and underwriters spend their time on decisions
                  that actually need a license. Live in 2–6 weeks, run for you,
                  one monthly fee.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Claims · Underwriting · Docs</span>
                  <span className="badge is-emerald">2–6 weeks to production</span>
                  <span className="badge is-canvas">Human-in-the-loop</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">
                    Book a free 30-min call
                  </Link>
                  <Link href="#usecases" className="btn btn-secondary btn-lg">
                    See use cases
                  </Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Where carriers start</div>
                  <ul className="features mt-3">
                    <li>Claims triage &amp; FNOL intake</li>
                    <li>Policy &amp; submission document extraction</li>
                    <li>Underwriting risk summaries</li>
                    <li>Broker &amp; policyholder self-service</li>
                    <li>Renewal &amp; retention outreach</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* USE CASES */}
        <section className="section" id="usecases">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Use cases</span>
                <h2 className="h1 mt-3">
                  Built for the work that <em>eats your day.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  We start with one high-value workflow, prove the ROI, then
                  expand. Every build keeps a person in the loop where risk
                  lives.
                </p>
              </div>
            </div>
            <div className="grid-3">
              {useCases.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/ai-app-development" className="link">
                How we build &amp; run custom AI apps →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why Ardn for insurance AI</span>
                <h2 className="h1 mt-3">
                  Compliant by design. <em>Owned by you.</em>
                </h2>
                <p className="body mt-4">
                  Insurance AI fails when it is a black box bolted onto a core
                  system nobody wants to touch. We build the opposite: explainable
                  applications that integrate with the systems you already run,
                  log every action for examiners, and keep humans deciding the
                  things that carry risk. You own the IP and the data.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Integrates with your core systems</div>
                      <p className="fl-body">Salesforce, policy and claims platforms, document stores, and data warehouses — the AI works inside your stack.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Audit-ready and explainable</div>
                      <p className="fl-body">Every action logged, every regulated decision routed to a human, with trails built for compliance.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Live in weeks, not quarters</div>
                      <p className="fl-body">Fixed quote in 48 hours, production-ready in 2–6 weeks, expanded one workflow at a time.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, model upgrades, and iteration under one monthly subscription.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">Compliance, integration, cost, and what AI should — and shouldn&apos;t — do.</p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
              {FAQS.map((faq) => (
                <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "18px", color: "#14142B" }}>{faq.q}</summary>
                  <p style={{ marginTop: "14px", color: "#475467", fontSize: "16px", lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <LeadForm source="AI for Insurance page" />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Pick one workflow. <em>We&apos;ll prove it in weeks.</em>
              </h2>
              <p className="lede">
                30-minute free call. We&apos;ll map the highest-return automation
                in your book and return a fixed quote within 48 hours.
              </p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">See AI Forge pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
