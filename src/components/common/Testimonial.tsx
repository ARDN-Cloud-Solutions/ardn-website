import Link from "next/link";

/**
 * Shared client testimonial block for the money / solution pages.
 *
 * CRO rationale: the solution pages (portal, software hub, reduce-crm) carried
 * only the TrustBar and no social proof between hero and lead form. This reuses
 * the SAME real, already-published quote shown on the homepage
 * (LandingPageContent.tsx) — no fabricated clients, metrics, or logos. The
 * "cost-saving approach" wording is on-message for the per-seat cost wedge, so
 * placing it just above the lead form reinforces the pitch at the point of
 * highest purchase intent.
 *
 * Default copy is the homepage quote; props allow a different real quote later
 * without duplicating markup.
 */
export default function Testimonial({
  quote = "Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.",
  initials = "JV",
  who = "Jay Vashi",
  role = "Senior Delivery Manager, Fortune 500 insurance company",
}: {
  quote?: string;
  initials?: string;
  who?: string;
  role?: string;
}) {
  return (
    <section className="section is-canvas">
      <div className="container">
        <div className="testimonial">
          <span className="eyebrow">What clients say</span>
          <p className="quote mt-4">{quote}</p>
          <div className="attribution">
            <div className="avatar">{initials}</div>
            <div>
              <div className="who">{who}</div>
              <div className="role">{role}</div>
            </div>
          </div>
          <p className="body mt-4">
            <Link href="/case-studies" style={{ color: "var(--indigo)", fontWeight: 600 }}>
              See how we&rsquo;ve delivered for clients — read our case studies →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
