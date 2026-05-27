import React from "react";
import { motion } from "framer-motion";

// ── Palette ──────────────────────────────────────────────────────────────────
export const C = {
  bg: "#080c1e",
  surface: "#1c2045", // matches brand `--color-primary`
  border: "rgba(129,140,248,0.14)",
  borderStrong: "rgba(129,140,248,0.30)",
  textDim: "rgba(255,255,255,0.62)",
  textFaint: "rgba(255,255,255,0.35)",
  accent: "#818cf8",
  accentDark: "#0a0d20",
} as const;

// ── Font style shortcuts (custom Google Fonts loaded by page.tsx) ─────────────
export const headF: React.CSSProperties = {
  fontFamily: "var(--font-bricolage), system-ui, sans-serif",
};
export const monoF: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains), monospace",
};
export const serifF: React.CSSProperties = {
  fontFamily: "var(--font-instrument), serif",
  fontStyle: "italic",
  fontWeight: 400,
};

// ── Shared animation preset ──────────────────────────────────────────────────
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.55, ease: "easeOut" as const },
};

// ── Shared sub-components ────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ ...monoF, color: C.accent }}
      className="flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase mb-6"
    >
      <span className="block w-6 h-px shrink-0" style={{ background: C.accent }} />
      {children}
    </div>
  );
}

export function DarkH2({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      style={{ ...headF, lineHeight: 1.05, letterSpacing: "-0.03em" }}
      className={`font-semibold text-white text-[32px] md:text-[42px] lg:text-[54px] mb-6 max-w-3xl ${className}`}
    >
      {children}
    </h2>
  );
}

// Italic serif span used inside headings
export function Serif({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <em style={{ ...serifF, color: C.accent }}>{children}</em>
  );
}

// Animated section wrapper (fade-up on scroll)
export function FadeSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
