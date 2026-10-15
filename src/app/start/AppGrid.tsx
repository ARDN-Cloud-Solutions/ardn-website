"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  ChartColumnBig,
  Check,
  ClipboardList,
  FileSignature,
  Flag,
  HeartHandshake,
  Landmark,
  LifeBuoy,
  Megaphone,
  PartyPopper,
  Plus,
  ScanBarcode,
  ShoppingBag,
  Smartphone,
  Sparkles,
  SquareKanban,
  UsersRound,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";
import type { App, AppIcon } from "./hooks";

// iOS-home-screen grid of apps. A tile is a button; opening it drops a
// preview row in right under that tile's row (real screenshot + 2 points).
// Esc or Close puts focus back on the tile.

const ICONS: Record<AppIcon, LucideIcon> = {
  hr: UsersRound,
  crm: SquareKanban,
  marketing: Megaphone,
  pos: ScanBarcode,
  service: LifeBuoy,
  dispatch: CalendarClock,
  events: PartyPopper,
  billing: Wallet,
  phone: Smartphone,
  giving: HeartHandshake,
  ai: Sparkles,
  reports: ChartColumnBig,
  books: Landmark,
  golf: Flag,
  shop: ShoppingBag,
  quote: FileSignature,
  jobs: ClipboardList,
  accounts: Building2,
};

const VIEW_ID = "lnd-app-view";

/** `own`: the closing "Something else?" tile (default on); `ctaLabel`: the button under the grid. */
export default function AppGrid({
  apps,
  own = true,
  ctaLabel = "Tell us which apps you need",
}: {
  apps: App[];
  own?: boolean;
  ctaLabel?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const [cols, setCols] = useState(2);
  const list = useRef<HTMLUListElement>(null);
  const tiles = useRef<(HTMLButtonElement | null)[]>([]);
  const view = useRef<HTMLDivElement>(null);
  const openRef = useRef<number | null>(null);
  // +1 for the "Something else?" tile at the end
  const total = apps.length + (own ? 1 : 0);

  const measure = useCallback(() => {
    if (!list.current) return 2;
    const n = getComputedStyle(list.current).gridTemplateColumns.split(" ").filter(Boolean).length;
    return n || 2;
  }, []);

  const close = useCallback(() => {
    const was = openRef.current;
    setOpen(null);
    if (was !== null) tiles.current[was]?.focus();
  }, []);

  const toggle = (i: number) => {
    setCols(measure());
    setOpen((was) => (was === i ? null : i));
  };

  // Esc closes; keep the row position right when the column count changes
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => setCols(measure());
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close, measure]);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // move focus into the preview and bring it into view
  useEffect(() => {
    if (open === null || !view.current) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    view.current.focus({ preventScroll: true });
    view.current.scrollIntoView({ block: "nearest", behavior: calm ? "auto" : "smooth" });
  }, [open]);

  const rowEnd = open === null ? -1 : Math.min(Math.floor(open / cols) * cols + cols - 1, total - 1);
  const current = open === null ? null : apps[open];

  const preview = current ? (
    <li className="lnd-app-row">
      <div id={VIEW_ID} ref={view} className="lnd-app-view" role="region" aria-labelledby="lnd-app-view-title" tabIndex={-1}>
        <div className="lnd-frame lnd-frame-light">
          <div className="lnd-frame-bar">
            <span className="lnd-frame-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="lnd-frame-url">{current.name}</span>
          </div>
          <div className="lnd-frame-screen">
            <Image src={current.src} alt={current.alt} width={2880} height={1800} sizes="(max-width: 760px) calc(100vw - 64px), 640px" />
          </div>
        </div>
        <div className="lnd-app-view-copy">
          <AppIconMark icon={current.icon} index={open!} size="sm" />
          <h3 id="lnd-app-view-title">
            {current.name}
            {pill(current)}
          </h3>
          <p>{current.benefit}</p>
          <ul>
            {current.points.map((pt) => (
              <li key={pt}>
                <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="lnd-app-close" onClick={() => close()}>
            <X size={16} strokeWidth={2.4} aria-hidden="true" />
            Close
          </button>
        </div>
      </div>
    </li>
  ) : null;

  return (
    <>
      <ul className="lnd-apps" ref={list}>
        {apps.map((a, i) => (
          <Fragment key={a.name}>
            <li className="lnd-app-cell">
              <button
                type="button"
                ref={(el) => {
                  tiles.current[i] = el;
                }}
                className={`lnd-app${open === i ? " is-open" : ""}`}
                aria-expanded={open === i}
                aria-controls={open === i ? VIEW_ID : undefined}
                onClick={() => toggle(i)}
              >
                <AppIconMark icon={a.icon} index={i} />
                <span className="lnd-app-name">
                  {a.name}
                  {pill(a)}
                </span>
                <span className="lnd-app-benefit">{a.benefit}</span>
                <span className="lnd-app-peek" aria-hidden="true">
                  {open === i ? "Hide" : "Look inside"}
                </span>
              </button>
            </li>
            {i === rowEnd ? preview : null}
          </Fragment>
        ))}
        {own ? (
          <li className="lnd-app-cell">
            <a className="lnd-app lnd-app-own" href="#form">
              <span className="lnd-app-icon lnd-app-icon-own" aria-hidden="true">
                <Plus size={30} strokeWidth={2} />
              </span>
              <span className="lnd-app-name">Something else?</span>
              <span className="lnd-app-benefit">Tell us the job. We build the app around it.</span>
            </a>
          </li>
        ) : null}
        {own && rowEnd === total - 1 ? preview : null}
      </ul>
      <div className="lnd-apps-cta">
        <a className="lnd-btn lnd-btn-ink" href="#form">
          {ctaLabel}
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}

function pill(a: App) {
  const text = a.tag ?? (a.preview ? "Preview" : null);
  return text ? <span className="lnd-app-pill">{text}</span> : null;
}

function AppIconMark({ icon, index, size }: { icon: AppIcon; index: number; size?: "sm" }) {
  const Icon = ICONS[icon];
  return (
    <span className={`lnd-app-icon lnd-hue-${(index % 13) + 1}${size === "sm" ? " lnd-app-icon-sm" : ""}`} aria-hidden="true">
      <Icon size={size === "sm" ? 22 : 30} strokeWidth={1.9} />
    </span>
  );
}
