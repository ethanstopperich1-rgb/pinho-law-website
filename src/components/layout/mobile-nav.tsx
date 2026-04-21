"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LanguageSwitcher } from "./language-switcher";
import { FIRM } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-heading text-xl font-bold tracking-tight text-ink">
              Pinho Law
            </span>
            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile navigation">
            <MobileNavLink href="/immigration" onClick={() => setOpen(false)}>
              {t("immigration")}
            </MobileNavLink>
            <MobileNavLink href="/business" onClick={() => setOpen(false)}>
              {t("business")}
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setOpen(false)}>
              {t("about")}
            </MobileNavLink>
            <MobileNavLink href="/resources" onClick={() => setOpen(false)}>
              {t("resources")}
            </MobileNavLink>
            <MobileNavLink href="/reviews" onClick={() => setOpen(false)}>
              {t("reviews")}
            </MobileNavLink>

            <div className="my-4 h-px bg-border" />

            <div className="flex flex-col gap-3">
              <MagneticButton distance={0.25}>
                <Link href="/consultation" onClick={() => setOpen(false)}>
                  <Button className="w-full">{t("consultation")}</Button>
                </Link>
              </MagneticButton>
              <a
                href={`https://wa.me/${FIRM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button variant="secondary" className="w-full">
                  {tCommon("whatsApp")}
                </Button>
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-[var(--radius-md)] px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-cream"
    >
      {children}
    </Link>
  );
}
