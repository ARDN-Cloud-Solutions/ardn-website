import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge spoke — clones the proven per-seat cost-reduction playbook onto
// Microsoft Dynamics 365, the #3 CRM. Same buyer pain (full-app seats bought
// for light users), same fix (move light users to a flat-fee custom portal
// wired to Dynamics/Dataverse). New platform keyword, zero cannibalization of
// the Salesforce/HubSpot wedge pages. Positioning is "keep Dynamics, cut the
// bill," NOT "replace Dynamics." No invented prices/metrics — Microsoft's
// license STRUCTURE (full app vs. Team Member vs. Power Pages) is factual;
// exact dollar figures are deliberately avoided.
export const metadata: Metadata = {
  title: "Reduce Dynamics 365 License Costs | Ardn",
  description:
    "Cut Microsoft Dynamics 365 licensing costs without switching CRMs. Move light users off full per-app seats onto a flat-fee custom portal wired to Dynamics.",
  keywords: [
    "reduce Dynamics 365 license costs",
    "cut Dynamics 365 licensing costs",
    "Dynamics 365 team member vs full license",
    "Dynamics 365 per-seat cost reduction",
    "Power Pages portal instead of Dynamics seat",
    "Dynamics 365 portal development",
    "custom portal for Dynamics 365",
    "reduce Microsoft CRM licensing costs",
    "Dynamics 365 light user licensing",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    },
  },
  openGraph: {
    title: "Reduce Dynamics 365 License Costs | Ardn",
    description:
      "Cut Dynamics 365 licensing costs without switching CRMs. Move light users off full per-app seats onto a flat-fee custom portal wired to Dynamics. New customers build free.",
    url: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce Microsoft Dynamics 365 license costs with a flat-fee custom portal, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce Dynamics 365 License Costs | Ardn",
    description:
      "Cut Dynamics 365 licensing costs without switching CRMs — move light users to a flat-fee custom portal wired to Dynamics.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do custom portals reduce our Dynamics 365 costs?",
    a: "Dynamics 365 bills a full application license for each user of an app like Sales or Customer Service Enterprise — even people who only view records or complete one narrow task. We build a custom portal that gives those light users exactly what they need, integrated live with Dynamics through Dataverse, on one flat fee instead of a full per-app license each. Your Dynamics environment and data stay exactly where they are; you simply stop buying premium seats for light use.",
  },
  {
    q: "Do we have to leave Microsoft Dynamics 365?",
    a: "No — that is the whole point. You keep Dynamics 365 and everything in it. The portal connects to your environment through the Dataverse / Web API and stays in sync both ways, so your power users keep working in Dynamics while lighter users move to the portal. Nothing gets ripped out and nothing gets migrated.",
  },
  {
    q: "How is this different from a Team Member license or Power Pages?",
    a: "Microsoft's own lighter options help, but they have limits. Team Member licenses restrict which entities and actions a user can touch, and Power Pages still meters usage as adoption grows. A custom portal is yours, runs on one flat monthly fee regardless of how many users you add, and is shaped exactly to your process instead of a template's constraints. For high-volume light use, a flat fee usually beats metered or restricted seats.",
  },
  {
    q: "Which Dynamics 365 users are the best fit to move to a portal?",
    a: "The same profile as any CRM: light users. Field sellers who check a handful of records, operations and back-office staff who update orders or cases, partners and vendors submitting requests, and customers who need self-service. Power users who live in Dynamics all day keep their full license — it is worth it for them. The portal targets everyone lighter than that.",
  },
  {
    q: "How does the data stay accurate across Dynamics and the portal?",
    a: "The portal reads and writes the same Dataverse records in real time through the Web API, so there is one source of truth. Every user's access follows the security model you already define in Dynamics — the portal is a tailored window into your data, not a separate copy that drifts out of sync.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring license savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Lever 1",
    title: "Audit & reclaim seats",
    body: "Full-app licenses assigned to people who left or never log in are pure waste. A usage audit finds them so you can reassign or drop them at renewal.",
    best: "Best for: inactive or departed users.",
  },
  {
    tag: "Lever 2",
    title: "Right-size the license",
    body: "Some users on a full Sales or Customer Service Enterprise seat only need a Team Member's slice. Where Microsoft's lighter tiers genuinely fit, move them down.",
    best: "Best for: occasional users who still need native Dynamics.",
  },
  {
    tag: "Lever 3",
    title: "Move light users to a flat-fee portal",
    body: "The users who only touch a narrow workflow do not need any Dynamics seat. A custom portal wired to Dataverse gives them exactly that — for one flat fee, no matter how many.",
    best: "Best for: sellers, ops, partners & customers with light needs.",
  },
];

const services = [
  {
    title: "Seller & Field Portals",
    body: "Give reps and field sellers a fast, focused tool for the few things they actually do in Dynamics — synced through Dataverse, without a full Sales Enterprise seat each.",
  },
  {
    title: "Operations Portals",
    body: "Let back-office and service staff update orders, cases, and records through a purpose-built portal instead of a full Customer Service license they barely use.",
  },
  {
    title: "Partner & Vendor Portals",
    body: "Onboard partners and vendors to submit, track, and collaborate — external users you should never be paying internal Dynamics seats for.",
  },
  {
    title: "Customer Self-Service",
    body: "A branded portal where customers check status, make requests, and find answers — deflecting work and keeping them out of paid seats entirely.",
  },
  {
    title: "Two-Way Dataverse Integration",
    body: "Live, bidirectional sync with your Dynamics environment through the Dataverse Web API. One source of truth — the portal is a tailored window into the data you already trust.",
  },
  {
    title: "Flat Fee, Not Per-Seat",
    body: "Add as many portal users as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
];

export default function ReduceDynamics365LicenseCostsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs#service",
        name: "Reduce Dynamics 365 License Costs",
        serviceType: "CRM License Cost Reduction & Custom Portal Development",
        description:
          "Ardn builds and operates custom portals that integrate with Microsoft Dynamics 365 through Dataverse and move light users off full per-app licenses onto a flat-fee portal — cutting cost without replacing Dynamics. Built via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Reduce Dynamics 365 License Costs", item: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs" },
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
                <span className="eyebrow">Reduce Dynamics 365 License Costs</span>
                <h1 className="display reveal">
                  Cut your Dynamics 365 bill — <em>without switching CRMs.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Microsoft Dynamics 365 charges a full application license for
                  every user of Sales or Customer Service — even the sellers, ops
                  staff, partners, and customers who touch it for a handful of
                  tasks. We build custom portals that give those light users
                  exactly what they need, wired live into your Dynamics
                  environment through Dataverse, on one flat fee instead of a
                  full seat each. Keep Dynamics. Stop overpaying to run it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Dynamics 365</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                  <span className="badge">Live in 2–6 weeks</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Estimate your savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep Dynamics &amp; your Dataverse data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way Dataverse sync, one source of truth</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free.
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
                <h2 className="h1 mt-3">Why per-app pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Dynamics 365 application license is priced for someone who lives in the platform. Most of your users don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <h3 className="h3">Full seats for a sliver of use</h3>
                <p className="body">A user who only checks records or updates one field still needs a full Sales or Customer Service license under standard licensing. You pay premium price for a fraction of the product.</p>
              </div>
              <div className="card">
                <h3 className="h3">The cost climbs with headcount</h3>
                <p className="body">Every new light user is another recurring seat. Because pricing is per user, your bill grows in lockstep with hiring — even when the new people barely use the CRM.</p>
              </div>
              <div className="card">
                <h3 className="h3">Lighter tiers still have limits</h3>
                <p className="body">Team Member licenses cap what a user can do and Power Pages meters usage. They help, but they don&apos;t break the link between cost and headcount the way a flat-fee portal does.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE LEVERS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Three ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment — the same framework that works for any per-seat CRM.</p>
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
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              The same three-lever framework applies to any per-seat CRM. See the general version in{" "}
              <Link href="/reduce-crm-licensing-costs" className="link">how to cut CRM licensing costs</Link>, or the Salesforce-specific{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="section" id="portals">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">Portals for the users <em>who don&apos;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is built to one group&apos;s workflow and wired into Dynamics through Dataverse — so the data stays in one place and the licensing bill stops climbing.</p>
              </div>
            </div>
            <div className="grid-3">
              {services.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">How custom portal development works →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">The general CRM cost-reduction framework →</Link>
              <Link href="/savings-calculator" className="link">Calculate your per-seat savings →</Link>
            </div>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out Dynamics.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your CRM are two different
                  decisions. Your Dynamics 365 environment stays the system of
                  record on every option here. Your power users keep working in
                  it exactly as they do today. We simply stop you from paying
                  full application prices for users who need a fraction of the
                  product — by giving them a purpose-built portal that talks to
                  Dynamics in real time.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Dynamics stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it via Dataverse.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a restricted platform view — faster for them, cheaper for you.</p>
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
                <p className="lede">How the savings work, Dataverse integration, Team Member vs. portal, and cost.</p>
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

        <LeadForm source="Reduce Dynamics 365 License Costs page" heading="See what you could save" sub="Tell us roughly how many Dynamics 365 users you have and which ones are light users. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">See what you&apos;re overpaying. <em>Then keep Dynamics.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Dynamics 365, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "8px" }}>
                <Link href="/custom-portal-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Explore custom portal development →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
