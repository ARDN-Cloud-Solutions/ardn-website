import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";
import RelatedReading from "@/components/common/RelatedReading";

// WEDGE spoke: the transactional HubSpot-specific twin of the CRM-agnostic
// pillar /reduce-crm-licensing-costs. Fills a real content gap — ~20 HubSpot
// cost blog posts existed with NO commercial parent hub to funnel their
// (already page-1-ranking) traffic into a CTA/calculator. Targets the
// transactional "reduce/lower HubSpot seat/licensing cost" + "HubSpot per-seat
// alternative" queries; the existing how-to blog keeps the "how to cut HubSpot
// seat costs" query. Same honest wedge as the pillar: audit → right-size →
// move light users to a flat-fee portal, HubSpot stays the system of record.
// HubSpot pricing is publicly listed, labeled illustrative, verify-your-rate.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Cut HubSpot licensing costs without leaving HubSpot: audit paid seats, right-size hub tiers, or move light users to a flat-fee custom portal synced to HubSpot.",
  keywords: [
    "reduce HubSpot seat costs",
    "lower HubSpot licensing cost",
    "cut HubSpot seat costs",
    "HubSpot per-seat pricing alternative",
    "HubSpot light user portal",
    "HubSpot Sales Hub cost reduction",
    "HubSpot seat cost vs custom portal",
    "custom portal HubSpot integration",
    "reduce CRM licensing costs",
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
      "Three honest ways to cut HubSpot seat costs without a migration: audit paid seats, right-size hub tiers, or move light users to a flat-fee custom portal.",
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
    title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot seat costs without a migration — audit, right-size, or move light users to a flat-fee custom portal synced to HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I reduce HubSpot seat costs without losing functionality?",
    a: "Start by separating who actually needs a paid seat from who doesn't. HubSpot gives every user free View-Only and CRM access; the paid seat is only for people who run sales workflows — sequences, forecasting, advanced reporting. Staff who mainly view or update a record often don't need a paid seat at all. After that, right-size the hub tier to real feature usage, and for the group that touches HubSpot lightly, move them to a custom portal wired to HubSpot's API so cost stops scaling with headcount.",
  },
  {
    q: "How much does a HubSpot seat cost, and where does the money go?",
    a: "HubSpot paid seats are commonly listed in roughly the $20–$90+/user/month range depending on hub and tier (Starter, Professional, Enterprise) — confirm your own current rate, since HubSpot updates pricing periodically. The overpayment concentrates on light users: a full Professional or Enterprise seat is priced for someone who lives in the platform, but most orgs have far more people who touch it for a handful of tasks and get billed the same.",
  },
  {
    q: "Do I have to leave HubSpot to cut the bill?",
    a: "No. Every lever here keeps HubSpot as your system of record. A seat audit right-sizes your existing subscription; a custom portal sits alongside HubSpot and syncs through its API, so power users keep working in HubSpot exactly as they do today. Only the light users move — and only to a tool built for what they actually do.",
  },
  {
    q: "What is a HubSpot 'light user' and why do they cost the most per unit of value?",
    a: "A light user touches HubSpot for a narrow slice of work — checking a deal, updating a status, submitting a request — but gets billed the same paid seat as a power user who runs pipeline all day. Because per-seat pricing is built around the power user, the overpayment lands on everyone lighter than that, which in most companies is the majority of the paid seats.",
  },
  {
    q: "How does a custom portal work with HubSpot, and how much can it save?",
    a: "The portal reads and writes the same HubSpot records in real time through the API, so there's one source of truth — no second database drifting out of sync. Savings depend entirely on how many light users you have and what you pay per seat, so we won't quote a fixed number; the mechanism is simple: HubSpot seat fees recur and grow with headcount, while a flat-fee portal costs the same at 10 light users or 400. Our savings calculator lets you plug in your own numbers.",
  },
  {
    q: "How long does a HubSpot portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Audit",
    title: "Reclaim seats nobody needs",
    body: "Pull last-login data, flag dormant and duplicate accounts, and move view-or-update-only staff onto HubSpot's free View-Only / CRM access instead of a paid seat. Fastest, lowest-risk win.",
    best: "Best for: inactive seats and users who don't run sales workflows.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match the hub tier to real usage",
    body: "Enterprise seats cost meaningfully more than Professional or Starter, and Enterprise features often go unused. Right-size the tier to actual feature usage — cheaper per head, but still per head and still capped.",
    best: "Best for: paid users on a higher tier than they actually use.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of HubSpot a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount — the structural fix, not a discount.",
    best: "Best for: field staff, ops, partners & customers using HubSpot lightly.",
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
                  Cut your HubSpot bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s seat-based pricing is built around the power user,
                  so the cost piles up on everyone lighter than that — the ops
                  staff, field teams, partners, and customers who touch it for a
                  handful of tasks. There are three honest ways to cut that bill,
                  and only one of them requires building anything. Here&apos;s how
                  to decide which lever fits which problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Sales, Service &amp; Marketing Hub</span>
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
                    <li>Reclaim seats nobody needs</li>
                    <li>Right-size the hub tier to real usage</li>
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
                <p className="lede">A paid HubSpot seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who runs sequences and forecasting all day and a coordinator who updates one record twice a day usually cost the same paid seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring paid seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of HubSpot outnumber the power users — so the overpayment spreads across most of the paid-seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot paid seats are commonly listed in roughly the
              $20–$90+/user/month range depending on hub and tier, while View-Only
              and CRM access are free. A flat-fee portal costs the same at 10 light
              users or 400. (List prices shown for illustration only — confirm your
              own current rate and{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your negotiated numbers.)
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
                  <tr><td className="feat">View / update only, no workflows</td><td>Move to free View-Only / CRM access</td><td className="is-yes">$0 — no paid seat</td></tr>
                  <tr><td className="feat">Occasional, but needs paid features</td><td>Right-size to a lower hub tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — ops, field, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the portal row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see <Link href="/blog/hubspot-seat-cost-vs-custom-portal" className="link">HubSpot seat cost vs. a custom portal</Link>.
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
                  Cutting licensing cost and replacing your CRM are two different
                  decisions. HubSpot stays the system of record on every option
                  here. Your power users keep working exactly as they do today.
                  All that changes is that the users who need less stop paying for
                  a tool built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Audit first</div>
                      <p className="fl-body">Dormant paid seats and users who belong on free access are the fastest money back — no change for active users.</p>
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
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time through the API — no second database drifting out of sync.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section" id="next">
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
                <p className="body">Move light HubSpot users off paid seats onto a flat-fee portal wired to your HubSpot data.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Reduce CRM Licensing Costs</h3>
                <p className="body">The full decision framework for any CRM — Salesforce, HubSpot, and beyond.</p>
                <span className="link">See the CRM cost guide →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
            </div>
          </div>
        </section>

        <RelatedReading
          canvas
          heading="More on cutting HubSpot costs"
          sub="No-fluff guides from our team on where the HubSpot bill hides and how to cut it — hub by hub."
          posts={[
            { href: "/blog/cut-hubspot-seat-costs", label: "How to cut HubSpot Sales Hub seat costs" },
            { href: "/blog/hubspot-seat-cost-vs-custom-portal", label: "HubSpot seat cost vs. a custom portal" },
            { href: "/blog/hubspot-paid-vs-free-seats", label: "HubSpot paid vs. free seats: who needs which" },
            { href: "/blog/hubspot-service-hub-cost-reduction", label: "Reducing HubSpot Service Hub costs" },
            { href: "/blog/hubspot-enterprise-seat-cost-breakdown", label: "HubSpot Enterprise seat cost, broken down" },
            { href: "/blog/hubspot-vs-salesforce-tco-mid-market", label: "HubSpot vs. Salesforce TCO for mid-market" },
          ]}
        />

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">Paid vs. free seats, light users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us which HubSpot hubs you run and roughly how many paid seats. We'll come back with which levers cut your cost the most — and a fixed quote." />

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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>On a different CRM? See the full CRM cost guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
