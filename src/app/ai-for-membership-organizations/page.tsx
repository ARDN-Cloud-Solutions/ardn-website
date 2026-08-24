import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Vertical landing page targeting membership-organization AI buyer intent
// (YMCAs, gyms, studios, clubs, associations). Matches the ICP outbound
// research surfaces. Cross-links to the Membership Management product.
// Non-geo; single conversion path (Calendly).
export const metadata: Metadata = {
  title:
    "AI for Membership Organizations | Ardn",
  description:
    "Custom AI for YMCAs, gyms, studios, clubs & associations — automate onboarding, renewals, support & retention. New customers: free build.",
  keywords: [
    "AI for membership organizations",
    "AI for associations",
    "gym AI software",
    "member retention AI",
    "membership automation AI",
    "AI for nonprofits",
    "custom AI for clubs",
    "AI Forge Framework",
    "membership AI development company",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-for-membership-organizations",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-for-membership-organizations",
      "x-default": "https://ardncloudsolutions.com/ai-for-membership-organizations",
    },
  },
  openGraph: {
    title:
      "AI for Membership Organizations | Ardn",
    description:
      "Custom AI for YMCAs, gyms, studios, clubs, and associations — onboarding, renewals, support, retention. Built and run in 2–6 weeks. New customers: free build.",
    url: "https://ardncloudsolutions.com/ai-for-membership-organizations",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom AI for membership organizations — onboarding and retention by Ardn AI Forge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Membership Organizations — Ardn AI Forge",
    description:
      "Custom AI for clubs, gyms, and associations, built and run in 2–6 weeks. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What can AI do for a membership organization?",
    a: "It handles the high-volume, repetitive member touchpoints: answering questions about hours, classes, billing, and policies; guiding new-member onboarding; nudging renewals and recovering failed payments; spotting members who are about to lapse; and routing real issues to staff. Your team stops drowning in routine messages and focuses on the relationships that keep members.",
  },
  {
    q: "We already use a membership platform. Do we have to replace it?",
    a: "No. We build AI that connects to what you already run. And if you want the whole system modernized, Ardn also offers Membership Management — a flexible platform for sign-ups, dues, classes, attendance, and retention — but the AI work does not require it.",
  },
  {
    q: "Can AI help with member retention specifically?",
    a: "Yes, and it is often the highest-return use case. The AI watches attendance, payment, and engagement signals to flag at-risk members early, then triggers personalized outreach — so you save the membership before it cancels instead of after.",
  },
  {
    q: "Does this work for associations and nonprofits, not just gyms?",
    a: "Yes. Associations, professional bodies, clubs, studios, and nonprofits all run on member onboarding, dues, events, and renewals — the same workflows AI automates well. We build to your specific membership model.",
  },
  {
    q: "How fast can we launch and what does it cost?",
    a: "Most engagements ship a production-ready application in 2–6 weeks, with a fixed quote and delivery date within 48 hours of the first call. It runs on one flat monthly subscription that covers build, hosting, and iteration — and new customers pay nothing for the one-time build.",
  },
];

const useCases = [
  {
    title: "Member Onboarding",
    body: "Guide every new member through sign-up, orientation, and first visit automatically — answering questions instantly so they stick around past month one.",
  },
  {
    title: "Renewals & Dues Recovery",
    body: "Automated, personalized renewal nudges and failed-payment recovery — cutting involuntary churn without your staff chasing cards.",
  },
  {
    title: "Retention Early-Warning",
    body: "Spot members whose attendance or engagement is slipping and trigger outreach before they cancel — saving memberships you'd otherwise lose.",
  },
  {
    title: "Member Support Agent",
    body: "Instant answers on hours, classes, billing, and policies across chat, SMS, and email — escalating to staff only when it actually needs a person.",
  },
  {
    title: "Class & Event Help",
    body: "Let members find, book, and reschedule classes or events conversationally, with reminders that cut no-shows.",
  },
  {
    title: "Staff Admin Automation",
    body: "Cut the back-office load — routing requests, drafting responses, and updating records so your team spends time on members, not data entry.",
  },
];

export default function AiForMembershipOrganizationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/ai-for-membership-organizations#service",
        name: "AI for Membership Organizations — Custom Development",
        serviceType: "Custom AI Application Development for Membership Organizations",
        description:
          "Ardn builds and operates custom AI applications for YMCAs, gyms, studios, clubs, and associations — onboarding, renewals, retention, and member support — via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/ai-for-membership-organizations",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: { "@type": "Audience", audienceType: "Membership organizations, clubs, and associations" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/ai-for-membership-organizations#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-for-membership-organizations#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "AI for Membership Organizations", item: "https://ardncloudsolutions.com/ai-for-membership-organizations" },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="ardn-page">
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">AI for Membership Organizations</span>
                <h1 className="display reveal">
                  Keep more members. <em>Chase fewer payments.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Every lapsed member and missed renewal is revenue your team
                  never had time to save. We build custom AI that onboards new
                  members, recovers failed payments, answers the routine
                  questions, and flags at-risk members before they cancel — so
                  your staff spends time on people, not paperwork. Live in 2–6
                  weeks, run for you, one monthly fee.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Onboarding · Renewals · Retention</span>
                  <span className="badge is-emerald">2–6 weeks to production</span>
                  <span className="badge is-canvas">YMCAs · Gyms · Associations</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">
                    Book a free 30-min call
                  </Link>
                  <Link href="#usecases" className="btn btn-secondary btn-lg">
                    See use cases
                  </Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Where orgs start</div>
                  <ul className="features mt-3">
                    <li>Member onboarding &amp; first-visit guidance</li>
                    <li>Renewal nudges &amp; failed-payment recovery</li>
                    <li>At-risk member early warning</li>
                    <li>24/7 member support agent</li>
                    <li>Class &amp; event booking help</li>
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

        {/* USE CASES */}
        <section className="section" id="usecases">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Use cases</span>
                <h2 className="h1 mt-3">
                  The work that <em>quietly loses members.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  We start with the workflow bleeding the most revenue — usually
                  renewals or retention — prove it, then expand across the member
                  lifecycle.
                </p>
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
              <Link href="/membership-management" className="link">
                Need the full platform too? See Membership Management →
              </Link>
              <Link href="/ymca-management-software" className="link">
                Running a YMCA or community nonprofit? See the Y edition →
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="link">
                Cut per-seat association software costs →
              </Link>
              <Link href="/savings-calculator" className="link">
                Calculate your per-member savings →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why Ardn for membership AI</span>
                <h2 className="h1 mt-3">
                  Built around <em>how you actually run.</em>
                </h2>
                <p className="body mt-4">
                  Your membership model is not a template, so your AI shouldn&apos;t
                  be one. We build to your dues structure, your class schedule, and
                  your systems — and connect to the platform you already use, or
                  pair with Ardn&apos;s own Membership Management if you want the
                  whole stack modernized. You own the app and the data.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Works with your current platform</div>
                      <p className="fl-body">Connects to your existing membership, billing, and CRM systems — no rip-and-replace required.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Retention-first</div>
                      <p className="fl-body">We target churn and dues recovery early because that is where the fastest ROI lives.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Live in weeks</div>
                      <p className="fl-body">Fixed quote in 48 hours, production-ready in 2–6 weeks, expanded one workflow at a time.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, model upgrades, and new features under one monthly subscription.</p>
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
                <p className="lede">Platforms, retention, who it&apos;s for, and cost.</p>
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

        <LeadForm source="AI for Membership Organizations page" />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Stop losing members <em>you could have kept.</em>
              </h2>
              <p className="lede">
                30-minute free call. We&apos;ll find the workflow costing you the
                most members and return a fixed quote within 48 hours.
              </p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">See AI Forge pricing</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
              <p style={{ marginTop: "10px", fontSize: "14px" }}>
                <Link href="/ai-for-insurance" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>AI for Insurance</Link>
                {" · "}
                <Link href="/ai-for-hospitality" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>AI for Hospitality</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
