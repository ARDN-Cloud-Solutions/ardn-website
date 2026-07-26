import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a validated content gap. Ranking content for "reduce HubSpot seat
// costs" / "HubSpot too expensive" is dominated by (a) HubSpot's own pricing
// pages and (b) "HubSpot alternative" listicles that make you switch CRMs.
// Nobody offers the third option: keep HubSpot, move light/view-only users to
// a flat-fee custom portal that lets them ACT (not just view). Mirrors the
// Salesforce seat-cost page. No fabricated vendor pricing — the seat figures
// are labeled illustrative, publicly listed ranges, and point to
// /savings-calculator for a reader's own numbers.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "Paying for HubSpot seats light users barely touch? See the cost math for moving them to a flat-fee custom portal instead — no CRM switch, keep HubSpot.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot seat cost",
    "HubSpot too expensive",
    "HubSpot pricing per seat",
    "HubSpot view-only seat alternative",
    "custom portal to reduce HubSpot seats",
    "reduce per-seat license costs",
    "light user CRM alternative",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
      "x-default": "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    },
  },
  openGraph: {
    title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Paying for HubSpot seats light users barely touch? See the cost math for moving them to a flat-fee custom portal — no CRM switch, keep HubSpot.",
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
      "Paying for HubSpot seats light users barely touch? See the flat-fee custom portal cost math — keep HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to cut seat costs?",
    a: "No. Your HubSpot portal stays exactly where it is, as the system of record for marketing and sales. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a paid seat. Nothing gets migrated and your closers keep working in HubSpot exactly as they do today.",
  },
  {
    q: "Aren't HubSpot's free view-only seats already the answer for light users?",
    a: "Only if those users never need to do anything. Free and view-only seats let someone look at records, but the moment a light user needs to update a status, submit a request, log an interaction, or trigger a workflow, they need a paid seat. A custom portal lets that user perform their narrow task — and write it straight back to HubSpot — without a paid seat at all.",
  },
  {
    q: "What counts as a 'light user' on HubSpot?",
    a: "Anyone who touches HubSpot for a thin slice of work — checking a deal, updating an order, approving a request, logging an activity — but doesn't run pipeline, build reports, or need the full Sales or Service Hub. Ops staff, field sellers, partners, and customers are the most common. They're also the users a full paid seat overpays for the most.",
  },
  {
    q: "Isn't this just a cheaper HubSpot seat tier?",
    a: "No. Core seats, Sales Hub, and Service Hub seats all still bill per person and cap what a light user can do. A custom portal is yours outright, runs on one flat monthly fee no matter how many users you add, and is shaped to your exact workflow instead of a HubSpot template.",
  },
  {
    q: "Does the same approach work if we run Salesforce instead?",
    a: "Yes. The pattern is identical regardless of which CRM sits behind it — HubSpot, Salesforce, Microsoft Dynamics, or something else. See the Salesforce version of this comparison for that breakdown; we integrate the portal with whatever system of record you already run.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Paid seats get billed for partial use",
    body: "HubSpot prices by paid seat, not by how much of the platform a user touches. Someone who logs one activity a day costs the same paid seat as a rep who runs their whole pipeline in HubSpot.",
  },
  {
    title: "Free seats can look, but can't act",
    body: "View-only and free seats keep light users out of the paid count — until they need to update a record or fire a workflow. The moment they need to do their job, they need a paid seat.",
  },
  {
    title: "Every hub is its own per-seat line",
    body: "Sales Hub and Service Hub seats are billed separately. A user who needs a sliver of both can end up on two paid seats for two thin slices of work.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new ops hire, partner, or customer segment that needs to act in HubSpot adds another recurring paid seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — no second database drifting out of sync, just a better front end for the users who need less.",
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
                  Keep HubSpot. <em>Cut the seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot paid seats are built for the people who run pipeline all
                  day. Ops staff, partners, and customers who touch it for a
                  handful of tasks either sit on a full paid seat or get stuck on a
                  view-only seat that can&apos;t actually do anything. A custom
                  portal gives those light users exactly what they need, wired into
                  HubSpot in real time, on one flat fee instead of a seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Light users can act, not just view</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 30 light users on paid HubSpot seats at a typical
                    mid-market rate runs into the tens of thousands a year — and
                    grows every time headcount does. A flat-fee custom portal for
                    those same 30 users costs the same whether there are 10 of them
                    or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — actual seat pricing
                    varies by HubSpot tier, hub, and negotiated rate. Use the free
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
                <h2 className="h1 mt-3">Why HubSpot seats <em>hit light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot pricing is built around the paid seat. Everyone lighter than a full pipeline user is where the overpayment concentrates.</p>
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

        {/* LICENSE TIER BREAKDOWN */}
        <section className="section is-canvas" id="license-tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seat tiers</span>
                <h2 className="h1 mt-3">Core seat, paid hub seat, <em>view-only, or portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already sells access below a full paid seat. Here&apos;s how the tiers typically compare to a flat-fee custom portal.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access tier</th>
                    <th>Typical published price</th>
                    <th>Can a light user act on records?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sales / Service Hub Enterprise seat</td><td>~$150/seat/mo (list)</td><td className="is-yes">Yes — but billed as a full seat</td></tr>
                  <tr><td className="feat">Sales / Service Hub Professional seat</td><td>~$90–$100/seat/mo (list)</td><td className="is-yes">Yes — but billed as a full seat</td></tr>
                  <tr><td className="feat">Starter / Core paid seat</td><td>~$15–$20/seat/mo (list)</td><td className="is-no">Limited — still per seat, still capped</td></tr>
                  <tr><td className="feat">Free / view-only seat</td><td>$0</td><td className="is-no">No — view only, can&apos;t act</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — and the fee is the same at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual pricing varies by tier, hub, region, and negotiated contract; confirm current numbers with HubSpot. The gap a custom portal closes is the one every paid tier shares: a light user who needs to <em>do</em> something still costs a per-seat fee that grows with headcount.
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not an alternative CRM.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice falls into one of two camps: downgrade
                  seats and prune your paid count, or rip HubSpot out for a cheaper
                  CRM. Both have a place — but neither addresses seats that are
                  genuinely in use, just lightly. A custom portal is the option for
                  that middle group: it doesn&apos;t touch your HubSpot contract or
                  your data, it just gives the users who need less a tool that
                  costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Prune paid seats you don&apos;t use</div>
                      <p className="fl-body">Move dormant or view-only users off paid seats first — the easiest, lowest-risk win before you build anything new.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut seats used only lightly</div>
                      <p className="fl-body">The users who log in but only need a narrow slice are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill for good.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Switch CRMs only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your closers are outgrowing HubSpot, that&apos;s a different decision — this page is about the seats that don&apos;t need to be full seats at all.</p>
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
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">On Salesforce instead?</h3>
                <p className="body">The same seat-cost math for Salesforce Enterprise, Platform &amp; login licenses.</p>
                <span className="link">See the Salesforce version →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current tool spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full guide: how to cut CRM licensing costs →</Link>
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
                <p className="lede">Migration risk, free seats, hub tiers, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" sub="Tell us roughly how many light users you have on HubSpot. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full price for it.</em></h2>
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
