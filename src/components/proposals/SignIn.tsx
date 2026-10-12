"use client";

import { useState } from "react";
import Image from "next/image";

type Props = { slug: string; product: string; client: string; admin?: boolean };

export default function SignIn({ slug, product, client, admin }: Props) {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  async function post(url: string, body: Record<string, string>) {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = (await res.json().catch(() => ({}))) as { error?: string; next?: string };
    if (!res.ok) throw new Error(data.error || "Something went wrong.");
    return data;
  }

  async function sendCode(e?: React.FormEvent) {
    e?.preventDefault();
    setBusy(true);
    setError("");
    try {
      await post("/api/proposals/request-code", { slug, email });
      setStep("code");
      setNote("If this address is approved, a code is on its way.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const r = await post("/api/proposals/verify-code", { slug, email, code });
      window.location.assign(r.next || `/proposals/${slug}`);
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  const input: React.CSSProperties = { height: 52, padding: "0 16px", fontSize: 16, fontFamily: "inherit", border: "1px solid #D8DBE8", borderRadius: 12, background: "#FFFFFF", color: "#0A0F2C", width: "100%", boxSizing: "border-box" };
  const primary: React.CSSProperties = { height: 52, border: 0, borderRadius: 999, background: "linear-gradient(135deg, #e8ce8f, #d4b25a)", color: "#241c07", fontFamily: "inherit", fontSize: 16, fontWeight: 600, cursor: busy ? "wait" : "pointer", boxShadow: "0 10px 30px rgba(212,178,90,0.32)", opacity: busy ? 0.7 : 1 };
  const linkBtn: React.CSSProperties = { border: 0, background: "none", padding: "12px 0", color: "#073D2E", fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer" };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexWrap: "wrap", background: "#FAF9F7" }}>
      <div style={{ flex: "1 1 460px", background: "linear-gradient(168deg, #0a1226 0%, #050b16 58%, #07100c 100%)", color: "#EEF1FB", padding: "48px 56px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48 }}>
        <Image src="/logo/ardn_logo_white.svg" alt="Ardn Cloud Solutions" width={140} height={36} priority style={{ height: 36, width: "auto", alignSelf: "flex-start" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 520 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8CE8F" }}>{admin ? "Ardn staff only" : "Confidential proposal · the AI-first club platform, run by Ardn"}</div>
          <h1 style={{ margin: 0, fontSize: 56, color: "#FFFFFF" }}>{admin ? "Proposal activity" : product}</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: "#C3C9DE" }}>
            {admin ? "Who opened each proposal, what they watched, and the plans and numbers they tried." : `Prepared for ${client} by Ardn, the team that builds and runs Club Steward.`}
          </p>
        </div>
        <div style={{ fontSize: 13, color: "#9AA1BE" }}>Ardn Cloud Solutions · Orlando, Florida</div>
      </div>
      <div style={{ flex: "1 1 420px", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", boxSizing: "border-box" }}>
        <div style={{ width: "100%", maxWidth: 400, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h2 style={{ margin: 0, fontSize: 38, color: "#0A0F2C" }}>{step === "email" ? "Sign in to view" : "Check your email"}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#4A5170" }}>
              {step === "email" ? "Enter your work email and we\u2019ll send a 6-digit code. You need a new code each visit." : `Enter the code sent to ${email}. It expires in 10 minutes.`}
            </p>
          </div>
          {step === "email" ? (
            <form onSubmit={sendCode} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <label htmlFor="prp-email" style={{ fontSize: 14, fontWeight: 600, color: "#0A0F2C" }}>Work email</label>
              <input id="prp-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={admin ? "name@ardncloudsolutions.com" : "name@yourcompany.com"} style={input} />
              <button type="submit" disabled={busy} style={primary}>{busy ? "Sending\u2026" : "Send code"}</button>
            </form>
          ) : (
            <form onSubmit={verify} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <label htmlFor="prp-code" style={{ fontSize: 14, fontWeight: 600, color: "#0A0F2C" }}>6-digit code</label>
              <input id="prp-code" inputMode="numeric" autoComplete="one-time-code" maxLength={6} required value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} placeholder="000000" style={{ ...input, height: 60, fontSize: 28, letterSpacing: "0.45em", textAlign: "center" }} />
              <button type="submit" disabled={busy || code.length !== 6} style={primary}>{busy ? "Checking\u2026" : admin ? "Open dashboard" : "Open proposal"}</button>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <button type="button" onClick={() => { setStep("email"); setCode(""); setError(""); setNote(""); }} style={linkBtn}>Use a different email</button>
                <button type="button" onClick={() => sendCode()} disabled={busy} style={linkBtn}>Resend code</button>
              </div>
            </form>
          )}
          {note && !error ? <p role="status" style={{ margin: 0, fontSize: 14, color: "#073D2E" }}>{note}</p> : null}
          {error ? <p role="alert" style={{ margin: 0, fontSize: 14, color: "#B42318" }}>{error}</p> : null}
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "#4A5170" }}>
            {admin ? "Only ardncloudsolutions.com addresses can sign in." : "Confidential. A new code is needed each visit. Views and entries are logged for the Ardn team."}
          </p>
        </div>
      </div>
    </div>
  );
}
