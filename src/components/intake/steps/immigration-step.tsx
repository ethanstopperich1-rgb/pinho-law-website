"use client";

import type { StepProps } from "../types";
import type { ImmigrationCategory } from "../types";
import {
  StepHeading,
  StepSubtitle,
  OptionCard,
  ContinueButton,
} from "./step-shared";
import { Heart, Building2, HandHeart, Award, HelpCircle } from "lucide-react";

const IMMIGRATION_OPTIONS: {
  value: ImmigrationCategory;
  icon: React.ReactNode;
  tKey: string;
}[] = [
  { value: "family", icon: <Heart className="h-4 w-4" />, tKey: "family" },
  { value: "employment", icon: <Building2 className="h-4 w-4" />, tKey: "employment" },
  { value: "humanitarian", icon: <HandHeart className="h-4 w-4" />, tKey: "humanitarian" },
  { value: "citizenship", icon: <Award className="h-4 w-4" />, tKey: "citizenship" },
  { value: "other", icon: <HelpCircle className="h-4 w-4" />, tKey: "other" },
];

export function ImmigrationStep({ t, intake }: StepProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <StepHeading>{t("immigration.heading")}</StepHeading>
        <StepSubtitle>{t("immigration.subtitle")}</StepSubtitle>
      </div>

      <div className="mt-8 flex flex-col gap-2.5">
        {IMMIGRATION_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={t(`immigration.options.${opt.tKey}.label`)}
            description={t(`immigration.options.${opt.tKey}.description`)}
            icon={opt.icon}
            selected={intake.data.immigrationCategory === opt.value}
            onClick={() => intake.setImmigrationCategory(opt.value)}
          />
        ))}
      </div>

      <ContinueButton
        label={t("continue")}
        onClick={intake.next}
        disabled={!intake.data.immigrationCategory}
      />
    </div>
  );
}
