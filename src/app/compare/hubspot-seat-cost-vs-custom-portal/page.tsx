import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";
import WedgeTestimonial from "@/components/common/WedgeTestimonial";

// Wedge spoke mirroring /compare/salesforce-seat-cost-vs-custom-portal but for
// HubSpot-specific cost intent ("reduce HubSpot seat costs", "cut HubSpot
// licensing costs", "HubSpot portal for light/external users"). The Salesforce
// compare page's copy is CRM-agnostic but its title/H1/slug are Salesforce-only,
// so it can't rank for HubSpot terms — this page fills that gap.
//
// ACCURACY: HubSpot's current model already gives view-only users free seats,
// so the wedge here is NOT "unused viewer seats." It is (a) light users pushed
// onto a PAID Core seat for one gated create/edit/report/automation feature, and
// (b) external/occasional narrow-task users (partners, clients, field staff) who
// don't fit either HubSpot seat type cleanly. All prices are publicly listed
// list ranges, explicitly labeled illustrative — no quotes, no fabrication.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "Paid HubSpot seats add up fast for light and external users. See the cost math for moving them to a flat-fee custom portal instead — keep HubSpot as-is.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot license cost reduction",
    "custom portal to reduce HubSpot seats",
    "HubSpot portal for external users",
    "HubSpot paid vs free seats",
    "reduce per-seat license costs",
    "HubSpot alternative for light users",
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
      "Paid HubSpot seats add up fast for light and external users. See the cost math for a flat-fee custom portal instead — keep HubSpot as your system of record.",
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
      "Paid HubSpot seats add up fast for light and external users. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Doesn't HubSpot already give light users a free seat?",
    a: "For pure viewers, yes — HubSpot lets view-only users in for free, so if someone only needs to look at records, a portal isn't the saving. The overpayment sits one step past that: the light user who needs to create, edit, or update something, or hits a single paid-gated feature (a report, an automation action, a sequence) and gets bumped onto a full paid Core seat 'just in case.' That user pays like a power user for a sliver of the platform. A custom portal gives them exactly that sliver — on a flat fee, with no paid seat at all.",
  },
  {
    q: "What counts as a 'light user' on HubSpot?",
    a: "Someone whose entire need is one narrow, repeated task — submitting a request, updating a status, checking an order, pulling a single view — but who has to create or edit data to do it, so a free view-only seat won't cover them. Ops staff, sellers doing quick updates, partners, and customers are the common cases. They're the users a paid seat overpays for the most, because they touch a fraction of what the seat is priced for.",
  },
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No. HubSpot stays exactly where it is, as your system of record. A custom portal sits alongside it, integrated through the HubSpot API, and gives your light and external users a purpose-built tool instead of a paid Core seat. Nothing migrates, nothing gets ripped out — your power users keep working in HubSpot as normal.",
  },
  {
    q: "Isn't this the same as auditing free vs. paid seats?",
    a: "It solves the next problem along. A free-vs-paid audit downgrades anyone who was over-provisioned onto a free seat — worth doing first. But it can't help the users who genuinely need to edit or use a gated feature: HubSpot's own model requires a paid seat for them. A custom portal is the option for that group — it doesn't downgrade the seat, it removes the need for one by giving that user a cheaper, better-fitted tool wired into HubSpot.",
  },
  {
    q: "What about partners, clients, and other external users?",
    a: "External users are the clearest case. Putting a partner, reseller, or customer on an internal HubSpot seat is expensive and rarely the right fit — they need a branded, permission-scoped view of a few objects, not the CRM. A custom portal gives them that, synced live to HubSpot, on one flat fee no matter how many you add. See our custom partner portal development page for the reseller/dealer version of this.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Free seats stop at view-only",
    body: "HubSpot's free seats cover users who only look at records. The moment someone needs to create, edit, or update — even for one narrow task — they need a paid Core seat, priced for a power user.",
  },
  {
    title: "One gated feature bumps a light user to full price",
    body: "A single paid-gated report, automation action, or sequence is enough to move an occasional user onto a paid seat. Multiply that 'just in case' upgrade across a growing team and paid seats creep well past the group that needs them daily.",
  },
  {
    title: "External users shouldn't be internal seats at all",
    body: "Partners, resellers, and customers often end up on internal HubSpot seats by default, simply because nothing else was built for them — an expensive fit for users who need a few objects, not the CRM.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new hire, partner, or customer segment that needs to edit in HubSpot adds another recurring paid seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a per-seat licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — no second database drifting out of sync, just a better front end for the users who need less of the platform.",
  },
];

export default function HubSpotSeatCostVsCustomPortalPage() {
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
                  Keep HubSpot. <em>Cut the paid seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot already lets view-only users in for free. The cost sits
                  one step past that — the light user who has to edit or update
                  something, or hits one paid-gated feature, and lands on a full
                  paid Core seat anyway. A custom portal gives those users, and
                  your partners and customers, exactly what they need, wired into
                  HubSpot in real time, on one flat fee instead of a seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Syncs live via the HubSpot API</span>
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
                    Example: 40 light or external users on paid HubSpot Core seats
                    at a typical mid-market rate runs into five or six figures a
                    year — and grows every time headcount does. A flat-fee custom
                    portal for those same 40 users costs the same whether there
                    are 10 of them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — actual seat pricing
                    varies by hub, tier, and negotiated rate. Use the free
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
                <h2 className="h1 mt-3">Why paid seats <em>hit light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s free tier covers pure viewers. Everyone who needs to do a little more — but not much — is where the overpayment concentrates.</p>
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
                <h2 className="h1 mt-3">Free view-only, paid Core seat, <em>or a portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s two seat types leave a gap: the user who needs more than view-only but far less than a full Core seat. Here&apos;s how they compare to a flat-fee custom portal.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access type</th>
                    <th>Typical published price</th>
                    <th>Still scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Free / view-only seat</td><td>$0 — but view-only, no create/edit</td><td className="is-no">n/a — can&apos;t edit or use gated tools</td></tr>
                  <tr><td className="feat">Paid Core seat (Sales/Service, Starter)</td><td>~$20/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Paid Core seat (Professional)</td><td>~$90/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Paid Core seat (Enterprise)</td><td>~$150/seat/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual pricing varies by hub, tier, region, and negotiated contract; confirm current numbers with HubSpot. The point isn&apos;t that any one tier is overpriced — it&apos;s that every paid tier still bills per person and caps what you can build for that user, which is the gap a custom portal closes.
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not a seat audit.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice falls into two camps: downgrade
                  over-provisioned users to free seats (a seat audit), or move
                  off HubSpot entirely (a migration). Both have a place — but
                  neither helps the users who genuinely need to edit or use a
                  gated feature, so HubSpot requires a paid seat for them. A
                  custom portal is the option for that middle group: it
                  doesn&apos;t touch your HubSpot contract or your data, it just
                  gives the users who need less a tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Downgrade over-provisioned seats first</div>
                      <p className="fl-body">Anyone on a paid seat who only views records belongs on a free seat — the easiest win, no build required.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut the seats HubSpot forces to paid</div>
                      <p className="fl-body">The users who must edit or hit a gated feature can&apos;t drop to free — that&apos;s exactly where a custom portal removes the paid seat.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your power users are outgrowing HubSpot, that&apos;s a different conversation — this page is about the seats that don&apos;t need to be full seats at all.</p>
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
                <h2 className="h1 mt-3">Common places <em>the paid-seat count adds up.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops &amp; customer portals synced to HubSpot, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/custom-partner-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Partner Portals</h3>
                <p className="body">Partner, reseller &amp; dealer portals that replace external paid seats.</p>
                <span className="link">Explore partner portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full guide: how to cut CRM licensing costs →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee cost breakdown →</Link>
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
                <p className="lede">Free vs. paid seats, light users, external users, and cost.</p>
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

        <WedgeTestimonial />


        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers sub="Tell us roughly how many light or external users you run in HubSpot. We'll come back with where a portal cuts the paid-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full price for it.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your light and external users actually use HubSpot, show where a portal cuts the paid-seat bill, and give you a fixed quote in 48 hours.</p>
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
