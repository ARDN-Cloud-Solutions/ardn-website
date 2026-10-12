"use client";

import { ProposalContext } from "@/lib/proposals/dc-runtime";

export default function ProposalShell({ slug, email, children }: { slug: string; email: string; children: React.ReactNode }) {
  return <ProposalContext.Provider value={{ slug, email }}>{children}</ProposalContext.Provider>;
}
