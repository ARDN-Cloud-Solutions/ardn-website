// Club Steward funnel: answer checks, call prep and emails. Links in "Show
// them" go only to sections that exist on the live Club Steward pages.

import { CS_CALENDLY, CS_QUESTIONS, CS_SYSTEMS_MAX, csLabel, csMultiClub, routeClubSteward, type CsAnswers } from "../clubSteward";
import { optionsOf, prefilled, type Routing } from "../types";
import {
  Invalid,
  SITE,
  confirmationMail,
  contactRows,
  loose,
  lower,
  lowerLabel,
  oneLine,
  received,
  renderSections,
  sourceRows,
  text,
  type LeadMeta,
  type LinkItem,
  type Row,
  type Section,
  type ServerFunnel,
} from "./shared";

const GC = `${SITE}/golf-club-management-software`;
const FEATURES = `${GC}/features`;

const known = (code: string) => optionsOf(CS_QUESTIONS, code).map((o) => o.value);

function pick(v: unknown, code: string): string {
  if (typeof v !== "string" || !known(code).includes(v)) throw new Invalid(`${code} is not a known answer`);
  return v;
}

function parseAnswers(a: Record<string, unknown>): CsAnswers {
  const values = known("fix");
  if (!Array.isArray(a.fix) || a.fix.length === 0 || a.fix.length > values.length) throw new Invalid("fix must be a list");
  const fix = a.fix.map((v) => {
    if (typeof v !== "string" || !values.includes(v)) throw new Invalid("fix is not a known answer");
    return v;
  });
  if (new Set(fix).size !== fix.length) throw new Invalid("fix has duplicates");
  return {
    club_type: pick(a.club_type, "club_type"),
    clubs: pick(a.clubs, "clubs"),
    fix,
    current_systems: text(a.current_systems, "systems", CS_SYSTEMS_MAX, { multiline: true }),
    role: pick(a.role, "role"),
    timeline: pick(a.timeline, "timeline"),
  };
}

type Lead = LeadMeta & { answers: CsAnswers };

// ── call prep ───────────────────────────────────────────────────────────────

const FIX_LINKS: Record<string, LinkItem> = {
  membership_sales: { what: "Membership Sales (features)", url: `${FEATURES}#membership-sales` },
  tee_sheet: { what: "Tee-Times (features)", url: `${FEATURES}#tee-times` },
  fnb_pos: { what: "Point of Sale (features)", url: `${FEATURES}#point-of-sale` },
  events: { what: "Events & Catering (features)", url: `${FEATURES}#events-catering` },
  billing: { what: "Subscription Billing & Dues (features)", url: `${FEATURES}#billing-dues` },
  member_app: { what: "Members App (features)", url: `${FEATURES}#members-app` },
  accounting: { what: "Accounting Suite (features)", url: `${FEATURES}#accounting` },
  hr: { what: "HR (features)", url: `${FEATURES}#hr` },
  everything: { what: "Every app, one login (landing page)", url: `${GC}#apps` },
};

function showThem(l: Lead): LinkItem[] {
  const a = l.answers;
  const out: LinkItem[] = [];
  if (csMultiClub(a)) {
    out.push({ what: "The corporate view: every club, every region, every GM", url: `${GC}#multi-club` });
    out.push({ what: "Roles, security and reporting across clubs", url: `${FEATURES}#security` });
  }
  for (const f of a.fix) if (FIX_LINKS[f]) out.push(FIX_LINKS[f]);
  if (a.fix.includes("fnb_pos")) out.push({ what: "Point of Sale walkthrough video (38 s)", url: "https://www.youtube.com/watch?v=PP5vk7zQm2Q" });
  if (a.fix.includes("events")) out.push({ what: "Events & Catering walkthrough video (97 s)", url: "https://www.youtube.com/watch?v=iny5b0zibaU" });
  out.push({ what: "Club Steward walkthrough video (2 min)", url: "https://www.youtube.com/watch?v=_ypWvVbAkhQ" });
  return out;
}

function askThem(l: Lead): string[] {
  const a = l.answers;
  const qs: string[] = [];
  if (a.current_systems) qs.push(`They run "${oneLine(a.current_systems).slice(0, 120)}" today: which parts would they keep, and which would they replace first?`);
  else qs.push("What do you run today for the tee sheet, point of sale, membership and the back office?");
  if (csMultiClub(a)) qs.push("How are the clubs grouped (regions, brands), and who needs to see across them?");
  if (a.timeline === "this_quarter") qs.push("What is driving a change this quarter: a contract renewal, a new club, something else?");
  if (a.fix.includes("fnb_pos")) qs.push("How many outlets take payments today (dining, bar, pro shop, halfway house)?");
  if (a.fix.includes("membership_sales")) qs.push("How do membership inquiries come in today, and who follows them up?");
  if (a.fix.includes("tee_sheet")) qs.push("Which tee-sheet rules matter most: booking windows by tier, guest and public rates, lotteries?");
  if (a.fix.includes("billing")) qs.push("How are dues billed today, and how many members are on autopay?");
  if (a.role === "director_manager") qs.push("Who else is involved in the decision, and who signs off?");
  if (a.role === "consultant") qs.push("Which club or clubs are you advising, and can the decision maker join the next call?");
  if (qs.length < 3) qs.push("What would make the first 90 days a success?");
  return qs.slice(0, 4);
}

function watchFor(l: Lead, r: Routing): string[] {
  const a = l.answers;
  if (r.status === "disqualified") return [`Not a fit (${lower(r.reason)}). Only call if they reach out again with a real club.`];
  const out: string[] = [];
  if (a.role === "consultant") out.push("Consultant or advisor: confirm which club, who owns the decision and whether they can join.");
  if (a.timeline === "exploring") out.push("Just exploring: find out early whether there is a real decision and a date.");
  if (a.timeline === "6_12_months") out.push("Change is 6–12 months out: agree a concrete next step so it doesn't go cold.");
  if (a.club_type === "city_social_club") out.push("City or social club: the public pages are written for golf & country clubs. Ask which apps they need before the demo.");
  if (a.club_type === "golf_course") out.push("Public or semi-private course: lead with the tee sheet, rate grids, carts and point of sale rather than membership sales.");
  if (a.fix.includes("fnb_pos"))
    out.push("Wants F&B / POS: the public FAQ still calls point of sale 'planned' while the landing and features pages list the Point of Sale app. Confirm current scope before promising anything.");
  if (!out.length) out.push("No obvious red flags. No pricing is published for Club Steward: don't quote numbers on the first call.");
  return out;
}

// ── email ───────────────────────────────────────────────────────────────────

function buildEmail(l: Lead, r: Routing) {
  const { answers: a, contact: c } = l;
  const company = oneLine(c.company);
  const subject = r.status === "qualified" ? `[Qualified lead · ${r.grade}] ${company} — Club Steward` : `[Not a fit] ${company} — Club Steward`;
  const when = received();
  const fixes = a.fix.map((f) => csLabel("fix", f));

  const who = `${c.name}, ${lower(csLabel("role", a.role))} at ${c.company} (${lower(csLabel("club_type", a.club_type))}, ${csLabel("clubs", a.clubs)} club${a.clubs === "1" ? "" : "s"}).`;
  const what = `Wants to fix: ${fixes.map(lowerLabel).join("; ")}. Change: ${lower(csLabel("timeline", a.timeline))}.`;
  const fit = r.status === "qualified" ? `Grade ${r.grade} · Club Steward. ${r.gradeReason}` : `Not a fit: ${r.reason}.`;

  const sections: Section[] = [
    { title: "CALL PREP", lines: [who, what] },
    { title: "Fit", lines: [fit] },
    { title: "Show them", links: showThem(l) },
    { title: "Ask them", list: askThem(l) },
    { title: "Watch for", lines: watchFor(l, r) },
    { title: "Contact", rows: contactRows(c) },
    {
      title: "All answers",
      rows: [
        ["Club type", csLabel("club_type", a.club_type)],
        ["Clubs", csLabel("clubs", a.clubs)],
        ["Replace or fix", fixes.join("; ")],
        ["Runs today", a.current_systems || "—"],
        ["Role", csLabel("role", a.role)],
        ["Change", csLabel("timeline", a.timeline)],
      ],
    },
    { title: "Source", rows: sourceRows(l, when) },
  ];
  return { subject, ...renderSections(sections) };
}

function buildConfirmationEmail(l: Lead) {
  const { contact: c, answers: a } = l;
  const first = oneLine(c.name).split(" ")[0] ?? "";
  const book = prefilled(CS_CALENDLY, c.name, c.email);
  book.searchParams.set("utm_source", "lead-email");
  book.searchParams.set("utm_medium", "email");
  book.searchParams.set("utm_content", l.hook);
  const systems = oneLine(a.current_systems);
  return confirmationMail({
    subject: "Your Club Steward walkthrough: next step",
    hello: first ? `Hi ${first},` : "Hi,",
    thanks: "Thanks for telling us about your club. The next step is a 30-minute Club Steward walkthrough with our team.",
    url: book.toString(),
    ready: [
      systems ? `The systems you run today (you mentioned: ${systems}), and what you like or dislike about them` : "The systems you run today, and what you like or dislike about them",
      `The areas you most want to fix (you picked: ${a.fix.map((f) => lowerLabel(csLabel("fix", f))).join(", ")})`,
      ...(csMultiClub(a) ? ["How your clubs are grouped, and who needs to see across them"] : []),
    ],
  });
}

function partialRows(a: Record<string, unknown>): Row[] {
  const one = (code: string) => {
    const v = a[code];
    return typeof v === "string" && known(code).includes(v) ? csLabel(code, v) : "";
  };
  const fix = Array.isArray(a.fix) ? [...new Set(a.fix.filter((v): v is string => typeof v === "string" && known("fix").includes(v)))] : [];
  const systems = loose(a.current_systems, CS_SYSTEMS_MAX, true);
  const rows: [string, string][] = [
    ["Club type", one("club_type")],
    ["Clubs", one("clubs")],
    ["Replace or fix", fix.map((v) => csLabel("fix", v)).join("; ")],
    ["Runs today", systems],
    ["Role", one("role")],
    ["Change", one("timeline")],
  ];
  return rows.filter(([, v]) => v);
}

export const CS_SERVER: ServerFunnel = {
  id: "club-steward",
  accept(raw) {
    const answers = parseAnswers(raw);
    const routing = routeClubSteward(answers);
    const lead = (m: LeadMeta): Lead => ({ ...m, answers });
    return {
      routing,
      email: (m) => buildEmail(lead(m), routing),
      confirmation: (m) => buildConfirmationEmail(lead(m)),
    };
  },
  partialRows,
  partialSuffix: " — Club Steward",
  partialOffer: "a 30-minute Club Steward walkthrough",
};
