import Link from "next/link";

/**
 * Compact, single-quote social-proof block for the cost-reduction wedge and
 * compare pages. Reuses the real, attributed testimonial already published on
 * the homepage and savings calculator — no new or fabricated claims. Placed
 * just above the LeadForm so a skeptical CFO/RevOps/IT buyer sees named,
 * on-message ("cost-saving") proof at the conversion point, which these pages
 * previously lacked (only the 4-item TrustBar appeared under their heroes).
 */
export default function WedgeTestimonial() {
  return (
    <section className="section">
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
              See how we&rsquo;ve delivered for clients — read our case studies →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
