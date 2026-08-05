import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke targeting the high-volume commercial term the Salesforce
// optimization consultancies rank for ("salesforce license optimization",
// "reduce salesforce license costs"). Every ranking competitor lists the same
// 5 in-platform tactics (audit, downgrade tier, kill add-ons, negotiate,
// right-size) and STOPS there. This page matches that intent, then adds the
// terminal move none of them offer: move light + external users off Salesforce
// licensing entirely into a flat-fee custom portal synced via API. Distinct
// from /reduce-crm-licensing-costs (CRM-generic problem framework) and
// /compare/salesforce-seat-cost-vs-custom-portal (the cost-math comparison).
// No fabricated pricing: Sales Cloud Enterprise (~$165/user/mo) and Platform
// (~$25/user/mo) are Salesforce's own public list prices, labeled illustrative,
// with the calculator offered for the reader's real negotiated rate.
export const metadata: Metadata = {
  title: "Salesforce License Optimization: 6 Ways to Cut Cost | Ardn",
  description:
    "Six proven ways to cut Salesforce license costs — reclaim unused seats, right-size tiers, negotiate at renewal, then move light users to a flat-fee portal.",
  keywords: [
    "salesforce license optimization",
    "reduce salesforce license costs",
    "cut salesforce licensing costs",
    "salesforce license cost reduction",
    "salesforce platform license",
    "salesforce license audit",
    "salesforce unused licenses",
    "move light users off salesforce",
    "salesforce renewal negotiation",
    "custom portal to reduce salesforce seats",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/salesforce-license-optimization",
    languages: {
      "en-US": "https://ardncloudsolutions.com/salesforce-license-optimization",
      "x-default": "https://ardncloudsolutions.com/salesforce-license-optimization",
    },
  },
  openGraph: {
    title: "Salesforce License Optimization — 6 Ways to Cut Cost | Ardn",
    description:
      "Match every in-platform tactic the consultancies list — then the move they omit: pull light users off Salesforce licensing onto a flat-fee custom portal.",
    url: "https://ardncloudsolutions.com/salesforce-license-optimization",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce license optimization — six ways to cut Salesforce license costs, by Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce License Optimization: 6 Ways to Cut Cost | Ardn",
    description:
      "Reclaim unused seats, right-size tiers, negotiate at renewal — then move light users to a flat-fee custom portal that breaks the per-seat model.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How can I reduce Salesforce license costs without losing functionality?",
    a: "Start with the levers that change nothing for active power users: reclaim inactive and duplicate seats at renewal, and move users who don't need CRM-specific objects to a cheaper license tier. Neither touches how your core team works. The larger, more durable saving comes from the light and external users — sellers, ops staff, partners, customers — who touch Salesforce for a sliver of work: give them a purpose-built portal wired into Salesforce through its API, on one flat fee, and they keep the exact functionality they need without a full seat.",
  },
  {
    q: "What is a Salesforce Platform license and how much does it save?",
    a: "A Platform license lets a user run custom apps and access core CRM objects like accounts and contacts, but not sales-specific objects such as opportunities, forecasts, or leads. For users who only need custom functionality it lists far below a full Sales Cloud seat — Salesforce publishes Platform Starter at roughly $25/user/month versus about $165/user/month for Sales Cloud Enterprise. It's a real saving, but it's still a per-seat license: the cost still grows with every user you add.",
  },
  {
    q: "When can I actually reduce my Salesforce seat count?",
    a: "At renewal. Salesforce contracts generally don't allow mid-term seat reductions, so any seats you're not using roll forward — often at an uplifted rate — until the contract ends. That makes the 60–90 days before renewal the window to run an audit, decide which users to reclaim, downgrade, or move to a portal, and negotiate the new term. Miss it and you carry the waste another year.",
  },
  {
    q: "Isn't a license audit enough on its own?",
    a: "An audit is the right first step, but it only recovers seats that are unused. It can't shrink the cost of seats that are genuinely in use — just lightly. That second category is usually the bigger overpayment, because per-seat pricing bills a light user almost the same as a power user. Optimization gets you a smaller bill within the per-seat model; moving light users to a flat-fee portal removes them from the per-seat model entirely.",
  },
  {
    q: "Do I have to leave Salesforce to optimize my licensing?",
    a: "No. Every tactic here keeps Salesforce as your system of record. Reclaiming, downgrading, and negotiating all happen inside your existing contract. A custom portal sits alongside Salesforce and syncs through its API, so power users keep working in Salesforce exactly as they do today while light users move to a focused, flat-fee tool. Nothing gets migrated.",
  },
  {
    q: "How long does it take to move light users to a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the portal costs the same whether 20 light users are on it or 400.",
  },
];

const strategies = [
  {
    tag: "Strategy 1 — Reclaim",
    title: "Reclaim inactive & duplicate seats",
    body: "The fastest, lowest-risk saving: deactivating seats for people who left, changed roles, or were provisioned 'just in case' changes nothing for active users. Audit login activity and right-size at renewal.",
    link: { href: "/license-guard", label: "Automate the scan with License Guard →" },
  },
  {
    tag: "Strategy 2 — Right-size the tier",
    title: "Downgrade full seats to the right license",
    body: "Users who only need custom apps and core objects — not opportunities or forecasts — often don't need a full Sales Cloud seat. A Platform license lists far lower. Cheaper, but still billed per head.",
  },
  {
    tag: "Strategy 3 — Trim add-ons",
    title: "Cut editions & add-ons you've outgrown",
    body: "Data storage, sandboxes, CPQ, and feature add-ons quietly stack onto renewals. Map what's actually used against what you're billed for, and drop the line items no team can point to.",
  },
  {
    tag: "Strategy 4 — Negotiate",
    title: "Negotiate at renewal — the only cut window",
    body: "Seat reductions generally aren't allowed mid-term, so renewal is your leverage point. Come in with a usage audit in hand 60–90 days out, before list-price uplifts roll forward automatically.",
  },
  {
    tag: "Strategy 5 — Consolidate",
    title: "Retire tools that duplicate the CRM",
    body: "Standalone tools bolted alongside Salesforce for one workflow — forms, portals, scheduling, light data entry — often duplicate what a single custom build could absorb, cutting a separate per-seat bill too.",
  },
  {
    tag: "Strategy 6 — Break the model",
    title: "Move light & external users to a flat-fee portal",
    body: "The move the optimization guides omit. Give the users who need a sliver of Salesforce a purpose-built portal wired into it via API, on one flat fee no matter how many you add. Cost stops scaling with headcount — not a cheaper seat, no seat.",
    link: { href: "/custom-portal-development", label: "See how custom portals work →" },
  },
];

export default function SalesforceLicenseOptimizationPage() {
  const url =
    "https://ardncloudsolutions.com/salesforce-license-optimization";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Salesforce License Optimization: 6 Ways to Cut the Bill",
        name: "Salesforce License Optimization: 6 Ways to Cut the Bill",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license optimization" },
          { "@type": "Thing", name: "Salesforce license cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Salesforce License Optimization", item: url },
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
                <span className="eyebrow">Salesforce License Optimization</span>
                <h1 className="display reveal">
                  Salesforce license optimization: <em>six ways to cut the bill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most guides on cutting Salesforce cost list the same five
                  in-platform moves — reclaim, downgrade, trim, negotiate,
                  consolidate — and stop there. Those are real savings, and
                  they&rsquo;re all here. But they all leave you inside the
                  per-seat model. There&rsquo;s a sixth move that breaks it:
                  pulling light and external users off Salesforce licensing
                  entirely, onto a flat-fee portal. Here&rsquo;s all six, in the
                  order to use them.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge is-emerald">New customers: we build the portal free</span>
                  <span className="badge">Keep Salesforce as your system of record</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your savings →</Link>
                </div>
                <p className="body" style={{ marginTop: "12px", fontSize: "13px", color: "#6b7280" }}>
                  30-min call &middot; fixed quote in 48 hours &middot; you own the IP &middot; no obligation
                </p>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The six levers</div>
                  <ul className="features mt-3">
                    <li>1. Reclaim inactive &amp; duplicate seats</li>
                    <li>2. Downgrade to the right license tier</li>
                    <li>3. Trim add-ons you&rsquo;ve outgrown</li>
                    <li>4. Negotiate at renewal</li>
                    <li>5. Retire tools that duplicate the CRM</li>
                    <li>6. Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only #6 breaks the link between cost and headcount.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">On HubSpot or another CRM? See the CRM-wide guide →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHY OPTIMIZATION ALONE HITS A FLOOR */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where optimization stops</span>
                <h2 className="h1 mt-3">Optimization has <em>a floor. Light users are it.</em></h2>
              </div>
              <div>
                <p className="lede">The first five levers all make your per-seat bill smaller. None of them make it stop scaling with headcount — because they never leave the per-seat model.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">A cheaper seat is still a seat</h3>
                <p className="body">Downgrading a user from Sales Cloud to Platform lowers the line item, but you still pay per person and the bill still grows every time you hire.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Audits can&rsquo;t touch used seats</h3>
                <p className="body">Reclaiming only recovers seats nobody uses. The seats that are used lightly — the majority in most orgs — are invisible to an audit.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">External users shouldn&rsquo;t be seats at all</h3>
                <p className="body">Partners, brokers, and customers often sit on internal or community licenses by default, simply because nothing else was ever built for them.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: Salesforce lists Sales Cloud Enterprise at roughly
              $165/user/month and Platform Starter at roughly $25/user/month. A
              flat-fee portal costs the same at 20 light users or 400. (Public
              list prices shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* THE SIX STRATEGIES */}
        <section className="section is-canvas" id="strategies">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The playbook</span>
                <h2 className="h1 mt-3">Six levers, <em>in order.</em></h2>
              </div>
              <div>
                <p className="lede">Work top to bottom. The first four tighten your existing contract; the last two change the model that generates the bill.</p>
              </div>
            </div>
            <div className="grid-3">
              {strategies.map((s) => (
                <div className="card" key={s.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{s.tag}</span>
                  <h3 className="h3 mt-2">{s.title}</h3>
                  <p className="body">{s.body}</p>
                  {s.link && (
                    <Link href={s.link.href} className="link" style={{ display: "inline-block", marginTop: "10px" }}>
                      {s.link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHICH USERS MOVE WHERE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Match the fix to the user</span>
                <h2 className="h1 mt-3">Which Salesforce user <em>goes where.</em></h2>
              </div>
              <div>
                <p className="lede">Most orgs use several levers at once. This routes each type of user to the lever that fits.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right lever</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Needs custom apps, not sales objects</td><td>Downgrade to a Platform license</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              A framework, not a quote. The saving on the third row depends on how many light users you have and your negotiated rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link>, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically — the fastest, lowest-risk lever (Strategy 1).</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Strategy 6</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light and external users off per-seat Salesforce licenses onto a flat-fee portal wired into your org.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The CRM-wide licensing-cost guide →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/custom-partner-portal-development" className="link">Cut per-login partner &amp; broker portal seats →</Link>
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
                <p className="lede">Functionality, Platform licenses, the renewal window, and moving light users.</p>
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

        <LeadForm source="Salesforce License Optimization page" heading="See where your Salesforce bill is leaking" showSeatQualifiers sub="Tell us roughly how many Salesforce seats you run and how many are light users. We'll come back with which levers cut the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Optimize the seats you keep. <em>Remove the ones you don&rsquo;t need.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use Salesforce, show which of the six levers cut the most, and give you a fixed quote in 48 hours.</p>
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
