import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

// Visible author byline + review date. Addresses the AEO audit's
// [High] "Absent Author Credentials" + [Medium] "Content Freshness
// Signals" findings — AI engines (ChatGPT, Perplexity, Gemini, AIO,
// Bing Copilot) all weight visible author + date signals when
// ranking legal content for E-E-A-T.

interface Props {
  locale: Locale;
  /** ISO date (YYYY-MM-DD) — defaults to site last-reviewed marker. */
  reviewedAt?: string;
  /** Secondary authors, e.g. 'Reviewed by' vs 'Written by'. */
  role?: "author" | "reviewer";
  className?: string;
}

const COPY = {
  pt: {
    authoredBy: "Escrito por",
    reviewedBy: "Revisado por",
    credential: "Florida Bar #126610 · AILA Member since 2019 · Stetson Law J.D. magna cum laude",
    updatedOn: "Atualizado em",
    attorneyLink: "Ver perfil completo da Dra. Izi",
  },
  en: {
    authoredBy: "Written by",
    reviewedBy: "Reviewed by",
    credential: "Florida Bar #126610 · AILA Member since 2019 · Stetson Law J.D. magna cum laude",
    updatedOn: "Updated",
    attorneyLink: "View Attorney Izi's full profile",
  },
  es: {
    authoredBy: "Escrito por",
    reviewedBy: "Revisado por",
    credential: "Florida Bar #126610 · Miembro AILA desde 2019 · Stetson Law J.D. magna cum laude",
    updatedOn: "Actualizado",
    attorneyLink: "Ver perfil completo de la Abogada Izi",
  },
} as const;

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso);
  const map = { pt: "pt-BR", en: "en-US", es: "es-419" } as const;
  return new Intl.DateTimeFormat(map[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function AuthorByline({
  locale,
  reviewedAt = "2026-04-20",
  role = "reviewer",
  className,
}: Props) {
  const c = COPY[locale];
  const label = role === "author" ? c.authoredBy : c.reviewedBy;

  return (
    <div
      className={`mt-8 flex flex-wrap items-center gap-4 rounded-[var(--radius-md)] border border-gold/20 bg-white/50 p-4 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gold/30 bg-gradient-to-br from-navy to-navy-light">
        <Image
          src="/images/izi-pinho.jpg"
          alt="Dra. Izi Pinho, Esq."
          fill
          className="object-cover object-top"
          sizes="48px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-gold">
          {label}
        </div>
        <Link
          href="/attorney-izi-pinho"
          className="font-heading text-sm font-semibold text-ink hover:text-gold md:text-base"
        >
          Dra. Izi Pinho, Esq.
        </Link>
        <div className="text-[11px] leading-snug text-ink-muted md:text-xs">
          {c.credential}
        </div>
        <div className="mt-1 text-[11px] text-ink-muted/80">
          {c.updatedOn} {formatDate(reviewedAt, locale)} ·{" "}
          <Link
            href="/attorney-izi-pinho"
            className="underline decoration-gold/40 hover:text-gold"
          >
            {c.attorneyLink} →
          </Link>
        </div>
      </div>
    </div>
  );
}
