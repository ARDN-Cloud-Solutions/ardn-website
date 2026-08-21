import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page: the per-seat cost wedge applied to BI / analytics VIEWER
// seats. Read-only dashboard viewers are the purest "light user" — billed a
// full per-seat license to look at a report they open once a week. Positioning
// is the same wedge as the CRM pages — "keep your data stack, cut the viewer
// bill" — applied to Tableau Viewer / Power BI Pro seats, which force a per-head
// meter on people who never author anything. Distinct intent from the CRM
// pages, zero cannibalization. No invented client names/metrics; only publicly
// listed vendor list prices, framed as illustrative, with the calculator for
// real numbers. Targets "reduce Power BI license costs", "Tableau viewer seat
// cost", "custom dashboard portal", "BI viewer license alternative".
export const metadata: Metadata = {
  title: "Cut Tableau & Power BI Viewer Seat Costs | Ardn",
  description:
    "Paying full Tableau or Power BI seats for people who only view a dashboard? Move read-only viewers to a flat-fee custom reporting portal wired to your data.",
  keywords: [
    "reduce Power BI license costs",
    "Tableau viewer seat cost",
    "reduce Tableau license costs",
    "BI viewer license alternative",
    "cut dashboard licensing costs",
    "custom reporting portal",
    "custom dashboard portal",
    "Power BI Pro alternative cost",
    "read-only BI users license",
    "flat-fee analytics portal",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-bi-dashboard-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-bi-dashboard-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-bi-dashboard-seat-costs",
    },
  },
  openGraph: {
    title: "Cut Tableau & Power BI Viewer Seat Costs | Ardn",
    description:
      "Move read-only dashboard viewers off per-seat BI licenses onto a flat-fee custom reporting portal wired to your warehouse or CRM. Keep your data. New customers: free build.",
    url: "https://ardncloudsolutions.com/reduce-bi-dashboard-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut Tableau and Power BI viewer seat costs with a flat-fee custom reporting portal, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut Tableau & Power BI Viewer Seat Costs | Ardn",
    description:
      "Move read-only viewers off per-seat BI licenses onto a flat-fee custom reporting portal. Keep your data stack. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Why do read-only dashboard viewers cost so much?",
    a: "Because BI platforms bill per user regardless of how that user behaves. A viewer who opens one report a week is billed on the same per-seat meter as an analyst who builds models all day. Tableau Viewer and Power BI Pro both charge a recurring license for every named user, so the moment you roll a dashboard out to a wider audience — a leadership team, a field org, a client — the bill scales with headcount, not with the value those viewers get.",
  },
  {
    q: "How does a custom reporting portal cut BI viewer costs?",
    a: "We build a portal that renders exactly the views your read-only audience needs — KPI dashboards, operational reports, client-facing metrics — pulling live from the same warehouse, database, or CRM your BI tool already reads. Those viewers move off named BI seats onto one flat monthly fee that doesn't climb as you add people. Your analysts and authors keep Tableau or Power BI; only the view-only audience moves.",
  },
  {
    q: "Do we have to replace Tableau or Power BI?",
    a: "No. This is not a rip-and-replace. Your data team keeps authoring in the BI tool they know, and your warehouse stays the source of truth. The portal is an additional, purpose-built delivery layer for the people who only consume dashboards — it reads the same data, so there is no second copy drifting out of sync. Power users keep their seats; light viewers stop needing one.",
  },
  {
    q: "What can viewers do in the portal?",
    a: "Whatever their role needs to see and act on — interactive dashboards, filtered reports, exports, drill-downs, and self-service metrics scoped to their permissions. Because it is built to your audience instead of a generic viewer license, it is often faster and clearer for them than the full BI interface, which is designed for authors.",
  },
  {
    q: "Where does the data come from, and is it secure?",
    a: "The portal connects to your existing data sources — Snowflake, BigQuery, SQL Server, Postgres, your CRM, or your BI tool's own APIs — and every viewer's access follows the permissions you define. There is no second database to keep in sync, and you own the portal IP and your data outright. If you ever leave, you get a full export and documentation. No lock-in.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most reporting portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring viewer-license savings typically dwarf the subscription once you have more than a handful of view-only users.",
  },
];

const features = [
  {
    title: "Executive & KPI Dashboards",
    body: "Give leadership the numbers they check without a named BI seat each — live from the same warehouse your analysts already use.",
  },
  {
    title: "Operational Reporting",
    body: "Field, ops, and store teams get the reports they act on daily in a fast, focused portal — not a full authoring license they never author in.",
  },
  {
    title: "Client & Partner Dashboards",
    body: "Ship branded, permissioned metrics to customers and partners without paying an external BI viewer seat for every one of them.",
  },
  {
    title: "Embedded Metrics",
    body: "Drop live charts and KPIs into tools your team already uses, so the data reaches viewers where they work — no extra logins to license.",
  },
  {
    title: "Reads Your Existing Stack",
    body: "Connects to Snowflake, BigQuery, SQL Server, Postgres, your CRM, or your BI tool's APIs. One source of truth — no second copy to reconcile.",
  },
  {
    title: "Flat Fee, Not Per-Viewer",
    body: "Add as many viewers as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
];

export default function ReduceBiDashboardSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-bi-dashboard-seat-costs";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom Reporting Portal Development",
        serviceType: "Custom BI Reporting Portal & Data Integration",
        description:
          "Ardn builds and operates custom reporting portals that move read-only dashboard viewers off per-seat Tableau and Power BI licenses onto a flat-fee portal wired to your existing warehouse, database, or CRM — cutting viewer-license cost without replacing your BI stack. Built via the AI Forge Framework under one monthly subscription.",
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
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Cut BI Viewer Seat Costs", item: url },
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
                <span className="eyebrow">Reduce BI &amp; Dashboard Seat Costs</span>
                <h1 className="display reveal">
                  Dashboards: <em>keep your data, cut the viewer bill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Tableau and Power BI bill a full per-seat license for every named
                  user — including the people who only ever <em>look</em> at a
                  dashboard. Roll reporting out to a leadership team, a field org,
                  or your clients and the bill scales with headcount, not value. We
                  build a custom reporting portal that gives those read-only viewers
                  exactly the dashboards they need, pulled live from the same data
                  stack you already run, on one flat fee. Keep your BI tools &mdash;
                  stop paying a seat for everyone who only reads.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Reads your existing data stack</span>
                  <span className="badge is-emerald">Flat fee, not per-viewer</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free BI cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you&apos;d save</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The viewer-cost play</div>
                  <ul className="features mt-3">
                    <li>Keep Tableau / Power BI for your authors</li>
                    <li>Move read-only viewers to a flat-fee portal</li>
                    <li>Reads your warehouse, database &amp; CRM</li>
                    <li>Exec, ops, client &amp; embedded dashboards</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free — you only start paying the flat monthly fee once it&apos;s live.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">Run your own per-seat savings numbers →</Link>
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
                <h2 className="h1 mt-3">Reporting for the viewers <em>who never author.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is built to one audience&apos;s workflow and wired into the data you already trust — so the numbers stay in one place and the viewer-license bill stops climbing.</p>
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
              <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with how to cut per-seat licensing costs →</Link>
              <Link href="/custom-portal-development" className="link">See seller, ops &amp; customer portals →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">See the full per-seat vs. flat-fee cost breakdown →</Link>
            </div>
          </div>
        </section>

        {/* WHY — the read-only viewer is the worst fit for per-seat */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Where per-seat hurts most</span>
                <h2 className="h1 mt-3">The read-only viewer is <em>the worst fit for per-seat.</em></h2>
                <p className="body mt-4">
                  A full BI license is priced for an author — someone who builds
                  data models, designs dashboards, and lives in the tool. Most of
                  the people you give access to do none of that; they open a
                  dashboard, read a number, and leave. For scale: Power BI Pro
                  lists at roughly $14/user/month and Tableau Viewer at roughly
                  $15/user/month — cheap for one analyst, but multiply it across
                  every executive, manager, and client who only ever reads, and it
                  becomes a recurring tax on distribution. A flat-fee portal costs
                  the same at 20 viewers or 2,000. (List prices shown for
                  illustration only &mdash;{" "}
                  <Link href="/savings-calculator" className="link">run the calculator</Link>{" "}
                  for your own seat count and rate.)
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your BI stack stays put</div>
                      <p className="fl-body">No migration. Authors keep Tableau or Power BI; the portal reads the same warehouse alongside them.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Viewers get a clearer tool</div>
                      <p className="fl-body">A focused dashboard beats a full authoring interface for someone who only reads — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Distribution stops costing per head</div>
                      <p className="fl-body">Per-seat viewer fees recur and grow every time you widen the audience. A flat-fee portal turns that into a fixed line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your reporting needs evolve.</p>
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
                <p className="lede">How the savings work, data integration, security, and cost.</p>
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

        <LeadForm source="Reduce BI Dashboard Seat Costs page" heading="See what your BI viewer seats cost you" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us which BI tool you run and roughly how many read-only viewers have seats. We'll come back with where a reporting portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop licensing every viewer. <em>Keep every viewer.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your read-only users actually use your dashboards, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Same three flat-fee tiers power every build — Launch, Scale, and Enterprise. No per-seat pricing, ever.
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
