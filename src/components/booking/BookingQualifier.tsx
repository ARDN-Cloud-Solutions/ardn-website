"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import "./booking.css";

/**
 * Pre-booking qualifier. Every Calendly link on the site opens this short
 * intake (interest → size → timeline → contact) before the booking page, so
 * each call arrives with context:
 *   - Calendly is opened with name/email prefilled, the summary in `a1`
 *     (the event type's FIRST custom question) and utm_* tags carrying the
 *     interest and the page the visitor converted from.
 *   - The same answers are posted to /api/contact (source "Booking
 *     qualifier"), so a visitor who drops off before booking is still a lead.
 * Mounted once in the root layout (click interception) and used inline on
 * /contact-us via <BookingQualifier inline href=… />.
 */

const DEFAULT_CAL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

type Interest = { id: string; label: string; hint: string };
const INTERESTS: Interest[] = [
  { id: "club-steward", label: "Club Steward", hint: "Golf & country club software" },
  { id: "nonprofit", label: "Nonprofit Management", hint: "YMCAs, JCCs, community centers" },
  { id: "membership", label: "Membership Management", hint: "Gyms, studios, clubs, associations" },
  { id: "ai-forge", label: "AI Forge", hint: "A custom AI app, built and run for us" },
  { id: "custom-software", label: "Custom software or a portal", hint: "Portals, ecommerce, internal tools" },
  { id: "salesforce", label: "Salesforce help", hint: "Storefronts, License Guard, consulting" },
  { id: "other", label: "Something else", hint: "Not sure yet, want to talk it through" },
];

const SIZE: Record<string, { q: string; options: string[] }> = {
  "club-steward": { q: "How many clubs do you operate?", options: ["1 club", "2–5 clubs", "6–20 clubs", "More than 20"] },
  nonprofit: { q: "How many branches or locations?", options: ["1 location", "2–5 locations", "6–15 locations", "More than 15"] },
  membership: { q: "How many active members?", options: ["Under 500", "500–2,000", "2,000–10,000", "More than 10,000"] },
  default: { q: "How big is your organization?", options: ["1–25 people", "26–100 people", "101–500 people", "More than 500"] },
};

const TIMELINE = ["As soon as possible", "Within 3 months", "In 3–6 months", "Just researching"];

// Page → likely interest, so the first question is usually one tap.
function guessInterest(path: string): string | undefined {
  if (path.startsWith("/golf")) return "club-steward";
  if (path.startsWith("/nonprofit") || path.startsWith("/ai-for-membership")) return "nonprofit";
  if (path.startsWith("/membership") || path.startsWith("/chapter")) return "membership";
  if (path.startsWith("/ai-forge") || path.startsWith("/ai-")) return "ai-forge";
  if (/^\/(custom-|glp-1|compare|reduce-crm|savings)/.test(path)) return "custom-software";
  if (/^\/(storefronts|license-guard|salesforce|buyers-guide)/.test(path)) return "salesforce";
  return undefined;
}

type Gtag = (...a: unknown[]) => void;
const track = (event: string, params: Record<string, string>) => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === "function") g("event", event, params);
};

type Answers = { interest?: string; size?: string; timeline?: string; name: string; email: string; company: string; notes: string };
const EMPTY: Answers = { name: "", email: "", company: "", notes: "" };

function buildCalendlyUrl(base: string, a: Answers, page: { path: string; title: string }) {
  const interest = INTERESTS.find((i) => i.id === a.interest)?.label ?? "Not specified";
  const summary = [
    `Interested in: ${interest}`,
    `Size: ${a.size ?? "—"}`,
    `Timeline: ${a.timeline ?? "—"}`,
    a.company && `Company: ${a.company}`,
    a.notes && `Main goal: ${a.notes}`,
    `Booked from: ${page.path} (${page.title})`,
  ]
    .filter(Boolean)
    .join(" · ");
  const url = new URL(base);
  url.searchParams.set("name", a.name);
  url.searchParams.set("email", a.email);
  url.searchParams.set("a1", summary.slice(0, 9000));
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "booking-qualifier");
  url.searchParams.set("utm_campaign", a.interest ?? "unspecified");
  url.searchParams.set("utm_content", page.path.slice(0, 100) || "/");
  return { url: url.toString(), summary, interest };
}

function Flow({
  href,
  onDone,
  onClose,
  inline,
}: {
  href: string;
  onDone: (calendlyUrl: string) => void;
  onClose?: () => void;
  inline?: boolean;
}) {
  const [page] = useState(() =>
    typeof window === "undefined" ? { path: "/", title: "" } : { path: window.location.pathname, title: document.title },
  );
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>(() => ({ ...EMPTY, interest: guessInterest(page.path) }));
  const [error, setError] = useState("");
  const size = SIZE[a.interest ?? ""] ?? SIZE.default;
  const total = 4;

  useEffect(() => {
    track("booking_qualifier_open", { page: page.path, preselected: a.interest ?? "none" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (field: "interest" | "size" | "timeline", value: string) => {
    setA((prev) => ({ ...prev, [field]: value, ...(field === "interest" && prev.interest !== value ? { size: undefined } : {}) }));
    track("booking_qualifier_step", { step: field, value, page: page.path });
    setTimeout(() => setStep((s) => Math.min(s + 1, total - 1)), 160);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (a.name.trim().length < 3) return setError("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email.trim())) return setError("Please enter a valid work email.");
    setError("");
    const { url, summary, interest } = buildCalendlyUrl(href, { ...a, name: a.name.trim(), email: a.email.trim() }, page);
    // Lead capture, even if they never finish booking. keepalive lets it
    // complete while the booking page opens.
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name: a.name.trim(),
        email: a.email.trim(),
        company: a.company.trim(),
        message: `Started booking a call.\n${summary.split(" · ").join("\n")}`,
        source: `Booking qualifier · ${page.path}`,
      }),
    }).catch(() => {});
    track("booking_qualifier_complete", { page: page.path, interest, size: a.size ?? "", timeline: a.timeline ?? "" });
    onDone(url);
  };

  const Options = ({ field, items }: { field: "interest" | "size" | "timeline"; items: { value: string; label: string; hint?: string }[] }) => (
    <div className="bq-options">
      {items.map((o) => {
        const on = a[field] === o.value;
        return (
          <button key={o.value} type="button" className={on ? "bq-option is-on" : "bq-option"} onClick={() => pick(field, o.value)} aria-pressed={on}>
            <span>
              <b>{o.label}</b>
              {o.hint && <small>{o.hint}</small>}
            </span>
            <i aria-hidden="true">{on ? <Check size={16} strokeWidth={3} /> : null}</i>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className={inline ? "bq-panel is-inline" : "bq-panel"}>
      <div className="bq-top">
        {step > 0 ? (
          <button type="button" className="bq-back" onClick={() => setStep((s) => s - 1)}>
            <ArrowLeft size={16} /> Back
          </button>
        ) : (
          <span className="bq-kicker">Book a free 30-minute call</span>
        )}
        {onClose && (
          <button type="button" className="bq-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        )}
      </div>
      <div className="bq-progress" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <span key={i} className={i <= step ? "is-on" : ""} />
        ))}
      </div>
      <p className="bq-count">
        Step {step + 1} of {total}
      </p>

      {step === 0 && (
        <>
          <h2>What can we help you with?</h2>
          <Options field="interest" items={INTERESTS.map((i) => ({ value: i.id, label: i.label, hint: i.hint }))} />
        </>
      )}
      {step === 1 && (
        <>
          <h2>{size.q}</h2>
          <Options field="size" items={size.options.map((o) => ({ value: o, label: o }))} />
        </>
      )}
      {step === 2 && (
        <>
          <h2>When are you hoping to get started?</h2>
          <Options field="timeline" items={TIMELINE.map((o) => ({ value: o, label: o }))} />
        </>
      )}
      {step === 3 && (
        <form onSubmit={submit} className="bq-form" noValidate>
          <h2>Last step: who should we expect?</h2>
          <div className="bq-fields">
            <label htmlFor="bq-name">
              <span>Full name</span>
              <input id="bq-name" autoComplete="name" value={a.name} onChange={(e) => { setA({ ...a, name: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="bq-email">
              <span>Work email</span>
              <input id="bq-email" type="email" autoComplete="email" value={a.email} onChange={(e) => { setA({ ...a, email: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="bq-company" className="bq-wide">
              <span>Organization</span>
              <input id="bq-company" autoComplete="organization" value={a.company} onChange={(e) => { setA({ ...a, company: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="bq-notes" className="bq-wide">
              <span>What&apos;s the main thing you want to solve? (optional)</span>
              <textarea id="bq-notes" rows={2} value={a.notes} onChange={(e) => { setA({ ...a, notes: e.target.value }); setError(""); }} />
            </label>
          </div>
          {error && <p className="bq-error">{error}</p>}
          <button type="submit" className="bq-submit">
            Choose a time <ArrowRight size={18} />
          </button>
          <p className="bq-fine">Next you&apos;ll pick a time on our calendar. We only use your details to prepare for the call.</p>
        </form>
      )}
    </div>
  );
}

/** Site-wide: intercepts Calendly links and runs the qualifier first. */
export function BookingQualifierHost() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href*='calendly.com']") as HTMLAnchorElement | null;
      if (!a || a.dataset.skipQualifier === "true") return;
      e.preventDefault();
      setHref(a.href.split("?")[0] || DEFAULT_CAL);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (href) dialog.current?.showModal();
  }, [href]);

  const close = useCallback(() => {
    dialog.current?.close();
    setHref(null);
  }, []);

  return (
    <dialog
      ref={dialog}
      className="bq-dialog"
      aria-label="Book a call"
      onClose={() => setHref(null)}
      onClick={(e) => {
        if (e.target === dialog.current) close();
      }}
    >
      {href && (
        <Flow
          key={href}
          href={href}
          onClose={close}
          onDone={(url) => {
            window.open(url, "_blank", "noopener");
            close();
          }}
        />
      )}
    </dialog>
  );
}

/** Inline version (contact page): shows the calendar embed once answered. */
export function BookingQualifierInline({ href = DEFAULT_CAL }: { href?: string }) {
  const [embed, setEmbed] = useState<string | null>(null);
  if (embed) {
    const u = new URL(embed);
    u.searchParams.set("hide_gdpr_banner", "1");
    return <iframe src={u.toString()} title="Pick a time for your call with Ardn" className="bq-iframe" />;
  }
  return <Flow href={href} inline onDone={setEmbed} />;
}
