import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE money page for the HubSpot side of the per-seat cost-reduction wedge.
// The blog cluster carries ~8 HubSpot cost posts (Sales/Service/Marketing/Ops/
// Content Hub, paid-vs-free seats, enterprise breakdown) that until now had no
// HubSpot-specific conversion destination — they funneled to the generic CRM
// pillar. This page is the HubSpot mirror of /reduce-crm-licensing-costs: same
// honest three-lever framework (audit seats, right-size the Hub tier, move
// light users to a flat-fee portal), specialized to HubSpot's seat model and
// the view-only-seat gap (view-only can't log/edit, so light read+write users
// still burn a paid seat). No fabricated pricing: seat ranges are publicly
// listed list prices, labeled illustrative, with the calculator offered for
// real numbers. GEO-structured (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "How to Cut HubSpot Seat & License Costs | Ardn",
  description:
    "Three honest ways to reduce HubSpot seat costs: audit unused seats, right-size your Hub tier, or move light users to a flat-fee portal wired to HubSpot.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot license costs",
    "reduce HubSpot license costs",
    "HubSpot seat cost reduction",
    "HubSpot view-only seat alternative",
    "HubSpot paid vs free seats",
    "custom portal to reduce HubSpot seats",
    "HubSpot light user license",
    "flat-fee HubSpot portal",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "How to Cut HubSpot Seat & License Costs — Keep HubSpot | Ardn",
    description:
      "Reduce HubSpot seat costs without leaving HubSpot: audit unused seats, right-size the Hub tier, or move light users to a flat-fee portal wired to HubSpot.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut HubSpot seat and license costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cut HubSpot Seat & License Costs | Ardn",
    description:
      "Three honest ways to reduce HubSpot seat costs — audit, right-size, or move light users to a flat-fee custom portal wired to HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce HubSpot seat costs?",
    a: "Auditing paid seats. HubSpot bills per Core Seat, so the quickest win is pulling last-login and activity data, then removing paid seats from people who left, changed roles, or were assigned a seat 'just in case.' It changes nothing for active users and shows up on the very next invoice.",
  },
  {
    q: "Isn't a free HubSpot view-only seat enough for light users?",
    a: "Only for people who purely look. A view-only seat can see records but cannot log activity, update a property, move a deal stage, or submit a request. The expensive middle group is light users who still need to read AND write a narrow slice of HubSpot — occasional reps, ops staff, finance, partners. View-only can't serve them, so today they burn a full paid seat. A custom portal gives that group exactly the read/write they need at a flat fee.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever here keeps HubSpot as the system of record. A seat audit right-sizes your existing subscription; a custom portal sits alongside HubSpot and reads and writes the same records live through the HubSpot API. Your sales and marketing power users keep working in HubSpot exactly as they do today.",
  },
  {
    q: "How is this different from just downgrading to a lower Hub tier?",
    a: "Right-sizing the tier (Enterprise to Professional, for example) lowers the per-seat rate, which is worth doing — but it is still per-seat, so the bill still grows every time you add a person. A flat-fee portal is the only lever that breaks the link between cost and headcount entirely: it costs the same at 10 light users or 400.",
  },
  {
    q: "Does moving light users off HubSpot mean losing HubSpot data?",
    a: "No. The portal reads and writes the same HubSpot records in real time through the API, so HubSpot stays the single source of truth. Nothing forks into a second database that drifts out of sync.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Audit",
    title: "Remove paid seats nobody uses",
    body: "Pull last-login and activity data and flag anyone dormant, duplicated, or provisioned 'just in case.' HubSpot bills per Core Seat, so every removed seat is an immediate line-item saving.",
    best: "Best for: inactive, duplicate, or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match the Hub tier to real use",
    body: "Enterprise seats cost meaningfully more than Professional or Starter, and Enterprise features go unused by many assigned users. Move users down to the tier they actually need — cheaper per head, but still per head.",
    best: "Best for: users on a higher tier than their workflow requires.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "For users who need to read and write a narrow slice of HubSpot — more than a free view-only seat allows, less than a full seat is worth — give them a purpose-built portal wired into HubSpot on one flat fee, no matter how many you add.",
    best: "Best for: occasional reps, ops, finance, partners & customers.",
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
        headline: "How to Cut HubSpot Seat & License Costs Without Leaving HubSpot",
        name: "How to Cut HubSpot Seat & License Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
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
                  Cut your HubSpot bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills per Core Seat, so the cost climbs with every
                  person you add — and it piles up fastest on the light users
                  who touch HubSpot for a handful of tasks. A free view-only
                  seat can&apos;t help them, because they still need to log a
                  note, update a property, or move a deal. There are three
                  honest ways to cut that bill. Here&rsquo;s how to decide which
                  lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Sales, Service, Ops &amp; more</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Remove paid seats nobody uses</li>
                    <li>Right-size users to a cheaper Hub tier</li>
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
                <p className="lede">A paid HubSpot seat is priced for someone who runs sequences, reporting, and pipeline all day. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One paid seat, very different use</h3>
                <p className="body">A rep living in HubSpot and a colleague who updates one property a day usually cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Free view-only doesn&apos;t fit</h3>
                <p className="body">A view-only seat can look but not log, edit, or submit. Light users who still need to write a sliver of data fall through the gap — so they get billed a full paid seat.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or team that needs access adds another recurring Core Seat — permanently, unless something changes the pricing model itself.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot Sales Hub and Service Hub seats are commonly
              listed in the roughly $20–$150/user/month range depending on tier
              (Starter, Professional, Enterprise). A flat-fee portal costs the
              same at 10 light users or 400. (List prices shown for illustration
              only — confirm your own current rate, and{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your numbers.)
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
                  <tr><td className="feat">Inactive / left the company</td><td>Remove the paid seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Purely looks, never edits</td><td>Move to a free view-only seat</td><td className="is-yes">$0 — view-only</td></tr>
                  <tr><td className="feat">On a higher tier than they use</td><td>Right-size to a cheaper Hub tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — reads AND writes a slice</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the full paid seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the light-user row
              depend on how many you have and your negotiated seat rate — run the{" "}
              <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
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
                  your system of record on every option here. Your sales and
                  marketing power users keep working exactly as they do today.
                  All that changes is that the users who need less stop paying
                  for a tool built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Audit first</div>
                      <p className="fl-body">Dormant and duplicate paid seats are free money — remove them at your next billing cycle.</p>
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
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time via the API — no second database drifting out of sync.</p>
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
                <h2 className="h1 mt-3">The tools <em>behind the wedge.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Reduce CRM Licensing Costs</h3>
                <p className="body">The cross-CRM framework — the same three levers applied to Salesforce and any per-seat CRM.</p>
                <span className="link">See the full framework →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platform builds →</Link>
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
                <p className="lede">The fastest saving, view-only seats, migration risk, and cost.</p>
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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full cross-CRM cost-reduction framework →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
