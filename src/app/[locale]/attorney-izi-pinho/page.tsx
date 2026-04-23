import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroPill, StarIcon } from "@/components/ui/hero-pill";
import { CtaSection } from "@/components/sections/cta-section";
import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { CASE_STATS, IZI } from "@/lib/constants";
import {
  iziPersonSchema,
  iziScholarlyArticleSchema,
} from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "attorney" });

  return createPageMetadata({
    title: t("name"),
    description: t("bio"),
    path: "/attorney-izi-pinho",
    locale: locale as Locale,
  });
}

export default async function AttorneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "attorney" });
  const tp = await getTranslations({ locale, namespace: "attorneyPage" });

  const personJsonLd = iziPersonSchema();
  const scholarshipJsonLd = iziScholarlyArticleSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipJsonLd) }}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Photo — navy-toned frame with radial vignette so the
                studio white blends into the cream page surface. */}
            <FadeIn className="lg:col-span-2">
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-navy via-navy-light to-navy shadow-2xl">
                  <Image
                    src="/images/izi-pinho.jpg"
                    alt={t("name")}
                    fill
                    className="object-cover object-top mix-blend-luminosity"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-navy/40 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(14,27,46,0.75)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,169,97,0.12)_0%,_transparent_60%)]" />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 aspect-[3/4] w-full rounded-[var(--radius-lg)] border border-gold/30" />
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.15} className="space-y-8 lg:col-span-3">
              <div>
                <span className="gold-rule" />
                <h1 className="mt-6 font-heading text-3xl font-semibold text-ink md:text-4xl">
                  {t("name")}
                </h1>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gold">
                  {t("title")}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-ink-muted">
                {t("bio")}
              </p>

              <p className="leading-relaxed text-ink-muted">
                {tp("extendedBio")}
              </p>

              {/* Case results band */}
              <div className="grid grid-cols-3 gap-6 rounded-[var(--radius-lg)] border border-gold/20 bg-white/60 p-6">
                <div>
                  <div className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                    {CASE_STATS.casesApproved}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                    {locale.startsWith("pt")
                      ? "Casos aprovados"
                      : locale.startsWith("es")
                        ? "Casos aprobados"
                        : "Cases approved"}
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                    {CASE_STATS.successRate}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                    {locale.startsWith("pt")
                      ? "Taxa de sucesso"
                      : locale.startsWith("es")
                        ? "Tasa de éxito"
                        : "Success rate"}
                  </div>
                </div>
                <div>
                  <div className="font-heading text-2xl font-semibold text-ink md:text-3xl">
                    {CASE_STATS.clientsServed}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-muted">
                    {locale.startsWith("pt")
                      ? "Clientes atendidos"
                      : locale.startsWith("es")
                        ? "Clientes atendidos"
                        : "Clients served"}
                  </div>
                </div>
              </div>

              {/* AILA membership feature pill */}
              <HeroPill
                icon={<StarIcon />}
                text={
                  locale.startsWith("pt")
                    ? "Membro AILA desde 2019 — American Immigration Lawyers Association"
                    : locale.startsWith("es")
                      ? "Miembro AILA desde 2019 — American Immigration Lawyers Association"
                      : "AILA Member since 2019 — American Immigration Lawyers Association"
                }
                className="group mt-4"
              />

              {/* Credentials */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("credentialsTitle")}
                </h2>
                <ul className="space-y-3 text-sm text-ink-muted">
                  <li className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    Florida Bar #{IZI.barNumber}
                  </li>
                  {IZI.education.map((e) => (
                    <li key={e.institution} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>
                        {e.institution} — {e.degree}
                        {e.honors ? `, ${e.honors}` : ""} ({e.year})
                      </span>
                    </li>
                  ))}
                  {IZI.memberships.map((m) => (
                    <li key={m.name} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {"url" in m && m.url ? (
                        <a
                          href={m.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold"
                        >
                          {m.name}
                          {"since" in m && m.since ? ` (since ${m.since})` : ""}
                        </a>
                      ) : (
                        <>
                          {m.name}
                          {"since" in m && m.since ? ` (since ${m.since})` : ""}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified professional profiles — visible to AI crawlers
                  and users. Maps 1:1 to the sameAs array in the Person
                  JSON-LD schema. */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {locale.startsWith("pt")
                    ? "Perfis Profissionais Verificados"
                    : locale.startsWith("es")
                      ? "Perfiles Profesionales Verificados"
                      : "Verified Professional Profiles"}
                </h2>
                <ul className="grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
                  {[
                    { label: "Florida Bar", url: "https://www.floridabar.org/about/section/profile/?num=126610" },
                    { label: "LinkedIn (Izi)", url: "https://www.linkedin.com/in/izipinho" },
                    { label: "LinkedIn (Pinho Law)", url: "https://www.linkedin.com/company/pinho-law" },
                    { label: "Instagram (Izi)", url: "https://www.instagram.com/izipinho/" },
                    { label: "Instagram (Pinho Law)", url: "https://www.instagram.com/pinholaw/" },
                    { label: "Facebook", url: "https://www.facebook.com/PinhoLaw/" },
                    { label: "YouTube", url: "https://www.youtube.com/channel/UC80Tg-_H-rGdz2_r__U1Hpw" },
                    { label: "TikTok (@pinholaw)", url: "https://www.tiktok.com/@pinholaw" },
                    { label: "TikTok (@pinho.law)", url: "https://www.tiktok.com/@pinho.law" },
                    { label: "Avvo", url: "https://www.avvo.com/attorneys/32835-fl-izi-pinho-4868666.html" },
                    { label: "LawInfo", url: "https://www.lawinfo.com/lawfirm/florida/orlando/pinho-law-pllc/59389424-831a-4e40-87f1-7dc72a5bab9c.html" },
                    { label: "My Local Lawyer", url: "https://mylocallawyer.org/lawyers/izi-pinho/" },
                    { label: "Lawful.com", url: "https://lawful.com/fl/orlando/corporate-law-attorneys/pinho-law--pllc-y7p60nJOr" },
                    { label: "Experience.com", url: "https://www.experience.com/reviews/izi-7925992" },
                  ].map((p) => (
                    <li key={p.url}>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer me"
                        className="inline-flex items-center gap-1.5 hover:text-gold"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {p.label}
                        <span className="text-[10px] text-ink-muted/50">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("languagesTitle")}
                </h2>
                <div className="flex gap-4 text-sm text-ink-muted">
                  <span>English</span>
                  <span className="text-border">|</span>
                  <span>Português</span>
                  <span className="text-border">|</span>
                  <span>Español</span>
                </div>
              </div>

              {/* Education & Background */}
              <div className="space-y-4 border-t border-border pt-8">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  {tp("educationTitle")}
                </h2>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {tp("educationDescription")}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Awards Wall */}
      <section className="border-t border-border bg-warm-gray py-20">
        <Container>
          <FadeIn>
            <span className="gold-rule" />
            <h2 className="mt-6 font-heading text-2xl font-semibold text-ink md:text-3xl">
              {locale.startsWith("pt")
                ? "Reconhecimento"
                : locale.startsWith("es")
                  ? "Reconocimiento"
                  : "Recognition"}
            </h2>
          </FadeIn>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IZI.awards.map((a, i) => (
              <FadeIn
                key={`${a.name}-${a.year}`}
                delay={i * 0.04}
              >
                <li className="flex h-full flex-col rounded-[var(--radius-lg)] border border-gold/20 bg-white p-5">
                  <span className="text-xs font-medium uppercase tracking-wider text-gold">
                    {a.year}
                  </span>
                  <span className="mt-2 text-sm leading-snug text-ink">
                    {a.name}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </Container>
      </section>

      {/* Published Scholarship — Harvard citation moat */}
      <section className="border-t border-border bg-ink py-20 text-cream">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-2">
              <span className="gold-rule" />
              <h2 className="mt-6 font-heading text-2xl font-semibold md:text-3xl">
                {locale.startsWith("pt")
                  ? "Publicações Acadêmicas"
                  : locale.startsWith("es")
                    ? "Publicaciones Académicas"
                    : "Published Scholarship"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {locale.startsWith("pt")
                  ? "Autora publicada no Stetson Law Review, citada pela Harvard Law School e outras três publicações jurídicas de elite."
                  : locale.startsWith("es")
                    ? "Autora publicada en Stetson Law Review, citada por Harvard Law School y otras tres revistas jurídicas de élite."
                    : "Published author in Stetson Law Review, cited by Harvard Law School and three additional top-tier law journals."}
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-3">
              <article className="rounded-[var(--radius-lg)] border border-gold/30 bg-ink p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  {IZI.scholarlyArticle.citation} ({IZI.scholarlyArticle.year})
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold leading-snug md:text-2xl">
                  <a
                    href={IZI.scholarlyArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold"
                  >
                    {IZI.scholarlyArticle.name}
                  </a>
                </h3>
                <div className="mt-6 space-y-3 border-t border-cream/10 pt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-cream/50">
                    {locale.startsWith("pt")
                      ? "Citada em"
                      : locale.startsWith("es")
                        ? "Citada en"
                        : "Cited by"}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {IZI.scholarlyArticle.citedBy.map((c) => (
                      <li key={c.name}>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cream/80 hover:text-gold"
                        >
                          {c.name} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
