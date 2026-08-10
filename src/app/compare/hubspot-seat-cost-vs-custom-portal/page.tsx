import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a validated content gap — ARDN ranks a HubSpot cost blog
// (/blog/cut-hubspot-seat-costs) but had no conversion spoke for the
// "reduce HubSpot seat cost" wedge. Mirrors the Salesforce seat-cost compare
// page for the HubSpot-flavored buyer: HubSpot's 2024 seat model splits Core
// (paid, full edit) vs View-Only (free, can't edit), so teams overpay for
// Core seats just so light users can log a note. A custom portal synced to
// HubSpot's API carries those light users on one flat fee. No fabricated
// pricing: HubSpot figures are labeled typical published ranges, not a quote,
// and the reader is pointed to /savings-calculator for their own numbers.
export const metadata: Metadata = {
  title: "HubSpot Seat Cost vs. a Custom Portal | Ardn",
  description:
    "Paying full HubSpot Core seats for light users who barely edit records? See the cost math for a flat-fee custom portal instead — keep HubSpot, cut the bill.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot Core seat vs View-Only seat",
    "HubSpot seat cost reduction",
    "move light users off HubSpot",
    "custom portal to reduce HubSpot seats",
    "reduce per-seat license costs",
    "HubSpot pricing 2026 reduce cost",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
      "x-default":
        "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    },
  },
  openGraph: {
    title: "HubSpot Seat Cost vs. a Custom Portal | Ardn",
    description:
      "Paying full HubSpot Core seats for light users who barely edit records? See the cost math for a flat-fee custom portal — keep HubSpot, cut the bill.",
    url: "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "HubSpot seat costs vs. a custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HubSpot Seat Cost vs. a Custom Portal | Ardn",
    description:
      "Full HubSpot Core seats for light users get expensive fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to cut our seat costs?",
    a: "No. Your HubSpot stays exactly where it is, as the system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a full paid Core seat. This is the opposite of a migration — nothing moves off HubSpot.",
  },
  {
    q: "What's the difference between a HubSpot Core seat and a View-Only seat?",
    a: "Since HubSpot's move to seat-based pricing, paid Core seats are the ones that can edit records, run workflows, and use the paid Hub tools; View-Only seats are free but, as the name says, can only look. The trap is the middle group: people who need to do a little more than view — log a note, update a status, submit a request — but nowhere near a full Core seat. Teams often buy them Core seats just for that sliver of edit access, which is exactly where the overpayment sits.",
  },
  {
    q: "Which HubSpot users can move to a portal instead of a paid seat?",
    a: "Anyone who touches HubSpot for a narrow slice of work — checking a deal, updating a status, approving a request, submitting a ticket — but doesn't build reports, run pipeline, or need the full Hub. Field sellers, ops staff, partners, and customers are the most common examples, and they're usually the users a full Core seat overpays for the most.",
  },
  {
    q: "Isn't a free View-Only seat already the cheap option?",
    a: "For pure viewers, yes — and you should use View-Only seats wherever they fit. But View-Only can't edit, so the moment a light user needs to write anything back to HubSpot, the default answer is a paid Core seat. A custom portal closes that gap: it gives light users a focused screen that reads and writes the exact HubSpot records they need, without a Core seat each.",
  },
  {
    q: "How is this different from just downgrading our HubSpot tier?",
    a: "Downgrading a Hub tier (Enterprise to Professional, say) lowers the price of a seat but keeps the per-seat model — the bill still grows with every person you add. A custom portal breaks the link to headcount entirely: it costs the same flat fee whether 10 light users are on it or 400. The two combine well — right-size your tiers first, then move the remaining light users to a portal.",
  },
  {
    q: "Does the portal stay in sync with HubSpot in real time?",
    a: "Yes. It reads and writes the same HubSpot records through the API, so HubSpot stays the single source of truth and portal users work against live data — there's no second database drifting out of sync, just a better front end for the users who need less.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Core seats get billed for a sliver of edit access",
    body: "HubSpot's paid Core seat is priced for people who work the platform. A user who just needs to log a note or flip a status pays the same seat as someone who lives in the CRM all day.",
  },
  {
    title: "View-Only is free — but can't write anything back",
    body: "The free View-Only seat covers pure viewers, but the moment a light user needs to edit even one field, the default is a full Core seat. That cliff is where the bill jumps.",
  },
  {
    title: "External users rarely fit either seat cleanly",
    body: "Partners, vendors, and customers end up on paid seats by default simply because nothing else was built for them — even though they need a fraction of HubSpot.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new hire, partner, or customer segment that needs to write to HubSpot adds another recurring Core seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growing your team or partner network stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — HubSpot stays the system of record, the portal is just a leaner front end for the users who need less.",
  },
];

export default function HubspotSeatCostVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "HubSpot Seat Costs vs. a Custom Portal",
        name: "HubSpot Seat Costs vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
          { "@type": "Thing", name: "CRM per-seat pricing" },
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
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://ardncloudsolutions.com/compare" },
          { "@type": "ListItem", position: 3, name: "HubSpot Seat Cost vs. Custom Portal", item: url },
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
                <span className="eyebrow">HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Keep HubSpot. <em>Cut the Core seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s paid Core seats are built for the people who work
                  the platform all day. Sellers, ops staff, partners, and
                  customers who just need to log a note or update a status get
                  billed for a full seat anyway — because a free View-Only seat
                  can&apos;t write anything back. A custom portal gives those
                  light users exactly what they need, wired into HubSpot in real
                  time, on one flat fee instead of a Core seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way HubSpot API sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href="/savings-calculator" className="btn btn-primary btn-lg btn-arrow">See how much you&rsquo;d save</Link>
                  <Link href={CALENDLY} target="_blank" className="btn btn-secondary btn-lg">Book a free 30-min call</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 40 light users on paid HubSpot Core seats at a
                    typical Professional rate runs into five or six figures a
                    year — and grows every time headcount does. A flat-fee custom
                    portal for those same 40 users costs the same whether there
                    are 10 of them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — actual seat pricing
                    varies by Hub, tier, and contract. Use the free calculator to
                    run your own numbers.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* COST DRIVERS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the bill comes from</span>
                <h2 className="h1 mt-3">Why HubSpot seats <em>hit light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s seat model is built around the full Core user. Everyone lighter than that — but who still needs to edit — is where the overpayment concentrates.</p>
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

        {/* SEAT TIER BREAKDOWN */}
        <section className="section is-canvas" id="seat-tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seat types</span>
                <h2 className="h1 mt-3">Core seat, View-Only seat, <em>or a flat-fee portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already splits paid and free seats. Here&apos;s how they typically compare to a flat-fee custom portal for your light users.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Seat type</th>
                    <th>Can edit records?</th>
                    <th>Typical published price</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sales/Service Hub Enterprise Core seat</td><td className="is-yes">Yes — full access</td><td>~$150/seat/mo (list)</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Sales/Service Hub Professional Core seat</td><td className="is-yes">Yes — full access</td><td>~$90–$100/seat/mo (list)</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Starter Core seat</td><td className="is-yes">Yes — limited tools</td><td>~$15–$20/seat/mo (list)</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">View-Only seat</td><td className="is-no">No — read-only</td><td>Free</td><td className="is-no">n/a — can&apos;t write back</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td className="is-yes">Yes — the exact fields they need</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual HubSpot pricing varies by Hub, tier, region, and negotiated contract; confirm current numbers with HubSpot. The gap a custom portal closes is the one between free View-Only (can&apos;t edit) and a full paid Core seat (far more than a light user needs).
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not a downgrade.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice falls into one of two camps: downgrade
                  your Hub tier, or move off HubSpot entirely. Both have a place —
                  but neither addresses seats that are being used, just lightly.
                  A custom portal is the option for that middle group: it
                  doesn&apos;t touch your HubSpot contract or your data, it just
                  gives the users who need less a tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Move pure viewers to free View-Only seats</div>
                      <p className="fl-body">Anyone who only needs to look should be on a free seat already — that&apos;s the easiest win before you build anything.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut Core seats used only for light edits</div>
                      <p className="fl-body">The users who need to write a little but nowhere near a full seat are where a custom portal cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your power users are outgrowing HubSpot, that&apos;s a different conversation — this page is about seats that don&apos;t need to be full Core seats at all.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER — where this shows up */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Keep going</span>
                <h2 className="h1 mt-3">Where the seat count <em>adds up.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to HubSpot, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full guide to the three ways to cut CRM cost — for HubSpot, Salesforce, and beyond.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current tool spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown across every SaaS tool →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">Core vs View-Only seats, migration risk, light users, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us roughly how many HubSpot users you have and how they use it. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying Core price for light users.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your light users actually use HubSpot, show where a portal cuts the bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Read the full guide to cutting CRM licensing costs →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
