import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Broad-money-keyword HUB page for the repositioned brand: "custom software /
// platform / application development." This is the top-of-cluster page that
// captures the high-intent commercial demand ("custom software development
// company") and links down to every solution spoke (portals, ecommerce,
// AI Forge, verticals). Positioning: replace/simplify/connect your tech stack
// in weeks, flat monthly fee, no per-seat, built AND run for you. AI is one
// capability, not the whole pitch.
export const metadata: Metadata = {
  title: "Custom Software & Platform Development | Ardn",
  description:
    "We design, build & run custom software, platforms & portals that replace or connect your tools — live in weeks, one flat fee. New customers build free.",
  keywords: [
    "custom software development",
    "custom software development company",
    "custom platform development",
    "custom application development",
    "custom web application development",
    "build custom software",
    "bespoke software development",
    "custom portal development",
    "system integration services",
    "business process automation",
    "replace software stack",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-software-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-software-development",
      "x-default": "https://ardncloudsolutions.com/custom-software-development",
    },
  },
  openGraph: {
    title: "Custom Software & Platform Development | Ardn",
    description:
      "Custom software, platforms & portals that replace or connect your tools — built and run for you in weeks, one flat monthly fee. New customers build free.",
    url: "https://ardncloudsolutions.com/custom-software-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom software & platform development — built and run for you by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Platform Development | Ardn",
    description:
      "Custom software, platforms & portals — built and run for you in weeks, one flat monthly fee. New customers build free.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

interface Faq {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

const FAQS: Faq[] = [
  {
    q: "What kind of custom software do you build?",
    a: "Custom web applications and internal platforms, client and customer portals, systems that connect the tools you already run, workflow and process automation, and custom commerce or membership systems. If it runs your business and off-the-shelf software doesn't quite fit, we can build it — and run it for you.",
  },
  {
    q: "How is custom software different from off-the-shelf tools?",
    a: "Off-the-shelf tools make you bend your process to fit them, charge per user as you grow, and leave gaps you patch with more tools. Custom software is shaped to exactly how you work, you own it, and it does the job of several tools at once — usually for a flat fee that beats stacking subscriptions.",
    link: { href: "/compare/custom-software-vs-saas", label: "See the full cost comparison →" },
  },
  {
    q: "How long does it take to build?",
    a: "Most builds reach a production-ready first version in 2–6 weeks using our AI Forge Framework, with a fixed quote and delivery date within 48 hours of the first call. We ship a working core fast, then expand — you're not waiting months to see anything.",
  },
  {
    q: "How much does it cost?",
    a: "It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — no per-seat licensing that climbs as you grow. New customers pay nothing for the one-time build; you only pay the monthly fee once it's live.",
    link: { href: "/compare/salesforce-seat-cost-vs-custom-portal", label: "See the Salesforce & HubSpot seat-cost math →" },
  },
  {
    q: "Do we own the software you build?",
    a: "You own the IP and the data. We retain rights only to the underlying frameworks and tooling we reuse across clients. If you ever leave, you get a full export and complete documentation — no lock-in.",
  },
  {
    q: "Can it connect to or replace the tools we already use?",
    a: "Both. We build software that integrates with your CRM, billing, and back-office systems so everything stays in sync — or replaces the expensive, ill-fitting tools you've outgrown. Whichever saves you more time and money.",
  },
];

const services = [
  {
    title: "Custom Web Apps & Platforms",
    body: "Purpose-built applications and internal platforms shaped to your exact workflow — the core of how your business runs, not a generic tool you fight.",
  },
  {
    title: "Client & Customer Portals",
    body: "Branded portals where clients, partners, or customers self-serve — cutting the per-seat licenses you pay for light users. Built and integrated with your systems.",
  },
  {
    title: "Connect Your Stack",
    body: "Integrations that make your CRM, billing, support, and back-office tools talk to each other, so data stays in one place instead of scattered across silos.",
  },
  {
    title: "Replace Expensive Tools",
    body: "Outgrown a platform that charges per seat and still doesn't fit? We rebuild it as software you own, for a flat fee — usually cheaper over time than the big-name subscription.",
  },
  {
    title: "Workflow & Process Automation",
    body: "Automate the repetitive, manual steps eating your team's time — approvals, data entry, routing, reporting — inside one system built around your process.",
  },
  {
    title: "AI Where It Helps",
    body: "When AI moves the needle — support, document processing, forecasting — we build it in with the AI Forge Framework. A capability, not a gimmick.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-software-development#service",
        name: "Custom Software & Platform Development",
        serviceType: "Custom Software Development & Managed Operation",
        description:
          "Ardn designs, builds, and operates custom software, platforms, and portals for companies across the US — replacing or connecting the tools they rely on. Production-ready in 2–6 weeks via the AI Forge Framework, run under one flat monthly subscription.",
        url: "https://ardncloudsolutions.com/custom-software-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-software-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-software-development#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
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
                <span className="eyebrow">Custom Software &amp; Platform Development</span>
                <h1 className="display reveal">
                  Custom software, built for <em>how you actually work.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Off-the-shelf tools make you bend your business to fit them,
                  then charge you per user to grow. We do the opposite: custom
                  software, platforms, and portals shaped around your exact
                  process — replacing or connecting the tools you already run.
                  Live in weeks, one flat monthly fee, built and run for you.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Weeks, not months</span>
                  <span className="badge is-emerald">Cut CRM per-seat costs</span>
                  <span className="badge is-canvas">You own it</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#services" className="btn btn-secondary btn-lg">What we build</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">When off-the-shelf stops fitting</div>
                  <ul className="features mt-3">
                    <li>Custom web apps &amp; internal platforms</li>
                    <li>Client &amp; customer portals</li>
                    <li>Connect or replace your existing tools</li>
                    <li>Workflow &amp; process automation</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* SERVICES */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">One platform, <em>not a pile of tools.</em></h2>
              </div>
              <div>
                <p className="lede">We start with your process and your biggest pain point, build the software around it, then run it for you — so it keeps working long after launch.</p>
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
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why build with Ardn</span>
                <h2 className="h1 mt-3">Custom, <em>without the usual risk.</em></h2>
                <p className="body mt-4">
                  Custom software has a bad reputation — expensive, slow, and the
                  team vanishes after launch. We built our model to kill all three:
                  a fixed quote in 48 hours, production in weeks on the AI Forge
                  Framework, and one team that builds it AND runs it for a flat
                  monthly fee. You own the result.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Built around your process</div>
                      <p className="fl-body">We model how you actually work, then build to it — no bending your business to fit a tool.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Weeks, not months</div>
                      <p className="fl-body">Fixed quote in 48 hours, production-ready first version in 2–6 weeks, expanded from there.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Flat fee, no per-seat tax</div>
                      <p className="fl-body">One monthly subscription covers build, hosting, and changes — it doesn&rsquo;t climb as you grow.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and iteration under one team — no vanishing act, no lock-in.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER — links to the solution spokes */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where we build most</span>
                <h2 className="h1 mt-3">Common builds <em>we&rsquo;re asked for.</em></h2>
              </div>
              <div>
                <p className="lede">Every build is custom, but these are the shapes that come up most. Start anywhere — it all runs on the same model.</p>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Cut per-seat costs</span>
                <h3 className="h3">Custom Portals</h3>
                <p className="body">Seller, operations &amp; customer portals that cut per-seat CRM costs.</p>
                <span className="link">Custom portal development →</span>
              </Link>
              <Link href="/custom-partner-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Cut per-login costs</span>
                <h3 className="h3">Custom Partner Portals</h3>
                <p className="body">Channel, dealer, broker &amp; vendor portals that replace per-login Partner Community seats.</p>
                <span className="link">Custom partner portal development →</span>
              </Link>
              <Link href="/custom-ecommerce-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Ecommerce</h3>
                <p className="body">Merch stores, subscriptions, and complex catalogs built to your model.</p>
                <span className="link">Explore ecommerce →</span>
              </Link>
              <Link href="/ai-forge" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI Forge</h3>
                <p className="body">Custom AI apps built and run for you when AI is the right tool for the job.</p>
                <span className="link">Explore AI Forge →</span>
              </Link>
              <Link href="/chapter-management-software" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Chapter &amp; Dues Management</h3>
                <p className="body">Automatic dues, member records, and events for fraternities, clubs &amp; orgs.</p>
                <span className="link">Explore chapter management →</span>
              </Link>
              <Link href="/membership-management" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Membership Management</h3>
                <p className="body">A full platform for YMCAs, gyms, studios &amp; associations.</p>
                <span className="link">Explore membership →</span>
              </Link>
              <Link href="/ai-for-insurance" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Insurance</h3>
                <p className="body">Claims, underwriting &amp; service workflows built for insurance agencies and carriers.</p>
                <span className="link">Explore AI for insurance →</span>
              </Link>
              <Link href="/ai-for-hospitality" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Hospitality</h3>
                <p className="body">Front-desk, booking &amp; guest-service builds for hotels and hospitality groups.</p>
                <span className="link">Explore AI for hospitality →</span>
              </Link>
              <Link href="/ai-for-membership-organizations" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">AI for Membership Orgs</h3>
                <p className="body">Member records, renewals &amp; engagement builds for associations and membership organizations.</p>
                <span className="link">Explore AI for membership orgs →</span>
              </Link>
              <Link href="/ai-app-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom AI App Development</h3>
                <p className="body">A standalone AI app or workflow, built and run for you when AI is the core of the build.</p>
                <span className="link">Explore AI app development →</span>
              </Link>
              <Link href="/glp-1-ecommerce" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">GLP-1 &amp; Telehealth Ecommerce</h3>
                <p className="body">Custom storefronts and fulfillment for GLP-1 and telehealth brands.</p>
                <span className="link">Explore GLP-1 ecommerce →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">How to cut CRM licensing costs →</Link>
              <Link href="/reduce-dynamics-365-licensing-costs" className="link">Reduce Dynamics 365 &amp; Power Platform costs →</Link>
              <Link href="/savings-calculator" className="link">Calculate your per-seat savings →</Link>
              <Link href="/license-guard" className="link">Reclaim dormant Salesforce licenses first →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">Salesforce &amp; HubSpot per-seat cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Custom software vs. SaaS: total cost →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. custom portal cost →</Link>
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
                <p className="lede">What we build, how it&rsquo;s different, how long it takes, and what you own.</p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
              {FAQS.map((faq) => (
                <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "18px", color: "#14142B" }}>{faq.q}</summary>
                  <p style={{ marginTop: "14px", color: "#475467", fontSize: "16px", lineHeight: 1.6 }}>{faq.a}</p>
                  {faq.link && (
                    <Link href={faq.link.href} className="link" style={{ display: "inline-block", marginTop: "10px" }}>
                      {faq.link.label}
                    </Link>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>

        <LeadForm source="Custom Software Development page" heading="Tell us what you're trying to build" sub="A sentence or two about the problem is plenty. We'll reply within 4 business hours with a fixed quote — no obligation." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Describe the problem. <em>We&rsquo;ll scope the build.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll find the highest-leverage thing to build first and return a fixed quote within 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">See pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
