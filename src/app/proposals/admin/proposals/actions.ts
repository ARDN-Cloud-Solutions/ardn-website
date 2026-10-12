"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ARDN_DOMAIN, getProposal, listProposals } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import { emptyProposal, slugify, type Proposal } from "@/lib/proposals/model";
import { deleteProposalFile, writeProposalFile } from "@/lib/proposals/store";

async function admin() {
  const s = await getSession("admin").catch(() => null);
  if (!s || !s.email.endsWith("@" + ARDN_DOMAIN)) throw new Error("Not signed in as Ardn staff");
  return s;
}

export async function createProposal(formData: FormData) {
  const s = await admin();
  const client = String(formData.get("client") || "").trim();
  if (!client) return;
  const copyFrom = String(formData.get("copyFrom") || "");
  const taken = new Set((await listProposals()).map((p) => p.slug));
  let slug = slugify(client) || "proposal";
  let n = 2;
  while (taken.has(slug) || slug === "admin") slug = `${slugify(client)}-${n++}`;
  const base = copyFrom ? await getProposal(copyFrom) : null;
  const p: Proposal = base
    ? { ...base, slug, client, status: "draft", access: { domains: [], emails: [] }, hero: { ...base.hero, eyebrow: `A proposal for ${client}` } }
    : { ...emptyProposal(slug, client), product: String(formData.get("product") || "Club Steward").trim() || "Club Steward" };
  p.updatedAt = new Date().toISOString();
  p.updatedBy = s.email;
  await writeProposalFile(slug, p);
  revalidatePath("/proposals/admin/proposals");
  redirect(`/proposals/admin/proposals/${slug}`);
}

export async function saveProposal(slug: string, data: Proposal): Promise<{ ok: boolean; error?: string }> {
  try {
    const s = await admin();
    if (!/^[a-z0-9-]+$/.test(slug) || slug === "admin") return { ok: false, error: "Bad slug" };
    const clean: Proposal = { ...emptyProposal(slug, data.client), ...data, slug, updatedAt: new Date().toISOString(), updatedBy: s.email };
    clean.access = { domains: (data.access?.domains || []).map((d) => d.trim().toLowerCase().replace(/^@/, "")).filter(Boolean), emails: (data.access?.emails || []).map((d) => d.trim().toLowerCase()).filter(Boolean) };
    await writeProposalFile(slug, clean);
    revalidatePath("/proposals/admin/proposals");
    revalidatePath(`/proposals/${slug}`);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export async function deleteProposal(formData: FormData) {
  await admin();
  const slug = String(formData.get("slug") || "");
  if (slug !== "invited-clubs") await deleteProposalFile(slug);
  else await writeProposalFile(slug, { ...await getProposal(slug)!, status: "draft" });
  revalidatePath("/proposals/admin/proposals");
  redirect("/proposals/admin/proposals");
}
