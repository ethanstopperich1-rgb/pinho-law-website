import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/sections/cta-section";
import { CASE_STATS } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

// Full FAQ index — combines:
//   1. The 8 homepage Q/As (faq.items via i18n)
//   2. 18 expanded Q/As (Block 3.20 of the May 2026 PLwebsite audit) split
//      into two categories: Business & Investment, Work & Investment Visas.
// All emitted as a single FAQPage JSON-LD with semantic <dl>/<dt>/<dd>
// markup matching the cssSelector in faqSchema's SpeakableSpecification.

type L = "pt" | "en" | "es";

const EXPANDED: Record<
  L,
  {
    biz: { title: string; items: { q: string; a: string }[] };
    visa: { title: string; items: { q: string; a: string }[] };
  }
> = {
  pt: {
    biz: {
      title: "Negócios & Investimentos",
      items: [
        {
          q: "Posso abrir uma empresa nos EUA sem visto de residência?",
          a: "Sim. Estrangeiros não-residentes podem abrir uma LLC nos EUA sem visto de trabalho ou Green Card. O processo é 100% remoto. Cuidamos de tudo: Articles of Organization, EIN da Receita Federal Americana (IRS), Operating Agreement e abertura de conta bancária. Importante: desde janeiro de 2024, toda LLC deve registrar Beneficial Ownership Information (BOI) no FinCEN em até 90 dias da formação.",
        },
        {
          q: "Qual a diferença entre LLC, C-Corp e S-Corp para brasileiros?",
          a: "LLC: pass-through, flexível, sem exigência de residência — ideal para a maioria dos brasileiros. C-Corp (geralmente Delaware): exigida para captar investimento institucional ou IPO; sujeita a dupla tributação corporativa. S-Corp: NÃO está disponível quando qualquer sócio é estrangeiro não-residente — descartada para a maioria dos brasileiros.",
        },
        {
          q: "Brasileiro pode ser membro de uma LLC americana?",
          a: "Sim. Não há exigência de cidadania ou residência para ser membro de uma LLC na Flórida. Estrangeiros não-residentes podem ter participação total ou parcial em uma LLC americana.",
        },
        {
          q: "Preciso de Social Security Number (SSN) para abrir empresa nos EUA?",
          a: "Não. É possível obter o EIN (Employer Identification Number) do IRS sem SSN — o processo é feito via formulário específico (Form SS-4) e pode ser concluído remotamente.",
        },
        {
          q: "O que é FIRPTA e como afeta compradores estrangeiros de imóveis?",
          a: "FIRPTA (Foreign Investment in Real Property Tax Act) retém 15% do preço de venda quando o vendedor é estrangeiro não-residente. Em vendas residenciais entre US$ 300K e US$ 1M com comprador que vai morar no imóvel, retém 10%. Acima de US$ 1M, sempre 15%. A retenção é antecipação de imposto — é possível pedir Withholding Certificate ao IRS para reduzir antes do closing.",
        },
        {
          q: "Meu testamento brasileiro vale para bens que tenho nos EUA?",
          a: "Não necessariamente. Nos EUA, propriedade imóvel é regida pela lei do estado onde está localizada (lex situs). Um testamento feito no Brasil pode não ser reconhecido ou exigir homologação. O Revocable Living Trust é a estrutura mais recomendada para garantir que seus bens nos EUA sejam transferidos conforme sua vontade, sem passar pelo probate.",
        },
        {
          q: "O que é o FBAR e quem precisa apresentar?",
          a: "O FBAR (Foreign Bank Account Report — FinCEN Form 114) é a declaração obrigatória de contas bancárias no exterior para pessoas com obrigações fiscais nos EUA. Quem teve mais de US$ 10.000 em contas estrangeiras (somadas) em qualquer momento do ano deve apresentar. Penalidades por não-cumprimento podem ser severas — desde multas civis até criminais em casos de evasão deliberada.",
        },
        {
          q: "Contrato assinado no Brasil é executável nos EUA?",
          a: "Depende do que o contrato regula e como foi redigido. Contratos envolvendo bens, serviços ou relações trabalhistas nos EUA devem ser preparados ou revisados sob a lei americana — particularmente a lei do estado onde a empresa opera. Recomendamos sempre que contratos bilíngues sejam revisados por um advogado americano antes da assinatura.",
        },
        {
          q: "Qual a melhor estrutura para um investidor brasileiro nos EUA?",
          a: "Depende do objetivo. Para a maioria dos investidores brasileiros, a LLC é o ponto de partida — flexível, tributação pass-through, sem exigência de residência. Para quem busca rodadas de investimento ou IPO, o caminho é a C-Corp (Delaware). S-Corp não é opção para não-residentes. Em investimento imobiliário, o padrão é LLC holding na Flórida + LLC Delaware por imóvel + §871(d) election + Trust offshore para mitigar imposto sobre herança.",
        },
      ],
    },
    visa: {
      title: "Vistos de Trabalho & Investimento",
      items: [
        {
          q: "Qual a diferença entre EB-2 NIW e EB-1A?",
          a: "Os dois são caminhos para Green Card sem necessidade de patrocinador empregador. O EB-2 NIW exige demonstrar que seu trabalho é de interesse nacional dos EUA (Dhanasar 3-prong). O EB-1A exige comprovar habilidade extraordinária com reconhecimento sustentado na sua área — prêmios, publicações, liderança notável (Kazarian two-step). Aprovação geral: EB-2 NIW ~67%, EB-1A ~30%. O melhor caminho depende do seu perfil e avaliamos isso na consulta.",
        },
        {
          q: "Brasileiro pode tirar visto E-2?",
          a: "Brasil NÃO é signatário do tratado E-2. Porém, brasileiros com dupla cidadania — italiana, portuguesa, espanhola, turca, granadina, entre outras — podem qualificar. Se você tem dupla cidadania, agende uma avaliação para analisarmos seu perfil.",
        },
        {
          q: "O que é o visto L-1A e para quem é?",
          a: "L-1A é o visto de transferência intra-empresa para executivos e gerentes. Exige 1+ ano de trabalho na empresa estrangeira nos últimos 3 anos, em função executiva ou gerencial, com transferência para subsidiária ou afiliada nos EUA. É uma das rotas mais limpas para empreendedores brasileiros: validade inicial 3 anos (1 ano para nova empresa), extensível até 7 anos. Caminho direto ao EB-1C (sem PERM) para o green card.",
        },
        {
          q: "Como funciona o Green Card por investimento EB-5?",
          a: "EB-5 é o Green Card por investimento. Em 2026, o investimento mínimo é US$ 800.000 em zona TEA (Targeted Employment Area — Rural ou Urbana) ou US$ 1.050.000 fora. O investimento precisa criar 10 empregos em tempo integral para trabalhadores americanos. Brasileiros estão CURRENT em todas as categorias TEA Reservadas no Visa Bulletin de abril de 2026 — janela mais favorável desde 2018.",
        },
        {
          q: "Posso trabalhar nos EUA com visto F-1 de estudante?",
          a: "Sim, com restrições. F-1 permite: (1) on-campus part-time durante o semestre (até 20h/semana); (2) CPT (Curricular Practical Training) integrado ao currículo; (3) OPT (Optional Practical Training) por 12 meses após conclusão; (4) STEM OPT por +24 meses se diploma for em STEM. Trabalho fora desses parâmetros invalida o status F-1.",
        },
        {
          q: "O que é Adjustment of Status e quando posso aplicar?",
          a: "Adjustment of Status (AOS, formulário I-485) é o processo de obter green card sem sair dos EUA. Você qualifica quando: (1) está nos EUA em status válido; (2) tem petição de imigrante (I-130, I-140 etc.) aprovada; (3) tem data de prioridade current no Visa Bulletin. Para casamento com cidadão americano e EB-2 NIW (Brasil CURRENT em 2026), AOS é o caminho padrão.",
        },
        {
          q: "Preciso de advogado para fazer Adjustment of Status?",
          a: "Tecnicamente, não — o I-485 pode ser preenchido sozinho. Na prática, um RFE mal respondido ou erro de elegibilidade pode causar negação com consequências graves (inclusive deportação). Petições preparadas por advogado têm taxa de aprovação significativamente maior. Para casos com qualquer complexidade — fora-de-status histórico, marriage fraud red flags, I-485 concorrente com I-140 — counsel é essencial.",
        },
        {
          q: "O que acontece se eu ficar fora de status nos EUA?",
          a: "Permanência indevida (overstay) gera consequências escalonadas. Mais de 180 dias fora de status = bar de 3 anos para retornar. Mais de 1 ano = bar de 10 anos. Ficar fora de status complica AOS e pode exigir waiver (I-601A). Se você está fora de status, NÃO saia dos EUA antes de consultar um advogado — sair pode ativar o bar.",
        },
        {
          q: "Brasileiro com dupla cidadania europeia pode tirar visto E-2?",
          a: "Sim — esta é a rota mais comum para brasileiros qualificarem ao E-2. Países da União Europeia (Portugal, Itália, Espanha, Alemanha, etc.), Reino Unido, Turquia, Granada, entre outros, têm tratado E-2 com os EUA. Se você é cidadão brasileiro E também cidadão de um país signatário, qualifica. O passaporte usado para o pedido E-2 deve ser do país signatário.",
        },
      ],
    },
  },
  en: {
    biz: {
      title: "Business & Investment",
      items: [
        {
          q: "Can I open a company in the U.S. without a residency visa?",
          a: "Yes. Foreign non-residents can open an LLC in the U.S. without a work visa or Green Card. The process is 100% remote. We handle everything: Articles of Organization, EIN from the IRS, Operating Agreement, and bank account setup. Important: since January 2024, every LLC must file a Beneficial Ownership Information (BOI) report with FinCEN within 90 days of formation.",
        },
        {
          q: "What is the difference between LLC, C-Corp, and S-Corp for Brazilians?",
          a: "LLC: pass-through, flexible, no residency requirement — ideal for most Brazilians. C-Corp (typically Delaware): required for institutional fundraising or IPO; subject to corporate double taxation. S-Corp: NOT available when any owner is a non-resident foreigner — ruled out for most Brazilians.",
        },
        {
          q: "Can a Brazilian be a member of a U.S. LLC?",
          a: "Yes. There is no citizenship or residency requirement to be a member of an LLC in Florida. Foreign non-residents can hold full or partial membership in a U.S. LLC.",
        },
        {
          q: "Do I need a Social Security Number (SSN) to open a company in the U.S.?",
          a: "No. It is possible to obtain an EIN (Employer Identification Number) from the IRS without an SSN — the process is done via a specific form (Form SS-4) and can be completed remotely.",
        },
        {
          q: "What is FIRPTA and how does it affect foreign real estate buyers?",
          a: "FIRPTA (Foreign Investment in Real Property Tax Act) withholds 15% of the gross sale price when the seller is a non-resident foreigner. For residential sales between $300K and $1M where the buyer will occupy the property, the rate drops to 10%. Above $1M, always 15%. The withholding is a prepayment of tax — you can apply for a Withholding Certificate from the IRS to reduce the withholding before closing.",
        },
        {
          q: "Is my Brazilian will valid for assets I own in the U.S.?",
          a: "Not necessarily. In the U.S., real property is governed by the law of the state where it is located (lex situs). A will made in Brazil may not be recognized or may require a homologation process. A Revocable Living Trust is the most recommended structure to ensure your U.S. assets are transferred according to your wishes, without going through probate.",
        },
        {
          q: "What is the FBAR and who must file it?",
          a: "The FBAR (Foreign Bank Account Report — FinCEN Form 114) is the mandatory disclosure of foreign bank accounts for persons with U.S. tax obligations. Anyone with more than $10,000 in foreign accounts (combined) at any point during the year must file. Non-compliance can result in severe penalties — civil and even criminal in cases of willful evasion.",
        },
        {
          q: "Is a contract signed in Brazil enforceable in the U.S.?",
          a: "It depends on what the contract governs and how it was drafted. Contracts involving goods, services, or employment relationships in the U.S. must be prepared or reviewed under U.S. law — particularly the law of the state where the company operates. We always recommend having bilingual contracts reviewed by a U.S. attorney before signing.",
        },
        {
          q: "What is the best structure for a Brazilian investor in the U.S.?",
          a: "It depends on the objective. For most Brazilian investors, the LLC is the starting point — flexible, pass-through taxation, no residency requirement. For those seeking investment rounds or an IPO, a C-Corp (Delaware) is the path. S-Corp is not an option for non-residents. For real estate investment, the standard is a Florida holding LLC + per-property Delaware LLC + §871(d) election + offshore Trust to mitigate estate tax.",
        },
      ],
    },
    visa: {
      title: "Work & Investment Visas",
      items: [
        {
          q: "What is the difference between EB-2 NIW and EB-1A?",
          a: "Both are paths to a Green Card without needing an employer sponsor. The EB-2 NIW requires demonstrating that your work is in the national interest of the U.S. (Dhanasar 3-prong). The EB-1A requires proving extraordinary ability with sustained recognition in your field — awards, publications, notable leadership (Kazarian two-step). General approval: EB-2 NIW ~67%, EB-1A ~30%. The best path depends on your profile and we assess this during the consultation.",
        },
        {
          q: "Can a Brazilian get an E-2 visa?",
          a: "Brazil is NOT a signatory to the E-2 treaty. However, Brazilians with dual citizenship — Italian, Portuguese, Spanish, Turkish, Grenadian, among others — may qualify. If you hold dual citizenship, schedule an evaluation so we can assess your profile.",
        },
        {
          q: "What is the L-1A visa and who is it for?",
          a: "L-1A is the intracompany transfer visa for executives and managers. It requires 1+ year working at the foreign company in the past 3 years, in an executive or managerial role, transferring to a U.S. subsidiary or affiliate. One of the cleanest paths for Brazilian entrepreneurs: initial validity 3 years (1 year for new entities), extendable to 7 years. Direct route to EB-1C (no PERM) for the green card.",
        },
        {
          q: "How does the EB-5 investor Green Card work?",
          a: "EB-5 is the investor Green Card. In 2026, the minimum investment is $800,000 in a TEA (Targeted Employment Area — Rural or Urban) or $1,050,000 outside. The investment must create 10 full-time jobs for U.S. workers. Brazilians are CURRENT in all Reserved TEA categories in the April 2026 Visa Bulletin — the most favorable window since 2018.",
        },
        {
          q: "Can I work in the U.S. on an F-1 student visa?",
          a: "Yes, with restrictions. F-1 permits: (1) on-campus part-time during the semester (up to 20h/week); (2) CPT (Curricular Practical Training) integrated into the curriculum; (3) OPT (Optional Practical Training) for 12 months post-completion; (4) STEM OPT for an additional 24 months if your degree is in STEM. Work outside these parameters voids F-1 status.",
        },
        {
          q: "What is adjustment of status and when can I apply?",
          a: "Adjustment of Status (AOS, Form I-485) is the process to obtain a green card without leaving the U.S. You qualify when: (1) you are in the U.S. in valid status; (2) you have an approved immigrant petition (I-130, I-140, etc.); (3) your priority date is current in the Visa Bulletin. For marriage to a U.S. citizen and EB-2 NIW (Brazil CURRENT in 2026), AOS is the standard path.",
        },
        {
          q: "Do I need an attorney to apply for adjustment of status?",
          a: "Technically, no — the I-485 can be filed pro se. In practice, a poorly answered RFE or eligibility mistake can cause denial with serious consequences (including deportation). Attorney-prepared petitions have a significantly higher approval rate. For any case with complexity — historical out-of-status, marriage fraud red flags, concurrent I-485 with I-140 — counsel is essential.",
        },
        {
          q: "What happens if I fall out of immigration status?",
          a: "Unlawful presence (overstay) triggers escalating consequences. More than 180 days out of status = 3-year bar to return. More than 1 year = 10-year bar. Falling out of status complicates AOS and may require a waiver (I-601A). If you are out of status, do NOT leave the U.S. before consulting an attorney — leaving can trigger the bar.",
        },
        {
          q: "Can a Brazilian with dual European citizenship get an E-2 visa?",
          a: "Yes — this is the most common path for Brazilians to qualify for E-2. EU countries (Portugal, Italy, Spain, Germany, etc.), the United Kingdom, Turkey, Grenada, and others have E-2 treaties with the U.S. If you are a Brazilian citizen AND a citizen of a treaty country, you qualify. The passport used for the E-2 application must be from the treaty country.",
        },
      ],
    },
  },
  es: {
    biz: {
      title: "Negocios e Inversiones",
      items: [
        {
          q: "¿Puedo abrir una empresa en EE.UU. sin visa de residencia?",
          a: "Sí. Extranjeros no residentes pueden abrir una LLC en EE.UU. sin visa de trabajo o Green Card. El proceso es 100% remoto. Manejamos todo: Articles of Organization, EIN del IRS, Operating Agreement y apertura de cuenta bancaria. Importante: desde enero 2024, toda LLC debe registrar BOI con FinCEN en 90 días.",
        },
        {
          q: "¿Cuál es la diferencia entre LLC, C-Corp y S-Corp para brasileños?",
          a: "LLC: pass-through, flexible, sin requisito de residencia — ideal para la mayoría. C-Corp (típicamente Delaware): requerida para captar inversión institucional o IPO. S-Corp: NO está disponible cuando cualquier socio es extranjero no residente.",
        },
        {
          q: "¿Puede un brasileño ser miembro de una LLC estadounidense?",
          a: "Sí. No hay requisito de ciudadanía o residencia para ser miembro de una LLC en Florida. Los extranjeros no residentes pueden tener participación total o parcial.",
        },
        {
          q: "¿Necesito Social Security Number (SSN) para abrir empresa en EE.UU.?",
          a: "No. Es posible obtener el EIN del IRS sin SSN — vía Form SS-4, completamente remoto.",
        },
        {
          q: "¿Qué es FIRPTA y cómo afecta a compradores extranjeros de inmuebles?",
          a: "FIRPTA retiene 15% del precio de venta cuando el vendedor es extranjero no residente. Entre US$ 300K y US$ 1M con comprador que vaya a habitar, retiene 10%. Sobre US$ 1M, siempre 15%. Es anticipo de impuesto — se puede pedir Withholding Certificate al IRS antes del closing.",
        },
        {
          q: "¿Mi testamento brasileño es válido para bienes en EE.UU.?",
          a: "No necesariamente. En EE.UU., la propiedad inmueble se rige por la ley del estado (lex situs). Un Revocable Living Trust es la estructura más recomendada para garantizar la transferencia conforme a su voluntad, sin probate.",
        },
        {
          q: "¿Qué es el FBAR y quién debe presentarlo?",
          a: "FBAR (FinCEN Form 114) es la declaración obligatoria de cuentas bancarias en el extranjero para personas con obligaciones fiscales en EE.UU. Más de US$ 10.000 sumados en cualquier momento del año = debe presentar. Penalidades severas por incumplimiento.",
        },
        {
          q: "¿Es un contrato firmado en Brasil ejecutable en EE.UU.?",
          a: "Depende del contenido y redacción. Contratos relacionados con bienes, servicios o relaciones laborales en EE.UU. deben ser revisados bajo la ley estadounidense — particularmente la del estado donde opera la empresa.",
        },
        {
          q: "¿Cuál es la mejor estructura para un inversor brasileño en EE.UU.?",
          a: "Depende del objetivo. Para la mayoría, LLC es el punto de partida — flexible, tributación pass-through, sin residencia. Para captar inversión institucional o IPO: C-Corp (Delaware). S-Corp no es opción para no residentes.",
        },
      ],
    },
    visa: {
      title: "Visas de Trabajo e Inversión",
      items: [
        {
          q: "¿Cuál es la diferencia entre EB-2 NIW y EB-1A?",
          a: "Ambos son caminos al Green Card sin patrocinador empleador. EB-2 NIW exige demostrar interés nacional (Dhanasar 3-prong). EB-1A exige habilidad extraordinaria con reconocimiento sostenido (Kazarian two-step). Aprobación general: EB-2 NIW ~67%, EB-1A ~30%.",
        },
        {
          q: "¿Puede un brasileño obtener visa E-2?",
          a: "Brasil NO es signatario del tratado E-2. Brasileños con doble ciudadanía — italiana, portuguesa, española, turca, granadina, entre otras — pueden calificar.",
        },
        {
          q: "¿Qué es la visa L-1A y para quién es?",
          a: "L-1A es la visa de transferencia intra-empresa para ejecutivos/gerentes. Exige 1+ año en la empresa extranjera en los últimos 3 años, función ejecutiva o gerencial, transferencia a subsidiaria o afiliada en EE.UU. Validez inicial 3 años (1 año para nueva entidad), hasta 7 años. Ruta directa al EB-1C.",
        },
        {
          q: "¿Cómo funciona el Green Card por inversión EB-5?",
          a: "En 2026, inversión mínima US$ 800.000 en TEA (Rural o Urbana) o US$ 1.050.000 fuera. La inversión debe crear 10 empleos a tiempo completo. Brasileños CURRENT en todas las TEA Reservadas en abril 2026.",
        },
        {
          q: "¿Puedo trabajar en EE.UU. con visa F-1?",
          a: "Sí, con restricciones. F-1 permite: on-campus part-time, CPT, OPT (12 meses post-graduación), y STEM OPT (24 meses adicionales en STEM). Trabajo fuera de estos parámetros invalida el estatus.",
        },
        {
          q: "¿Qué es Ajuste de Estatus y cuándo puedo aplicar?",
          a: "AOS (Form I-485) es obtener green card sin salir de EE.UU. Califica cuando: (1) en EE.UU. en estatus válido; (2) petición de inmigrante aprobada; (3) fecha de prioridad current. Para matrimonio con ciudadano americano y EB-2 NIW (Brasil CURRENT 2026), AOS es la ruta estándar.",
        },
        {
          q: "¿Necesito abogado para Ajuste de Estatus?",
          a: "Técnicamente no, pero un RFE mal respondido puede causar negación. Tasas de aprobación con counsel son significativamente mayores. Para cualquier complejidad, counsel es esencial.",
        },
        {
          q: "¿Qué pasa si pierdo mi estatus migratorio?",
          a: "Más de 180 días fuera de estatus = bar de 3 años. Más de 1 año = bar de 10 años. Si está fuera de estatus, NO salga de EE.UU. antes de consultar abogado.",
        },
        {
          q: "¿Brasileño con doble ciudadanía europea puede obtener E-2?",
          a: "Sí — la ruta más común. Países UE, Reino Unido, Turquía, Granada, etc., tienen tratado E-2. Si es ciudadano brasileño Y de un país signatario, califica. El pasaporte usado para la solicitud E-2 debe ser del país signatario.",
        },
      ],
    },
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return createPageMetadata({
    title:
      locale === "pt"
        ? "Perguntas Frequentes — Imigração, Empresarial e Imobiliário | Pinho Law"
        : locale === "es"
          ? "Preguntas Frecuentes — Inmigración, Empresarial e Inmobiliario | Pinho Law"
          : "Frequently Asked Questions — Immigration, Business & Real Estate | Pinho Law",
    description:
      locale === "pt"
        ? "26 perguntas com respostas diretas sobre imigração, abertura de empresa, FIRPTA, FBAR, EB-2 NIW, E-2, L-1A, Adjustment of Status e tributação Brasil-EUA."
        : locale === "es"
          ? "26 preguntas con respuestas directas sobre inmigración, formación de empresa, FIRPTA, FBAR, EB-2 NIW, E-2, L-1A y tributación Brasil-EE.UU."
          : "26 questions answered: immigration, US company formation, FIRPTA, FBAR, EB-2 NIW, E-2, L-1A, Adjustment of Status, and Brazil-US taxation.",
    path: "/resources/faq",
    locale: locale as Locale,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const key = locale as L;

  const t = await getTranslations({ locale, namespace: "faq" });
  const homepageItems = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }));

  const exp = EXPANDED[key];
  const allFaq = [
    ...homepageItems,
    ...exp.biz.items.map(({ q, a }) => ({ question: q, answer: a })),
    ...exp.visa.items.map(({ q, a }) => ({ question: q, answer: a })),
  ];

  const headings = {
    pt: { headline: "Perguntas Frequentes", subhead: "Respostas diretas para as perguntas mais comuns. 26 questões organizadas por área.", general: "Geral", lastReviewed: "Última revisão" },
    en: { headline: "Frequently Asked Questions", subhead: "Direct answers to the most common questions. 26 items organized by topic.", general: "General", lastReviewed: "Last reviewed" },
    es: { headline: "Preguntas Frecuentes", subhead: "Respuestas directas a las preguntas más comunes. 26 ítems organizados por tema.", general: "General", lastReviewed: "Última revisión" },
  } as const;
  const h = headings[key];

  return (
    <>
      <JsonLd data={faqSchema(allFaq)} />

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="gold-rule" />
            <h1 className="mt-6 font-heading text-3xl font-bold text-ink md:text-5xl">
              {h.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              {h.subhead}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-wider text-ink-muted/70">
              {h.lastReviewed}{" "}
              <time dateTime={CASE_STATS.asOf}>
                {CASE_STATS.asOfLabel[key] ?? CASE_STATS.asOfLabel.en}
              </time>
            </p>
          </div>
        </Container>
      </section>

      {/* General (homepage 8) */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              {h.general}
            </h2>
            <dl className="mt-8 divide-y divide-border">
              {homepageItems.map((item, i) => (
                <div key={`g-${i}`} className="py-6">
                  <dt className="font-heading text-lg font-semibold text-ink md:text-xl">
                    {item.question}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-muted">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Business & Investment */}
      <section className="border-t border-border bg-cream py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              {exp.biz.title}
            </h2>
            <dl className="mt-8 divide-y divide-border">
              {exp.biz.items.map((item, i) => (
                <div key={`b-${i}`} className="py-6">
                  <dt className="font-heading text-lg font-semibold text-ink md:text-xl">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-muted">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Work & Investment Visas */}
      <section className="border-t border-border bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold text-ink md:text-3xl">
              {exp.visa.title}
            </h2>
            <dl className="mt-8 divide-y divide-border">
              {exp.visa.items.map((item, i) => (
                <div key={`v-${i}`} className="py-6">
                  <dt className="font-heading text-lg font-semibold text-ink md:text-xl">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-base leading-relaxed text-ink-muted">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
