import type { Metadata } from "next";
import "./proposals.css";

export const metadata: Metadata = {
  title: "Proposal | Ardn Cloud Solutions",
  robots: { index: false, follow: false, nocache: true },
};

export default function ProposalsLayout({ children }: { children: React.ReactNode }) {
  return <div className={"prp"}>{children}</div>;
}
