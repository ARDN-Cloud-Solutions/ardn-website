import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Spoke page targeting the "custom CRM software" commercial-intent cluster
// (custom CRM software / custom CRM development / custom CRM vs Salesforce /
// build your own CRM). Honest positioning: ARDN builds custom CRM software
// that you own, built AND run for a flat fee — which neutralizes the standard
// "custom CRM is expensive and a maintenance nightmare" objection. It also
// routes the "should I keep my CRM instead?" buyer to the per-seat portal
// wedge (/custom-portal-development, /reduce-crm-licensing-costs) rather than
// pretending a rebuild is always right. No fabricated clients/metrics/prices.
export const metadata: Metadata = {
  title: "Custom CRM Software Development | Ardn",
  description:
    "Custom CRM software built and run for you in weeks — shaped to your process, one flat fee, no per-seat licenses. Own your CRM, or keep the one you have.",
  keywords: [
    "custom CRM software",
    "custom CRM development",
    "custom CRM software development",
    "build your own CRM",
    "custom CRM vs Salesforce",
    "bespoke CRM software",
    "custom CRM for light users",
    "flat fee CRM software",
    "CRM software no per-seat",
    "custom sales software",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-crm-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-crm-software",
      "x-default": "https://ardncloudsolutions.com/custom-crm-software",
    },
  },
  openGraph: {
    title: "Custom CRM Software Development | Ardn",
    description:
      "Custom CRM software shaped to your exact process — built and run for you in weeks, one flat fee, no per-seat licenses. New customers build free.",
    url: "https://ardncloudsolutions.com/custom-crm-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom CRM software development — built and run for you by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Software Development | Ardn",
    description:
      "Custom CRM software built and run for you in weeks — one flat fee, no per-seat licenses. New customers build free.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is custom CRM software?",
    a: "Custom CRM software is a customer-relationship system built around your exact sales, service, and operations process instead of a vendor's template. You own it, it does only what you need (and everything you need), and — with Ardn — it runs on one flat monthly fee instead of a per-seat license that climbs as you grow.",
  },
  {
    q: "Custom CRM vs Salesforce or HubSpot — when does building make sense?",
    a: "Building makes sense when off-the-shelf CRMs force you to bend your process to fit them, when you're stacking add-ons and integrations to cover the gaps, or when per-seat licensing has become the biggest line item without matching the value. If the platform genuinely fits your power users and the real problem is only cost for light users, you usually shouldn't rebuild — keep the CRM and move light users to a custom portal instead. We'll tell you honestly which one fits.",
  },
  {
    q: "Isn't a custom CRM expensive and hard to maintain?",
    a: "That's the reputation, and it's earned when a project ships and the team disappears, leaving you to run it. Our model is the opposite: a fixed quote in 48 hours, a production-ready first version in 2–6 weeks via the AI Forge Framework, and one team that builds it AND runs it — hosting, monitoring, and changes — under a single flat monthly fee. You get the ownership without inheriting the maintenance burden.",
  },
  {
    q: "Do I have to replace my current CRM to work with you?",
    a: "No. If your CRM fits your power users and the pain is cost or a few missing workflows, the smarter move is often to keep it and add custom software around it — a portal for light users, or integrations that connect it to the rest of your stack. A full custom CRM is for teams whose platform genuinely no longer fits. We start by figuring out which is true for you before anyone builds anything.",
  },
  {
    q: "Does the custom CRM connect to the tools we already run?",
    a: "Yes. We build it to integrate with your billing, support, marketing, and back-office systems through their APIs so data stays in one place instead of scattered across silos — the same integration work we do when we connect or replace any part of a tech stack.",
  },
  {
    q: "How long does it take, what does it cost, and do we own it?",
    a: "Most builds reach a production-ready first version in 2–6 weeks, with a fixed quote and delivery date within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — no per-seat licensing. You own the IP and your data; if you ever leave, you get a full export and complete documentation. New customers pay nothing for the one-time build.",
  },
];

const features = [
  {
    title: "Built To Your Process",
    body: "Your pipeline, your stages, your fields, your automations — the CRM is shaped to how your team actually sells and serves, not a generic template you fight.",
  },
  {
    title: "You Own It Outright",
    body: "The IP and the data are yours. No vendor lock-in, no surprise contract terms — a full export and documentation whenever you want them.",
  },
  {
    title: "Flat Fee, Not Per-Seat",
    body: "Add as many users as you like without the bill climbing. One monthly subscription covers the build, hosting, and iteration — cost stops scaling with headcount.",
  },
  {
    title: "Connects Your Whole Stack",
    body: "Two-way integrations with billing, support, marketing, and back-office tools so your customer data lives in one system instead of a dozen silos.",
  },
  {
    title: "We Build It AND Run It",
    body: "One team ships it fast, then keeps it running — hosting, monitoring, and changes as your process evolves. No hand-off, no vanishing act.",
  },
  {
    title: "AI Where It Helps",
    body: "When AI moves the needle — lead scoring, note-taking, document processing — we build it in with the AI Forge Framework. A capability, not the whole pitch.",
  },
];

export default function CustomCrmSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-crm-software#service",
        name: "Custom CRM Software Development",
        serviceType: "Custom CRM Software Development & Managed Operation",
        description:
          "Ardn designs, builds, and operates custom CRM software shaped to a company's exact sales, service, and operations process — owned by the client, integrated with the rest of their stack, and run under one flat monthly fee with no per-seat licensing. Production-ready in 2–6 weeks via the AI Forge Framework.",
        url: "https://ardncloudsolutions.com/custom-crm-software",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-crm-software#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-crm-software#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom CRM Software", item: "https://ardncloudsolutions.com/custom-crm-software" },
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
                <span className="eyebrow">Custom CRM Software Development</span>
                <h1 className="display reveal">
                  Custom CRM software, <em>built for how you actually sell.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Off-the-shelf CRMs make you bend your process to fit them, then
                  bill you per user to grow. We build custom CRM software shaped to
                  your exact pipeline — owned by you, connected to the rest of your
                  stack, and run on one flat monthly fee. No per-seat tax, no
                  vanishing team after launch.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">You own it</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Built &amp; run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">What we build</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">When off-the-shelf CRM stops fitting</div>
                  <ul className="features mt-3">
                    <li>Built to your exact sales process</li>
                    <li>Own the IP &amp; your data</li>
                    <li>Flat fee — no per-seat licenses</li>
                    <li>Connects your billing, support &amp; stack</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">Just want to cut per-seat CRM costs? Start here →</Link>
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
                <h2 className="h1 mt-3">A CRM that fits you — <em>not the other way around.</em></h2>
              </div>
              <div>
                <p className="lede">We model how your team actually works, build the CRM around it, then run it for you — so it keeps fitting as you grow.</p>
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
          </div>
        </section>

        {/* BUILD VS KEEP — honest routing */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Build vs. keep</span>
                <h2 className="h1 mt-3">Sometimes the smart move is <em>not</em> a rebuild.</h2>
                <p className="body mt-4">
                  We&apos;d rather tell you the truth than sell you a project. A
                  full custom CRM is the right call when your platform genuinely no
                  longer fits how you work. But if the platform fits your power
                  users and the real problem is cost — you&apos;re paying full
                  per-seat licenses for people who barely use it — you usually
                  shouldn&apos;t rebuild at all. Keep your CRM and move those light
                  users to a custom portal instead. We&apos;ll help you figure out
                  which one you actually need before anyone writes code.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Build a custom CRM</div>
                      <p className="fl-body">When your process has outgrown off-the-shelf and you want to own the system that runs your business.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Keep your CRM, cut the bill</div>
                      <p className="fl-body">When the platform fits but per-seat cost doesn&apos;t — <Link href="/custom-portal-development" className="link">move light users to a portal</Link> and keep the CRM as system of record.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first, decide later</div>
                      <p className="fl-body">Before either, right-size what you already pay for — see <Link href="/reduce-crm-licensing-costs" className="link">how to cut CRM licensing costs</Link>.</p>
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
                <p className="lede">When to build, cost and maintenance, integrations, and what you own.</p>
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
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
              <Link href="/custom-portal-development" className="link">Cut per-seat costs with a custom portal →</Link>
              <Link href="/savings-calculator" className="link">Calculate your per-seat savings →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Custom software vs. SaaS: total cost →</Link>
            </div>
          </div>
        </section>

        <LeadForm source="Custom CRM Software page" heading="Tell us what your CRM needs to do" showSeatQualifiers sub="Tell us which CRM you run today and roughly how many users. We'll come back with whether to build, connect, or move light users to a portal — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Own the CRM that <em>runs your business.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how you sell and serve today, tell you honestly whether to build or keep, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Same three flat-fee tiers power every build — Launch, Scale, and Enterprise. No per-seat pricing, ever.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
