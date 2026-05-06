import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { FIRM, SITE, TEAM } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

type L = "pt" | "en" | "es";

// /about page — full founding story, mission, timeline, team, affiliations,
// per Block 2.11 + Block 5 of the May 2026 PLwebsite audit. Year refs use
// 2017 (existing constant) — confirm with firm before publishing.

const COPY = {
  pt: {
    title: "Sobre a Pinho Law | Pinho Law",
    description:
      "Conheça o Pinho Law: escritório fundado em 2017 por Dra. Izi Pinho. Imigração, direito empresarial e imobiliário em Orlando, FL. Atendimento em PT/EN/ES.",
    breadcrumb: "Sobre",
    eyebrow: "Sobre a Pinho Law",
    h1: "Um escritório fundado com propósito — construído um caso por vez.",
    storyTitle: "Nossa História",
    storyP1:
      "O Pinho Law foi fundado em 2017 por Dra. Izi Pinho com uma convicção clara: representação jurídica de qualidade deve ser acessível a todos — independentemente de idioma, origem ou complexidade da situação.",
    storyP2:
      "O que começou como um escritório boutique de imigração cresceu para abranger direito empresarial e imobiliário — uma expansão natural, porque clientes que imigram também constroem negócios, investem e acumulam patrimônio. Para servi-los integralmente, precisávamos dominar os dois mundos.",
    storyP3:
      "Hoje, com sede em Orlando e atendendo clientes em toda a Flórida e internacionalmente, o Pinho Law combina a atenção personalizada de um escritório boutique com a profundidade técnica de advogados premiados e experientes.",
    missionTitle: "Nossa Missão",
    missionBody:
      "Nossa missão é direta: orientar cada cliente com clareza, integridade e estratégia — em português, inglês ou espanhol — para que nenhuma barreira de idioma ou complexidade jurídica se interponha entre você e o resultado que você merece.",
    timelineTitle: "Linha do tempo",
    timeline: [
      { year: "2017", event: "Pinho Law fundada em Orlando, FL" },
      { year: "2019", event: "Dra. Izi torna-se membro da AILA (American Immigration Lawyers Association)" },
      { year: "2021", event: "Primeiro reconhecimento Best Lawyers® Ones to Watch" },
      { year: "2022", event: "Dra. Izi nomeada Mulher do Ano (Orlando Magazine) + 40 Under 40 (Orlando Business Journal)" },
      { year: "2023", event: "Expansão para direito empresarial e imobiliário" },
      { year: "2024", event: "Mais de 1.000 clientes atendidos" },
      { year: "2026", event: "Best Lawyers® pelo 6º ano consecutivo · 500+ casos aprovados" },
    ],
    diffTitle: "O que nos diferencia",
    diff: [
      "Atendimento trilíngue em português, inglês e espanhol",
      "Expertise integrada em imigração, direito empresarial e imobiliário — sem precisar contratar três escritórios diferentes",
      "Comunicação ágil: resposta em até um dia útil",
      "Estratégia personalizada para cada caso",
      "Fundada em 2017: quase uma década de resultados na Flórida",
    ],
    teamTitle: "Equipe",
    teamSub:
      "Uma equipe construída para atender com atenção, competência e respeito pela sua história.",
    teamCta: "Conhecer a equipe completa",
    affiliationsTitle: "Associações",
    affiliations: [
      "Florida Bar — licenciada (Florida Bar #126610)",
      "AILA — American Immigration Lawyers Association (membro desde 2019)",
      "Best Lawyers® — Ones to Watch (2021–2026)",
    ],
    contactTitle: "Endereço & Contato",
  },
  en: {
    title: "About Pinho Law | Pinho Law",
    description:
      "Learn about Pinho Law: a firm founded in 2017 by Dra. Izi Pinho. Immigration, business and real estate law in Orlando, FL. Service in PT/EN/ES.",
    breadcrumb: "About",
    eyebrow: "About Pinho Law",
    h1: "A firm founded with purpose — built one case at a time.",
    storyTitle: "Our Story",
    storyP1:
      "Pinho Law was founded in 2017 by Dra. Izi Pinho with a clear conviction: that quality legal representation must be accessible to everyone — regardless of language, background, or the complexity of the situation.",
    storyP2:
      "What began as a boutique immigration firm grew to encompass business law and real estate — a natural expansion, because clients who immigrate also build businesses, invest, and accumulate assets. To serve them fully, we needed to master both worlds.",
    storyP3:
      "Today, headquartered in Orlando and serving clients across Florida and internationally, Pinho Law combines the personalized attention of a boutique firm with the technical depth of award-winning, experienced attorneys.",
    missionTitle: "Our Mission",
    missionBody:
      "Our mission is straightforward: to guide every client with clarity, integrity, and strategy — in Portuguese, English, or Spanish — so that no language barrier or legal complexity stands between you and the outcome you deserve.",
    timelineTitle: "Timeline",
    timeline: [
      { year: "2017", event: "Pinho Law founded in Orlando, FL" },
      { year: "2019", event: "Dra. Izi joins AILA (American Immigration Lawyers Association)" },
      { year: "2021", event: "First Best Lawyers® Ones to Watch recognition" },
      { year: "2022", event: "Dra. Izi named Woman of the Year (Orlando Magazine) + 40 Under 40 (Orlando Business Journal)" },
      { year: "2023", event: "Expansion into business law and real estate" },
      { year: "2024", event: "1,000+ clients served" },
      { year: "2026", event: "Best Lawyers® for the 6th consecutive year · 500+ approved cases" },
    ],
    diffTitle: "What Sets Us Apart",
    diff: [
      "Trilingual service in Portuguese, English, and Spanish",
      "Integrated expertise in immigration, business, and real estate law — no need to hire three separate firms",
      "Fast communication: response within one business day",
      "Tailored strategy for every case",
      "Founded in 2017: nearly a decade of results in Florida",
    ],
    teamTitle: "Team",
    teamSub:
      "A team built to serve with attention, competence, and respect for your story.",
    teamCta: "Meet the full team",
    affiliationsTitle: "Affiliations",
    affiliations: [
      "Florida Bar — licensed (Florida Bar #126610)",
      "AILA — American Immigration Lawyers Association (member since 2019)",
      "Best Lawyers® — Ones to Watch (2021–2026)",
    ],
    contactTitle: "Address & Contact",
  },
  es: {
    title: "Acerca de Pinho Law | Pinho Law",
    description:
      "Conozca Pinho Law: firma fundada en 2017 por la Abogada Izi Pinho. Inmigración, derecho empresarial e inmobiliario en Orlando, FL. Atención en PT/EN/ES.",
    breadcrumb: "Acerca de",
    eyebrow: "Acerca de Pinho Law",
    h1: "Una firma fundada con propósito — construida un caso a la vez.",
    storyTitle: "Nuestra Historia",
    storyP1:
      "Pinho Law fue fundada en 2017 por la Abogada Izi Pinho con una convicción clara: la representación legal de calidad debe ser accesible para todos — sin importar idioma, origen o complejidad de la situación.",
    storyP2:
      "Lo que comenzó como una firma boutique de inmigración creció hasta abarcar derecho empresarial e inmobiliario — una expansión natural, porque los clientes que inmigran también construyen negocios, invierten y acumulan patrimonio. Para servirlos integralmente, necesitábamos dominar ambos mundos.",
    storyP3:
      "Hoy, con sede en Orlando y atendiendo clientes en toda Florida e internacionalmente, Pinho Law combina la atención personalizada de una firma boutique con la profundidad técnica de abogados premiados y experimentados.",
    missionTitle: "Nuestra Misión",
    missionBody:
      "Nuestra misión es directa: guiar a cada cliente con claridad, integridad y estrategia — en portugués, inglés o español — para que ninguna barrera de idioma o complejidad legal se interponga entre usted y el resultado que merece.",
    timelineTitle: "Cronología",
    timeline: [
      { year: "2017", event: "Pinho Law fundada en Orlando, FL" },
      { year: "2019", event: "La Abogada Izi se une a AILA (American Immigration Lawyers Association)" },
      { year: "2021", event: "Primer reconocimiento Best Lawyers® Ones to Watch" },
      { year: "2022", event: "La Abogada Izi nombrada Mujer del Año (Orlando Magazine) + 40 Under 40 (Orlando Business Journal)" },
      { year: "2023", event: "Expansión a derecho empresarial e inmobiliario" },
      { year: "2024", event: "Más de 1.000 clientes atendidos" },
      { year: "2026", event: "Best Lawyers® por 6º año consecutivo · 500+ casos aprobados" },
    ],
    diffTitle: "Qué nos diferencia",
    diff: [
      "Atención trilingüe en portugués, inglés y español",
      "Experiencia integrada en inmigración, derecho empresarial e inmobiliario — sin necesidad de contratar tres firmas distintas",
      "Comunicación rápida: respuesta en un día hábil",
      "Estrategia personalizada para cada caso",
      "Fundada en 2017: casi una década de resultados en Florida",
    ],
    teamTitle: "Equipo",
    teamSub:
      "Un equipo construido para servir con atención, competencia y respeto por su historia.",
    teamCta: "Conocer al equipo completo",
    affiliationsTitle: "Afiliaciones",
    affiliations: [
      "Florida Bar — licenciada (Florida Bar #126610)",
      "AILA — American Immigration Lawyers Association (miembro desde 2019)",
      "Best Lawyers® — Ones to Watch (2021–2026)",
    ],
    contactTitle: "Dirección y Contacto",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = COPY[locale as L];
  return createPageMetadata({
    title: c.title,
    description: c.description,
    path: "/about",
    locale: locale as Locale,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;
  const c = COPY[key];

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: `${SITE.url}/${key}` },
    { name: c.breadcrumb, url: `${SITE.url}/${key}/about` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbLd} />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-3xl">
              <span className="gold-rule" />
              <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gold">
                {c.eyebrow}
              </p>
              <h1 className="mt-3 font-heading text-3xl font-semibold text-ink md:text-5xl">
                {c.h1}
              </h1>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.storyTitle}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted md:text-lg">
              <p>{c.storyP1}</p>
              <p>{c.storyP2}</p>
              <p>{c.storyP3}</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.missionTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
              {c.missionBody}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-white py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.timelineTitle}
            </h2>
            <ol className="mt-10 relative border-l-2 border-gold/30">
              {c.timeline.map((item, i) => (
                <li key={i} className="ml-6 mb-8 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-cream" />
                  <p className="font-heading text-lg font-semibold text-gold">
                    {item.year}
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-ink-muted">
                    {item.event}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </Container>
      </section>

      {/* What Sets Us Apart */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.diffTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {c.diff.map((item) => (
                <li key={item} className="flex gap-4 text-base text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-border bg-white py-20">
        <Container>
          <FadeIn className="mx-auto max-w-4xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.teamTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted md:text-lg">
              {c.teamSub}
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map((member) => (
                <div
                  key={member.id}
                  className="rounded-[var(--radius-md)] border border-border bg-cream p-5 text-center"
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-gold/30 bg-gradient-to-br from-navy to-navy-light">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-ink-muted">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-dark"
              >
                {c.teamCta} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Affiliations */}
      <section className="border-t border-border bg-cream py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-ink md:text-4xl">
              {c.affiliationsTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {c.affiliations.map((item) => (
                <li key={item} className="flex gap-4 text-base text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* Contact */}
      <section className="border-t border-border bg-white py-16">
        <Container>
          <FadeIn className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              {c.contactTitle}
            </h2>
            <address className="mt-5 not-italic text-base leading-relaxed text-ink-muted">
              {FIRM.address.street}, {FIRM.address.suite}
              <br />
              {FIRM.address.city}, {FIRM.address.state} {FIRM.address.zip}
              <br />
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="text-gold hover:underline"
              >
                {FIRM.phone}
              </a>{" "}
              ·{" "}
              <a
                href={`https://wa.me/${FIRM.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                WhatsApp
              </a>{" "}
              ·{" "}
              <a
                href={`mailto:${FIRM.infoEmail}`}
                className="text-gold hover:underline"
              >
                {FIRM.infoEmail}
              </a>
            </address>
          </FadeIn>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
