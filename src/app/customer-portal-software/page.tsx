import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Commercial-intent landing page for the head term "customer / client portal
// software" — targeted at the BUILD-VS-BUY sub-intent where ARDN can actually
// win (the generic term is owned by per-seat SaaS listicles). Positioning is
// the wedge: SaaS portals bill per external user; a custom portal is a flat fee
// that doesn't climb with headcount, built AND run for you, wired into the CRM
// you keep. Feeds the /custom-portal-development service page and the seat-cost
// cluster. No fabricated clients/metrics; list prices labeled illustrative.
export const metadata: Metadata = {
  title: "Customer Portal Software: Build vs Buy | Ardn",
  description:
    "Customer & client portal software compared: per-user SaaS vs a custom flat-fee portal wired to your CRM. When to build vs buy — and how the costs really add up.",
  keywords: [
    "customer portal software",
    "client portal software",
    "custom customer portal software",
    "build vs buy customer portal",
    "customer portal software cost",
    "customer portal per user pricing",
    "client portal for CRM",
    "customer self-service portal",
    "flat-fee customer portal",
    "customer portal CRM integration",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/customer-portal-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/customer-portal-software",
      "x-default": "https://ardncloudsolutions.com/customer-portal-software",
    },
  },
  openGraph: {
    title: "Customer Portal Software: Build vs Buy | Ardn",
    description:
      "Per-user SaaS portals vs a custom flat-fee portal wired to your CRM. When to build vs buy customer/client portal software — and how the costs really compare.",
    url: "https://ardncloudsolutions.com/customer-portal-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Customer portal software — build vs buy, by Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Portal Software: Build vs Buy | Ardn",
    description:
      "Per-user SaaS vs a custom flat-fee portal wired to your CRM. When to build vs buy customer/client portal software.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is customer portal software?",
    a: "Customer portal software gives your customers, partners, or staff a secure, branded place to do a specific set of tasks — check order or case status, submit and track requests, view invoices, or self-serve answers — without giving them a full seat in your core system. It can be bought as a per-user SaaS product or built as a custom application wired into the CRM or database you already run.",
  },
  {
    q: "Should I build or buy a customer portal?",
    a: "Buy an off-the-shelf portal when your needs are generic, your user count is small, and you can live inside the vendor's template. Build a custom portal when per-user pricing compounds as you scale, when your workflow doesn't fit a template, or when the portal is a transactional surface over data you already own — orders, invoices, claims, regulated records. The tipping point is usually the number of light users: per-seat SaaS gets more expensive with every one you add, while a custom flat-fee portal costs the same at 20 users or 2,000.",
  },
  {
    q: "How much does customer portal software cost?",
    a: "Off-the-shelf portals typically bill per user per month — often anywhere from about $30 to $200 per user — so the bill grows directly with how many customers or partners you add. A custom portal is one flat monthly fee that covers the build, hosting, and ongoing changes, regardless of user count. Which one is cheaper depends almost entirely on how many light users you have; run the savings calculator for your own numbers.",
  },
  {
    q: "What is the difference between a customer portal and a CRM?",
    a: "Your CRM is the system of record where your team manages the full relationship. A customer portal is a focused, external-facing window onto a slice of that data — the handful of things a customer or partner actually needs to see or do. A well-built portal reads and writes the same CRM records in real time, so there is one source of truth, not a second database drifting out of sync.",
  },
  {
    q: "Does a custom customer portal integrate with my existing CRM?",
    a: "Yes. We build the portal to connect to Salesforce, HubSpot, or whatever you run through its API, with live two-way sync. Your CRM stays the system of record and keeps every permission you already define; the portal is simply a tailored surface on top of it. Nothing gets migrated or ripped out.",
  },
  {
    q: "Isn't building a custom portal slow and expensive?",
    a: "That's the reputation, and for traditional dev shops that quote six-figure projects over many months, it can be true. Our model is the opposite: most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call, on one flat monthly fee that covers the build, hosting, and changes. New customers pay nothing for the one-time build.",
  },
  {
    q: "Who maintains the portal after it launches?",
    a: "We do. Unlike a build-and-hand-off agency, we build AND run the portal — hosting, monitoring, security, and ongoing changes are all covered by the same flat monthly subscription, so it keeps pace with your business instead of going stale.",
  },
];

const buildVsBuy = [
  {
    title: "Pricing model",
    buy: "Per user, per month — the bill climbs with every customer or partner you add.",
    build: "One flat monthly fee — the same at 20 light users or 2,000.",
  },
  {
    title: "Fit to your workflow",
    buy: "You adapt to the vendor's template and roadmap.",
    build: "Shaped to your exact process — the users get a tool for their job, not a stripped-down platform view.",
  },
  {
    title: "CRM integration",
    buy: "Often shallow or add-on; data can drift into a second copy.",
    build: "Deep two-way sync with your CRM — one source of truth, in real time.",
  },
  {
    title: "Who runs it",
    buy: "You configure and maintain it, or pay for support tiers.",
    build: "Built AND run for you — hosting, changes, and monitoring included.",
  },
  {
    title: "Ownership",
    buy: "You rent access; leaving means exporting and rebuilding.",
    build: "You own the IP and your data, with full export if you ever leave.",
  },
];

const useCases = [
  {
    title: "Customer Self-Service",
    body: "A branded portal where customers check status, submit and track requests, and find answers — deflecting tickets without paying for a support seat each.",
  },
  {
    title: "Partner & Vendor Portals",
    body: "Onboard partners and vendors to submit, track, and collaborate — external users you should never be paying internal CRM or community seats for.",
  },
  {
    title: "Client & Account Portals",
    body: "Give clients a secure home for documents, invoices, and updates — the professional-services surface that per-user portal tools charge steeply to provide.",
  },
  {
    title: "Order & Invoice Portals",
    body: "A transactional window over the orders, invoices, and records you already hold — exactly the case where a custom build beats renting a template.",
  },
];

export default function CustomerPortalSoftwarePage() {
  const url = "https://ardncloudsolutions.com/customer-portal-software";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom Customer Portal Software",
        serviceType: "Custom Customer & Client Portal Development",
        description:
          "Ardn builds and operates custom customer, client, and partner portals that integrate with your existing CRM — a flat-fee alternative to per-user portal software that keeps your CRM as the system of record.",
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
          { "@type": "ListItem", position: 2, name: "Customer Portal Software", item: url },
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
                <span className="eyebrow">Customer Portal Software</span>
                <h1 className="display reveal">
                  Customer portal software: <em>build vs buy.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Off-the-shelf customer and client portal software bills per
                  user — so the cost climbs with every customer, partner, or
                  light user you add. A custom portal does the opposite: one flat
                  fee, wired live into the CRM you already run, shaped to your
                  exact workflow, built <em>and</em> run for you. Here&apos;s how to
                  decide which one fits.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Integrates with your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-user</span>
                  <span className="badge is-canvas">Live in 2–6 weeks</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free portal scoping call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-user savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Why buyers switch to custom</div>
                  <ul className="features mt-3">
                    <li>Per-user pricing that never stops climbing</li>
                    <li>A template that won&apos;t fit your workflow</li>
                    <li>Data drifting into a second system</li>
                    <li>Hundreds of light users you shouldn&apos;t pay seats for</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-user pricing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* BUILD VS BUY */}
        <section className="section" id="build-vs-buy">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Build vs buy</span>
                <h2 className="h1 mt-3">Rent a template, <em>or own the tool.</em></h2>
              </div>
              <div>
                <p className="lede">Off-the-shelf portal software wins for small, generic needs. Custom wins the moment per-user pricing compounds or the template stops fitting.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th></th>
                    <th>Off-the-shelf SaaS portal</th>
                    <th>Custom portal from Ardn</th>
                  </tr>
                </thead>
                <tbody>
                  {buildVsBuy.map((row) => (
                    <tr key={row.title}>
                      <td className="feat">{row.title}</td>
                      <td className="is-no">{row.buy}</td>
                      <td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>{row.build}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: per-user portal tools commonly list anywhere from about
              $30 to $200 per user per month, while a flat-fee portal costs the
              same regardless of user count. (List prices shown for illustration
              only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own numbers.)
            </p>
          </div>
        </section>

        {/* USE CASES */}
        <section className="section is-canvas" id="use-cases">
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
            <div className="grid-2">
              {useCases.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">See how we build custom portals →</Link>
              <Link href="/custom-partner-portal-development" className="link">Partner &amp; vendor portals →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">How to cut per-seat CRM costs →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. custom portal →</Link>
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
                <p className="lede">Build vs buy, cost, CRM integration, and who runs it.</p>
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

        <LeadForm source="Customer Portal Software page" heading="See what a custom portal would cost you" showSeatQualifiers submitLabel="Show me my numbers" sub="Tell us which CRM you run and roughly how many portal users. We'll come back with a build-vs-buy comparison — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop renting seats <em>you can own.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your customers and partners actually use your systems, show where a custom portal beats per-user software, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portal development</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                You own the IP and data. No lock-in — cancel in 30 days.
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
