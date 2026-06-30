"use client";

import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

/*
 * COPYWRITING / POSITIONING NOTES (Dual-pillar product hub):
 *
 * 1. AI Forge is now added to the product suite (it was previously missing).
 *    The suite count is updated everywhere from 5 → 6.
 * 2. Products are presented in two clearly-labelled sections:
 *      Section A — Custom development & AI-built (Salesforce-capable)
 *      Section B — Salesforce-native cloud products
 *    This makes the hybrid model legible to visitors AND signals to search
 *    engines that the page covers both intent categories.
 * 3. Membership Management is repositioned away from "Run your members inside
 *    Salesforce" to the standalone / AI-built / SF-capable framing.
 * 4. The roadmap section keeps its Salesforce-native framing because all the
 *    upcoming products in development are Salesforce-native AppExchange tools.
 */

export default function OurProductsContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Products</span>
              <h1 className="display reveal">The Ardn <em>product suite.</em></h1>
              {/* Lede now covers both pillars — custom AI builds AND
                  Salesforce-native products. */}
              <p className="lede reveal reveal-d2">Six focused products from a Florida-based team. Custom AI applications via the AI Forge Framework, an AI-built membership platform that runs anywhere, and four Salesforce-native cloud products that install in days.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#suite" className="btn btn-primary btn-lg btn-arrow">Explore the suite</Link>
                <Link href="#roadmap" className="btn btn-secondary btn-lg">See what is coming</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">Suite at a glance</div>
                {/* AI Forge added; Membership Management repositioned. The
                    descriptors mirror each product's true Cat 1/Cat 2
                    framing. */}
                <ul className="features mt-3">
                  <li>AI Forge — custom AI apps, built in weeks</li>
                  <li>Membership Management — YMCAs, gyms, clubs (AI-built)</li>
                  <li>Storefronts — Salesforce-native commerce</li>
                  <li>License Guard — detect and reclaim inactive Salesforce seats</li>
                  <li>Salesforce Payments — quote-to-cash inside Salesforce</li>
                  <li>ReplyCX — AI support across every channel</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust bar reinforces Florida/SF credibility under the hero. */}
      <TrustBar />

      {/* ============================================================
          SECTION A — CUSTOM DEVELOPMENT & AI-BUILT (Salesforce-capable)
          ============================================================
          Lead with the new Cat 2 pillar. Two products, both AI-built and
          CRM-agnostic, both Salesforce-capable.
      */}
      <section className="section" id="suite">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Custom development &amp; AI-built</span>
              <h2 className="h1 mt-3">Built fresh. <em>Salesforce-capable.</em></h2>
            </div>
            <div>
              <p className="lede">Standalone products and custom builds powered by our proprietary AI Forge Framework. CRM-agnostic by default, with deep Salesforce, HubSpot, and Microsoft Dynamics integrations when you need them.</p>
            </div>
          </div>

          <div className="grid-2">
            <article className="product-card" style={{ "--accent": "#7C3AED" } as React.CSSProperties}>
              <div className="product-eyebrow">AI Forge · Custom development</div>
              <h3 className="h2">Custom AI apps, shipped in weeks.</h3>
              <p className="body">Design, build, deploy, and operate a custom AI application under one monthly subscription. Three tiers — Launch ($3,000/mo), Scale ($4,500/mo), and Enterprise (from $12K/mo). Production in 2–6 weeks.</p>
              <Link href="/ai-forge" className="btn btn-primary btn-arrow mt-auto">Explore AI Forge</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#C2185B" } as React.CSSProperties}>
              <div className="product-eyebrow">Membership Management · AI-built</div>
              <h3 className="h2">Run your members on one flexible platform.</h3>
              <p className="body">An AI-built membership platform for YMCAs, gyms, studios, clubs, and associations. Sign-ups, billing, class scheduling, and a member portal — runs standalone or alongside Salesforce, HubSpot, and your existing back-office tools.</p>
              <Link href="/membership-management" className="btn btn-primary btn-arrow mt-auto">Explore Membership Management</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION B — SALESFORCE-NATIVE CLOUD PRODUCTS
          ============================================================
          Cat 1 products keep their Salesforce-native framing intact. Storefronts,
          License Guard, Salesforce Payments, ReplyCX.
      */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Salesforce-native cloud products</span>
              <h2 className="h1 mt-3">Native by design. <em>Install in days.</em></h2>
            </div>
            <div>
              <p className="lede">Productized AppExchange-grade tools that live inside your Salesforce org. No middleware, no syncing, no per-user fees that scale against you. Most pay back in a single quarter.</p>
            </div>
          </div>

          <div className="grid-2">
            <article className="product-card" style={{ "--accent": "#4840E0" } as React.CSSProperties}>
              <div className="product-eyebrow">Storefronts</div>
              <h3 className="h2">Run your store inside Salesforce.</h3>
              <p className="body">Catalog, inventory, checkout, orders, memberships, appointments, events — all native commerce without leaving your CRM. Launch in days, not quarters.</p>
              <Link href="/storefronts" className="btn btn-primary btn-arrow mt-auto">Explore Storefronts</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#0F9870" } as React.CSSProperties}>
              <div className="product-eyebrow">License Guard</div>
              <h3 className="h2">Stop paying for inactive Salesforce users.</h3>
              <p className="body">Detect dormant seats, warn users, and deactivate per policy — automatically. ROI in one quarter. Pure Salesforce-native, no code.</p>
              <Link href="/license-guard" className="btn btn-primary btn-arrow mt-auto">Explore License Guard</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#38A0F8" } as React.CSSProperties}>
              <div className="product-eyebrow">Salesforce Payments</div>
              <h3 className="h2">Quote to cash inside Salesforce.</h3>
              <p className="body">Cards, ACH, digital wallets. Bring your processor or use ours for lower rates. PCI-compliant, audit-ready, fully native to your Salesforce org.</p>
              <Link href="/salesforce-payments" className="btn btn-primary btn-arrow mt-auto">Explore Salesforce Payments</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#B45309" } as React.CSSProperties}>
              <div className="product-eyebrow">ReplyCX · AI-Powered Support</div>
              <h3 className="h2">AI support that feels human.</h3>
              <p className="body">Around 70% of routine queries automated across WhatsApp, email, chat, and social. No-code agent builder on your existing knowledge base. Salesforce-native, live in one sprint.</p>
              <Link href="/ai-powered-support" className="btn btn-primary btn-arrow mt-auto">Explore ReplyCX</Link>
            </article>
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTIONS — in-content links to the AI Forge solution &
           vertical landing pages. Passes link equity from this established
           hub page to the newer pages and gives visitors a path to them. */}
      <section className="section" id="solutions">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Built for you</span>
              <h2 className="h1 mt-3">Custom solutions <em>we build.</em></h2>
            </div>
            <div>
              <p className="lede">Beyond the productized suite, our team builds and runs custom applications with the <Link href="/ai-forge" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI Forge Framework</Link>. A few of the things we&apos;re asked for most:</p>
            </div>
          </div>
          <div className="grid-3" style={{ marginTop: "8px" }}>
            <Link href="/ai-app-development" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Custom AI App Development</h3>
              <p className="body">We design, build, deploy, and run bespoke AI applications in 2–6 weeks under one monthly fee.</p>
              <span className="link">Explore custom AI development →</span>
            </Link>
            <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Custom Portal Development</h3>
              <p className="body">Cut CRM costs by moving light users to integrated portals — keep your tech, drop the per-seat bill.</p>
              <span className="link">Explore custom portals →</span>
            </Link>
            <Link href="/custom-ecommerce-development" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Custom Ecommerce Development</h3>
              <p className="body">Merch stores, subscriptions, and complex catalogs built to your model and run for you.</p>
              <span className="link">Explore custom ecommerce →</span>
            </Link>
            <Link href="/glp-1-ecommerce" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">GLP-1 &amp; Telehealth Ecommerce</h3>
              <p className="body">Intake, provider workflow, subscriptions, and refills as one connected, compliance-ready platform.</p>
              <span className="link">Explore telehealth ecommerce →</span>
            </Link>
            <Link href="/chapter-management-software" className="card" style={{ textDecoration: "none" }}>
              <h3 className="h3">Chapter &amp; Dues Management</h3>
              <p className="body">Automatic dues, member records, and events for fraternities, sororities, and clubs.</p>
              <span className="link">Explore chapter management →</span>
            </Link>
            <div className="card">
              <h3 className="h3">AI by Industry</h3>
              <p className="body">Vertical AI built for specific businesses:</p>
              <ul className="features">
                <li><Link href="/ai-for-insurance" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI for insurance</Link></li>
                <li><Link href="/ai-for-hospitality" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI for hospitality</Link></li>
                <li><Link href="/ai-for-membership-organizations" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI for membership orgs</Link></li>
              </ul>
            </div>
          </div>
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
