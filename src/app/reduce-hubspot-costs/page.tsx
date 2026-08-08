import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page: HubSpot-specific cost reduction. The site already owns the
// CRM-generic pillar (/reduce-crm-licensing-costs) and the Salesforce-flavored
// seat-cost math (/compare/salesforce-seat-cost-vs-custom-portal), plus 8+
// HubSpot blog posts — but had NO HubSpot landing page. HubSpot buyers search
// HubSpot-specific terms ("reduce HubSpot costs", "cut HubSpot seat costs",
// "HubSpot too expensive"), so the generic CRM page won't rank or convert them.
// Same wedge — "keep HubSpot, cut the bill" — applied to HubSpot's per-seat Sales
// & Service Hub pricing. No fabricated pricing: seat ranges are publicly listed
// list prices, explicitly labeled illustrative, and the calculator is offered for
// real numbers. Includes the free view-only-seat objection head-on (HubSpot's #1
// rebuttal) and GEO-structured FAQ + FAQPage schema.
export const metadata: Metadata = {
  title: "How to Cut HubSpot Costs — Keep HubSpot | Ardn",
  description:
    "Cut HubSpot seat costs without leaving HubSpot: move light users off paid Sales & Service Hub seats onto a flat-fee custom portal wired live to your HubSpot.",
  keywords: [
    "reduce HubSpot costs",
    "cut HubSpot seat costs",
    "HubSpot too expensive",
    "HubSpot cost reduction",
    "reduce HubSpot license cost",
    "HubSpot seat cost vs custom portal",
    "custom portal to reduce HubSpot seats",
    "HubSpot Sales Hub cost",
    "HubSpot light user alternative",
    "flat-fee HubSpot portal",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-costs",
    },
  },
  openGraph: {
    title: "How to Cut HubSpot Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off paid HubSpot Sales & Service Hub seats onto a flat-fee custom portal wired to your HubSpot — cut the bill without switching CRMs.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut HubSpot costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cut HubSpot Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off paid HubSpot seats onto a flat-fee custom portal wired to your HubSpot — cut the bill without switching.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do we cut HubSpot costs without leaving HubSpot?",
    a: "HubSpot bills a paid seat for every user who needs to work in Sales Hub or Service Hub — even people who only update a deal stage, check a record, or handle the odd ticket. We build a custom portal that gives those light users exactly the slice they need, wired live to HubSpot through its API, on one flat fee instead of a paid seat each. Your HubSpot stays the system of record; you simply stop buying full seats for users who barely use one.",
  },
  {
    q: "Doesn't HubSpot already offer free seats — why pay for a portal?",
    a: "HubSpot's free 'view-only' and 'partner' seats are genuinely useful, but they are limited by design: view-only users can look at records but can't reliably update them, run branded self-service workflows, or transact the way a purpose-built tool lets them. A custom portal lets a light user actually do their job — submit a request, update a status, self-serve — which a free view-only seat can't, without consuming a paid Sales or Service seat. Use the free seats where they fit; use a portal where users need to transact but don't need a full seat.",
  },
  {
    q: "Is a third-party portal reading and writing HubSpot allowed?",
    a: "Yes. The portal is a standard API integration — the same supported mechanism HubSpot's own app marketplace is built on. It authenticates to your HubSpot, reads and writes the records you permit, and respects the permissions you already define. HubSpot stays your system of record; the portal is simply a tailored front end for the users who need less of it.",
  },
  {
    q: "Which HubSpot users are usually the cheapest to move to a portal?",
    a: "The light users — anyone who touches HubSpot for a narrow slice of work but doesn't live in it. Sales reps who only update deal stages, service agents handling a fixed queue, operations staff updating records, and external partners or customers who shouldn't be on internal seats at all. Because HubSpot pricing is built around the power user, these lighter users are exactly where a paid seat overpays the most.",
  },
  {
    q: "How does data stay in sync between the portal and HubSpot?",
    a: "The portal integrates two-way with HubSpot through its API, reading and writing the same records in real time. There is one source of truth — the portal is a tailored window into your HubSpot data, not a second copy that drifts out of sync.",
  },
  {
    q: "How much can we actually save, and what does a portal cost?",
    a: "It depends on how many light users you have and what you pay per seat, so we won't quote a fixed number here — the savings calculator lets you run your own. The mechanism is simple: HubSpot seats recur and grow with headcount, while a flat-fee portal costs the same at 10 users or 400. Portals go live in 2–6 weeks via our AI Forge Framework on one flat monthly subscription, and new customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Step 1 — Audit",
    title: "Find seats nobody really uses",
    body: "Start with the paid Sales and Service Hub seats assigned to people who log in rarely or barely touch them. Reassigning or removing those at renewal is the fastest, lowest-risk win.",
  },
  {
    tag: "Step 2 — Right-size",
    title: "Move fits to free or lower tiers",
    body: "Some users fit HubSpot's free view-only seats or a lower Hub tier. Useful — but still capped in what they can do, and paid tiers still bill per head as you grow.",
  },
  {
    tag: "Step 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "For users who need to transact but not the full Hub, a custom portal wired into HubSpot gives them exactly what they need on one flat fee — cost stops scaling with headcount.",
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
        headline: "How to Cut HubSpot Costs Without Leaving HubSpot",
        name: "How to Cut HubSpot Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot cost reduction" },
          { "@type": "Thing", name: "HubSpot per-seat pricing" },
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
          { "@type": "ListItem", position: 2, name: "Cut HubSpot Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot bill — <em>keep HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot prices Sales &amp; Service Hub per seat, so the bill piles
                  up on everyone lighter than a power user — reps who only update a
                  deal stage, agents working a fixed queue, ops staff, partners and
                  customers. We build a custom portal that gives those light users
                  exactly what they need, wired live to your HubSpot, on one flat
                  fee instead of a paid seat each. Nothing gets migrated. You keep
                  HubSpot — and stop overpaying to run it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The HubSpot cost play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way HubSpot API sync, one source of truth</li>
                    <li>Sales, service, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
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
                <p className="lede">A paid Hub seat is priced for someone who lives in HubSpot all day. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One seat price for very different use</h3>
                <p className="body">A rep who runs pipeline all day and a colleague who updates one deal stage a week usually cost the same paid seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, agent, partner, or customer segment that needs access adds another recurring seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most growing companies, the people who need a sliver of HubSpot outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LICENSE TIER / SEAT MATH */}
        <section className="section is-canvas" id="seat-math">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seats vs. a flat-fee portal</span>
                <h2 className="h1 mt-3">Paid seat, free view-only seat, <em>or a portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already offers tiers below a paid seat. Here&apos;s how they typically compare to a flat-fee custom portal for a user who needs to transact.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access type</th>
                    <th>Typical published price</th>
                    <th>Light user can transact?</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Paid Sales / Service Hub seat</td><td>~$90–$150/seat/mo (list)</td><td className="is-yes">Yes</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Free view-only seat</td><td>$0</td><td className="is-no">No — read-only</td><td className="is-yes">No, but limited</td></tr>
                  <tr><td className="feat">Lower Hub tier (e.g. Starter)</td><td>~$15–$20/seat/mo (list)</td><td className="is-yes">Partly, capped</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — built to the task</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual HubSpot pricing varies by Hub, tier, seat type, and negotiated contract; confirm current numbers with HubSpot. The point isn&apos;t the exact figure — it&apos;s that every paid tier still bills per person, while a portal costs the same whether 10 light users are on it or 400.{" "}
              <Link href="/savings-calculator" className="link">Run your own HubSpot numbers →</Link>
            </p>
          </div>
        </section>

        {/* THREE STEPS */}
        <section className="section" id="steps">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How to cut the bill</span>
                <h2 className="h1 mt-3">Three steps, <em>in order.</em></h2>
              </div>
              <div>
                <p className="lede">Work cheapest-first: clean up unused seats, right-size what fits a lower tier, then move the light users who need to transact onto a flat-fee portal.</p>
              </div>
            </div>
            <div className="grid-3">
              {levers.map((l, i) => (
                <div className="card" key={l.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <span className="eyebrow" style={{ fontSize: "12px" }}>{l.tag}</span>
                  <h3 className="h3 mt-2">{l.title}</h3>
                  <p className="body">{l.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">See how a custom portal replaces HubSpot seats →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">The full CRM cost-reduction playbook →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the seat-cost math (Salesforce &amp; HubSpot) →</Link>
            </div>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep HubSpot. Cut the cost.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  We&apos;re not here to pull you off HubSpot. It stays the system of
                  record for your marketing, pipeline, and service. We just stop you
                  paying full seat prices for users who need a fraction of it — by
                  giving them a purpose-built portal that talks to HubSpot in real
                  time. You get the savings and a better tool for those users,
                  without the risk of a migration.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it via the HubSpot API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down Hub view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-seat fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your needs evolve.</p>
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
                <p className="lede">Free seats, API access, which users to move, sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Costs page" heading="See what you could save on HubSpot" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts your bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full seats <em>for light HubSpot use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where a portal cuts the seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>On Salesforce too? See the full CRM cost-reduction playbook →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
