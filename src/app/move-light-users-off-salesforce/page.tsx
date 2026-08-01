import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke — bottom-of-funnel, high-intent page for the query family
// "move light users off Salesforce" / "reduce Salesforce seats for light users"
// / "Salesforce light user license". This is the most under-contested term in
// the per-seat wedge: the pages that rank for it (Salesforce partners, SAM
// vendors) only ever recommend cheaper Salesforce license TIERS — none of them
// tell you to move light users off the seat entirely into a flat-fee portal,
// because that cannibalizes partner revenue. ARDN is structurally free to say
// it. Distinct from the /reduce-crm-licensing-costs PILLAR (the 3-lever
// decision framework) and /custom-portal-development (the product): this page
// owns the persona-segmentation decision — which users stay on Salesforce and
// which move to a portal. No invented client names/metrics; Salesforce license
// mechanics are publicly listed and labeled illustrative.
export const metadata: Metadata = {
  title: "Move Light Users Off Salesforce Seats | Ardn",
  description:
    "Keep power users on Salesforce and move light users — sellers, ops, partners, customers — to a flat-fee custom portal. Cut per-seat costs without a migration.",
  keywords: [
    "move light users off Salesforce",
    "reduce Salesforce seats for light users",
    "Salesforce light user license",
    "Salesforce platform license for light users",
    "reduce Salesforce license costs",
    "cut Salesforce seat costs",
    "custom portal for Salesforce light users",
    "Salesforce Community license alternative",
    "flat-fee portal instead of Salesforce seats",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    languages: {
      "en-US": "https://ardncloudsolutions.com/move-light-users-off-salesforce",
      "x-default": "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    },
  },
  openGraph: {
    title: "Move Light Users Off Salesforce Seats — Keep Your CRM | Ardn",
    description:
      "Power users stay on Salesforce; light users move to a flat-fee custom portal wired into it. Cut per-seat costs without a migration. New customers: free build.",
    url: "https://ardncloudsolutions.com/move-light-users-off-salesforce",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Move light users off Salesforce seats onto a flat-fee custom portal, by Ardn",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Light Users Off Salesforce Seats | Ardn",
    description:
      "Keep power users on Salesforce; move light users to a flat-fee custom portal. Cut per-seat costs without a migration.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What counts as a 'light user' in Salesforce?",
    a: "Anyone who touches Salesforce for a narrow slice of work rather than living in it all day. Sellers checking inventory or pricing, ops staff updating an order or case status, partners submitting deals or claims, and customers checking their own records are all light users. They typically need to see and update a handful of objects — not the full CRM — yet per-seat pricing bills them at or near the same rate as a power user who runs pipeline all day.",
  },
  {
    q: "Why not just move light users to a cheaper Salesforce license tier?",
    a: "That is a valid first step, and for users who genuinely still need native Salesforce access it can be the right one. Salesforce sells lower tiers — Platform licenses, and Customer/Partner Community or Experience Cloud licenses for external users. But every one of those is still priced per user and still capped in what you can build for that person. For a truly light user, the cheaper tier trims the bill; a flat-fee portal removes the seat entirely. The portal wins when you have many light users, because its cost stops scaling with headcount.",
  },
  {
    q: "How do the light users still get their work done if they're off Salesforce?",
    a: "They move to a custom portal that is wired into Salesforce through its API and reads and writes the same records in real time. So they are not cut off from the data — they get a faster, purpose-built tool that shows only what their job needs, while Salesforce stays the single system of record. Nothing is copied or migrated; the portal is a tailored window into the CRM you already run.",
  },
  {
    q: "Won't we lose reporting or data integrity by taking users off seats?",
    a: "No. Because the portal syncs two-way with Salesforce, every action a light user takes lands on the same record your power users and reports already rely on. There is one source of truth, not a second database drifting out of sync. Your dashboards, automations, and audit trail keep working exactly as they do today.",
  },
  {
    q: "Which users should stay on Salesforce?",
    a: "Your power users — the people who live in the platform: sales reps running full pipeline, service agents working cases end to end, admins, and anyone who needs the breadth of the CRM daily. The goal is never to rip Salesforce out. It is to stop paying full-seat prices for the majority of users who only need a fraction of it, while keeping the platform intact for the people who need all of it.",
  },
  {
    q: "How many light users do we need before a portal is worth it?",
    a: "It depends on your negotiated seat rate and how many light users you have, so we won't quote a fixed break-even here. The mechanism is simple: per-seat fees recur and grow with every user you add, while a flat-fee portal costs the same at 20 light users or 400. Our savings calculator lets you plug in your own seat count and rate to see where the lines cross for your situation.",
  },
  {
    q: "How long does it take to stand up a portal and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const personas = [
  {
    title: "Sales & field sellers",
    body: "Reps, dealers, and field teams who check inventory, pricing, or their own deals — not run full pipeline. A focused seller portal beats a stripped-down CRM view.",
  },
  {
    title: "Operations & back-office",
    body: "Staff who update an order, case, or status a few times a day. They need a fast form wired to the CRM, not a full seat they barely open.",
  },
  {
    title: "Partners, vendors & distributors",
    body: "External users on Partner Community or PRM login seats — the highest per-seat external bill, and the network that scales worst under per-user pricing.",
  },
  {
    title: "Customers & members",
    body: "People checking status, making requests, or self-serving. A branded portal deflects tickets and keeps them out of paid seats entirely.",
  },
];

export default function MoveLightUsersOffSalesforcePage() {
  const url = "https://ardncloudsolutions.com/move-light-users-off-salesforce";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Move Light Users Off Salesforce Seats (Without Losing Them)",
        name: "How to Move Light Users Off Salesforce Seats (Without Losing Them)",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
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
          { "@type": "ListItem", position: 2, name: "Move Light Users Off Salesforce", item: url },
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
                <span className="eyebrow">Move Light Users Off Salesforce</span>
                <h1 className="display reveal">
                  Move light users off Salesforce seats — <em>keep your CRM.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most Salesforce orgs pay full per-seat prices for people who use
                  a sliver of the platform — sellers, ops staff, partners,
                  customers. You don&apos;t have to downgrade them to a cheaper
                  seat and keep paying per head. Keep your power users on
                  Salesforce, and move the light ones to a custom portal wired
                  into it on one flat fee. Nothing gets ripped out. The seat cost
                  just stops scaling with headcount.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Power users stay on Salesforce</span>
                  <span className="badge is-emerald">Light users move to flat fee</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The light-user play</div>
                  <ul className="features mt-3">
                    <li>Keep power users on Salesforce</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way sync — one source of truth</li>
                    <li>No rip-and-replace, no data move</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* THE PROBLEM */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Why light users cost the most</span>
                <h2 className="h1 mt-3">A seat priced for a power user, <em>paid by everyone lighter.</em></h2>
              </div>
              <div>
                <p className="lede">Per-seat pricing is built around the person who lives in the CRM. The overpayment lands on the majority who don&apos;t.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Same price, a fraction of the use</h3>
                <p className="body">A rep running pipeline all day and a seller who opens one screen twice a day usually cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Cheaper tiers still bill per head</h3>
                <p className="body">Platform and Community licenses trim the rate, but they&apos;re still per user and still capped in what you can build. The meter never stops running.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are most of the org</h3>
                <p className="body">In most mid-market orgs the light users outnumber the power users — so the overpayment is spread across the majority of your seat count.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: a full Sales Cloud Enterprise seat lists at roughly
              $165/user/month, and external Experience Cloud users bill per login
              or per member on top. A flat-fee portal costs the same at 20 light
              users or 400. (List prices shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* WHO MOVES */}
        <section className="section is-canvas" id="personas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Who moves to a portal</span>
                <h2 className="h1 mt-3">The users <em>who don&apos;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">Four groups almost always fit the light-user profile. Each gets a purpose-built portal wired into your CRM.</p>
              </div>
            </div>
            <div className="grid-2">
              {personas.map((p, i) => (
                <div className="card" key={p.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{p.title}</h3>
                  <p className="body">{p.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">See how custom seller, ops &amp; customer portals work →</Link>
              <Link href="/custom-partner-portal-development" className="link">Partners on Community login seats? See custom partner portals →</Link>
            </div>
          </div>
        </section>

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Who stays, who moves</span>
                <h2 className="h1 mt-3">Route each user <em>to the right home.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to segment your org. Most companies keep a core on Salesforce and move the long tail to a portal.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>Where they belong</th>
                    <th>Seat cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Power user — lives in the CRM</td><td>Stays on a full Salesforce seat</td><td className="is-no">Full seat — and worth it</td></tr>
                  <tr><td className="feat">Occasional, needs native Salesforce</td><td>Right-size to a Platform/Community tier</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — seller, ops, partner, customer</td><td>Moves to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat at renewal</td><td className="is-yes">$0 — seat removed</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. For the full decision playbook see{" "}
              <Link href="/reduce-crm-licensing-costs" className="link">how to cut CRM licensing costs</Link>, or price it out with the{" "}
              <Link href="/savings-calculator" className="link">savings calculator</Link> and the{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;leave Salesforce.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions. Salesforce stays the system of record. Your power
                  users keep working exactly as they do today. All that changes is
                  that the light users stop paying full price for a platform built
                  for someone who needs everything — and get a faster tool built
                  for what they actually do.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim dormant seats first</div>
                      <p className="fl-body">Free money before you build anything — <Link href="/license-guard" className="link">License Guard</Link> automates the scan for Salesforce orgs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The used-but-light seats are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">One source of truth</div>
                      <p className="fl-body">The portal reads and writes the same Salesforce records in real time — no second database drifting out of sync.</p>
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
                <p className="lede">What a light user is, cheaper tiers vs. portals, data integrity, and cost.</p>
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

        <LeadForm source="Move Light Users Off Salesforce page" heading="See which users you could move off seats" showSeatQualifiers sub="Tell us which CRM you run and roughly how many users. We'll come back with how many could move to a flat-fee portal — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Salesforce, show which ones can move to a portal, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                New customers pay nothing for the build — the flat monthly fee only starts once it&apos;s live.
              </p>
              <p style={{ marginTop: "12px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full CRM cost-reduction playbook →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
