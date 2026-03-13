"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português",
  es: "Español",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-medium text-ink-light transition-colors hover:text-ink"
        aria-label={t("language")}
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">
          {localeLabels[locale as Locale]}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-[var(--radius-md)] border border-border bg-white py-1 shadow-md">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={cn(
                "w-full px-4 py-2 text-left text-sm transition-colors hover:bg-cream",
                l === locale
                  ? "font-medium text-gold"
                  : "text-ink-light"
              )}
            >
              {localeLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
