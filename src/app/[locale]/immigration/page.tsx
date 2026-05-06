import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServiceHubTemplate,
  type ServiceHubContent,
  type L,
} from "@/components/service/ServiceHubTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration";

const DATA: Record<L, ServiceHubContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    breadcrumbLabel: "Imigração",
    eyebrow: "Prática",
    h1: "Direito de Imigração nos EUA para Brasileiros",
    lede:
      "500+ casos aprovados, 90% de taxa de sucesso, 9 anos em Orlando. Atendemos em português, inglês e espanhol — do primeiro visto à cidadania.",
    stats: [
      { value: "500+", label: "Casos aprovados" },
      { value: "90%", label: "Aprovação" },
      { value: "CURRENT", label: "Fila Brasil (EB-1/2/3)" },
      { value: "PT/EN/ES", label: "Trilíngue" },
    ],
    groups: [
      {
        title: "Vistos de Imigrante (Green Cards)",
        intro:
          "Caminhos permanentes de residência: baseados em emprego, investimento, família, casamento ou cidadania.",
        cards: [
          { title: "EB-1 — Habilidade Extraordinária", body: "EB-1A (auto-petição), EB-1B (pesquisador), EB-1C (executivo multinacional).", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-2 — Profissional com Grau Avançado", body: "Mestrado ou superior, ou bacharelado + 5 anos de experiência. Com PERM e oferta de emprego.", href: "/immigration/immigrant-visas/eb-2" },
          { title: "EB-2 NIW — National Interest Waiver", body: "Sem oferta de emprego, sem PERM, sem patrocinador. Brasileiros CURRENT em 2026.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-3 — Trabalhador Qualificado", body: "Com PERM e patrocínio de empregador.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5 — Green Card por Investimento", body: "US$ 800K (Rural/TEA) ou US$ 1,05M. Brasileiros 1,4 anos em média.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Casamento com Cidadão Americano", body: "10–13 meses. Data de prioridade sempre CURRENT.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Casamento com Residente Permanente (LPR)", body: "Categoria F-2A. Prazos conforme Visa Bulletin.", href: "/immigration/immigrant-visas/marriage-lpr" },
          { title: "Green Card Familiar", body: "Cônjuge, pais, filhos, irmãos.", href: "/immigration/immigrant-visas/family-green-card" },
          { title: "Cidadania Americana (N-400)", body: "3 anos (casado com USC) ou 5 anos. Brasil permite dupla cidadania.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Vistos Não-Imigrantes",
        intro: "Vistos temporários de trabalho, investimento e estudo.",
        cards: [
          { title: "L-1A — Transferência Executiva Intra-Empresa", body: "Para executivo/gerente. Rota direta ao EB-1C (sem PERM).", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "O-1 — Habilidade Extraordinária", body: "Sem cap, sem loteria.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "E-2 — Investidor Tratado", body: "⚠️ Brasil NÃO é signatário do tratado E-2. Brasileiros com dupla cidadania (italiana, portuguesa, espanhola, entre outras) podem qualificar. Entre em contato para avaliar seu perfil.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "H-1B — Ocupação Especializada (2026)", body: "Taxa US$ 100K + loteria. Considere O-1A como alternativa.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1 — Estudante", body: "SEVP + OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
          { title: "Extensão e Mudança de Status", body: "I-539 / I-129.", href: "/immigration/non-immigrant-visas/visa-extension" },
        ],
      },
    ],
    faq: [
      {
        q: "Quanto tempo leva um green card por casamento (CR-1/IR-1) com cidadão americano?",
        a: "Para casamento com cidadão americano via Adjustment of Status (já dentro dos EUA), tipicamente 10 a 13 meses do filing à aprovação. A data de prioridade é sempre CURRENT — não há fila no Visa Bulletin para essa categoria. Casos com RFE bem respondidos costumam aprovar em até 5 meses adicionais.",
      },
      {
        q: "Brasileiros estão na fila do EB-2 NIW em 2026?",
        a: "Não. Brasileiros estão CURRENT (sem fila) em EB-1, EB-2 NIW, EB-2 PERM e EB-3 no Visa Bulletin de abril de 2026. EB-5 também está CURRENT em todas as categorias Reservadas (Rural/TEA, Urbana/TEA, Infraestrutura). Esta janela é a melhor combinação de prazos para brasileiros desde 2018.",
      },
      {
        q: "Brasileiros podem aplicar para visto E-2 (Treaty Investor)?",
        a: "Não diretamente — Brasil NÃO é país signatário do tratado E-2. Brasileiros só qualificam com segunda cidadania de um país signatário (Portugal, Itália, Granada, Turquia, Espanha, etc.). Quem não tem segunda cidadania normalmente migra via L-1A, EB-5 ou EB-2 NIW.",
      },
      {
        q: "EB-2 NIW vs Trump Gold Card — qual escolher em 2026?",
        a: "EB-2 NIW continua sendo a rota mais sólida para profissionais brasileiros: auto-petição, sem oferta de emprego, sem PERM, baseada em mérito (Dhanasar 3-prong). O Trump Gold Card (proposto US$ 5M) ainda não tem regulamentação final em abril de 2026 e não substitui EB-2 NIW para a maioria dos casos. Avaliamos os dois caminhos na consulta.",
      },
      {
        q: "Naturalização americana — quando posso aplicar?",
        a: "5 anos como green card holder (residência contínua + presença física), ou 3 anos se casado(a) com cidadão americano. O Brasil permite dupla cidadania (Constituição Art. 12 §4 II) — você não perde a brasileira ao naturalizar como americano. Tempo médio do filing N-400 à juramentação: 6 a 12 meses.",
      },
      {
        q: "Como funciona a primeira consulta de imigração?",
        a: "Consulta com tarifa fixa de US$ 250, creditada ao caso se você prosseguir. Em 60 minutos a Dra. Izi avalia sua situação, mapeia caminhos viáveis (visto adequado, prazos, riscos) e você sai com plano por escrito + orçamento por matéria. Atendemos em PT/EN/ES — agende em pinho.law/consultation ou WhatsApp (407) 385-4144.",
      },
    ],
    faqTitle: "Perguntas Frequentes — Imigração",
    ctaLabel: "Agendar Avaliação Gratuita",
    ctaHref: "/consultation",
  },
  en: {
    locale: "en",
    slug: SLUG,
    breadcrumbLabel: "Immigration",
    eyebrow: "Practice",
    h1: "Immigration Law in the USA for Brazilians",
    lede:
      "500+ cases approved, 90% success rate, 9 years in Orlando. Counsel in Portuguese, English, and Spanish — first visa to citizenship.",
    stats: [
      { value: "500+", label: "Cases approved" },
      { value: "90%", label: "Success rate" },
      { value: "CURRENT", label: "Brazil queue" },
      { value: "PT/EN/ES", label: "Trilingual" },
    ],
    groups: [
      {
        title: "Immigrant Visas (Green Cards)",
        intro: "Permanent residence paths.",
        cards: [
          { title: "EB-1 — Extraordinary Ability", body: "EB-1A / EB-1B / EB-1C.", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-2 — Advanced Degree Professional", body: "Master's or bachelor's + 5 yrs experience. With PERM and employer sponsorship.", href: "/immigration/immigrant-visas/eb-2" },
          { title: "EB-2 NIW", body: "No job offer, no PERM, no sponsor. Brazilians CURRENT in 2026.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-3 — Skilled Worker", body: "With PERM and employer sponsorship.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5 — Investor Green Card", body: "$800K Rural/TEA or $1.05M. Brazilians 1.4-year avg.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Marriage to US Citizen", body: "10–13 months. Priority date CURRENT.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Marriage to LPR", body: "F-2A category.", href: "/immigration/immigrant-visas/marriage-lpr" },
          { title: "Family-Based Green Card", body: "Spouse, parents, children, siblings.", href: "/immigration/immigrant-visas/family-green-card" },
          { title: "US Citizenship (N-400)", body: "3 or 5 years. Brazil allows dual citizenship.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Non-Immigrant Visas",
        intro: "Temporary work, investment, and study visas.",
        cards: [
          { title: "L-1A — Intracompany Executive Transfer", body: "Direct EB-1C route (no PERM).", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "O-1 — Extraordinary Ability", body: "No cap, no lottery.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "E-2 — Treaty Investor", body: "⚠️ Brazil is NOT a signatory to the E-2 treaty. However, Brazilians with dual citizenship — Italian, Portuguese, Spanish, among others — may qualify. Contact us to evaluate your profile.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "H-1B — Specialty Occupation 2026", body: "$100K fee + lottery.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1 — Student", body: "OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
          { title: "Visa Extension + Change of Status", body: "I-539 / I-129.", href: "/immigration/non-immigrant-visas/visa-extension" },
        ],
      },
    ],
    faq: [
      {
        q: "How long does a marriage-based green card (CR-1/IR-1) to a US citizen take?",
        a: "For marriage to a US citizen via Adjustment of Status (already inside the US), typically 10 to 13 months from filing to approval. Priority date is always CURRENT — there is no Visa Bulletin queue for this category. Cases with well-responded RFEs usually approve within 5 additional months.",
      },
      {
        q: "Are Brazilians on a queue for EB-2 NIW in 2026?",
        a: "No. Brazilians are CURRENT (no queue) for EB-1, EB-2 NIW, EB-2 PERM, and EB-3 in the April 2026 Visa Bulletin. EB-5 is also CURRENT across all Reserved categories (Rural/TEA, Urban/TEA, Infrastructure). This window is the best combined timeline for Brazilians since 2018.",
      },
      {
        q: "Can Brazilians apply for an E-2 Treaty Investor visa?",
        a: "Not directly — Brazil is NOT an E-2 treaty country. Brazilians only qualify with second citizenship from a treaty country (Portugal, Italy, Grenada, Turkey, Spain, etc.). Without second citizenship, the typical paths are L-1A, EB-5, or EB-2 NIW.",
      },
      {
        q: "EB-2 NIW vs Trump Gold Card — which to choose in 2026?",
        a: "EB-2 NIW remains the most solid path for Brazilian professionals: self-petition, no job offer, no PERM, merit-based (Dhanasar 3-prong test). The proposed Trump Gold Card ($5M) does not have final regulations as of April 2026 and does not replace EB-2 NIW for most cases. We assess both paths during the consultation.",
      },
      {
        q: "US Naturalization — when can I apply?",
        a: "5 years as a green card holder (continuous residence + physical presence), or 3 years if married to a US citizen. Brazil allows dual citizenship (Constitution Art. 12 §4 II) — you do not lose Brazilian citizenship when naturalizing as American. Average N-400 filing-to-oath: 6 to 12 months.",
      },
      {
        q: "How does the first immigration consultation work?",
        a: "Consultation flat fee $250, credited to the case if you proceed. In 60 minutes Dra. Izi assesses your situation, maps viable paths (correct visa, timelines, risks), and you leave with a written plan + per-matter quote. We work in PT/EN/ES — book at pinho.law/consultation or WhatsApp (407) 385-4144.",
      },
    ],
    faqTitle: "Frequently Asked Questions — Immigration",
    ctaLabel: "Book Free Evaluation",
    ctaHref: "/consultation",
  },
  es: {
    locale: "es",
    slug: SLUG,
    breadcrumbLabel: "Inmigración",
    eyebrow: "Práctica",
    h1: "Derecho de Inmigración en EE.UU. para Brasileños",
    lede: "500+ casos aprobados, 90% éxito, 9 años en Orlando. Portugués, inglés, español.",
    stats: [
      { value: "500+", label: "Casos aprobados" },
      { value: "90%", label: "Tasa de éxito" },
      { value: "CURRENT", label: "Fila Brasil" },
      { value: "PT/EN/ES", label: "Trilingüe" },
    ],
    groups: [
      {
        title: "Visas de Inmigrante (Green Cards)",
        cards: [
          { title: "EB-1", body: "EB-1A / EB-1B / EB-1C.", href: "/immigration/immigrant-visas/eb-1" },
          { title: "EB-2 — Profesional con Grado Avanzado", body: "Maestría o licenciatura + 5 años. Con PERM y oferta de empleo.", href: "/immigration/immigrant-visas/eb-2" },
          { title: "EB-2 NIW", body: "Sin oferta, sin PERM. Brasileños CURRENT en 2026.", href: "/immigration/immigrant-visas/eb-2-niw", featured: true },
          { title: "EB-3", body: "Con PERM.", href: "/immigration/immigrant-visas/eb-3" },
          { title: "EB-5", body: "US$ 800K Rural/TEA.", href: "/immigration/immigrant-visas/eb-5" },
          { title: "Matrimonio con USC", body: "10–13 meses.", href: "/immigration/immigrant-visas/marriage-us-citizen" },
          { title: "Ciudadanía (N-400)", body: "3 o 5 años.", href: "/immigration/immigrant-visas/us-citizenship" },
        ],
      },
      {
        title: "Visas No Inmigrantes",
        cards: [
          { title: "L-1A — Transferencia Ejecutiva", body: "Ruta directa EB-1C (sin PERM).", href: "/immigration/non-immigrant-visas/l-1" },
          { title: "O-1 — Habilidad Extraordinaria", body: "Sin cupo, sin lotería.", href: "/immigration/non-immigrant-visas/o-1" },
          { title: "E-2 — Inversionista de Tratado", body: "⚠️ Brasil NO es signatario del tratado E-2. Brasileños con doble ciudadanía (italiana, portuguesa, española) pueden calificar. Contáctenos para evaluar su perfil.", href: "/immigration/non-immigrant-visas/e-2" },
          { title: "H-1B 2026", body: "Tarifa US$ 100K + lotería.", href: "/immigration/non-immigrant-visas/h-1b" },
          { title: "F-1", body: "OPT + STEM OPT.", href: "/immigration/non-immigrant-visas/f-1" },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda un green card por matrimonio (CR-1/IR-1) con ciudadano estadounidense?",
        a: "Para matrimonio con ciudadano estadounidense vía Ajuste de Estatus (ya dentro de EE.UU.), típicamente 10 a 13 meses desde el filing hasta la aprobación. La fecha de prioridad siempre es CURRENT — no hay fila en el Visa Bulletin para esta categoría.",
      },
      {
        q: "¿Los brasileños están en cola para EB-2 NIW en 2026?",
        a: "No. Los brasileños están CURRENT (sin fila) en EB-1, EB-2 NIW, EB-2 PERM y EB-3 en el Visa Bulletin de abril 2026. EB-5 también está CURRENT en todas las categorías Reservadas (Rural/TEA, Urbana/TEA, Infraestructura).",
      },
      {
        q: "¿Pueden los brasileños aplicar a la visa E-2?",
        a: "No directamente — Brasil NO es país signatario del tratado E-2. Los brasileños solo califican con segunda ciudadanía de un país signatario (Portugal, Italia, Granada, Turquía, España, etc.). Sin segunda ciudadanía, las rutas típicas son L-1A, EB-5 o EB-2 NIW.",
      },
      {
        q: "EB-2 NIW vs Trump Gold Card — ¿cuál elegir en 2026?",
        a: "EB-2 NIW sigue siendo la ruta más sólida para profesionales brasileños: auto-petición, sin oferta de empleo, sin PERM, basada en mérito (Dhanasar 3-prong). El Trump Gold Card propuesto ($5M) no tiene regulaciones finales en abril 2026 y no reemplaza al EB-2 NIW para la mayoría de los casos.",
      },
      {
        q: "Naturalización americana — ¿cuándo puedo aplicar?",
        a: "5 años como residente permanente, o 3 años si está casado(a) con ciudadano estadounidense. Brasil permite doble ciudadanía — usted no pierde la brasileña al naturalizar como americano.",
      },
      {
        q: "¿Cómo funciona la primera consulta?",
        a: "Tarifa fija de US$ 250, acreditada al caso si decide continuar. En 60 minutos la Abogada Izi evalúa su situación y entrega un plan escrito con presupuesto por asunto. Atendemos en PT/EN/ES — reserve en pinho.law/consultation o WhatsApp (407) 385-4144.",
      },
    ],
    faqTitle: "Preguntas Frecuentes — Inmigración",
    ctaLabel: "Agendar Evaluación Gratuita",
    ctaHref: "/consultation",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({ title: `${c.h1} | Pinho Law`, description: c.lede, path: `/${SLUG}`, locale: locale as Locale });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServiceHubTemplate content={DATA[locale as L]} />;
}
