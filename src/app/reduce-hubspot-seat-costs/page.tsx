import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page. The pillar (/reduce-crm-licensing-costs) and the seat-cost
// comparison are CRM-agnostic / Salesforce-led; nothing on the site owns the
// HubSpot-specific "cut Sales/Service Hub seat costs, keep HubSpot" money query.
// SERP research: the entire per-seat cost-reduction SERP is Salesforce-only, so
// the HubSpot angle is near-uncontested. Positioning matches the wedge exactly:
// keep HubSpot as the system of record, move light/external users to a flat-fee
// custom portal synced via the HubSpot API. No fabricated pricing — HubSpot's
// per-seat structure and free view-only access are publicly documented, shown
// illustratively, and the calculator is offered for real numbers.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot Sales & Service Hub per-seat costs without switching CRMs. Move light users to a flat-fee custom portal synced to HubSpot — keep HubSpot as-is.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot Sales Hub seat cost alternative",
    "HubSpot per-seat pricing alternative",
    "reduce HubSpot per-seat license costs",
    "HubSpot custom portal integration",
    "HubSpot view-only seats",
    "custom portal to reduce HubSpot seats",
    "HubSpot cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "How to Reduce HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot Sales & Service Hub per-seat costs without switching CRMs. Move light users to a flat-fee custom portal synced to HubSpot via its API.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce HubSpot seat costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Seat Costs | Ardn",
    description:
      "Cut HubSpot per-seat costs without switching CRMs — move light users to a flat-fee custom portal synced to HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I cut HubSpot costs without leaving HubSpot?",
    a: "HubSpot charges a paid seat for every user who needs to create or edit records in Sales Hub or Service Hub. Most orgs are paying those seats for people who only need to view data or do one or two narrow tasks. We build a custom portal wired into your HubSpot through its API, so those light users work in the portal on one flat fee while HubSpot stays exactly where it is — the system of record for your power users.",
  },
  {
    q: "What about HubSpot's free view-only seats?",
    a: "HubSpot's free view-only access is genuinely useful for people who only need to look at dashboards and records. The gap is the users who need to do a little more than view — update a status, submit a request, check inventory, log an interaction — but nowhere near enough to justify a full paid seat. That in-between group is exactly who a flat-fee portal serves best: they get a purpose-built tool that reads and writes HubSpot, without a paid seat each.",
  },
  {
    q: "Do the portal and HubSpot stay in sync?",
    a: "Yes — the integration is two-way and live. The portal reads and writes the same HubSpot records through the API, so there is no second database drifting out of sync. HubSpot remains the single source of truth; the portal is a tailored window into the data your team already trusts.",
  },
  {
    q: "Which HubSpot users make sense to move to a portal?",
    a: "Sellers and reps who check a handful of screens, operations and back-office staff updating records, partners and vendors submitting or tracking requests, and customers who need self-service. Anyone who lives in HubSpot all day keeps their paid seat — it is worth it for them. The saving comes from the majority who use a sliver of it.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — new customers pay nothing for the one-time build. The portal costs the same whether you move 10 light users or 400, so the recurring seat savings typically dwarf the subscription.",
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
        headline: "How to Cut HubSpot Seat Costs Without Switching CRMs",
        name: "How to Cut HubSpot Seat Costs Without Switching CRMs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot seat cost reduction" },
          { "@type": "Thing", name: "Per-seat pricing" },
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
                  Cut your HubSpot seat bill — <em>keep HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot charges a paid Sales or Service Hub seat for everyone who
                  needs more than a read-only view — even the sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks. We
                  build a custom portal wired into your HubSpot through its API, so
                  those light users move to one flat fee instead of a seat each.
                  HubSpot stays your system of record. Nothing gets migrated.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way API sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>HubSpot stays the system of record</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way API sync, one source of truth</li>
                    <li>Sellers, ops, partners &amp; customers</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with the full CRM cost-cutting guide →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHY THE BILL CLIMBS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the money goes</span>
                <h2 className="h1 mt-3">Why HubSpot seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A paid HubSpot seat is priced for someone who works the CRM all day. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Paid seats for narrow use</h3>
                <p className="body">A rep who runs pipeline all day and a seller who updates one field twice a day both need a paid seat. The lighter the use, the worse the value per seat.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">View-only isn&apos;t always enough</h3>
                <p className="body">Free view-only access covers pure lookups, but the moment a light user needs to update or submit something, they get pushed onto a full paid seat.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs to do anything adds another recurring paid seat — permanently, unless the model changes.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              HubSpot&apos;s paid Sales and Service Hub seats are billed per user on top of your plan, while view-only access is free. A flat-fee portal costs the same at 10 light users or 400. (Pricing structure shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own numbers.)
            </p>
          </div>
        </section>

        {/* THE APPROACH */}
        <section className="section is-canvas" id="approach">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">The approach</span>
                <h2 className="h1 mt-3">Keep HubSpot. <em>Move the light users.</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions. HubSpot stays the system of record on every option
                  here. Your power users keep working exactly as they do today.
                  All that changes is that the users who need less stop paying for
                  a seat built for someone who needs everything.
                </p>
                <p className="body mt-4">
                  Start by handing pure lookups to HubSpot&apos;s free view-only
                  access. Then, for the in-between group that needs to update,
                  submit, or self-serve, we build a purpose-built portal wired into
                  HubSpot — so cost stops scaling with headcount.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Free view-only first</div>
                      <p className="fl-body">Anyone who only needs to look at records or dashboards goes on HubSpot&apos;s free view-only access — no portal needed.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The users who need to do a little more than view are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">One source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time through the API — no second database drifting out of sync.</p>
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
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind the saving.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid HubSpot seats onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework for any CRM — reclaim, right-size, or replace the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platforms →</Link>
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
                <p className="lede">Keeping HubSpot, view-only seats, sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot users you have and how many are light users. We'll come back with how much a flat-fee portal could save — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Stop paying full seats for <em>light HubSpot users.</em>
              </h2>
              <p className="lede">
                30-minute free call. Tell us how your team uses HubSpot and we&rsquo;ll
                show exactly which users a flat-fee portal should move — and what it saves.
              </p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">
                  Book your free call
                </a>
                <Link href="/savings-calculator" className="btn btn-outline-light btn-lg">
                  Or run the savings calculator
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
