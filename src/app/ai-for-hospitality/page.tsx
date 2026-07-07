import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Vertical landing page targeting hospitality/hotel-AI buyer intent. Matches
// the ICP outbound research surfaces (mid-market hotel chains scaling guest
// service). Non-geo; single conversion path (Calendly).
export const metadata: Metadata = {
  title:
    "AI for Hospitality — Guest Service Automation | Ardn",
  description:
    "Custom AI applications for hotels, resorts, and hospitality groups — automate guest inquiries, bookings, and service requests while keeping the experience personal. Built and run by Ardn in 2–6 weeks under one monthly fee. New customers: free build.",
  keywords: [
    "AI for hospitality",
    "hotel AI chatbot",
    "guest service automation AI",
    "hospitality AI software",
    "AI concierge",
    "hotel booking automation",
    "custom AI for hotels",
    "AI Forge Framework",
    "hospitality AI development company",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-for-hospitality",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-for-hospitality",
      "x-default": "https://ardncloudsolutions.com/ai-for-hospitality",
    },
  },
  openGraph: {
    title:
      "AI for Hospitality — Guest Service Automation | Ardn",
    description:
      "Custom AI for hotels and resorts — guest inquiries, bookings, service requests. Built and run in 2–6 weeks under one monthly fee. New customers: free build.",
    url: "https://ardncloudsolutions.com/ai-for-hospitality",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom AI for hospitality — guest service automation by Ardn AI Forge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Hospitality | Guest Service Automation — Ardn AI Forge",
    description:
      "Custom AI for hotels, built and run in 2–6 weeks under one monthly fee. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What guest-facing tasks can AI handle for a hotel?",
    a: "Pre-arrival and in-stay questions, booking and modification requests, room service and housekeeping requests, local recommendations, FAQ and policy answers, and post-stay follow-up — across web chat, SMS, WhatsApp, and email. Anything routine and repetitive is a candidate; anything that needs a human gets escalated cleanly.",
  },
  {
    q: "Will AI make the guest experience feel impersonal?",
    a: "Done well, it does the opposite. The AI clears the repetitive queue instantly and around the clock, which frees your front desk and service staff to give real attention to the guests in front of them. The AI is trained on your brand voice and hands off to a person the moment a situation calls for one.",
  },
  {
    q: "Does it work across multiple properties?",
    a: "Yes. We build for multi-property groups — each location can have its own information, amenities, and policies while you manage everything from one place and see service metrics across the portfolio.",
  },
  {
    q: "What about our PMS, booking engine, and CRM?",
    a: "AI Forge applications integrate with the systems you already run — property management systems, booking engines, CRMs like Salesforce, and messaging channels — so the AI has real context and can take real action, not just answer generic questions.",
  },
  {
    q: "How quickly can we launch?",
    a: "Most engagements ship a production-ready application in 2–6 weeks, with a fixed quote and delivery date within 48 hours of the first call. We start with your highest-volume guest interaction and expand from there.",
  },
  {
    q: "What does it cost?",
    a: "One flat monthly subscription covers the build, hosting, and ongoing iteration. New customers pay nothing for the one-time build — you only pay the monthly fee once it is live.",
  },
];

const useCases = [
  {
    title: "24/7 Guest Concierge",
    body: "An AI agent that answers guest questions instantly across chat, SMS, and WhatsApp — in your brand voice, in multiple languages, at any hour.",
  },
  {
    title: "Booking & Modifications",
    body: "Let guests check availability, book, modify, and confirm reservations through conversation — synced live with your booking engine.",
  },
  {
    title: "Service Requests",
    body: "Route housekeeping, maintenance, and room-service requests to the right team automatically, with status updates back to the guest.",
  },
  {
    title: "Local Recommendations",
    body: "Personalized dining, activity, and amenity suggestions that feel like a knowledgeable concierge — driving on-property and partner revenue.",
  },
  {
    title: "Multi-Property Management",
    body: "One platform across every location, each with its own details and policies, plus portfolio-wide service metrics in a single view.",
  },
  {
    title: "Post-Stay & Reviews",
    body: "Automate thank-you follow-ups, surface unhappy guests before they post a review, and nudge happy ones to share — lifting your rating.",
  },
];

export default function AiForHospitalityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/ai-for-hospitality#service",
        name: "AI for Hospitality — Custom Development",
        serviceType: "Custom AI Application Development for Hospitality",
        description:
          "Ardn builds and operates custom AI applications for hotels, resorts, and hospitality groups — guest concierge, booking automation, and service routing — via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/ai-for-hospitality",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: { "@type": "Audience", audienceType: "Hotels, resorts, and hospitality groups" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/ai-for-hospitality#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-for-hospitality#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "AI for Hospitality", item: "https://ardncloudsolutions.com/ai-for-hospitality" },
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
                <span className="eyebrow">AI for Hospitality</span>
                <h1 className="display reveal">
                  Answer every guest. <em>Anytime, instantly.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Guests expect an instant answer at 2am, and your front desk
                  can&apos;t be everywhere. We build custom AI that handles the
                  routine questions, bookings, and service requests across every
                  channel — in your brand voice — so your team can focus on the
                  guests in front of them. Live in 2–6 weeks, run for you, one
                  monthly fee.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Concierge · Bookings · Service</span>
                  <span className="badge is-emerald">2–6 weeks to production</span>
                  <span className="badge is-canvas">Multi-property ready</span>
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
                  <div className="kicker">Where hotels start</div>
                  <ul className="features mt-3">
                    <li>24/7 multilingual guest concierge</li>
                    <li>Booking &amp; modification automation</li>
                    <li>Housekeeping &amp; service request routing</li>
                    <li>Local recommendations &amp; upsells</li>
                    <li>Post-stay follow-up &amp; reviews</li>
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
                  More service, <em>without more headcount.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  We start with your highest-volume guest interaction, prove the
                  lift, then expand across the stay and across properties.
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
            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <Link href="/ai-app-development" className="link">
                How we build &amp; run custom AI apps →
              </Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why Ardn for hospitality AI</span>
                <h2 className="h1 mt-3">
                  On brand. On call. <em>On every channel.</em>
                </h2>
                <p className="body mt-4">
                  Generic chatbots frustrate guests and dent your rating. We
                  build AI trained on your brand and connected to your real
                  systems, so it can actually book the room, route the request,
                  and hand off to a person the instant a guest needs one. You own
                  the app and the data.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Connected to your PMS &amp; booking engine</div>
                      <p className="fl-body">Real context and real actions — not a chatbot that just deflects to the front desk.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Your voice, many languages</div>
                      <p className="fl-body">Trained on your brand and policies, conversing in the languages your guests speak.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Clean human handoff</div>
                      <p className="fl-body">The AI knows its limits and routes to staff the moment a situation needs a person.</p>
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
                <p className="lede">Guest experience, integrations, multi-property, and cost.</p>
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

        <LeadForm source="AI for Hospitality page" />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Give every guest a <em>front-desk answer — instantly.</em>
              </h2>
              <p className="lede">
                30-minute free call. We&apos;ll map your highest-volume guest
                interaction and return a fixed quote within 48 hours.
              </p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge" className="btn btn-outline-light btn-lg">See AI Forge pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
