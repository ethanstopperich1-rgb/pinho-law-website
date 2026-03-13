"use client";

import type { StepProps } from "../types";
import { StepHeading, StepSubtitle, ContinueButton } from "./step-shared";
import { Scale } from "lucide-react";

export function WelcomeStep({ t, intake }: StepProps) {
  return (
    <>
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-wash">
        <Scale className="h-6 w-6 text-gold" />
      </div>
      <StepHeading>{t("welcome.heading")}</StepHeading>
      <StepSubtitle>{t("welcome.subtitle")}</StepSubtitle>
      <ContinueButton
        label={t("welcome.cta")}
        onClick={intake.next}
      />
      <p className="mt-4 text-center text-xs text-ink-muted/50">
        {t("welcome.timeEstimate")}
      </p>
    </>
  );
}
