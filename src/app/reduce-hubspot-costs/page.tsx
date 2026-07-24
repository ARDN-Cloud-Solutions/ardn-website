import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge spoke mirroring the Salesforce cost cluster for HubSpot. ARDN had a full
// Salesforce seat-cost / license-audit suite but nothing for HubSpot, despite
// "HubSpot seat cost" being a named money keyword and HubSpot's per-seat +
// per-contact model being a documented mid-market pain point. Positioning is the
// same wedge — "keep HubSpot, cut the bill": move light users to a flat-fee
// custom portal wired into HubSpot, no migration. No fabricated pricing: the
// figures below are publicly listed list prices, explicitly labeled illustrative,
// and the calculator is offered for a reader's own numbers.
export const metadata: Metadata = {
  title: "Reduce HubSpot Seat & Contact Costs | Ardn",
  description:
    "Cut HubSpot per-seat and per-contact costs with a custom portal for light users. Keep HubSpot for your core team, offload the rest — one flat fee.",
  keywords: [
    "reduce HubSpot seat cost",
    "reduce HubSpot costs",
    "HubSpot too expensive",
    "HubSpot cost reduction",
    "HubSpot per-seat pricing alternative",
    "HubSpot light user alternative",
    "custom portal to reduce HubSpot seats",
    "cut CRM licensing costs",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-costs",
    },
  },
  openGraph: {
    title: "Reduce HubSpot Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot per-seat and per-contact costs by moving light users to a flat-fee custom portal wired into HubSpot. No migration, no rip-and-replace.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce HubSpot seat and contact costs with a custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Seat & Contact Costs | Ardn",
    description:
      "Cut HubSpot per-seat and per-contact costs by moving light users to a flat-fee custom portal. Keep HubSpot, cut the bill.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to reduce our costs?",
    a: "No. This is the opposite of a migration. HubSpot stays your system of record and your core team keeps working in it exactly as they do today. A custom portal sits alongside HubSpot, integrated through its API, and gives your light users a purpose-built tool instead of a full paid seat — so the users who need a sliver of HubSpot stop being billed for all of it.",
  },
  {
    q: "Which HubSpot costs does this actually cut — seats or contacts?",
    a: "Both, depending on where your spend sits. HubSpot bills two ways: paid seats (for people who work in the CRM) and marketing contacts (for the records you market to). A custom portal removes the need for paid seats for light users — sellers, ops staff, partners, and customers who only touch a narrow slice. It can also hold self-service records and lightweight interactions outside the marketed-contact count, so the contact tier stops being the only place that data can live.",
  },
  {
    q: "What counts as a 'light user' in HubSpot?",
    a: "Anyone who needs a narrow slice of HubSpot — checking a deal, updating a ticket status, submitting a request, viewing a record — but doesn't run sequences, build workflows, or live in the platform. Field sellers, ops and back-office staff, partners, and customers are the most common examples, and they're usually the seats a full HubSpot license overpays for the most.",
  },
  {
    q: "How is this different from HubSpot's own free or lower seat tiers?",
    a: "HubSpot's free seats (view/limited access) and lower Hub tiers help, but they still cap what a user can do and still tie cost to headcount and contact volume as you grow. A custom portal is yours outright, runs on one flat monthly fee no matter how many users you add, and is shaped to your exact workflow instead of a fixed HubSpot view.",
  },
  {
    q: "How does the data stay in sync with HubSpot?",
    a: "The portal integrates two-way with HubSpot through its API, reading and writing the same records in real time. There's one source of truth — the portal is a tailored window into your HubSpot data, not a separate copy that drifts out of sync.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build; the recurring seat and contact savings typically dwarf the subscription.",
  },
];

const costDrivers = [
  {
    title: "Paid seats are billed for partial use",
    body: "A HubSpot Professional or Enterprise seat is priced for someone who runs the platform. A seller who checks a deal twice a day or an ops user who updates a ticket status pays the same per seat as a power user who lives in it.",
  },
  {
    title: "Contacts are a second meter that keeps climbing",
    body: "On top of seats, HubSpot bills for marketing contacts in tiers. Every list you grow and every segment you add pushes you toward the next contact bracket — a cost that scales independently of headcount.",
  },
  {
    title: "External users often shouldn't be paid seats at all",
    body: "Partners, vendors, and customers frequently end up on paid HubSpot seats by default, simply because nothing else was built for them — internal pricing for external users.",
  },
  {
    title: "The bill compounds as you grow",
    body: "Every new hire who needs access adds a recurring seat, and every campaign that grows your database can bump the contact tier. Growth becomes a licensing event on two axes at once.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Moving light users off paid seats caps the part of your HubSpot bill that scales with people.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — there's no second database to reconcile, just a better, cheaper front end for the users who need less.",
  },
];

export default function ReduceHubspotCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce HubSpot Seat & Contact Costs Without Leaving HubSpot",
        name: "How to Reduce HubSpot Seat & Contact Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Reduce HubSpot Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Costs</span>
                <h1 className="display reveal">
                  Reduce HubSpot costs — <em>without losing HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills on two meters at once — paid seats and marketing
                  contacts — and both climb as you grow. The overpayment piles up
                  on light users: the sellers, ops staff, partners, and customers
                  who touch a sliver of it. We build a custom portal, wired into
                  HubSpot in real time, so those users move to one flat fee instead
                  of a paid seat each. HubSpot stays exactly where it is.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
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
                  <div className="kicker">Two meters, one fix</div>
                  <ul className="features mt-3">
                    <li>Cut paid seats for light users</li>
                    <li>Ease pressure on the contact tier</li>
                    <li>Two-way HubSpot sync, one source of truth</li>
                    <li>Flat fee at any headcount</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    HubSpot stays the system of record. Only the bill changes.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* COST DRIVERS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the bill comes from</span>
                <h2 className="h1 mt-3">Why HubSpot gets expensive <em>on two axes.</em></h2>
              </div>
              <div>
                <p className="lede">Seats and contacts each scale on their own — so the cost of light users and a growing database compounds faster than headcount alone.</p>
              </div>
            </div>
            <div className="grid-3">
              {costDrivers.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIER TABLE */}
        <section className="section is-canvas" id="tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seats vs. a flat-fee portal</span>
                <h2 className="h1 mt-3">Paid seat, free seat, <em>or flat-fee portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already offers tiers below a full paid seat. Here&rsquo;s how they typically compare to a custom portal for light users.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access tier</th>
                    <th>Typical published price</th>
                    <th>Still scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Sales / Service Hub Professional seat</td><td>~$90–$100/seat/mo (list)</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Sales / Service Hub Enterprise seat</td><td>~$150/seat/mo (list)</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">HubSpot core / view-only seat</td><td>Free, but limited access</td><td className="is-no">Capped — can&rsquo;t build for the user</td></tr>
                  <tr><td className="feat">Marketing contacts (on top of seats)</td><td>Billed in tiers as the database grows</td><td className="is-no">Yes — with your contact count</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual HubSpot pricing varies by Hub, edition, seat type, contact tier, and negotiated contract; confirm current numbers with HubSpot. The point isn&rsquo;t the exact figure — it&rsquo;s that every paid tier still bills per person and caps what you can build for that user, which is the gap a custom portal closes.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep HubSpot. Cut the bill.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  Reducing HubSpot cost and replacing HubSpot are two different
                  decisions. Everything here keeps HubSpot as the system of record.
                  Your marketers and reps keep working in it exactly as they do
                  today. All that changes is that the users who need a fraction of
                  HubSpot stop paying for a tool built for someone who needs all of
                  it.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a limited HubSpot view — faster for them, and off the paid-seat meter.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Seat and contact fees recur and grow. A flat-fee portal turns that into a fixed, predictable line item.</p>
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
                <h2 className="h1 mt-3">The rest of <em>the cost-reduction playbook.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework for reducing CRM licensing costs — Salesforce, HubSpot &amp; more.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce too? See the seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown across every SaaS tool →</Link>
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
                <p className="lede">Migration risk, light users, seats vs. contacts, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Costs page" heading="See what your HubSpot seats are costing" sub="Tell us roughly how many HubSpot seats and light users you have. We'll come back with where a portal cuts the bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full price for it.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your light users actually use HubSpot, show where a portal cuts the bill, and give you a fixed quote in 48 hours.</p>
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
