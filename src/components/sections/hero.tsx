import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CASE_STATS, FIRM, REVIEWS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/fade-in";
import { StarIcon } from "@/components/ui/hero-pill";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Award, Scale, Globe2 } from "lucide-react";

// Premium glassmorphism hero — layered backgrounds, scholarly pill,
// Dra. Izi portrait with floating glass credential cards, trust marquee.
// Brand colors: navy/ink for depth, gold for accents, cream for text.
const CREDIBILITY_ITEMS = [
  "Cited by Harvard Law Forum on Corporate Governance",
  "Best Lawyers®: Ones to Watch® (2021–2026)",
  "AILA Member since 2019",
  "Florida Bar #126610",
  "Stetson Law Review — Notes & Comments Editor",
  "Orlando Magazine — Woman of the Year 2022",
  "Orlando Business Journal — 40 Under 40",
  "Rollins College — summa cum laude",
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-navy pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Layered backgrounds for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/40 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,162,101,0.10)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(196,162,101,0.05)_0%,_transparent_50%)]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Marquee keyframes (scoped) */}
      <style>{`
        @keyframes pinho-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-pinho-marquee {
          animation: pinho-marquee 55s linear infinite;
        }
      `}</style>

      <Container className="relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* --- LEFT: Content --- */}
          <div className="max-w-xl space-y-7 lg:col-span-7">
            {/* 21st.dev slide-up-fade entrance + custom gold-on-navy pill
                (HeroPill's inner bg-background doesn't read on dark hero, so
                we reuse its animation class on our own styled pill). */}
            <div className="animate-slide-up-fade">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold/90 backdrop-blur-md sm:text-xs">
                <StarIcon />
                Best Lawyers® · Ones to Watch® · 2021–2026
              </p>
            </div>


            <FadeIn delay={0.1}>
              <h1 className="font-heading text-5xl font-semibold leading-[1.05] text-cream md:text-6xl lg:text-7xl">
                {t("headline")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-cream/70 md:text-xl">
                {t("subheadline")}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                {/* 21st.dev MagneticButton — subtle tracking-pointer lift on the primary CTA */}
                <MagneticButton distance={0.35}>
                  <Link href="/consultation">
                    <Button size="lg">{t("cta")}</Button>
                  </Link>
                </MagneticButton>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="border-cream/20 text-cream hover:bg-cream hover:text-navy"
                  >
                    {t("ctaSecondary", { phone: FIRM.phone })}
                  </Button>
                </a>
              </div>
            </FadeIn>

            {/* Inline stats row — compressed, premium */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-cream/10 pt-6">
                <InlineStat
                  value={CASE_STATS.casesApproved}
                  label={t("stats.casesApproved")}
                />
                <span className="h-8 w-px bg-cream/10" />
                <InlineStat value={CASE_STATS.successRate} label={t("stats.successRate")} />
                <span className="h-8 w-px bg-cream/10" />
                <InlineStat
                  value={CASE_STATS.clientsServed}
                  label={t("stats.clientsServed")}
                />
                <span className="h-8 w-px bg-cream/10" />
                <InlineStat
                  value={`${REVIEWS.googleRating}★`}
                  label={`${REVIEWS.totalReviews} ${t("stats.googleReviews")}`}
                />
              </div>
            </FadeIn>
          </div>

          {/* --- RIGHT: Portrait + floating glass credential cards --- */}
          <FadeIn delay={0.2} className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src="/images/izi-pinho.jpg"
                  alt="Dra. Izi Pinho, Esq. — Founder of Pinho Law"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 40vw, 0vw"
                  priority
                />
                {/* Tone overlay to ensure glass cards read */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              </div>

              {/* Outline shadow for the "premium" floated frame */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[var(--radius-lg)] border border-gold/20" />

              {/* Floating credential glass card — sits ABOVE the portrait
                  entirely so it never crosses Dra. Izi's face/head. */}
              <div className="absolute bottom-full right-0 mb-3 w-60 rounded-[var(--radius-md)] border border-cream/15 bg-navy/80 p-4 backdrop-blur-xl shadow-2xl xl:-right-12">
                <div className="mb-2 flex items-center gap-2">
                  <Scale className="h-4 w-4 text-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {t("credentials.label")}
                  </span>
                </div>
                <div className="space-y-2 text-xs leading-relaxed text-cream/80">
                  <div>
                    Florida Bar <span className="text-cream">#126610</span>
                  </div>
                  <div>
                    AILA <span className="text-cream">{t("credentials.ailaSince")}</span>
                  </div>
                  <div>
                    Stetson Law Review{" "}
                    <span className="text-cream">{t("credentials.stetsonEditor")}</span>
                  </div>
                </div>
              </div>

              {/* Floating Harvard citation card — bottom left */}
              <div className="absolute -bottom-6 -left-4 w-[18rem] rounded-[var(--radius-md)] border border-gold/25 bg-navy/70 p-4 backdrop-blur-xl shadow-2xl">
                <div className="mb-1.5 flex items-center gap-2">
                  <Award className="h-4 w-4 text-gold" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                    {t("credentials.citedBy")}
                  </span>
                </div>
                <p className="text-sm leading-snug text-cream">
                  Harvard Law School Forum on Corporate Governance
                </p>
                <p className="mt-1 text-[11px] text-cream/55">
                  47 Stetson L. Rev. 333 (2018) — Benefit Corporations
                </p>
              </div>

              {/* Languages micro-pill — bottom right */}
              <div className="absolute -bottom-3 right-4 flex items-center gap-2 rounded-full border border-cream/15 bg-navy/60 px-3 py-1.5 text-[11px] font-medium text-cream/80 backdrop-blur-xl shadow-xl">
                <Globe2 className="h-3.5 w-3.5 text-gold" />
                PT · EN · ES
              </div>
            </div>
          </FadeIn>
        </div>

        {/* --- CREDIBILITY MARQUEE --- */}
        <FadeIn delay={0.5}>
          <div
            className="relative mt-16 overflow-hidden border-y border-cream/10 py-5 lg:mt-24"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-pinho-marquee flex items-center gap-12 whitespace-nowrap">
              {[...CREDIBILITY_ITEMS, ...CREDIBILITY_ITEMS].map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="flex items-center gap-3 text-sm text-cream/50"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                  <span className="tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function InlineStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-heading text-2xl font-semibold text-cream">
        {value}
      </span>
      <span className="mt-0.5 text-[10px] uppercase tracking-wider text-cream/50">
        {label}
      </span>
    </div>
  );
}
