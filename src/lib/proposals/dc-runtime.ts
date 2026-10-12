"use client";

import { createContext, useContext, useEffect, useReducer, useRef, useState, type CSSProperties } from "react";

/**
 * Minimal stand-in for the Design canvas runtime, so artboards converted by
 * scripts/proposals/dc_to_tsx.py run unchanged: a logic class with
 * props/state/setState and renderVals().
 */
export class DCLogic<S extends Record<string, unknown> = Record<string, unknown>> {
  props: Record<string, unknown>;
  state: S;
  _notify?: (prev: S) => void;

  constructor(props?: Record<string, unknown>) {
    this.props = props || {};
    this.state = {} as S;
  }

  setState(patch: Partial<S> | ((s: S) => Partial<S>)) {
    const prev = this.state;
    const next = typeof patch === "function" ? patch(prev) : patch;
    this.state = { ...prev, ...next };
    this._notify?.(prev);
  }

  subscribe(fn: (prev: S) => void) {
    this._notify = fn;
    return () => {
      if (this._notify === fn) this._notify = undefined;
    };
  }

  forceUpdate() {
    this._notify?.(this.state);
  }

  renderVals(): Record<string, unknown> {
    return {};
  }
}

/** "a: b; c-d: e" -> { a: "b", cD: "e" } */
export function css(s: string | undefined | null): CSSProperties {
  const out: Record<string, string> = {};
  if (!s) return out;
  for (const decl of s.split(";")) {
    const i = decl.indexOf(":");
    if (i < 0) continue;
    let k = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!k) continue;
    if (k.startsWith("-")) k = k.slice(1);
    k = k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[k] = val;
  }
  return out as CSSProperties;
}

// ── Tracking ────────────────────────────────────────────────────────────────

export const ProposalContext = createContext<{ slug: string; email: string }>({ slug: "", email: "" });

export function useProposalSlug() {
  return useContext(ProposalContext).slug;
}

export function useProposalViewer() {
  return useContext(ProposalContext).email;
}

export function sendEvent(slug: string, type: string, page: string, data?: unknown) {
  if (!slug) return;
  const body = JSON.stringify({ slug, type, page, data: data ?? null });
  try {
    if (type === "leave" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/proposals/track", new Blob([body], { type: "application/json" }));
      return;
    }
    void fetch("/api/proposals/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    /* tracking must never break the page */
  }
}

/**
 * Runs a logic class and reports what the viewer does with it:
 * - every state change, debounced (scenarios tried, numbers typed)
 * - video opens, immediately
 * - page view, sections seen and time on page
 */
export function useDC<L extends DCLogic>(Logic: new (p?: Record<string, unknown>) => L, page: string) {
  const slug = useProposalSlug();
  const [, force] = useReducer((x: number) => x + 1, 0);
  const [inst] = useState(() => new Logic({}));
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return inst.subscribe((prev) => {
      force();
      const st = inst.state as Record<string, unknown>;
      const p = prev as Record<string, unknown>;
      if (st.video && st.video !== p.video) sendEvent(slug, "video", page, { id: st.video, from: st.from ?? null });
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const snapshot = { ...st };
        delete snapshot.video;
        delete snapshot.from;
        sendEvent(slug, "state", page, snapshot);
      }, 1200);
    });
  }, [inst, slug, page]);

  useEffect(() => {
    const started = Date.now();
    sendEvent(slug, "view", page);
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            sendEvent(slug, "section", page, { id });
          }
        }
      },
      { threshold: 0.35 },
    );
    document.querySelectorAll("[data-proposal-root] [id]").forEach((el) => io.observe(el));
    const leave = () => {
      if (document.visibilityState === "hidden") sendEvent(slug, "leave", page, { seconds: Math.round((Date.now() - started) / 1000) });
    };
    document.addEventListener("visibilitychange", leave);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", leave);
    };
  }, [slug, page]);

  return inst.renderVals() as Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
