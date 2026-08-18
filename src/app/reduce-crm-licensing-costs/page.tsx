import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// PILLAR page for the per-seat cost-reduction wedge. Targets the problem-intent
// head terms ("reduce/cut CRM licensing costs", "reduce per-seat license
// costs") — distinct from /custom-portal-development (the solution/product) and
// /compare/salesforce-seat-cost-vs-custom-portal (the cost-math comparison).
// This is the honest DECISION FRAMEWORK: it lays out all three real levers
// (reclaim dormant seats, right-size license tiers, move light users to a
// flat-fee portal) and funnels the "used-but-light" segment toward a portal.
// No fabricated pricing: license ranges are publicly listed list prices,
// explicitly labeled illustrative, and the calculator is offered for real
// numbers. GEO-structured (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "How to Cut CRM Licensing Costs | Ardn",
  description:
    "Three honest ways to reduce per-seat CRM licensing costs: reclaim unused seats, right-size license tiers, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce CRM licensing costs",
    "cut CRM licensing costs",
    "reduce per-seat license costs",
    "how to reduce Salesforce license costs",
    "cut Salesforce licensing costs",
    "reduce HubSpot seat costs",
    "CRM cost reduction",
    "custom portal to reduce CRM seats",
    "light user CRM license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-crm-licensing-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-crm-licensing-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-crm-licensing-costs",
    },
  },
  openGraph: {
    title: "How to Cut CRM Licensing Costs — Keep Your CRM | Ardn",
    description:
      "Three honest ways to reduce per-seat CRM licensing costs without a migration: reclaim unused seats, right-size tiers, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-crm-licensing-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut CRM licensing costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cut CRM Licensing Costs | Ardn",
    description:
      "Three honest ways to reduce per-seat CRM licensing costs — reclaim, right-size, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce CRM licensing costs?",
    a: "Reclaiming seats nobody uses. Most mid-market CRM orgs carry a meaningful share of dormant or duplicate licenses — people who left, changed roles, or were provisioned 'just in case.' Auditing and deactivating those at renewal is the quickest, lowest-risk saving because it changes nothing for active users. For Salesforce, License Guard automates that scan; for any CRM, a manual usage audit gets you most of the way.",
  },
  {
    q: "How do I cut costs for users who log in but barely use the CRM?",
    a: "That's the group a license audit can't help, because the seats are genuinely in use — just lightly. Sellers checking inventory, ops staff updating a status, partners submitting a request. The options are to move them to a cheaper license tier (still per-seat, still capped), or to give them a purpose-built custom portal wired into the CRM that runs on one flat fee no matter how many users you add. The portal is usually the bigger, more durable saving because it breaks the link between cost and headcount.",
  },
  {
    q: "Do I have to leave Salesforce or HubSpot to save money?",
    a: "No. Every lever on this page keeps your CRM as the system of record. A license audit right-sizes your existing contract; a custom portal sits alongside the CRM and syncs through its API. A full migration is a separate, larger decision that only makes sense if the platform itself no longer fits your power users — not something you should take on just to trim seat cost.",
  },
  {
    q: "What is a 'light user' and why do they cost the most per unit of value?",
    a: "A light user touches the CRM for a narrow slice of work but gets billed the same (or nearly the same) as a power user who lives in it all day. Because per-seat pricing is built around the power user, the overpayment concentrates on everyone lighter than that — which in most companies is the majority of the seat count.",
  },
  {
    q: "How much can a custom portal actually save versus per-seat licenses?",
    a: "It depends entirely on how many light users you have and what you pay per seat, so we won't quote a fixed number here. The mechanism is simple: per-seat fees recur and grow with headcount, while a flat-fee portal costs the same at 10 users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' licenses are the fastest win because deactivating them changes nothing for active users. Audit usage and right-size at renewal.",
    best: "Best for: inactive or forgotten seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to a cheaper tier",
    body: "CRMs sell limited-access, platform, and login-based tiers below a full seat. Cheaper per head — but still per head, and still capped in what you can build for that user.",
    best: "Best for: occasional users who still need native CRM access.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of the CRM a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, ops, partners & customers using the CRM lightly.",
  },
];

export default function ReduceCrmLicensingCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-crm-licensing-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Cut CRM Licensing Costs Without Switching CRMs",
        name: "How to Cut CRM Licensing Costs Without Switching CRMs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "CRM license cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Reduce CRM Licensing Costs", item: url },
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
                <span className="eyebrow">Reduce CRM Licensing Costs</span>
                <h1 className="display reveal">
                  Cut your CRM licensing bill — <em>without switching CRMs.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Per-seat CRM pricing is built around power users, so the cost
                  piles up on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks.
                  There are three honest ways to cut that bill, and only one of
                  them requires building anything. Here&apos;s how to decide which
                  lever fits which problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Salesforce, HubSpot &amp; more</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim seats nobody uses</li>
                    <li>Right-size users to cheaper tiers</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the third one breaks the link between cost and headcount.
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

        {/* WHY THE BILL CLIMBS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the money goes</span>
                <h2 className="h1 mt-3">Why per-seat pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A CRM seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who runs pipeline all day and a seller who checks one screen twice a day usually cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of the CRM outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: a full Salesforce Sales Cloud Enterprise seat lists at
              roughly $165/user/month, and Experience Cloud external users bill
              on top — commonly around $2 per login or $5–$35 per member per
              month depending on the SKU. HubSpot paid Sales/Service Hub seats
              run roughly $20–$150/user/month by tier. A flat-fee portal costs
              the same at 10 light users or 400 — one fee, not per authenticated
              user. (List prices shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* THE THREE LEVERS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Three ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment.</p>
              </div>
            </div>
            <div className="grid-3">
              {levers.map((l) => (
                <div className="card" key={l.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{l.tag}</span>
                  <h3 className="h3 mt-2">{l.title}</h3>
                  <p className="body">{l.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{l.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which lever, which problem</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each group to the right saving. Most companies use more than one lever at once.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right lever</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional, but needs native CRM</td><td>Right-size to a cheaper tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out Salesforce.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. Your CRM stays
                  the system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less stop paying for a tool built for someone who
                  needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant seats are free money — <Link href="/license-guard" className="link">License Guard</Link> automates the scan for Salesforce orgs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent — and a <Link href="/custom-partner-portal-development" className="link">custom partner portal for external light users</Link> replaces the priciest per-login seats of all.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same CRM records in real time — no second database drifting out of sync.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically — the fastest, lowest-risk lever.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/hubspot-seat-cost-vs-custom-portal" className="link">Reduce HubSpot seat costs →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
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
                <p className="lede">The fastest saving, light users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce CRM Licensing Costs page" heading="See where your CRM bill is leaking" showSeatQualifiers buttonLabel="Send me my savings breakdown" sub="Tell us which CRM you run and roughly how many users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use the CRM, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
