import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Scale, Briefcase, ArrowRight } from "lucide-react";

export function PracticeAreas() {
  const t = useTranslations("practiceAreas");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl lg:text-5xl">
              {t("headline")}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn delay={0.1}>
            <PracticeCard
              href="/immigration"
              icon={<Scale className="h-6 w-6" />}
              title={t("immigration.title")}
              description={t("immigration.description")}
              cta={t("immigration.cta")}
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <PracticeCard
              href="/business"
              icon={<Briefcase className="h-6 w-6" />}
              title={t("business.title")}
              description={t("business.description")}
              cta={t("business.cta")}
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function PracticeCard({
  href,
  icon,
  title,
  description,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-[var(--radius-lg)] border border-border bg-white p-10 transition-all duration-500 hover:border-gold/30 hover:shadow-lg md:p-12"
    >
      {/* Gold accent bar — reveals on hover */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-wash text-gold">
        {icon}
      </div>
      <h3 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-ink-muted">{description}</p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 group-hover:gap-3">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
