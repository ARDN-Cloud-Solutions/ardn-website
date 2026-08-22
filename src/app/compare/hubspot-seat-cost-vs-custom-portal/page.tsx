import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: HubSpot parity for the per-seat cost-reduction wedge. The site already
// has a Salesforce seat-cost compare page, four Salesforce compare/consulting
// clusters, and seven Salesforce buyers-guides — but HubSpot, an equally-named
// target platform, had only blog coverage and no spoke page. This fills that
// structural gap for "reduce HubSpot costs / HubSpot seat cost vs custom portal"
// intent. Positioning matches the wedge exactly: keep HubSpot as system of
// record, move light users off Core Seats onto a flat-fee portal. No fabricated
// pricing — the figures are typical publicly listed HubSpot list prices,
// explicitly labeled illustrative, and route to /savings-calculator for real
// numbers. Distinct copy from the Salesforce page (HubSpot Core Seat model,
// Pro-to-Enterprise cliff, credits-on-top) so it is not a near-duplicate.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "Full HubSpot Core Seats for light users add up fast. See the cost math for moving them to a flat-fee custom portal instead — no HubSpot switch required.",
  keywords: [
    "reduce HubSpot costs",
    "cut HubSpot licensing costs",
    "HubSpot seat cost reduction",
    "HubSpot Core Seat cost",
    "custom portal to reduce HubSpot seats",
    "HubSpot per-seat pricing",
    "reduce per-seat license costs",
    "HubSpot alternative for light users",
    "keep HubSpot cut the bill",
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
      "Full HubSpot Core Seats for light users add up fast. See the cost math for moving them to a flat-fee custom portal — no HubSpot switch required.",
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
      "Full HubSpot seats for light users add up fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No. That is the whole point — this is not a migration and not an alternative CRM. HubSpot stays exactly where it is as your system of record. A custom portal sits alongside it, connected through HubSpot's API, and gives your light users a purpose-built tool instead of a full paid Core Seat.",
  },
  {
    q: "How does HubSpot's Core Seat pricing drive this?",
    a: "Since HubSpot moved to its seats-based model, most people who take an action in Sales Hub or Service Hub — updating a deal, working a ticket, logging activity — need a paid Core Seat. Professional and Enterprise seats are priced for power users who live in the platform, but the same seat gets billed for someone who only touches a narrow slice of it. That is exactly the user a portal serves for a fraction of the cost.",
  },
  {
    q: "What counts as a 'light user' in HubSpot?",
    a: "Anyone who needs a small, well-defined slice of HubSpot — checking a record, updating a status, approving a request, submitting or tracking work — but doesn't run pipeline, build workflows, or need the full Hub. Field sellers, ops and fulfillment staff, partners, and customers are the usual examples, and they are where a full Core Seat overpays the most.",
  },
  {
    q: "Isn't a free or view-only HubSpot user enough for them?",
    a: "Sometimes — if a user genuinely only needs to look, HubSpot's view-only access can work. But the moment a light user needs to do something — edit a record, move a deal, resolve a ticket, submit a form that writes back — they typically need a paid seat. A custom portal lets those users take exactly the actions they need, written straight back to HubSpot, without consuming a Core Seat each.",
  },
  {
    q: "What about HubSpot credits and add-ons stacking on top?",
    a: "That is part of why the bill climbs faster than the seat count alone suggests. Beyond Core Seats, usage-based credits and add-ons can layer on top of the base subscription. Moving light users to a flat-fee portal takes them out of that stack entirely — their access costs the same each month no matter how the surrounding pricing changes.",
  },
  {
    q: "Does this also work if we run Salesforce, not HubSpot?",
    a: "Yes. The pattern is the same regardless of which CRM sits behind it. If you run Salesforce, see the Salesforce seat-cost page; if you run both, a single portal can read and write to whichever system owns each record.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Core Seats are billed for partial use",
    body: "HubSpot prices most write access by the seat, not by how much of the Hub a person actually uses. A coordinator who updates a handful of records pays the same Professional or Enterprise seat as a rep who lives in the platform.",
  },
  {
    title: "The Pro-to-Enterprise jump is steep",
    body: "When a team outgrows Professional, the Enterprise seat is a large step up per user — paid across everyone, including the light users who never needed the extra power in the first place.",
  },
  {
    title: "Credits and add-ons stack on top",
    body: "Usage-based credits and add-ons can layer onto the base subscription, so the effective cost per light user runs higher than the headline seat price alone.",
  },
  {
    title: "External users often shouldn't be seats at all",
    body: "Partners, vendors, and customers frequently end up needing HubSpot access by default, simply because nothing purpose-built was ever offered to them.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Adding people stops being a licensing event.",
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
                  HubSpot&apos;s Core Seat pricing is built for power users — the
                  reps and marketers who live in the platform. Sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks
                  usually get billed a full seat anyway. A custom portal gives
                  those light users exactly what they need, wired into HubSpot in
                  real time, on one flat fee instead of a seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way HubSpot sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free HubSpot cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 30 light users on full HubSpot Professional or
                    Enterprise seats runs well into five or six figures a year —
                    and grows every time headcount does. A flat-fee custom portal
                    for those same users costs the same whether there are 10 of
                    them or 400.
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
                <p className="lede">HubSpot pricing is built around the power user. Everyone lighter than that is where the overpayment concentrates.</p>
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
                <span className="eyebrow">HubSpot seat tiers</span>
                <h2 className="h1 mt-3">Starter, Professional, Enterprise, <em>or a portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot sells several Core Seat tiers, but every one of them still bills per person. Here&apos;s how they typically compare to a flat-fee custom portal.</p>
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
                  <tr><td className="feat">Sales/Service Hub Enterprise Core Seat</td><td>~$150/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales/Service Hub Professional Core Seat</td><td>~$90–$100/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Starter Core Seat</td><td>~$20/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">View-only access</td><td>Limited — no write actions</td><td className="is-no">Caps what light users can do</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed list ranges as of this writing — not a quote. Actual HubSpot pricing varies by Hub, tier, region, add-ons, usage credits, and negotiated contract; confirm current numbers with HubSpot. Even view-only access still caps what a light user can do, which is the gap a custom portal closes.
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not an audit.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice falls into two camps: audit your
                  subscription and trim what you&apos;re not using, or move off
                  HubSpot entirely. Both have a place — but neither addresses seats
                  that are being used, just lightly. A custom portal is the option
                  for that middle group: it doesn&apos;t touch your HubSpot
                  contract or your data, it just gives the users who need less a
                  tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Trim what you&apos;re not using first</div>
                      <p className="fl-body">Right-size Hubs, tiers, and add-ons at renewal — see the full framework in <Link href="/reduce-crm-licensing-costs" className="link">how to cut CRM licensing costs</Link>.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut seats that are used lightly</div>
                      <p className="fl-body">The remaining users who log in but don&apos;t need the full Hub are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill for good.</p>
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
              <Link href="/custom-partner-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Partner Portal Development</h3>
                <p className="body">Partners and vendors are the users you should never be paying internal HubSpot seats for.</p>
                <span className="link">Explore partner portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current HubSpot spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full guide: how to cut CRM licensing costs →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the seat-cost math →</Link>
              <Link href="/license-guard" className="link">Reclaim dormant CRM licenses first with License Guard →</Link>
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
                <p className="lede">Migration risk, light users, seat tiers, credits, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us roughly how many HubSpot users you have and how many are light users. We'll come back with where a portal cuts the seat bill — and a fixed quote." />

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
