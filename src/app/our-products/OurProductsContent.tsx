"use client";

import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

/*
 * Product hub, organised the way the site now presents Ardn: named products
 * first, then services, then industries, then one section that gathers the
 * Salesforce-specific offerings (menu, footer and old /salesforce-payments
 * links land on #salesforce). Keep Salesforce out of the top sections.
 */

const PRODUCTS = [
  {
    eyebrow: "Club Steward · Golf & country clubs",
    title: "Every club in your portfolio. One member record.",
    body: "Websites and online join, membership sales, contracts, dues, the tee sheet, the pro shop and reporting for multi-club golf and country club operators.",
    href: "/golf-club-management-software",
    cta: "Explore Club Steward",
    accent: "#0F9870",
  },
  {
    eyebrow: "Nonprofit Management",
    title: "Members and donors in one record.",
    body: "Membership, billing, check-in, programs and a full fundraising CRM for community centers, faith-based community centers and member-based nonprofits.",
    href: "/nonprofit-management-software",
    cta: "Explore Nonprofit Management",
    accent: "#C2185B",
  },
  {
    eyebrow: "Membership Management",
    title: "Run your members on one flexible platform.",
    body: "Sign-ups, dues, classes, attendance and a branded member portal for gyms, studios, clubs and associations.",
    href: "/membership-management",
    cta: "Explore Membership Management",
    accent: "#4840E0",
  },
  {
    eyebrow: "Ardn CRM · Construction & field service",
    title: "From first call to finished job, on one record.",
    body: "Pipeline, quotes that convert to jobs, a service desk with SLA clocks, dispatch and work orders for roofing, home improvement and general contractors. Never priced per seat.",
    href: "/construction-crm",
    cta: "Explore Construction CRM",
    accent: "#2563EB",
  },
];

const SERVICES = [
  { title: "AI Forge", body: "Custom AI applications designed, built, hosted and improved for you under one monthly subscription.", href: "/ai-forge", link: "Explore AI Forge" },
  { title: "Custom Software Development", body: "Software shaped around exactly how your business works, built and run by one accountable team.", href: "/custom-software-development", link: "Explore custom software" },
  { title: "Custom AI App Development", body: "From discovery to a production AI app in weeks, then hosted and iterated for you.", href: "/ai-app-development", link: "Explore AI app development" },
  { title: "Custom Portal Development", body: "Customer, member and staff portals that connect to the systems you already run.", href: "/custom-portal-development", link: "Explore custom portals" },
  { title: "Partner Portal Development", body: "Portals for partners, dealers and resellers without a per-login bill.", href: "/custom-partner-portal-development", link: "Explore partner portals" },
  { title: "Custom Ecommerce Development", body: "Stores, subscriptions and complex catalogs built to your model and run for you.", href: "/custom-ecommerce-development", link: "Explore custom ecommerce" },
];

const INDUSTRIES = [
  { title: "Golf & Country Clubs", body: "Club Steward for multi-club operators.", href: "/golf-club-management-software" },
  { title: "Nonprofits & Community Centers", body: "Nonprofit Management for community centers, faith-based community centers and youth and family nonprofits.", href: "/nonprofit-management-software" },
  { title: "GLP-1 & Telehealth", body: "Intake, provider workflow, subscriptions and refills on one platform.", href: "/glp-1-ecommerce" },
  { title: "Chapters & Associations", body: "Automatic dues, member records and events.", href: "/chapter-management-software" },
  { title: "Insurance", body: "AI for carriers and agencies, with people in the loop.", href: "/ai-for-insurance" },
  { title: "Hospitality", body: "AI concierge, booking automation and service routing.", href: "/ai-for-hospitality" },
];

export default function OurProductsContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Products &amp; services</span>
              <h1 className="display reveal">Software built for <em>the industries we know.</em></h1>
              <p className="lede reveal reveal-d2">Named products for golf and country clubs, nonprofits and member organizations, plus custom software and AI built around how you work. Every one of them run for you as a managed service.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#suite" className="btn btn-primary btn-lg btn-arrow">See the products</Link>
                <Link href="#services" className="btn btn-secondary btn-lg">Our services</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">At a glance</div>
                <ul className="features mt-3">
                  <li>Club Steward — golf &amp; country club management</li>
                  <li>Nonprofit Management — members and donors in one record</li>
                  <li>Membership Management — gyms, studios, clubs</li>
                  <li>Construction CRM — jobs, service and dispatch</li>
                  <li>AI Forge &amp; custom software — built and run for you</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* PRODUCTS */}
      <section className="section" id="suite">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Products</span>
              <h2 className="h1 mt-3">Built for one job. <em>Run for you.</em></h2>
            </div>
            <div>
              <p className="lede">Each product is built for a specific kind of organization, so it fits on day one instead of after a year of configuration. <Link href="/work" style={{ color: "var(--indigo)", fontWeight: 600 }}>See it live: what we&rsquo;ve launched →</Link></p>
            </div>
          </div>
          <div className="grid-3">
            {PRODUCTS.map((p) => (
              <article key={p.href} className="product-card" style={{ "--accent": p.accent } as React.CSSProperties}>
                <div className="product-eyebrow">{p.eyebrow}</div>
                <h3 className="h2">{p.title}</h3>
                <p className="body">{p.body}</p>
                <Link href={p.href} className="btn btn-primary btn-arrow mt-auto">{p.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section is-canvas" id="services">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Services</span>
              <h2 className="h1 mt-3">Need something <em>built for you?</em></h2>
            </div>
            <div>
              <p className="lede">When no product fits, our team designs, builds and runs custom software with the <Link href="/ai-forge" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI Forge Framework</Link>, backed by 30+ years of technology and consulting experience.</p>
            </div>
          </div>
          <div className="grid-3">
            {SERVICES.map((sv) => (
              <Link key={sv.href} href={sv.href} className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">{sv.title}</h3>
                <p className="body">{sv.body}</p>
                <span className="link">{sv.link} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Industries</span>
              <h2 className="h1 mt-3">Find your <em>industry.</em></h2>
            </div>
          </div>
          <div className="grid-3">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.href} href={ind.href} className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">{ind.title}</h3>
                <p className="body">{ind.body}</p>
                <span className="link">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SALESFORCE SOLUTIONS — the one place Salesforce-specific offerings
          live. Menu, footer and retired /salesforce-payments links land here. */}
      <section className="section is-canvas" id="salesforce">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Salesforce solutions</span>
              <h2 className="h1 mt-3">Already run on <em>Salesforce?</em></h2>
            </div>
            <div>
              <p className="lede">Native Salesforce products and a Florida-based consulting team for implementation, integration, license audits and managed services.</p>
            </div>
          </div>
          <div className="grid-3">
            <Link href="/storefronts" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Storefronts</h3>
              <p className="body">Ecommerce that runs inside your Salesforce org: catalog, checkout, orders and memberships.</p>
              <span className="link">Explore Storefronts →</span>
            </Link>
            <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">License Guard</h3>
              <p className="body">Finds inactive Salesforce users, warns them, and deactivates them on your schedule.</p>
              <span className="link">Explore License Guard →</span>
            </Link>
            <div className="card">
              <h3 className="h3">Salesforce consulting</h3>
              <p className="body">Implementation, integration and managed services from a Florida team:</p>
              <ul className="features">
                <li><Link href="/salesforce-consulting-orlando" style={{ color: "var(--indigo)", fontWeight: 600 }}>Orlando</Link></li>
                <li><Link href="/salesforce-consulting-tampa" style={{ color: "var(--indigo)", fontWeight: 600 }}>Tampa Bay</Link></li>
                <li><Link href="/salesforce-consulting-miami" style={{ color: "var(--indigo)", fontWeight: 600 }}>Miami</Link></li>
                <li><Link href="/salesforce-consulting-jacksonville" style={{ color: "var(--indigo)", fontWeight: 600 }}>Jacksonville</Link></li>
              </ul>
            </div>
          </div>
          <p className="body mt-5" style={{ textAlign: "center" }}>
            <Link href="/reduce-crm-licensing-costs" className="link">Paying for CRM seats people barely use? Read the guide to cutting licensing costs →</Link>
          </p>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Not sure where to start?</h2>
              <p className="body mt-2">Book a free 30-minute discovery call with our Orlando-based team. We will map the right product — or a custom AI Forge build — to your biggest current pain.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a discovery call</a>
              <Link href="/about-ardn" className="btn btn-secondary btn-lg">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP — All upcoming products are Salesforce-native AppExchange
           tools, so this section keeps its SF-native framing intact. */}
      <section className="section" id="roadmap">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Coming soon</span>
              <h2 className="h1 mt-3">What is on <em>the roadmap.</em></h2>
            </div>
            <div>
              <p className="lede">Six more Salesforce-native products in development. All self-funding. All designed to pay back within one quarter.</p>
            </div>
          </div>

          <div className="grid-2">
            <article className="product-card" style={{ "--accent": "#6F4ED7" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">FlexiStore</h3>
              <p className="body">Multi-location inventory management native to Salesforce. Real-time visibility, transfers, and stock-level automation.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#D94A6A" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">StageGuard</h3>
              <p className="body">Enforce stage-gate rules on Opportunities, Cases, and custom objects. Compliance before progression.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#0F9870" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">SmartLicense</h3>
              <p className="body">ML-powered Salesforce license demand forecasting. Know what you need before renewal — not after.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#B45309" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">FlowForward</h3>
              <p className="body">One-click Flow health checks and performance scoring. Ship faster, break nothing.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#38A0F8" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">KnowledgeBuilder</h3>
              <p className="body">Auto-generates Salesforce Knowledge articles from closed Cases. Documentation that writes itself.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#4840E0" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">PageAlert</h3>
              <p className="body">In-app system announcements and banners native to Salesforce. No email needed for critical comms.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SUGGEST A PRODUCT */}
      <section className="section is-indigo" id="suggest">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Shape what we build</span>
              {/* Broadened framing: not just Salesforce problems — any problem
                  our AI Forge Framework or Salesforce-native products could
                  solve. */}
              <h2 className="h1 mt-3" style={{ color: "#fff" }}>Got a problem <em style={{ color: "#fff" }}>we have not solved yet?</em></h2>
              <p className="body mt-4">Tell us what you need. Our shortest path from suggestion to AppExchange listing has been six weeks. Custom AI Forge builds typically ship in 2–6.</p>
            </div>
            <div>
              <ul className="fl">
                <li>
                  <div className="fl-num">01</div>
                  <div>
                    <div className="fl-head">Submit your idea</div>
                    <p className="fl-body !text-white ">Short form. Describe the pain, not the solution. We take it from there.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num">02</div>
                  <div>
                    <div className="fl-head">We review and scope</div>
                    <p className="fl-body !text-white ">Our product team evaluates technical fit, timeline, and commercial model.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num">03</div>
                  <div>
                    <div className="fl-head">We build it</div>
                    <p className="fl-body !text-white ">If the idea fits our philosophy — self-funding, fast ROI, simple to operate — it gets scheduled.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <a href="/contact-us" className="btn btn-on-dark btn-lg btn-arrow">Suggest a product</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <div className="testimonial">
            <span className="eyebrow">What clients say</span>
            <p className="quote mt-4">Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.</p>
            <div className="attribution">
              <div className="avatar">JV</div>
              <div>
                <div className="who">Jay Vashi</div>
                {/* Role generalised to match dual-pillar positioning. */}
                <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="contact">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Tell us what <em>you need.</em></h2>
            <p className="lede">30-minute discovery call. We will map the right product — or a custom AI Forge build — to your biggest current pain point.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book a discovery call</a>
              <Link href="/about-ardn" className="btn btn-outline-light btn-lg">Meet the Ardn team</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
