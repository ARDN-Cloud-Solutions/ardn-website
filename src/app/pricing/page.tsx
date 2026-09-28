import { Metadata } from "next";
import { Check } from "lucide-react";
import TrustBar from "@/components/common/TrustBar";
import { PricingForm, ProductPricingGrid } from "./PricingRequest";
import "./pricing.css";

// /pricing: one place to request pricing for every Ardn product. The header
// "Pricing" link used to jump to the AI Forge pricing section, which
// confused visitors looking at any other product. This page prices nothing
// itself; it routes each visitor to a quote for the product they care about.
// Don't state or imply prices here: Club Steward pricing is undecided, and
// the other product pages own their own published numbers.

const URL = "https://ardncloudsolutions.com/pricing";
const TITLE = "Pricing | Ardn Cloud Solutions";
const DESC =
  "Get pricing for any Ardn product or service: Club Steward, Nonprofit Management, Membership Management, ReplyCX, AI Forge and custom software. Reply in 4 business hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: "Pricing for every Ardn product",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, site: "@ardn_cloud_sol" },
};

const STEPS = [
  { title: "Tell us what you need", body: "Pick the products you're looking at and give us a sense of size. It takes about two minutes." },
  { title: "A short scoping call", body: "Thirty minutes to understand how you run today and what has to be true on day one." },
  { title: "Pricing in writing", body: "A written proposal for your situation, with what's included, how you're billed and how onboarding works." },
];

const PROPOSAL = [
  { t: "What's included", d: "The products, modules and services scoped to you" },
  { t: "How you're billed", d: "Pricing and billing terms for your size" },
  { t: "Onboarding plan", d: "Setup, data moves and training" },
  { t: "Timeline", d: "When you can be live" },
];

const FAQS = [
  {
    q: "Why ask for pricing instead of showing one number?",
    a: "Most of what we sell is shaped to the business using it: the number of users, locations or clubs, the modules you switch on, and how much we build or run for you. A short conversation gets you a number that actually fits, instead of a starting price that doesn't.",
  },
  {
    q: "How fast will I hear back?",
    a: "Within 4 business hours, from a person on our US-based team. If it's simpler to talk, book a 30-minute call straight from the confirmation.",
  },
  {
    q: "Can I get pricing for more than one product?",
    a: "Yes. Select every product you're considering in the form and we'll price them together, including how they work alongside each other.",
  },
  {
    q: "Is there any obligation?",
    a: "No. A pricing request or a scoping call doesn't commit you to anything.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      isPartOf: { "@id": "https://ardncloudsolutions.com/#website" },
      publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="ardn-page pr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />

      <section className="pr-hero">
        <div className="container pr-hero-grid">
          <div>
          <span className="eyebrow">Pricing</span>
          <h1 className="pr-title">
            Pricing that fits <em>how you actually run.</em>
          </h1>
          <p className="lede pr-lede">
            Every Ardn product is priced for the business using it: your team, your locations or
            clubs, and what you need live. Tell us what you&apos;re looking at, and we&apos;ll come
            back with pricing for your situation within 4 business hours.
          </p>
          <div className="pr-hero-ctas">
            <a href="#request" className="btn btn-primary btn-lg btn-arrow">
              Request pricing
            </a>
            <a href="#products" className="btn btn-secondary btn-lg">
              Browse products
            </a>
          </div>
          </div>
          <aside className="pr-proposal">
            <h2>What your pricing proposal covers</h2>
            <ul>
              {PROPOSAL.map((item) => (
                <li key={item.t}>
                  <span aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <div>
                    {item.t}
                    <small>{item.d}</small>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <TrustBar signals={["US-based team", "30+ yrs building software", "4-hour response SLA", "No obligation"]} />

      <section className="section" id="products">
        <div className="container">
          <div className="pr-head">
            <span className="eyebrow">Choose a product</span>
            <h2 className="h1 mt-3">What would you like priced?</h2>
          </div>
          <ProductPricingGrid />
        </div>
      </section>

      <section className="section is-canvas" id="request">
        <div className="container pr-request">
          <div className="pr-request-copy">
            <span className="eyebrow">Request pricing</span>
            <h2 className="h1 mt-3">Get pricing for your situation.</h2>
            <ol className="pr-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="pr-step-n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <PricingForm />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container pr-faq">
          <div className="pr-head">
            <span className="eyebrow">Questions</span>
            <h2 className="h1 mt-3">About pricing</h2>
          </div>
          <div className="pr-faqs">
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
