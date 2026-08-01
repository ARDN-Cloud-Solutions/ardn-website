import Image from "next/image";

/**
 * Compact single-testimonial proof band for the per-seat cost-reduction wedge
 * pages (portals, reduce-CRM, seat-cost compare). Reuses the one real, already
 * published testimonial (Jay Vashi) that until now only appeared on the
 * savings-calculator page — surfacing genuine social proof on the highest-intent
 * wedge pages without fabricating anything. Server component (no client JS),
 * styled with the existing design tokens so it matches the surrounding `.card`
 * language on every wedge page.
 */
export default function WedgeProof() {
  return (
    <section className="section" aria-label="Client testimonial">
      <div className="container">
        <div
          className="card"
          style={{
            padding: "36px",
            maxWidth: "820px",
            margin: "0 auto",
            display: "flex",
            gap: "24px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/images/testimonial-jay-vashi.webp"
            alt="Jay Vashi"
            width={72}
            height={72}
            style={{ borderRadius: "9999px", flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: "260px" }}>
            <p
              className="body"
              style={{ fontStyle: "italic", marginBottom: "14px", fontSize: "17px" }}
            >
              &ldquo;Ardn Cloud Solutions went beyond our expectations, implementing a
              hands-on, cost-saving approach that has been invaluable to our business.
              Their strategic focus on high-impact efficiencies transformed our
              operations, delivering substantial cost reductions and measurable
              improvements throughout our processes.&rdquo;
            </p>
            <div style={{ fontWeight: 700, color: "var(--ink)" }}>Jay Vashi</div>
            <div className="body" style={{ fontSize: "14px", color: "#6b7280" }}>
              Salesforce Delivery Manager — Fortune 500 Insurance Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
