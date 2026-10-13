import { notFound, redirect } from "next/navigation";
import ProposalShell from "@/components/proposals/ProposalShell";
import Overview from "@/components/proposals/render/Overview";
import { getProposal } from "@/content/proposals";
import { getProposalSite } from "@/content/proposals/sites";
import { getSession } from "@/lib/proposals/server";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProposal(slug);
  if (!p) notFound();
  const session = await getSession(slug).catch(() => null);
  if (!session) redirect(`/proposals/${slug}/sign-in`);
  // A proposal with a full site of its own opens on that site.
  if (await getProposalSite(slug)) redirect(`/proposals/${slug}/site`);
  return (
    <ProposalShell slug={slug} email={session.email}>
      <Overview p={p} />
    </ProposalShell>
  );
}
