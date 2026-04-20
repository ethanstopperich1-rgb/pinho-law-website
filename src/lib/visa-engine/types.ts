// Visa Decision Engine — shared types.
// Source of truth for the on-site tool at /tools/visa-decision-engine.
// Spec: website/content/spec-parts-8-9.md §Visa Decision Engine.

export type EngineLocale = "pt" | "en" | "es";

export type Complexity = "low" | "medium" | "high";

/** Top-level intents shown as the Step 2 card grid. */
export type Intent =
  | "PERMANENT_RESIDENCE"
  | "WORK_VISA"
  | "MARRIAGE"
  | "BUSINESS_EXPANSION"
  | "INVESTMENT"
  | "STUDENT";

/** Branches A–F map 1:1 to intents (spec §Step 3). */
export const BRANCH_BY_INTENT: Record<Intent, "A" | "B" | "C" | "D" | "E" | "F"> = {
  PERMANENT_RESIDENCE: "A",
  WORK_VISA: "B",
  MARRIAGE: "C",
  BUSINESS_EXPANSION: "D",
  INVESTMENT: "E",
  STUDENT: "F",
};

export interface LocalizedString {
  pt: string;
  en: string;
  es: string;
}

export interface LocalizedList {
  pt: string[];
  en: string[];
  es: string[];
}

export interface Answer {
  id: string;
  label: LocalizedString;
  /** Next question id, or the id of a RESULT that ends the tree. */
  next: string;
}

export interface Question {
  id: string;
  branch: "A" | "B" | "C" | "D" | "E" | "F" | "ENTRY";
  prompt: LocalizedString;
  answers: Answer[];
}

export interface VisaResult {
  id: string;
  visaCode: string;
  titles: LocalizedString;
  reasons: LocalizedList;
  timeline: LocalizedString;
  complexity: Complexity;
  /** Relative URL to the full service page for this visa. */
  servicePage: string;
  /** Tailwind color class for the badge on the result card. */
  badgeColor: string;
  /** True when we want to gate on a live consult call. */
  requiresConsult?: boolean;
}

export interface EngineState {
  step: 1 | 2 | 3 | 4 | 5;
  branch: Intent | null;
  answers: Record<string, string>;
  visaRecommended: string | null;
  sessionId: string;
  locale: EngineLocale;
  leadSubmitted: boolean;
}

/** Lead payload POSTed to /api/visa-engine/submit. */
export interface VisaEngineLeadPayload {
  sessionId: string;
  locale: EngineLocale;
  visaRecommended: string | null;
  name: string;
  email: string;
  phone: string;
  whatsappOptIn: boolean;
  message?: string;
  /** Derived intent used for lead scoring downstream. */
  intent: Intent | null;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

/** Structured output from the AI classifier fallback. */
export interface AiClassifierOutput {
  intent: Intent;
  confidence: number;
  key_facts: string[];
}
