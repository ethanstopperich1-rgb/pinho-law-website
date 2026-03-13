"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { useIntake } from "./use-intake";
import type { IntakeStep } from "./types";
import { WelcomeStep } from "./steps/welcome-step";
import { ServiceStep } from "./steps/service-step";
import { ImmigrationStep } from "./steps/immigration-step";
import { BusinessStep } from "./steps/business-step";
import { ContactStep } from "./steps/contact-step";
import { MessageStep } from "./steps/message-step";
import { CompleteStep } from "./steps/complete-step";
import { cn } from "@/lib/utils";

export function IntakeAgent() {
  const t = useTranslations("intake");
  const intake = useIntake();

  const renderStep = (step: IntakeStep) => {
    const common = { t, intake };
    switch (step) {
      case "welcome":
        return <WelcomeStep {...common} />;
      case "service":
        return <ServiceStep {...common} />;
      case "immigration":
        return <ImmigrationStep {...common} />;
      case "business":
        return <BusinessStep {...common} />;
      case "contact":
        return <ContactStep {...common} />;
      case "message":
        return <MessageStep {...common} />;
      case "complete":
        return <CompleteStep {...common} />;
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Card */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)]",
          "transition-shadow duration-500 hover:shadow-[0_4px_32px_rgba(0,0,0,0.09)]"
        )}
      >
        {/* Progress bar */}
        {intake.currentStep !== "welcome" && (
          <div className="h-[2px] w-full bg-border-light">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${intake.progress * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        )}

        {/* Back button */}
        {intake.canGoBack && (
          <button
            onClick={intake.back}
            className="absolute left-4 top-5 z-10 flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label={t("back")}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t("back")}</span>
          </button>
        )}

        {/* Step content */}
        <div className="relative min-h-[380px] px-6 py-10 sm:px-10 sm:py-12">
          <motion.div
            key={intake.currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {renderStep(intake.currentStep)}
          </motion.div>
        </div>

        {/* Step indicator dots */}
        {intake.currentStep !== "welcome" &&
          intake.currentStep !== "complete" && (
            <div
              className="flex items-center justify-center gap-1.5 pb-6"
              role="progressbar"
              aria-valuenow={intake.currentIndex}
              aria-valuemin={1}
              aria-valuemax={intake.steps.length - 2}
            >
              {intake.steps.slice(1, -1).map((step, i) => {
                const stepIndex = i + 1; // offset for "welcome"
                const isActive = intake.currentIndex === stepIndex;
                const isPast = intake.currentIndex > stepIndex;
                return (
                  <div
                    key={step}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      isActive
                        ? "w-5 bg-gold"
                        : isPast
                        ? "w-1.5 bg-gold/40"
                        : "w-1.5 bg-border"
                    )}
                  />
                );
              })}
            </div>
          )}
      </div>

      {/* Confidentiality note */}
      <div className="mt-4 flex items-start gap-2 px-2">
        <Shield className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-ink-muted/60" />
        <p className="text-xs leading-relaxed text-ink-muted/60">
          {t("confidentialityNote")}
        </p>
      </div>
    </div>
  );
}
