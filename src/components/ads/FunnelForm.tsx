"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Briefcase, Check, Clock, Mail, Phone } from "lucide-react";

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
 * a fit) and emails it to the team.
 *
 * Every answer is saved as it's given (text debounced 300 ms) to
 * sessionStorage and localStorage, so a reload or a return visit within
 * 7 days resumes where the person left off; there are no save buttons.
 * Single-choice steps advance on their own after a tap. If someone types a
 * valid email on the contact step and leaves without submitting, one
 * `partial: true` beacon tells the team.
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
const RESUME_MS = 7 * 24 * 60 * 60_000;
const ADVANCE_MS = 250;
const TEXT_SAVE_MS = 300;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TOTAL = QUESTIONS.length + 1; // + contact step

type Contact = { name: string; company: string; email: string; phone: string };
type ContactField = keyof Contact;
type Phase = "form" | "sending" | "qualified" | "disqualified" | "failed";
type Saved = {
  answers: Answers;
  contact: Contact;
  step: number;
  phase?: Phase;
  offer?: string | null;
  started?: boolean;
  savedAt?: number;
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

function readStore<T>(store: "sessionStorage" | "localStorage", key: string): T | null {
  try {
    const raw = window[store].getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function writeStore(store: "sessionStorage" | "localStorage", key: string, value: unknown) {
  try {
    window[store].setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / blocked storage: the form still works, it just won't resume */
  }
}
const storeGet = <T,>(key: string) => readStore<T>("sessionStorage", key);
const storeSet = (key: string, value: unknown) => writeStore("sessionStorage", key, value);

/** Save to both stores: session for this tab, local for a return visit. */
function persist(key: string, value: Saved) {
  writeStore("sessionStorage", key, value);
  writeStore("localStorage", key, value);
}

/** This tab's save first; else a local one from the last 7 days. */
function restore(key: string): Saved | null {
  const session = readStore<Saved>("sessionStorage", key);
  if (session) return session;
  const local = readStore<Saved>("localStorage", key);
  if (local && local.savedAt && Date.now() - local.savedAt < RESUME_MS) return local;
  return null;
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
    a.current_systems.trim() && `Tools: ${a.current_systems.trim()}`,
    a.role && `Role: ${label("role", a.role)}`,
    a.timeline && `Start: ${label("timeline", a.timeline)}`,
    a.budget_band && `Budget: ${label("budget_band", a.budget_band)}`,
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

/** The first step that still needs an answer, or -1 when all are answered. */
function firstGap(a: Answers) {
  return QUESTIONS.findIndex((q) =>
    "options" in q ? (q.multi ? a.want.length === 0 : !a[q.code as Exclude<SelectCode, "want">]) : a.main_problem.trim().length < MAIN_PROBLEM_MIN,
  );
}

function contactErrors(c: Contact): Partial<Record<ContactField, string>> {
  const e: Partial<Record<ContactField, string>> = {};
  if (!EMAIL_RE.test(c.email.trim())) e.email = c.email.trim() ? "That email doesn't look right. Try name@company.com." : "Enter your work email.";
  if (c.name.trim().length < 2) e.name = "Enter your name.";
  if (!c.company.trim()) e.company = "Enter your company.";
  if (c.phone.trim() && c.phone.replace(/\D/g, "").length < 7) e.phone = "Check the phone number, or leave it blank.";
  return e;
}

const firstName = (name: string) => name.trim().split(/\s+/)[0] ?? "";

// ── component ───────────────────────────────────────────────────────────────

export default function FunnelForm({ hook }: { hook: string }) {
  const storeKey = `ardn-funnel:${FUNNEL}`;
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [phase, setPhase] = useState<Phase>("form");
  const [offer, setOffer] = useState<string | null>(null);
  const [error, setError] = useState(""); // from the server, on the contact step
  const [hint, setHint] = useState(""); // inline validation on question steps
  const [blurred, setBlurred] = useState<Partial<Record<ContactField, boolean>>>({});
  const [tried, setTried] = useState(false);
  const [picked, setPicked] = useState<string | null>(null); // tapped, about to advance
  const [website, setWebsite] = useState(""); // honeypot

  const started = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const restored = useRef(false);
  const navigated = useRef(false);
  const textEdit = useRef(false);
  const advance = useRef<number | undefined>(undefined);
  const partialSent = useRef(false);
  const latest = useRef({ answers, contact, step, phase, offer, website });
  const keyHandler = useRef<(e: KeyboardEvent) => void>(() => {});

  // Restore after a reload / return visit, and capture click ids, on mount.
  useEffect(() => {
    captureClickIds();
    const saved = restore(storeKey);
    if (saved) {
      started.current = Boolean(saved.started);
      const a = { ...EMPTY_ANSWERS, ...saved.answers };
      setAnswers(a);
      setContact({ ...EMPTY_CONTACT, ...saved.contact });
      // Never resume past a question that still needs an answer (e.g. one
      // added since the answers were saved).
      const gap = firstGap(a);
      setStep(Math.min(Math.max(saved.step ?? 0, 0), gap === -1 ? TOTAL - 1 : gap));
      if (saved.phase === "qualified" || saved.phase === "disqualified") {
        setPhase(saved.phase);
        setOffer(saved.offer ?? null);
      }
    }
    // After this commit, so its first save can't overwrite what we just read.
    queueMicrotask(() => {
      restored.current = true;
    });
  }, [storeKey]);

  const snapshot = useCallback((): Saved => {
    const l = latest.current;
    return {
      answers: l.answers,
      contact: l.contact,
      step: l.step,
      phase: l.phase === "qualified" || l.phase === "disqualified" ? l.phase : "form",
      offer: l.offer,
      started: started.current,
      savedAt: Date.now(),
    };
  }, []);

  // Save every change: choices at once, typing debounced.
  useEffect(() => {
    latest.current = { answers, contact, step, phase, offer, website };
    if (!restored.current) return;
    if (textEdit.current) {
      textEdit.current = false;
      const t = window.setTimeout(() => persist(storeKey, snapshot()), TEXT_SAVE_MS);
      return () => window.clearTimeout(t);
    }
    persist(storeKey, snapshot());
  }, [storeKey, snapshot, answers, contact, step, phase, offer, website]);

  // Leaving: flush the save, and if they typed a valid email but never
  // submitted, tell the team once.
  useEffect(() => {
    const leave = () => {
      if (restored.current) persist(storeKey, snapshot());
      const { answers: a, contact: c, phase: p, website: w } = latest.current;
      if (partialSent.current || (p !== "form" && p !== "failed") || !EMAIL_RE.test(c.email.trim())) return;
      partialSent.current = true;
      const body = JSON.stringify({
        partial: true,
        hook,
        answers: answersPayload(a),
        name: c.name.trim(),
        company: c.company.trim(),
        email: c.email.trim(),
        phone: c.phone.trim(),
        attribution: attribution(),
        website: w,
      });
      try {
        navigator.sendBeacon?.("/api/lead", new Blob([body], { type: "application/json" }));
      } catch {
        /* best effort */
      }
    };
    const onVisibility = () => {
      if (document.visibilityState === "hidden") leave();
    };
    window.addEventListener("pagehide", leave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pagehide", leave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [hook, storeKey, snapshot]);

  // Move focus to the new question (not on first load) for keyboard and screen-reader users.
  useEffect(() => {
    if (!navigated.current) return;
    heading.current?.focus({ preventScroll: true });
  }, [step]);

  useEffect(() => () => window.clearTimeout(advance.current), []);

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

  const next = (code: string, from: number) => {
    track("lead_form_step", { step: code, step_number: from + 1, page: hook });
    navigated.current = true;
    setHint("");
    setPicked(null);
    setDir("fwd");
    setStep(Math.min(from + 1, TOTAL - 1));
    scrollTop();
  };

  const back = () => {
    window.clearTimeout(advance.current);
    navigated.current = true;
    setHint("");
    setError("");
    setPicked(null);
    setDir("back");
    setStep((s) => Math.max(s - 1, 0));
  };

  const pickSingle = (code: SelectCode, value: string) => {
    touch();
    setHint("");
    setAnswers((prev) => ({ ...prev, [code]: value }));
    setPicked(value);
    window.clearTimeout(advance.current);
    const from = step;
    advance.current = window.setTimeout(() => next(code, from), ADVANCE_MS);
  };

  const toggleWant = (value: string) => {
    touch();
    setHint("");
    setAnswers((prev) => ({
      ...prev,
      want: prev.want.includes(value) ? prev.want.filter((w) => w !== value) : [...prev.want, value],
    }));
  };

  /** Continue on the multi-select and text steps, with inline validation. */
  const proceed = () => {
    const q = QUESTIONS[step];
    if (!q) return;
    if ("options" in q && q.multi && answers.want.length === 0) return setHint("Pick at least one to continue.");
    if ("text" in q && answers.main_problem.trim().length < MAIN_PROBLEM_MIN) {
      return setHint(`A sentence or two, please (at least ${MAIN_PROBLEM_MIN} characters).`);
    }
    if ("options" in q && !q.multi && !answers[q.code as Exclude<SelectCode, "want">]) return setHint("Pick one to continue.");
    next(q.code, step);
  };

  const setText = (code: "main_problem" | "current_systems", value: string) => {
    touch();
    textEdit.current = true;
    if (code === "main_problem" && value.trim().length >= MAIN_PROBLEM_MIN) setHint("");
    setAnswers((prev) => ({ ...prev, [code]: value }));
  };

  const setField = (field: ContactField, value: string) => {
    touch();
    textEdit.current = true;
    setError("");
    setContact((prev) => ({ ...prev, [field]: value }));
  };

  // Keyboard: 1–7 pick an option, Enter continues. Bound once; reads the latest render.
  useEffect(() => {
    keyHandler.current = (e: KeyboardEvent) => {
      if (phase !== "form" || e.metaKey || e.ctrlKey || e.altKey || e.defaultPrevented) return;
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || t?.isContentEditable) return;
      const q = QUESTIONS[step];
      if (!q) return;
      if ("options" in q && /^[1-9]$/.test(e.key)) {
        const o = q.options[Number(e.key) - 1];
        if (!o) return;
        e.preventDefault();
        if (q.multi) toggleWant(o.value);
        else pickSingle(q.code, o.value);
        return;
      }
      if (e.key === "Enter" && tag !== "BUTTON" && tag !== "A") {
        e.preventDefault();
        proceed();
      }
    };
  });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => keyHandler.current(e);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTried(true);
    const errs = contactErrors(contact);
    const firstBad = (["email", "name", "company", "phone"] as const).find((k) => errs[k]);
    if (firstBad) {
      document.getElementById(`fn-${firstBad}`)?.focus();
      return;
    }
    const c = { name: contact.name.trim(), company: contact.company.trim(), email: contact.email.trim(), phone: contact.phone.trim() };
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
      partialSent.current = true; // finished: no "started" note on the way out
      track("lead_form_step", { step: "contact", step_number: TOTAL, page: hook });
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

  const reopen = () => {
    navigated.current = true;
    setDir("back");
    setPhase("form");
    setOffer(null);
    setStep(QUESTIONS.findIndex((q) => q.code === "role"));
  };

  // ── end screens ──
  if (phase === "qualified") return <Qualified root={root} contact={contact} answers={answers} hook={hook} offer={offer} />;
  if (phase === "disqualified") {
    const first = firstName(contact.name);
    return (
      <div className="fn-card fn-end" ref={root}>
        <div className="fn-anim fn-anim-fwd">
          <span className="fn-badge" aria-hidden="true">
            <BookOpen size={26} strokeWidth={2} />
          </span>
          <h2 className="fn-title fn-end-title">Thanks{first ? `, ${first}` : ""}. This call isn&apos;t the right match.</h2>
          <p className="fn-text">
            These calls are for businesses planning a project, so we&apos;ll skip the booking. If you&apos;re learning about AI
            and software, our blog is a good place to start. And if you&apos;d like to work with us, take a look at our open
            roles.
          </p>
          <div className="fn-links">
            <Link href="/blog">
              <span>
                <BookOpen size={18} aria-hidden="true" /> Read the Ardn blog
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/career">
              <span>
                <Briefcase size={18} aria-hidden="true" /> Careers at Ardn
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className="fn-fine">
            Here for a business project after all?{" "}
            <button type="button" className="fn-textlink" onClick={reopen}>
              Change your answers
            </button>
          </p>
        </div>
      </div>
    );
  }
  if (phase === "failed") {
    const body = encodeURIComponent(`${summary(answers, hook)}\n\nName: ${contact.name}\nCompany: ${contact.company}\nPhone: ${contact.phone}`);
    return (
      <div className="fn-card fn-end" ref={root}>
        <div className="fn-anim fn-anim-fwd">
          <h2 className="fn-title fn-end-title">We couldn&apos;t send your answers just now.</h2>
          <p className="fn-text">Your connection or our server hiccuped. Your answers are saved. Try again, or reach us directly.</p>
          <button type="button" className="fn-submit" onClick={() => setPhase("form")}>
            Try again <ArrowRight size={18} aria-hidden="true" />
          </button>
          <div className="fn-links fn-links-gap">
            <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Free 30-minute call")}&body=${body}`}>
              <span>
                <Mail size={18} aria-hidden="true" /> {EMAIL}
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href={PHONE_HREF}>
              <span>
                <Phone size={18} aria-hidden="true" /> {PHONE}
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ── steps ──
  const q = QUESTIONS[step];
  const titleId = `fn-title-${step}`;
  const errs = contactErrors(contact);
  const show = (f: ContactField) => (tried || blurred[f]) && errs[f];
  const sending = phase === "sending";

  return (
    <div className="fn-card" ref={root}>
      <div
        className="fn-progress"
        role="progressbar"
        aria-label="Form progress"
        aria-valuemin={1}
        aria-valuemax={TOTAL}
        aria-valuenow={step + 1}
      >
        <span style={{ transform: `scaleX(${(step + 1) / TOTAL})` }} />
      </div>
      <div className="fn-top">
        {step > 0 ? (
          <button type="button" className="fn-back" onClick={back} disabled={sending}>
            <ArrowLeft size={16} aria-hidden="true" /> Back
          </button>
        ) : (
          <span />
        )}
        <span className="fn-count">
          {step + 1} of {TOTAL}
        </span>
      </div>

      <div key={step} className={`fn-anim fn-anim-${dir}`}>
        {q && "options" in q && (
          <div className="fn-step" role="group" aria-labelledby={titleId}>
            <h2 className="fn-title" id={titleId} ref={heading} tabIndex={-1}>
              {q.label}
            </h2>
            {q.help && <p className="fn-help">{q.help}</p>}
            <div className="fn-options">
              {q.options.map((o, i) => {
                const on = q.multi ? answers.want.includes(o.value) : answers[q.code] === o.value;
                const flash = !q.multi && picked === o.value;
                return (
                  <button
                    key={o.value}
                    type="button"
                    className={`fn-option${on ? " is-on" : ""}${flash ? " is-picked" : ""}`}
                    aria-pressed={on}
                    aria-keyshortcuts={String(i + 1)}
                    onClick={() => (q.multi ? toggleWant(o.value) : pickSingle(q.code, o.value))}
                  >
                    <span className="fn-option-label">{o.label}</span>
                    <span className="fn-tick" aria-hidden="true">
                      <Check size={14} strokeWidth={3.25} />
                    </span>
                  </button>
                );
              })}
            </div>
            {hint && (
              <p className="fn-error" role="alert">
                {hint}
              </p>
            )}
            {q.multi && (
              <button type="button" className="fn-submit" onClick={proceed}>
                Continue <ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
            {step === 0 && (
              <p className="fn-meta">
                <Clock size={13} aria-hidden="true" /> Takes about a minute
              </p>
            )}
          </div>
        )}

        {q && "text" in q && (
          <div className="fn-step">
            <h2 className="fn-title" id={titleId} ref={heading} tabIndex={-1}>
              {q.label}
            </h2>
            {q.help && <p className="fn-help">{q.help}</p>}
            {q.fields.map((f, i) => (
              <div className="fn-textfield" key={f.code}>
                {i > 0 && (
                  <label className="fn-label" htmlFor={`fn-${f.code}`}>
                    {f.label}
                  </label>
                )}
                <textarea
                  id={`fn-${f.code}`}
                  className={`fn-textarea${i === 0 && hint ? " is-invalid" : ""}`}
                  rows={i === 0 ? 3 : 2}
                  maxLength={f.max}
                  placeholder={f.placeholder}
                  aria-labelledby={i === 0 ? titleId : undefined}
                  aria-invalid={i === 0 && hint ? true : undefined}
                  aria-describedby={i === 0 && hint ? "fn-hint" : undefined}
                  value={answers[f.code]}
                  onFocus={touch}
                  onChange={(e) => setText(f.code, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      proceed();
                    }
                  }}
                />
                {i === 0 && hint && (
                  <p className="fn-error fn-error-tight" id="fn-hint" role="alert">
                    {hint}
                  </p>
                )}
              </div>
            ))}
            <button type="button" className="fn-submit" onClick={proceed}>
              Continue <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}

        {step === QUESTIONS.length && (
          <form className="fn-step" onSubmit={submit} noValidate>
            <h2 className="fn-title" id={titleId} ref={heading} tabIndex={-1}>
              Last step. Where should we send the details?
            </h2>
            <p className="fn-help">We&apos;ll use these to set up your free 30-minute call.</p>
            <div className="fn-fields">
              {(
                [
                  ["email", "Work email", { type: "email", inputMode: "email", autoComplete: "email", placeholder: "you@company.com" }],
                  ["name", "Your name", { autoComplete: "name" }],
                  ["company", "Company", { autoComplete: "organization" }],
                  ["phone", "Phone (optional)", { type: "tel", inputMode: "tel", autoComplete: "tel" }],
                ] as const
              ).map(([field, text, props]) => {
                const msg = show(field);
                return (
                  <div className={`fn-field fn-field-${field}`} key={field}>
                    <label htmlFor={`fn-${field}`}>{text}</label>
                    <input
                      id={`fn-${field}`}
                      {...props}
                      className={msg ? "is-invalid" : undefined}
                      aria-invalid={msg ? true : undefined}
                      aria-describedby={msg ? `fn-${field}-err` : undefined}
                      value={contact[field]}
                      onChange={(e) => setField(field, e.target.value)}
                      onBlur={() => setBlurred((b) => (b[field] ? b : { ...b, [field]: true }))}
                    />
                    {msg && (
                      <span className="fn-field-error" id={`fn-${field}-err`}>
                        {msg}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
              <label htmlFor="fn-website">Website</label>
              <input id="fn-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>
            {error && (
              <p className="fn-error" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className={`fn-submit${sending ? " is-busy" : ""}`} disabled={sending} aria-busy={sending}>
              {sending ? (
                <>
                  <span className="fn-spin" aria-hidden="true" /> Checking your answers…
                </>
              ) : (
                <>
                  See if we&apos;re a fit <ArrowRight size={18} aria-hidden="true" />
                </>
              )}
            </button>
            <p className="fn-fine">
              We only use your details to prepare for the call. <Link href="/privacy-policy">Privacy policy</Link>
            </p>
          </form>
        )}
      </div>
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

  const first = firstName(contact.name);
  return (
    <div className="fn-card fn-end fn-card-wide" ref={root}>
      <div className="fn-anim fn-anim-fwd">
        <svg className="fn-check" viewBox="0 0 56 56" aria-hidden="true">
          <circle className="fn-check-ring" cx="28" cy="28" r="26" />
          <path className="fn-check-mark" d="M17 28.5l7.5 7.5L39.5 21" />
        </svg>
        <h2 className="fn-title fn-end-title">
          You&apos;re a great fit{first ? `, ${first}` : ""}. Pick a time that works.
        </h2>
        <p className="fn-text">Your free 30-minute call. Your answers come with you, so we start from what you told us.</p>
        <iframe src={src} title="Pick a time for your free call with Ardn" className="fn-calendly" />
      </div>
    </div>
  );
}
