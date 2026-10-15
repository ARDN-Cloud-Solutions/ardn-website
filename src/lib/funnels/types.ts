// Shared shapes for the Google Ads qualification funnels (/start/<hook>).
// One funnel = one question set, one routing/grading rule, its own email copy
// and its own Calendly link. The AI consulting funnel (@/lib/leadFunnel) is
// the original; its question objects already fit these shapes unchanged.

export type FunnelId = "ardn-ai-consulting" | "club-steward" | "ardn-crm";

export type Opt = { value: string; label: string };

export type TextField = {
  code: string;
  label: string;
  placeholder: string;
  /** Characters, after trimming. 0 = optional. */
  min: number;
  max: number;
};

export type ChoiceQuestion = {
  code: string;
  label: string;
  help?: string;
  multi?: boolean;
  options: Opt[];
  /**
   * Single choice only: picking `value` shows an optional text field (e.g.
   * "Other — tell us") with a Continue button instead of advancing at once.
   */
  detail?: { value: string; field: TextField };
};

export type TextQuestion = {
  code: string;
  label: string;
  help?: string;
  text: true;
  fields: TextField[];
};

export type FunnelQuestion = ChoiceQuestion | TextQuestion;

/** What the form keeps while someone answers: arrays for multi-select, strings otherwise. */
export type FormAnswers = Record<string, string | string[] | undefined>;

export type Grade = "A" | "B" | "C";

export type Routing =
  | { status: "qualified"; offer: string; grade: Grade; gradeReason: string }
  | { status: "disqualified"; offer: null; reason: string };

export const asList = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : []);
export const asText = (v: unknown): string => (typeof v === "string" ? v : "");

export function optionsOf(questions: FunnelQuestion[], code: string): Opt[] {
  const q = questions.find((x) => x.code === code);
  return q && "options" in q ? q.options : [];
}

export function labelOf(questions: FunnelQuestion[], code: string, value?: string | null): string {
  return optionsOf(questions, code).find((o) => o.value === value)?.label ?? "";
}

/** The Calendly link prefilled with the lead's name and email. */
export function prefilled(base: string, name: string, email: string): URL {
  const u = new URL(base);
  if (name.trim()) u.searchParams.set("name", name.trim());
  if (email.trim()) u.searchParams.set("email", email.trim());
  return u;
}
