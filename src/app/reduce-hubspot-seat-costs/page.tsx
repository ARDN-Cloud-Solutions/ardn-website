import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke — HubSpot-specific counterpart to /reduce-crm-licensing-costs.
// ARDN has the deepest HubSpot seat-cost blog library on the site but, until
// now, no commercial landing page (Salesforce has several). This closes that
// asymmetry and targets the HubSpot money terms ("reduce HubSpot license
// costs", "HubSpot seat cost alternative", "HubSpot portal for light users").
// Positioning is the same honest wedge — keep HubSpot as the system of record,
// move light users off paid Core seats onto a flat-fee portal. No fabricated
// pricing: HubSpot's seat model is described from publicly documented mechanics
// and any figure is labeled illustrative, pointing to the calculator for real
// numbers.
export const metadata: Metadata = {
  title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Three honest ways to cut HubSpot seat costs without leaving HubSpot: reclaim inactive seats, use free view-only seats, or move light users to a flat-fee portal.",
  keywords: [
    "reduce HubSpot license costs",
    "cut HubSpot seat costs",
    "HubSpot seat cost alternative",
    "HubSpot Core seat cost",
    "HubSpot view-only seat",
    "HubSpot portal for light users",
    "HubSpot custom portal",
    "reduce HubSpot licensing costs",
    "HubSpot seat cliff",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Three honest ways to reduce HubSpot seat costs without a migration: reclaim inactive seats, move users to free view-only seats, or offload light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut HubSpot seat costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Three honest ways to cut HubSpot seat costs — reclaim inactive seats, use free view-only seats, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce HubSpot seat costs?",
    a: "Reclaiming paid Core seats nobody actively uses. Since HubSpot moved to seat-based pricing, every person assigned a paid seat costs the same whether they live in the platform or open it twice a month. Audit last-login and activity data, then remove or downgrade the paid seats going unused before your renewal — it is the fastest, lowest-risk saving because it changes nothing for active users.",
  },
  {
    q: "How do HubSpot's free view-only seats fit in?",
    a: "HubSpot includes free view-only seats that let people see records, reports, and dashboards without a paid Core seat. If someone only needs to look at data — a manager checking a dashboard, an exec reviewing pipeline — a view-only seat may cover them for free. The limit is that view-only users can't take action (edit records, work deals, log activity), so it only helps for genuinely read-only people. Anyone who needs to do a few tasks still gets pushed back to a paid seat.",
  },
  {
    q: "How do I cut costs for users who need to DO a few things but not everything?",
    a: "That's the group free view-only seats can't cover and paid seats overcharge — the light 'doers.' Sellers updating one field, ops staff changing a status, partners submitting a request. Instead of buying each of them a full paid Core seat, you give them a purpose-built portal wired into HubSpot through its API, on one flat fee no matter how many users you add. HubSpot stays the system of record; the light users get a focused tool that costs the same at 10 users or 400.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever here keeps HubSpot as your system of record. A seat audit right-sizes your existing subscription, view-only seats use HubSpot's own free tier, and a custom portal sits alongside HubSpot and syncs through its API. A full migration is a separate, much larger decision — not something you should take on just to trim seat cost.",
  },
  {
    q: "What is the 'HubSpot seat cliff' people talk about?",
    a: "It's the jump in cost when a light user needs just slightly more than a free view-only seat allows, forcing you to buy them a full paid Core seat for a fraction of its capability. Multiply that across dozens of light users and the bill climbs fast — which is exactly the overpayment a flat-fee portal removes, because portal users never consume a paid seat at all.",
  },
  {
    q: "How much can a custom portal actually save versus HubSpot seats?",
    a: "It depends on how many light users you have and what you pay per Core seat, so we won't quote a fixed number here. The mechanism is simple: paid seats recur and grow with headcount, while a flat-fee portal costs the same regardless of how many users you add. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim paid seats nobody uses",
    body: "Since HubSpot bills per paid Core seat, dormant and 'just in case' seats are pure waste. Audit activity and remove or downgrade unused paid seats at renewal — it changes nothing for active users.",
    best: "Best for: inactive or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — View-only",
    title: "Move read-only people to free seats",
    body: "HubSpot's free view-only seats let people see records, dashboards, and reports without a paid seat. Perfect for anyone who only needs to look — but they can't edit, work deals, or log activity.",
    best: "Best for: genuinely read-only viewers.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light 'doers' to a flat-fee portal",
    body: "For users who need to do a few things but not everything, a purpose-built portal wired into HubSpot gives them exactly that — on one flat fee no matter how many you add. Cost stops scaling with headcount.",
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
        headline: "How to Cut HubSpot Seat Costs Without Leaving HubSpot",
        name: "How to Cut HubSpot Seat Costs Without Leaving HubSpot",
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
          { "@type": "ListItem", position: 2, name: "Cut HubSpot Seat Costs", item: url },
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
                  HubSpot bills per paid Core seat, so the cost piles up on every
                  light user — the sellers, ops staff, partners, and customers who
                  touch it for a handful of tasks. There are three honest ways to
                  cut that bill, and only one of them requires building anything.
                  Here&apos;s how to decide which lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Flat fee, not per-seat</span>
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
                    <li>Move read-only people to free seats</li>
                    <li>Move light doers to a flat-fee portal</li>
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
                <h2 className="h1 mt-3">Why HubSpot&apos;s seat model <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A paid HubSpot Core seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One seat price, very different use</h3>
                <p className="body">A rep who runs pipeline all day and a seller who edits one field twice a week both consume a full paid Core seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The seat cliff</h3>
                <p className="body">The moment a light user needs to do slightly more than a free view-only seat allows, they get bumped to a full paid seat — for a fraction of its capability.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of HubSpot outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot Sales Hub and Service Hub Professional list around
              $90–$100 per paid seat per month, and Enterprise higher. Free
              view-only seats cover people who only need to look. A flat-fee portal
              costs the same at 10 light users or 400. (List figures shown for
              illustration only —{" "}
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the paid seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Read-only — only needs to look</td><td>Move to a free view-only seat</td><td className="is-yes">$0 — free view-only seat</td></tr>
                  <tr><td className="feat">Light doer — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the paid Core seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the full <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">seat-cost math</Link>.
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
                  users who need less stop paying for a seat built for someone who
                  needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim &amp; right-size first</div>
                      <p className="fl-body">Remove dormant paid seats and push read-only people to free view-only seats — free money before you build anything.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light doers</div>
                      <p className="fl-body">The users who need to act, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time through its API — no second database drifting out of sync.</p>
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
                <h3 className="h3">Reduce CRM Licensing Costs</h3>
                <p className="body">The full, CRM-agnostic decision framework — the same three levers for Salesforce and any CRM.</p>
                <span className="link">See the full guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light HubSpot users off paid seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-partner-portal-development" className="link">Replace per-login partner &amp; dealer seats with a flat-fee portal →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
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
                <p className="lede">The fastest saving, free view-only seats, the seat cliff, migration risk, and cost.</p>
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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Not on HubSpot? See the full CRM cost-reduction guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
