import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FIRM } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const currentYear = new Date().getFullYear();

  const immigrationLinks = [
    { href: "/immigration/family-based", key: "family-based" },
    { href: "/immigration/green-cards", key: "green-cards" },
    { href: "/immigration/citizenship", key: "citizenship" },
    { href: "/immigration/work-visas", key: "work-visas" },
    { href: "/immigration/investor-visas", key: "investor-visas" },
  ] as const;

  const businessLinks = [
    { href: "/business/formation", key: "formation" },
    { href: "/business/contracts", key: "contracts" },
    { href: "/business/disputes", key: "disputes" },
    { href: "/business/immigrant-entrepreneurs", key: "immigrant-entrepreneurs" },
  ] as const;

  return (
    <footer className="bg-navy">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Firm Identity */}
          <div className="space-y-5">
            <Image
              src="/images/logo.svg"
              alt="Pinho Law"
              width={160}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-cream/50">
              {t("description")}
            </p>
            <address className="not-italic text-sm leading-relaxed text-cream/40">
              {FIRM.address.street}, {FIRM.address.suite}
              <br />
              {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
              <br />
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="text-cream/60 transition-colors hover:text-gold"
              >
                {FIRM.phone}
              </a>
            </address>
          </div>

          {/* Immigration Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/30">
              {t("immigrationLinks")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              {immigrationLinks.map(({ href, key }) => (
                <FooterLink key={key} href={href}>
                  {t(`immigrationServices.${key}`)}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Business + Resources Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/30">
              {t("businessLinks")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              {businessLinks.map(({ href, key }) => (
                <FooterLink key={key} href={href}>
                  {t(`businessServices.${key}`)}
                </FooterLink>
              ))}
              <FooterLink href="/resources/faq">{tNav("faq")}</FooterLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/30">
              {t("contact")}
            </h3>
            <div className="space-y-2.5 text-sm text-cream/50">
              <p>
                <a
                  href={`mailto:${FIRM.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {FIRM.email}
                </a>
              </p>
              <p>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp
                </a>
              </p>
            </div>

            <h3 className="pt-2 text-xs font-semibold uppercase tracking-widest text-cream/30">
              {t("hours")}
            </h3>
            <div className="text-sm text-cream/40">
              <p>Mon–Fri: {FIRM.hours.weekdays}</p>
              <p>Sat: {FIRM.hours.saturday}</p>
              <p>Sun: {FIRM.hours.sunday}</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-cream/8">
        <Container className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <p className="text-xs text-cream/30">
            {t("copyright", { year: currentYear })}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-cream/30">
            <Link
              href="/privacy"
              className="transition-colors hover:text-cream/50"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-cream/50"
            >
              {t("terms")}
            </Link>
            <Link
              href="/disclaimer"
              className="transition-colors hover:text-cream/50"
            >
              {t("disclaimer")}
            </Link>
          </div>
        </Container>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-cream/5">
        <Container className="py-4">
          <p className="text-center text-xs leading-relaxed text-cream/25">
            {t("disclaimerText")}
          </p>
        </Container>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-cream/50 transition-colors hover:text-gold"
    >
      {children}
    </Link>
  );
}
