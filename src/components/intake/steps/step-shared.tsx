"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

/* ─── Heading ─── */
export function StepHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center font-heading text-2xl font-semibold leading-tight text-ink sm:text-[1.7rem]">
      {children}
    </h2>
  );
}

/* ─── Subtitle ─── */
export function StepSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 max-w-sm text-center text-[0.9rem] leading-relaxed text-ink-muted">
      {children}
    </p>
  );
}

/* ─── Option card (for selection grids) ─── */
interface OptionCardProps {
  label: string;
  description?: string;
  icon?: ReactNode;
  selected?: boolean;
  onClick: () => void;
}

export function OptionCard({
  label,
  description,
  icon,
  selected,
  onClick,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-start gap-3.5 rounded-[var(--radius-md)] border p-4 text-left transition-all duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        selected
          ? "border-gold bg-gold-wash shadow-sm"
          : "border-border bg-white hover:border-gold/40 hover:bg-cream"
      )}
    >
      {icon && (
        <span
          className={cn(
            "mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors",
            selected
              ? "bg-gold text-white"
              : "bg-warm-gray text-ink-muted group-hover:text-ink-light"
          )}
        >
          {icon}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <span
          className={cn(
            "block text-[0.9rem] font-medium transition-colors",
            selected ? "text-ink" : "text-ink-light"
          )}
        >
          {label}
        </span>
        {description && (
          <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
            {description}
          </span>
        )}
      </div>
      {selected && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-white"
        >
          <Check className="h-3 w-3" strokeWidth={3} />
        </motion.span>
      )}
    </motion.button>
  );
}

/* ─── Continue button ─── */
interface ContinueButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function ContinueButton({
  label,
  onClick,
  disabled,
}: ContinueButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={disabled ? undefined : { scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "mt-8 w-full rounded-[var(--radius-sm)] px-7 py-3.5 text-[0.9rem] font-medium tracking-wide transition-all duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        disabled
          ? "cursor-not-allowed bg-warm-gray text-ink-muted/50"
          : "bg-gold text-white shadow-sm hover:bg-gold-dark hover:shadow-md active:scale-[0.98]"
      )}
    >
      {label}
    </motion.button>
  );
}

/* ─── Text input ─── */
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "url" | "search";
}

export function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  autoFocus,
  error,
  autoComplete,
  inputMode,
}: InputFieldProps) {
  return (
    <label className="block w-full">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-muted">
        {label}
        {required && <span className="ml-0.5 text-error">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={cn(
          "w-full rounded-[var(--radius-sm)] border bg-white px-4 py-3 text-[0.9rem] text-ink transition-all duration-200",
          "placeholder:text-ink-muted/40",
          "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
          error ? "border-error" : "border-border hover:border-gold/40"
        )}
      />
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 block text-xs text-error"
        >
          {error}
        </motion.span>
      )}
    </label>
  );
}

/* ─── Textarea ─── */
interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextareaField({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextareaFieldProps) {
  return (
    <label className="block w-full">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-muted">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full resize-none rounded-[var(--radius-sm)] border border-border bg-white px-4 py-3 text-[0.9rem] text-ink transition-all duration-200",
          "placeholder:text-ink-muted/40",
          "focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
          "hover:border-gold/40"
        )}
      />
    </label>
  );
}
