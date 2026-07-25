import Link from "next/link";

/**
 * "Beyond Salesforce" section — surfaces AI Forge and Membership Management
 * to local-intent landing-page visitors who arrived for Salesforce consulting.
 *
 * Strategy: keep the page's primary SEO target (Salesforce-consulting-<city>)
 * intact in the URL / title / h1 / metadata, but explicitly cross-promote the
 * Cat-2 products in body content. Local visitors searching for Salesforce help
 * who also have AI / membership needs convert on the right pillar.
 *
 * Props:
 *   city — the city name (e.g. "Orlando", "Miami", "Tampa", "Jacksonville").
 *          Used in copy to anchor the offering geographically.
 */
export default function CityBeyondSalesforce({ city }: { city: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Beyond Salesforce</span>
            <h2 className="h1 mt-3">
              Custom AI &amp; flexible platforms <em>for {city} businesses too.</em>
            </h2>
          </div>
          <div>
            <p className="lede">
              Salesforce consulting is one pillar of what we do. Our Florida-based
              team also cuts per-seat license costs with custom portals, builds
              custom AI applications via the proprietary AI Forge Framework, and
              ships a standalone membership platform that runs alongside whatever
              stack you already have.
            </p>
          </div>
        </div>

        <div className="grid-3">
          {/* Custom Portal Development — the #1 cost-reduction wedge. Listed
              first since it's the highest-intent offer for buyers already
              paying for Salesforce seats. */}
          <article
            className="product-card"
            style={{ "--accent": "#1B6FC9" } as React.CSSProperties}
          >
            <span
              className="pill"
              style={{ background: "#E4F1FF", color: "#1B6FC9" }}
            >
              Cut per-seat costs
            </span>
            <h3 className="h3">Keep Salesforce, cut the seat bill</h3>
            <p className="body">
              Paying full per-seat Salesforce licenses for {city}-area sellers,
              ops staff, or partners who use a fraction of it? We build a custom
              portal wired into your Salesforce org so light users move to one
              flat fee instead of a license each — your CRM stays exactly where
              it is.
            </p>
            <ul className="features">
              <li>No rip-and-replace — Salesforce stays the system of record</li>
              <li>Two-way sync, one source of truth</li>
              <li>Flat fee, not per-seat, no matter how many users</li>
            </ul>
            <Link href="/custom-portal-development" className="link">
              Explore Custom Portal Development
            </Link>
          </article>

          {/* AI Forge — custom AI dev practice */}
          <article
            className="product-card"
            style={{ "--accent": "#7C3AED" } as React.CSSProperties}
          >
            <span
              className="pill"
              style={{ background: "#F3E8FF", color: "#7C3AED" }}
            >
              Custom AI development
            </span>
            <h3 className="h3">AI Forge — built and run for you</h3>
            <p className="body">
              {city}-area teams use AI Forge to design, build, and operate custom
              AI applications under one monthly subscription. Production-ready in
              2–6 weeks via the AI Forge Framework. Deep Salesforce, HubSpot,
              and CRM-agnostic integrations included.
            </p>
            <ul className="features">
              <li>Discovery to production in 2–6 weeks</li>
              <li>Three tiers — Launch, Scale, Enterprise</li>
              <li>Florida-based team, Eastern Time delivery</li>
              <li>One bill: build, host, monitor, iterate</li>
            </ul>
            <Link href="/ai-forge" className="link">
              Explore AI Forge
            </Link>
          </article>

          {/* Membership Management — standalone, AI-built, Salesforce-capable */}
          <article
            className="product-card"
            style={{ "--accent": "#C2185B" } as React.CSSProperties}
          >
            <span
              className="pill"
              style={{ background: "#FCE4EC", color: "#C2185B" }}
            >
              Flagship · Membership
            </span>
            <h3 className="h3">Membership Management for {city}</h3>
            <p className="body">
              A standalone, AI-built membership platform for {city}-area YMCAs,
              gyms, studios, clubs, and associations. Sign-ups, recurring
              billing, class scheduling, attendance, and a self-service portal
              — runs alongside Salesforce, HubSpot, or whatever you already use.
            </p>
            <ul className="features">
              <li>YMCAs, gyms, studios, clubs &amp; associations</li>
              <li>Recurring billing &amp; dunning out of the box</li>
              <li>Branded member self-service portal</li>
              <li>Salesforce, HubSpot, and CRM-agnostic integrations</li>
            </ul>
            <Link href="/membership-management" className="link">
              Explore Membership Management
            </Link>
          </article>
        </div>

        {/* Secondary CTAs — seat-cost calculator for the wedge, plus the AI
            Forge Florida landing page for visitors who want a more
            AI-focused entry point. */}
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p className="body" style={{ fontSize: 15 }}>
            Want to see your own numbers?{" "}
            <Link
              href="/savings-calculator"
              style={{ color: "var(--indigo)", fontWeight: 600 }}
            >
              Run your per-seat savings calculator →
            </Link>
          </p>
          <p className="body mt-2" style={{ fontSize: 15 }}>
            Paying full per-seat Salesforce licenses?{" "}
            <Link
              href="/reduce-crm-licensing-costs"
              style={{ color: "var(--indigo)", fontWeight: 600 }}
            >
              See the three ways to cut CRM licensing costs
            </Link>{" "}
            or{" "}
            <Link
              href="/compare/salesforce-seat-cost-vs-custom-portal"
              style={{ color: "var(--indigo)", fontWeight: 600 }}
            >
              the Salesforce seat cost vs. custom portal math →
            </Link>
          </p>
          <p className="body mt-2" style={{ fontSize: 15 }}>
            Looking specifically for custom AI development in Florida?{" "}
            <Link
              href="/ai-app-development-florida"
              style={{ color: "var(--indigo)", fontWeight: 600 }}
            >
              See our AI app development page for Florida businesses →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
