import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Solution page anchored to a real delivered build: fraternity chapter +
// dues management. Generalized to the rankable niche (fraternities, sororities,
// clubs, chapters). No client names / metrics (no proof cleared yet).
export const metadata: Metadata = {
  title:
    "Fraternity & Chapter Management Software | Ardn",
  description:
    "Custom chapter software for fraternities, sororities & clubs — automatic dues, member & event tracking, less admin. New customers: free build.",
  keywords: [
    "chapter management software",
    "fraternity management software",
    "sorority management software",
    "dues management software",
    "fraternity dues collection",
    "Greek life software",
    "membership dues software",
    "club management software",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/chapter-management-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/chapter-management-software",
      "x-default": "https://ardncloudsolutions.com/chapter-management-software",
    },
  },
  openGraph: {
    title:
      "Fraternity & Chapter Management Software | Ardn",
    description:
      "Custom chapter software — collect dues automatically, track members and events, cut admin. Built and run for one monthly fee. New customers: free build.",
    url: "https://ardncloudsolutions.com/chapter-management-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Chapter and dues management software for fraternities, sororities, and clubs by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapter & Dues Management Software | Ardn",
    description:
      "Custom chapter software — automatic dues, member tracking, less admin. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Who is chapter management software for?",
    a: "Fraternities, sororities, alumni chapters, clubs, and any member organization that collects dues and runs events. If you are chasing payments on spreadsheets and group chats, this replaces all of it with one system built around how your chapter actually runs.",
  },
  {
    q: "How does automatic dues collection work?",
    a: "Members get a branded payment link and pay by card or bank transfer. The system tracks who has paid, sends automatic reminders to who hasn't, recovers failed payments, and gives your treasurer a real-time view — no more manual tracking or awkward chasing.",
  },
  {
    q: "Can it handle officer turnover?",
    a: "Yes — that is the point. Records, payment history, and documents live in the system, not in one outgoing officer's inbox. New officers get clean handoff and a dashboard instead of inheriting a mess.",
  },
  {
    q: "Does it work for our national or multi-chapter structure?",
    a: "Yes. We build for multi-chapter organizations — each chapter manages its own members and dues while nationals get roll-up visibility, standardized reporting, and consistent collections across every chapter.",
  },
  {
    q: "Can members buy merch or event tickets through it too?",
    a: "Yes. We routinely add a branded storefront for merchandise, event ticketing, and one-off payments alongside dues, so everything your members pay for runs through one place.",
  },
  {
    q: "How fast can we get set up and what does it cost?",
    a: "Most builds go live in 2–6 weeks via our AI Forge Framework, with a fixed quote in 48 hours. It runs on one flat monthly subscription that covers the build, hosting, and updates — and new customers pay nothing for the one-time build.",
  },
];

const features = [
  {
    title: "Automatic Dues Collection",
    body: "Branded payment links, card and bank payments, automatic reminders, and failed-payment recovery — your treasurer stops chasing and starts seeing who's paid in real time.",
  },
  {
    title: "Member Roster & Records",
    body: "Every member, status, and contact detail in one place — searchable, exportable, and safe through officer turnover instead of trapped in someone's inbox.",
  },
  {
    title: "Events & Attendance",
    body: "Create events, sell tickets, take RSVPs, and track attendance — with reminders that cut no-shows for meetings, philanthropy, and socials.",
  },
  {
    title: "Branded Merch Store",
    body: "Sell chapter merchandise and collect one-off payments through a branded storefront tied to the same system your members already use.",
  },
  {
    title: "Multi-Chapter Roll-Up",
    body: "Nationals get standardized reporting and visibility across every chapter; each chapter runs its own day-to-day. Consistent collections, no chaos.",
  },
  {
    title: "Officer Handoff Built In",
    body: "Roles, permissions, history, and documents stay in the system. New officers inherit a dashboard, not a shoebox of receipts and a shared password.",
  },
];

export default function ChapterManagementSoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/chapter-management-software#service",
        name: "Chapter & Dues Management Software",
        serviceType: "Custom Chapter & Membership Management Software",
        description:
          "Ardn builds and operates custom chapter management software for fraternities, sororities, clubs, and member organizations — automatic dues collection, member records, events, and merch — via the AI Forge Framework under one monthly subscription.",
        url: "https://ardncloudsolutions.com/chapter-management-software",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: { "@type": "Audience", audienceType: "Fraternities, sororities, clubs, and member organizations" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/chapter-management-software#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/chapter-management-software#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Chapter & Dues Management Software", item: "https://ardncloudsolutions.com/chapter-management-software" },
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
                <span className="eyebrow">Chapter &amp; Dues Management</span>
                <h1 className="display reveal">
                  Collect every due. <em>Chase no one.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Spreadsheets, group chats, and a treasurer hunting down payments
                  — that&apos;s how dues get lost and officers burn out. We build
                  custom chapter software that collects dues automatically, keeps
                  your roster and records in one place, and survives officer
                  turnover. Built for fraternities, sororities, and clubs. Live in
                  2–6 weeks, one flat monthly fee.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Automatic dues</span>
                  <span className="badge is-emerald">Members · Events · Merch</span>
                  <span className="badge is-canvas">Multi-chapter ready</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#features" className="btn btn-secondary btn-lg">What you get</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Replaces the spreadsheet chaos</div>
                  <ul className="features mt-3">
                    <li>Branded dues payment links</li>
                    <li>Auto reminders &amp; failed-payment recovery</li>
                    <li>Member roster &amp; records</li>
                    <li>Events, tickets &amp; attendance</li>
                    <li>Merch storefront</li>
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
                <span className="eyebrow">What you get</span>
                <h2 className="h1 mt-3">One system for <em>the whole chapter.</em></h2>
              </div>
              <div>
                <p className="lede">Built around how your chapter actually runs — then run for you, so it keeps working after this year&rsquo;s officers graduate.</p>
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
              <Link href="/membership-management" className="link">Running a gym, studio, or association instead? See Membership Management →</Link>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why a custom build</span>
                <h2 className="h1 mt-3">Off-the-shelf <em>never quite fits.</em></h2>
                <p className="body mt-4">
                  Generic chapter apps make you bend your chapter around their
                  rules and still nickel-and-dime you per member. We build to your
                  dues structure, your events, and your hierarchy — then operate it
                  for you. You get exactly the system you need, and you are not
                  re-buying it every time something changes.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your dues, your rules</div>
                      <p className="fl-body">Tiers, payment plans, deadlines, and late logic built to match how your chapter actually charges.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Flat fee, not per member</div>
                      <p className="fl-body">One monthly subscription covers the chapter — it doesn&rsquo;t punish you for growing.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Survives turnover</div>
                      <p className="fl-body">Everything lives in the system, so each new officer board starts clean.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it for you</div>
                      <p className="fl-body">Hosting, updates, and changes under one subscription — no IT volunteer required.</p>
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
                <p className="lede">Dues, turnover, multi-chapter, merch, and cost.</p>
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

        <LeadForm source="Chapter & Dues Management page" sub="Tell us about your chapter or organization. We'll reply within one business day with next steps and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Get your treasurer <em>their weekends back.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll map how your chapter collects dues and runs today, then give you a fixed quote in 48 hours.</p>
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
