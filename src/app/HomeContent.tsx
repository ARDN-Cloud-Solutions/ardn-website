import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import type { CSSProperties } from "react";
import { Code2, Handshake, Hammer, LayoutDashboard, RefreshCw, Server, ShoppingBag, Sparkles } from "lucide-react";
import LeadForm from "@/components/common/LeadForm";
import TrustBar from "@/components/common/TrustBar";
import TrackedCta from "@/components/product-page/TrackedCta";
import { HOME_FAQS } from "./homeFaqs";
import "@/components/product-page/product-page.css";
import "./home.css";

// Homepage on the product-page kit (.pp classes + tokens). Leads with the
// named products, then services, industries and proof. Keep product claims
// in step with each product's own content file.

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--pp-serif",
  display: "swap",
});

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const THEME = {
  "--pp-accent": "#b8b2ff",
  "--pp-accent-soft": "#d9d6ff",
  "--pp-accent-rgb": "184, 178, 255",
  "--pp-accent-ink": "#15104a",
  "--pp-accent-2": "#4840e0",
  "--pp-accent-2-deep": "#2d24b0",
  "--pp-accent-2-rgb": "72, 64, 224",
} as CSSProperties;

const PRODUCTS = [
  {
    kicker: "Club Steward · Golf & country clubs",
    title: "Every club in your portfolio, on one member record.",
    body: "Websites and online join, membership sales, contracts, dues, the tee sheet and the pro shop for multi-club golf and country club operators.",
    points: ["Benefits that follow members to every club", "Contracts and e-signature built in", "Every club side by side for corporate"],
    href: "/golf-club-management-software",
    cta: "Explore Club Steward",
    img: "/images/golf/corporate-dashboard.webp",
    url: "Club Steward · Corporate · All clubs",
    alt: "Club Steward corporate dashboard comparing every club side by side",
    accent: "#d4b25a",
  },
  {
    kicker: "Nonprofit Management · YMCAs & community centers",
    title: "Members and donors in one record, for one flat fee.",
    body: "Membership, billing, front-desk check-in, programs and a full fundraising CRM for YMCAs, JCCs and community nonprofits.",
    points: ["Never a percentage of your revenue", "Check-in, programs and classes", "Donations, pledges and gift batches"],
    href: "/nonprofit-management-software",
    cta: "Explore Nonprofit Management",
    img: "/images/nonprofit/operations-overview-dashboard.webp",
    url: "Nonprofit Management · Operations",
    alt: "Nonprofit Management operations overview with members, revenue, donations and check-ins",
    accent: "#e58fb3",
  },
  {
    kicker: "AI Forge · Custom AI apps",
    title: "A custom AI app for your workflow, built and run for you.",
    body: "We design an AI app around how your team works, have it live in weeks, then host it and keep improving it every month.",
    points: ["Live in 2–6 weeks", "New customers pay no build fee", "You own your app and data"],
    href: "/ai-forge",
    cta: "Explore AI Forge",
    img: "/images/ai-forge/claims-intake-assistant.webp",
    url: "Example build · Claims intake assistant",
    alt: "Example AI Forge build: a claims intake assistant",
    accent: "#a59cff",
  },
  {
    kicker: "Membership Management · Gyms, studios & clubs",
    title: "Sign-ups, dues, classes and a member portal in one place.",
    body: "Recurring billing, class scheduling, attendance and a branded member portal for gyms, studios, clubs and associations.",
    points: ["Recurring billing built in", "Classes and attendance", "Branded member self-service"],
    href: "/membership-management",
    cta: "Explore Membership Management",
    img: "/images/nonprofit/classes-calendar.webp",
    url: "Membership Management · Classes",
    alt: "Membership Management weekly class calendar across locations",
    accent: "#7cc4ff",
  },
];

const SERVICES = [
  { icon: Code2, title: "Custom software", body: "Software shaped around exactly how your business works.", href: "/custom-software-development" },
  { icon: LayoutDashboard, title: "Customer & member portals", body: "Portals connected to the systems you already run.", href: "/custom-portal-development" },
  { icon: Handshake, title: "Partner portals", body: "For partners, dealers and resellers, without per-login fees.", href: "/custom-partner-portal-development" },
  { icon: ShoppingBag, title: "Custom ecommerce", body: "Stores, subscriptions and complex catalogs, run for you.", href: "/custom-ecommerce-development" },
];

const INDUSTRIES = [
  { title: "Golf & country clubs", href: "/golf-club-management-software" },
  { title: "Nonprofits & community centers", href: "/nonprofit-management-software" },
  { title: "Gyms, studios & clubs", href: "/membership-management" },
  { title: "GLP-1 & telehealth", href: "/glp-1-ecommerce" },
  { title: "Chapters & associations", href: "/chapter-management-software" },
  { title: "Insurance", href: "/ai-for-insurance" },
  { title: "Hospitality", href: "/ai-for-hospitality" },
  { title: "Teams on Salesforce", href: "/our-products#salesforce" },
];

function Frame({ src, alt, url, priority, sizes }: { src: string; alt: string; url: string; priority?: boolean; sizes: string }) {
  return (
    <div className="pp-mock pp-shot pp-shot-flat">
      <div className="pp-mock-bar">
        <span className="pp-mock-dot" />
        <span className="pp-mock-dot" />
        <span className="pp-mock-dot" />
        <span className="pp-mock-url">{url}</span>
      </div>
      <Image src={src} alt={alt} width={2880} height={1800} quality={90} priority={priority} sizes={sizes} className="pp-shot-img" />
    </div>
  );
}

export default function HomeContent() {
  return (
    <main className={`ardn-page pp hm ${serif.variable}`} style={THEME}>
      {/* HERO */}
      <section className="pp-hero hm-hero">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="pp-hero-grain" aria-hidden="true" />
        <div className="container">
          <div className="hm-hero-grid">
            <div className="pp-hero-copy">
              <h1 className="pp-h1">
                <span className="pp-eyebrow">Ardn · Software products &amp; managed services</span>
                <span className="pp-display">
                  Software built for your industry. <em>Run for you.</em>
                </span>
              </h1>
              <p className="pp-lede">
                Ready-to-run products for golf and country clubs, nonprofits and member organizations, plus custom
                software and AI built around how you work. Our US team builds it, hosts it and keeps improving it.
              </p>
              <div className="pp-ctas">
                <TrackedCta className="pp-btn pp-btn-gold" cta={{ label: "Book a free 30-minute call", href: CALL }} page="home" location="hero" />
                <a className="pp-btn pp-btn-light" href="#products">
                  Explore products
                </a>
              </div>
              <ul className="pp-hero-proof">
                <li>30+ years of technology and consulting</li>
                <li>One team from first call to go-live</li>
                <li>Reply within 4 business hours</li>
              </ul>
            </div>
            <div className="hm-stack" aria-hidden="true">
              <div className="hm-card hm-card-back1">
                <Image src="/images/ai-forge/claims-intake-assistant.webp" alt="" width={2880} height={1800} quality={85} sizes="40vw" />
              </div>
              <div className="hm-card hm-card-back2">
                <Image src="/images/nonprofit/operations-overview-dashboard.webp" alt="" width={2880} height={1800} quality={85} sizes="40vw" />
              </div>
              <div className="hm-card hm-card-front">
                <div className="pp-mock-bar">
                  <span className="pp-mock-dot" />
                  <span className="pp-mock-dot" />
                  <span className="pp-mock-dot" />
                  <span className="pp-mock-url">Club Steward · Corporate · All clubs</span>
                </div>
                <Image src="/images/golf/corporate-dashboard.webp" alt="" width={2880} height={1800} quality={90} priority sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar signals={["US-based team", "30+ yrs building software", "4-hour response SLA", "We run what we build"]} />

      {/* PRODUCTS */}
      <section className="pp-section pp-canvas" id="products">
        <div className="container pp-wide">
          <div className="pp-head">
            <span className="pp-kicker">Products</span>
            <h2 className="pp-h2">Built for how your organization actually runs.</h2>
            <p className="pp-sub">
              Each product is made for one kind of organization, so it fits on day one instead of after a year of
              configuration. Every one of them comes with our team running it for you.
            </p>
          </div>
          <div className="hm-products">
            {PRODUCTS.map((p, i) => (
              <article key={p.href} className={i % 2 ? "hm-product is-flip" : "hm-product"} style={{ "--hm-accent": p.accent } as CSSProperties}>
                <div className="hm-product-copy">
                  <span className="hm-product-kicker">{p.kicker}</span>
                  <h3 className="pp-h3">{p.title}</h3>
                  <p>{p.body}</p>
                  <ul className="pp-ticks pp-ticks-light">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className="hm-link">
                    {p.cta} →
                  </Link>
                </div>
                <Frame src={p.img} alt={p.alt} url={p.url} sizes="(max-width: 1040px) 100vw, 60vw" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="pp-section">
        <div className="container">
          <div className="pp-head">
            <span className="pp-kicker">How we work</span>
            <h2 className="pp-h2">We don&rsquo;t hand you software and walk away.</h2>
            <p className="pp-sub">Whether you start with a product or a custom build, the same team is accountable for it after launch.</p>
          </div>
          <div className="pp-onprop pp-promises hm-three">
            {[
              { icon: Hammer, title: "We build it", body: "Configured or custom-built around your process, on a fixed quote and a clear timeline." },
              { icon: Server, title: "We run it", body: "Hosting, monitoring, security and updates, handled by us so your team never touches infrastructure." },
              { icon: RefreshCw, title: "We improve it", body: "New features and fixes every month, driven by what your team asks for." },
            ].map((x) => (
              <article key={x.title}>
                <span className="pp-icon" aria-hidden="true">
                  <x.icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES + INDUSTRIES */}
      <section className="pp-section pp-dark">
        <div className="container">
          <div className="hm-split">
            <div>
              <div className="pp-head">
                <span className="pp-kicker pp-on-dark">Services</span>
                <h2 className="pp-h2">No product fits? We&rsquo;ll build it.</h2>
                <p className="pp-sub pp-on-dark">
                  Custom software and AI from the team behind our products, with the same promise: we run what we build.
                </p>
              </div>
              <div className="hm-services">
                {SERVICES.map((s) => (
                  <Link key={s.href} href={s.href} className="hm-service">
                    <span className="pp-icon" aria-hidden="true">
                      <s.icon size={20} strokeWidth={1.75} />
                    </span>
                    <b>{s.title}</b>
                    <span>{s.body}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="pp-head">
                <span className="pp-kicker pp-on-dark">
                  <Sparkles size={13} /> Industries
                </span>
                <h2 className="pp-h2">Find your industry.</h2>
              </div>
              <ul className="hm-industries">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.href + ind.title}>
                    <Link href={ind.href}>
                      {ind.title} <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="pp-section">
        <div className="container pp-narrow hm-quote">
          <span className="pp-kicker">What clients say</span>
          <blockquote>
            &ldquo;Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that
            has been invaluable to our business.&rdquo;
          </blockquote>
          <p className="hm-quote-who">
            <b>Jay Vashi</b> · Senior Delivery Manager, Fortune 500 insurance company
          </p>
          <Link href="/case-studies" className="hm-link">
            Read our case studies →
          </Link>
        </div>
      </section>

      {/* FAQ — mirrors the FAQPage JSON-LD in page.tsx (both use HOME_FAQS) */}
      <section className="pp-section pp-canvas" id="faq">
        <div className="container pp-narrow">
          <div className="pp-head">
            <span className="pp-kicker">Questions</span>
            <h2 className="pp-h2">Common questions</h2>
          </div>
          <div className="pp-faqs">
            {HOME_FAQS.map((f) => (
              <details className="pp-faq" key={f.q}>
                <summary>{f.q}</summary>
                <div className="pp-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-section" id="talk">
        <div className="container pp-narrow">
          <LeadForm
            source="Homepage"
            heading="Tell us what you're trying to fix"
            sub="A sentence or two about your organization and the problem is plenty. We reply within 4 business hours."
            submitLabel="Send"
            messageLabel="What should we know?"
            footnote="We reply within 4 business hours · No obligation"
          />
        </div>
      </section>

      <section className="pp-final">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="container pp-narrow">
          <h2 className="pp-display pp-display-sm">
            Let&rsquo;s find the right fit. <em>In 30 minutes.</em>
          </h2>
          <p className="pp-lede">No slides and no pressure. Just a straight answer on whether one of our products, or a custom build, is right for you.</p>
          <div className="pp-ctas pp-ctas-center">
            <TrackedCta className="pp-btn pp-btn-gold" cta={{ label: "Book a free 30-minute call", href: CALL }} page="home" location="final" />
            <Link className="pp-btn pp-btn-ghost" href="/our-products">
              Browse all products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
