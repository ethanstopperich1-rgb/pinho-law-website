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
    title: "Terms of Service",
    description: "Pinho Law terms of service for website use.",
    path: "/terms",
    locale: locale as Locale,
    noIndex: true,
  });
}

export default async function TermsPage({
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
            Terms of Service
          </h1>
          <p className="text-sm text-ink-muted">Last updated: March 2026</p>

          <h2>Use of This Website</h2>
          <p>
            This website is provided by Pinho Law, PLLC for informational
            purposes only. The content on this site does not constitute legal
            advice and should not be relied upon as such.
          </p>

          <h2>No Attorney-Client Relationship</h2>
          <p>
            Visiting this website or contacting us through this website does
            not create an attorney-client relationship. An attorney-client
            relationship is only formed through a signed engagement agreement.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Pinho Law makes no warranties about the accuracy or completeness
            of the information on this website. We are not liable for any
            damages arising from your use of this site.
          </p>

          {/* Review with counsel: Full terms should be reviewed by legal counsel */}
        </article>
      </Container>
    </section>
  );
}
