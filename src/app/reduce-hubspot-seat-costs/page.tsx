import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page: the HubSpot-specific counterpart to /reduce-crm-licensing-costs.
// Salesforce already has two dedicated cost pages (compare/salesforce-seat-cost-
// vs-custom-portal and compare/salesforce-experience-cloud-vs-custom-portal);
// HubSpot only had blog coverage. This page anchors the ~17-post HubSpot blog
// cluster (cut-hubspot-seat-costs, hubspot-seat-cost-vs-custom-portal,
// hubspot-paid-vs-free-seats, hubspot-enterprise-seat-cost-breakdown, …) and
// captures the "reduce/cut HubSpot seat cost" renewal-intent SERP where ARDN's
// blog already ranks. Positioning is the same wedge — "keep HubSpot, cut the
// bill" — with HubSpot-specific levers (unused seats, Hub tier right-sizing,
// free CRM seats, and moving light users to a flat-fee portal). No fabricated
// pricing: seat ranges are publicly listed list prices, labeled illustrative.
export const metadata: Metadata = {
  title: "How to Reduce HubSpot Seat Costs | Ardn",
  description:
    "Four honest ways to cut HubSpot seat costs: drop unused seats, right-size Hub tiers, use free CRM seats, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "lower HubSpot bill",
    "HubSpot seat cost reduction",
    "HubSpot paid vs free seats",
    "HubSpot custom portal for light users",
    "HubSpot Sales Hub seat cost",
    "HubSpot Service Hub seat cost",
    "move light users off HubSpot seats",
    "HubSpot renewal negotiation",
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
      "Four honest ways to cut HubSpot seat costs without leaving HubSpot: drop unused seats, right-size Hub tiers, use free CRM seats, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
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
      "Four honest ways to cut HubSpot seat costs — drop unused seats, right-size tiers, use free seats, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What's the fastest way to reduce our HubSpot bill?",
    a: "Dropping paid seats nobody uses. Pull last-login data, flag anyone inactive for 60+ days plus duplicate accounts left over from role changes, and remove those paid seats at renewal. It's the quickest, lowest-risk saving because it changes nothing for active users. HubSpot bills paid seats per user, so every seat you remove comes straight off the recurring bill.",
  },
  {
    q: "Does everyone in HubSpot actually need a paid seat?",
    a: "Almost never. HubSpot separates paid seats (which unlock Sales Hub / Service Hub features like sequences, forecasting, and advanced reporting) from free CRM access. Staff who mainly view or update a record — not run full sales or service workflows — often don't need a paid seat at all. Auditing who truly uses paid features versus who just needs to see data is usually the second-biggest saving after removing dead seats.",
  },
  {
    q: "How do we cut costs for users who log in but barely use HubSpot?",
    a: "That's the group a seat audit can't fully solve, because the seats are genuinely in use — just lightly. Field staff checking a record, ops updating a status, partners submitting a request, customers checking their own history. You can move them to a free seat where the feature set allows, or give them a purpose-built custom portal wired into HubSpot's API that runs on one flat fee no matter how many of them there are. The portal is the more durable saving because it breaks the link between cost and headcount entirely.",
  },
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No — that's the whole point. Every lever here keeps HubSpot as your system of record. A seat audit right-sizes your existing contract; a custom portal sits alongside HubSpot and syncs through its API in real time. Your power users keep working in HubSpot exactly as they do today. Nothing gets migrated or ripped out.",
  },
  {
    q: "How is a custom portal different from HubSpot's own free seats or a cheaper tier?",
    a: "Free seats and lower Hub tiers are still HubSpot licences — they cap what the user can do and, above the free tier, still bill per head. A custom portal is yours: shaped to exactly the tasks your light users perform, integrated two-way with HubSpot, and priced as one flat monthly fee regardless of how many users you add. Per-seat cost grows every time you add someone to that group; a flat fee doesn't.",
  },
  {
    q: "How much can a custom portal actually save versus HubSpot seats?",
    a: "It depends on how many light users you have and what you pay per seat, so we won't quote a fixed number here. Publicly, HubSpot Sales Hub seats commonly list in the roughly $20–$90+/user/month range depending on tier — confirm your own rate, since HubSpot updates pricing periodically. The mechanism is simple: per-seat fees recur and grow with headcount, while a flat-fee portal costs the same at 10 users or 400. Our savings calculator lets you plug in your own seat count and rate.",
  },
  {
    q: "How long does a portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Drop paid seats nobody uses",
    body: "Inactive, duplicate, and 'just in case' paid seats are the fastest win because removing them changes nothing for active users. Pull last-login data and right-size at renewal.",
    best: "Best for: dormant or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match the Hub tier to real usage",
    body: "Enterprise seats cost far more than Professional or Starter, and Enterprise features often go unused. Match each user's tier to what they actually do — not to 'just in case.'",
    best: "Best for: over-tiered users who still need native HubSpot.",
  },
  {
    tag: "Lever 3 — Free seat",
    title: "Move view-only users to a free seat",
    body: "HubSpot gives free CRM access alongside paid seats. Users who only view or update records — not run paid workflows — can often drop to a free seat within HubSpot's limits.",
    best: "Best for: light internal users the free tier can serve.",
  },
  {
    tag: "Lever 4 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "For sellers, ops, partners, and customers who need a sliver of HubSpot, a purpose-built portal wired into it runs on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: external & light users at scale.",
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
        headline: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
        name: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
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
                  Cut your HubSpot seat bill — <em>keep HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills paid seats per user, so the cost piles up on
                  everyone who touches it lightly — the sellers, ops staff,
                  partners, and customers who need a sliver of it. There are four
                  honest ways to cut that bill, and only one of them requires
                  building anything. Here&apos;s how to decide which lever fits
                  which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Sales, Service &amp; more</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The four levers</div>
                  <ul className="features mt-3">
                    <li>Drop paid seats nobody uses</li>
                    <li>Match the Hub tier to real usage</li>
                    <li>Move view-only users to a free seat</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the last one breaks the link between cost and headcount.
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
                <p className="lede">A HubSpot paid seat is priced for someone who runs full sales or service workflows. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who lives in sequences and forecasting and a seller who checks one record twice a day usually cost the same per paid seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring paid seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of HubSpot outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot Sales Hub seats commonly list in the roughly
              $20–$90+/user/month range depending on tier (Starter, Professional,
              Enterprise), and Service Hub seats bill the same way. A flat-fee
              portal costs the same at 10 light users or 400. (List prices shown
              for illustration only — confirm your own negotiated rate and{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link>.)
            </p>
          </div>
        </section>

        {/* THE LEVERS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Four ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment.</p>
              </div>
            </div>
            <div className="grid-4">
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
                  <tr><td className="feat">Inactive / left the company</td><td>Drop the paid seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">View-only, fits the free tier</td><td>Move to a free CRM seat</td><td className="is-yes">$0 — within HubSpot limits</td></tr>
                  <tr><td className="feat">Over-tiered but needs native HubSpot</td><td>Right-size the Hub tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the portal row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;leave HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. HubSpot stays
                  the system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less stop paying for a paid seat built for someone
                  who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Right-size first</div>
                      <p className="fl-body">Dead seats, over-tiered users, and free-seat candidates are the quick wins — no build required.</p>
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
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework for reducing per-seat CRM cost — Salesforce, HubSpot, and beyond.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/blog/cut-hubspot-seat-costs" className="link">How to cut HubSpot Sales Hub seat costs →</Link>
              <Link href="/blog/hubspot-paid-vs-free-seats" className="link">HubSpot paid vs. free seats explained →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/custom-partner-portal-development" className="link">Partner &amp; dealer logins? Cut per-login portal costs →</Link>
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
                <p className="lede">Fast wins, free vs paid seats, light users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with which levers cut your cost the most — and a fixed quote." />

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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Run Salesforce or another CRM? See the full CRM cost guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
