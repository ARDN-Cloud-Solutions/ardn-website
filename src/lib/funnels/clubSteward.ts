// Club Steward funnel (golf & country clubs): the questions and the rule that
// routes a finished lead. Shared by the form and /api/lead so values and
// labels can never drift apart.

import { CALENDLY } from "@/app/golf-club-management-software/content";
import { asList, asText, labelOf, type FunnelQuestion, type Routing } from "./types";

export const CS_ID = "club-steward" as const;
export const CS_PRODUCT = "Club Steward";
/** The Club Steward page's own walkthrough booking link (golf-club-management-software/content.ts). */
export const CS_CALENDLY = CALENDLY;
export const CS_SYSTEMS_MAX = 600;

export const CS_QUESTIONS: FunnelQuestion[] = [
  {
    code: "club_type",
    label: "What kind of club do you run?",
    options: [
      { value: "golf_country_club", label: "Golf & country club" },
      { value: "city_social_club", label: "City or social club" },
      { value: "multi_club_operator", label: "Multi-club operator or management company" },
      { value: "golf_course", label: "Golf course (public or semi-private)" },
      { value: "other", label: "Other" },
    ],
  },
  {
    code: "clubs",
    label: "How many clubs do you operate?",
    options: [
      { value: "1", label: "1" },
      { value: "2_5", label: "2–5" },
      { value: "6_20", label: "6–20" },
      { value: "20_plus", label: "20+" },
    ],
  },
  {
    code: "fix",
    label: "What do you want to replace or fix?",
    help: "Pick all that apply.",
    multi: true,
    options: [
      { value: "membership_sales", label: "Membership sales & onboarding" },
      { value: "tee_sheet", label: "Tee sheet" },
      { value: "fnb_pos", label: "F&B and point of sale" },
      { value: "events", label: "Events & catering" },
      { value: "billing", label: "Billing & dues" },
      { value: "member_app", label: "Member app" },
      { value: "accounting", label: "Accounting" },
      { value: "hr", label: "HR" },
      { value: "everything", label: "Everything, on one platform" },
    ],
  },
  {
    code: "current_systems",
    label: "What do you run today?",
    help: "Optional. Club software, tee sheet, POS, accounting: whatever comes to mind.",
    text: true,
    fields: [
      {
        code: "current_systems",
        label: "What you run today (optional)",
        placeholder: "e.g. tee sheet and POS from one vendor, accounting from another",
        min: 0,
        max: CS_SYSTEMS_MAX,
      },
    ],
  },
  {
    code: "role",
    label: "Which best describes you?",
    options: [
      { value: "owner_gm_exec", label: "Owner, GM or executive" },
      { value: "director_manager", label: "Director or manager" },
      { value: "it", label: "IT / technology" },
      { value: "consultant", label: "Consultant or advisor" },
      { value: "student_jobseeker", label: "Student or looking for a job" },
    ],
  },
  {
    code: "timeline",
    label: "When would you like to make a change?",
    options: [
      { value: "this_quarter", label: "This quarter" },
      { value: "3_6_months", label: "In 3–6 months" },
      { value: "6_12_months", label: "In 6–12 months" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
];

export const csLabel = (code: string, value?: string | null) => labelOf(CS_QUESTIONS, code, value);

export type CsAnswers = {
  club_type: string;
  clubs: string;
  fix: string[];
  current_systems: string;
  role: string;
  timeline: string;
};

export const csMultiClub = (a: Pick<CsAnswers, "clubs" | "club_type">) => a.clubs !== "1" || a.club_type === "multi_club_operator";

/**
 * Disqualified only for students / job seekers. Grades:
 *   A: owner/GM/exec or IT, AND (2+ clubs OR changing this quarter / in 3–6 months)
 *   B: any other non-consultant, changing within 12 months
 *   C: everything else that qualified (consultants, "just exploring")
 */
export function routeClubSteward(a: CsAnswers): Routing {
  if (a.role === "student_jobseeker") return { status: "disqualified", offer: null, reason: "Student or job seeker" };
  const offer = CS_ID;
  const r = csLabel("role", a.role);
  const t = csLabel("timeline", a.timeline).toLowerCase();
  const clubs = `${csLabel("clubs", a.clubs)} club${a.clubs === "1" ? "" : "s"}`;
  const decider = a.role === "owner_gm_exec" || a.role === "it";
  const several = a.clubs !== "1";
  const soon = a.timeline === "this_quarter" || a.timeline === "3_6_months";
  const withinYear = soon || a.timeline === "6_12_months";

  if (decider && (several || soon)) {
    const why = [several && clubs, soon && `changing ${t}`].filter(Boolean).join(", ");
    return { status: "qualified", offer, grade: "A", gradeReason: `${r}; ${why}.` };
  }
  if (a.role !== "consultant" && withinYear) {
    return { status: "qualified", offer, grade: "B", gradeReason: `${r}; ${clubs}, changing ${t}${decider ? "" : "; not the owner, GM or IT"}.` };
  }
  return {
    status: "qualified",
    offer,
    grade: "C",
    gradeReason: a.role === "consultant" ? `Consultant or advisor; ${clubs}, ${t}.` : `Qualified, but timeline is ${t}.`,
  };
}

/** Answers out of the form's state, for the request body (and the saved draft). */
export function csPayload(a: Record<string, unknown>) {
  const out: Record<string, unknown> = { fix: asList(a.fix), current_systems: asText(a.current_systems).trim() };
  for (const k of ["club_type", "clubs", "role", "timeline"]) if (asText(a[k])) out[k] = a[k];
  return out;
}
