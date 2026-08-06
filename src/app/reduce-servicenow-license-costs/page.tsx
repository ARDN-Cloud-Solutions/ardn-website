import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge SPOKE page — ServiceNow fulfiller-license cost reduction. Mirrors the
// /reduce-crm-licensing-costs pillar for a distinct, uncovered and high-pain
// ecosystem: ServiceNow fulfiller/agent seats are among the most expensive
// per-user licenses in the market. The wedge: keep ServiceNow as the system of
// record for true fulfillers, and move light/occasional fulfillers and
// requesters to a flat-fee custom portal synced through the ServiceNow API.
// No fabricated pricing — dollar figures are avoided; the calculator is offered
// for real numbers. GEO-structured (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "Cut ServiceNow License Costs | Ardn",
  description:
    "Reduce ServiceNow fulfiller license costs without leaving ServiceNow. Move light fulfillers and requesters to a flat-fee custom portal synced to your instance.",
  keywords: [
    "reduce ServiceNow license cost",
    "cut ServiceNow licensing costs",
    "ServiceNow fulfiller license alternative",
    "ServiceNow too expensive",
    "ServiceNow requester portal alternative",
    "ServiceNow custom portal",
    "reduce per-seat license costs",
    "custom portal to reduce ServiceNow seats",
    "light fulfiller ServiceNow license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    },
  },
  openGraph: {
    title: "Cut ServiceNow License Costs — Keep ServiceNow | Ardn",
    description:
      "Reduce ServiceNow fulfiller costs without a migration: move light fulfillers and requesters onto a flat-fee custom portal synced to your instance.",
    url: "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut ServiceNow fulfiller license costs without switching platforms — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut ServiceNow License Costs | Ardn",
    description:
      "Move light ServiceNow fulfillers and requesters onto a flat-fee custom portal synced to your instance — keep ServiceNow, cut the bill.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I reduce ServiceNow license costs without leaving ServiceNow?",
    a: "Separate your users by how much of ServiceNow they actually use. True fulfillers who work the platform all day keep their licenses. The savings come from the people around them — occasional fulfillers who touch a handful of tasks, and requesters who only submit and track. A custom portal wired into your ServiceNow instance gives those users exactly what they need on one flat fee, while ServiceNow stays your system of record.",
  },
  {
    q: "Why are ServiceNow fulfiller licenses so expensive?",
    a: "Fulfiller (agent) licensing is priced for someone who lives in the platform managing incidents, requests, and workflows. The trouble is that many organizations end up assigning fulfiller access to people who only occasionally act on records — approvers, light triagers, field staff — who pay near-full price for a fraction of the capability. Those are the seats where the overpayment concentrates.",
  },
  {
    q: "Isn't the requester experience already free or cheap?",
    a: "Requester access covers people who only submit and track — but the moment someone needs to act on records, update work, or run even a light workflow, they typically need a paid fulfiller license. A custom portal closes that gap: it can give occasional actors a purpose-built interface that writes back to ServiceNow through its API, without consuming a full fulfiller seat for a light workload.",
  },
  {
    q: "Does the portal stay in sync with our ServiceNow instance?",
    a: "Yes. The portal reads and writes the same records through the ServiceNow API in real time, so there is one source of truth. It is a tailored window into your instance, not a separate copy that drifts out of sync, and every user's access follows the roles and permissions you already define in ServiceNow.",
  },
  {
    q: "How much can we save versus adding ServiceNow fulfiller seats?",
    a: "It depends on how many light or occasional fulfillers you have and your negotiated per-seat rate, so we won't quote a fixed number. The mechanism is simple: fulfiller seats recur and grow with headcount, while a flat-fee portal costs the same at any user count. Our savings calculator lets you plug in your seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take and what does it cost to build the portal?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const steps = [
  {
    tag: "Step 1 — Audit",
    title: "Find your light fulfillers",
    body: "Pull fulfiller activity by user. Most organizations find a large share of paid seats belong to occasional actors — approvers, light triagers, field staff — not full-time agents.",
    best: "Best for: seeing where the fulfiller overpayment actually sits.",
  },
  {
    tag: "Step 2 — Right-size",
    title: "Right-size roles and plugins",
    body: "Trim unused roles, retire dormant seats, and match plan tiers to real usage. Real savings, but everyone left is still on a per-seat fulfiller license.",
    best: "Best for: dormant seats and over-provisioned roles.",
  },
  {
    tag: "Step 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give occasional fulfillers and requesters a purpose-built portal synced to ServiceNow, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: the majority — everyone using ServiceNow lightly.",
  },
];

export default function ReduceServiceNowLicenseCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-servicenow-license-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Reduce ServiceNow License Costs Without Leaving ServiceNow",
        name: "Reduce ServiceNow License Costs Without Leaving ServiceNow",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "ServiceNow license cost reduction" },
          { "@type": "Thing", name: "Fulfiller licensing" },
          { "@type": "Thing", name: "Custom portal development" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Reduce ServiceNow License Costs", item: url },
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
                <span className="eyebrow">Reduce ServiceNow License Costs</span>
                <h1 className="display reveal">
                  Cut your ServiceNow bill — <em>without leaving ServiceNow.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  ServiceNow fulfiller licensing is priced for the full-time agent
                  who lives in the platform. But a lot of paid seats go to people
                  who only act occasionally — approvers, light triagers, field
                  staff, requesters. Keep ServiceNow as your system of record and
                  move those light users to a flat-fee portal synced to your
                  instance. Nothing gets ripped out.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep ServiceNow</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep ServiceNow &amp; your data</li>
                    <li>Move light fulfillers &amp; requesters to a portal</li>
                    <li>Two-way API sync, one source of truth</li>
                    <li>Requester, approver &amp; field-staff portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">Not on ServiceNow? See the wider playbook →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHY THE BILL CLIMBS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the money goes</span>
                <h2 className="h1 mt-3">Why fulfiller pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A fulfiller seat is priced for a full-time agent. Most of the people you put on one aren&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Fulfiller seats are premium</h3>
                <p className="body">Agent licensing is among the most expensive per-user pricing in enterprise software — priced for someone working incidents and requests all day.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Light actors still need a seat</h3>
                <p className="body">The moment an approver or occasional triager needs to act on a record, they typically get a full fulfiller license for a fraction of the workload.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new approver, field tech, or partner who needs to act adds another recurring seat — permanently, unless something changes the model.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              A flat-fee portal costs the same at 10 light users or 400, while
              fulfiller seats recur and grow with every one you add.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> with your own seat count and negotiated rate to see the gap.
            </p>
          </div>
        </section>

        {/* THE STEPS */}
        <section className="section is-canvas" id="steps">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The approach</span>
                <h2 className="h1 mt-3">Three moves to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the lowest-risk move and work down. Each one addresses a different kind of overpayment.</p>
              </div>
            </div>
            <div className="grid-3">
              {steps.map((l) => (
                <div className="card" key={l.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{l.tag}</span>
                  <h3 className="h3 mt-2">{l.title}</h3>
                  <p className="body">{l.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{l.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which fix, which user</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each group to the right saving. Most organizations use more than one at once.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right move</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Deactivate the seat</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional actor who needs native access</td><td>Right-size roles &amp; plan tier</td><td className="is-no">Lower, but still per-seat</td></tr>
                  <tr><td className="feat">Light — approver, requester, field staff</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Full-time agent living in ServiceNow</td><td>Keep the fulfiller seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out ServiceNow.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your platform are two
                  different decisions. ServiceNow stays the system of record on
                  every option here. Your full-time agents keep working exactly as
                  they do today. All that changes is that the users who need less
                  stop paying for a platform built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your instance stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your agents. The portal integrates alongside ServiceNow through its API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused <Link href="/custom-portal-development" className="link">custom portal</Link> beats a full agent workspace they barely use — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Fulfiller fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind the play.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat fulfiller licenses onto a flat-fee portal wired into ServiceNow.</p>
                <span className="link">Explore custom portal development →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The vendor-neutral decision framework behind this ServiceNow playbook.</p>
                <span className="link">See the full playbook →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the per-seat savings calculator →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-partner-portal-development" className="link">Paying for external partner seats? Build a partner portal →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">Fulfiller vs. requester, API sync, which users to move, and cost.</p>
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

        <LeadForm source="Reduce ServiceNow License Costs page" heading="See where your ServiceNow bill is leaking" showSeatQualifiers sub="Tell us roughly how many ServiceNow fulfiller seats you run and how many are light users. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use ServiceNow, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
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
