/** Proposals delivered as a full site of their own rather than the seed pages. */
export async function getProposalSite(slug: string): Promise<string | null> {
  if (slug === "invited-clubs") return (await import("./invited-clubs")).default;
  return null;
}
