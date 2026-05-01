"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import type { StepProps } from "../types";
import type { IntakeData } from "../types";
import { StepHeading, StepSubtitle } from "./step-shared";
import { FIRM } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Phone,
  MessageCircle,
  Mail,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "sending" | "sent" | "failed";

export function CompleteStep({ t, intake }: StepProps) {
  const locale = useLocale() as "pt" | "en" | "es";
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(intake.data, t),
    [intake.data, t],
  );

  // Fire the intake submission exactly once when this step mounts.
  // StrictMode-safe via the ref guard. Server returns a wa.me URL
  // pre-filled with the lead's info → we hold it for the WhatsApp
  // button (primary CTA) and optionally auto-open.
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [serverWaUrl, setServerWaUrl] = useState<string | null>(null);
  const firedRef = useRef(false);
  useEffect(() => {
    if (firedRef.current) return;
    firedRef.current = true;
    setSubmitState("sending");
    fetch("/api/intake/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...intake.data,
        locale,
        source: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    })
      .then((r) => r.json().catch(() => null))
      .then((data) => {
        if (data?.ok) {
          setSubmitState("sent");
          if (typeof data.whatsappUrl === "string") {
            setServerWaUrl(data.whatsappUrl);
          }
          // GA4 conversion event — fires once per successful submission.
          // Tracks form_submit + lead category (service tag) + locale so
          // downstream funnels can segment Brazilian PT immigration leads
          // from US-EN business-only leads in GA4 explore reports.
          if (
            typeof window !== "undefined" &&
            typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
          ) {
            const gtag = (window as unknown as {
              gtag: (...args: unknown[]) => void;
            }).gtag;
            gtag("event", "form_submit", {
              form_name: "intake",
              form_destination: "/api/intake/submit",
              service: intake.data.service ?? "unspecified",
              immigration_category:
                intake.data.immigrationCategory ?? null,
              business_category: intake.data.businessCategory ?? null,
              preferred_contact:
                intake.data.preferredContact ?? "unspecified",
              locale,
            });
            // Generate_lead is the GA4-recommended canonical conversion
            // for B2C lead-gen forms — wire both so either can be marked
            // as the primary conversion in GA4 admin without code change.
            gtag("event", "generate_lead", {
              currency: "USD",
              value: 250,
              service: intake.data.service ?? "unspecified",
              locale,
            });
          }
        } else {
          setSubmitState("failed");
        }
      })
      .catch(() => setSubmitState("failed"));
  }, [intake.data, locale]);

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

        {/* Submission status strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className={cn(
            "mt-4 w-full rounded-[var(--radius-sm)] px-3 py-2 text-center text-xs font-medium transition-colors",
            submitState === "sending" && "border border-gold/30 bg-gold/5 text-gold",
            submitState === "sent" && "border border-emerald-500/30 bg-emerald-500/5 text-emerald-700",
            submitState === "failed" && "border border-amber-500/30 bg-amber-500/5 text-amber-700",
            submitState === "idle" && "hidden",
          )}
        >
          {submitState === "sending" && (locale === "pt" ? "Enviando suas informações à equipe…" : locale === "es" ? "Enviando tu información…" : "Sending your intake…")}
          {submitState === "sent" && (locale === "pt" ? "✓ Enviado. Verifique sua caixa de entrada em 1–2 minutos." : locale === "es" ? "✓ Enviado. Revisa tu bandeja en 1–2 minutos." : "✓ Sent. Check your inbox in 1–2 minutes.")}
          {submitState === "failed" && (locale === "pt" ? "⚠️ Email falhou. Use WhatsApp ou telefone abaixo." : locale === "es" ? "⚠️ Falló el envío. Usa WhatsApp o teléfono abajo." : "⚠️ Email failed. Use WhatsApp or phone below.")}
        </motion.div>

        {/* Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 w-full rounded-[var(--radius-md)] border border-border-light bg-cream p-4"
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
          {/* WhatsApp — primary CTA. Prefer server-returned wa.me URL
              (uses same-format lead text as all other notification
              channels); fall back to locally-built URL while the
              submit is in flight. */}
          <a
            href={serverWaUrl ?? whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 rounded-[var(--radius-sm)] px-6 py-3.5 text-[0.9rem] font-medium tracking-wide transition-all duration-300",
              "bg-[#25D366] text-white shadow-sm hover:bg-[#20BD5A] hover:shadow-md active:scale-[0.98]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
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
