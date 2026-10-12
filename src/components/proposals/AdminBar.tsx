import Link from "next/link";

export default function AdminBar({ email, active }: { email: string; active: "activity" | "proposals" }) {
  const link = (href: string, label: string, key: typeof active) => (
    <Link href={href} style={{ color: active === key ? "#FFFFFF" : "#E8CE8F", fontWeight: active === key ? 700 : 400 }}>{label}</Link>
  );
  return (
    <div style={{ background: "#0A1226", color: "#EEF1FB" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div style={{ fontWeight: 600, fontSize: 17 }}>Ardn · Proposals admin</div>
        <div style={{ fontSize: 13, color: "#C3C9DE", display: "flex", gap: 16, flexWrap: "wrap" }}>
          {link("/proposals/admin/proposals", "Proposals", "proposals")}
          {link("/proposals/admin", "Activity", "activity")}
          <span>{email}</span>
          <a href="/api/proposals/logout?slug=admin" style={{ color: "#E8CE8F" }}>Sign out</a>
        </div>
      </div>
    </div>
  );
}
