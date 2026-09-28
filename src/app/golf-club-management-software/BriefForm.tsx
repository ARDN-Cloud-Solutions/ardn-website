"use client";

import { useState } from "react";
import { track } from "./TrackedLink";

const BRIEF_URL = "/downloads/clubhouse360-executive-brief.pdf";

/**
 * Soft-gated executive brief: for the executive who won't book a call yet
 * but will share an email to take a four-page PDF to their CFO or board.
 * Posts to the same /api/contact route as LeadForm (source
 * "golf-exec-brief"), then reveals the download.
 */
export default function BriefForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | null)?.value?.trim() ?? "";
    const clubs = value("clubs");

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"),
          email: value("email"),
          company: value("company"),
          message: [
            "Downloaded the Clubhouse360 executive brief.",
            clubs ? `Clubs operated: ${clubs}` : "",
          ]
            .filter(Boolean)
            .join("\n"),
          source: "golf-exec-brief",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "That didn't send. Check your email address and try again.");
      }
      setStatus("ok");
      track("generate_lead", { source: "golf-exec-brief" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "That didn't send. Please try again.");
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="gc-brief-done">
        <p className="gc-brief-done-title">Your brief is ready.</p>
        <p>Four pages: the platform, the rollout and the controls, ready to forward.</p>
        <a
          className="gc-btn gc-btn-gold"
          href={BRIEF_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("brief_download", { page: "golf-club-management-software" })}
        >
          Download the executive brief (PDF)
        </a>
      </div>
    );
  }

  return (
    <form className="gc-brief-form" onSubmit={handleSubmit}>
      <div className="gc-brief-fields">
        <label htmlFor="brief-name">
          <span>Name</span>
          <input id="brief-name" name="name" type="text" required autoComplete="name" />
        </label>
        <label htmlFor="brief-email">
          <span>Work email</span>
          <input id="brief-email" name="email" type="email" required autoComplete="email" />
        </label>
        <label htmlFor="brief-company">
          <span>Company</span>
          <input id="brief-company" name="company" type="text" autoComplete="organization" />
        </label>
        <label htmlFor="brief-clubs">
          <span>Clubs operated</span>
          <input id="brief-clubs" name="clubs" type="text" inputMode="numeric" placeholder="e.g. 12" />
        </label>
      </div>
      {status === "err" && <p className="gc-brief-error">{error}</p>}
      <button type="submit" className="gc-btn gc-btn-gold" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get the executive brief"}
      </button>
      <p className="gc-brief-fine">
        Instant download. We&rsquo;ll only use your email to follow up about
        Clubhouse360.
      </p>
    </form>
  );
}
