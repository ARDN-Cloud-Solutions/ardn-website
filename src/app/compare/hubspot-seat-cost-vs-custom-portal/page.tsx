import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: consolidates existing blog authority (cut-hubspot-seat-costs,
// hubspot-seat-cost-vs-custom-portal, hubspot-paid-vs-free-seats) into a
// rankable MONEY page for the "reduce HubSpot seat costs" cluster — the
// biggest uncaptured commercial cluster in the wedge. Mirrors the Salesforce
// seat-cost comparison. The honest HubSpot-specific wedge: view-only seats are
// free but can't WRITE, so any light user who needs to update a record still
// costs a paid Core seat — a custom portal writes to HubSpot via API on one
// flat fee. No fabricated pricing: figures are publicly listed list ranges,
// labeled illustrative, with /savings-calculator for the reader's own numbers.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "HubSpot view-only seats can't edit — light users who update records still cost a paid Core seat. See the math for a flat-fee custom portal instead.",
  keywords: [
    "reduce HubSpot seat costs",
    "HubSpot seat cost alternative",
    "cut HubSpot licensing costs",
    "HubSpot Core seat vs view-only seat",
    "HubSpot custom portal integration",
    "reduce per-seat license costs",
    "custom portal to reduce CRM seats",
    "HubSpot light user alternative",
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
    title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
    description:
      "View-only HubSpot seats can't write. Light users who update records still need a paid Core seat. See the cost math for a flat-fee custom portal — keep HubSpot.",
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
    title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Light HubSpot users who need to update records still cost a paid Core seat. See the math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No. Your HubSpot portal stays exactly where it is, as the system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a paid Core seat. This is the opposite of a HubSpot alternative that asks you to migrate your CRM — you keep HubSpot and everything in it.",
  },
  {
    q: "Aren't HubSpot's view-only seats already free?",
    a: "Yes — but only for viewing. Free view-only seats can look at records, dashboards, and reports, but they can't create or edit anything. The moment a light user needs to update a deal stage, log an activity, change a status, or submit a request, they need a paid Core seat. That write-access line is exactly where the seat bill starts climbing for users who otherwise barely touch the platform.",
  },
  {
    q: "What counts as a 'light user' in HubSpot?",
    a: "Anyone who needs to do a narrow slice of work in the CRM — update one field, move a deal, log a note, submit or approve a request — but doesn't run pipeline, build reports, or need the full Sales, Marketing, or Service Hub. Field staff, ops, partners, and customers are the most common examples. On a per-seat model they're billed like power users; a custom portal gives them just their slice.",
  },
  {
    q: "How does a custom portal write to HubSpot without a Core seat?",
    a: "The portal authenticates to HubSpot as an integration through its API, not as a per-user seat. Your light users log in to the portal, and their edits read and write the same HubSpot records in real time under that integration. There's one source of truth — the portal is a tailored front end onto your HubSpot data, not a separate database that drifts out of sync.",
  },
  {
    q: "How is this different from a HubSpot alternative or a migration?",
    a: "A HubSpot alternative replaces your CRM — new platform, data migration, retraining, and usually its own per-seat bill. A custom portal changes nothing about HubSpot; it just removes the need to buy full seats for users who need less. Your power users keep working in HubSpot exactly as they do today.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Free seats can view, but can't write",
    body: "HubSpot's free view-only seats look great until a light user needs to edit. Updating a deal, logging an activity, or changing a status all require a paid Core seat — so 'view-only is free' rarely covers the people who actually do work.",
  },
  {
    title: "Core seats are billed per person",
    body: "Every user who needs write access takes a paid seat, priced per head and per Hub. A user who updates one field a day costs the same as a rep who lives in the platform.",
  },
  {
    title: "External users shouldn't be internal seats",
    body: "Partners, vendors, and customers who need to submit or update something often end up on paid seats by default, simply because nothing else was built for them.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new hire, partner, or customer segment that needs write access adds another recurring seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time via API — no second database, just a better front end for the users who need less.",
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
          { "@type": "Thing", name: "HubSpot seat cost reduction" },
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
                  Keep HubSpot. <em>Stop paying seats for light users.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&rsquo;s free view-only seats can look but not touch. The
                  moment a light user needs to update a deal, log an activity, or
                  change a status, they need a paid Core seat. A custom portal
                  gives those users exactly what they need &mdash; writing back to
                  HubSpot in real time through its API &mdash; on one flat fee
                  instead of a paid seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way HubSpot API sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
                <p style={{ fontSize: "13px", color: "#475467", marginTop: "14px", fontWeight: 500 }}>
                  Free build for new customers &middot; fixed quote in 48 hrs &middot; no obligation
                </p>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The write-access trap</div>
                  <p className="body mt-3">
                    &ldquo;View-only is free&rdquo; sounds like it covers your light
                    users &mdash; until they need to edit. Every user who updates a
                    record needs a paid Core seat, and those seats scale with
                    headcount. A flat-fee custom portal for those same users costs
                    the same whether there are 10 of them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote &mdash; actual seat pricing
                    varies by Hub, edition, and negotiated rate. Use the free
                    calculator to run your own.
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
                <h2 className="h1 mt-3">Why HubSpot seats <em>add up for light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot pricing is built around users who need to write. Everyone who only needs a slice of that is where the overpayment concentrates.</p>
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
                <h2 className="h1 mt-3">View-only, Core seat, <em>or a flat-fee portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&rsquo;s free view-only seat helps &mdash; but only until a user needs to edit. Here&rsquo;s how the tiers typically compare to a flat-fee custom portal.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access tier</th>
                    <th>Can write / edit records?</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Free view-only seat</td><td className="is-no">No — view only</td><td className="is-yes">Free, but can&apos;t do the work</td></tr>
                  <tr><td className="feat">Sales/Service Hub Core seat (Starter)</td><td className="is-yes">Yes</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales/Service Hub Core seat (Pro+)</td><td className="is-yes">Yes</td><td className="is-no">Yes — per user, higher rate</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — writes via HubSpot API</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              HubSpot&rsquo;s seat model and pricing vary by Hub, edition, and negotiated contract &mdash; confirm current numbers with HubSpot. The point isn&rsquo;t a specific price: it&rsquo;s that write access is what triggers a paid seat, and a custom portal gives light users write access to your HubSpot data without one.
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not a HubSpot replacement.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice falls into two camps: downgrade a Hub
                  and lose features, or migrate to a cheaper CRM and lose HubSpot.
                  Neither helps the users who only need to update the odd record.
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
                      <div className="fl-head !text-black">Move genuine view-only users to free seats</div>
                      <p className="fl-body">If a user truly only needs to look, HubSpot&apos;s free view-only seat already covers them &mdash; start there.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut Core seats bought just for write access</div>
                      <p className="fl-body">The users who need to edit a slice of the CRM &mdash; but not the whole platform &mdash; are where a custom portal cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your power users are outgrowing HubSpot, that&apos;s a different conversation &mdash; this page is about the seats that don&apos;t need to be full seats at all.</p>
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
                <span className="eyebrow">Where this shows up</span>
                <h2 className="h1 mt-3">Common places <em>the seat count adds up.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to HubSpot, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework: reclaim, right-size, or move light users to a portal.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current seat spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the Salesforce seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown across every SaaS tool →</Link>
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
                <p className="lede">View-only vs. Core seats, write access, API sync, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers submitLabel="Email me my savings breakdown" sub="Tell us roughly how many light users you have on paid HubSpot seats. We'll come back with where a portal cuts the bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full seats for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your light users actually use HubSpot, show where a portal cuts the bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
