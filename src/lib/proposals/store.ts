import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Storage for the proposal area: sign-in codes, viewer sessions, tracked
 * events, access lists and the proposals themselves, in the "ardn-website"
 * Supabase project (org ARDN Cloud Solutions). See
 * supabase/migrations/20261012000200_proposals_store.sql.
 *
 * Every call goes through one database function, proposals_db(), which
 * checks PROPOSALS_DB_KEY against the copy kept in the database. The site
 * holds only the publishable key, and that key can touch none of these
 * tables on its own.
 *
 * Env: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, PROPOSALS_DB_KEY, PROPOSALS_SECRET.
 */

export type CodeRow = { id: string; slug: string; email: string; code_hash: string; attempts: number; expires_at: string; used_at: string | null; created_at: string };
export type SessionRow = { id: string; slug: string; email: string; ip: string | null; user_agent: string | null; expires_at: string; revoked_at: string | null; created_at: string };
export type EventRow = { id: number; slug: string; email: string; session_id: string | null; type: string; page: string; data: unknown; created_at: string };
export type AccessRow = { slug: string; client: string; domains: string[]; emails: string[]; updated_at: string; updated_by: string };

function need(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`${name} is not set`);
  return v;
}

/** Signing secret for codes and session cookies. */
export function secret(): string {
  return need("PROPOSALS_SECRET");
}

let client: SupabaseClient | null = null;
function db() {
  if (!client) client = createClient(need("SUPABASE_URL"), need("SUPABASE_PUBLISHABLE_KEY"), { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

async function call<T>(op: string, args: Record<string, unknown> = {}): Promise<T> {
  const { data, error } = await db().rpc("proposals_db", { p_key: need("PROPOSALS_DB_KEY"), p_op: op, p_args: args });
  if (error) throw new Error(`proposals_db ${op}: ${error.message}`);
  return data as T;
}

// ── Codes ───────────────────────────────────────────────────────────────────

export async function countRecentCodes(slug: string, email: string, sinceIso: string): Promise<number> {
  return Number(await call<number>("code_count_recent", { slug, email, since: sinceIso }));
}

export async function insertCode(row: Omit<CodeRow, "id" | "attempts" | "used_at" | "created_at">): Promise<CodeRow> {
  return call<CodeRow>("code_insert", row);
}

export async function latestOpenCode(slug: string, email: string): Promise<CodeRow | undefined> {
  return (await call<CodeRow | null>("code_latest_open", { slug, email })) ?? undefined;
}

export async function patchCode(id: string, patch: Partial<CodeRow>): Promise<void> {
  await call("code_patch", { id, patch });
}

// ── Sessions ────────────────────────────────────────────────────────────────

export async function insertSession(row: Omit<SessionRow, "id" | "revoked_at" | "created_at">): Promise<SessionRow> {
  return call<SessionRow>("session_insert", row);
}

export async function findSession(id: string): Promise<SessionRow | undefined> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return undefined;
  return (await call<SessionRow | null>("session_find", { id })) ?? undefined;
}

export async function patchSession(id: string, patch: Partial<SessionRow>): Promise<void> {
  await call("session_patch", { id, patch });
}

export async function listSessions(limit = 500): Promise<SessionRow[]> {
  return call<SessionRow[]>("session_list", { limit });
}

// ── Events ──────────────────────────────────────────────────────────────────

export async function insertEvent(row: Omit<EventRow, "id" | "created_at">): Promise<void> {
  await call("event_insert", row);
}

export async function listEvents(limit = 5000): Promise<EventRow[]> {
  return call<EventRow[]>("event_list", { limit });
}

// ── Access settings ─────────────────────────────────────────────────────────

export async function readAccess(): Promise<Record<string, AccessRow>> {
  return call<Record<string, AccessRow>>("access_read");
}

export async function writeAccess(row: AccessRow): Promise<void> {
  await call("access_write", row);
}

export async function deleteAccess(slug: string): Promise<void> {
  await call("access_delete", { slug });
}

// ── Proposals (created and edited in /proposals/admin) ──────────────────────

const cleanSlug = (slug: string) => slug.replace(/[^a-z0-9-]/g, "");

export async function readProposalFile(slug: string): Promise<unknown | null> {
  return call<unknown | null>("proposal_read", { slug: cleanSlug(slug) });
}

export async function writeProposalFile(slug: string, data: unknown): Promise<void> {
  await call("proposal_write", { slug: cleanSlug(slug), data });
}

export async function deleteProposalFile(slug: string): Promise<void> {
  await call("proposal_delete", { slug: cleanSlug(slug) });
}

export async function listProposalSlugs(): Promise<string[]> {
  return call<string[]>("proposal_list");
}
