import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page mirroring /reduce-crm-licensing-costs for the HubSpot half of
// the buyer base. HubSpot is covered only in blog posts today — no dedicated
// money page. Targets "reduce HubSpot seats", "HubSpot seat cost reduction",
// "cut HubSpot seat costs". Same honest three-lever framework: use free/view
// seats, right-size paid seats, and move light users to a flat-fee custom portal
// wired to HubSpot. No fabricated pricing — HubSpot seat prices are publicly
// listed list prices, labeled illustrative; the calculator gives real numbers.
export const metadata: Metadata = {
  title: "How to Reduce HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot seat costs without losing your CRM: use free seats, right-size paid seats, or move light users to a flat-fee custom portal wired to HubSpot.",
  keywords: [
    "reduce HubSpot seats",
    "HubSpot seat cost reduction",
    "cut HubSpot seat costs",
    "HubSpot paid vs free seats",
    "HubSpot licensing costs",
    "HubSpot seat cost vs custom portal",
    "reduce HubSpot licensing costs",
    "HubSpot cost reduction",
    "custom portal to reduce HubSpot seats",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "How to Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Three honest ways to cut HubSpot seat costs without switching CRMs: use free seats, right-size paid seats, or move light users to a flat-fee custom portal.",
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
    title: "How to Reduce HubSpot Seat Costs | Ardn",
    description:
      "Three honest ways to cut HubSpot seat costs — use free seats, right-size paid seats, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce HubSpot seat costs?",
    a: "Move every user who does not need a paid seat onto a free seat. HubSpot lets an unlimited number of free users into the CRM, and many companies pay for Sales or Service Hub seats for people who only view records, log an activity, or check a dashboard — all of which a free seat can do. Reassigning those users is the quickest, lowest-risk saving because it changes nothing for your paid power users.",
  },
  {
    q: "How do I cut costs for users who need more than a free seat but barely use the paid features?",
    a: "That is the group free seats can't fully cover and full paid seats overcharge for — the light users who touch a narrow slice of paid functionality. The options are to right-size them to the cheapest paid tier that still covers their work, or to give them a purpose-built custom portal wired into HubSpot that runs on one flat fee no matter how many users you add. The portal is usually the bigger, more durable saving because it breaks the link between cost and headcount.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever here keeps HubSpot as your system of record. Reassigning users to free seats and right-sizing paid tiers happen inside your existing HubSpot account; a custom portal sits alongside HubSpot and syncs through its API. A full migration is a separate, larger decision that only makes sense if the platform itself no longer fits your power users — not something to take on just to trim seat cost.",
  },
  {
    q: "How much does a HubSpot paid seat cost?",
    a: "It depends on the Hub and tier. As publicly listed, Sales Hub and Service Hub Professional seats run roughly $90–$100 per seat per month, and Enterprise seats around $150 per seat per month, billed annually. Those are list prices for illustration — your negotiated rate may differ. The point is that every paid seat is a recurring, per-head cost that grows with your team, which is exactly what a flat-fee portal is designed to cap.",
  },
  {
    q: "Can I really use free HubSpot seats instead of paid ones?",
    a: "For a lot of users, yes. Free seats can view the CRM, be assigned records, log activity, and use core CRM tools. What they can't do is use the paid Sales, Service, or Marketing Hub features tied to a paid seat. So the honest test is per user: if someone only needs to see and update records, a free seat covers them; if they need paid features for a narrow task, a right-sized tier or a custom portal is usually cheaper than a full seat.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Free seats",
    title: "Move light users to free seats",
    body: "HubSpot allows unlimited free users. Anyone who only views records, logs activity, or checks a dashboard usually doesn't need a paid seat at all. Reassign them first — it's the fastest, zero-risk win.",
    best: "Best for: view-only and log-only users on a paid seat today.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Right-size the paid tiers",
    body: "For users who genuinely need paid features, match each one to the cheapest tier that covers their work instead of defaulting everyone to Enterprise. Cheaper per head — but still per head, and still capped.",
    best: "Best for: users who need some paid features, but not all of them.",
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
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
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
                  Cut your HubSpot seat bill — <em>without switching CRMs.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills per paid seat, so the cost piles up on the light
                  users who only touch a sliver of it — sellers, ops staff,
                  partners, and customers. There are three honest ways to cut that
                  bill, and only one of them requires building anything. Here&apos;s
                  how to decide which lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Free seats, tiers &amp; portals</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Get a fixed monthly quote</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Move light users to free seats</li>
                    <li>Right-size the paid tiers</li>
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
                <h2 className="h1 mt-3">Why paid seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A HubSpot paid seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who runs pipeline all day and someone who logs one note twice a day can sit on the same paid seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire or team that needs paid features adds another recurring seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of the CRM outnumber the power users — so the overpayment is spread across most of the seat count.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot Sales &amp; Service Hub Professional seats list at
              roughly $90–$100/user/month and Enterprise seats around
              $150/user/month. A flat-fee portal costs the same at 10 light users or
              400. (List prices shown for illustration only —{" "}
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
                  <tr><td className="feat">View-only / logs activity</td><td>Move to a free seat</td><td className="is-yes">$0 — free seat</td></tr>
                  <tr><td className="feat">Needs some paid features</td><td>Right-size to the cheapest tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the full <Link href="/reduce-crm-licensing-costs" className="link">ways to cut CRM licensing costs</Link>.
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
                  decisions, and the internet tends to blur them. HubSpot stays the
                  system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less stop paying for a seat built for someone who
                  needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Free seats first</div>
                      <p className="fl-body">Unlimited free users can view and update the CRM — reassign the view-only crowd before anything else.</p>
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

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">Free vs paid seats, right-sizing, portals, and cost.</p>
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
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">Cutting Salesforce or another CRM instead? →</Link>
              <Link href="/custom-portal-development" className="link">See how a custom portal cuts per-seat costs →</Link>
            </div>
          </div>
        </section>

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what you could save on HubSpot" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how your team uses them. We'll come back with where a portal cuts the cost — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">See what you&apos;re overpaying. <em>Then keep HubSpot.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where free seats, tiers, and a portal cut the bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-software-development" className="btn btn-outline-light btn-lg">See all custom software builds</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
