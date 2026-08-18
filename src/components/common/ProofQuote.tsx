import Image from "next/image";

/**
 * Single-quote social-proof block for the high-intent wedge pages.
 *
 * CRO rationale: the per-seat cost-reduction pages (custom-portal-development,
 * reduce-crm-licensing-costs, the seat-cost comparison) carried strong claims
 * but zero proof. This drops one real, on-strategy testimonial — the same
 * verbatim Jay Vashi quote already live on the savings calculator — between the
 * argument and the FAQ, reinforcing the cost-reduction message at the moment
 * the reader is weighing it. Honest: the quote and attribution are unchanged
 * from what already ships elsewhere on the site; no fabrication.
 *
 * Server component (no client JS) so it can drop into the static wedge pages
 * without bloating them.
 */
export default function ProofQuote({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: "40px",
            maxWidth: "820px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="kicker" style={{ justifyContent: "center" }}>
            What a client says
          </div>
          <blockquote
            className="lede"
            style={{ marginTop: "18px", fontStyle: "italic" }}
          >
            &ldquo;Ardn Cloud Solutions went beyond our expectations,
            implementing a hands-on, cost-saving approach that has been
            invaluable to our business. Their strategic focus on high-impact
            efficiencies transformed our operations, delivering substantial cost
            reductions and measurable improvements throughout our
            processes.&rdquo;
          </blockquote>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            <Image
              src="/images/testimonial-jay-vashi.webp"
              alt="Jay Vashi"
              width={48}
              height={48}
              style={{ borderRadius: "50%" }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 700, color: "#14142B" }}>Jay Vashi</div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>
                Salesforce Delivery Manager, Fortune 500 Insurance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
