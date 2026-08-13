import Link from "next/link";

/**
 * Named social proof for the wedge / solution pages.
 *
 * Reuses the ONE real, honest testimonial already on the homepage and
 * savings-calculator (Jay Vashi) — the highest-intent CRM-cost pages carried
 * no named proof before this. No fabricated clients, metrics, or logos: this is
 * the exact quote and attribution used elsewhere in the repo, extracted into a
 * shared component so it stays consistent everywhere it appears.
 */
export default function WedgeTestimonial() {
  return (
    <section className="section is-canvas">
      <div className="container">
        <div className="testimonial">
          <span className="eyebrow">What clients say</span>
          <p className="quote mt-4">
            Ardn Cloud Solutions went beyond our expectations, implementing a
            hands-on, cost-saving approach that has been invaluable to our
            business.
          </p>
          <div className="attribution">
            <div className="avatar">JV</div>
            <div>
              <div className="who">Jay Vashi</div>
              <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
            </div>
          </div>
          <p className="body mt-4">
            <Link href="/case-studies" style={{ color: "var(--indigo)", fontWeight: 600 }}>
              See how we&apos;ve delivered for clients — read our case studies →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
