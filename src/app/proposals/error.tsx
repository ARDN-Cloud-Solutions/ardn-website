"use client";

import { useEffect } from "react";

/**
 * If a proposal page fails to load (most often right after a new deploy, when
 * the browser still holds the previous version), reload once from the server.
 */
export default function ProposalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("proposal page error", error);
    try {
      const key = "prp-reloaded:" + window.location.pathname;
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        return;
      }
    } catch {
      /* storage unavailable: fall through to the message */
    }
  }, [error]);
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "#FAF9F7", color: "#0A0F2C" }}>
      <div style={{ maxWidth: 420, textAlign: "center", display: "flex", flexDirection: "column", gap: 14 }}>
        <h1 style={{ margin: 0, fontSize: 32 }}>This page didn&apos;t load</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: "#4A5170" }}>Reload to get the latest version. If it keeps happening, sign in again.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button type="button" onClick={() => window.location.reload()} style={{ height: 44, padding: "0 22px", border: 0, borderRadius: 22, background: "#073D2E", color: "#FFFFFF", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Reload</button>
          <button type="button" onClick={() => reset()} style={{ height: 44, padding: "0 22px", borderRadius: 22, border: "1px solid #D8DBE8", background: "#FFFFFF", color: "#073D2E", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Try again</button>
        </div>
      </div>
    </div>
  );
}
