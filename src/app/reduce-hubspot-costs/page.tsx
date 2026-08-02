import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// HubSpot-specific money page for the per-seat cost-reduction wedge. Targets
// branded high-intent terms ("reduce HubSpot seat costs", "HubSpot alternative
// for light users", "HubSpot view-only seats") that had a 12-post blog cluster
// but no landing page to funnel into. Mirrors the proven
// /reduce-crm-licensing-costs template. HubSpot's editing-seat model is a
// sharper pain than Salesforce's login options, so the "keep HubSpot, move
// light users to a flat-fee portal" pitch lands directly.
// Pricing references are publicly listed HubSpot list price, labeled
// illustrative. No fabricated client names, metrics, or exact quotes.
export const metadata: Metadata = {
  title: "How to Reduce HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot seat costs without leaving HubSpot: use free view-only seats, right-size paid tiers, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot alternative for light users",
    "HubSpot view-only seats",
    "HubSpot paid vs free seats",
    "HubSpot Sales Hub seat cost",
    "custom portal to reduce HubSpot seats",
    "HubSpot cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-costs",
    },
  },
  openGraph: {
    title: "How to Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot seat costs without a migration: use free view-only seats, right-size paid tiers, or move light users to a flat-fee custom portal synced to HubSpot.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce HubSpot seat costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reduce HubSpot Seat Costs | Ardn",
    description:
      "Cut HubSpot seat costs — use free view-only seats, right-size paid tiers, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Does HubSpot have free or view-only seats for light users?",
    a: "Yes. HubSpot offers no-cost view-only and free seats you can assign to people who only need to read records, pull a report, or check a deal's status — executives, stakeholders, and occasional viewers. Reassigning read-only users off paid seats onto free ones is the fastest, lowest-risk saving because it changes nothing for the people who actually edit in HubSpot. The catch: anyone who needs to create or edit records still needs a paid seat.",
  },
  {
    q: "Do all HubSpot users need a full paid seat?",
    a: "No. Only users who create or edit records in a paid tool (Sales Hub, Service Hub, etc.) need a paid Core seat. HubSpot's paid seats are tiered — Starter, Professional, and Enterprise — and the jump from Starter to Professional is where the bill accelerates. Users who only view can sit on free seats; users who edit but lightly are the group where a flat-fee portal saves the most.",
  },
  {
    q: "What is the fastest way to reduce HubSpot costs?",
    a: "Audit seat assignments and move every read-only user onto a free view-only seat. Then right-size the paid users: not everyone on a Professional seat needs Professional-tier features. Both changes keep HubSpot exactly as it is. The durable lever, for the light users who edit a handful of records, is moving them to a custom portal wired into HubSpot on one flat fee — because a paid seat is a paid seat regardless of how lightly it's used.",
  },
  {
    q: "How is a custom portal cheaper than adding HubSpot seats?",
    a: "HubSpot's paid-seat model bills per editing user. Field staff, ops teams, partners, and customers who need to view or update a handful of records each cost a full seat, and that cost grows every time you add one. A custom portal synced live to HubSpot's API gives that group exactly what they need on one flat monthly fee — the same at 10 users or 400. It doesn't replace HubSpot; HubSpot stays the system of record and the portal reads and writes the same records.",
  },
  {
    q: "Do I have to leave HubSpot to cut the cost?",
    a: "No. Every lever here keeps HubSpot as the system of record. Reassigning seats and right-sizing tiers happen inside your existing account; a custom portal sits alongside HubSpot and syncs through its API. A full migration is a separate, larger decision — not something to take on just to trim seat cost.",
  },
  {
    q: "How long does a portal take to stand up, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes, with no per-seat pricing. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reassign",
    title: "Move read-only users to free seats",
    body: "HubSpot's free view-only seats cost nothing. Anyone who only reads records, pulls a report, or checks a status doesn't need a paid seat — reassign them and the saving is immediate.",
    best: "Best for: executives, stakeholders & occasional viewers.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Right-size paid tiers",
    body: "Not everyone on a Professional seat needs Professional features. Audit what each paid user actually uses and drop them to the tier that fits. Still per-seat, but a smaller per-seat.",
    best: "Best for: paid users over-provisioned above their real usage.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light editors to a flat-fee portal",
    body: "Field staff, ops, partners, and customers who edit a handful of records get a purpose-built portal wired into HubSpot — on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: light editors, partners & customers.",
  },
];

export default function ReduceHubspotCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
        name: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot seat cost reduction" },
          { "@type": "Thing", name: "HubSpot paid vs free seats" },
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
          { "@type": "ListItem", position: 2, name: "Reduce HubSpot Seat Costs", item: url },
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
                  Cut your HubSpot bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills per editing user, and the jump from Starter to
                  Professional is where the cost accelerates. But most of your
                  seats are light — people who view a report or update a record
                  now and then. There are three honest ways to cut that bill, and
                  only one of them requires building anything. Here&apos;s how to
                  decide which lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Synced through the HubSpot API</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free savings call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you&apos;d save →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Move read-only users to free seats</li>
                    <li>Right-size paid tiers</li>
                    <li>Move light editors to a flat-fee portal</li>
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
                <p className="lede">A paid HubSpot seat is priced for someone who works in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Editing costs a full seat</h3>
                <p className="body">Anyone who creates or edits a record in a paid tool needs a paid seat — even if they touch it twice a week. Read-only users can sit free, but light editors can&apos;t.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The Starter-to-Pro jump is steep</h3>
                <p className="body">The step from Starter to Professional is where the per-seat cost accelerates — and it&apos;s easy to over-provision users onto Pro seats they don&apos;t fully use.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs to edit adds another recurring paid seat — permanently, unless something changes the model.</p>
              </div>
            </div>
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
                <p className="lede">Start with the free lever and work down. Each one addresses a different kind of overpayment — most companies use more than one at once.</p>
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
                    <th>If the user…</th>
                    <th>The right lever</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Only views records &amp; reports</td><td>Free view-only seat</td><td className="is-yes">$0 — free seat</td></tr>
                  <tr><td className="feat">Edits, but on a tier they don&apos;t use</td><td>Right-size the paid tier</td><td className="is-no">Lower paid tier, still per-seat</td></tr>
                  <tr><td className="feat">Light editor — field, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the full paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light editors you have and your paid-seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. HubSpot stays
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
                      <div className="fl-head !text-black">Reassign the free seats first</div>
                      <p className="fl-body">Read-only users belong on free view-only seats — no cost, no change to how they work.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light editors</div>
                      <p className="fl-body">The paid seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time through the API — no second database drifting out of sync.</p>
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
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light editors off paid HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cross-CRM Framework</h3>
                <p className="body">The full decision framework for cutting per-seat CRM licensing costs on any platform.</p>
                <span className="link">See the framework →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">The full seat-cost math →</Link>
              <Link href="/reduce-salesforce-costs" className="link">On Salesforce instead? Reduce Salesforce license costs →</Link>
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
                <p className="lede">Free seats, paid tiers, portal savings, and migration risk.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you have and how they split between viewers, light editors, and power users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full cross-CRM cost-reduction framework →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
