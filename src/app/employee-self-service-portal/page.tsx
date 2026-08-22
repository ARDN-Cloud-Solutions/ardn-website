import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: NEW spoke filling the INTERNAL light-user half of the per-seat wedge.
// Every existing portal page is external-facing (partner, vendor, customer);
// nothing targeted internal employees who only read, look up, or approve —
// the exact users a full CRM seat (or even a discounted Platform / Team Member
// tier) overpays for. Positioning matches the wedge: keep your CRM, move
// internal light users onto one flat-fee self-service portal. No fabricated
// pricing — tier figures are publicly listed list prices, labeled illustrative,
// and route to /savings-calculator for real numbers. Distinct copy from
// /custom-portal-development (external/seller/ops framing) so it is not a
// near-duplicate.
export const metadata: Metadata = {
  title: "Employee Self-Service Portal — Cut CRM Seats | Ardn",
  description:
    "Move internal light users — staff who only read, look up, or approve — off full CRM seats onto one flat-fee employee self-service portal. Keep your CRM.",
  keywords: [
    "employee self-service portal",
    "internal portal to reduce license seats",
    "read-only user portal",
    "reduce internal CRM seats",
    "staff self-service portal",
    "internal CRM light users",
    "Salesforce Platform license alternative",
    "Dynamics Team Member alternative",
    "reduce per-seat license costs",
    "flat-fee internal portal",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/employee-self-service-portal",
    languages: {
      "en-US": "https://ardncloudsolutions.com/employee-self-service-portal",
      "x-default": "https://ardncloudsolutions.com/employee-self-service-portal",
    },
  },
  openGraph: {
    title: "Employee Self-Service Portal — Cut Internal CRM Seats | Ardn",
    description:
      "Move internal light users off full CRM seats onto one flat-fee employee self-service portal wired into your CRM. Cut cost without switching. New customers: free build.",
    url: "https://ardncloudsolutions.com/employee-self-service-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Employee self-service portal — cut internal CRM seats while keeping your CRM, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Self-Service Portal — Cut Internal CRM Seats | Ardn",
    description:
      "Move internal light users off full CRM seats onto a flat-fee self-service portal. Keep your CRM. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is an employee self-service portal?",
    a: "It's a purpose-built internal tool that lets your staff do the narrow set of things they actually need — look up a record, check a status, submit a request, approve an item, update a field — without logging into the full CRM or platform. It syncs live with your system of record through its API, so the data stays in one place. The point is to give internal light users a fast, focused tool instead of a full per-seat license they barely use.",
  },
  {
    q: "How does it cut our internal CRM seat costs?",
    a: "Most CRMs bill a full seat for anyone who does anything beyond viewing — even an employee who only updates a status once a day or approves the occasional request. A self-service portal gives those internal light users exactly the actions they need, written straight back to the CRM, on one flat monthly fee no matter how many of them there are. Your power users keep their seats; everyone lighter than that moves off the per-seat line entirely.",
  },
  {
    q: "Isn't a cheaper license tier (Salesforce Platform, Dynamics Team Member) enough for them?",
    a: "Sometimes it helps, but those discounted tiers are still per-seat and still capped in what a user can touch. They lower the unit price without breaking the link between cost and headcount, and they often gate the exact objects or actions your light users need. A flat-fee portal removes the metering altogether — the same monthly cost at 20 internal users or 400 — and is shaped to your workflow instead of a vendor's limited-access template.",
  },
  {
    q: "Do we have to leave our CRM or move any data?",
    a: "No. The CRM stays exactly where it is as the system of record. The portal sits alongside it and integrates two-way through the CRM's API, so it reads and writes the same records in real time. Nothing gets migrated, nothing gets ripped out — the portal is just a tailored front end for the employees who need less than a full seat.",
  },
  {
    q: "Which internal roles is this usually for?",
    a: "Any employee who touches the CRM for a narrow, well-defined slice of work: field and frontline staff checking or updating records, fulfillment and back-office teams, approvers and reviewers, and departments like HR, facilities, or finance that only need to look things up or submit requests. If someone never builds reports, runs pipeline, or configures the platform, they're usually a candidate.",
  },
  {
    q: "How is data kept accurate and secure across both systems?",
    a: "There's one source of truth. The portal reads and writes the same CRM records live, so nothing drifts out of sync, and every user's access follows the permissions you already define in your CRM. You own the portal IP and your data outright, with a full export and documentation if you ever leave. No lock-in.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const useCases = [
  {
    title: "Look-up & read-only access",
    body: "Staff who only need to find a record, check a status, or pull up a customer detail — a full seat is pure overpayment for a read.",
  },
  {
    title: "Status & field updates",
    body: "Frontline and fulfillment teams updating an order, a case, or a single field — written straight back to the CRM without a license each.",
  },
  {
    title: "Requests & approvals",
    body: "Submit-and-approve flows for time off, purchases, changes, or access — a focused queue beats a stripped-down platform view.",
  },
  {
    title: "Departmental self-service",
    body: "HR, facilities, finance, and ops teams that only need to look things up or file a request, not run the CRM.",
  },
  {
    title: "Two-way CRM integration",
    body: "Live, bidirectional sync with Salesforce, HubSpot, Microsoft Dynamics, or your system of record. One source of truth.",
  },
  {
    title: "Flat fee, not per-seat",
    body: "Add as many internal users as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
];

export default function EmployeeSelfServicePortalPage() {
  const url = "https://ardncloudsolutions.com/employee-self-service-portal";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Employee Self-Service Portal Development",
        serviceType: "Internal Self-Service Portal & CRM Integration",
        description:
          "Ardn builds and operates custom employee self-service portals that give internal light users — staff who only read, look up, update, or approve — a purpose-built tool integrated with your existing CRM, moving them off full per-seat licenses onto a flat monthly fee. Built via the AI Forge Framework.",
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
          { "@type": "ListItem", position: 3, name: "Employee Self-Service Portal", item: url },
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
                <span className="eyebrow">Employee Self-Service Portal</span>
                <h1 className="display reveal">
                  The internal seats <em>you&apos;re overpaying for.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most companies buy a full CRM seat for every employee who touches
                  it — including the majority who only look something up, update a
                  field, or approve a request. We build a custom employee
                  self-service portal that gives those internal light users exactly
                  what they need, wired live into your CRM, on one flat fee instead
                  of a license each. Keep your CRM. Stop paying full price for people
                  who use a sliver of it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Two-way CRM sync</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free seat-cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-seat savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The internal cost-cut play</div>
                  <ul className="features mt-3">
                    <li>For staff who only read, update, or approve</li>
                    <li>Move internal light users to a flat fee</li>
                    <li>Two-way integration, one source of truth</li>
                    <li>Cheaper than a Platform or Team Member seat</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">See the full CRM cost-reduction framework →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* USE CASES */}
        <section className="section" id="use-cases">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What it does</span>
                <h2 className="h1 mt-3">One tool for the employees <em>who need a fraction of the CRM.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is shaped to one group&apos;s actual job and wired into your CRM — so the data stays in one place and the internal seat bill stops climbing.</p>
              </div>
            </div>
            <div className="grid-3">
              {useCases.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with how to cut CRM licensing costs →</Link>
              <Link href="/custom-portal-development" className="link">Also serving sellers, ops &amp; customers? Custom portals →</Link>
              <Link href="/custom-partner-portal-development" className="link">External partners &amp; vendors? Partner portals →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/hubspot-seat-cost-vs-custom-portal" className="link">See the HubSpot seat-cost math →</Link>
            </div>
          </div>
        </section>

        {/* WHY — internal light users */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Where the internal overpayment hides</span>
                <h2 className="h1 mt-3">A cheaper tier <em>is still a per-seat tier.</em></h2>
                <p className="body mt-4">
                  Most CRM cost advice for internal users stops at &ldquo;move them
                  to a limited-access license&rdquo; — a Salesforce Platform seat, a
                  Dynamics Team Member seat, a view-mostly tier. It helps, but it
                  only lowers the unit price. You&apos;re still paying per head, the
                  bill still grows with every hire, and the tier still caps what
                  those employees can actually do. A flat-fee self-service portal
                  breaks that link entirely — and gives them a better tool while it
                  does.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your CRM stays the system of record</div>
                      <p className="fl-body">No migration, no data move, no retraining power users. The portal integrates alongside it.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a faster tool</div>
                      <p className="fl-body">A focused screen for one job beats a stripped-down platform view — quicker for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Cost stops tracking headcount</div>
                      <p className="fl-body">A flat fee is the same at 20 internal users or 400. Adding people stops being a licensing event.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We build it and run it</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your workflows evolve.</p>
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
                <p className="lede">How the savings work, cheaper license tiers, integration, roles, and cost.</p>
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

        <LeadForm source="Employee Self-Service Portal page" heading="See what your internal seats are costing" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us which CRM you run and roughly how many internal users are light users. We'll come back with where a self-service portal cuts the seat bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep your CRM. <em>Stop buying seats for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your internal users actually use the CRM, show where a self-service portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                New customers: we build it free — you only pay the flat monthly fee once it&apos;s live. Launch, Scale &amp; Enterprise tiers. No per-seat pricing, ever.
              </p>
              <p style={{ marginTop: "8px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Prefer to talk now? +1 (407) 815-5303 &middot; contactus@ardncloudsolutions.com
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
