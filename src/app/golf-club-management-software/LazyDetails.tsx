"use client";

import { useState, type ReactNode } from "react";

/**
 * A <details> whose body mounts on first open. Used for the collapsed
 * walkthrough videos: a <video poster> downloads its poster even inside a
 * closed <details>, so the three posters stayed off the network until asked.
 * Their VideoObject JSON-LD is in page.tsx regardless.
 */
export default function LazyDetails({
  className,
  summary,
  children,
}: {
  className?: string;
  summary: ReactNode;
  children: ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  return (
    <details className={className} onToggle={(e) => e.currentTarget.open && setOpened(true)}>
      <summary>{summary}</summary>
      {opened && children}
    </details>
  );
}
