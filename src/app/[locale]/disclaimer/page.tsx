import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return createPageMetadata({
    title: "Legal Disclaimer",
    description: "Legal disclaimer for the Pinho Law website.",
    path: "/disclaimer",
    locale: locale as Locale,
    noIndex: true,
  });
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <article className="prose prose-neutral mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-ink md:text-4xl">
            Legal Disclaimer
          </h1>
          <p className="text-sm text-ink-muted">Last updated: March 2026</p>

          <h2>General Disclaimer</h2>
          <p>
            The information provided on this website is for general
            informational purposes only and does not constitute legal advice.
            No attorney-client relationship is created by your use of this
            website or by contacting Pinho Law through this website.
          </p>

          <h2>Results Disclaimer</h2>
          <p>
            Past results do not guarantee future outcomes. Every legal matter
            is unique, and results depend on the specific facts and
            circumstances of each case.
          </p>

          <h2>Testimonials Disclaimer</h2>
          <p>
            Client testimonials reflect individual experiences and do not
            guarantee similar results. Each case is evaluated on its own
            merits.
          </p>

          {/* Review with counsel: Full disclaimer should be reviewed for Florida Bar compliance */}
        </article>
      </Container>
    </section>
  );
}
