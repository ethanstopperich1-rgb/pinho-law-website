"use client";

import type { StepProps } from "../types";
import {
  StepHeading,
  StepSubtitle,
  TextareaField,
  ContinueButton,
} from "./step-shared";

export function MessageStep({ t, intake }: StepProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <StepHeading>{t("message.heading")}</StepHeading>
        <StepSubtitle>{t("message.subtitle")}</StepSubtitle>
      </div>

      <div className="mt-8">
        <TextareaField
          label={t("message.label")}
          value={intake.data.message}
          onChange={intake.setMessage}
          placeholder={t("message.placeholder")}
          rows={5}
        />
      </div>

      <ContinueButton
        label={intake.data.message.trim() ? t("message.submit") : t("message.skip")}
        onClick={intake.next}
      />
    </div>
  );
}
