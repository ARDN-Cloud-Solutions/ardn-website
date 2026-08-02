import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke that extends the per-seat cost-reduction play from Salesforce/
// HubSpot onto the Microsoft ecosystem (Dynamics 365 + Power Platform / Power
// Pages) — a genuine keyword-gap: the rest of the cluster is Salesforce/HubSpot
// only. Same honest thesis as /reduce-crm-licensing-costs: keep Dynamics as the
// system of record, move light and external users off paid seats onto a
// flat-fee custom portal that syncs via the Dataverse/API. Pricing is publicly
// listed list price, explicitly labeled illustrative, calculator offered for
// real numbers. No fabricated clients/metrics.
export const metadata: Metadata = {
  title: "Reduce Dynamics 365 & Power Platform License Costs | Ardn",
  description:
    "Cut Dynamics 365 & Power Platform per-seat costs: move light and external users off paid seats onto a flat-fee custom portal that syncs with Dynamics.",
  keywords: [
    "reduce Dynamics 365 license costs",
    "cut Dynamics 365 licensing costs",
    "Power Platform license cost reduction",
    "Power Pages external user cost",
    "Power Apps per-user license cost",
    "Dynamics 365 seat cost reduction",
    "custom portal to reduce Dynamics 365 seats",
    "Dynamics 365 external user portal",
    "Dataverse portal alternative",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    },
  },
  openGraph: {
    title: "Reduce Dynamics 365 & Power Platform License Costs | Ardn",
    description:
      "Move light and external Dynamics 365 users off per-seat and per-user licenses onto a flat-fee custom portal that syncs with Dynamics — no migration.",
    url: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce Dynamics 365 and Power Platform license costs without a migration — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce Dynamics 365 & Power Platform License Costs | Ardn",
    description:
      "Move light and external Dynamics 365 users off paid seats onto a flat-fee custom portal that syncs with Dynamics — keep your platform, cut the bill.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I reduce Dynamics 365 license costs without leaving Microsoft?",
    a: "You keep Dynamics 365 as the system of record and stop paying full seats for the users who barely touch it. Most orgs have a large group of light users — field sellers, ops staff, service agents checking one screen — plus external partners and customers who each carry a paid seat or Power Pages authenticated-user cost. Move that group to a purpose-built portal that syncs with Dynamics through Dataverse and the API, on one flat monthly fee instead of a per-user license each. Your power users stay in Dynamics; nothing gets migrated.",
  },
  {
    q: "What is the 'external user tax' on Power Pages and Power Apps?",
    a: "The Microsoft stack meters access several ways at once: Dynamics 365 seats for internal users, Power Apps premium licenses (list around $20/user/month, lower at high volume) for custom apps, and Power Pages authenticated external users billed in capacity packs on top of your Dynamics tenant. For companies with lots of partners, dealers, or customers, that external-user cost climbs with every login. A custom portal wired into Dataverse serves those same users on a flat fee no matter how many you add. (List prices shown for illustration — run the calculator for your own numbers.)",
  },
  {
    q: "Do light and external Dynamics users really need a full seat?",
    a: "Almost never. Per-seat and per-user pricing is built around the internal power user who lives in the platform, but most companies have far more light and external users who touch it for a handful of tasks. Those users don't need native Dynamics access at all — they need a focused tool. A custom portal removes the seat or authenticated-user cost entirely while Dynamics stays the system of record.",
  },
  {
    q: "How is a custom portal different from a Power Pages site?",
    a: "Power Pages is Microsoft's own external-facing portal product, and it still bills authenticated external users in capacity packs and limits you to what the platform supports. A custom portal from Ardn is built to your exact workflow, integrated deeply with Dataverse and your Dynamics data, and runs on one flat fee you own — no per-login meter stacked on top, and no template ceiling.",
  },
  {
    q: "How does the data stay in sync with Dynamics 365?",
    a: "The portal reads and writes the same Dynamics records in real time through Dataverse and the API, so there is one source of truth. It is a tailored window into your Dynamics data, not a second copy that drifts out of sync — and every user's access follows the permissions you already define.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000/month — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the recurring license savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim unused Dynamics seats",
    body: "Dormant, duplicate, and 'just in case' Dynamics 365 seats are the fastest win. Audit usage and deactivate at renewal — it changes nothing for active users.",
    best: "Best for: inactive or forgotten seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match the license to the role",
    body: "Dynamics sells role-based, team-member, and operations tiers below a full seat, and Power Apps has per-app options. Cheaper per head — but still per head, and still capped.",
    best: "Best for: occasional users who still need native Dynamics access.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light & external users to a portal",
    body: "Give sellers, ops, partners, and customers a purpose-built portal wired into Dataverse, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: light internal users and external partners/customers.",
  },
];

export default function ReduceDynamics365LicensingCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce Dynamics 365 & Power Platform License Costs",
        name: "How to Reduce Dynamics 365 & Power Platform License Costs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Dynamics 365 license cost reduction" },
          { "@type": "Thing", name: "Power Platform per-user pricing" },
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
          { "@type": "ListItem", position: 3, name: "Reduce Dynamics 365 Licensing Costs", item: url },
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
                <span className="eyebrow">Reduce Dynamics 365 &amp; Power Platform Costs</span>
                <h1 className="display reveal">
                  Cut your Dynamics 365 bill — <em>keep Dynamics, drop the seats.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  The Microsoft stack meters access from every direction —
                  Dynamics 365 seats, Power Apps per-user licenses, and Power
                  Pages authenticated external users on top. The cost piles up on
                  the light and external users who touch it for a handful of
                  tasks. We move those users to a custom portal wired into
                  Dataverse, on one flat fee — no migration, no rip-and-replace.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Dynamics 365</span>
                  <span className="badge is-emerald">Flat fee, not per-user</span>
                  <span className="badge is-canvas">Syncs via Dataverse</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Where the Microsoft bill hides</div>
                  <ul className="features mt-3">
                    <li>Dynamics 365 per-seat licenses</li>
                    <li>Power Apps premium per-user fees</li>
                    <li>Power Pages authenticated-user packs</li>
                    <li>External partners &amp; customers, each metered</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    A flat-fee portal costs the same at 20 external users or 2,000.
                  </p>
                  <p className="body" style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-user pricing.
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
                <h2 className="h1 mt-3">Why the Microsoft stack <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">Dynamics and Power Platform price access for the internal power user. Most of your users — and all of your external ones — don&apos;t fit that mold, and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Seats priced for power users</h3>
                <p className="body">A full Dynamics 365 seat is built for someone who runs the platform all day. A seller checking one screen twice a day usually costs nearly the same — the lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Every external login is metered</h3>
                <p className="body">Power Pages bills authenticated external users in capacity packs, and Power Apps meters premium per-user access. Every partner, dealer, or customer you onboard adds recurring cost.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Internal light users plus external users are usually the majority of who needs access — so the overpayment is spread across most of your user count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: Power Apps premium licenses list around $20/user/month
              (lower at high volume), and Power Pages bills authenticated external
              users in capacity packs on top of your Dynamics 365 seats. A flat-fee
              portal costs the same at 20 external users or 2,000. (List prices
              shown for illustration only —{" "}
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
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment.</p>
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

        {/* NOT A MIGRATION */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out Dynamics.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your platform are two
                  different decisions. Dynamics 365 stays the system of record on
                  every option here. Your power users keep working exactly as they
                  do today. All that changes is that the users who need less stop
                  paying for a tool built for someone who needs everything.
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
                      <div className="fl-head !text-black">Light &amp; external users get a better tool</div>
                      <p className="fl-body">A focused <Link href="/custom-portal-development" className="link">custom portal</Link> beats a stripped-down platform view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-user fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The same play, <em>every platform.</em></h2>
              </div>
              <div>
                <p className="lede">The per-seat cost-reduction wedge works the same whether you run Dynamics, Salesforce, or HubSpot. Here&apos;s the rest of the cluster.</p>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into your platform.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The same framework for Salesforce &amp; HubSpot per-seat licenses — reclaim, right-size, replace.</p>
                <span className="link">See the CRM cost guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your user count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-partner-portal-development" className="link">Cut per-login partner &amp; dealer portal costs →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the per-seat vs. flat-fee cost math →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">The external-user tax, light users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce Dynamics 365 Licensing Costs page" heading="See where your Dynamics bill is leaking" showSeatQualifiers sub="Tell us roughly how many Dynamics seats and external users you run. We'll come back with where a portal cuts your per-user costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Dynamics, show where a portal cuts the per-user bill, and give you a fixed quote in 48 hours.</p>
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
