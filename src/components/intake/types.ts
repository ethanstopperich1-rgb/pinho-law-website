// Intake Agent — Type definitions

import type { useTranslations } from "next-intl";
import type { useIntake } from "./use-intake";

/** Shared props passed to every step component. */
export interface StepProps {
  t: ReturnType<typeof useTranslations>;
  intake: ReturnType<typeof useIntake>;
}

export type IntakeStep =
  | "welcome"
  | "service"
  | "immigration"
  | "business"
  | "contact"
  | "message"
  | "complete";

export type ServiceType = "immigration" | "business" | "both";

export type ImmigrationCategory =
  | "family"
  | "employment"
  | "humanitarian"
  | "citizenship"
  | "other";

export type BusinessCategory =
  | "formation"
  | "contracts"
  | "compliance"
  | "disputes"
  | "other";

export type ContactMethod = "phone" | "whatsapp" | "email";

export interface IntakeData {
  service: ServiceType | null;
  immigrationCategory: ImmigrationCategory | null;
  businessCategory: BusinessCategory | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: ContactMethod | null;
  message: string;
}

export const INITIAL_INTAKE_DATA: IntakeData = {
  service: null,
  immigrationCategory: null,
  businessCategory: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  preferredContact: null,
  message: "",
};

/** Determines the step sequence based on selected service. */
export function getStepSequence(service: ServiceType | null): IntakeStep[] {
  const base: IntakeStep[] = ["welcome", "service"];

  if (!service) return base;

  if (service === "immigration") {
    return [...base, "immigration", "contact", "message", "complete"];
  }
  if (service === "business") {
    return [...base, "business", "contact", "message", "complete"];
  }
  // "both"
  return [
    ...base,
    "immigration",
    "business",
    "contact",
    "message",
    "complete",
  ];
}
