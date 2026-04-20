import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { FIRM } from "@/lib/constants";

const COPY = {
  pt: {
    eyebrow: "Em construção",
    body: "Esta página está sendo preparada. Enquanto isso, entre em contato pelo WhatsApp ou agende uma avaliação gratuita.",
    cta: "Falar no WhatsApp",
  },
  en: {
    eyebrow: "Coming soon",
    body: "This page is being prepared. Meanwhile, reach out on WhatsApp or schedule a free case review.",
    cta: "Chat on WhatsApp",
  },
  es: {
    eyebrow: "Próximamente",
    body: "Esta página está en construcción. Mientras tanto, contáctenos por WhatsApp o agende una evaluación gratuita.",
    cta: "Hablar por WhatsApp",
  },
} as const;

type Locale = keyof typeof COPY;

export function PlaceholderPage({
  locale,
  title,
}: {
  locale: Locale;
  title: string;
}) {
  const c = COPY[locale];
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="gold-rule mx-auto" />
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {c.body}
          </p>
          <a
            href={`https://wa.me/${FIRM.whatsapp}`}
            className="mt-10 inline-flex items-center justify-center rounded-[var(--radius-md)] border border-gold bg-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold/90"
          >
            {c.cta}
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
