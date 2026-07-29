import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Spoke page for the "business process automation" money term — a commercial
// category on the target keyword list with no prior page coverage. Positioning
// stays on-strategy: ARDN builds AND runs a custom automation layer that
// connects the tools you already own, on ONE flat monthly fee — no per-seat
// automation tiers (Salesforce Flow orchestration, HubSpot Operations Hub) and
// no per-connector iPaaS metering. Reinforces the flat-fee / no-per-seat cost
// narrative that leads the wedge, without cannibalizing the portal pages.
// No fabricated clients/metrics; value-prop framing only.
export const metadata: Metadata = {
  title: "Business Process Automation — Custom, Flat Fee | Ardn",
  description:
    "Custom business process automation built & run for you — connect your tools and automate workflows on one flat monthly fee. No per-seat or per-connector fees.",
  keywords: [
    "business process automation",
    "business process automation services",
    "custom workflow automation",
    "workflow automation without per-seat fees",
    "automate business processes",
    "custom automation software",
    "process automation company",
    "connect your tech stack",
    "system integration services",
    "iPaaS alternative",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/business-process-automation",
    languages: {
      "en-US": "https://ardncloudsolutions.com/business-process-automation",
      "x-default": "https://ardncloudsolutions.com/business-process-automation",
    },
  },
  openGraph: {
    title: "Business Process Automation — Custom, Flat Fee | Ardn",
    description:
      "Custom automation that connects your tools and runs your workflows on one flat monthly fee — no per-seat automation tiers, no per-connector iPaaS meter.",
    url: "https://ardncloudsolutions.com/business-process-automation",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom business process automation, built and run for you by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation — Custom, Flat Fee | Ardn",
    description:
      "Custom automation that connects your tools and runs your workflows on one flat monthly fee — no per-seat or per-connector fees.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is business process automation, in plain terms?",
    a: "It's replacing the manual, repetitive steps in a workflow — copying data between systems, chasing approvals, re-keying orders, sending status updates — with software that does them automatically and reliably. We map how a process actually runs today, then build the automation that removes the hand-offs and the double entry, wired into the tools you already use.",
  },
  {
    q: "How is this different from Salesforce Flow, HubSpot Operations Hub, or an iPaaS like Zapier or Workato?",
    a: "Those are products you license, and the pricing scales against you: Salesforce charges for orchestration and higher automation limits, HubSpot's Operations Hub is a paid add-on tier, and iPaaS tools bill per task, per connector, or per seat as your volume grows. We build a custom automation layer that you own, running on one flat monthly fee no matter how many workflows, connectors, or runs you add — and we operate it for you.",
  },
  {
    q: "Do we have to replace our current systems to automate them?",
    a: "No. The whole point is to connect what you already own. The automation reads and writes to your CRM, ERP, spreadsheets, email, and line-of-business apps through their APIs, so your systems of record stay exactly where they are. Nothing gets ripped out — the automation sits across your stack and moves the work between the pieces.",
  },
  {
    q: "What kinds of processes do you automate?",
    a: "Lead and order routing, quote-to-cash and invoicing steps, onboarding and offboarding, data sync between disconnected tools, approval chains, document generation, recurring reports, and status notifications — plus AI-assisted steps like classifying inbound requests or drafting responses via our AI Forge Framework where it genuinely helps.",
  },
  {
    q: "How does automation help cut our software costs?",
    a: "Two ways. First, you stop paying for the automation and integration tiers your current platforms upsell — the orchestration seats, the operations add-ons, the per-connector middleware. Second, when a process is automated, fewer people need to sit inside an expensive per-seat platform to run it, which pairs directly with moving light users onto a flat-fee custom portal.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most automation builds go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, monitoring, and ongoing changes — and new customers pay nothing for the one-time build.",
  },
  {
    q: "Who owns the automation, and what if we leave?",
    a: "You own the automation and your data outright. If you ever leave, you get a full export and complete documentation — no lock-in, no per-seat meter you can never escape.",
  },
];

const features = [
  {
    title: "Connect Your Tech Stack",
    body: "We wire your CRM, ERP, spreadsheets, email, and line-of-business apps together through their APIs — one automation layer across the tools you already own.",
  },
  {
    title: "Automate the Busywork",
    body: "Routing, approvals, data sync, document generation, and status updates run on their own — no more re-keying the same record into three systems.",
  },
  {
    title: "Quote-to-Cash & Ops Flows",
    body: "Automate the steps between a signed deal and a paid invoice — orders, provisioning, billing, and hand-offs that today live in someone's inbox.",
  },
  {
    title: "AI-Assisted Steps",
    body: "Where it genuinely helps, add AI Forge steps — classify inbound requests, extract data from documents, or draft responses — inside the same flow.",
  },
  {
    title: "No Per-Task Meter",
    body: "iPaaS tools bill per task, per connector, or per seat as you grow. Your custom automation runs on one flat fee regardless of volume.",
  },
  {
    title: "Built AND Run for You",
    body: "We don't hand you a tangle of no-code recipes to maintain. We build it, host it, monitor it, and change it as your process evolves.",
  },
];

export default function BusinessProcessAutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/business-process-automation#service",
        name: "Business Process Automation",
        serviceType: "Custom Business Process Automation & System Integration",
        description:
          "Ardn designs, builds, and operates custom business process automation that connects a company's existing tools and runs its workflows on one flat monthly fee — no per-seat automation tiers and no per-connector iPaaS metering. Built via the AI Forge Framework.",
        url: "https://ardncloudsolutions.com/business-process-automation",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/business-process-automation#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/business-process-automation#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Business Process Automation", item: "https://ardncloudsolutions.com/business-process-automation" },
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
                <span className="eyebrow">Business Process Automation</span>
                <h1 className="display reveal">
                  Automate the busywork. <em>Own the automation.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Your team is re-keying the same data into three systems,
                  chasing approvals over email, and paying for automation tiers
                  and per-connector middleware on top of it. We build a custom
                  automation layer that connects the tools you already own and
                  runs your workflows for you — on one flat monthly fee, no
                  per-task or per-seat meter.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Connects your existing tools</span>
                  <span className="badge is-emerald">Flat fee, no per-task meter</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">How it works</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Where automation pays off</div>
                  <ul className="features mt-3">
                    <li>Kill the copy-paste between systems</li>
                    <li>Automate approvals &amp; hand-offs</li>
                    <li>Drop per-connector iPaaS fees</li>
                    <li>Add AI steps where they help</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-task or per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">See what your current software stack costs →</Link>
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
                <span className="eyebrow">What we automate</span>
                <h2 className="h1 mt-3">One automation layer <em>across your whole stack.</em></h2>
              </div>
              <div>
                <p className="lede">We map how a process runs today, then build the automation that removes the manual steps — wired into the tools you already trust.</p>
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
              <Link href="/custom-software-development" className="link">See every kind of custom software &amp; platform we build →</Link>
              <Link href="/custom-portal-development" className="link">Move light users off per-seat licenses with a portal →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">How to cut CRM licensing costs →</Link>
            </div>
          </div>
        </section>

        {/* WHY — own it, flat fee */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Own it. Don&rsquo;t rent it.</span>
                <h2 className="h1 mt-3">Not another subscription <em>that bills against your growth.</em></h2>
                <p className="body mt-4">
                  Platform automation tiers and iPaaS tools are priced to grow
                  with your usage — more tasks, more connectors, more seats, more
                  cost, forever. We build automation you own, shaped to your exact
                  process, and run it for you on a flat fee. The bill stops
                  climbing every time you automate one more thing.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your systems stay put</div>
                      <p className="fl-body">The automation connects your CRM, ERP, and apps through their APIs — no migration, no rip-and-replace.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Manual work disappears</div>
                      <p className="fl-body">Re-keying, chasing, and copy-paste are replaced by workflows that run themselves, reliably, every time.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">A flat fee, not a meter</div>
                      <p className="fl-body">Add workflows and connectors without the bill climbing. One predictable monthly line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your process evolves.</p>
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
                <p className="lede">How it works, how it differs from Flow / iPaaS, integration, and cost.</p>
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

        <LeadForm source="Business Process Automation page" heading="Tell us what to automate" sub="Describe the process that's eating your team's time. We'll come back with where automation pays off — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying people <em>to move data by hand.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll map one of your slowest processes, show where automation removes the manual steps, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Same three flat-fee tiers power every build — Launch, Scale, and Enterprise. No per-task or per-seat pricing, ever.
              </p>
              <p style={{ marginTop: "8px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
