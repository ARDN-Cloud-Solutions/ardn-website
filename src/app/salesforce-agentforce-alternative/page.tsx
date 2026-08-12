import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge-adjacent AI Forge spoke targeting the hottest 2026 Salesforce cost term:
// "Salesforce Agentforce pricing / alternative / cost per conversation." The
// buyer is pricing Agentforce (per-conversation / Flex Credit consumption) and
// wants a predictable-cost way to get an AI support/ops agent. Positioning is
// the same flat-fee, built-AND-run-for-you model as the rest of the site — a
// CUSTOM AI agent on the AI Forge Framework, no per-conversation meter, on top
// of the CRM they already run. All Agentforce pricing is publicly reported and
// labeled illustrative; no fabricated numbers, no fixed quotes.
export const metadata: Metadata = {
  title: "Salesforce Agentforce Alternative | Ardn AI Forge",
  description:
    "A flat-fee alternative to Salesforce Agentforce: a custom AI agent built and run for you, no per-conversation or Flex Credit meter. New customers build free.",
  keywords: [
    "salesforce agentforce alternative",
    "agentforce pricing",
    "agentforce cost per conversation",
    "agentforce flex credits cost",
    "agentforce vs custom ai agent",
    "custom ai support agent",
    "flat fee ai agent",
    "ai agent without per-conversation pricing",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/salesforce-agentforce-alternative",
    languages: {
      "en-US": "https://ardncloudsolutions.com/salesforce-agentforce-alternative",
      "x-default": "https://ardncloudsolutions.com/salesforce-agentforce-alternative",
    },
  },
  openGraph: {
    title: "Salesforce Agentforce Alternative — Flat-Fee Custom AI Agent | Ardn",
    description:
      "Pricing Agentforce by the conversation or Flex Credit? We build a custom AI agent, run it for you, on one flat monthly fee — no consumption meter. New customers build free.",
    url: "https://ardncloudsolutions.com/salesforce-agentforce-alternative",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "A flat-fee custom AI agent as a Salesforce Agentforce alternative, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Agentforce Alternative — Flat-Fee Custom AI Agent | Ardn",
    description:
      "A custom AI agent built and run for you on one flat monthly fee — no per-conversation or Flex Credit meter. New customers build free.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How is Agentforce priced, and why does it get unpredictable?",
    a: "Agentforce is sold on consumption. Salesforce moved from an early per-conversation charge to a Flex Credit model where actions draw down a credit pool, and there are also per-user add-on and higher-tier editions on top — all before the Service Cloud and data platform licenses underneath. Publicly reported figures put the Agentforce add-on around $125/user/month, higher 'Agentforce 1' editions near $550/user/month, and Flex Credits around $500 per 100,000 credits. The exact rates change and vary by contract, so treat all of these as reported list figures, not a quote. The core issue for budgeting is that a usage meter scales with volume — the busier the agent gets, the higher the bill climbs.",
  },
  {
    q: "What does Ardn build instead?",
    a: "A custom AI agent shaped to your exact workflow — support triage and deflection, order or claim status, internal Q&A over your own docs, lead qualification — built on our AI Forge Framework and wired into the systems you already run, including Salesforce. It runs on one flat monthly fee that covers the build, hosting, and ongoing changes, so cost doesn't climb every time volume does.",
  },
  {
    q: "Do we have to leave Salesforce to use it?",
    a: "No. This is not a rip-and-replace. Your Salesforce org stays the system of record. The AI agent integrates with it through its API — reading and writing the same records — so your team keeps working exactly as they do today while the agent handles the repetitive volume.",
  },
  {
    q: "Is a flat fee really cheaper than consumption pricing?",
    a: "It depends on your volume, and we won't quote a fixed number here. The mechanism is simple: a consumption meter (per conversation, per action, or per credit) grows with usage, while a flat monthly fee stays the same whether the agent handles 5,000 conversations a month or 50,000. The higher and more variable your volume, the more a flat fee protects your budget from surprise overages.",
  },
  {
    q: "How long does it take to stand up, and what does it cost?",
    a: "Most builds reach a production-ready first version in 2–6 weeks via the AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and iteration — and new customers pay nothing for the one-time build.",
  },
  {
    q: "Do we own the AI agent?",
    a: "You own the IP and your data. We retain rights only to the underlying AI Forge frameworks and tooling we reuse across clients. If you ever leave, you get a full export and complete documentation — no lock-in, and no consumption contract to unwind.",
  },
];

const features = [
  {
    title: "Support & Service Agents",
    body: "Deflect and resolve routine tickets across chat, email, and messaging — grounded in your own docs and policies, escalating cleanly to a human when it should.",
  },
  {
    title: "Ops & Status Agents",
    body: "Answer order, claim, and case-status questions and take routine actions against your systems — the repetitive volume that shouldn't cost you per conversation.",
  },
  {
    title: "Internal Knowledge Agents",
    body: "A private agent over your own documentation, runbooks, and data so staff get answers without pinging a colleague — no external seat or credit meter.",
  },
  {
    title: "Lead & Intake Agents",
    body: "Qualify, route, and capture inbound leads or requests around the clock, writing straight into your CRM as the single source of truth.",
  },
  {
    title: "Wired Into Your Stack",
    body: "The agent integrates with Salesforce and the rest of your tools through their APIs — no second copy of your data, one source of truth.",
  },
  {
    title: "Flat Fee, Not Per-Conversation",
    body: "One monthly subscription covers the build, hosting, and iteration. Volume can spike without the bill spiking with it.",
  },
];

export default function SalesforceAgentforceAlternativePage() {
  const url = "https://ardncloudsolutions.com/salesforce-agentforce-alternative";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom AI Agent Development — Agentforce Alternative",
        serviceType: "Custom AI Agent Development & Managed Operation",
        description:
          "Ardn builds and operates custom AI agents on the AI Forge Framework as a flat-fee alternative to Salesforce Agentforce consumption pricing — support, ops, knowledge, and intake agents integrated with your existing Salesforce org, with no per-conversation or Flex Credit meter.",
        url,
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Salesforce Agentforce Alternative", item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="ardn-page">
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Salesforce Agentforce Alternative</span>
                <h1 className="display reveal">
                  An AI agent <em>without the consumption meter.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Agentforce prices AI by the conversation, action, and Flex
                  Credit — so the busier your agent gets, the more it costs, on
                  top of the licenses underneath. We build you a custom AI agent
                  on the AI Forge Framework, wired into the Salesforce org you
                  already run, on one flat monthly fee. Same job, predictable
                  bill — no meter that climbs with volume.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Integrates with Salesforce</span>
                  <span className="badge is-emerald">Flat fee, not per-conversation</span>
                  <span className="badge is-canvas">Built &amp; run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#compare" className="btn btn-secondary btn-lg">See the cost difference</Link>
                </div>
                <p className="reveal reveal-d3" style={{ marginTop: "14px", fontSize: "14px", color: "#6b7280", fontWeight: 500 }}>
                  Free 30-min call · Fixed quote in 48 hours · No obligation
                </p>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The flat-fee play</div>
                  <ul className="features mt-3">
                    <li>Keep your Salesforce org &amp; data</li>
                    <li>Custom agent shaped to your workflow</li>
                    <li>No per-conversation or Flex Credit meter</li>
                    <li>Support, ops, knowledge &amp; intake agents</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no consumption pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/ai-forge" className="link">See how the AI Forge Framework works →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">Agents for the work <em>that shouldn&apos;t bill by the message.</em></h2>
              </div>
              <div>
                <p className="lede">Each agent is built to one job and wired into the systems you already run — so the work gets done without a usage meter running underneath it.</p>
              </div>
            </div>
            <div className="grid-3">
              {features.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/ai-forge" className="link">See the AI Forge Framework →</Link>
              <Link href="/ai-app-development" className="link">Explore custom AI app development →</Link>
              <Link href="/ai-powered-support" className="link">Automate support with ReplyCX →</Link>
            </div>
          </div>
        </section>

        {/* COMPARE — consumption vs flat fee */}
        <section className="section is-canvas" id="compare">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Consumption vs. flat fee</span>
                <h2 className="h1 mt-3">Where the <em>cost model differs.</em></h2>
              </div>
              <div>
                <p className="lede">The same AI job, billed two very different ways. The difference shows up most when volume is high or unpredictable.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th></th>
                    <th>Salesforce Agentforce</th>
                    <th>Custom AI agent by Ardn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">How it&apos;s billed</td><td className="is-no">Consumption — per action / Flex Credit, plus editions &amp; add-ons</td><td className="is-yes">One flat monthly fee</td></tr>
                  <tr><td className="feat">Cost as volume grows</td><td className="is-no">Climbs with usage</td><td className="is-yes">Stays the same</td></tr>
                  <tr><td className="feat">Licenses underneath</td><td className="is-no">Service Cloud + data platform on top</td><td className="is-yes">Uses the Salesforce org you already have</td></tr>
                  <tr><td className="feat">Shaped to your workflow</td><td className="is-no">Configured within the product</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Custom-built to your exact process</td></tr>
                  <tr><td className="feat">Who runs it</td><td className="is-no">You (and your admins)</td><td className="is-yes">We build it AND run it</td></tr>
                  <tr><td className="feat">Ownership</td><td className="is-no">Consumption contract</td><td className="is-yes">You own the IP &amp; data — no lock-in</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Publicly reported Agentforce figures — an add-on around
              $125/user/month, higher editions near $550/user/month, and Flex
              Credits around $500 per 100,000 credits — are shown for context
              only; rates change and vary by contract, so treat them as reported
              list prices, not a quote. Which model wins depends on your volume —{" "}
              <Link href="/savings-calculator" className="link">run your own numbers</Link>.
            </p>
          </div>
        </section>

        {/* WHY — not a rip-and-replace */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep your CRM. Lose the meter.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  You&apos;ve invested in Salesforce, and this doesn&apos;t touch
                  that. Your org stays the system of record. We just give the
                  high-volume, repetitive AI work a home that doesn&apos;t bill by
                  the conversation — a custom agent wired into your data, built
                  and operated by one team, on a fee you can actually forecast.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your Salesforce stays put</div>
                      <p className="fl-body">No migration and no data move. The agent integrates alongside your org through its API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">A budget you can forecast</div>
                      <p className="fl-body">A flat fee turns a variable consumption meter into a fixed, predictable line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Built to your process</div>
                      <p className="fl-body">Not a product you configure around — an agent shaped to exactly how your team works.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your needs evolve.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section is-canvas" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">How Agentforce is priced, what we build instead, integration, and cost.</p>
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

        <LeadForm source="Salesforce Agentforce Alternative page" heading="Price a flat-fee AI agent" sub="Tell us what you want the agent to handle and roughly your volume. We'll come back with where a flat-fee build beats consumption pricing — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying <em>by the conversation.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at what you want the agent to do, show where a flat-fee build beats consumption pricing, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software, AI &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
