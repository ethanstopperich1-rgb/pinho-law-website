"use client";

import type { StepProps } from "../types";
import type { BusinessCategory } from "../types";
import {
  StepHeading,
  StepSubtitle,
  OptionCard,
  ContinueButton,
} from "./step-shared";
import {
  Building,
  FileSignature,
  ShieldCheck,
  Gavel,
  HelpCircle,
} from "lucide-react";

const BUSINESS_OPTIONS: {
  value: BusinessCategory;
  icon: React.ReactNode;
  tKey: string;
}[] = [
  { value: "formation", icon: <Building className="h-4 w-4" />, tKey: "formation" },
  { value: "contracts", icon: <FileSignature className="h-4 w-4" />, tKey: "contracts" },
  { value: "compliance", icon: <ShieldCheck className="h-4 w-4" />, tKey: "compliance" },
  { value: "disputes", icon: <Gavel className="h-4 w-4" />, tKey: "disputes" },
  { value: "other", icon: <HelpCircle className="h-4 w-4" />, tKey: "other" },
];

export function BusinessStep({ t, intake }: StepProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <StepHeading>{t("business.heading")}</StepHeading>
        <StepSubtitle>{t("business.subtitle")}</StepSubtitle>
      </div>

      <div className="mt-8 flex flex-col gap-2.5">
        {BUSINESS_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={t(`business.options.${opt.tKey}.label`)}
            description={t(`business.options.${opt.tKey}.description`)}
            icon={opt.icon}
            selected={intake.data.businessCategory === opt.value}
            onClick={() => intake.setBusinessCategory(opt.value)}
          />
        ))}
      </div>

      <ContinueButton
        label={t("continue")}
        onClick={intake.next}
        disabled={!intake.data.businessCategory}
      />
    </div>
  );
}
