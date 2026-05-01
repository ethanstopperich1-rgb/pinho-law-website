import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-2-niw/for-tech-professionals";

// EB-2 NIW vertical for tech/STEM professionals — highest-volume Brazilian
// ICP segment. Captures the long-tail: "EB-2 NIW software engineer",
// "EB-2 NIW data scientist Brazil", "national interest waiver tech worker".

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-2 NIW para profissionais de Tech",
    eyebrow: "EB-2 NIW · Vertical: Tech / STEM",
    h1: "EB-2 NIW para Profissionais de Tech Brasileiros",
    lede:
      "Engenheiros de software, cientistas de dados, ML engineers, especialistas em cybersecurity, arquitetos cloud. O perfil mais aprovado em EB-2 NIW desde 2022 — e o mais alinhado com o framework Dhanasar (2016) sob a Executive Order de IA + cyber de 2024.",
    stats: [
      { value: "75–85%", label: "Aprovação c/ advogado" },
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "45 dias", label: "Premium I-140" },
      { value: "STEM/IA", label: "Política federal favorável" },
    ],
    meta: {
      title:
        "EB-2 NIW para Profissionais de Tech Brasileiros 2026 | Pinho Law",
      description:
        "Engenheiros de software, dados, ML e cyber: como brasileiros qualificam EB-2 NIW. Framework Dhanasar aplicado a tech, taxa de aprovação 75–85%, prazo 8–14 meses.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Por que tech é o perfil ideal para EB-2 NIW",
        body: "Desde 2022, USCIS adota o EB-2 NIW como rota preferida para retenção de talento STEM nos EUA. A Política Memo PM-602-0188 (jan/2022) instruiu adjudicators a dar peso elevado a contribuições em tech alinhadas com prioridades nacionais (IA, cyber, semicondutores, energia, biotecnologia). Em 2024, a Executive Order 14110 sobre IA federalizou esse interesse — pesquisadores e engenheiros de IA passaram a ter o caminho mais limpo entre todos os perfis Dhanasar.",
      },
      {
        kind: "list",
        value: {
          heading: "Áreas tech mais aprovadas em EB-2 NIW",
          intro:
            "Estes domínios atendem 'mérito substancial e importância nacional' (Dhanasar prong 1) sem exigir argumentação criativa:",
          style: "check",
          items: [
            "Inteligência artificial e machine learning (especialmente LLMs, computer vision, IA aplicada a saúde/educação/segurança)",
            "Cybersecurity (defesa cibernética, criptografia, security engineering em infraestrutura crítica)",
            "Cloud computing e arquitetura distribuída (AWS, GCP, Azure — escalabilidade, latência, resiliência)",
            "Engenharia de dados / Big Data / data engineering em larga escala",
            "Semicondutores, hardware design, embedded systems",
            "Quantum computing e cryptography pós-quântica",
            "Robótica e sistemas autônomos",
            "Engenharia de blockchain e fintech regulada",
            "Healthtech / bioinformática (intersecção tech + saúde)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "Como tech profissional comprova Dhanasar prong 2 (bem posicionado)",
          intro: "Para 'bem posicionado para avançar a proposta', precisamos demonstrar histórico verificável:",
          style: "check",
          items: [
            "Histórico de impacto técnico: papers em conferências top-tier (NeurIPS, ICML, USENIX, ACM, IEEE), patentes, contribuições open-source de larga adoção (GitHub stars, downloads npm/PyPI)",
            "Endorsement: cartas de líderes técnicos independentes (CTOs, VPs Engineering, professores de pesquisa) atestando impacto",
            "Métricas de produto/sistema: usuários impactados, latência reduzida, ataques mitigados, custo otimizado — quantificar é crítico",
            "Citações: papers citando seu trabalho, ou produto/biblioteca sua sendo referenciada por outros engenheiros",
            "Educação: mestrado/doutorado em CS ou área correlata; bacharelado + 5 anos de experiência também qualifica",
            "Reconhecimento: prêmios da indústria, palestras em conferências, posição em jornal de papers",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "EB-2 NIW vs H-1B vs O-1 para tech brasileiro",
          headers: ["Critério", "EB-2 NIW", "H-1B", "O-1A"],
          rows: [
            ["Loteria?", "Não", "Sim (taxa US$ 100K em 2026)", "Não"],
            ["Patrocinador necessário?", "Não — auto-petição", "Sim — empregador", "Sim — empregador ou agente"],
            ["Caminho ao green card", "Direto (é green card)", "Indireto, requer EB-2/EB-3 depois", "Indireto, requer EB-1/EB-2 depois"],
            ["Validade inicial", "Permanente (após I-485)", "3 anos + 3 renovação", "3 anos + 1 renovação"],
            ["Pode mudar empregador?", "Sim, sem afetar status", "Difícil — requer transferência", "Difícil — requer nova petição"],
            ["Taxa USCIS total", "~US$ 4.500 + advogado", "Variável + US$ 100K (2026)", "Variável"],
            ["Prazo total", "8–14 meses c/ Premium", "Loteria + 6 meses", "2–3 meses"],
            ["Brasil tem fila?", "Não — CURRENT", "N/A — não-imigrante", "N/A — não-imigrante"],
          ],
          note: "Para tech profissionais brasileiros qualificados, EB-2 NIW é geralmente a rota mais limpa em 2026 — especialmente após a taxa H-1B de US$ 100K introduzida pela administração Trump.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Documentação típica que preparamos para tech brasileiro",
          style: "check",
          items: [
            "Plano de Atuação Proposto: 8–12 páginas detalhando o trabalho que você fará nos EUA, alinhado a prioridade federal (IA, cyber, semis, etc.)",
            "Memorando jurídico Dhanasar: 15–25 páginas analisando os 3 prongs com jurisprudência AAO atual",
            "5 a 8 cartas de recomendação de figuras independentes (CTOs, professores, líderes técnicos não-empregadores)",
            "Pacote de evidência de impacto: papers, patentes, GitHub commits, métricas de produto, cobertura de mídia técnica",
            "Currículo acadêmico/técnico em formato USCIS (não LinkedIn) — emissão de diplomas, traduções juramentadas, equivalência educacional",
            "Press kit: prêmios, palestras, citações, métricas de adoção",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Caso real (anonimizado)",
          tone: "gold",
          heading: "Engenheiro de ML brasileiro — aprovado em 11 meses",
          body: "Cliente brasileiro, mestre em CS, 7 anos de experiência em empresa de IA, 3 papers em NeurIPS, contribuições para PyTorch. Petição protocolada com Premium Processing — I-140 aprovado em 32 dias úteis. Adjustment of Status concluído em mais 8 meses. Custo total (Pinho Law + USCIS): US$ 12.500.",
          recLabel: "Por que aprovou",
          rec: "Combinação clara de Dhanasar prong 1 (IA é prioridade federal) + prong 2 (papers em top-tier conferences + adoção open-source) + prong 3 (memorando jurídico mostrando que dispensar PERM acelera retenção de talento crítico). Sem RFE.",
        },
      },
    ],
    faqTitle: "Perguntas frequentes — EB-2 NIW para Tech",
    faq: [
      {
        q: "Engenheiro de software brasileiro com bacharelado e 5 anos de experiência qualifica para EB-2 NIW?",
        a: "Sim — bacharelado + 5 anos de experiência progressiva pós-bacharelado é base válida para EB-2. A questão prática é se o histórico de impacto + plano proposto fecham os 3 prongs Dhanasar. Engenheiros com produtos de impacto verificável (escala, citações, métricas) frequentemente aprovam mesmo sem mestrado.",
      },
      {
        q: "Preciso ter papers acadêmicos para EB-2 NIW como engenheiro?",
        a: "Não. Papers fortalecem prong 2 mas não são obrigatórios. Alternativas: contribuições open-source de larga adoção, patentes, métricas de produto (usuários impactados, ataques mitigados, etc.), palestras em conferências da indústria, posição como reviewer/judge, e cartas de líderes independentes. Construímos o pacote em torno do que você tem.",
      },
      {
        q: "EB-2 NIW vale mais a pena que H-1B em 2026?",
        a: "Para a maioria dos brasileiros qualificados, sim. Em 2026 o H-1B tem nova taxa de US$ 100K + loteria + dependência total do empregador. EB-2 NIW: sem loteria, sem patrocinador, é green card direto. Para perfis tech fortes, prazo total semelhante (8–14 meses) com mais segurança.",
      },
      {
        q: "Posso fazer EB-2 NIW estando em H-1B atualmente?",
        a: "Sim — é a rota mais comum. Você protocola I-140 estando nos EUA em H-1B; após aprovado e com data de prioridade current (CURRENT para Brasil em 2026), aplica I-485 (Adjustment of Status) sem sair dos EUA. Pode trocar de empregador via AC21 portability após 180 dias do I-485 pendente.",
      },
      {
        q: "Posso aplicar para EB-2 NIW estando no Brasil?",
        a: "Sim. Após I-140 aprovado, você faz processamento consular no Consulado Americano em São Paulo, Rio de Janeiro, Brasília ou Recife. Tempo médio do filing à entrevista consular: 12–18 meses. Não exige presença prévia nos EUA.",
      },
      {
        q: "IA é mesmo prioridade federal para EB-2 NIW?",
        a: "Sim — Executive Order 14110 (out/2023) e seu sucessor de 2025 codificam IA como prioridade nacional, com instrução explícita ao USCIS de facilitar retenção de talento. Adjudicators citam EO 14110 em decisões positivas. Cybersecurity também é prioridade federal desde 2021. Isto reduz o ônus argumentativo no prong 1 do Dhanasar.",
      },
    ],
    relatedTitle: "Veja também",
    related: [
      { label: "EB-2 NIW — Visão geral completa", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW para médicos e healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      { label: "EB-2 NIW vs EB-1A — qual escolher", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
      { label: "EB-1A — Habilidade Extraordinária", href: "/immigration/immigrant-visas/eb-1" },
      { label: "O-1A — Habilidade Extraordinária (não-imigrante)", href: "/immigration/non-immigrant-visas/o-1" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-2 NIW for Tech Professionals",
    eyebrow: "EB-2 NIW · Vertical: Tech / STEM",
    h1: "EB-2 NIW for Brazilian Tech Professionals",
    lede:
      "Software engineers, data scientists, ML engineers, cybersecurity specialists, cloud architects. The most-approved EB-2 NIW profile since 2022 — and the most aligned with the Dhanasar framework (2016) under the 2024 AI + cyber Executive Orders.",
    stats: [
      { value: "75–85%", label: "Approval rate w/ counsel" },
      { value: "CURRENT", label: "Brazil 2026" },
      { value: "45 days", label: "I-140 Premium" },
      { value: "STEM/AI", label: "Federal priority" },
    ],
    meta: {
      title: "EB-2 NIW for Brazilian Tech Professionals 2026 | Pinho Law",
      description:
        "Software, data, ML, and cyber engineers: how Brazilians qualify for EB-2 NIW. Dhanasar framework for tech, 75–85% approval rate, 8–14 month timeline.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Why tech is the ideal EB-2 NIW profile",
        body: "Since 2022, USCIS treats EB-2 NIW as the preferred path to retain STEM talent in the US. Policy Memo PM-602-0188 (Jan 2022) instructed adjudicators to give heavy weight to tech contributions aligned with national priorities (AI, cyber, semiconductors, energy, biotech). In 2024, Executive Order 14110 on AI federalized that interest — AI researchers and engineers now have the cleanest Dhanasar path of any profile.",
      },
      {
        kind: "list",
        value: {
          heading: "Most-approved tech areas in EB-2 NIW",
          intro:
            "These domains satisfy 'substantial merit and national importance' (Dhanasar prong 1) without creative argument:",
          style: "check",
          items: [
            "Artificial intelligence and machine learning (especially LLMs, computer vision, AI applied to healthcare/education/security)",
            "Cybersecurity (cyber defense, cryptography, security engineering for critical infrastructure)",
            "Cloud computing and distributed architecture (AWS, GCP, Azure — scalability, latency, resilience)",
            "Data engineering / Big Data at scale",
            "Semiconductors, hardware design, embedded systems",
            "Quantum computing and post-quantum cryptography",
            "Robotics and autonomous systems",
            "Blockchain engineering and regulated fintech",
            "Healthtech / bioinformatics (tech + healthcare intersection)",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "How a tech professional proves Dhanasar prong 2 (well-positioned)",
          intro: "To prove 'well-positioned to advance the proposed endeavor':",
          style: "check",
          items: [
            "Track record of technical impact: papers at top-tier venues (NeurIPS, ICML, USENIX, ACM, IEEE), patents, widely-adopted open-source contributions (GitHub stars, npm/PyPI downloads)",
            "Endorsement: letters from independent technical leaders (CTOs, VP Engineering, research professors) attesting to impact",
            "Product/system metrics: users impacted, latency reduced, attacks mitigated, costs saved — quantification is critical",
            "Citations: papers citing your work, or your library/product referenced by other engineers",
            "Education: master's/PhD in CS or related field; bachelor's + 5 years also qualifies",
            "Recognition: industry awards, conference talks, paper-review positions",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "EB-2 NIW vs H-1B vs O-1 for Brazilian tech",
          headers: ["Criterion", "EB-2 NIW", "H-1B", "O-1A"],
          rows: [
            ["Lottery?", "No", "Yes ($100K fee in 2026)", "No"],
            ["Sponsor required?", "No — self-petition", "Yes — employer", "Yes — employer or agent"],
            ["Path to green card", "Direct (it is the green card)", "Indirect, requires EB-2/EB-3 later", "Indirect, requires EB-1/EB-2 later"],
            ["Initial validity", "Permanent (after I-485)", "3 yrs + 3 renewal", "3 yrs + 1 renewal"],
            ["Can switch employer?", "Yes, no status impact", "Hard — requires transfer", "Hard — requires new petition"],
            ["Total USCIS fees", "~$4,500 + counsel", "Variable + $100K (2026)", "Variable"],
            ["Total timeline", "8–14 mo w/ Premium", "Lottery + 6 mo", "2–3 mo"],
            ["Brazil queue?", "No — CURRENT", "N/A — non-immigrant", "N/A — non-immigrant"],
          ],
          note: "For qualified Brazilian tech professionals, EB-2 NIW is generally the cleanest path in 2026 — especially after the $100K H-1B fee introduced by the Trump administration.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "Typical documentation we prepare for Brazilian tech",
          style: "check",
          items: [
            "Proposed Endeavor Plan: 8–12 pages detailing work in the US, aligned to federal priority (AI, cyber, semis, etc.)",
            "Dhanasar legal memorandum: 15–25 pages analyzing all 3 prongs with current AAO case law",
            "5–8 recommendation letters from independent figures (CTOs, professors, non-employer technical leaders)",
            "Impact evidence package: papers, patents, GitHub commits, product metrics, technical media coverage",
            "Academic/technical CV in USCIS format (not LinkedIn) — diploma issuance, sworn translations, educational equivalency",
            "Press kit: awards, talks, citations, adoption metrics",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Real case (anonymized)",
          tone: "gold",
          heading: "Brazilian ML engineer — approved in 11 months",
          body: "Brazilian client, MS CS, 7 years at an AI company, 3 NeurIPS papers, PyTorch contributions. Filed with Premium Processing — I-140 approved in 32 business days. Adjustment of Status completed in another 8 months. Total cost (Pinho Law + USCIS): $12,500.",
          recLabel: "Why it approved",
          rec: "Clean combination of Dhanasar prong 1 (AI is federal priority) + prong 2 (top-tier conference papers + open-source adoption) + prong 3 (legal memo showing that waiving PERM accelerates retention of critical talent). No RFE.",
        },
      },
    ],
    faqTitle: "Frequently Asked Questions — EB-2 NIW for Tech",
    faq: [
      {
        q: "Does a Brazilian software engineer with a bachelor's and 5 years experience qualify?",
        a: "Yes — bachelor's + 5 years progressive experience post-bachelor's is a valid EB-2 base. The practical question is whether your impact track + proposed plan close all 3 Dhanasar prongs. Engineers with verifiable product impact (scale, citations, metrics) frequently approve without a master's.",
      },
      {
        q: "Do I need academic papers for EB-2 NIW as an engineer?",
        a: "No. Papers strengthen prong 2 but are not required. Alternatives: widely-adopted open-source contributions, patents, product metrics (users impacted, attacks mitigated, etc.), industry conference talks, reviewer/judge positions, and letters from independent leaders. We build the package around what you have.",
      },
      {
        q: "Is EB-2 NIW better than H-1B in 2026?",
        a: "For most qualified Brazilians, yes. In 2026 H-1B has a new $100K fee + lottery + total employer dependency. EB-2 NIW: no lottery, no sponsor, direct green card. For strong tech profiles, similar total timeline (8–14 months) with much greater security.",
      },
      {
        q: "Can I file EB-2 NIW while currently on H-1B?",
        a: "Yes — it's the most common path. File I-140 while in the US on H-1B; after approval and with current Priority Date (CURRENT for Brazil in 2026), file I-485 (Adjustment of Status) without leaving. You can switch employers via AC21 portability after 180 days I-485 pending.",
      },
      {
        q: "Can I apply for EB-2 NIW from Brazil?",
        a: "Yes. After I-140 approval, you do consular processing at the US Consulate in São Paulo, Rio de Janeiro, Brasília, or Recife. Average filing-to-consular-interview: 12–18 months. No prior US presence required.",
      },
      {
        q: "Is AI really a federal priority for EB-2 NIW?",
        a: "Yes — Executive Order 14110 (Oct 2023) and its 2025 successor codify AI as a national priority, with explicit USCIS instruction to facilitate talent retention. Adjudicators cite EO 14110 in positive decisions. Cybersecurity has been a federal priority since 2021. This reduces the argumentative burden on Dhanasar prong 1.",
      },
    ],
    relatedTitle: "See also",
    related: [
      { label: "EB-2 NIW — Full overview", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW for doctors and healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      { label: "EB-2 NIW vs EB-1A — which to pick", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
      { label: "EB-1A — Extraordinary Ability", href: "/immigration/immigrant-visas/eb-1" },
      { label: "O-1A — Extraordinary Ability (non-immigrant)", href: "/immigration/non-immigrant-visas/o-1" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-2 NIW para Tech",
    eyebrow: "EB-2 NIW · Vertical: Tech / STEM",
    h1: "EB-2 NIW para Profesionales de Tech Brasileños",
    lede:
      "Ingenieros de software, ciencia de datos, ML, ciberseguridad, arquitectura cloud. El perfil más aprobado en EB-2 NIW desde 2022.",
    stats: [
      { value: "75–85%", label: "Tasa de aprobación con abogado" },
      { value: "CURRENT", label: "Brasil 2026" },
      { value: "45 días", label: "I-140 Premium" },
      { value: "STEM/IA", label: "Prioridad federal" },
    ],
    meta: {
      title: "EB-2 NIW para Profesionales de Tech Brasileños 2026 | Pinho Law",
      description:
        "Ingenieros de software, datos, ML y cyber: cómo brasileños califican EB-2 NIW. Framework Dhanasar para tech.",
    },
    sections: [
      {
        kind: "prose",
        heading: "Por qué tech es el perfil ideal para EB-2 NIW",
        body: "Desde 2022, USCIS adopta EB-2 NIW como ruta preferida para retener talento STEM. La Política Memo PM-602-0188 (ene 2022) instruyó a los adjudicadores a dar peso elevado a contribuciones tech alineadas con prioridades nacionales (IA, cyber, semiconductores). La Executive Order 14110 (oct 2023) federalizó ese interés.",
      },
      {
        kind: "list",
        value: {
          heading: "Áreas tech más aprobadas en EB-2 NIW",
          style: "check",
          items: [
            "Inteligencia artificial y machine learning",
            "Ciberseguridad",
            "Cloud computing y arquitectura distribuida",
            "Ingeniería de datos / Big Data",
            "Semiconductores, hardware design, embedded systems",
            "Quantum computing",
            "Robótica y sistemas autónomos",
          ],
        },
      },
    ],
    faqTitle: "Preguntas Frecuentes — EB-2 NIW para Tech",
    faq: [
      {
        q: "¿Ingeniero de software brasileño con licenciatura y 5 años de experiencia califica para EB-2 NIW?",
        a: "Sí — licenciatura + 5 años de experiencia progresiva es base válida. La pregunta práctica es si el historial de impacto + plan propuesto cierra los 3 prongs Dhanasar.",
      },
      {
        q: "¿EB-2 NIW vale más la pena que H-1B en 2026?",
        a: "Para la mayoría de brasileños calificados, sí. En 2026 H-1B tiene tarifa nueva de US$ 100K + lotería + dependencia total del empleador. EB-2 NIW: sin lotería, sin patrocinador, green card directo.",
      },
    ],
    relatedTitle: "Ver también",
    related: [
      { label: "EB-2 NIW — Visión general", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-2 NIW para médicos", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      { label: "EB-2 NIW vs EB-1A", href: "/immigration/immigrant-visas/eb-2-niw/vs-eb-1a" },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = DATA[locale as L];
  return createPageMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: `/${SLUG}`,
    locale: locale as Locale,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ServicePageTemplate content={DATA[locale as L]} />;
}
