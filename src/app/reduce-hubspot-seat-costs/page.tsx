import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge SPOKE mirroring the Salesforce-first cost pages for HubSpot demand.
// HubSpot moved to seat-based pricing (paid "core" seats billed per user;
// free view-only seats can't take most actions), so the exact per-seat wedge
// applies: keep HubSpot as the system of record, move light users to a
// flat-fee custom portal that syncs via the HubSpot API. Distinct commercial
// intent from /reduce-crm-licensing-costs (CRM-agnostic framework) and
// /custom-portal-development (the product). No fabricated pricing — the seat
// model is described qualitatively and the calculator is offered for numbers.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot seat-based licensing costs without leaving HubSpot — move light users to a flat-fee custom portal that syncs via API. New customers: free build.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot seat-based pricing alternative",
    "HubSpot too expensive alternative",
    "HubSpot view-only seat",
    "custom portal HubSpot integration",
    "reduce per-seat license costs",
    "HubSpot light user cost",
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
      "HubSpot bills per paid seat, even for light users. See how a flat-fee custom portal cuts the bill without leaving HubSpot. New customers: free build.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce HubSpot seat costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Seat Costs | Ardn",
    description:
      "HubSpot bills per paid seat, even for light users. See how a flat-fee custom portal cuts the bill without leaving HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How does a custom portal reduce our HubSpot costs?",
    a: "HubSpot's paid seats are billed per user across its Hubs, even for people who only need a narrow slice — reps checking a record, ops staff updating a status, partners submitting a request. We build a custom portal that gives those users exactly what they need, integrated live with HubSpot, on one flat fee instead of a paid seat each. HubSpot stays your system of record; you simply stop paying seats for light users.",
  },
  {
    q: "Do we have to leave HubSpot?",
    a: "No — that's the whole point. You keep HubSpot and everything in it. The portal connects through the HubSpot API and stays in sync both ways, so your power users keep working in HubSpot while lighter users move to the portal. Nothing gets ripped out and nothing gets migrated.",
  },
  {
    q: "Aren't HubSpot's free view-only seats enough to cut costs?",
    a: "Only up to a point. Free view-only seats let someone look at data, but they can't take most actions — they can't reliably update records, move a deal, or run the workflow the person is actually there to do. The moment a light user needs to act, they need a paid seat. A custom portal is the difference: it lets that light user transact against HubSpot without a paid seat at all, so you remove the cost instead of just capping the view.",
  },
  {
    q: "Which users make sense to move off HubSpot seats?",
    a: "The ones who touch HubSpot for a handful of tasks rather than living in it: field and inside sellers who check or update a few records, operations and back-office staff, partners and vendors, and customers who self-serve. Power users — marketers, RevOps, full-time reps — stay in HubSpot. It's the long tail of light users where per-seat pricing overcharges the most.",
  },
  {
    q: "How does the data stay accurate across HubSpot and the portal?",
    a: "The portal integrates two-way with HubSpot through its API, reading and writing the same records in real time. There's one source of truth — the portal is a tailored window into your HubSpot data, not a separate copy that drifts out of sync — and every user's access follows the permissions you define in HubSpot.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the recurring seat savings typically dwarf the subscription.",
  },
];

const reasons = [
  {
    title: "Paid seats scale with headcount",
    body: "Every user who needs to act in HubSpot needs a paid seat. Add people — reps, ops, partners — and the bill climbs automatically, forever.",
  },
  {
    title: "Light users pay near-full price",
    body: "Seat pricing is built around the power user who lives in HubSpot. Someone who touches it twice a day usually costs about the same — the lighter the use, the worse the value.",
  },
  {
    title: "View-only seats can't transact",
    body: "Free view-only seats look like a saving, but they can't do the one thing a light user is there for. To act, they need a paid seat again.",
  },
];

export default function ReduceHubspotSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-seat-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "HubSpot Seat-Cost Reduction via Custom Portal",
        serviceType: "Custom Portal Development & HubSpot Integration",
        description:
          "Ardn builds and operates custom portals that integrate with HubSpot and move light users off paid per-seat licenses onto a flat-fee portal — cutting cost without replacing HubSpot. Built via the AI Forge Framework under one monthly subscription.",
        url,
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
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
                  HubSpot&rsquo;s seat-based pricing charges for every paid user —
                  even the sellers, ops staff, and partners who only need a sliver
                  of it. We build a custom portal that gives those light users
                  exactly what they need, integrated live with HubSpot, on one flat
                  fee instead of a paid seat each. You keep HubSpot as your source
                  of truth — and stop overpaying to run it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot &amp; your data</span>
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
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way HubSpot API sync</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">On Salesforce or another CRM too? See the full playbook →</Link>
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
                <h2 className="h1 mt-3">Why HubSpot&rsquo;s seat model <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot bills per paid seat across its Hubs. That&rsquo;s fair for people who live in it — and expensive for everyone who doesn&rsquo;t.</p>
              </div>
            </div>
            <div className="grid-3">
              {reasons.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW — keep HubSpot, cut cost */}
        <section className="section is-canvas" id="how">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep HubSpot. Cut the cost.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  We&rsquo;re not here to pull you off HubSpot. It stays your system
                  of record, and your marketers and full-time reps keep working in it
                  exactly as they do now. We just stop you from paying paid-seat
                  prices for users who need a fraction of it — by giving them a
                  purpose-built portal that talks to HubSpot in real time. You get the
                  savings and a better tool, without the risk of a migration.
                </p>
                <p className="body mt-4">
                  <Link href="/custom-portal-development" className="link">See how custom portals work →</Link>
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it via the API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down seat — faster for them, and no paid seat for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-seat fees recur and grow with headcount. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your needs evolve.</p>
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
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The product</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to HubSpot, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework across any CRM — reclaim, right-size, or replace the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Compare per-seat HubSpot fees against a flat-fee portal for your own user counts.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <p className="body mt-4" style={{ textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/custom-software-development" className="link">Explore custom software development →</Link>
            </p>
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
                <p className="lede">How the savings work, whether you keep HubSpot, data sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what you could save" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and who barely uses them. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">See what you&rsquo;re overpaying. <em>Then keep HubSpot.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use HubSpot, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "16px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Prefer to talk now? Call <a href="tel:+14078155303" style={{ color: "#fff", fontWeight: 600 }}>+1 (407) 815-5303</a>.
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/custom-portal-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Explore custom portal development →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
