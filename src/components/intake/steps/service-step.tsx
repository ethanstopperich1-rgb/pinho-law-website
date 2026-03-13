"use client";

import type { StepProps } from "../types";
import type { ServiceType } from "../types";
import {
  StepHeading,
  StepSubtitle,
  OptionCard,
  ContinueButton,
} from "./step-shared";
import { FileText, Briefcase, Layers } from "lucide-react";

const SERVICE_OPTIONS: {
  value: ServiceType;
  icon: React.ReactNode;
  tKey: string;
}[] = [
  { value: "immigration", icon: <FileText className="h-4 w-4" />, tKey: "immigration" },
  { value: "business", icon: <Briefcase className="h-4 w-4" />, tKey: "business" },
  { value: "both", icon: <Layers className="h-4 w-4" />, tKey: "both" },
];

export function ServiceStep({ t, intake }: StepProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <StepHeading>{t("service.heading")}</StepHeading>
        <StepSubtitle>{t("service.subtitle")}</StepSubtitle>
      </div>

      <div className="mt-8 flex flex-col gap-2.5">
        {SERVICE_OPTIONS.map((opt) => (
          <OptionCard
            key={opt.value}
            label={t(`service.options.${opt.tKey}.label`)}
            description={t(`service.options.${opt.tKey}.description`)}
            icon={opt.icon}
            selected={intake.data.service === opt.value}
            onClick={() => intake.setService(opt.value)}
          />
        ))}
      </div>

      <ContinueButton
        label={t("continue")}
        onClick={intake.next}
        disabled={!intake.data.service}
      />
    </div>
  );
}
