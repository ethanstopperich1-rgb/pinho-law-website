import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import { FIRM } from "@/lib/constants";
import { Phone } from "lucide-react";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Pinho Law"
            width={180}
            height={45}
            className="h-9 w-auto md:h-11"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          <NavLink href="/immigration">{t("immigration")}</NavLink>
          <NavLink href="/business">{t("business")}</NavLink>
          <NavLink href="/about">{t("about")}</NavLink>
          <NavLink href="/resources">{t("resources")}</NavLink>
          <NavLink href="/reviews">{t("reviews")}</NavLink>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          <Link href="/consultation">
            <Button size="sm">{t("consultation")}</Button>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${FIRM.phoneRaw}`}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-cream"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-ink-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}
