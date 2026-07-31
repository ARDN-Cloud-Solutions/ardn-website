import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a validated content gap — buyers researching "reduce Salesforce
// license costs" / "cut CRM per-seat costs" find either (a) license-audit
// consultants who optimize the existing contract, or (b) Salesforce-only
// portal products. Nobody combines multi-CRM + flat-fee build-and-run +
// a seat-savings calculator. No fabricated vendor pricing: the cost math
// below is explicitly labeled illustrative, not a quote for any named
// product, and points to /savings-calculator for a reader's own numbers.
export const metadata: Metadata = {
  title: "Salesforce Seat Costs vs. Custom Portal | Ardn",
  description:
    "Full CRM seats for every light user get expensive fast. See the cost math for moving them to a flat-fee custom portal instead — no CRM switch required.",
  keywords: [
    "reduce Salesforce license costs",
    "cut CRM licensing costs",
    "Salesforce seat cost reduction",
    "custom portal to reduce Salesforce seats",
    "reduce per-seat license costs",
    "Salesforce Experience Cloud alternative",
    "light user CRM alternative",
    "HubSpot seat cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal",
      "x-default": "https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal",
    },
  },
  openGraph: {
    title: "Salesforce Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Full CRM seats for every light user get expensive fast. See the cost math for moving them to a flat-fee custom portal — no CRM switch required.",
    url: "https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce and HubSpot seat costs vs. a custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Full CRM seats for every light user get expensive fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave Salesforce or HubSpot to save money?",
    a: "No. That's the core difference between this and a license-optimization audit or a CRM migration. Your CRM stays exactly where it is, as the system of record. A custom portal sits alongside it, integrated through the CRM's API, and gives your light users a purpose-built tool instead of a full paid seat.",
  },
  {
    q: "What counts as a 'light user'?",
    a: "Anyone who touches the CRM for a narrow slice of work — checking an order, approving a request, updating a status, viewing a record — but doesn't build reports, run pipeline, or need the full platform. Field sellers, ops staff, partners, and customers are the most common examples. They're also usually the users a full per-seat license overpays for the most.",
  },
  {
    q: "Isn't this the same as a license-optimization audit?",
    a: "It solves a different half of the problem. A license audit finds seats you're not using at all and reclaims them — useful, but it can't shrink seats that are being used lightly. A custom portal addresses that second category: it doesn't reclaim a seat, it removes the need for one by giving that user a cheaper, better-fitted tool. The two combine well — run License Guard or an audit first, then move the remaining light users to a portal.",
  },
  {
    q: "How is this different from a CRM's own community or portal license tier?",
    a: "Built-in community, partner, or light-user license tiers (however a given CRM brands them) still bill per user and cap what you can build. A custom portal is yours outright, runs on one flat monthly fee no matter how many users you add, and is shaped to your exact workflow instead of a vendor's template.",
  },
  {
    q: "Does this work with HubSpot, not just Salesforce?",
    a: "Yes. The pattern is the same regardless of which CRM sits behind it — Salesforce, HubSpot, Microsoft Dynamics, or something else. We integrate the portal with whatever system of record you already run.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Full seats get billed for partial use",
    body: "Most CRMs price by user, not by how much of the platform that user touches. A seller who checks inventory twice a day pays the same license as a rep who lives in the CRM all day.",
  },
  {
    title: "Light-user tiers still bill per head",
    body: "CRM vendors offer cheaper tiers for external or occasional users, but they still scale per person and cap what you can build for them — you're renting a smaller box, not escaping the per-seat model.",
  },
  {
    title: "External users often shouldn't be internal seats at all",
    body: "Partners, vendors, and customers frequently end up on internal CRM licenses by default, simply because nothing else was built for them.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new hire, partner, or customer segment that needs CRM access adds another recurring seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same CRM records in real time — there's no second database drifting out of sync, just a better front end for the users who need less.",
  },
];

export default function SalesforceSeatCostVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Salesforce & HubSpot Seat Costs vs. a Custom Portal",
        name: "Salesforce & HubSpot Seat Costs vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license cost reduction" },
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
          { "@type": "ListItem", position: 3, name: "Salesforce Seat Cost vs. Custom Portal", item: url },
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
                <span className="eyebrow">Salesforce &amp; HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Keep the CRM. <em>Cut the seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Full per-seat CRM licenses are built for power users — reps who
                  live in the platform all day. Sellers, ops staff, partners, and
                  customers who touch it for a handful of tasks usually get billed
                  the same anyway. A custom portal gives those light users exactly
                  what they need, wired into your CRM in real time, on one flat
                  fee instead of a license each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Works with Salesforce or HubSpot</span>
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
                    Example: 40 light users on full CRM seats at a typical
                    mid-market rate runs into six figures a year — and grows
                    every time headcount does. A flat-fee custom portal for
                    those same 40 users costs the same whether there are 10 of
                    them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — actual seat pricing
                    varies by CRM, edition, and negotiated rate. Use the free
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
                <h2 className="h1 mt-3">Why per-seat pricing <em>hits light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">CRM licensing is built around the power user. Everyone lighter than that is where the overpayment concentrates.</p>
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
                <span className="eyebrow">Salesforce &amp; HubSpot license tiers</span>
                <h2 className="h1 mt-3">Enterprise seat, Platform seat, <em>login license, or portal.</em></h2>
              </div>
              <div>
                <p className="lede">CRM vendors already sell several tiers below a full seat. Here&apos;s how they typically compare to a flat-fee custom portal.</p>
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
                  <tr><td className="feat">Full Sales/Service Cloud Enterprise seat</td><td>~$150–$165/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Salesforce Platform (limited-access) license</td><td>~$25–$30/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Login-based / Experience Cloud license</td><td>~$2–$10 per login (list)</td><td className="is-no">Yes — per login/user</td></tr>
                  <tr><td className="feat">HubSpot seat above Starter tier</td><td>~$20–$90+/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual pricing varies by edition, region, and negotiated contract; confirm current numbers with your CRM vendor. Even the cheapest per-seat tier still bills per person and caps what you can build for them, which is the gap a custom portal closes.
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
                  Most cost-reduction advice here falls into one of two camps:
                  reclaim licenses you already have (a license audit), or move
                  off your CRM entirely (a migration). Both have a place — but
                  neither addresses seats that are being used, just lightly.
                  A custom portal is the option for that middle group: it
                  doesn&apos;t touch your CRM contract or your data, it just
                  gives the users who need less a tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim unused seats first</div>
                      <p className="fl-body">Dormant licenses are the easiest win — <Link href="/license-guard" className="link">License Guard</Link> automates that scan for Salesforce orgs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut seats that are being used lightly</div>
                      <p className="fl-body">The remaining users who log in but don&apos;t need the full platform are where a custom portal cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if the CRM itself doesn&apos;t fit</div>
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
                <p className="body">Seller, ops, partner &amp; customer portals synced to your CRM, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically before you build anything new.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current tool spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full guide: how to cut CRM licensing costs →</Link>
              <Link href="/compare/hubspot-seat-cost-vs-custom-portal" className="link">On HubSpot instead? See the HubSpot seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">On Experience Cloud? See how it compares →</Link>
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
                <p className="lede">Migration risk, light users, license tiers, and cost.</p>
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

        <LeadForm source="Salesforce Seat Cost vs Custom Portal page" heading="See what your seats are costing" showSeatQualifiers sub="Tell us which CRM you run and roughly how many light users. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep the CRM. <em>Stop paying full price for it.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your light users actually use your CRM, show where a portal cuts the bill, and give you a fixed quote in 48 hours.</p>
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
