"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mail, Phone } from "lucide-react";

import {
  MAIN_PROBLEM_MIN,
  QUESTIONS,
  SELECT_CODES,
  label,
  type Answers,
  type SelectCode,
} from "@/lib/leadFunnel";

/**
 * Multi-step qualification form for the Google Ads landing pages
 * (/start/<hook>). The questions live in @/lib/leadFunnel, shared with the
 * /api/lead route, which routes the finished lead (qualified + offer, or not
 * a fit) and emails it to the team. Answers live in sessionStorage so a
 * reload resumes where the person left off.
 */

const FUNNEL = "ardn-ai-consulting"; // GA4 `form` parameter; unchanged so reports stay continuous
const CALENDLY = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const GADS_QUALIFIED = process.env.NEXT_PUBLIC_GADS_QUALIFIED_LABEL;
const GADS_BOOKED = process.env.NEXT_PUBLIC_GADS_BOOKED_LABEL;
const EMAIL = "contactus@ardncloudsolutions.com";
const PHONE = "(407) 815-5303";
const PHONE_HREF = "tel:+14078155303";
const CLICK_KEY = "ardn-ads-click";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const TOTAL = QUESTIONS.length + 1; // + contact step

type Contact = { name: string; company: string; email: string; phone: string };
type Phase = "form" | "sending" | "qualified" | "disqualified" | "failed";
type Saved = {
  answers: Answers;
  contact: Contact;
  step: number;
  phase?: Phase;
  offer?: string | null;
  started?: boolean;
};

const EMPTY_ANSWERS: Answers = { want: [], main_problem: "", current_systems: "" };
const EMPTY_CONTACT: Contact = { name: "", company: "", email: "", phone: "" };

// ── helpers ─────────────────────────────────────────────────────────────────

type Gtag = (...a: unknown[]) => void;
function gtag(...args: unknown[]) {
  const g = typeof window !== "undefined" ? (window as unknown as { gtag?: Gtag }).gtag : undefined;
  if (typeof g === "function") g(...args);
}
const track = (event: string, params: Record<string, unknown> = {}) => gtag("event", event, params);

function storeGet<T>(key: string): T | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function storeSet(key: string, value: unknown) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / blocked storage: the form still works, it just won't resume */
  }
}

/** gclid/gbraid/wbraid and UTMs from the URL, kept in sessionStorage so they survive. */
function captureClickIds(): Record<string, string> {
  const saved = storeGet<Record<string, string>>(CLICK_KEY) ?? {};
  const params = new URLSearchParams(window.location.search);
  let changed = false;
  for (const k of ["gclid", "gbraid", "wbraid", ...UTM_KEYS]) {
    const v = params.get(k);
    if (v && saved[k] !== v) {
      saved[k] = v;
      changed = true;
    }
  }
  if (changed) storeSet(CLICK_KEY, saved);
  return saved;
}

/** Where the person came from, for the lead email (and the optional hub mirror). */
function attribution() {
  const params = new URLSearchParams(window.location.search);
  const ids = captureClickIds();
  for (const [k, v] of Object.entries(ids)) if (!params.has(k)) params.set(k, v);
  const get = (k: string) => (params.get(k) ?? "").slice(0, 300);
  return {
    query: params.toString().slice(0, 2000),
    landingUrl: window.location.href.slice(0, 2000),
    referrer: (document.referrer || "").slice(0, 2000),
    gclid: get("gclid"),
    gbraid: get("gbraid"),
    wbraid: get("wbraid"),
    ...Object.fromEntries(UTM_KEYS.map((k) => [k, get(k)])),
  };
}

async function postLead<T>(body: unknown): Promise<{ status: number; data: T }> {
  const send = async () => {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as T;
    // 5xx and 429 are worth one retry; 4xx answers are final.
    if (res.status >= 500 || res.status === 429) throw new Error(`HTTP ${res.status}`);
    return { status: res.status, data };
  };
  try {
    return await send();
  } catch {
    await new Promise((r) => setTimeout(r, 800));
    return send();
  }
}

function summary(a: Answers, hook: string) {
  const wants = a.want.map((w) => label("want", w)).join(", ");
  return [
    wants && `Wants: ${wants}`,
    a.industry && `Industry: ${label("industry", a.industry)}`,
    a.main_problem.trim() && `Problem: ${a.main_problem.trim()}`,
    a.company_size && `Size: ${label("company_size", a.company_size)}`,
    a.role && `Role: ${label("role", a.role)}`,
    a.timeline && `Start: ${label("timeline", a.timeline)}`,
    a.budget_band && `Budget: ${label("budget_band", a.budget_band)}`,
    a.current_systems.trim() && `Systems: ${a.current_systems.trim()}`,
    `From: ad page ${hook}`,
  ]
    .filter(Boolean)
    .join(" · ");
}

/** One line for Calendly's a1 field, so the booking carries the essentials too. */
function calendlyNote(a: Answers) {
  const oneLine = (s: string) => s.replace(/\s+/g, " ").trim();
  const problem = oneLine(a.main_problem);
  return [
    `Wants: ${a.want.map((w) => label("want", w)).join(", ")}`,
    a.industry && `Industry: ${label("industry", a.industry)}`,
    problem && `Problem: ${problem.length > 150 ? `${problem.slice(0, 150)}…` : problem}`,
  ]
    .filter(Boolean)
    .join("; ");
}

function answersPayload(a: Answers) {
  const out: Record<string, unknown> = { want: a.want, main_problem: a.main_problem.trim(), current_systems: a.current_systems.trim() };
  for (const k of SELECT_CODES) if (a[k]) out[k] = a[k];
  return out;
}

// ── component ───────────────────────────────────────────────────────────────

export default function FunnelForm({ hook }: { hook: string }) {
  const storeKey = `ardn-funnel:${FUNNEL}`;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [phase, setPhase] = useState<Phase>("form");
  const [offer, setOffer] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const started = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const restored = useRef(false);

  // Restore after a reload, and capture click ids, on mount (client only).
  useEffect(() => {
    captureClickIds();
    const saved = storeGet<Saved>(storeKey);
    if (saved) {
      started.current = Boolean(saved.started);
      setAnswers({ ...EMPTY_ANSWERS, ...saved.answers });
      setContact({ ...EMPTY_CONTACT, ...saved.contact });
      // Never resume past a question that still needs an answer (e.g. one
      // added since the answers were saved).
      const a = { ...EMPTY_ANSWERS, ...saved.answers };
      const gap = QUESTIONS.findIndex((q) =>
        "options" in q ? (q.multi ? a.want.length === 0 : !a[q.code as Exclude<SelectCode, "want">]) : a[q.code].trim().length < q.min,
      );
      setStep(Math.min(Math.max(saved.step ?? 0, 0), gap === -1 ? TOTAL - 1 : gap));
      if (saved.phase === "qualified" || saved.phase === "disqualified") {
        setPhase(saved.phase);
        setOffer(saved.offer ?? null);
      }
    }
    restored.current = true;
  }, [storeKey]);

  // Persist every change.
  useEffect(() => {
    if (!restored.current) return;
    storeSet(storeKey, {
      answers,
      contact,
      step,
      phase: phase === "qualified" || phase === "disqualified" ? phase : "form",
      offer,
      started: started.current,
    } satisfies Saved);
  }, [storeKey, answers, contact, step, phase, offer]);

  /** First interaction: fire lead_form_start once. */
  const touch = useCallback(() => {
    if (!started.current) {
      started.current = true;
      track("lead_form_start", { form: FUNNEL, page: hook });
    }
  }, [hook]);

  const scrollTop = () => {
    const el = root.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < 0) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const next = (code: string) => {
    track("lead_form_step", { step: code, step_number: step + 1, page: hook });
    setStep((s) => Math.min(s + 1, TOTAL - 1));
    scrollTop();
  };

  const pickSingle = (code: SelectCode, value: string) => {
    touch();
    setAnswers((prev) => ({ ...prev, [code]: value }));
    setTimeout(() => next(code), 160);
  };

  const toggleWant = (value: string) => {
    touch();
    setAnswers((prev) => ({
      ...prev,
      want: prev.want.includes(value) ? prev.want.filter((w) => w !== value) : [...prev.want, value],
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const c = { name: contact.name.trim(), company: contact.company.trim(), email: contact.email.trim(), phone: contact.phone.trim() };
    if (c.name.length < 2) return setError("Please enter your name.");
    if (!c.company) return setError("Please enter your company.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) return setError("Please enter a valid work email.");
    setError("");
    touch();
    setPhase("sending");
    try {
      const { status, data } = await postLead<{ status?: string; offer?: string | null; error?: string }>({
        hook,
        answers: answersPayload(answers),
        name: c.name,
        company: c.company,
        email: c.email,
        phone: c.phone,
        attribution: attribution(),
        website,
      });
      if (status === 422) {
        setPhase("form");
        setError(data.error ?? "Please check your details and try again.");
        return;
      }
      if (status >= 400 || (data.status !== "qualified" && data.status !== "disqualified")) throw new Error(`HTTP ${status}`);
      track("generate_lead", { form: FUNNEL, page: hook });
      if (data.status === "qualified") {
        const o = data.offer ?? null;
        track("qualified_lead", { offer: o ?? "", page: hook });
        if (GADS_QUALIFIED) gtag("event", "conversion", { send_to: GADS_QUALIFIED });
        setOffer(o);
        setPhase("qualified");
      } else {
        track("disqualified_lead", { page: hook });
        setPhase("disqualified");
      }
      scrollTop();
    } catch {
      setPhase("failed");
      scrollTop();
    }
  };

  // ── end screens ──
  if (phase === "qualified") return <Qualified root={root} contact={contact} answers={answers} hook={hook} offer={offer} />;
  if (phase === "disqualified") {
    return (
      <div className="fn-card" ref={root}>
        <span className="fn-kicker">Thanks, {contact.name.split(" ")[0] || "and welcome"}</span>
        <h2 className="fn-title">Thanks — based on your answers we&apos;re probably not the right fit right now.</h2>
        <p className="fn-text">
          We&apos;d rather be straight with you than book a call that doesn&apos;t help. These guides explain what AI and
          custom software projects usually involve and what drives the cost, so you can plan when the time is right.
        </p>
        <div className="fn-links">
          <Link href="/ai-consulting/cost">What AI consulting costs <ArrowRight size={16} /></Link>
          <Link href="/blog/topics/software-cost-comparisons">Software cost comparisons <ArrowRight size={16} /></Link>
        </div>
        <p className="fn-fine">If things change, email {EMAIL} and we&apos;ll pick it up from there.</p>
      </div>
    );
  }
  if (phase === "failed") {
    const body = encodeURIComponent(`${summary(answers, hook)}\n\nName: ${contact.name}\nCompany: ${contact.company}\nPhone: ${contact.phone}`);
    return (
      <div className="fn-card" ref={root}>
        <span className="fn-kicker">Almost there</span>
        <h2 className="fn-title">We couldn&apos;t send your answers just now.</h2>
        <p className="fn-text">Your connection or our server hiccuped. Reach us directly and we&apos;ll set up your free 30-minute call.</p>
        <div className="fn-links">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free 30-minute call")}&body=${body}`}>
            <Mail size={16} /> {EMAIL}
          </a>
          <a href={PHONE_HREF}>
            <Phone size={16} /> {PHONE}
          </a>
        </div>
        <button type="button" className="fn-retry" onClick={() => setPhase("form")}>
          Try sending again
        </button>
      </div>
    );
  }

  // ── steps ──
  const q = QUESTIONS[step];
  return (
    <div className="fn-card" ref={root}>
      <div className="fn-top">
        {step > 0 ? (
          <button type="button" className="fn-back" onClick={() => { setError(""); setStep((s) => s - 1); }}>
            <ArrowLeft size={16} /> Back
          </button>
        ) : (
          <span className="fn-kicker">Free 30-minute call · 1 minute</span>
        )}
        <span className="fn-count">
          Step {step + 1} of {TOTAL}
        </span>
      </div>
      <div
        className="fn-progress"
        role="progressbar"
        aria-label="Form progress"
        aria-valuemin={0}
        aria-valuemax={TOTAL}
        aria-valuenow={step + 1}
      >
        <span style={{ width: `${((step + 1) / TOTAL) * 100}%` }} />
      </div>

      {q && "options" in q && (
        <fieldset className="fn-step">
          <legend className="fn-title">{q.label}</legend>
          {q.help && <p className="fn-help">{q.help}</p>}
          <div className="fn-options">
            {q.options.map((o) => {
              const on = q.multi ? answers.want.includes(o.value) : answers[q.code] === o.value;
              return (
                <button
                  key={o.value}
                  type="button"
                  className={on ? "fn-option is-on" : "fn-option"}
                  aria-pressed={on}
                  onClick={() => (q.multi ? toggleWant(o.value) : pickSingle(q.code, o.value))}
                >
                  <span>{o.label}</span>
                  <i aria-hidden="true" className={q.multi ? "is-box" : ""}>
                    {on ? <Check size={15} strokeWidth={3} /> : null}
                  </i>
                </button>
              );
            })}
          </div>
          {q.multi && (
            <button type="button" className="fn-submit" disabled={answers.want.length === 0} onClick={() => next(q.code)}>
              Continue <ArrowRight size={18} />
            </button>
          )}
        </fieldset>
      )}

      {q && "text" in q && (() => {
        const value = answers[q.code];
        const len = value.trim().length;
        const short = q.min > 0 && len < q.min;
        return (
          <div className="fn-step" key={q.code}>
            <label className="fn-title" htmlFor={`fn-${q.code}`}>
              {q.label}
            </label>
            {q.help && <p className="fn-help">{q.help}</p>}
            <textarea
              id={`fn-${q.code}`}
              className="fn-textarea"
              rows={3}
              maxLength={q.max}
              placeholder={q.placeholder}
              value={value}
              onFocus={touch}
              onChange={(e) => setAnswers({ ...answers, [q.code]: e.target.value })}
            />
            {q.min > 0 && len > 0 && short && (
              <p className="fn-help">A little more, please: at least {MAIN_PROBLEM_MIN} characters.</p>
            )}
            <button type="button" className="fn-submit" disabled={short} onClick={() => next(q.code)}>
              {len || q.min > 0 ? "Continue" : "Skip"} <ArrowRight size={18} />
            </button>
          </div>
        );
      })()}

      {step === QUESTIONS.length && (
        <form className="fn-step" onSubmit={submit} noValidate>
          <h2 className="fn-title">Last step: where should we send the details?</h2>
          <div className="fn-fields">
            <label htmlFor="fn-name">
              <span>Your name</span>
              <input id="fn-name" autoComplete="name" value={contact.name} onChange={(e) => { setContact({ ...contact, name: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="fn-company">
              <span>Company</span>
              <input id="fn-company" autoComplete="organization" value={contact.company} onChange={(e) => { setContact({ ...contact, company: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="fn-email">
              <span>Work email</span>
              <input id="fn-email" type="email" inputMode="email" autoComplete="email" value={contact.email} onChange={(e) => { setContact({ ...contact, email: e.target.value }); setError(""); }} />
            </label>
            <label htmlFor="fn-phone">
              <span>Phone (optional)</span>
              <input id="fn-phone" type="tel" inputMode="tel" autoComplete="tel" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            </label>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
            <label htmlFor="fn-website">Website</label>
            <input id="fn-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          {error && <p className="fn-error" role="alert">{error}</p>}
          <button type="submit" className="fn-submit" disabled={phase === "sending"}>
            {phase === "sending" ? "Checking…" : "See if we're a fit"} {phase !== "sending" && <ArrowRight size={18} />}
          </button>
          <p className="fn-fine">
            We only use your details to prepare for the call. <Link href="/privacy-policy">Privacy policy</Link>
          </p>
        </form>
      )}
    </div>
  );
}

function Qualified({
  root,
  contact,
  answers,
  hook,
  offer,
}: {
  root: React.RefObject<HTMLDivElement | null>;
  contact: Contact;
  answers: Answers;
  hook: string;
  offer: string | null;
}) {
  const [src] = useState(() => {
    const u = new URL(CALENDLY);
    u.searchParams.set("name", contact.name.trim());
    u.searchParams.set("email", contact.email.trim());
    u.searchParams.set("a1", calendlyNote(answers).slice(0, 1000));
    u.searchParams.set("hide_gdpr_banner", "1");
    // Calendly only posts calendly.* events to the parent when these are set.
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("embed_domain", window.location.host);
    const page = new URLSearchParams(window.location.search);
    u.searchParams.set("utm_source", page.get("utm_source") ?? "google");
    u.searchParams.set("utm_medium", page.get("utm_medium") ?? "cpc");
    u.searchParams.set("utm_campaign", page.get("utm_campaign") ?? offer ?? "ads");
    u.searchParams.set("utm_content", hook);
    return u.toString();
  });

  useEffect(() => {
    let fired = false;
    const onMessage = (e: MessageEvent) => {
      if (!/(^|\.)calendly\.com$/.test(new URL(e.origin || "http://x").hostname)) return;
      const ev = (e.data as { event?: string } | null)?.event;
      if (ev === "calendly.event_scheduled" && !fired) {
        fired = true;
        track("book_call", { page: hook, offer: offer ?? "" });
        if (GADS_BOOKED) gtag("event", "conversion", { send_to: GADS_BOOKED });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [hook, offer]);

  return (
    <div className="fn-card fn-card-wide" ref={root}>
      <span className="fn-kicker">Thanks, {contact.name.trim().split(" ")[0]}</span>
      <h2 className="fn-title">You&apos;re a fit — pick a time</h2>
      <p className="fn-text">Choose a slot for your free 30-minute call. Your answers come with you, so we start from what you told us.</p>
      <iframe src={src} title="Pick a time for your free call with Ardn" className="fn-calendly" />
    </div>
  );
}
