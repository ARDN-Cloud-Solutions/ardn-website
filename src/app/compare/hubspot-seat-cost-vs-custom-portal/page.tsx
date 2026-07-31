import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills the validated Salesforce/HubSpot asymmetry — Salesforce has a
// landing page plus two compare pages for the per-seat wedge, HubSpot had only
// blog posts. This is the HubSpot-first companion to
// /compare/salesforce-seat-cost-vs-custom-portal: same "keep your CRM, cut the
// bill" wedge, but written around HubSpot's seat/tier model and terminology so
// it ranks for "cut HubSpot seat costs" / "reduce HubSpot seats" / "HubSpot
// seat cost vs custom portal". No fabricated vendor pricing: the ranges below
// are publicly listed list prices, explicitly labeled illustrative, and defer
// to /savings-calculator for a reader's own numbers.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. Custom Portal | Ardn",
  description:
    "HubSpot bills per seat, and light users add up fast. See the cost math for moving them to a flat-fee custom portal instead — keep HubSpot, cut the bill.",
  keywords: [
    "cut HubSpot seat costs",
    "reduce HubSpot seats",
    "HubSpot seat cost vs custom portal",
    "reduce HubSpot licensing costs",
    "HubSpot seat cost reduction",
    "custom portal to reduce HubSpot seats",
    "reduce per-seat license costs",
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
      "Full HubSpot seats for every light user get expensive fast. See the cost math for a flat-fee custom portal instead — no CRM switch required.",
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
    q: "Do we have to leave HubSpot to save money?",
    a: "No. HubSpot stays exactly where it is as your system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a full paid seat. Your sales and marketing teams keep working in HubSpot exactly as before.",
  },
  {
    q: "What counts as a 'light user' in HubSpot?",
    a: "Anyone who touches HubSpot for a narrow slice of work — checking a deal, updating a status, logging a note, viewing a record — but doesn't run sequences, forecasting, or advanced reporting. Field staff, ops teams, partners, and customers are the most common examples, and they're usually the users a full paid seat overpays for the most.",
  },
  {
    q: "Isn't a free HubSpot seat enough for light users?",
    a: "Sometimes — HubSpot's free CRM access covers basic viewing and updating, and reclaiming paid seats those users don't need is a real, easy win. But free seats cap what a user can do and see, and they can't be shaped to a specific workflow. When light users need a focused tool that does one job well (a partner approval queue, a customer order view, a field-status update), a custom portal fits where a generic free seat doesn't.",
  },
  {
    q: "How is this different from just right-sizing our HubSpot tiers?",
    a: "Right-sizing — matching Starter/Professional/Enterprise tiers to actual feature usage, and cutting duplicate or dormant seats — is the first move and it works. But it can't shrink seats that are being used, just lightly. A custom portal addresses that second category: it doesn't downgrade a seat, it removes the need for one by giving that user a cheaper, better-fitted tool. Do both — right-size first, then move the remaining light users to a portal.",
  },
  {
    q: "Does this work with Salesforce too, not just HubSpot?",
    a: "Yes. The pattern is identical regardless of which CRM sits behind it — HubSpot, Salesforce, Microsoft Dynamics, or something else. We integrate the portal with whatever system of record you already run.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Seats are billed by user, not by usage",
    body: "HubSpot prices paid seats by person, not by how much of the platform that person touches. A rep who checks a deal twice a day pays the same paid seat as one who lives in the pipeline all day.",
  },
  {
    title: "Tier jumps multiply the per-seat cost",
    body: "Enterprise seats cost meaningfully more than Professional or Starter, and Enterprise-only features go unused by a lot of assigned users. When a whole team is on a tier a handful of power users needed, the overpayment compounds per head.",
  },
  {
    title: "Overlapping Hubs each carry their own seats",
    body: "Marketing Hub, Sales Hub, and Service Hub each bill separately, and it's common to find a paid seat doing a job another Hub feature already covers — paying twice for the same light user.",
  },
  {
    title: "The bill grows with every hire and partner",
    body: "Every new team member, partner, or customer segment that needs access adds another recurring paid seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — there's no second database drifting out of sync, just a better front end for the users who need less.",
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
                  Keep HubSpot. <em>Cut the seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s paid seats are built for power users — reps who
                  run sequences, forecasting, and reporting all day. Ops staff,
                  partners, and customers who touch it for a handful of tasks
                  usually get billed for a full seat anyway. A custom portal
                  gives those light users exactly what they need, wired into
                  HubSpot in real time, on one flat fee instead of a seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Live via the HubSpot API</span>
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
                    Example: 40 light users on paid HubSpot seats at a typical
                    Professional/Enterprise rate runs into five or six figures a
                    year — and grows every time headcount does. A flat-fee custom
                    portal for those same 40 users costs the same whether there
                    are 10 of them or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — actual seat pricing
                    varies by tier and negotiated rate. Use the free calculator
                    to run your own.
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
                <p className="lede">HubSpot licensing is built around the power user. Everyone lighter than that is where the overpayment concentrates.</p>
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
                <h2 className="h1 mt-3">Starter, Professional, Enterprise — <em>or portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already sells several tiers, plus free CRM access. Here&apos;s how they typically compare to a flat-fee custom portal.</p>
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
                  <tr><td className="feat">Sales/Service Hub Enterprise seat</td><td>~$150/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales/Service Hub Professional seat</td><td>~$90/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Starter seat</td><td>~$20/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Free CRM access (view/update only)</td><td>$0, capped features</td><td className="is-no">Free, but limited &amp; not customizable</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. HubSpot updates pricing periodically and bills by seat and tier; confirm your current rate in your account. Free seats help for basic view/update needs, but they cap features and can&apos;t be shaped to a workflow — which is the gap a custom portal closes.
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
                  tiers and reclaim unused seats (a cleanup), or move off HubSpot
                  entirely (a migration). Both have a place — but neither
                  addresses seats that are being used, just lightly. A custom
                  portal is the option for that middle group: it doesn&apos;t
                  touch your HubSpot contract or your data, it just gives the
                  users who need less a tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim and right-size first</div>
                      <p className="fl-body">Pull last-login data, cut dormant and duplicate paid seats, and match each Hub tier to the features actually used.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut seats that are used lightly</div>
                      <p className="fl-body">The remaining users who log in but don&apos;t need the full Hub are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if HubSpot itself doesn&apos;t fit</div>
                      <p className="fl-body">If your power users are outgrowing the platform, that&apos;s a different conversation — this page is about seats that don&apos;t need to be full paid seats at all.</p>
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
                <h2 className="h1 mt-3">The rest of the <em>cost-reduction playbook.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to HubSpot or Salesforce, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full cross-CRM framework: reclaim, right-size, or move light users to a flat-fee portal.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seats and light users and see the flat-fee comparison in 30 seconds.</p>
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
                <p className="lede">Free seats, tier right-sizing, migration risk, and cost.</p>
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

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" showSeatQualifiers sub="Tell us which HubSpot tier you run and roughly how many light users. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

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
