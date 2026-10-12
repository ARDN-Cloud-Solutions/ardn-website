import { notFound } from "next/navigation";
import SignIn from "@/components/proposals/SignIn";
import { getProposal } from "@/content/proposals";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProposal(slug);
  if (!p) notFound();
  return <SignIn slug={p.slug} product={p.hero.headline} client={p.client} />;
}
