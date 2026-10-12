import { notFound, redirect } from "next/navigation";
import ProposalShell from "@/components/proposals/ProposalShell";
import Details from "@/components/proposals/render/Details";
import { getProposal } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProposal(slug);
  if (!p) notFound();
  const session = await getSession(slug).catch(() => null);
  if (!session) redirect(`/proposals/${slug}/sign-in`);
  return (
    <ProposalShell slug={slug} email={session.email}>
      <Details p={p} />
    </ProposalShell>
  );
}
