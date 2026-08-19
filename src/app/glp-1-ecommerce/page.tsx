import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Solution page anchored to a real delivered build: a GLP-1 / telehealth
// ecommerce site. Targets the hot "GLP-1 / telehealth ecommerce platform"
// niche. Compliance-aware framing. No client names / metrics (no proof cleared).
export const metadata: Metadata = {
  title:
    "GLP-1 & Telehealth Ecommerce Development | Ardn",
  description:
    "Custom GLP-1 & telehealth ecommerce — patient intake, provider workflow, subscriptions & refills as one compliance-ready platform. New customers: free build.",
  keywords: [
    "GLP-1 ecommerce",
    "telehealth ecommerce platform",
    "GLP-1 platform development",
    "online weight loss store",
    "telehealth website development",
    "subscription telehealth ecommerce",
    "DTC healthcare ecommerce",
    "custom telehealth platform",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/glp-1-ecommerce",
    languages: {
      "en-US": "https://ardncloudsolutions.com/glp-1-ecommerce",
      "x-default": "https://ardncloudsolutions.com/glp-1-ecommerce",
    },
  },
  openGraph: {
    title: "GLP-1 & Telehealth Ecommerce Development | Launch Your Store | Ardn",
    description:
      "Custom GLP-1 / telehealth ecommerce — intake, subscriptions, refills, and provider/pharmacy integrations. Built for compliance, built to convert. New customers: free build.",
    url: "https://ardncloudsolutions.com/glp-1-ecommerce",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "GLP-1 and telehealth ecommerce platform development by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLP-1 & Telehealth Ecommerce Development | Ardn",
    description:
      "Custom GLP-1 / telehealth ecommerce — intake, subscriptions, refills, integrations. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What does a GLP-1 / telehealth ecommerce platform need that a normal store doesn't?",
    a: "A patient intake and eligibility questionnaire, provider review and prescription workflow, pharmacy or supplier integration for fulfillment, recurring subscriptions for refills, and careful handling of sensitive health data. We build all of it as one connected flow rather than stitching together plugins that don't talk to each other.",
  },
  {
    q: "Can you handle the subscription and refill model?",
    a: "Yes — recurring billing, automatic refill scheduling, dosage step-ups, pause and cancel, and dunning for failed payments are core to these builds. Retention and refill adherence is where the revenue is, so we design the flow around keeping patients on treatment.",
  },
  {
    q: "How do you handle compliance and patient data?",
    a: "We build on secure, production-grade infrastructure with encryption, access controls, and audit logging, and we structure the provider and pharmacy workflow to fit your compliance requirements. We are your development partner — we build to the regulatory framework you and your clinical/legal team operate under.",
  },
  {
    q: "Do you integrate with our providers, pharmacy, and payment processor?",
    a: "Yes. We connect the storefront to your tele-visit provider network, pharmacy or fulfillment partner, payment processor, and CRM so the whole journey — intake to refill — runs in one system instead of manual handoffs.",
  },
  {
    q: "How fast can we launch and what does it cost?",
    a: "Most builds reach a production-ready launch in weeks, not quarters, via our AI Forge Framework, with a fixed quote within 48 hours. It runs on one flat monthly subscription covering build, hosting, and iteration — and new customers pay nothing for the one-time build.",
  },
];

const features = [
  {
    title: "Patient Intake & Eligibility",
    body: "A conversion-optimized questionnaire that screens eligibility up front and routes qualified patients straight into the provider workflow.",
  },
  {
    title: "Provider & Rx Workflow",
    body: "Connect tele-visits, provider review, and prescription approval so the clinical step is built into the funnel — not a manual bottleneck.",
  },
  {
    title: "Subscriptions & Refills",
    body: "Recurring billing, automatic refill scheduling, dosage step-ups, pause/cancel, and failed-payment recovery — engineered for refill adherence and LTV.",
  },
  {
    title: "Pharmacy & Fulfillment",
    body: "Integrate your pharmacy or supplier so orders flow to fulfillment automatically and patients get status updates without your team in the loop.",
  },
  {
    title: "Compliance-Ready Foundation",
    body: "Encryption, access controls, and audit logging on production-grade infrastructure, built to the regulatory framework your clinical and legal team requires.",
  },
  {
    title: "Built to Convert",
    body: "Fast pages, a frictionless intake-to-checkout path, and AI-powered support for patient questions — so more visitors start and stay on treatment.",
  },
];

export default function Glp1EcommercePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/glp-1-ecommerce#service",
        name: "GLP-1 & Telehealth Ecommerce Development",
        serviceType: "Custom Telehealth & GLP-1 Ecommerce Platform Development",
        description:
          "Ardn builds and operates custom GLP-1 and telehealth ecommerce platforms — patient intake, provider and prescription workflow, subscriptions and refills, and pharmacy integration — via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/glp-1-ecommerce",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: { "@type": "Audience", audienceType: "Telehealth, GLP-1, and DTC healthcare brands" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/glp-1-ecommerce#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/glp-1-ecommerce#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "GLP-1 & Telehealth Ecommerce", item: "https://ardncloudsolutions.com/glp-1-ecommerce" },
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
                <span className="eyebrow">GLP-1 &amp; Telehealth Ecommerce</span>
                <h1 className="display reveal">
                  Launch your GLP-1 store — <em>built to convert and refill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Off-the-shelf carts can&apos;t handle intake, provider review,
                  prescriptions, and refills — so most telehealth brands duct-tape
                  five tools together and lose patients in the gaps. We build the
                  whole journey as one connected platform: eligibility intake,
                  clinical workflow, subscriptions, and pharmacy fulfillment —
                  designed for compliance and engineered to keep patients on
                  treatment. Live in weeks, run for you.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Intake → Rx → Refill</span>
                  <span className="badge is-emerald">Subscriptions built in</span>
                  <span className="badge is-canvas">Compliance-ready</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">What we build</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">One connected platform</div>
                  <ul className="features mt-3">
                    <li>Eligibility intake questionnaire</li>
                    <li>Provider review &amp; prescription flow</li>
                    <li>Subscriptions &amp; automatic refills</li>
                    <li>Pharmacy &amp; fulfillment integration</li>
                    <li>Secure, compliance-ready foundation</li>
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

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">Intake to refill, <em>in one flow.</em></h2>
              </div>
              <div>
                <p className="lede">Every step a telehealth brand needs — connected so patients move from interested to on-treatment without falling through a gap between tools.</p>
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
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/custom-ecommerce-development" className="link">Selling something other than treatments? See custom ecommerce →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">Cut your CRM per-seat licensing costs →</Link>
              <Link href="/savings-calculator" className="link">Calculate your per-seat savings →</Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why build custom</span>
                <h2 className="h1 mt-3">The money is in <em>the refill.</em></h2>
                <p className="body mt-4">
                  In GLP-1 and telehealth, acquisition is expensive and the margin
                  lives in retention — patients who stay on treatment and keep
                  refilling. A generic cart can take a first order, but it can&apos;t
                  run the intake, the clinical step, and the subscription engine
                  that keep patients on program. We build the platform around the
                  metric that matters: refill adherence.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">One platform, no duct tape</div>
                      <p className="fl-body">Intake, Rx, billing, and fulfillment connected — fewer drop-offs, fewer manual handoffs.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Subscription-first</div>
                      <p className="fl-body">Refills, step-ups, and dunning engineered in from day one — not bolted on later.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Compliance-aware</div>
                      <p className="fl-body">Built on secure infrastructure to the regulatory framework your team operates under.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it for you</div>
                      <p className="fl-body">Hosting, monitoring, and iteration under one subscription as you scale.</p>
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
                <p className="lede">Intake, subscriptions, compliance, integrations, and cost.</p>
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

        <LeadForm source="GLP-1 & Telehealth Ecommerce page" />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Go live with a platform <em>built for refills.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll map your intake-to-refill journey and give you a fixed quote within 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">See pricing</Link>
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
