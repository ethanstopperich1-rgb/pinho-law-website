import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { FIRM } from "@/lib/constants";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultationPage" });

  return createPageMetadata({
    title: t("headline"),
    description: t("description"),
    path: "/consultation",
    locale: locale as Locale,
  });
}

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "consultationPage" });

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <span className="gold-rule mx-auto" />
              <h1 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-5xl">
                {t("headline")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                {t("description")}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-heading text-2xl font-semibold text-ink md:text-3xl">
                {t("expectTitle")}
              </h2>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <FadeIn delay={0.1}>
                  <StepCard
                    icon={<Calendar className="h-5 w-5" />}
                    step="01"
                    title={t("step1Title")}
                    description={t("step1Description")}
                  />
                </FadeIn>
                <FadeIn delay={0.2}>
                  <StepCard
                    icon={<Phone className="h-5 w-5" />}
                    step="02"
                    title={t("step2Title")}
                    description={t("step2Description")}
                  />
                </FadeIn>
                <FadeIn delay={0.3}>
                  <StepCard
                    icon={<MessageCircle className="h-5 w-5" />}
                    step="03"
                    title={t("step3Title")}
                    description={t("step3Description")}
                  />
                </FadeIn>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Booking / Contact */}
      <section className="bg-cream py-20 md:py-24">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                {t("contactTitle")}
              </h2>
              <p className="mt-4 text-ink-muted">
                {t("contactDescription")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a href={`tel:${FIRM.phoneRaw}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    {t("callButton", { phone: FIRM.phone })}
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${FIRM.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    WhatsApp
                  </Button>
                </a>
              </div>

              <p className="mt-6 text-sm text-ink-muted">
                {FIRM.address.street}, {FIRM.address.suite},{" "}
                {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

function StepCard({
  icon,
  step,
  title,
  description,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-white p-6 text-center">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold-wash text-gold">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-ink-muted">
        {step}
      </span>
      <h3 className="mt-1 font-heading text-lg font-semibold text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-muted">{description}</p>
    </div>
  );
}
