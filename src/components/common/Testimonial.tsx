import Link from "next/link";

/**
 * Shared social-proof block for the high-intent money pages (portal, reduce-crm,
 * custom-software). CRO rationale: these pages are where CFO/Ops/RevOps buyers
 * land from search, yet previously carried only the TrustBar — no social proof
 * at the decision point, right before the lead form.
 *
 * The quote is the real, already-shipping client testimonial used on the home
 * page and savings calculator (Jay Vashi). It is honest and anonymized at the
 * company level — no fabricated names, metrics, or logos are introduced here.
 */
export default function Testimonial() {
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
              <div className="role">
                Senior Delivery Manager, Fortune 500 insurance company
              </div>
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
