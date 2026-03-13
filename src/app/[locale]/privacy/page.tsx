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
    title: "Privacy Policy",
    description: "Pinho Law privacy policy — how we collect, use, and protect your information.",
    path: "/privacy",
    locale: locale as Locale,
    noIndex: true,
  });
}

export default async function PrivacyPage({
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
            Privacy Policy
          </h1>
          <p className="text-sm text-ink-muted">Last updated: March 2026</p>

          <h2>Information We Collect</h2>
          <p>
            When you use our website or contact us, we may collect personal
            information such as your name, email address, phone number, and
            details about your legal matter. We collect this information when
            you submit a contact form, schedule a consultation, or communicate
            with us directly.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your inquiries,
            schedule consultations, provide legal services, and communicate
            with you about your matter. We do not sell your personal
            information to third parties.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information. However, no method of
            transmission over the Internet is completely secure.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at contact@pinho.law.
          </p>

          {/* Review with counsel: Full privacy policy should be reviewed by legal counsel */}
        </article>
      </Container>
    </section>
  );
}
