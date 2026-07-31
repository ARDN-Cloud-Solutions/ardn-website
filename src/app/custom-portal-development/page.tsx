import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Solution page anchored to a real delivered build: custom seller + operations
// portals that integrate with the client's CRM and offload light users from
// expensive per-seat licenses — cutting cost WITHOUT replacing the CRM.
// Positioning is "keep your tech, cut the cost," NOT "replace Salesforce."
// No client names / specific numbers (no proof cleared yet) — value-prop framing.
export const metadata: Metadata = {
  title:
    "Custom Portal Development — Cut CRM Costs | Ardn",
  description:
    "Custom seller, ops, partner & customer portals synced to your CRM — move light users off per-seat licenses onto one flat fee. New customers: free build.",
  keywords: [
    "custom portal development",
    "seller portal development",
    "operations portal",
    "partner portal development",
    "customer portal development",
    "client portal software",
    "customer portal software",
    "reduce CRM licensing costs",
    "reduce per-seat license costs",
    "Salesforce portal integration",
    "Experience Cloud alternative",
    "custom CRM portal",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-portal-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-portal-development",
      "x-default": "https://ardncloudsolutions.com/custom-portal-development",
    },
  },
  openGraph: {
    title: "Custom Portal Development — Cut CRM Costs | Ardn",
    description:
      "Custom portals that integrate with your CRM and move light users off per-seat licenses onto a flat fee. Cut costs without switching. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-portal-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom portal development — cut CRM costs while keeping your existing tech, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Portal Development — Cut CRM Costs, Keep Your Tech | Ardn",
    description:
      "Custom portals that integrate with your CRM and cut per-seat costs without switching platforms. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do custom portals reduce our CRM costs?",
    a: "Most CRM platforms charge a full per-seat license for every user — even people who only need a narrow slice of it, like sellers checking inventory, ops staff updating orders, or partners submitting requests. We build a custom portal that gives those users exactly what they need, integrated live with your CRM, on one flat fee instead of a per-seat license each. Your core CRM and data stay exactly where they are; you simply stop paying premium seats for light users.",
  },
  {
    q: "Do we have to leave Salesforce or our current CRM?",
    a: "No — that is the whole point. You keep your CRM and everything in it. The portal connects to it through its API and stays in sync both ways, so your power users keep working in the CRM while lighter users move to the portal. Nothing gets ripped out and nothing gets migrated.",
  },
  {
    q: "What kinds of portals do you build?",
    a: "Seller and sales portals, operations and back-office portals, partner and vendor portals, and customer self-service portals. Each is built to your exact workflow — the users get a clean tool focused on their job, not a stripped-down view of a platform they have to fight.",
  },
  {
    q: "How does the data stay accurate across both systems?",
    a: "The portal integrates two-way with your CRM, so it reads and writes the same records in real time. There is one source of truth — the portal is a tailored window into your CRM data, not a separate copy that drifts out of sync.",
  },
  {
    q: "How is this different from CRM community or portal licenses?",
    a: "Built-in community and portal license tiers still bill per user and limit what you can build. A custom portal is yours, runs on one flat monthly fee regardless of how many users you add, and is shaped exactly to your process instead of a vendor's template.",
  },
  {
    q: "Do all my users really need a full Salesforce or HubSpot license?",
    a: "Almost never. Per-seat pricing is built around the power user who lives in the platform, but most companies have far more light users — sellers, ops staff, partners, customers — who touch it for a handful of tasks. Those users don't need a full seat at all; they need a focused tool. Moving them to a custom portal doesn't just downgrade their license, it removes the seat entirely while your CRM stays the system of record.",
  },
  {
    q: "How is a custom portal different from portal software like Experience Cloud, CRMJetty, or a no-code builder?",
    a: "Those are all products you license — Experience Cloud bills per login or per member, productized portal add-ons and no-code builders (Softr, SuiteDash, and similar) bill per end-user or per subscription, and most still leave you to build and maintain the thing yourself. A custom portal from Ardn is the opposite on every axis: it's built and run for you, shaped to your exact workflow, integrated deeply with your CRM, and it runs on one flat fee you own — no per-seat or per-login meter stacked on top.",
  },
  {
    q: "Is our data secure, and who owns the portal?",
    a: "The portal reads and writes your CRM through its API, so there is no second copy of your data drifting out of sync, and every user's access follows the permissions you already define in your CRM. You own the portal IP and your data outright; if you ever leave, you get a full export and complete documentation. No lock-in.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring license savings typically dwarf the subscription.",
  },
];

const features = [
  {
    title: "Seller & Sales Portals",
    body: "Give reps, dealers, and field sellers a fast, focused tool for the handful of things they actually do — synced to your CRM, without a full seat each.",
  },
  {
    title: "Operations Portals",
    body: "Let back-office and ops users update orders, cases, and records through a purpose-built portal instead of an expensive license they barely use.",
  },
  {
    title: "Partner & Vendor Portals",
    body: "Onboard partners and vendors to submit, track, and collaborate — external users you should never be paying internal CRM seats for.",
  },
  {
    title: "Customer Self-Service",
    body: "A branded portal where customers check status, make requests, and find answers — deflecting tickets and keeping them out of paid seats entirely.",
  },
  {
    title: "Two-Way CRM Integration",
    body: "Live, bidirectional sync with Salesforce, HubSpot, or your CRM. One source of truth — the portal is a tailored window into the data you already trust.",
  },
  {
    title: "Flat Fee, Not Per-Seat",
    body: "Add as many portal users as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
];

export default function CustomPortalDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-portal-development#service",
        name: "Custom Portal Development",
        serviceType: "Custom Portal Development & CRM Integration",
        description:
          "Ardn builds and operates custom seller, operations, partner, and customer portals that integrate with your existing CRM and move light users off per-seat licenses onto a flat-fee portal — cutting cost without replacing your CRM. Built via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/custom-portal-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-portal-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-portal-development#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Custom Portal Development", item: "https://ardncloudsolutions.com/custom-portal-development" },
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
                <span className="eyebrow">Custom Portal Development</span>
                <h1 className="display reveal">
                  Custom portals: <em>keep your CRM, cut the bill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  You are likely paying full per-seat CRM licenses for people who
                  only use a sliver of it — sellers, ops staff, partners, field
                  teams. We build custom portals that give those users exactly what
                  they need, integrated live with your existing CRM, on one flat
                  fee instead of a license each. Nothing gets ripped out. You keep
                  your technology — and stop overpaying to run it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Integrates with your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">How it works</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep your CRM &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way integration, one source of truth</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "6px", fontSize: "13px", color: "#6b7280" }}>
                    No catch — you pay only the flat monthly subscription once it&rsquo;s live.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">Run your own per-seat savings numbers →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">Portals for the users <em>who don&apos;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is built to one group&apos;s workflow and wired into your CRM — so the data stays in one place and the licensing bill stops climbing.</p>
              </div>
            </div>
            <div className="grid-3">
              {features.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with how to cut CRM licensing costs →</Link>
              <Link href="/custom-partner-portal-development" className="link">Partner &amp; reseller portal (external users) →</Link>
              <Link href="/license-guard" className="link">Also reclaim unused licenses with License Guard →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">See the full per-seat vs. flat-fee cost breakdown →</Link>
            </div>
          </div>
        </section>

        {/* WHY — keep your tech, cut cost */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep your tech. Cut the cost.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  We are not here to pull you off the platforms you have invested
                  in. Your CRM stays the system of record. We just stop you from
                  paying premium per-seat prices for users who need a fraction of
                  it — by giving them a purpose-built portal that talks to your CRM
                  in real time. You get the savings and the better tool, without
                  the risk of a migration.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your CRM stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down platform view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-seat fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
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

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">How the savings work, integration, data sync, and cost.</p>
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

        <LeadForm source="Custom Portal Development page" heading="See what you could save" showSeatQualifiers sub="Tell us which CRM you run and roughly how many users. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">See what you&apos;re overpaying. <em>Then keep it.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use your CRM, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Same three flat-fee tiers power every build — Launch, Scale, and Enterprise. No per-seat pricing, ever.
              </p>
              <p style={{ marginTop: "8px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
