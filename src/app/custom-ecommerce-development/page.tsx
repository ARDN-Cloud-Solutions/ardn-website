import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Solution page anchored to real delivered builds: custom ecommerce stores
// (incl. merch storefronts) that are NOT necessarily Salesforce-native. This
// is the off-platform counterpart to the /storefronts product (which is
// Salesforce-native). No client names / metrics (no proof cleared yet).
export const metadata: Metadata = {
  title:
    "Custom Ecommerce Development — Built & Run for You | Ardn",
  description:
    "We design, build, and run custom ecommerce stores — merch shops, subscriptions, memberships, and complex catalogs — that fit your exact business. Live in weeks, one flat monthly fee. New customers: we build it free.",
  keywords: [
    "custom ecommerce development",
    "custom online store development",
    "merch store development",
    "subscription ecommerce development",
    "headless ecommerce development",
    "ecommerce development company",
    "bespoke ecommerce platform",
    "custom shopping cart development",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-ecommerce-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-ecommerce-development",
      "x-default": "https://ardncloudsolutions.com/custom-ecommerce-development",
    },
  },
  openGraph: {
    title:
      "Custom Ecommerce Development — Built & Run for You | Ardn",
    description:
      "Custom ecommerce stores — merch, subscriptions, memberships, complex catalogs — built to fit your business and run for you. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-ecommerce-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom ecommerce development — online stores built and run by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Ecommerce Development | Ardn",
    description:
      "Custom online stores — merch, subscriptions, memberships — built and run for you. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "When do I need custom ecommerce instead of Shopify or a template?",
    a: "Templates are great until your business has rules they can't express — complex catalogs, B2B pricing, memberships bundled with products, unusual subscription logic, or deep integration with your back office. When you find yourself paying for apps and workarounds that still don't quite fit, a custom store built around your model is faster to run and cheaper over time.",
  },
  {
    q: "Can you build a merch store for our brand, team, or organization?",
    a: "Yes. Branded merch storefronts are a common build — apparel, accessories, and limited drops with inventory, variants, and fulfillment handled. We can run it standalone or tie it into a membership or event system so everything your audience buys lives in one place.",
  },
  {
    q: "Do you handle subscriptions, memberships, and recurring billing?",
    a: "Yes. Recurring billing, subscription products, memberships, dunning for failed payments, and customer self-service are core to what we build — not afterthoughts bolted on with plugins.",
  },
  {
    q: "Can it integrate with our existing systems?",
    a: "Yes — payment processors, fulfillment and shipping, ERP or inventory, your CRM, and email/marketing tools. If you also run Salesforce and want the store native to it, we offer Storefronts; if you want an independent store, we build that too.",
  },
  {
    q: "Do we own the store, and who maintains it?",
    a: "You own the IP and the data. We run it for you — hosting, security, updates, and new features — under one monthly subscription, so you are never stuck waiting on a freelancer or re-platforming every couple of years.",
  },
  {
    q: "How fast can we launch and what does it cost?",
    a: "Most stores reach a production-ready launch in weeks via our AI Forge Framework, with a fixed quote within 48 hours. One flat monthly subscription covers build, hosting, and iteration — and new customers pay nothing for the one-time build.",
  },
];

const features = [
  {
    title: "Branded Merch Stores",
    body: "Apparel, accessories, and limited drops with variants, inventory, and fulfillment — a store that looks and feels like your brand, not a template.",
  },
  {
    title: "Subscriptions & Memberships",
    body: "Recurring products, member-only pricing, bundles, and dunning built into the core — for the revenue models templates struggle with.",
  },
  {
    title: "Complex & B2B Catalogs",
    body: "Tiered pricing, customer-specific rates, bulk ordering, and large or unusual catalogs handled cleanly instead of crammed into a generic cart.",
  },
  {
    title: "Real Integrations",
    body: "Payments, shipping and fulfillment, inventory/ERP, CRM, and marketing tools connected so orders flow without manual rekeying.",
  },
  {
    title: "Built to Convert",
    body: "Fast pages, a frictionless checkout, and AI-powered support for shopper questions — engineered to turn more visits into orders.",
  },
  {
    title: "Owned & Operated for You",
    body: "You own the store and the data; we host, secure, and improve it under one monthly subscription. No re-platforming treadmill.",
  },
];

export default function CustomEcommerceDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-ecommerce-development#service",
        name: "Custom Ecommerce Development",
        serviceType: "Custom Ecommerce Store Development & Managed Service",
        description:
          "Ardn designs, builds, and operates custom ecommerce stores — merch storefronts, subscriptions, memberships, and complex catalogs — shaped to your business and run under one monthly subscription via the AI Forge Framework.",
        url: "https://ardncloudsolutions.com/custom-ecommerce-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-ecommerce-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-ecommerce-development#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom Ecommerce Development", item: "https://ardncloudsolutions.com/custom-ecommerce-development" },
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
                <span className="eyebrow">Custom Ecommerce Development</span>
                <h1 className="display reveal">
                  A store that fits <em>your business — not a template.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  When your catalog, pricing, subscriptions, or memberships
                  don&apos;t fit an off-the-shelf cart, you end up paying for apps
                  and workarounds that still don&apos;t quite work. We build custom
                  ecommerce — merch stores, subscriptions, complex catalogs —
                  shaped to exactly how you sell, integrated with your back office,
                  and run for you. Live in weeks, one flat monthly fee.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Merch · Subscriptions · B2B</span>
                  <span className="badge is-emerald">Built to convert</span>
                  <span className="badge is-canvas">Owned &amp; run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">What we build</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">When templates stop fitting</div>
                  <ul className="features mt-3">
                    <li>Branded merch storefronts</li>
                    <li>Subscriptions &amp; memberships</li>
                    <li>Complex &amp; B2B catalogs</li>
                    <li>Payments, shipping &amp; ERP integration</li>
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

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">The store <em>your model actually needs.</em></h2>
              </div>
              <div>
                <p className="lede">From a branded merch drop to a subscription business with B2B pricing — built to your rules and operated for you after launch.</p>
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
              <Link href="/storefronts" className="link">Already on Salesforce? See Storefronts — native ecommerce →</Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why build custom</span>
                <h2 className="h1 mt-3">Stop paying for <em>apps that don&apos;t fit.</em></h2>
                <p className="body mt-4">
                  Template platforms are cheap to start and expensive to outgrow —
                  the monthly app stack, the transaction fees, and the workarounds
                  add up while still leaving gaps. A custom store removes the
                  ceiling: it does exactly what your business needs, you own it,
                  and we run it for one predictable fee instead of a dozen
                  subscriptions that fight each other.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your rules, not the template&apos;s</div>
                      <p className="fl-body">Pricing, bundles, subscriptions, and catalog logic built to match how you actually sell.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">One fee, not a plugin stack</div>
                      <p className="fl-body">Replace the pile of monthly app subscriptions with one build that just works.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Integrated back office</div>
                      <p className="fl-body">Payments, fulfillment, inventory, and CRM connected so orders flow without rekeying.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it for you</div>
                      <p className="fl-body">Hosting, security, and new features under one subscription — no re-platforming every two years.</p>
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
                <p className="lede">When custom beats a template, merch, subscriptions, integrations, and cost.</p>
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

        <LeadForm source="Custom Ecommerce Development page" />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Build the store <em>you keep outgrowing templates trying to fake.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll map your catalog, pricing, and back office and give you a fixed quote within 48 hours.</p>
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
