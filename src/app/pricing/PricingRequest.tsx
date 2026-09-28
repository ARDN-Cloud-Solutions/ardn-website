"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Flag,
  Handshake,
  HeartHandshake,
  LayoutDashboard,
  MessagesSquare,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

type Product = { id: string; name: string; blurb: string; href: string; icon: LucideIcon };

// Same Products / Services split as the header menu.
export const PRODUCT_GROUPS: { title: string; items: Product[] }[] = [
  {
    title: "Products",
    items: [
      { id: "club-steward", name: "Club Steward", blurb: "Golf and country club management", href: "/golf-club-management-software", icon: Flag },
      { id: "nonprofit", name: "Nonprofit Management", blurb: "Members and donors in one record", href: "/nonprofit-management-software", icon: HeartHandshake },
      { id: "membership", name: "Membership Management", blurb: "Gyms, studios, clubs and associations", href: "/membership-management", icon: Users },
      { id: "replycx", name: "ReplyCX", blurb: "AI agents for routine customer questions", href: "/ai-powered-support", icon: MessagesSquare },
    ],
  },
  {
    title: "Services",
    items: [
      { id: "ai-forge", name: "AI Forge", blurb: "Custom AI apps, built and run for you", href: "/ai-forge", icon: Sparkles },
      { id: "custom-software", name: "Custom Software Development", blurb: "Software shaped around your workflow", href: "/custom-software-development", icon: Code2 },
      { id: "custom-portal", name: "Custom Portal Development", blurb: "Customer and member portals", href: "/custom-portal-development", icon: LayoutDashboard },
      { id: "partner-portal", name: "Partner Portal Development", blurb: "Portals for partners and resellers", href: "/custom-partner-portal-development", icon: Handshake },
    ],
  },
];

const ALL = PRODUCT_GROUPS.flatMap((g) => g.items);
const SELECT_EVENT = "ardn:pricing-select";

type Gtag = (...a: unknown[]) => void;
const track = (event: string, params: Record<string, string>) => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof g === "function") g("event", event, params);
};

/** Product grid. "Request pricing" preselects the product in the form. */
export function ProductPricingGrid() {
  return (
    <div className="pr-groups">
      {PRODUCT_GROUPS.map((group) => (
        <div key={group.title} className="pr-group">
          <p className="pr-group-title">{group.title}</p>
          <div className="pr-cards">
            {group.items.map((p) => (
              <article key={p.id} className="pr-card">
                <span className="pr-icon" aria-hidden="true">
                  <p.icon size={20} strokeWidth={1.8} />
                </span>
                <h3>{p.name}</h3>
                <p>{p.blurb}</p>
                <div className="pr-card-actions">
                  <button
                    type="button"
                    className="pr-btn"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent(SELECT_EVENT, { detail: p.id }));
                      document.getElementById("request")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      track("pricing_request_click", { product: p.id });
                    }}
                  >
                    Request pricing
                  </button>
                  <Link href={p.href} className="pr-link">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** The pricing request form. Posts to /api/contact like the site's LeadForm. */
export function PricingForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setSelected((s) => (s.includes(id) ? s : [...s, id]));
      setStatus((st) => (st === "ok" ? "idle" : st));
    };
    window.addEventListener(SELECT_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_EVENT, onSelect);
  }, []);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const v = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | null)?.value?.trim() ?? "";
    if (!selected.length) {
      setError("Pick at least one product so we know what to price.");
      setStatus("err");
      return;
    }
    const names = selected.map((id) => ALL.find((p) => p.id === id)?.name).filter(Boolean);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v("name"),
          email: v("email"),
          company: v("company"),
          message: [`Pricing request: ${names.join(", ")}`, v("size") && `Size: ${v("size")}`, v("message")]
            .filter(Boolean)
            .join("\n\n"),
          source: "pricing-page",
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "That didn't send. Check your details and try again.");
      }
      setStatus("ok");
      track("generate_lead", { source: "pricing-page", products: selected.join(",") });
    } catch (err) {
      setError(err instanceof Error ? err.message : "That didn't send. Please try again.");
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="pr-form pr-done" role="status">
        <span className="pr-done-icon" aria-hidden="true">
          <Check size={26} strokeWidth={2.4} />
        </span>
        <h3>Request received.</h3>
        <p>
          We&apos;ll reply within 4 business hours with pricing for your situation. Want to talk it
          through sooner?{" "}
          <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" rel="noopener noreferrer">
            Book a 30-minute call
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="pr-form" onSubmit={submit} noValidate>
      <fieldset className="pr-picks">
        <legend>What would you like pricing for?</legend>
        {PRODUCT_GROUPS.map((g) => (
          <div key={g.title} className="pr-pick-group">
            <span>{g.title}</span>
            <div>
              {g.items.map((p) => {
                const on = selected.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={on ? "pr-chip is-on" : "pr-chip"}
                    aria-pressed={on}
                    onClick={() => toggle(p.id)}
                  >
                    {on && <Check size={14} strokeWidth={2.6} aria-hidden="true" />}
                    {p.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </fieldset>
      <div className="pr-fields">
        <label htmlFor="pr-name">
          <span>Name</span>
          <input id="pr-name" name="name" type="text" required autoComplete="name" />
        </label>
        <label htmlFor="pr-email">
          <span>Work email</span>
          <input id="pr-email" name="email" type="email" required autoComplete="email" />
        </label>
        <label htmlFor="pr-company">
          <span>Company</span>
          <input id="pr-company" name="company" type="text" autoComplete="organization" />
        </label>
        <label htmlFor="pr-size">
          <span>Size (optional)</span>
          <input id="pr-size" name="size" type="text" placeholder="Users, locations or clubs" />
        </label>
        <label htmlFor="pr-message" className="pr-wide">
          <span>Anything we should know? (optional)</span>
          <textarea id="pr-message" name="message" rows={3} placeholder="What you use today, timing, must-haves" />
        </label>
      </div>
      {status === "err" && <p className="pr-error">{error}</p>}
      <button type="submit" className="btn btn-primary btn-lg btn-arrow pr-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Get my pricing"}
      </button>
      <p className="pr-fine">We reply within 4 business hours · No obligation · We only use your details to reply</p>
    </form>
  );
}
