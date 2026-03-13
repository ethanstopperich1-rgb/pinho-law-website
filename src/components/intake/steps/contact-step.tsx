"use client";

import { useState } from "react";
import type { StepProps } from "../types";
import type { ContactMethod } from "../types";
import {
  StepHeading,
  StepSubtitle,
  InputField,
  ContinueButton,
} from "./step-shared";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, Mail, Check } from "lucide-react";

// Props extends StepProps if extra fields needed later

const CONTACT_METHODS: {
  value: ContactMethod;
  icon: React.ReactNode;
  tKey: string;
}[] = [
  { value: "phone", icon: <Phone className="h-3.5 w-3.5" />, tKey: "phone" },
  { value: "whatsapp", icon: <MessageCircle className="h-3.5 w-3.5" />, tKey: "whatsapp" },
  { value: "email", icon: <Mail className="h-3.5 w-3.5" />, tKey: "email" },
];

export function ContactStep({ t, intake }: StepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!intake.data.firstName.trim()) {
      errs.firstName = t("contact.errors.firstName");
    }
    if (!intake.data.email.trim()) {
      errs.email = t("contact.errors.email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(intake.data.email)) {
      errs.email = t("contact.errors.emailInvalid");
    }
    if (!intake.data.phone.trim()) {
      errs.phone = t("contact.errors.phone");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      intake.next();
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <StepHeading>{t("contact.heading")}</StepHeading>
        <StepSubtitle>{t("contact.subtitle")}</StepSubtitle>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <InputField
            label={t("contact.firstName")}
            value={intake.data.firstName}
            onChange={(v) => {
              intake.setContactField("firstName", v);
              if (errors.firstName) setErrors((e) => ({ ...e, firstName: "" }));
            }}
            required
            autoComplete="given-name"
            error={errors.firstName}
          />
          <InputField
            label={t("contact.lastName")}
            value={intake.data.lastName}
            onChange={(v) => intake.setContactField("lastName", v)}
            autoComplete="family-name"
          />
        </div>

        <InputField
          label={t("contact.email")}
          value={intake.data.email}
          onChange={(v) => {
            intake.setContactField("email", v);
            if (errors.email) setErrors((e) => ({ ...e, email: "" }));
          }}
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          error={errors.email}
        />

        <InputField
          label={t("contact.phone")}
          value={intake.data.phone}
          onChange={(v) => {
            intake.setContactField("phone", v);
            if (errors.phone) setErrors((e) => ({ ...e, phone: "" }));
          }}
          type="tel"
          inputMode="tel"
          placeholder="(555) 555-5555"
          required
          autoComplete="tel"
          error={errors.phone}
        />

        {/* Contact preference */}
        <div>
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-muted">
            {t("contact.preferredMethod")}
          </span>
          <div className="flex gap-2">
            {CONTACT_METHODS.map((method) => (
              <button
                key={method.value}
                type="button"
                onClick={() => intake.setPreferredContact(method.value)}
                className={cn(
                  "flex flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border px-3 py-2.5 text-xs font-medium transition-all duration-200",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  intake.data.preferredContact === method.value
                    ? "border-gold bg-gold-wash text-gold"
                    : "border-border text-ink-muted hover:border-gold/40 hover:text-ink-light"
                )}
              >
                {intake.data.preferredContact === method.value ? (
                  <Check className="h-3 w-3" />
                ) : (
                  method.icon
                )}
                {t(`contact.methods.${method.tKey}`)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ContinueButton label={t("continue")} onClick={handleContinue} />
    </div>
  );
}
