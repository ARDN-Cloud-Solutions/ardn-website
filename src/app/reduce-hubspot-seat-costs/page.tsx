import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge SPOKE for the HubSpot side of the per-seat cost-reduction wedge.
// The cross-CRM pillar lives at /reduce-crm-licensing-costs and the product
// at /custom-portal-development; this page targets the HubSpot-specific query
// set ("reduce HubSpot seat costs", "HubSpot alternative for light users",
// "HubSpot per seat pricing too expensive") that already earns blog traffic
// but had no conversion landing page. Positioning stays "keep HubSpot, cut the
// bill" — never "rip out HubSpot." HubSpot list-price ranges are labeled
// illustrative (HubSpot changes pricing); no fabricated numbers or clients.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat Costs Without Switching | Ardn",
  description:
    "Three honest ways to cut HubSpot seat costs: reclaim unused seats, right-size Hub tiers, or move light users to a flat-fee portal synced live to HubSpot.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot seat costs",
    "HubSpot per seat pricing",
    "HubSpot Sales Hub seat cost",
    "HubSpot alternative for light users",
    "HubSpot view-only seats",
    "custom portal for HubSpot",
    "HubSpot license cost reduction",
    "move light users off HubSpot",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot seat costs without a migration: reclaim unused seats, right-size Hub tiers, or move light users to a flat-fee custom portal synced to HubSpot.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce HubSpot seat costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Seat Costs Without Switching | Ardn",
    description:
      "Three honest ways to cut HubSpot seat costs — reclaim, right-size, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I cut HubSpot seat costs without losing HubSpot?",
    a: "You keep HubSpot as your system of record. Start by reclaiming any paid seats that sit unused, then check whether every paid user actually needs a paid seat rather than free CRM access, then right-size the Hub tier to the features people really use. The structural saving comes last: move the light users — the people who only view or update a handful of records — to a custom portal wired into HubSpot's API on one flat fee. Nothing gets migrated out of HubSpot.",
  },
  {
    q: "Are HubSpot view-only / free seats enough for light users?",
    a: "Sometimes. HubSpot distinguishes paid seats from free CRM access, and staff who only need to view or lightly update records may not need a paid seat at all. Where free access falls short is a purpose-built workflow — a seller checking inventory, a partner submitting a request, a customer self-serving. That is exactly where a custom portal gives light users a clean, focused tool without a paid HubSpot seat each.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever here keeps HubSpot in place. A seat audit right-sizes your existing subscription; a custom portal sits alongside HubSpot and syncs two-way through its API. A full migration is a separate, larger decision that only makes sense if the platform itself no longer fits your closers — not something worth doing just to trim seat cost.",
  },
  {
    q: "How much does a HubSpot Sales Hub seat cost?",
    a: "Sales Hub seats are commonly listed in roughly the $20–$90+/user/month range depending on tier (Starter, Professional, Enterprise) — confirm your own current rate, since HubSpot updates pricing periodically. The point is the mechanism, not a fixed number: per-seat pricing recurs and grows with headcount, so the more light users you carry, the more a flat-fee portal saves.",
  },
  {
    q: "How much can a custom portal actually save versus HubSpot seats?",
    a: "It depends on how many light users you have and what you pay per seat, so we won't quote a fixed figure. A flat-fee portal costs the same at 10 light users or 400, while per-seat fees keep climbing with every new hire, partner, or customer segment. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does a HubSpot-connected portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Pull last-login data and flag anyone dormant for 60+ days, plus duplicate accounts from role changes. Deactivating them changes nothing for active users — the fastest, lowest-risk win.",
    best: "Best for: inactive or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Downgrade seats & Hub tiers",
    body: "Not every user needs a paid seat or the Enterprise tier. Match paid seats and Hub tier (Starter / Professional / Enterprise) to the features people actually use — cheaper per head, but still per head.",
    best: "Best for: occasional users who still work inside HubSpot.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of HubSpot a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, ops, partners & customers using HubSpot lightly.",
  },
];

export default function ReduceHubspotSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-seat-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce HubSpot Seat Costs Without Switching CRMs",
        name: "How to Reduce HubSpot Seat Costs Without Switching CRMs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot seat cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Reduce CRM Licensing Costs", item: "https://ardncloudsolutions.com/reduce-crm-licensing-costs" },
          { "@type": "ListItem", position: 3, name: "Reduce HubSpot Seat Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot seat bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&rsquo;s per-seat pricing is simple, which is exactly why
                  it&rsquo;s easy to overlook how much seat count drives the bill.
                  Most of those seats belong to light users — sellers, ops staff,
                  partners, and customers who touch HubSpot for a handful of tasks.
                  There are three honest ways to cut what you pay for them, and only
                  one requires building anything. Here&rsquo;s how to decide which
                  lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Two-way HubSpot sync</span>
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
                    <li>Reclaim paid seats nobody uses</li>
                    <li>Downgrade seats &amp; right-size Hub tiers</li>
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
                <h2 className="h1 mt-3">Why HubSpot seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A paid Sales Hub seat is priced for someone who runs full sales workflows in it. Most of your seats don&rsquo;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep running sequences and forecasting all day and a colleague who updates one record twice a day can cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring paid seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Enterprise features go unused</h3>
                <p className="body">Enterprise-tier seats cost meaningfully more than Professional or Starter, and a lot of assigned users never touch the Enterprise features they&rsquo;re billed for.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot Sales Hub seats are commonly listed in roughly the
              $20&ndash;$90+/user/month range depending on tier, and a flat-fee
              portal costs the same at 10 light users or 400. (List prices shown for
              illustration only and change periodically —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own rate.)
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
                <span className="eyebrow">Which lever, which user</span>
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
                  <tr><td className="feat">Occasional, but works inside HubSpot</td><td>Downgrade to free access or a lower tier</td><td className="is-no">Lower / free, still per-seat</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Closer living in Sales Hub</td><td>Keep the paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the full cross-CRM playbook on <Link href="/reduce-crm-licensing-costs" className="link">how to cut CRM licensing costs</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&rsquo;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. HubSpot stays the
                  system of record on every option here. Your closers keep working
                  exactly as they do today. All that changes is that the users who
                  need less stop paying for a tool built for someone who needs
                  everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Audit first</div>
                      <p className="fl-body">Dormant and duplicate paid seats are free money — reclaim them before renewal.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time — no second database drifting out of sync.</p>
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
                <h2 className="h1 mt-3">The tools <em>behind the play.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The cross-CRM playbook — the same three levers for Salesforce and any per-seat CRM.</p>
                <span className="link">Read the pillar →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">Keeping HubSpot, view-only seats, migration risk, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and which are light users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use HubSpot, show which levers cut the most, and give you a fixed quote in 48 hours. No lock-in, cancel in 30 days — and new customers pay nothing to build.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
