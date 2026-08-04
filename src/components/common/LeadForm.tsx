"use client";

import { useState } from "react";

/**
 * Inline lead-capture form for the solution / vertical landing pages.
 *
 * CRO rationale: every landing page previously offered only a Calendly CTA,
 * which converts the minority of visitors ready to book a live call. This
 * low-friction form (name + email, optional company/message) captures the
 * larger group who will share contact details but won't book a call yet.
 *
 * Posts to the existing /api/contact route (name + email required; company,
 * crm, seats, message, source optional — backward-compatible). Fires the GA4
 * `generate_lead` event on success so the conversion is tracked per source.
 *
 * The optional "Which CRM?" + "Approx. users/seats" fields exist to qualify the
 * per-seat cost-reduction wedge: they are the two data points sales needs to
 * size a portal-vs-seat saving, and they make good on the wedge pages' sub-copy
 * ("tell us which CRM you run and roughly how many users"). Both are optional so
 * form friction stays low. Set `showSeatQualifiers={false}` for build-shop pages
 * where CRM/seat count is not the qualifier.
 */
export default function LeadForm({
  source,
  heading = "Get a free scope & quote",
  sub = "Tell us what you're trying to build. We'll reply within 4 business hours with a fixed quote — no obligation.",
  showSeatQualifiers = false,
}: {
  source: string;
  heading?: string;
  sub?: string;
  showSeatQualifiers?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement)?.value?.trim(),
      crm: (form.elements.namedItem("crm") as HTMLInputElement)?.value?.trim(),
      seats: (form.elements.namedItem("seats") as HTMLInputElement)?.value?.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim(),
      source,
    };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      setStatus("ok");
      if (typeof window !== "undefined" && typeof (window as { gtag?: unknown }).gtag === "function") {
        (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "generate_lead", {
          source,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("err");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d7dae5",
    fontSize: "15px",
    fontFamily: "inherit",
    color: "#14142B",
    background: "#fff",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#475467",
    marginBottom: "6px",
  };

  return (
    <section className="section is-canvas" id="quote">
      <div className="container">
        <div
          className="card"
          style={{ maxWidth: "640px", margin: "0 auto", padding: "36px" }}
        >
          {status === "ok" ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ fontSize: "40px", marginBottom: "8px" }}>✅</div>
              <h2 className="h2" style={{ marginBottom: "8px" }}>Got it — thank you.</h2>
              <p className="body">
                Your request is in. We&apos;ll get back to you within 4 business
                hours with next steps and a fixed quote. Need to talk sooner?{" "}
                <a
                  href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--indigo)", fontWeight: 600 }}
                >
                  Book a call →
                </a>
              </p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <span className="eyebrow">Free &amp; no obligation</span>
                <h2 className="h2 mt-2" style={{ marginBottom: "8px" }}>{heading}</h2>
                <p className="body">{sub}</p>
              </div>
              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
                <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label style={labelStyle} htmlFor="lf-name">Name *</label>
                    <input id="lf-name" name="name" type="text" required style={inputStyle} placeholder="Your name" />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="lf-email">Work email *</label>
                    <input id="lf-email" name="email" type="email" required style={inputStyle} placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="lf-company">Company</label>
                  <input id="lf-company" name="company" type="text" style={inputStyle} placeholder="Company name (optional)" />
                </div>
                {showSeatQualifiers && (
                  <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "1fr 1fr" }}>
                    <div>
                      <label style={labelStyle} htmlFor="lf-crm">Which CRM do you run?</label>
                      <input id="lf-crm" name="crm" type="text" style={inputStyle} placeholder="Salesforce, HubSpot… (optional)" />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="lf-seats">Approx. # of users/seats</label>
                      <input id="lf-seats" name="seats" type="text" inputMode="numeric" style={inputStyle} placeholder="e.g. 250 (optional)" />
                    </div>
                  </div>
                )}
                <div>
                  <label style={labelStyle} htmlFor="lf-message">{showSeatQualifiers ? "What are you trying to cut costs on?" : "What do you want to build?"}</label>
                  <textarea id="lf-message" name="message" rows={3} style={{ ...inputStyle, resize: "vertical" }} placeholder="A sentence or two is plenty (optional)" />
                </div>
                {status === "err" && (
                  <p style={{ color: "#b42318", fontSize: "14px", margin: 0 }}>{error}</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-arrow"
                  disabled={status === "sending"}
                  style={{ width: "100%", opacity: status === "sending" ? 0.7 : 1 }}
                >
                  {status === "sending"
                    ? "Sending…"
                    : showSeatQualifiers
                      ? "Send my savings breakdown"
                      : "Get my free quote"}
                </button>
                <p style={{ fontSize: "13px", color: "#475467", textAlign: "center", margin: 0, fontWeight: 500 }}>
                  {showSeatQualifiers
                    ? "Where a portal cuts your per-seat bill · We reply within 4 business hours · No obligation"
                    : "Fixed quote within 48 hours · We reply within 4 business hours · No obligation"}
                </p>
                <p style={{ fontSize: "12px", color: "#98a2b3", textAlign: "center", margin: 0 }}>
                  We&apos;ll only use this to reply about your project. No spam, ever.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
