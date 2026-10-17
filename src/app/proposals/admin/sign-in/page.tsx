import SignIn from "@/components/proposals/SignIn";

// After signing in, go back to the admin page that sent you here (only an admin page, never elsewhere).
const safeNext = (v: unknown) => (typeof v === "string" && /^\/proposals\/admin\/[\w\-/]*(\?[\w\-=&]*)?$/.test(v) ? v : undefined);

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const { next } = await searchParams;
  return <SignIn slug="admin" product="Proposal activity" client="Ardn" admin next={safeNext(next)} />;
}
