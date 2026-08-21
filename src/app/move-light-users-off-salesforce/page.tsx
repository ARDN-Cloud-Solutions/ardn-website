import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke — the "which users to move" decision framework. Competitor
// guides (SAM/negotiation blogs) define the light-user persona but stop at
// "downgrade the license." This page extends that one box further: keep a full
// seat for power users, and move the read-only / occasional / external crowd to
// a flat-fee portal that takes them off the seat schedule entirely. Distinct
// from /reduce-crm-licensing-costs (the three-lever pillar) and the /compare/*
// cost-math pages. Positioning is "keep your CRM," never "rip out Salesforce."
// No fabricated metrics/clients. List prices are publicly listed and labeled
// illustrative. GEO-structured (H2/H3, decision matrix, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "Move Light Users Off Salesforce Seats | Ardn",
  description:
    "Which Salesforce users still need a full seat, and which should move to a flat-fee portal? A decision framework for cutting per-seat costs — keep your CRM.",
  keywords: [
    "move light users off Salesforce",
    "Salesforce light user license",
    "which Salesforce users need a full seat",
    "reduce Salesforce seats",
    "Salesforce license optimization",
    "read-only Salesforce users",
    "Salesforce seat reduction",
    "custom portal instead of Salesforce seat",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    languages: {
      "en-US": "https://ardncloudsolutions.com/move-light-users-off-salesforce",
      "x-default": "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    },
  },
  openGraph: {
    title: "Move Light Users Off Salesforce Seats — Keep Your CRM | Ardn",
    description:
      "A decision framework for deciding which Salesforce users keep a full seat and which move to a flat-fee custom portal — cut per-seat cost without a migration.",
    url: "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Which Salesforce users need a full seat vs. a flat-fee portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Light Users Off Salesforce Seats | Ardn",
    description:
      "Which Salesforce users keep a full seat, and which move to a flat-fee portal — a decision framework for cutting per-seat cost without switching CRMs.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What counts as a 'light user' in Salesforce?",
    a: "A light user touches Salesforce for a narrow slice of work but gets billed roughly the same as a power user who lives in it all day. Common signals: fewer than one login a month, activity that is mostly read-only (checking a status, pulling a report, viewing a dashboard), or a single repeated task like submitting a request or updating one field. In most mid-market orgs these users outnumber the power users, so the overpayment sits across the majority of the seat count.",
  },
  {
    q: "How do I identify which users to move?",
    a: "Start with login and usage data. Export last-login dates and flag anyone inactive for 30, 60, or 90 days — those are reclaim candidates first. Then look at active-but-light users: sort by logins per month and by whether their activity is read/report versus create/edit. People who only read, or who repeat one narrow task, are portal candidates. Power users who create and edit records across objects all day keep their full seat — the seat is worth it for them.",
  },
  {
    q: "Won't a cheaper license tier work instead of a portal?",
    a: "For users who still need to work natively inside Salesforce, yes — a limited or platform tier is the right move and a real saving. But it is still billed per person, still grows with every hire, and still caps what those users can do. For the read-only and occasional-use crowd, a flat-fee portal removes them from the seat schedule entirely rather than moving them to a cheaper rung of it, so the cost stops scaling with headcount. Use the cheaper tier for users who live in the CRM; use a portal for the ones who only visit.",
  },
  {
    q: "Does moving light users mean replacing Salesforce?",
    a: "No. Your CRM stays the system of record, and your power users keep working exactly as they do today. A portal sits alongside Salesforce and reads and writes the same records through its API in real time. Cutting seat cost and replacing a CRM are two separate decisions — this framework only addresses the first.",
  },
  {
    q: "What do the moved users actually get?",
    a: "A purpose-built screen for exactly their job — the fields, records, and actions they need and nothing else — wired live into Salesforce. Sellers see inventory and their accounts; ops staff update a status; partners submit and track requests; customers self-serve. It is usually simpler and faster for them than the full CRM, because it is built around their one workflow instead of everyone's.",
  },
  {
    q: "How much does it cost, and how fast can it go live?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes, with no per-seat pricing. New customers pay nothing for the one-time build.",
  },
];

const personas = [
  {
    tag: "Keep the seat",
    title: "Power users",
    body: "Reps, admins, and ops leads who create and edit records across objects all day. The full seat is priced for them and worth it.",
    verdict: "Full CRM license",
  },
  {
    tag: "Reclaim first",
    title: "Inactive & duplicate",
    body: "People who left, changed roles, or were provisioned 'just in case.' Deactivating them at renewal changes nothing for active users.",
    verdict: "Remove the seat",
  },
  {
    tag: "Right-size",
    title: "Occasional native users",
    body: "Users who still need to work inside the CRM, but only now and then. A limited or platform tier is cheaper — still per-seat, but a real saving.",
    verdict: "Cheaper license tier",
  },
  {
    tag: "Move to a portal",
    title: "Light & read-only",
    body: "Sellers checking a screen, finance pulling reports, ops updating a status, partners and customers submitting requests. They need a sliver of the CRM.",
    verdict: "Flat-fee custom portal",
  },
];

export default function MoveLightUsersOffSalesforcePage() {
  const url = "https://ardncloudsolutions.com/move-light-users-off-salesforce";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Which Salesforce Users Need a Full Seat — and Which Should Move to a Portal",
        name: "Move Light Users Off Salesforce Seats",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license optimization" },
          { "@type": "Thing", name: "Per-seat pricing" },
          { "@type": "Thing", name: "Custom portal development" },
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
          { "@type": "ListItem", position: 2, name: "Move Light Users Off Salesforce", item: url },
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
                <span className="eyebrow">Move Light Users Off Salesforce</span>
                <h1 className="display reveal">
                  Which Salesforce users <em>still need a full seat?</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Per-seat pricing is built around the power user, so the cost
                  piles up on everyone lighter than that. The fix isn&apos;t to
                  rip out Salesforce — it&apos;s to keep it for the people who
                  live in it and move the read-only, occasional, and external
                  users to a flat-fee portal wired into your CRM. Here&apos;s how
                  to decide who goes where.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Flat fee, not per-seat</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free CRM cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-seat savings</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The four groups</div>
                  <ul className="features mt-3">
                    <li>Power users &rarr; keep the full seat</li>
                    <li>Inactive &amp; duplicate &rarr; reclaim</li>
                    <li>Occasional native &rarr; cheaper tier</li>
                    <li>Light &amp; read-only &rarr; flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the last group breaks the link between cost and headcount.
                  </p>
                  <p className="body" style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* THE FOUR GROUPS */}
        <section className="section" id="groups">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Sort your seats</span>
                <h2 className="h1 mt-3">Every CRM user falls into <em>one of four groups.</em></h2>
              </div>
              <div>
                <p className="lede">The mistake is treating them all the same. Sort your seat list into these four, and the right saving for each one becomes obvious.</p>
              </div>
            </div>
            <div className="grid-4">
              {personas.map((p) => (
                <div className="card" key={p.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{p.tag}</span>
                  <h3 className="h3 mt-2">{p.title}</h3>
                  <p className="body">{p.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{p.verdict}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW TO SPOT LIGHT USERS */}
        <section className="section is-canvas" id="signals">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How to find them</span>
                <h2 className="h1 mt-3">The signals that flag a <em>light user.</em></h2>
              </div>
              <div>
                <p className="lede">You don&apos;t need a consultant to find these — the data is already in your CRM&apos;s login and usage reports.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Low login frequency</h3>
                <p className="body">Fewer than one login a month is a strong portal signal. Anyone inactive for 30, 60, or 90 days is a reclaim candidate first — start there.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Read-only behavior</h3>
                <p className="body">Users whose activity is mostly viewing — checking a status, pulling a report, opening a dashboard — rarely need a full editing seat.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">One narrow task</h3>
                <p className="body">People who repeat a single action — submit a request, update one field, log one record type — are the clearest fit for a purpose-built portal screen.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: a full Salesforce Sales Cloud Enterprise seat lists at
              roughly $165/user/month, and Experience Cloud external users bill
              per login or per member on top. A flat-fee portal costs the same at
              10 light users or 400. (List prices shown for illustration only and
              change over time —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* DECISION MATRIX */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision matrix</span>
                <h2 className="h1 mt-3">Route each group to <em>the right fix.</em></h2>
              </div>
              <div>
                <p className="lede">Most companies use more than one of these at once. Work top-down: reclaim the free wins first, then move the light users.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>Signal</th>
                    <th>The right fix</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>No login 60–90 days</td><td>Reclaim the seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional, needs native CRM</td><td>Logs in, edits sometimes</td><td>Right-size to a cheaper tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — seller, ops, partner, customer</td><td>Read-only or one task</td><td>Move to a flat-fee portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Daily create/edit</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the light-user row depend on how many you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">Where each group <em>ends up.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically — the fastest, lowest-risk group to clear first.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light and read-only users off per-seat licenses onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full three-lever framework for reducing per-seat CRM cost without switching platforms.</p>
                <span className="link">See all three levers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/custom-partner-portal-development" className="link">Move partners off per-login community seats →</Link>
              <Link href="/savings-calculator" className="link">Calculate your per-seat savings →</Link>
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
                <p className="lede">Light users, how to spot them, cheaper licenses, migration risk, and cost.</p>
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

        <LeadForm source="Move Light Users Off Salesforce page" heading="See which users you can move" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us which CRM you run and roughly how many users. We'll come back with how many are likely portal candidates — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep the seats worth paying for. <em>Move the rest.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use the CRM, flag the portal candidates, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full CRM cost-reduction framework →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
