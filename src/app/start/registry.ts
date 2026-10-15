// Every /start/<hook> slug and the funnel it belongs to. The page, its static
// params and /api/lead (which hooks it accepts, and which questions, routing
// and emails apply) all read from here, so a new hook is one config entry.

import type { FunnelId } from "@/lib/funnels/types";
import { HOOK_SLUGS } from "./hooks";
import { CLUB_HOOKS, CRM_HOOKS } from "./productHooks";

export const HOOK_FUNNEL: Record<string, FunnelId> = {
  ...Object.fromEntries(HOOK_SLUGS.map((s) => [s, "ardn-ai-consulting" as const])),
  ...Object.fromEntries(CLUB_HOOKS.map((h) => [h.slug, "club-steward" as const])),
  ...Object.fromEntries(CRM_HOOKS.map((h) => [h.slug, "ardn-crm" as const])),
};

export const ALL_HOOK_SLUGS = Object.keys(HOOK_FUNNEL);

export function funnelOf(slug: string): FunnelId | undefined {
  return Object.prototype.hasOwnProperty.call(HOOK_FUNNEL, slug) ? HOOK_FUNNEL[slug] : undefined;
}
