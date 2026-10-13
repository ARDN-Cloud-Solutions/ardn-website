"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { sendEvent, useProposalSlug, useProposalViewer } from "@/lib/proposals/dc-runtime";
import type { Proposal } from "@/lib/proposals/model";
import VideoPlayer from "@/components/proposals/VideoPlayer";
import { DEMO_VIDEOS } from "@/content/proposals/videos";

export const C = {
  ink: "#0A0F2C",
  slate: "#4A5170",
  canvas: "#FAF9F7",
  line: "#E6E8F2",
  line2: "#D8DBE8",
  green: "#073D2E",
  turf: "#0F9870",
  gold: "#D4B25A",
  dark: "#0A1226",
  red: "#B3401E",
};

export const container: CSSProperties = { maxWidth: 1080, margin: "0 auto", padding: "0 24px" };
export const section: CSSProperties = { padding: "104px 0" };
export const h2: CSSProperties = { margin: 0, fontSize: 48, lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.03em", color: C.ink };
export const lede: CSSProperties = { margin: 0, fontSize: 20, lineHeight: 1.45, color: C.slate };
export const card: CSSProperties = { background: "#FFFFFF", borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 8 };
export const pill = (bg: string, fg: string): CSSProperties => ({ display: "inline-block", padding: "5px 12px", borderRadius: 14, fontSize: 13, lineHeight: 1.3, background: bg, color: fg });
export const btnPrimary: CSSProperties = { height: 48, padding: "0 26px", borderRadius: 24, background: C.green, color: "#FFFFFF", fontSize: 17, fontWeight: 500, display: "inline-flex", alignItems: "center", textDecoration: "none", border: 0, fontFamily: "inherit", cursor: "pointer" };
export const btnGhost: CSSProperties = { ...btnPrimary, background: "transparent", color: C.green, border: `1px solid ${C.green}` };
export const input: CSSProperties = { height: 44, padding: "0 12px 0 26px", fontSize: 15, fontFamily: "inherit", border: `1px solid ${C.line2}`, borderRadius: 10, background: "#FFFFFF", color: C.ink, width: "100%", boxSizing: "border-box" };

export function Center({ children, max = 760 }: { children: React.ReactNode; max?: number }) {
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14, maxWidth: max, margin: "0 auto" }}>{children}</div>;
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 15, fontWeight: 600, color: C.green }}>{children}</div>;
}

// What each page shows right now, so an export carries every number on screen
// even if the last change has not been sent yet (see useTracking).
const screen: { page: string; states: Record<string, unknown> } = { page: "", states: {} };
let exportHooked = false;

/** Before any print (our button or the browser's own), send every page's current inputs. */
function hookExport(slug: string) {
  if (exportHooked || typeof window === "undefined") return;
  exportHooked = true;
  window.addEventListener("beforeprint", () => sendEvent(slug, "export", screen.page, { states: { ...screen.states } }));
}

/** Top bar shared by the three pages of a proposal. */
export function TopBar({ p, active, anchors }: { p: Proposal; active: "overview" | "plan" | "details"; anchors?: { href: string; label: string }[] }) {
  const viewer = useProposalViewer();
  const tab = (key: typeof active, href: string, label: string) => (
    <Link
      href={href}
      aria-current={active === key ? "page" : undefined}
      style={{ color: active === key ? C.ink : C.slate, fontWeight: active === key ? 600 : 400, textDecoration: "none", padding: "16px 12px 14px", borderBottom: `2px solid ${active === key ? C.green : "transparent"}` }}
    >
      {label}
    </Link>
  );
  return (
    <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${C.line}` }}>
      <div style={{ ...container, minHeight: 56, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
          <div className="prp-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/ardn_logo.png" alt="Ardn" style={{ height: 26, width: "auto", display: "block" }} />
            <span className="prp-brand-sep" aria-hidden="true"></span>
            <span style={{ fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em", color: C.ink }}>
              {p.product} <span style={{ color: C.slate, fontWeight: 500 }}>for {p.client}</span>
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 15 }}>
            {tab("overview", `/proposals/${p.slug}`, "Overview")}
            {tab("plan", `/proposals/${p.slug}/plan`, "Build your plan")}
            {tab("details", `/proposals/${p.slug}/details`, "Full proposal")}
          </div>
        </div>
        <div style={{ fontSize: 13, color: C.slate }}>
          <button type="button" className="prp-noprint" onClick={() => window.print()} style={{ background: C.green, color: "#FFFFFF", border: 0, borderRadius: 16, padding: "6px 14px", fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", marginRight: 10 }}>Export to PDF</button>
          <a href={`/proposals/${p.slug}/brief`} target="_blank" rel="noopener" style={{ color: C.green, fontWeight: 600 }}>Board brief (PDF)</a> · Viewing as {viewer || "you"} ·{" "}
          <a href={`/api/proposals/logout?slug=${p.slug}`} style={{ color: C.green }}>Sign out</a>
        </div>
      </div>
      {anchors && anchors.length ? (
        <div style={{ borderTop: `1px solid ${C.line}`, background: C.canvas }}>
          <div style={{ ...container, padding: "0 12px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 4, fontSize: 14 }}>
            <span style={{ color: C.slate, padding: 12, fontSize: 13 }}>On this page</span>
            {anchors.map((a) => (
              <a key={a.href} href={a.href} style={{ color: C.ink, textDecoration: "none", padding: 12 }}>{a.label}</a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Footer({ p }: { p: Proposal }) {
  return (
    <div style={{ borderTop: `1px solid ${C.line}` }}>
      <div style={{ ...container, padding: 24, fontSize: 12, lineHeight: 1.6, color: C.slate }}>
        Prepared by Ardn for {p.client}, {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}. Confidential. Savings use {p.client}&apos;s cost estimates and Ardn&apos;s proposed pricing.
      </div>
    </div>
  );
}

export function VideoModal({ id, from, onClose }: { id: string | null; from?: string; onClose: () => void }) {
  if (!id) return null;
  const v = DEMO_VIDEOS[id];
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 50 }} onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={v?.name || "Demo"} onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 900, background: "#FFFFFF", borderRadius: 22, overflow: "hidden" }}>
        <VideoPlayer id={id} title={v?.name} />
        <div style={{ padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 22, fontWeight: 600, color: C.ink }}>{v?.name || id}</div>
            {from ? <div style={{ fontSize: 13, color: C.slate }}>Opened from: {from}</div> : null}
          </div>
          <button type="button" onClick={onClose} aria-label="Close video" style={{ width: 44, height: 44, flex: "none", borderRadius: 22, border: 0, background: C.canvas, cursor: "pointer", fontSize: 18 }}>×</button>
        </div>
      </div>
    </div>
  );
}

/** Page view, sections seen, time on page, and a debounced state snapshot. */
export function useTracking(page: string, state: unknown, video: string | null) {
  const slug = useProposalSlug();
  const first = useRef(true);
  useEffect(() => {
    screen.page = page;
    screen.states[page] = state;
    hookExport(slug);
  }, [slug, page, state]);
  const lastVideo = useRef<string | null>(null);
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
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const t = setTimeout(() => sendEvent(slug, "state", page, state), 1200);
    return () => clearTimeout(t);
  }, [slug, page, state]);
  useEffect(() => {
    if (video && video !== lastVideo.current) sendEvent(slug, "video", page, { id: video });
    lastVideo.current = video;
  }, [slug, page, video]);
}
