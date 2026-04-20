import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FIRM, REVIEWS, CASE_STATS } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

const COPY = {
  pt: {
    title: "Obrigado — Pinho Law",
    eyebrow: "Recebemos sua solicitação",
    heading: "Perfeito. Estamos com você.",
    body: "Dra. Izi Pinho ou um membro da nossa equipe entrará em contato em até 24 horas úteis. Enquanto isso, você pode continuar explorando seu caminho.",
    whatsapp: "Falar agora no WhatsApp",
    call: "Ligar",
    trustLine: `${CASE_STATS.casesApproved} casos aprovados · ${REVIEWS.googleRating}★ no Google (${REVIEWS.totalReviews} avaliações)`,
    meta: "Recebemos sua solicitação. Dra. Izi Pinho ou um membro da equipe entra em contato em até 24 horas úteis.",
  },
  en: {
    title: "Thank you — Pinho Law",
    eyebrow: "We received your request",
    heading: "Perfect. We've got you.",
    body: "Dra. Izi Pinho or a member of our team will reach out within 24 business hours. In the meantime, feel free to keep exploring your path.",
    whatsapp: "Chat on WhatsApp",
    call: "Call",
    trustLine: `${CASE_STATS.casesApproved} cases approved · ${REVIEWS.googleRating}★ on Google (${REVIEWS.totalReviews} reviews)`,
    meta: "We received your request. Dra. Izi Pinho or a team member will reach out within 24 business hours.",
  },
  es: {
    title: "Gracias — Pinho Law",
    eyebrow: "Recibimos tu solicitud",
    heading: "Perfecto. Estamos contigo.",
    body: "Dra. Izi Pinho o un miembro de nuestro equipo se pondrá en contacto en menos de 24 horas hábiles. Mientras tanto, sigue explorando tu camino.",
    whatsapp: "Chatear por WhatsApp",
    call: "Llamar",
    trustLine: `${CASE_STATS.casesApproved} casos aprobados · ${REVIEWS.googleRating}★ en Google (${REVIEWS.totalReviews} reseñas)`,
    meta: "Recibimos tu solicitud. Dra. Izi Pinho o un miembro del equipo se pondrá en contacto en menos de 24 horas hábiles.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = COPY[locale as keyof typeof COPY];
  return {
    ...(await createPageMetadata({
      title: c.title,
      description: c.meta,
      path: "/obrigado",
      locale: locale as Locale,
      noIndex: true,
    })),
  };
}

export default async function ObrigadoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = COPY[locale as keyof typeof COPY];
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="gold-rule mx-auto" />
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl">
            {c.heading}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {c.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${FIRM.whatsapp}`}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold/90"
            >
              {c.whatsapp}
            </a>
            <a
              href={`tel:${FIRM.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-border bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-warm-gray"
            >
              {c.call} {FIRM.phone}
            </a>
          </div>
          <p className="mt-10 text-xs text-ink-muted/70">{c.trustLine}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
