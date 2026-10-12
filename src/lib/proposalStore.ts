import { createClient } from "@supabase/supabase-js";

/**
 * Writes what readers enter on a client proposal page to our Supabase
 * database (project "Ardn AI Website & CRM", tables
 * proposal_calculator_submissions and proposal_calculator_systems).
 *
 * The site holds only the publishable key. The tables themselves are closed
 * to it; the one way in is proposal_calculator_submit(), a security-definer
 * function that validates and inserts. So nothing here can read or change
 * the CRM, and a leaked key gives nothing beyond what the page can post.
 */

export interface CalculatorSystem {
  name: string;
  group: string;
  retire: boolean;
  qty: number | null;
  unit: string;
  license: number;
  support: number;
}

export interface CalculatorSubmission {
  client: string;
  person: string;
  page: string;
  scenario: string;
  discount: number;
  supportPerDollar: number;
  clubs: number;
  fee: number | null;
  systems: CalculatorSystem[];
  totals: { takenOut: number; kept: number; todayPerClub: number; afterPerClub: number; net: number };
}

function client() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

/** Stores one calculator state. Returns the new row id, or null when storage is not configured. Throws when the write fails. */
export async function storeCalculator(c: CalculatorSubmission, userAgent: string | null): Promise<number | null> {
  const db = client();
  if (!db) return null;
  const { data, error } = await db.rpc("proposal_calculator_submit", {
    p: {
      client: c.client,
      person: c.person || null,
      page: c.page || null,
      scenario: c.scenario,
      discount: c.discount,
      supportPerDollar: c.supportPerDollar,
      clubs: c.clubs,
      fee: c.fee,
      totals: c.totals,
      systems: c.systems,
      userAgent: userAgent?.slice(0, 300) ?? null,
    },
  });
  if (error) throw new Error(`${error.code ?? ""} ${error.message}`.trim());
  return typeof data === "number" ? data : Number(data);
}
