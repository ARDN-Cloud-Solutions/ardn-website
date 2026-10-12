"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import type { SentBy } from "./proposalTracking";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Send the proposal to Ardn for a reply. The figures go with it; the name and
 * email are what let us answer. `send` does the posting so this stays a form.
 */
export default function SendProposal({
  preparedFor,
  send,
}: {
  preparedFor: string;
  send: (by: SentBy, website: string) => Promise<string | null>;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  if (!open)
    return (
      <button type="button" className="gc-btn gc-btn-ghost" onClick={() => setOpen(true)}>
        <Send size={16} aria-hidden="true" /> Send it to Ardn
      </button>
    );

  if (state === "sent")
    return (
      <p className="cp-verdict cp-send-done" role="status">
        <CheckCircle2 size={16} aria-hidden="true" /> Sent. We&apos;ll reply to {email}.
      </p>
    );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please enter your name.");
    if (!EMAIL.test(email.trim())) return setError("Please enter a valid email address.");
    setError(null);
    setState("sending");
    const failed = await send({ name: name.trim(), email: email.trim(), preparedFor, note: note.trim() }, website);
    if (failed) {
      setError(failed);
      setState("idle");
    } else setState("sent");
  }

  return (
    <form className="cp-send" onSubmit={submit} noValidate>
      <p className="cp-send-lede">
        We&apos;ll look at your figures and reply with the Club Steward costs for the apps you turned on.
      </p>
      <div className="cp-send-fields">
        <label className="cp-field">
          <span className="cp-label">Your name</span>
          <input className="cp-input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label className="cp-field">
          <span className="cp-label">Work email</span>
          <input
            className="cp-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
      </div>
      <label className="cp-field">
        <span className="cp-label">Anything we should know (optional)</span>
        <textarea className="cp-input" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
      </label>
      <label className="cp-hp" aria-hidden="true">
        Website
        <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </label>
      {error && (
        <p className="cp-field-error" role="alert">
          {error}
        </p>
      )}
      <div className="cp-actions">
        <button type="submit" className="gc-btn gc-btn-gold" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send the proposal"}
        </button>
        <button type="button" className="cp-link-btn" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
}
