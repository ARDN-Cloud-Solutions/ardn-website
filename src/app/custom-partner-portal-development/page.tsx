import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke page: custom PARTNER / VENDOR / DISTRIBUTOR portals. Distinct from
// /custom-portal-development (general seller/ops/customer portals) — this page
// owns the highest per-seat external bill: Salesforce Partner Community / PRM
// login licenses and per-partner Experience Cloud seats. Positioning is the
// same wedge — "keep your CRM, cut the bill" — applied to the external partner
// network, which turns over and scales worst under per-seat pricing. No client
// names / invented metrics; publicly listed license mechanics only, framed as
// value prop. Targets "Salesforce Partner Community alternative", "partner
// portal software", "vendor/distributor portal cost".
export const metadata: Metadata = {
  title: "Custom Partner Portal — Cut Per-Seat CRM Costs | Ardn",
  description:
    "Custom partner, vendor & distributor portals that replace pricey Partner Community login seats — synced to your CRM, one flat fee. New customers: free build.",
  keywords: [
    "custom partner portal development",
    "partner portal software",
    "vendor portal development",
    "distributor portal",
    "Salesforce Partner Community alternative",
    "Salesforce PRM alternative",
    "partner relationship management portal",
    "reduce Partner Community license cost",
    "external user portal cost",
    "flat-fee partner portal",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-partner-portal-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-partner-portal-development",
      "x-default": "https://ardncloudsolutions.com/custom-partner-portal-development",
    },
  },
  openGraph: {
    title: "Custom Partner & Vendor Portal Development | Ardn",
    description:
      "Replace per-login Partner Community seats with a custom partner, vendor & distributor portal wired to your CRM — one flat fee, any number of partners. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-partner-portal-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom partner and vendor portal development that cuts per-seat CRM costs, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Partner & Vendor Portal Development | Ardn",
    description:
      "Replace per-login Partner Community seats with a flat-fee custom portal wired to your CRM. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How is a custom partner portal cheaper than Salesforce Partner Community?",
    a: "Partner and PRM licenses bill for every external login — so the cost climbs with the size of your partner network, not with the value each partner delivers. A custom partner portal gives your partners exactly the screens they need, integrated live with your CRM, on one flat monthly fee no matter how many partners you add. Your CRM stays the system of record; you just stop paying a per-login seat for every dealer, reseller, broker, or vendor.",
  },
  {
    q: "Do we have to leave Salesforce or replace our Partner Community?",
    a: "No. The portal connects to Salesforce (or your CRM) through its API and stays in sync both ways. Your internal team keeps working in Salesforce exactly as they do today; only the external partners move to the purpose-built portal. Nothing gets migrated and nothing gets ripped out.",
  },
  {
    q: "What kinds of partners is this for?",
    a: "Any external group you currently pay a per-seat or per-login license for: channel partners and resellers, dealers and distributors, brokers and agents, franchisees, suppliers and vendors. The bigger and more seasonal your partner network, the more the per-login model overcharges you — and the more a flat fee saves.",
  },
  {
    q: "What can partners actually do in the portal?",
    a: "Whatever their workflow needs — register and track deals, submit and check orders, file and follow claims or tickets, access pricing and enablement content, update their own records. Because it is built to your process, partners get a fast, focused tool instead of a stripped-down view of a platform they have to fight.",
  },
  {
    q: "Is our data safe, and who owns the portal?",
    a: "The portal reads and writes your CRM through its API, so there is no second copy of your data drifting out of sync, and partner access follows the permissions you define. You own the portal IP and your data outright; if you ever leave, you get a full export and documentation. No lock-in.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most partner portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring login-license savings typically dwarf the subscription.",
  },
];

const features = [
  {
    title: "Channel & Reseller Portals",
    body: "Deal registration, pipeline visibility, and enablement content for channel partners and resellers — synced to your CRM, without a per-login seat each.",
  },
  {
    title: "Dealer & Distributor Portals",
    body: "Ordering, inventory, and account tools for dealers and distributors, so a network of hundreds of external users no longer means hundreds of licenses.",
  },
  {
    title: "Broker & Agent Portals",
    body: "Submissions, quotes, and status tracking for brokers and agents — a purpose-built tool for the people who touch your CRM lightly but constantly.",
  },
  {
    title: "Vendor & Supplier Portals",
    body: "Onboard vendors and suppliers to submit, track, and collaborate — external users you should never be paying internal CRM or Partner Community seats for.",
  },
  {
    title: "Two-Way CRM Integration",
    body: "Live, bidirectional sync with Salesforce, HubSpot, or your CRM. One source of truth — the portal is a tailored window into the data you already trust.",
  },
  {
    title: "Flat Fee, Not Per-Login",
    body: "Add as many partners as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration as your network grows.",
  },
];

export default function CustomPartnerPortalDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-partner-portal-development#service",
        name: "Custom Partner & Vendor Portal Development",
        serviceType: "Custom Partner Portal Development & CRM Integration",
        description:
          "Ardn builds and operates custom partner, vendor, and distributor portals that integrate with your existing CRM and move external users off per-login Partner Community and PRM licenses onto a flat-fee portal — cutting cost without replacing your CRM. Built via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/custom-partner-portal-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-partner-portal-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-partner-portal-development#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Custom Partner Portal Development", item: "https://ardncloudsolutions.com/custom-partner-portal-development" },
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
                <span className="eyebrow">Custom Partner Portal Development</span>
                <h1 className="display reveal">
                  Partner portals: <em>keep your CRM, drop the per-login bill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Partner Community and PRM licenses charge for every external
                  login — so your bill grows with the size of your partner
                  network, not the value it delivers. We build custom partner,
                  vendor, and distributor portals that give those users exactly
                  what they need, integrated live with your existing CRM, on one
                  flat fee instead of a login license each. Keep Salesforce &mdash;
                  stop paying a seat for every dealer, broker, and reseller.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Integrates with your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-login</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you&apos;d save</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The partner-cost play</div>
                  <ul className="features mt-3">
                    <li>Keep your CRM &amp; your data</li>
                    <li>Move partners off per-login seats</li>
                    <li>Two-way integration, one source of truth</li>
                    <li>Channel, dealer, broker &amp; vendor portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
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
                <h2 className="h1 mt-3">Portals for the partners <em>you shouldn&apos;t pay a seat for.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is built to one partner group&apos;s workflow and wired into your CRM — so the data stays in one place and the login-license bill stops climbing with your network.</p>
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
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Compare Experience Cloud vs. a custom portal →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full Salesforce per-seat cost math →</Link>
              <Link href="/custom-portal-development" className="link">Also see internal seller, ops &amp; customer portals →</Link>
            </div>
          </div>
        </section>

        {/* WHY — the partner network is the worst-fit for per-seat */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Where per-login hurts most</span>
                <h2 className="h1 mt-3">Your partner network is <em>the worst fit for per-seat.</em></h2>
                <p className="body mt-4">
                  Internal headcount is relatively stable. A partner network is
                  not — it turns over, spikes seasonally, and grows every time you
                  sign a new region or channel. Under per-login pricing, every one
                  of those swings is a licensing change. A flat-fee portal breaks
                  that link: the cost is the same whether you have fifty partners
                  or five hundred, so growth stops being a line-item negotiation.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your CRM stays put</div>
                      <p className="fl-body">No migration, no data move. The portal integrates alongside Salesforce or your CRM through its API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Partners get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down community view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Cost stops scaling with the network</div>
                      <p className="fl-body">Per-login fees recur and grow with every partner. A flat-fee portal turns that into a fixed line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your partner program evolves.</p>
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
                <p className="lede">How the savings work, integration, data security, and cost.</p>
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

        <LeadForm source="Custom Partner Portal Development page" heading="See what your partner logins cost you" showSeatQualifiers sub="Tell us which CRM you run and roughly how many partners have access. We'll come back with where a portal cuts your per-login costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop licensing every partner. <em>Keep every partner.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your partners actually use your CRM, show where a portal cuts the per-login bill, and give you a fixed quote in 48 hours.</p>
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
