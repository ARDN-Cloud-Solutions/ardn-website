import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// HubSpot-specific spoke off the CRM cost-reduction pillar
// (/reduce-crm-licensing-costs). Salesforce already has three dedicated cost
// pages (pillar, seat-cost compare, Experience Cloud compare); HubSpot had
// none — only a keyword mention and a blog post. This page targets the
// commercial-intent HubSpot cluster ("reduce HubSpot seat costs", "cut
// HubSpot Sales Hub costs", "HubSpot Core seat alternative", "HubSpot
// view-only seat limitation") with the same honest three-lever framing.
// HubSpot's own Core-vs-view-only seat model is the hook: view-only seats
// can't edit, so the moment a light user needs to update one field they need
// a full paid Core seat. No fabricated pricing — list prices are labeled
// illustrative and the calculator is offered for real numbers.
export const metadata: Metadata = {
  title: "How to Cut HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot seat costs without leaving HubSpot: reclaim unused Core seats, right-size tiers, or move light users to a flat-fee custom portal wired to your CRM.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot seat costs",
    "HubSpot Core seat alternative",
    "HubSpot view-only seat limitation",
    "cut HubSpot Sales Hub costs",
    "reduce HubSpot licensing costs",
    "HubSpot per-seat pricing too expensive",
    "HubSpot portal integration",
    "custom portal to reduce HubSpot seats",
    "light user HubSpot license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "How to Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Three honest ways to reduce HubSpot seat costs without a migration: reclaim unused Core seats, right-size tiers, or move light users to a flat-fee portal.",
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
    title: "How to Cut HubSpot Seat Costs | Ardn",
    description:
      "Three honest ways to reduce HubSpot seat costs — reclaim, right-size, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Why are HubSpot seats expensive for light users?",
    a: "Because HubSpot bills a paid Core seat per person who needs to create or edit records. HubSpot does offer free view-only and partner seats, but they are read-only — the moment a light user needs to update a deal stage, log an activity, or change one field, they need a full paid Core seat billed at the same rate as a power user. There is no cheap 'edit-a-little' tier, so the overpayment concentrates on everyone who touches HubSpot lightly.",
  },
  {
    q: "Do HubSpot's free view-only seats solve the problem?",
    a: "Only for people who genuinely never need to change anything. View-only seats can see records but cannot edit them, so they don't help the large middle group — sellers updating a status, ops staff editing a property, partners submitting a request — who need to write, not just read. Those users still require a paid Core seat under HubSpot's model.",
  },
  {
    q: "Can I reduce HubSpot seat costs without leaving HubSpot?",
    a: "Yes. Every lever here keeps HubSpot as your system of record. Reclaiming unused seats and right-sizing tiers happen inside your existing subscription. A custom portal sits alongside HubSpot and syncs both ways through the HubSpot API, so the CRM stays the single source of truth while light users work in the portal on a flat fee instead of a per-seat license.",
  },
  {
    q: "How does a custom portal cut HubSpot seat costs?",
    a: "It replaces the paid Core seat for light users entirely. Instead of buying a HubSpot seat for every seller, ops person, partner, or customer who needs a sliver of the CRM, you give them a purpose-built portal that reads and writes the exact HubSpot records they need — on one flat monthly fee that costs the same at 10 users or 400. The cost stops scaling with headcount.",
  },
  {
    q: "Will a portal stay in sync with HubSpot?",
    a: "Yes — it uses HubSpot's API to read and write the same objects (contacts, companies, deals, tickets, custom objects) in real time. There is no second database drifting out of sync; the portal is a lighter, purpose-built front door onto the HubSpot data you already own.",
  },
  {
    q: "How much can moving light users off HubSpot Core seats save?",
    a: "It depends entirely on how many light users you have and your negotiated per-seat rate, so we won't quote a fixed number. The mechanism is simple: paid seats recur and grow with headcount, while a flat-fee portal costs the same regardless of how many users you add. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a HubSpot portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim Core seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' paid seats are the fastest win because deactivating them changes nothing for active users. Audit seat activity and right-size at renewal.",
    best: "Best for: inactive or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match users to the right tier & seat type",
    body: "Move genuine read-only users to free view-only seats, and drop tiers (Enterprise → Professional) where no one uses the higher-tier features. Cheaper — but paid users are still per head.",
    best: "Best for: read-only users and over-provisioned tiers.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need to edit a sliver of HubSpot a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, ops, partners & customers editing HubSpot lightly.",
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
                  HubSpot bills a paid Core seat for anyone who needs to edit a
                  record — and the free view-only seats can&rsquo;t. So the cost
                  piles up on every seller, ops person, partner, and customer who
                  touches HubSpot for a handful of tasks. There are three honest
                  ways to cut that bill, and only one of them requires building
                  anything. Here&rsquo;s how to decide which lever fits which
                  problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Two-way API sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See how much you&rsquo;d save →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim Core seats nobody uses</li>
                    <li>Right-size tiers &amp; seat types</li>
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
                <h2 className="h1 mt-3">Why HubSpot Core seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&rsquo;s seat model is built around users who live in the CRM. Most of your seats don&rsquo;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">View-only can&rsquo;t edit</h3>
                <p className="body">Free view-only seats are read-only. The moment a light user needs to change one field, they need a full paid Core seat — priced the same as a power user.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs to edit records adds another recurring Core seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of HubSpot outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot paid Core seats list at roughly $90/seat/month on
              Sales or Service Hub Professional and higher on Enterprise, billed
              per editing user. A flat-fee portal costs the same at 10 light users
              or 400. (List prices shown for illustration only —{" "}
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
                <p className="lede">A quick way to route each HubSpot user to the right saving. Most companies use more than one lever at once.</p>
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the Core seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Genuinely read-only</td><td>Move to a free view-only seat</td><td className="is-yes">$0 — view-only</td></tr>
                  <tr><td className="feat">Light — needs to edit a sliver</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the full Core seat</td><td className="is-no">Full seat — and worth it</td></tr>
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
                <h2 className="h1 mt-3">This isn&rsquo;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
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
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant paid seats are free money — a quick seat-activity audit right-sizes your contract at renewal.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The Core seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
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

        {/* TESTIMONIAL — real, honest, non-fabricated (same quote used on the
            homepage and calculator). Speaks directly to the cost-saving angle. */}
        <section className="section">
          <div className="container">
            <div className="testimonial">
              <span className="eyebrow">What clients say</span>
              <p className="quote mt-4">Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.</p>
              <div className="attribution">
                <div className="avatar">JV</div>
                <div>
                  <div className="who">Jay Vashi</div>
                  <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
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
                <p className="body">The full decision framework across every CRM — Salesforce, HubSpot &amp; more.</p>
                <span className="link">Read the pillar guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid HubSpot seats onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
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
                <p className="lede">Core vs view-only seats, staying on HubSpot, portal sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how your users actually use it. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use HubSpot, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
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
