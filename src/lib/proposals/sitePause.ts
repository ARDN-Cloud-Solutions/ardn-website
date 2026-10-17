import { listEvents, type EventRow } from "@/lib/proposals/store";

/**
 * The pause the Invited test sites put on themselves when they refuse an AI crawler
 * (reported to /api/security/alert). Only the server holds the Worker's resume link;
 * Deep and Jaimin turn the sites back on through /proposals/admin/security/resume.
 */
export type Pause = { rid: string; resumeUrl: string; bot: string; app: string; host: string; ip: string; at: string };

export async function findPause(rid: string): Promise<Pause | null> {
  if (!/^[0-9a-f]{32}$/.test(rid)) return null;
  const e = (await listEvents(5000)).find((x: EventRow) => x.slug === "invited-app-security" && (x.data as { rid?: string } | null)?.rid === rid);
  const d = (e?.data ?? null) as Record<string, string> | null;
  if (!e || !d?.resumeUrl) return null;
  return { rid, resumeUrl: d.resumeUrl, bot: d.bot || "", app: d.app || "", host: d.host || "", ip: d.ip || "", at: e.created_at };
}

/** Whether the sites are still paused under this pause: the Worker's GET only shows a page, it never resumes. */
export async function stillPaused(p: Pause): Promise<boolean | null> {
  try {
    const r = await fetch(p.resumeUrl, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    const t = await r.text();
    return r.ok && t.includes("Turn the Site Back On") ? true : t.includes("Already On") ? false : null;
  } catch {
    return null;
  }
}

/** Turns the sites back on: the Worker's POST with the token from its link. */
export async function resume(p: Pause): Promise<boolean> {
  const u = new URL(p.resumeUrl);
  const r = await fetch(`${u.origin}${u.pathname}`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ t: u.searchParams.get("t") ?? "" }).toString(),
    signal: AbortSignal.timeout(5000),
  });
  const t = await r.text();
  return r.ok && (t.includes("Back On") || t.includes("Already On"));
}
