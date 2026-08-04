import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Salesforce-BRAND-SPECIFIC spoke for the per-seat cost-reduction wedge. The
// generic /reduce-crm-licensing-costs pillar can't rank #1 for the brand-
// modified money terms ("cut Salesforce license costs", "reduce Salesforce
// seats", "move light users off Salesforce") because it isn't Salesforce-
// specific — and brand-modified terms convert best. This page owns those terms.
//
// Differentiated angle (the SERP gap): every competitor stops at "downgrade
// Enterprise → Platform." Platform still bills per seat. ARDN's answer removes
// the seat entirely — a flat-fee custom portal for light users, synced to the
// Salesforce you keep. "Downgrading lowers the meter; a portal removes it."
//
// No fabricated pricing: Salesforce list ranges are publicly listed and are
// explicitly labeled illustrative, mirroring the seat-cost compare page. The
// detailed price table lives on /compare/salesforce-seat-cost-vs-custom-portal
// (linked) so this page stays a solution page, not a duplicate of it.
export const metadata: Metadata = {
  title: "Cut Salesforce License Costs — Keep Your CRM | Ardn",
  description:
    "Cut Salesforce license costs without leaving Salesforce. Move light users off per-seat licenses onto a flat-fee custom portal that syncs to your CRM.",
  keywords: [
    "cut Salesforce license costs",
    "reduce Salesforce license costs",
    "Salesforce license cost reduction",
    "reduce Salesforce seats",
    "move light users off Salesforce",
    "Salesforce per-seat cost",
    "Salesforce Platform license alternative",
    "Salesforce Experience Cloud cost",
    "custom portal to reduce Salesforce seats",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/cut-salesforce-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/cut-salesforce-license-costs",
      "x-default": "https://ardncloudsolutions.com/cut-salesforce-license-costs",
    },
  },
  openGraph: {
    title: "Cut Salesforce License Costs — Keep Your CRM | Ardn",
    description:
      "Move light users off per-seat Salesforce licenses onto a flat-fee custom portal that syncs to your CRM. Keep Salesforce as the system of record.",
    url: "https://ardncloudsolutions.com/cut-salesforce-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut Salesforce license costs without leaving Salesforce — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut Salesforce License Costs — Keep Your CRM | Ardn",
    description:
      "Move light users off per-seat Salesforce licenses onto a flat-fee custom portal that syncs to the CRM you keep.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Can I cut Salesforce license costs without leaving Salesforce?",
    a: "Yes — and that's the whole point. You keep Salesforce as your system of record and everything in it. The saving comes from the users who touch Salesforce for a narrow slice of work: sellers checking an order, ops staff updating a status, partners submitting a request. You give those light users a purpose-built portal wired into Salesforce through its API, on one flat fee instead of a full seat each. Your power users keep working in Salesforce exactly as they do today.",
  },
  {
    q: "How is moving light users to a portal different from downgrading to a Platform license?",
    a: "Downgrading from an Enterprise seat to a Platform (limited-access) license lowers the per-user price, but it's still a per-user price — the cost still scales with every person you add, and it caps what you can build for them. A custom portal removes the seat entirely: it runs on one flat monthly fee whether you put 10 or 400 light users on it. Downgrading lowers the meter; a portal removes the meter.",
  },
  {
    q: "Which Salesforce users are the most expensive per unit of value?",
    a: "Light users and external users. Per-seat pricing is built around the power user who lives in the platform all day, so everyone lighter than that is overpaying relative to what they use. External users are worse still: Experience Cloud / Community licenses bill per member or per login on top of the internal seats you already pay for. Those are exactly the users a flat-fee portal takes off the meter.",
  },
  {
    q: "What about our inactive or duplicate Salesforce seats?",
    a: "Reclaiming dormant, duplicate, and 'just in case' seats at renewal is the fastest, lowest-risk win because deactivating them changes nothing for active users. Our License Guard product automates that scan for Salesforce. Reclaiming unused seats and moving light users to a portal are complementary levers — do the audit first, then break the link between cost and headcount for the users who remain.",
  },
  {
    q: "Do we lose our Salesforce data or reporting if light users move to a portal?",
    a: "No. The portal reads and writes the same Salesforce records in real time through the API, so there's one source of truth and nothing drifts out of sync. Light users' updates still flow into Salesforce, so your reporting, automation, and system of record stay intact. Every user's access follows the permissions you already define in Salesforce.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the recurring license savings typically dwarf the subscription.",
  },
];

const buckets = [
  {
    tag: "01",
    title: "Full seats for light users",
    body: "Sellers, ops, and back-office staff who touch Salesforce for a handful of tasks are billed the same full Enterprise seat as the power users who live in it. That's where the overpayment concentrates.",
  },
  {
    tag: "02",
    title: "External users on Experience Cloud",
    body: "Partners, vendors, and customers billed per member or per login on top of your internal seats. External access is often the single most expensive line on the Salesforce bill.",
  },
  {
    tag: "03",
    title: "Platform tiers that still meter",
    body: "Downgrading light users to a limited-access Platform license lowers the price per head but keeps the per-head model — cost still climbs with every user you add.",
  },
  {
    tag: "04",
    title: "Dormant & duplicate seats",
    body: "Licenses for people who left, changed roles, or were provisioned 'just in case.' The fastest win — reclaim them at renewal with License Guard before you do anything else.",
  },
];

export default function CutSalesforceLicenseCostsPage() {
  const url = "https://ardncloudsolutions.com/cut-salesforce-license-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Cut Salesforce License Costs Without Leaving Salesforce",
        name: "Cut Salesforce License Costs Without Leaving Salesforce",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        datePublished: "2026-08-04",
        dateModified: "2026-08-04",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license cost reduction" },
          { "@type": "Thing", name: "Per-seat pricing" },
          { "@type": "Thing", name: "Custom portal development" },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Salesforce License Cost Reduction via Custom Portals",
        serviceType: "Salesforce cost reduction & custom portal development",
        description:
          "Ardn moves light and external Salesforce users off per-seat and Experience Cloud licenses onto a flat-fee custom portal that syncs live with Salesforce — cutting license cost without replacing the CRM. Built and run via the AI Forge Framework under one monthly subscription.",
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
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Cut Salesforce License Costs", item: url },
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
                <span className="eyebrow">Cut Salesforce License Costs</span>
                <h1 className="display reveal">
                  Cut your Salesforce license costs — <em>without leaving Salesforce.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Per-seat pricing is built around power users, so the bill piles
                  up on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch Salesforce for a handful of
                  tasks. We move those light users onto a flat-fee custom portal
                  that syncs live with Salesforce, so you stop paying full seats
                  for light use. Salesforce stays your system of record. Nothing
                  gets migrated.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Live in 2&ndash;6 weeks</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free Salesforce cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you could save →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The Salesforce cost play</div>
                  <ul className="features mt-3">
                    <li>Reclaim dormant seats with License Guard</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Take external users off Experience Cloud</li>
                    <li>Two-way sync — Salesforce stays the source of truth</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHERE THE SPEND PILES UP */}
        <section className="section" id="where">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the spend piles up</span>
                <h2 className="h1 mt-3">Four places Salesforce seat cost <em>quietly compounds.</em></h2>
              </div>
              <div>
                <p className="lede">Most of a mid-market Salesforce bill isn&rsquo;t the power users — it&rsquo;s the light and external users paying full freight for a sliver of the platform.</p>
              </div>
            </div>
            <div className="grid-3">
              {buckets.map((b) => (
                <div className="card" key={b.tag}>
                  <div className="card-num">{b.tag}</div>
                  <h3 className="h3">{b.title}</h3>
                  <p className="body">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REMOVE THE METER */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Lower the meter vs. remove it</span>
                <h2 className="h1 mt-3">Downgrading lowers the meter. <em>A portal removes it.</em></h2>
                <p className="body mt-4">
                  Every license-optimization playbook ends at the same move:
                  downgrade light users from a full Enterprise seat to a cheaper
                  Platform license. It helps — but it&rsquo;s still a per-user
                  price that climbs with every person you add, and it caps what
                  you can build for them. A custom portal is the next step
                  competitors don&rsquo;t offer: it takes the seat off the bill
                  entirely and runs on one flat fee no matter how many light users
                  you move onto it.
                </p>
                <p className="body mt-4">
                  <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full Enterprise vs. Platform vs. portal cost breakdown →</Link>
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Full Enterprise seat</div>
                      <p className="fl-body">Built for power users. Publicly listed around $150&ndash;$165/user/mo (illustrative list price) — and billed for every light user too.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Platform (limited-access) license</div>
                      <p className="fl-body">Cheaper per head (~$25&ndash;$30/user/mo list, illustrative) — but still per head, still capped, still climbing with headcount.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Flat-fee custom portal</div>
                      <p className="fl-body">One monthly fee no matter how many light users you add. Cost stops scaling with headcount — the seat is gone, not just discounted.</p>
                    </div>
                  </li>
                </ul>
                <p className="body" style={{ marginTop: "18px", fontSize: "13px", color: "#98a2b3" }}>
                  Salesforce prices above are typical, publicly listed ranges as of this writing — not a quote. Actual pricing varies by edition, region, and negotiated contract; confirm current numbers with Salesforce and use our calculator for your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXTERNAL USERS */}
        <section className="section" id="external">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">External users cost the most</span>
                <h2 className="h1 mt-3">Partners and customers <em>don&rsquo;t need a Salesforce seat at all.</em></h2>
                <p className="body mt-4">
                  Experience Cloud and Community licenses bill per member or per
                  login for external users — on top of the internal seats you
                  already pay for. For a few hundred partners or customers that
                  becomes one of the largest lines on the bill, and building the
                  portal yourself in Experience Cloud means sharing rules,
                  profiles, and components to maintain forever.
                </p>
                <p className="body mt-4">
                  A custom partner or customer portal replaces that entirely: your
                  external users get a focused tool wired into Salesforce, on a
                  flat fee, built and run for you — no per-member meter stacked on
                  top of your CRM.
                </p>
                <div style={{ marginTop: "24px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <Link href="/custom-partner-portal-development" className="link">Cut per-login Partner Community seat costs →</Link>
                  <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal: cost breakdown →</Link>
                </div>
              </div>
              <div>
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers, in order</div>
                  <ul className="fl mt-3">
                    <li>
                      <div className="fl-num !text-black">1</div>
                      <div>
                        <div className="fl-head !text-black">Reclaim unused seats</div>
                        <p className="fl-body">Fastest win. <Link href="/license-guard" className="link">License Guard</Link> automates the scan.</p>
                      </div>
                    </li>
                    <li>
                      <div className="fl-num !text-black">2</div>
                      <div>
                        <div className="fl-head !text-black">Move light users to a portal</div>
                        <p className="fl-body">Break the link between cost and headcount for internal light users.</p>
                      </div>
                    </li>
                    <li>
                      <div className="fl-num !text-black">3</div>
                      <div>
                        <div className="fl-head !text-black">Take external users off Experience Cloud</div>
                        <p className="fl-body">Replace the per-member meter with a flat-fee <Link href="/custom-portal-development" className="link">custom portal</Link>.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section is-canvas" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Cutting Salesforce cost, <em>answered.</em></h2>
              </div>
              <div>
                <p className="lede">Keeping Salesforce, the portal move vs. a Platform downgrade, data, and timing.</p>
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
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">On HubSpot or another CRM? See how to cut CRM licensing costs →</Link>
              <Link href="/custom-portal-development" className="link">Explore custom portal development →</Link>
            </div>
          </div>
        </section>

        <LeadForm source="Cut Salesforce License Costs page" heading="See what your Salesforce seats are costing" showSeatQualifiers submitLabel="Email me my savings breakdown" sub="Tell us roughly how many Salesforce users you run and how many are light or external. We'll come back with where a portal cuts the per-seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full seats <em>for light use.</em></h2>
              <p className="lede">Free 30-minute Salesforce cost review. We&rsquo;ll look at how your users actually use Salesforce, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book my free Salesforce cost review</a>
                <Link href="/savings-calculator" className="btn btn-outline-light btn-lg">Run your own numbers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Prefer to talk now? Call +1 (407) 815-5303. Flat-fee tiers — no per-seat pricing, ever.
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
