import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: HubSpot counterpart to the proven /compare/salesforce-seat-cost-vs-custom-portal
// page. The entire cost-reduction landing surface was Salesforce-only; HubSpot
// per-seat pain (Starter→Pro→Enterprise jumps, seats stacking on top of contact
// tiers) is a top money term that previously lived only in blog posts with no
// landing/compare hub to funnel into. Targets "reduce HubSpot seat costs",
// "HubSpot per seat cost too expensive", "HubSpot seat cost vs custom portal".
// No fabricated pricing: HubSpot list-price ranges are explicitly labeled
// illustrative (HubSpot updates pricing periodically) and point to
// /savings-calculator for the reader's own numbers. Keep HubSpot as system of
// record; move light users to a flat-fee portal that writes back to HubSpot.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "Paying full HubSpot seats for light users adds up fast. See the cost math for moving them to a flat-fee custom portal that writes back to HubSpot — no switch.",
  keywords: [
    "reduce HubSpot seat costs",
    "HubSpot per seat cost",
    "cut HubSpot licensing costs",
    "HubSpot seat cost reduction",
    "HubSpot too expensive",
    "custom portal to reduce HubSpot seats",
    "HubSpot light user alternative",
    "reduce per-seat license costs",
    "HubSpot Sales Hub seat cost",
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
      "Full HubSpot seats for every light user get expensive fast. See the cost math for a flat-fee custom portal that syncs with HubSpot — no CRM switch required.",
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
      "Full HubSpot seats for every light user get expensive fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to cut seat costs?",
    a: "No. HubSpot stays exactly where it is, as your system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a full paid Sales or Service Hub seat. Your power users keep working in HubSpot exactly as they do today.",
  },
  {
    q: "Which HubSpot users are worth moving to a portal?",
    a: "The ones who touch HubSpot for a narrow slice of work but get billed a full paid seat anyway — staff who mainly view or update a record, sellers checking a status, ops users logging an activity, partners or customers who need a window into their own data. They don't need sequences, forecasting, or advanced reporting, so a full Sales Hub seat overpays for them the most.",
  },
  {
    q: "Isn't this the same as just downgrading HubSpot tiers or using free seats?",
    a: "Right-sizing tiers and using HubSpot's free CRM access are real first steps, and you should take them. But cheaper tiers still bill per person and cap what you can build for that user, and free access can't cover a custom external-facing workflow. A custom portal addresses the group that's left: users who genuinely need a tailored tool, delivered on one flat fee instead of a growing stack of paid seats.",
  },
  {
    q: "How does the portal stay in sync with HubSpot?",
    a: "The portal reads and writes the same HubSpot records in real time through the API, so there's one source of truth — no second database drifting out of sync. Contacts, deals, tickets, and custom objects stay accurate on both sides; the portal is simply a tailored front end for the users who need less of the full platform.",
  },
  {
    q: "Does this work with Sales Hub, Service Hub, and custom objects?",
    a: "Yes. The pattern is the same whether the light users sit around Sales Hub, Service Hub, or custom objects on the Enterprise tier. We integrate the portal with whatever you already run in HubSpot and shape it to the exact workflow those users need.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Paid seats get billed for partial use",
    body: "HubSpot prices Sales and Service Hub by user, not by how much of the Hub that user touches. Someone who updates a record twice a day pays the same paid seat as a rep running full sequences and forecasting.",
  },
  {
    title: "The tier jump is where it stings",
    body: "The step from Starter to Professional to Enterprise multiplies the per-seat cost, and Enterprise features — custom objects, advanced permissions, granular reporting — go unused by many of the users assigned an Enterprise seat.",
  },
  {
    title: "Seats stack on top of contact tiers",
    body: "HubSpot bills marketing contacts separately from Hub seats, so the seat line is pure headcount cost layered on top of everything else you already pay — and it grows every time a new light user needs access.",
  },
  {
    title: "External users often shouldn't be paid seats at all",
    body: "Partners, vendors, and customers frequently end up on paid seats by default, simply because nothing else was built for them to log into.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Adding users stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — no second database, just a better front end for the users who need less of the platform.",
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
                  Full HubSpot seats are built for power users — reps who run
                  sequences, forecasting, and reporting all day. The staff,
                  partners, and customers who touch HubSpot for a handful of
                  tasks usually get billed a paid seat anyway. A custom portal
                  gives those light users exactly what they need, wired into
                  HubSpot in real time, on one flat fee instead of a seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way HubSpot sync</span>
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
                    Example: 40 light users on paid Sales Hub seats at a typical
                    mid-market tier runs into the tens of thousands a year — and
                    grows every time headcount does. A flat-fee custom portal for
                    those same 40 users costs the same whether there are 10 of
                    them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — HubSpot pricing varies
                    by tier and contract, and updates periodically. Use the free
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
                <p className="lede">HubSpot seat pricing is built around the power user. Everyone lighter than that is where the overpayment concentrates.</p>
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
        <section className="section is-canvas" id="seat-tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seat tiers</span>
                <h2 className="h1 mt-3">Starter, Professional, <em>Enterprise, or portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already sells several paid seat tiers. Here&apos;s how they typically compare to a flat-fee custom portal.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access tier</th>
                    <th>Typical published price</th>
                    <th>Still scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sales / Service Hub Starter seat</td><td>~$20/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales / Service Hub Professional seat</td><td>~$90–$100/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales / Service Hub Enterprise seat</td><td>~$150/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Free HubSpot CRM access (view/update)</td><td>$0, but limited features</td><td className="is-no">Capped — no custom workflow</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. HubSpot updates its pricing periodically and actual cost varies by tier, region, and negotiated contract; confirm current numbers with HubSpot. Even the cheapest paid seat still bills per person and caps what you can build for them, which is the gap a custom portal closes.
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
                  Most HubSpot cost advice falls into two camps: right-size your
                  tiers and free-seat what you can, or move off HubSpot entirely.
                  Both have a place — but neither addresses seats that are being
                  used, just lightly. A custom portal is the option for that
                  middle group: it doesn&apos;t touch your HubSpot contract or
                  your data, it just gives the users who need less a tool that
                  costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Audit and free-seat first</div>
                      <p className="fl-body">Pull last-login data, drop dormant seats, and move view-only users to free HubSpot CRM access — the fastest wins.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut seats used lightly</div>
                      <p className="fl-body">The users who log in but don&apos;t need sequences or reporting are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your power users are outgrowing the platform, that&apos;s a different conversation — this page is about the seats that don&apos;t need to be full seats at all.</p>
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
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind the savings.</em></h2>
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
                <p className="body">The full decision framework — reclaim, right-size, or move light users to a portal.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the seat-cost math →</Link>
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
                <p className="lede">Migration risk, light users, seat tiers, sync, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers buttonLabel="Send me my seat-cost breakdown" sub="Tell us roughly how many HubSpot users you have and which Hubs. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See every way to cut CRM licensing costs →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
