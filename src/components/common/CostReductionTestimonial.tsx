import Image from "next/image";

/**
 * Lightweight testimonial band for the cost-reduction wedge pages
 * (custom-portal-development, reduce-crm-licensing-costs, etc.).
 *
 * CRO rationale: the wedge product/pillar pages carried no social proof, yet
 * they ask a skeptical mid-market ops/finance buyer to change their licensing
 * model. This surfaces the ONE genuine, attributed client quote the site
 * already holds (Jay Vashi — the same quote used on the savings calculator and
 * contact page) on the pages that make the core cost-reduction pitch.
 *
 * No fabrication: quote, name, role, and avatar are the exact assets already
 * published elsewhere on the site. Styled with the shared `ardn-page` card
 * classes so it drops into any wedge page between content and the LeadForm.
 */
export default function CostReductionTestimonial({
  className = "section",
}: {
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "36px",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">Why clients move</span>
          <blockquote
            className="body"
            style={{
              fontSize: "20px",
              lineHeight: 1.55,
              color: "#14142B",
              fontWeight: 500,
              margin: "16px 0 24px",
            }}
          >
            &ldquo;Ardn Cloud Solutions went beyond our expectations, implementing a
            hands-on, cost-saving approach that has been invaluable to our business.
            Their strategic focus on high-impact efficiencies transformed our
            operations, delivering substantial cost reductions and measurable
            improvements throughout our processes.&rdquo;
          </blockquote>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Image
              src="/images/testimonial-jay-vashi.webp"
              alt="Jay Vashi"
              width={48}
              height={48}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 700, color: "#14142B" }}>Jay Vashi</div>
              <div style={{ fontSize: "14px", color: "#475467" }}>
                Salesforce Delivery Manager — Fortune 500 Insurance Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
