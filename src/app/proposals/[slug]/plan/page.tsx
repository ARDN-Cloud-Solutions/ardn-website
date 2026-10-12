import { notFound, redirect } from "next/navigation";
import ProposalShell from "@/components/proposals/ProposalShell";
import Plan from "@/components/proposals/render/Plan";
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
      <Plan p={p} />
    </ProposalShell>
  );
}
