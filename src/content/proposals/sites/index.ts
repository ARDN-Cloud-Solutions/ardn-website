/** Proposals delivered as a full site of their own rather than the seed pages. */
export async function getProposalSite(slug: string): Promise<string | null> {
  if (slug === "invited-clubs") return (await import("./invited-clubs")).default;
  if (slug === "ymca-st-pete") return (await import("./ymca-st-pete")).default;
  return null;
}

/** The staff-only parts of a site (markers and the markup that replaces them), or null if it has none. */
export async function getProposalStaffParts(slug: string): Promise<Record<string, string> | null> {
  if (slug === "invited-clubs") return (await import("./invited-clubs.staff")).default;
  return null;
}
