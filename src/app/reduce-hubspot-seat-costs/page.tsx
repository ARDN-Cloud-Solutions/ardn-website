import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke: extends the per-seat cost-reduction wedge to HubSpot's seat-based
// model. Distinct from /compare/salesforce-seat-cost-vs-custom-portal (Salesforce-
// led) and /reduce-crm-licensing-costs (CRM-agnostic pillar). Consolidates the
// ~16 orphaned HubSpot cost blog posts (content/blog/hubspot-*) into a single
// commercial money page they can funnel into. Positioning is the same wedge —
// "keep HubSpot, cut the bill" — applied to HubSpot's paid-seat model, where
// free/view-only seats can't run workflows so light users still force a paid
// seat. No fabricated pricing: seat ranges are publicly listed list prices,
// labeled illustrative; the calculator is offered for real numbers.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Cut HubSpot per-seat costs without leaving HubSpot. Move light users off paid seats onto a flat-fee custom portal synced to your CRM. See the cost math.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot seat costs",
    "HubSpot per-seat cost reduction",
    "HubSpot seat cost alternative",
    "HubSpot Sales Hub seat cost",
    "HubSpot view-only seat limits",
    "custom portal to reduce HubSpot seats",
    "reduce HubSpot licensing costs",
    "HubSpot light user alternative",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off paid HubSpot seats onto a flat-fee custom portal synced to HubSpot — cut the bill without switching CRMs. New customers: free build.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce HubSpot seat costs with a flat-fee custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off paid HubSpot seats onto a flat-fee custom portal. Cut the bill without switching CRMs.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to cut seat costs?",
    a: "No. Your HubSpot stays exactly where it is, as the system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a paid seat. Your marketers and reps keep working in HubSpot exactly as they do today; only the light and external users move to the portal.",
  },
  {
    q: "Can't we just use HubSpot's free view-only seats?",
    a: "Free seats help, but they're view-only — they can't run workflows, edit records, or take most actions. The moment a light user needs to actually do something (update a status, submit a request, log an interaction), they're pushed onto a paid seat. A custom portal gives those users the specific edit and action rights they need, wired live into HubSpot, without a paid seat each.",
  },
  {
    q: "What counts as a 'light user' in HubSpot?",
    a: "Anyone who touches HubSpot for a narrow slice of work — checking a deal, updating a ticket, submitting a request, viewing a record — but doesn't run sequences, build reports, or need Sales/Service Hub Pro depth. Field staff, ops teams, partners, and customers are the most common examples, and they're usually the seats a paid HubSpot license overpays for the most.",
  },
  {
    q: "How is a custom portal different from a cheaper HubSpot tier?",
    a: "Right-sizing a seat to a cheaper Hub tier still bills per user and caps what that user can do. A custom portal is yours outright, runs on one flat monthly fee no matter how many users you add, and is shaped to your exact workflow instead of HubSpot's feature set. Cost stops scaling with headcount entirely.",
  },
  {
    q: "Does the portal keep our HubSpot data in sync?",
    a: "Yes. The portal reads and writes the same HubSpot records in real time through the API, so HubSpot stays the single source of truth. There's no second database drifting out of sync — the portal is just a tailored, flat-fee front end for the users who need less than a full seat.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Paid seats are billed for partial use",
    body: "HubSpot prices by user, not by how much of the platform that user touches. Someone who updates a ticket twice a day can cost the same paid seat as a rep running full sales sequences all day.",
  },
  {
    title: "Free seats can't actually do the work",
    body: "View-only seats are free, but they can't run workflows or edit records. The moment a light user needs to take an action, they get pushed onto a paid seat — so the free tier rarely covers the people you hoped it would.",
  },
  {
    title: "Every Hub carries its own seat cost",
    body: "Sales Hub, Service Hub, and Marketing Hub each bill separately. A user who needs a sliver of two Hubs can end up on two paid seats for a fraction of each platform's value.",
  },
  {
    title: "The bill compounds with headcount",
    body: "Every new hire, partner, or customer segment that needs access adds another recurring seat — permanently, unless something changes the model.",
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

export default function ReduceHubspotSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-seat-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
        name: "How to Reduce HubSpot Seat Costs Without Leaving HubSpot",
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
                  Keep HubSpot. <em>Cut the seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s paid seats are built for power users — reps and
                  marketers running full sequences, workflows, and reporting. The
                  ops staff, field teams, partners, and customers who only view or
                  update a handful of records usually can&apos;t live on a free
                  view-only seat, so they land on a paid one anyway. A custom portal
                  gives those light users exactly what they need, wired into HubSpot
                  in real time, on one flat fee instead of a seat each.
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
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 30 light users on paid HubSpot seats at a typical
                    Professional rate runs into five or six figures a year — and
                    grows every time headcount does. A flat-fee custom portal for
                    those same users costs the same whether there are 10 of them
                    or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — HubSpot seat pricing
                    varies by Hub, tier, and contract. Use the free calculator to
                    run your own.
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
                <h2 className="h1 mt-3">Why HubSpot&apos;s seat model <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot pricing is built around the power user. Everyone lighter than that is where the overpayment concentrates — and free seats rarely cover them.</p>
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
                <span className="eyebrow">HubSpot seats vs. a flat-fee portal</span>
                <h2 className="h1 mt-3">Paid seat, view-only seat, <em>or a portal you own.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already sells tiers below a full paid seat. Here&apos;s how they typically compare to a flat-fee custom portal for light users.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access tier</th>
                    <th>Typical published price</th>
                    <th>Can light users act on records?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sales / Service Hub paid seat</td><td>~$20–$90+/user/mo (list)</td><td className="is-no">Yes — but bills per seat</td></tr>
                  <tr><td className="feat">Enterprise Hub seat</td><td>~$120–$150+/user/mo (list)</td><td className="is-no">Yes — highest per-seat cost</td></tr>
                  <tr><td className="feat">HubSpot free / view-only seat</td><td>$0</td><td className="is-no">No — view only, no edits or workflows</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — and the same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. HubSpot updates pricing periodically and bills separately per Hub; confirm current numbers with HubSpot. The gap a custom portal closes is the middle: users who need to <em>act</em> on records but don&apos;t need a full paid seat — see the{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full Salesforce &amp; HubSpot seat-cost math</Link>{" "}or run the{" "}
              <Link href="/savings-calculator" className="link">savings calculator</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not a downgrade.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most HubSpot cost advice stops at two moves: remove seats you
                  aren&apos;t using, or downgrade users to a cheaper Hub tier. Both
                  help — but neither addresses seats that are genuinely in use, just
                  lightly. A custom portal is the option for that middle group: it
                  doesn&apos;t touch your HubSpot contract or your data, it just
                  gives the users who need less a tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Clean up unused seats first</div>
                      <p className="fl-body">Pull last-login data and cut dormant or duplicate paid seats — the fastest win, and it changes nothing for active users.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users to a portal</div>
                      <p className="fl-body">The users who log in but don&apos;t need Hub depth are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill for good.</p>
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
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Keep reading</span>
                <h2 className="h1 mt-3">More on <em>cutting CRM cost.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Start here</span>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework — reclaim, right-size, or replace the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to HubSpot, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your HubSpot seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown →</Link>
              <Link href="/custom-software-development" className="link">Explore custom software development →</Link>
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
                <p className="lede">Migration risk, free seats, light users, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what your HubSpot seats are costing" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full price for it.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where a portal cuts the bill, and give you a fixed quote in 48 hours. Prefer to talk now? Call <a href="tel:+14078155303" style={{ color: "#fff", textDecoration: "underline" }}>+1 (407) 815-5303</a> — we reply within 4 business hours.</p>
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
