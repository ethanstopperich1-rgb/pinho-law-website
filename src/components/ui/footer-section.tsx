"use client";

import React, { type ComponentProps, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MusicIcon,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FIRM } from "@/lib/constants";

// 21st.dev footer-section adapted to Pinho Law: real practice-area
// navigation, trilingual labels via next-intl, brand palette (navy
// surface, gold rail + accents), office NAP, social links from FIRM
// constants. Renders on every page via the [locale] layout.

interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

function useSections(): FooterSection[] {
  const t = useTranslations("footerSection");
  return [
    {
      label: t("immigrationLabel"),
      links: [
        { title: t("links.immigration"), href: "/immigration" },
        { title: "EB-2 NIW", href: "/immigration/eb-2-niw" },
        { title: "EB-5", href: "/immigration/eb-5" },
        { title: "E-2", href: "/immigration/e-2" },
        { title: "L-1A", href: "/immigration/l-1a" },
        { title: "K-1", href: "/immigration/k-1" },
      ],
    },
    {
      label: t("firmLabel"),
      links: [
        { title: t("links.business"), href: "/business" },
        { title: t("links.realEstate"), href: "/real-estate" },
        { title: t("links.attorney"), href: "/attorney-izi-pinho" },
        { title: t("links.team"), href: "/team" },
        { title: t("links.reviews"), href: "/reviews" },
      ],
    },
    {
      label: t("resourcesLabel"),
      links: [
        { title: t("links.blog"), href: "/blog" },
        { title: t("links.tools"), href: "/tools" },
        { title: t("links.faqs"), href: "/resources/faq" },
        { title: t("links.results"), href: "/results" },
        { title: t("links.contact"), href: "/contact" },
      ],
    },
    {
      label: t("socialLabel"),
      links: [
        {
          title: "Instagram",
          href: FIRM.social.instagramFirm,
          external: true,
          icon: InstagramIcon,
        },
        {
          title: "LinkedIn",
          href: FIRM.social.linkedin,
          external: true,
          icon: LinkedinIcon,
        },
        {
          title: "Facebook",
          href: FIRM.social.facebook,
          external: true,
          icon: FacebookIcon,
        },
        {
          title: "YouTube",
          href: FIRM.social.youtube,
          external: true,
          icon: YoutubeIcon,
        },
        {
          title: "TikTok",
          href: FIRM.social.tiktokFirm,
          external: true,
          icon: MusicIcon,
        },
      ],
    },
  ];
}

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("footerSection");
  const sections = useSections();

  return (
    <footer className="relative w-full overflow-hidden bg-[#0E1B2E] text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C9A961]/60 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-12 lg:py-16">
        <div className="pointer-events-none absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 rounded-full bg-[#C9A961]/40 blur" />

        <div className="grid w-full gap-10 xl:grid-cols-3 xl:gap-8">
          {/* Brand column */}
          <AnimatedContainer className="space-y-5">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Pinho Law"
                width={200}
                height={50}
                className="h-10 w-auto md:h-12"
              />
            </Link>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              {FIRM.address.street}
              <br />
              {FIRM.address.suite}
              <br />
              {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
            </address>
            <div className="space-y-1 text-sm">
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="block text-white/80 hover:text-[#C9A961]"
              >
                {FIRM.phone}
              </a>
              <a
                href={`tel:${FIRM.secondaryPhoneRaw}`}
                className="block text-white/80 hover:text-[#C9A961]"
              >
                {FIRM.secondaryPhone}
              </a>
              <a
                href={`https://wa.me/${FIRM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-[#C9A961]"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${FIRM.infoEmail}`}
                className="block text-white/80 hover:text-[#C9A961]"
              >
                {FIRM.infoEmail}
              </a>
            </div>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Pinho Law, PLLC.{" "}
              {t("allRights")}
            </p>
          </AnimatedContainer>

          {/* Link grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
            {sections.map((section, index) => (
              <AnimatedContainer
                key={section.label}
                delay={0.1 + index * 0.1}
              >
                <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-[#C9A961]">
                  {section.label}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {section.links.map((link) =>
                    link.external ? (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center transition-colors hover:text-[#C9A961]"
                        >
                          {link.icon && <link.icon className="me-2 size-4" />}
                          {link.title}
                        </a>
                      </li>
                    ) : (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center transition-colors hover:text-[#C9A961]"
                        >
                          {link.icon && <link.icon className="me-2 size-4" />}
                          {link.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-12 w-full border-t border-white/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
            <p>
              {t("disclaimer")} · {FIRM.founder} · Florida Bar #{FIRM.barNumber}
            </p>
            <div className="flex gap-4">
              <Link
                href="/disclaimer"
                className="hover:text-[#C9A961]"
              >
                {t("links.disclaimer")}
              </Link>
              <Link href="/privacy" className="hover:text-[#C9A961]">
                {t("links.privacy")}
              </Link>
              <Link href="/terms" className="hover:text-[#C9A961]">
                {t("links.terms")}
              </Link>
            </div>
          </div>
          <p className="mt-2 text-center text-[10px] text-white/40 md:text-left">
            {locale === "pt"
              ? "Os resultados dos casos dependem de fatos específicos e não são garantia de resultados futuros. Esta página não constitui assessoria jurídica."
              : locale === "es"
                ? "Los resultados dependen de hechos específicos y no garantizan resultados futuros. Esta página no constituye asesoría legal."
                : "Case results depend on specific facts and do not guarantee future outcomes. This page does not constitute legal advice."}
          </p>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
