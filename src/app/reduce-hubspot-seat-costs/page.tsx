import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE SPOKE for the HubSpot side of the per-seat cost-reduction wedge. The
// existing wedge cluster (/reduce-crm-licensing-costs, /custom-portal-development,
// /compare/salesforce-seat-cost-vs-custom-portal) is Salesforce-led; HubSpot's
// move to seat-based pricing created a fresh, actively-searched pain point that
// no ARDN page owned. This mirrors the proven Salesforce pillar 1:1 for HubSpot
// intent: "reduce HubSpot seat costs", "cut HubSpot licensing costs",
// "HubSpot seat-based pricing alternative", "HubSpot view-only seat".
// Positioning: keep HubSpot, move light users to a flat-fee custom portal that
// syncs with it. No fabricated pricing — mechanics only, no invented dollar
// figures; the calculator is offered for real numbers.
export const metadata: Metadata = {
  title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Cut your HubSpot bill without cutting users. Move light users off per-seat licenses onto a flat-fee custom portal that syncs with HubSpot — no migration.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot seat-based pricing alternative",
    "HubSpot view-only seat",
    "lower HubSpot costs",
    "HubSpot seat cost reduction",
    "custom portal to reduce HubSpot seats",
    "HubSpot light user license",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Cut HubSpot Seat Costs Without Cutting Users | Ardn",
    description:
      "Move light users off per-seat HubSpot licenses onto a flat-fee custom portal that syncs with HubSpot. Keep HubSpot as your system of record — no migration.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut HubSpot seat costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off per-seat HubSpot licenses onto a flat-fee custom portal that syncs with HubSpot — no migration.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Why did our HubSpot bill jump as we added people?",
    a: "HubSpot moved to seat-based pricing, so most people who need to do real work in the platform take up a paid seat. As you add sellers, service reps, and ops staff, the paid-seat count climbs with headcount — even for users who only touch a narrow slice of HubSpot. The overpayment concentrates on those lighter users, because a seat is priced for someone who lives in the tool all day.",
  },
  {
    q: "Don't free view-only seats already solve the light-user problem?",
    a: "Only partly. Free view-only access is genuinely useful for people who just need to look at records or dashboards. But the moment a light user has to do something — update a deal stage, submit a request, log an interaction, edit a record — they need a paid seat. Most 'light' users are light-writing, not read-only, so they fall on the paid side of that line. A custom portal gives them exactly the write actions they need without a full paid seat each.",
  },
  {
    q: "How does a custom portal cut HubSpot seat costs?",
    a: "We build a purpose-built portal for your light users — sellers, ops staff, partners, or customers — and wire it into HubSpot through its API. Those users do their narrow slice of work in the portal, which reads and writes the same HubSpot records in real time. They no longer need a paid HubSpot seat each; the portal runs on one flat monthly fee no matter how many users you add. Your HubSpot stays the system of record and your power users keep working in it exactly as they do today.",
  },
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No — that's the entire point. You keep HubSpot and everything in it. The portal connects through HubSpot's API and stays in sync both ways, so nothing gets ripped out and nothing gets migrated. A full migration is a separate, larger decision that only makes sense if HubSpot itself no longer fits your power users — not something you should take on just to trim seat cost.",
  },
  {
    q: "Which HubSpot users are the best candidates to move to a portal?",
    a: "Anyone who needs a fraction of HubSpot but currently occupies a paid seat: field or channel sellers checking and updating a handful of records, operations and back-office staff who update statuses, partners and vendors submitting or tracking requests, and customers who should self-serve rather than sit inside your CRM. Power users who run pipeline, marketing, or service all day stay on their HubSpot seats — those are worth it.",
  },
  {
    q: "How long does a portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
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
        headline: "How to Cut HubSpot Seat Costs Without Cutting Users",
        name: "How to Cut HubSpot Seat Costs Without Cutting Users",
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
                  Cut your HubSpot bill — <em>without cutting users.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s seat-based pricing charges a paid seat for almost
                  anyone who does real work in it — including the sellers, ops
                  staff, partners, and customers who touch a sliver of it. Move
                  those light users to a purpose-built portal wired into HubSpot,
                  and they stop needing a seat each. You keep HubSpot; the bill
                  stops climbing with headcount.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way HubSpot sync, one source of truth</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Flat fee from $3,000/mo — no per-seat pricing, ever.
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
                <p className="lede">A HubSpot seat is priced for someone who lives in the platform. Most of your users don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Seats scale with headcount</h3>
                <p className="body">Since HubSpot moved to seat-based pricing, nearly everyone who does real work needs a paid seat. Every new seller, rep, or ops hire adds another recurring seat — permanently.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Free view-only isn&apos;t enough</h3>
                <p className="body">Free view-only access covers people who only look. The moment a light user has to update a record or submit a request, they need a paid seat — and most light users are light-writing, not read-only.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of HubSpot outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE PLAY */}
        <section className="section is-canvas" id="how">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep HubSpot. Cut the cost.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  We&apos;re not here to pull you off HubSpot. It stays your system
                  of record and your power users keep working in it exactly as
                  they do today. We just stop you from paying full seats for users
                  who need a fraction of it — by giving them a purpose-built portal
                  that talks to HubSpot in real time. You get the savings and a
                  better tool for those users, without the risk of a migration.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down CRM view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Two-way sync, one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time — no second database drifting out of sync.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">Cost stops scaling with headcount</div>
                      <p className="fl-body">Per-seat fees recur and grow forever. A flat-fee portal costs the same at 10 users or 400.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which user, which fix</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each group to the right saving. Most companies keep power users on HubSpot and move the rest.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right move</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">View-only — just needs to look</td><td>Free HubSpot view-only seat</td><td className="is-yes">$0 — no paid seat</td></tr>
                  <tr><td className="feat">Light — updates a few records, submits requests</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Partner or customer (external)</td><td>Branded self-service portal</td><td className="is-yes">Flat fee — no internal seat</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
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
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework for any CRM — reclaim, right-size, or replace the seat.</p>
                <span className="link">See the framework →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">Seat-based pricing, view-only seats, how the portal works, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts your cost — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full seats <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where a portal cuts the seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>On Salesforce too? See how to cut CRM licensing costs →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
