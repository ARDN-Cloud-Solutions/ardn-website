import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a validated content gap — buyers searching "reduce ServiceNow
// license costs" / "ServiceNow license cost per user" / "ServiceNow portal
// alternative" currently find ServiceNow's own docs, license-audit consultants,
// and SAM tools. Nobody frames the fix as "build a flat-fee portal for the
// narrow-workflow users who don't need a full fulfiller license." Extends the
// per-seat cost-reduction wedge from Salesforce/HubSpot to ServiceNow, whose
// fulfiller-vs-requester model is an unusually clean light-user story.
// No fabricated vendor pricing: ServiceNow does not publish list prices, so the
// page describes the licensing MODEL (publicly documented) and labels every
// figure as third-party-reported and illustrative, pointing to the calculator.
export const metadata: Metadata = {
  title: "ServiceNow License Cost vs. Custom Portal | Ardn",
  description:
    "Full ServiceNow fulfiller licenses for narrow-workflow users add up fast. See the cost math for moving them to a flat-fee custom portal — no platform switch.",
  keywords: [
    "reduce ServiceNow license costs",
    "ServiceNow license cost per user",
    "ServiceNow fulfiller license cost",
    "cut ServiceNow licensing costs",
    "ServiceNow portal alternative",
    "custom portal to reduce ServiceNow seats",
    "reduce per-seat license costs",
    "ServiceNow cost optimization",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/compare/servicenow-license-cost-vs-custom-portal",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/compare/servicenow-license-cost-vs-custom-portal",
      "x-default":
        "https://ardncloudsolutions.com/compare/servicenow-license-cost-vs-custom-portal",
    },
  },
  openGraph: {
    title: "ServiceNow License Cost vs. a Custom Portal | Ardn",
    description:
      "Full ServiceNow fulfiller licenses for narrow-workflow users add up fast. See the cost math for a flat-fee custom portal instead — no platform switch required.",
    url: "https://ardncloudsolutions.com/compare/servicenow-license-cost-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "ServiceNow license cost vs. a custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceNow License Cost vs. a Custom Portal | Ardn",
    description:
      "Full ServiceNow fulfiller licenses for narrow-workflow users add up fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave ServiceNow to save money?",
    a: "No. ServiceNow stays your system of record. A custom portal sits alongside it, integrated through ServiceNow's REST and Table APIs, and gives your narrow-workflow users a purpose-built tool instead of a full fulfiller license. Your ITSM, CMDB, and workflows all stay exactly where they are.",
  },
  {
    q: "How does ServiceNow licensing actually drive the cost?",
    a: "ServiceNow prices primarily around fulfiller (agent) users — the people who work and resolve records. Requesters who only submit or track a ticket are typically covered separately. The overpayment concentrates on users who are assigned a full fulfiller license but only touch a narrow, repetitive slice of the platform: light approvers, field techs, ops staff, and partners. Those are the users a custom portal can serve without a premium seat.",
  },
  {
    q: "What kind of users make sense to move to a portal?",
    a: "Anyone who needs more than a plain requester experience but far less than a full fulfiller license — someone who updates a specific record type, submits structured work, approves against custom logic, or runs one repeatable process. Field service, facilities, light dispatch, vendor and partner workflows, and internal ops tasks are the most common examples.",
  },
  {
    q: "Isn't this the same as a ServiceNow license audit or a SAM tool?",
    a: "It solves a different half of the problem. A license audit or a SAM tool like Flexera, Zylo, or ServiceNow's own License Workbench finds seats you're not fully using and helps you reclaim or right-size them — useful, but it can't remove a seat that's genuinely in use, just lightly. A custom portal addresses that second category: it doesn't reclaim a fulfiller seat, it removes the need for one by giving that user a cheaper, better-fitted tool. The two combine well — audit first, then move the remaining light users to a portal.",
  },
  {
    q: "How does the data stay accurate across ServiceNow and the portal?",
    a: "The portal reads and writes ServiceNow records in real time through its APIs, so there's one source of truth. The portal is a tailored front end onto the ServiceNow data you already trust — not a separate copy that drifts out of sync.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Fulfiller licenses carry the premium",
    body: "ServiceNow prices around the fulfiller — the user who works records. Assign one to someone who only touches a narrow workflow and you pay a full agent rate for a fraction of the platform.",
  },
  {
    title: "Narrow-workflow users don't need the full agent",
    body: "Light approvers, field techs, facilities, and ops staff often need one repeatable process, not the whole ITSM console. A full fulfiller seat is the most expensive way to give them that.",
  },
  {
    title: "External users shouldn't sit on internal seats",
    body: "Partners, vendors, and contractors frequently get provisioned a fulfiller license by default, simply because nothing purpose-built existed for them.",
  },
  {
    title: "The bill compounds as processes multiply",
    body: "Every new team, workflow, or partner group that needs to work records adds another recurring seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 narrow-workflow users are on it or 400. Adding users stops being a licensing event.",
  },
  {
    title: "You keep one source of truth",
    body: "The portal reads and writes the same ServiceNow records through its APIs — no second database, just a better front end for the users who need less.",
  },
];

export default function ServiceNowLicenseCostVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/servicenow-license-cost-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "ServiceNow License Cost vs. a Custom Portal",
        name: "ServiceNow License Cost vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "ServiceNow license cost reduction" },
          { "@type": "Thing", name: "ServiceNow fulfiller licensing" },
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
          { "@type": "ListItem", position: 3, name: "ServiceNow License Cost vs. Custom Portal", item: url },
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
                <span className="eyebrow">ServiceNow License Costs</span>
                <h1 className="display reveal">
                  Keep ServiceNow. <em>Cut the seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  ServiceNow prices around fulfillers — the agents who live in
                  the platform. Light approvers, field techs, ops staff, and
                  partners who touch one narrow workflow usually get billed a
                  full agent license anyway. A custom portal gives those users
                  exactly what they need, wired into ServiceNow in real time, on
                  one flat fee instead of a premium seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep ServiceNow</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way API integration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a portal cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-seat savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The model, in plain terms</div>
                  <p className="body mt-3">
                    ServiceNow doesn&apos;t publish list prices — plans are
                    quote-based — but the model is public: fulfiller (agent)
                    users carry the premium, while requesters who only submit or
                    track are handled separately. The expensive gap is everyone
                    in between: users on a full fulfiller license who only need
                    one narrow workflow.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    A flat-fee custom portal serves those users without a
                    fulfiller seat — and costs the same whether there are 10 of
                    them or 400.
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
                <h2 className="h1 mt-3">Why fulfiller pricing <em>hits light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">ServiceNow licensing is built around the full-time agent. Everyone lighter than that is where the overpayment concentrates.</p>
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

        {/* MODEL BREAKDOWN */}
        <section className="section is-canvas" id="license-model">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">ServiceNow access, tier by tier</span>
                <h2 className="h1 mt-3">Fulfiller, requester, <em>or a portal you own.</em></h2>
              </div>
              <div>
                <p className="lede">ServiceNow already separates users by how they work. Here&apos;s how those tiers compare to a flat-fee custom portal for the narrow-workflow group.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access type</th>
                    <th>What it&apos;s built for</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Fulfiller / agent license</td><td>Full-time agents who work and resolve records across the platform</td><td className="is-no">Yes — premium per user</td></tr>
                  <tr><td className="feat">Requester access</td><td>Users who only submit or track requests</td><td className="is-no">Handled separately — but limited to submit/track</td></tr>
                  <tr><td className="feat">Full fulfiller seat for a narrow workflow</td><td>The expensive gap: paying an agent rate for one repeatable process</td><td className="is-no">Yes — premium per user</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>A purpose-built tool for the narrow-workflow users, synced to ServiceNow</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same flat fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              ServiceNow does not publish list pricing; plans are quoted per customer and vary by product, edition, and negotiated contract. The table above describes the publicly documented licensing model, not a quote — confirm current terms with ServiceNow or your reseller. The point is structural: even the right tier still bills per person, which is the gap a flat-fee custom portal closes. Use the <Link href="/savings-calculator" className="link">savings calculator</Link> to model your own numbers.
            </p>
          </div>
        </section>

        {/* NOT ANTI-SERVICENOW */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not an audit.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most ServiceNow cost advice falls into two camps: reclaim or
                  right-size the licenses you already have (an audit or SAM
                  tool), or move off the platform entirely (a migration). Both
                  have a place — but neither addresses fulfiller seats that are
                  being used, just lightly. A custom portal is the option for
                  that middle group: it doesn&apos;t touch your ServiceNow
                  contract or your data, it just gives the users who need less a
                  tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Right-size the obvious seats first</div>
                      <p className="fl-body">Reclaim inactive fulfiller licenses and move pure submit/track users to requester access before you build anything new.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut the narrow-workflow seats</div>
                      <p className="fl-body">The users who need one repeatable process — not the full agent console — are where a custom portal cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Migrate only if the platform itself doesn&apos;t fit</div>
                      <p className="fl-body">If ServiceNow no longer suits your core agents, that&apos;s a separate decision — this page is about seats that don&apos;t need to be full fulfiller seats at all.</p>
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
                <span className="eyebrow">Where this fits</span>
                <h2 className="h1 mt-3">The same play, <em>across your stack.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to your system of record, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The same per-seat playbook for Salesforce &amp; HubSpot — reclaim, right-size, or replace the seat.</p>
                <span className="link">See the full guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current seat count and rate and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce or HubSpot? See the seat-cost math →</Link>
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
                <p className="lede">Migration risk, the fulfiller model, integration, and cost.</p>
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

        <LeadForm source="ServiceNow License Cost vs Custom Portal page" heading="See what your fulfiller seats are costing" showSeatQualifiers sub="Tell us roughly how many ServiceNow users you run and what they do. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep ServiceNow. <em>Stop paying agent rates for light users.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually work in ServiceNow, show where a portal cuts the fulfiller bill, and give you a fixed quote in 48 hours.</p>
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
