import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge spoke for the HubSpot half of the per-seat cost-reduction wedge. The
// Salesforce side is well-covered (/reduce-crm-licensing-costs pillar +
// /compare/salesforce-seat-cost-vs-custom-portal), and the blog already ranks
// for "cut HubSpot seat costs" — but there was no app-level landing page to
// convert HubSpot buyers, who search "HubSpot," not "CRM." This page fills that
// gap: same honest framing (keep HubSpot as system of record, move light users
// to a flat-fee portal), HubSpot-specific tier math labeled illustrative (not a
// quote), and FAQ built from real People-Also-Ask questions. No fabricated
// pricing or client results.
export const metadata: Metadata = {
  title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Reduce HubSpot Sales & Service Hub seat costs without leaving HubSpot: reclaim seats, use free view-only seats, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot Sales Hub seat cost",
    "HubSpot per-seat pricing",
    "HubSpot seat cost reduction",
    "HubSpot view-only seats",
    "custom portal to reduce HubSpot seats",
    "HubSpot alternative for light users",
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
    title: "Cut HubSpot Seat Costs Without Leaving HubSpot | Ardn",
    description:
      "Three honest ways to reduce HubSpot seat costs — reclaim unused seats, use free view-only seats, or move light users to a flat-fee custom portal wired into HubSpot.",
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
      "Reduce HubSpot seat costs without a migration — reclaim seats, use free view-only seats, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do I have to leave HubSpot to cut my seat costs?",
    a: "No. Every lever on this page keeps HubSpot as your system of record. Your power users — the marketers and reps who live in the platform — keep their paid seats and everything in them. What changes is that the light users who touch HubSpot for a narrow slice of work stop needing a full paid seat. A custom portal sits alongside HubSpot, syncs through its API, and gives those users a focused tool instead.",
  },
  {
    q: "Are HubSpot view-only (free) seats a real way to save?",
    a: "Partly. On a paid HubSpot portal you get unlimited free seats for people who only need to view records, dashboards, and reports — so anyone who is genuinely read-only should already be on a free seat, not a paid one. The catch is that free seats can't edit records, run sequences, or use most paid tools. The moment a light user needs to update a status, submit a request, or write anything back, HubSpot pushes them to a paid seat. That write-but-lightly group is exactly where a custom portal saves the most.",
  },
  {
    q: "How many paid HubSpot seats do we actually need?",
    a: "Almost always fewer than you're paying for. Per-seat pricing is built around the power user who works in HubSpot all day, but most companies have far more light users — sellers checking a record, ops staff updating a field, partners submitting a request — who don't need the full platform. Audit who actually uses which paid features, move true read-only users to free view-only seats, and move the write-but-lightly users to a portal. What's left is your real paid-seat count.",
  },
  {
    q: "How is a custom portal different from a cheaper HubSpot seat tier?",
    a: "A cheaper tier is still a per-seat license — it lowers the price per head but keeps the cost tied to headcount and caps what that user can do. A custom portal breaks the link entirely: it runs on one flat monthly fee no matter how many users you add, and it's shaped to your exact workflow instead of a stripped-down view of HubSpot. Your data still lives in HubSpot; the portal reads and writes it in real time.",
  },
  {
    q: "How much can moving light users off HubSpot seats actually save?",
    a: "It depends entirely on how many light users you have and what you pay per seat, so we won't quote a fixed number here. The mechanism is simple: HubSpot seat fees recur and grow with headcount, while a flat-fee portal costs the same at 20 users or 200. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "Does the portal stay in sync with HubSpot?",
    a: "Yes — it integrates two-way through the HubSpot API, so the portal reads and writes the same contacts, deals, and records in real time. There is one source of truth. The portal is a tailored window into your HubSpot data, not a second database that drifts out of sync.",
  },
  {
    q: "How long does it take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const costDrivers = [
  {
    title: "Paid seats are priced for power users",
    body: "HubSpot Sales and Service Hub bill per paid seat, tuned to the rep or marketer who lives in the platform. A seller who checks one record a day usually costs the same as one who runs pipeline all day.",
  },
  {
    title: "Free seats stop at read-only",
    body: "Unlimited free view-only seats are great for truly read-only staff — but the moment someone needs to edit a record, run a sequence, or use a paid tool, HubSpot moves them to a paid seat.",
  },
  {
    title: "The bill grows with every hire",
    body: "Each new rep, ops hire, partner, or customer-facing team member who needs to write to HubSpot adds another recurring paid seat — permanently, unless something changes the model.",
  },
  {
    title: "Light users are the majority",
    body: "In most mid-market orgs the people who touch HubSpot lightly outnumber the power users — so the overpayment is spread across most of your paid seat count, not a corner of it.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal wired into HubSpot costs the same whether 20 light users are on it or 200. Growth stops being a licensing event.",
  },
  {
    title: "HubSpot stays your source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — no second database, no migration, no retraining your power users. Just a better front end for the users who need less.",
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
                  Cut your HubSpot seat bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills per paid seat, priced for the power users who live
                  in the platform. But most of your seats aren&apos;t power users —
                  they&apos;re sellers, ops staff, partners, and customers who touch
                  it for a handful of tasks. We build custom portals that give those
                  light users exactly what they need, wired into HubSpot in real
                  time, on one flat fee instead of a paid seat each. HubSpot stays
                  your source of truth. You just stop overpaying to run it.
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
                  <div className="kicker">Three ways to cut it</div>
                  <ul className="features mt-3">
                    <li>Reclaim seats nobody uses</li>
                    <li>Move read-only staff to free view-only seats</li>
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
                <h2 className="h1 mt-3">Why HubSpot per-seat pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A paid HubSpot seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              {costDrivers.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HUBSPOT TIER TABLE */}
        <section className="section is-canvas" id="tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seats vs. a flat-fee portal</span>
                <h2 className="h1 mt-3">Free seat, paid seat, <em>or a portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already gives you free view-only seats. Here&apos;s where each option fits — and where a flat-fee custom portal picks up the users the others can&apos;t.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access option</th>
                    <th>Typical published price</th>
                    <th>Still scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">HubSpot free view-only seat</td><td>$0 (read-only)</td><td className="is-yes">No — but can&apos;t edit or write</td></tr>
                  <tr><td className="feat">HubSpot Sales/Service Hub paid seat</td><td>~$20–$90+/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">HubSpot Enterprise paid seat</td><td>~$75–$150/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual HubSpot pricing varies by Hub, tier, and negotiated contract; confirm current numbers with HubSpot. Move truly read-only users to free seats first, then use a portal for the write-but-lightly users a free seat can&apos;t cover.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> for your own numbers.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions. HubSpot stays the system of record here. Your marketers
                  and reps keep working exactly as they do today. All that changes is
                  that the users who need less stop paying for a tool built for
                  someone who needs everything — and the savings compound every month
                  the seat count would otherwise have grown.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim &amp; right-size first</div>
                      <p className="fl-body">Deactivate unused seats and move read-only staff to free view-only seats — the fastest, zero-risk wins.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The write-but-lightly users are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
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
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind the savings.</em></h2>
              </div>
            </div>
            <div className="grid-3">
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
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">The Full CRM Playbook</h3>
                <p className="body">The complete framework for cutting per-seat CRM costs — Salesforce, HubSpot &amp; more.</p>
                <span className="link">Read the playbook →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce too? See the seat-cost math →</Link>
              <Link href="/custom-partner-portal-development" className="link">Cut partner &amp; channel seat costs →</Link>
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
                <p className="lede">Free vs paid seats, migration risk, sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what your HubSpot seats are costing" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts your bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full price for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where a portal cuts the paid-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full CRM cost-reduction playbook →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
