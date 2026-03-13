"use client";

import { useMemo } from "react";
import type { StepProps } from "../types";
import type { IntakeData } from "../types";
import { StepHeading, StepSubtitle } from "./step-shared";
import { FIRM } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle, Mail, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function CompleteStep({ t, intake }: StepProps) {
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(intake.data, t),
    [intake.data, t]
  );

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        {/* Success icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-success/10"
        >
          <CheckCircle className="h-8 w-8 text-success" />
        </motion.div>

        <StepHeading>{t("complete.heading")}</StepHeading>
        <StepSubtitle>{t("complete.subtitle")}</StepSubtitle>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 w-full rounded-[var(--radius-md)] border border-border-light bg-cream p-4"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
            {t("complete.summaryLabel")}
          </p>
          <p className="mt-1.5 text-sm text-ink">
            {intake.data.firstName} {intake.data.lastName}
          </p>
          <p className="text-sm text-ink-muted">
            {intake.data.email} &middot; {intake.data.phone}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex w-full flex-col gap-2.5"
        >
          {/* WhatsApp — primary CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3.5 text-[0.9rem] font-medium tracking-wide transition-all duration-300",
              "bg-[#25D366] text-white shadow-sm hover:bg-[#20BD5A] hover:shadow-md active:scale-[0.98]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
            )}
          >
            <MessageCircle className="h-4 w-4" />
            {t("complete.whatsapp")}
          </a>

          {/* Phone */}
          <a
            href={`tel:${FIRM.phoneRaw}`}
            className={cn(
              "flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-gold/40 px-6 py-3.5 text-[0.9rem] font-medium tracking-wide text-gold transition-all duration-300",
              "hover:bg-gold hover:text-white active:scale-[0.98]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            )}
          >
            <Phone className="h-4 w-4" />
            {t("complete.call", { phone: FIRM.phone })}
          </a>

          {/* Email */}
          <a
            href={`mailto:${FIRM.email}?subject=${encodeURIComponent(t("complete.emailSubject"))}&body=${encodeURIComponent(buildEmailBody(intake.data, t))}`}
            className={cn(
              "flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-border px-6 py-3 text-sm text-ink-muted transition-all duration-200",
              "hover:border-gold/40 hover:text-ink-light active:scale-[0.98]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            )}
          >
            <Mail className="h-4 w-4" />
            {t("complete.email")}
          </a>
        </motion.div>

        {/* Start over */}
        <button
          onClick={intake.reset}
          className="mt-5 flex items-center gap-1.5 text-xs text-ink-muted/50 transition-colors hover:text-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <RotateCcw className="h-3 w-3" />
          {t("complete.startOver")}
        </button>
      </div>
    </div>
  );
}

/** Build a localized WhatsApp prefill URL. */
function buildWhatsAppUrl(data: IntakeData, t: StepProps["t"]): string {
  const lines: string[] = [];
  lines.push(t("complete.waGreeting"));
  lines.push("");
  lines.push(`${t("complete.waName")}: ${data.firstName} ${data.lastName}`.trim());
  if (data.email) lines.push(`${t("complete.waEmail")}: ${data.email}`);
  if (data.phone) lines.push(`${t("complete.waPhone")}: ${data.phone}`);
  lines.push("");
  if (data.service) {
    const serviceLabel =
      data.service === "immigration"
        ? t("complete.waServiceImmigration")
        : data.service === "business"
        ? t("complete.waServiceBusiness")
        : t("complete.waServiceBoth");
    lines.push(`${t("complete.waService")}: ${serviceLabel}`);
  }
  if (data.immigrationCategory) {
    lines.push(`${t("complete.waCategory")}: ${t(`immigration.options.${data.immigrationCategory}.label`)}`);
  }
  if (data.businessCategory) {
    lines.push(`${t("complete.waCategory")}: ${t(`business.options.${data.businessCategory}.label`)}`);
  }
  if (data.message) {
    lines.push("");
    lines.push(`${t("complete.waDetails")}: ${data.message}`);
  }

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${FIRM.whatsapp}?text=${text}`;
}

/** Build a localized email body. */
function buildEmailBody(data: IntakeData, t: StepProps["t"]): string {
  const lines: string[] = [];
  lines.push(t("complete.emailGreeting"));
  lines.push("");
  lines.push(`${t("contact.firstName")}: ${data.firstName} ${data.lastName}`);
  lines.push(`${t("contact.phone")}: ${data.phone}`);
  if (data.service) {
    const serviceLabel =
      data.service === "immigration"
        ? t("complete.waServiceImmigration")
        : data.service === "business"
        ? t("complete.waServiceBusiness")
        : t("complete.waServiceBoth");
    lines.push(`${t("complete.emailService")}: ${serviceLabel}`);
  }
  if (data.message) {
    lines.push("");
    lines.push(data.message);
  }
  return lines.join("\n");
}
