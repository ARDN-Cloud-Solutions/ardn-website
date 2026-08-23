import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Salesforce-specific SPOKE off the /reduce-crm-licensing-costs pillar. Targets
// the brand-named money intent ("reduce Salesforce license costs", "Salesforce
// license optimization") that competitors (Ascendix, Codleo, Synebo, Salesforce
// Ben) win with brand-specific pages while ARDN's pillar stayed CRM-agnostic.
// Angle: the three honest levers applied to Salesforce's actual license types —
// reclaim dormant seats (License Guard), right-size to Platform licenses, and
// move light/external users to a flat-fee custom portal that syncs to the org.
// No fabricated pricing: figures are publicly listed Salesforce list prices,
// explicitly labeled illustrative, with the calculator offered for real numbers.
export const metadata: Metadata = {
  title: "How to Reduce Salesforce License Costs | Ardn",
  description:
    "Reduce Salesforce license costs without leaving Salesforce: reclaim dormant seats, right-size Platform licenses, and move light users to a flat-fee portal.",
  keywords: [
    "reduce Salesforce license costs",
    "Salesforce license optimization",
    "cut Salesforce licensing costs",
    "reduce Salesforce seats",
    "Salesforce Platform license vs Enterprise",
    "Salesforce cost reduction",
    "Experience Cloud license cost",
    "custom portal to reduce Salesforce seats",
    "Salesforce license audit",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    },
  },
  openGraph: {
    title: "How to Reduce Salesforce License Costs — Keep Salesforce | Ardn",
    description:
      "Three honest ways to cut your Salesforce license bill without a migration: reclaim dormant seats, right-size to Platform licenses, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce Salesforce license costs without leaving Salesforce — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reduce Salesforce License Costs | Ardn",
    description:
      "Three honest ways to cut Salesforce license costs — reclaim dormant seats, right-size to Platform licenses, or move light users to a flat-fee custom portal.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce Salesforce license costs?",
    a: "Reclaiming seats nobody uses. Most Salesforce orgs carry dormant, duplicate, or 'just in case' licenses — people who left, changed roles, or were provisioned and forgotten. Auditing usage and deactivating those at renewal is the quickest, lowest-risk saving because it changes nothing for active users. License Guard automates that scan for Salesforce so you can see exactly which seats are inactive before you renew.",
  },
  {
    q: "How is a Salesforce Platform license different from a full Sales or Service Cloud seat?",
    a: "A Platform license lets a user work with custom objects, records, and workflows in your org but not the Sales or Service Cloud features (leads, opportunities, cases, forecasting, and the standard CRM apps). For users who only touch custom-built processes, it is far cheaper than a full seat. The catch is that it is still a per-user license with hard functional limits — so it right-sizes cost, it doesn't remove the per-seat model.",
  },
  {
    q: "How do I cut costs for users who log in but barely use Salesforce?",
    a: "That's the group a license audit can't help, because the seats are genuinely in use — just lightly. Sellers checking inventory, ops staff updating a status, partners submitting a request. You can move them to a cheaper license tier (still per-seat, still capped) or give them a purpose-built custom portal wired into Salesforce that runs on one flat fee no matter how many users you add. The portal is usually the bigger, more durable saving because it breaks the link between cost and headcount.",
  },
  {
    q: "What does Experience Cloud cost, and is a custom portal cheaper?",
    a: "Experience Cloud (formerly Community Cloud) bills external users either per login or per member on top of your internal Salesforce spend, so the bill scales with every partner, customer, or member you add. A custom portal integrates with the same Salesforce org through its API but runs on one flat monthly fee regardless of how many external users log in — which is why it usually wins once you have more than a handful of external or light users. See the full comparison on our Experience Cloud vs. custom portal page.",
  },
  {
    q: "Do I have to leave Salesforce to save money?",
    a: "No. Every lever here keeps Salesforce as your system of record. A license audit right-sizes your existing contract; a custom portal sits alongside Salesforce and syncs through its API. A full migration off Salesforce is a separate, larger decision that only makes sense if the platform itself no longer fits your power users — not something you should take on just to trim seat cost.",
  },
  {
    q: "How much can moving light users to a portal actually save?",
    a: "It depends entirely on how many light users you have and your negotiated per-seat rate, so we won't quote a fixed number. The mechanism is simple: Salesforce seats recur and grow with headcount, while a flat-fee portal costs the same at 10 users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the recurring license savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Dormant, duplicate, and forgotten Salesforce licenses are the fastest win because deactivating them changes nothing for active users. License Guard scans your org and flags the inactive seats before renewal.",
    best: "Best for: inactive, duplicate, or forgotten seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to a Platform license",
    body: "Users who only work with custom objects and workflows rarely need a full Sales or Service Cloud seat. A Platform license is far cheaper per head — but still per head, and still capped in what that user can do.",
    best: "Best for: internal users on custom apps who still need native access.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the sellers, ops staff, partners, and customers who need a sliver of Salesforce a purpose-built portal wired into the org, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: light internal users and all external users.",
  },
];

export default function ReduceSalesforceLicenseCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-salesforce-license-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        name: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license optimization" },
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
          { "@type": "ListItem", position: 2, name: "Reduce CRM Licensing Costs", item: "https://ardncloudsolutions.com/reduce-crm-licensing-costs" },
          { "@type": "ListItem", position: 3, name: "Reduce Salesforce License Costs", item: url },
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
                <span className="eyebrow">Reduce Salesforce License Costs</span>
                <h1 className="display reveal">
                  Cut your Salesforce license bill — <em>without leaving Salesforce.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Salesforce prices every seat for a power user, so the cost piles
                  up on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch the org for a handful of tasks.
                  There are three honest ways to cut that bill, and none of them
                  requires a migration. Here&rsquo;s how to decide which lever fits
                  which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Live in 2&ndash;6 weeks</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free Salesforce cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim dormant seats with License Guard</li>
                    <li>Right-size internal users to Platform licenses</li>
                    <li>Move light &amp; external users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the third one breaks the link between cost and headcount.
                  </p>
                  <p className="body" style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
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
                <h2 className="h1 mt-3">Why Salesforce seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Salesforce seat is priced for someone who lives in the platform. Most of your seats don&rsquo;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep running pipeline all day and a seller who checks one screen twice a day usually cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">External users add their own meter</h3>
                <p className="body">Partners, customers, and members belong on Experience Cloud, which bills per login or per member on top of your internal seats — a second cost curve that grows with every new external user.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring charge — permanently, unless something changes the pricing model itself.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: a full Sales Cloud Enterprise seat lists at roughly
              $165/user/month and a Platform license at roughly $25/user/month,
              while Experience Cloud external users bill per login or per member on
              top. A flat-fee portal costs the same at 10 light users or 400. (List
              prices shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* THE THREE LEVERS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Three ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of Salesforce overpayment.</p>
              </div>
            </div>
            <div className="grid-3">
              {levers.map((l) => (
                <div className="card" key={l.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{l.tag}</span>
                  <h3 className="h3 mt-2">{l.title}</h3>
                  <p className="body">{l.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{l.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which lever, which user</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each Salesforce user to the right saving. Most orgs use more than one lever at once.</p>
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat (License Guard)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Internal, custom apps only</td><td>Right-size to a Platform license</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">External — partner, member, customer</td><td>Custom portal instead of Experience Cloud</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, no per-login meter</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the portal rows depend on how many light and external users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full Salesforce seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&rsquo;t <em>&ldquo;rip out Salesforce.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting Salesforce license cost and replacing Salesforce are two
                  different decisions, and the internet tends to blur them.
                  Salesforce stays your system of record on every option here. Your
                  power users keep working exactly as they do today. All that
                  changes is that the users who need less stop paying for a seat
                  built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant seats are free money — <Link href="/license-guard" className="link">License Guard</Link> automates the scan for your Salesforce org.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same Salesforce records in real time — no second database drifting out of sync.</p>
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
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically — the fastest, lowest-risk lever.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light and external users off Salesforce seats onto a flat-fee portal wired into your org.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full CRM licensing-cost playbook →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/custom-partner-portal-development" className="link">Replace per-login partner community seats →</Link>
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
                <p className="lede">The fastest saving, Platform licenses, Experience Cloud, migration risk, and cost.</p>
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

        <LeadForm source="Reduce Salesforce License Costs page" heading="See where your Salesforce bill is leaking" showSeatQualifiers submitLabel="Send my savings breakdown" sub="Tell us roughly how many Salesforce seats you run and which are light users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use Salesforce, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Not just Salesforce? See the full CRM licensing-cost guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
