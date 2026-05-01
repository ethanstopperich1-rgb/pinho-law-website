import { setRequestLocale } from "next-intl/server";
import { createPageMetadata } from "@/lib/metadata";
import {
  ServicePageTemplate,
  type ServicePageContent,
  type L,
} from "@/components/service/ServicePageTemplate";
import type { Locale } from "@/i18n/routing";

const SLUG = "immigration/immigrant-visas/eb-2";

// EB-2 (with PERM, with employer sponsorship). Distinct from EB-2 NIW —
// this is the "advanced-degree professional with a US employer who'll
// sponsor + go through Labor Certification" path. Brazilians CURRENT
// in April 2026 across both EB-2 and EB-2 NIW; the strategic question
// is whether the candidate has an employer willing to do PERM.

const DATA: Record<L, ServicePageContent> = {
  pt: {
    locale: "pt",
    slug: SLUG,
    immigrationBreadcrumb: "Imigração",
    breadcrumbLabel: "EB-2 (com PERM)",
    eyebrow: "Visto de Imigrante",
    h1: "Visto EB-2 — Profissional com Grau Avançado (com PERM)",
    lede:
      "Green card EB-2 para profissionais com mestrado ou superior, ou bacharelado + 5 anos de experiência progressiva, com oferta de emprego permanente nos EUA. Inclui Labor Certification (PERM). Brasileiros CURRENT em 2026.",
    stats: [
      { value: "CURRENT", label: "Fila Brasil (Apr 2026)" },
      { value: "18–24mo", label: "Total c/ PERM" },
      { value: "PERM + I-140 + I-485", label: "3 etapas" },
      { value: "US$ 715", label: "Taxa I-140" },
    ],
    meta: {
      title:
        "Visto EB-2 PERM para Brasileiros 2026 — Green Card com Empregador | Pinho Law",
      description:
        "EB-2 com PERM: green card para profissionais com mestrado + oferta de emprego permanente. Diferente do EB-2 NIW. Brasileiros CURRENT no Visa Bulletin de abril 2026.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          badgeLabel: "Atenção",
          tone: "alert",
          heading: "EB-2 com PERM ≠ EB-2 NIW",
          body: "Existem duas rotas EB-2: a tradicional (com Labor Certification — PERM — e patrocinador) e a NIW (National Interest Waiver, que dispensa PERM e permite auto-petição). Esta página cobre a rota com PERM. Se você não tem empregador disposto a patrocinar, considere o EB-2 NIW.",
          recLabel: "Recomendação",
          rec: "Profissionais brasileiros com habilidade comprovada em interesse nacional frequentemente qualificam para os dois caminhos. Avaliamos qual maximiza o tempo total e a chance de aprovação na sua situação.",
          liveLink: { label: "Ver detalhes do EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
        },
      },
      {
        kind: "list",
        value: {
          heading: "Quem qualifica para EB-2 com PERM",
          intro:
            "Você precisa ter oferta de emprego permanente em tempo integral nos EUA E atender pelo menos um dos critérios abaixo:",
          style: "check",
          items: [
            "Mestrado, doutorado ou grau profissional (JD, MD, etc.) em campo relacionado ao emprego ofertado",
            "Bacharelado + 5 anos de experiência profissional progressiva pós-bacharelado",
            "Habilidade excepcional — atenda 3 dos 6 critérios regulamentares (diploma + 10 anos de experiência + carta de empregador atual e anteriores + salário acima da média + membership em associação profissional + reconhecimento por colegas)",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "As 3 etapas obrigatórias",
          headers: ["Etapa", "O que é", "Tempo médio (2026)"],
          rows: [
            [
              "1. PERM (ETA-9089)",
              "Departamento do Trabalho aprova que não há trabalhador americano qualificado para o cargo. Empregador faz recrutamento + audit file.",
              "8–14 meses",
            ],
            [
              "2. I-140 (USCIS)",
              "Petição de imigrante apresentada pelo empregador após PERM aprovado. Premium Processing disponível.",
              "Regular: 6–9 mo · Premium: 45 dias",
            ],
            [
              "3. I-485 ou consular",
              "Ajuste de status (se já nos EUA com status válido) ou processamento consular no Brasil.",
              "6–14 meses",
            ],
          ],
          note: "Total filing → green card: tipicamente 18 a 24 meses. Brasileiros não enfrentam backlog na fila — data de prioridade current durante todo o processo (Apr 2026).",
          noteStyle: "gold",
        },
      },
      {
        kind: "table",
        value: {
          heading: "Custo (2026)",
          headers: ["Item", "Valor", "Quem paga"],
          rows: [
            ["Recrutamento PERM (anúncios + agência)", "US$ 1.500–4.000", "Empregador (sempre)"],
            ["Honorários advocatícios PERM", "US$ 4.000–7.000", "Empregador (sempre)"],
            ["Taxa USCIS I-140", "US$ 715", "Empregador (geralmente)"],
            ["Asylum Program Fee (com I-140)", "US$ 600", "Empregador (geralmente)"],
            ["Premium Processing I-140", "US$ 2.965", "Empregador ou empregado"],
            ["Taxa USCIS I-485 (ajuste)", "US$ 1.440", "Empregado (geralmente)"],
            ["EAD (I-765) + Advance Parole (I-131)", "US$ 260 cada", "Empregado"],
            ["Honorários Pinho Law (I-140 + I-485)", "US$ 5.500–9.000", "Conforme negociado"],
          ],
          note:
            "Por lei (20 CFR §656.12), o empregador é obrigado a pagar 100% dos custos do PERM — incluindo recrutamento e honorários advocatícios. Tentativa de transferir esses custos ao empregado invalida a petição.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "EB-2 com PERM vs EB-2 NIW — quando usar PERM",
          intro:
            "PERM faz sentido nos seguintes cenários:",
          style: "check",
          items: [
            "Você tem empregador americano disposto a patrocinar e cobrir os custos do PERM",
            "Seu papel é específico de empregador (não auto-empreendedor) — engenheiro de software em uma Big Tech, médico em hospital, professor em universidade",
            "Você NÃO consegue construir um caso forte de interesse nacional (Dhanasar 3-prong) — perfil mais executor que pioneiro",
            "Já está nos EUA em H-1B/L-1/O-1 e quer transição direta para green card via empregador atual",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "O que faz uma petição EB-2 com PERM vencedora",
          style: "check",
          items: [
            "Job description redigida com cuidado: especifica o suficiente para refletir o cargo real, mas não tão restrita que o DOL questione fabricação para o candidato específico",
            "PWD (Prevailing Wage Determination) bem-fundamentada — salário oferecido deve igualar ou superar a faixa do BLS para o cargo + região",
            "Recrutamento conforme regulamentação 20 CFR §656.17: anúncios obrigatórios, recrutamento em jornal de circulação ampla, posting interno, esforços adicionais",
            "Audit file completo e organizado — DOL audita ~10% dos PERMs aleatoriamente; resposta tem 30 dias",
            "I-140 com cartas comprobatórias da experiência declarada — empregadores anteriores precisam confirmar título, datas, função, salário",
            "Mantém status válido (H-1B, L-1, O-1) durante todo o processo até I-485 ser apresentado",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "Política em 2026",
          tone: "gold",
          heading: "PERM em 2026 — atenção a mudanças regulatórias",
          body: "Em janeiro de 2026 o DOL anunciou revisão dos formulários ETA-9089 + audit triggers. Casos protocolados antes da regra final são adjudicados sob a regra anterior. A administração também sinalizou foco maior em wage attestation e prevailing wage challenges em PERMs de tech (especialmente Big Tech).",
          recLabel: "Recomendação prática",
          rec: "Se seu empregador já se comprometeu com PERM, comece o recrutamento o quanto antes — proteger a Priority Date sob a regulação atual vale o esforço de acelerar 30–60 dias.",
          liveLink: { label: "Ver atualizações ao vivo de imigração", href: "/immigration-live" },
        },
      },
    ],
    faqTitle: "Perguntas frequentes — EB-2 com PERM",
    faq: [
      {
        q: "EB-2 com PERM ou EB-2 NIW — qual escolher?",
        a: "Se você tem empregador disposto a patrocinar e cobrir os custos do PERM, EB-2 com PERM é mais previsível (taxa de aprovação do PERM em 2025: ~94%). Se você é auto-empreendedor, profissional liberal, ou não tem empregador disposto, EB-2 NIW (auto-petição) é a rota. Avaliamos os dois cenários na consulta.",
      },
      {
        q: "Quanto tempo leva o EB-2 com PERM em 2026?",
        a: "Tipicamente 18 a 24 meses do início do recrutamento PERM ao green card aprovado. PERM em si: 8 a 14 meses (DOL). I-140 com Premium Processing: 45 dias úteis após PERM aprovado. I-485 ou consular: mais 6 a 14 meses. Brasileiros estão CURRENT — sem backlog na fila do EB-2 (Apr 2026).",
      },
      {
        q: "O empregador é obrigado a pagar todos os custos do PERM?",
        a: "Sim, por lei (20 CFR §656.12). Custos de recrutamento, anúncios, honorários advocatícios e taxa do PERM são 100% do empregador. Tentativas de fazer o empregado pagar invalidam a petição inteira. Algumas empresas dividem o custo do I-140/I-485 com o empregado por contrato — isso é permitido.",
      },
      {
        q: "Posso trocar de empregador durante o processo EB-2 com PERM?",
        a: "Depende da etapa. PERM é específico do empregador — se trocar, recomeça do zero. I-140 é específico do empregador também, mas oferece portabilidade após aprovado. I-485: após 180 dias pendente, AC21 §106(c) permite portabilidade para emprego em ocupação 'same or similar' sem reiniciar — esta é a janela mais segura para trocar.",
      },
      {
        q: "PERM tem aprovação garantida?",
        a: "Não. Taxa nacional de aprovação em 2025: ~94% para PERMs sem audit; ~78% após audit. Causas comuns de denial: job description que parece desenhada para o candidato específico, recrutamento defeituoso (anúncios fora do prazo, jornal errado), prevailing wage abaixo do salário ofertado, ou candidato americano qualificado durante recrutamento.",
      },
      {
        q: "Brasileiros estão na fila de espera do EB-2 com PERM?",
        a: "Não. No Visa Bulletin de abril de 2026, Brasil está CURRENT em EB-2 (e EB-1, EB-3, EB-5). Esta janela é a melhor combinação de prazos para brasileiros desde 2018 — recomendamos protocolar enquanto a fila está aberta.",
      },
      {
        q: "Posso aplicar para EB-2 NIW como plano B durante o EB-2 com PERM?",
        a: "Sim, frequentemente recomendamos os dois em paralelo para clientes com perfil forte. EB-2 NIW filing é independente do PERM/empregador — duas Priority Dates separadas, dois I-140s. Você usa a primeira que aprovar. Custo extra ~US$ 7.500–10.000, mas reduz risco de o PERM falhar tarde no processo.",
      },
    ],
    relatedTitle: "Veja também",
    related: [
      { label: "EB-2 NIW (sem PERM, auto-petição)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 — Habilidade Extraordinária", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-3 — Trabalhador Qualificado", href: "/immigration/immigrant-visas/eb-3" },
      { label: "L-1A → EB-1C (executivo multinacional)", href: "/immigration/non-immigrant-visas/l-1" },
    ],
  },
  en: {
    locale: "en",
    slug: SLUG,
    immigrationBreadcrumb: "Immigration",
    breadcrumbLabel: "EB-2 (with PERM)",
    eyebrow: "Immigrant Visa",
    h1: "EB-2 Visa — Advanced Degree Professional (with PERM)",
    lede:
      "EB-2 green card for advanced-degree professionals with a permanent US job offer and Labor Certification (PERM). Brazilians CURRENT in April 2026.",
    stats: [
      { value: "CURRENT", label: "Brazil queue (Apr 2026)" },
      { value: "18–24mo", label: "Total with PERM" },
      { value: "PERM + I-140 + I-485", label: "3 stages" },
      { value: "$715", label: "I-140 fee" },
    ],
    meta: {
      title:
        "EB-2 PERM Visa for Brazilians 2026 — Employer-Sponsored Green Card | Pinho Law",
      description:
        "EB-2 with PERM: green card for professionals with a master's + permanent US job offer. Different from EB-2 NIW. Brazilians CURRENT in April 2026 Visa Bulletin.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          badgeLabel: "Attention",
          tone: "alert",
          heading: "EB-2 with PERM ≠ EB-2 NIW",
          body: "There are two EB-2 paths: traditional (with Labor Certification — PERM — and an employer sponsor) and NIW (National Interest Waiver, which waives PERM and allows self-petition). This page covers the PERM path. If you do not have an employer willing to sponsor, consider EB-2 NIW.",
          recLabel: "Recommendation",
          rec: "Brazilian professionals with proven national-interest impact often qualify for both paths. We assess which optimizes total timeline and approval likelihood for your situation.",
          liveLink: { label: "See EB-2 NIW details", href: "/immigration/immigrant-visas/eb-2-niw" },
        },
      },
      {
        kind: "list",
        value: {
          heading: "Who qualifies for EB-2 with PERM",
          intro: "You need a permanent full-time US job offer AND must meet at least one of:",
          style: "check",
          items: [
            "Master's, doctorate, or professional degree (JD, MD, etc.) in a field related to the offered job",
            "Bachelor's + 5 years of progressive professional experience post-bachelor's",
            "Exceptional ability — meet 3 of 6 regulatory criteria (degree + 10 years experience + employer letters + above-average wage + professional association membership + recognition by peers)",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "The 3 mandatory stages",
          headers: ["Stage", "What it is", "Average time (2026)"],
          rows: [
            [
              "1. PERM (ETA-9089)",
              "Department of Labor certifies that no qualified US worker is available for the role. Employer conducts recruitment + audit file.",
              "8–14 months",
            ],
            [
              "2. I-140 (USCIS)",
              "Immigrant petition filed by employer after PERM approval. Premium Processing available.",
              "Regular: 6–9 mo · Premium: 45 days",
            ],
            [
              "3. I-485 or consular processing",
              "Adjustment of Status (if already in the US in valid status) or consular processing in Brazil.",
              "6–14 months",
            ],
          ],
          note: "Total filing → green card: typically 18 to 24 months. Brazilians face no Visa Bulletin backlog — Priority Date current throughout (Apr 2026).",
          noteStyle: "gold",
        },
      },
      {
        kind: "table",
        value: {
          heading: "Cost (2026)",
          headers: ["Item", "Amount", "Who pays"],
          rows: [
            ["PERM recruitment (ads + agency)", "$1,500–4,000", "Employer (always)"],
            ["PERM attorney fees", "$4,000–7,000", "Employer (always)"],
            ["USCIS I-140 fee", "$715", "Employer (typically)"],
            ["Asylum Program Fee (with I-140)", "$600", "Employer (typically)"],
            ["I-140 Premium Processing", "$2,965", "Employer or employee"],
            ["USCIS I-485 fee", "$1,440", "Employee (typically)"],
            ["EAD (I-765) + Advance Parole (I-131)", "$260 each", "Employee"],
            ["Pinho Law fees (I-140 + I-485)", "$5,500–9,000", "As negotiated"],
          ],
          note:
            "By law (20 CFR §656.12), the employer must pay 100% of PERM costs — including recruitment and attorney fees. Attempts to shift these to the employee invalidate the petition.",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "EB-2 with PERM vs EB-2 NIW — when to use PERM",
          intro: "PERM makes sense in these scenarios:",
          style: "check",
          items: [
            "You have a US employer willing to sponsor and cover PERM costs",
            "Your role is employer-specific (not self-employed) — software engineer at Big Tech, hospital physician, university professor",
            "You CANNOT build a strong national-interest case (Dhanasar 3-prong) — your profile is more executor than pioneer",
            "Already in the US on H-1B/L-1/O-1 and want a direct transition to green card via current employer",
          ],
        },
      },
      {
        kind: "list",
        value: {
          heading: "What makes a winning EB-2 with PERM petition",
          style: "check",
          items: [
            "Carefully drafted job description: specific enough to reflect the actual role, not so narrow that DOL questions fabrication for the specific candidate",
            "Well-supported PWD (Prevailing Wage Determination) — offered wage must meet or exceed BLS data for the role + region",
            "Recruitment compliant with 20 CFR §656.17: required ads, broad-circulation newspaper, internal posting, additional efforts",
            "Complete and organized audit file — DOL randomly audits ~10% of PERMs; response window is 30 days",
            "I-140 with corroborating letters from prior employers confirming title, dates, duties, and salary",
            "Maintains valid status (H-1B, L-1, O-1) throughout the process until I-485 is filed",
          ],
        },
      },
      {
        kind: "callout",
        value: {
          badgeLabel: "2026 policy",
          tone: "gold",
          heading: "PERM in 2026 — watch for regulatory changes",
          body: "In January 2026 DOL announced revisions to ETA-9089 forms + audit triggers. Cases filed before the final rule are adjudicated under the prior framework. The administration has also signaled greater focus on wage attestation and prevailing wage challenges in tech PERMs (especially Big Tech).",
          recLabel: "Practical recommendation",
          rec: "If your employer is already committed to PERM, start recruitment as soon as possible — protecting your Priority Date under current regulation is worth accelerating 30–60 days.",
          liveLink: { label: "Live immigration updates", href: "/immigration-live" },
        },
      },
    ],
    faqTitle: "Frequently Asked Questions — EB-2 with PERM",
    faq: [
      {
        q: "EB-2 with PERM or EB-2 NIW — which to choose?",
        a: "If you have an employer willing to sponsor and cover PERM costs, EB-2 with PERM is more predictable (PERM approval rate in 2025: ~94%). If you are self-employed, an independent professional, or have no willing employer, EB-2 NIW (self-petition) is the path. We assess both scenarios at the consultation.",
      },
      {
        q: "How long does EB-2 with PERM take in 2026?",
        a: "Typically 18 to 24 months from PERM recruitment start to approved green card. PERM itself: 8 to 14 months (DOL). I-140 with Premium Processing: 45 business days after PERM approval. I-485 or consular: another 6 to 14 months. Brazilians are CURRENT — no backlog (Apr 2026).",
      },
      {
        q: "Is the employer required to pay all PERM costs?",
        a: "Yes, by law (20 CFR §656.12). Recruitment costs, advertising, attorney fees, and PERM filing fees are 100% the employer's responsibility. Attempts to make the employee pay invalidate the entire petition. Some companies split I-140/I-485 costs with the employee by contract — that is permitted.",
      },
      {
        q: "Can I switch employers during EB-2 with PERM?",
        a: "Depends on the stage. PERM is employer-specific — if you switch, you start over. I-140 is also employer-specific but offers portability once approved. I-485: after 180 days pending, AC21 §106(c) allows portability to a 'same or similar' role without restarting — this is the safest window to switch.",
      },
      {
        q: "Is PERM approval guaranteed?",
        a: "No. National 2025 approval rate: ~94% for PERMs without audit; ~78% after audit. Common denial causes: job description that appears tailored to the specific candidate, defective recruitment (out-of-window ads, wrong newspaper), prevailing wage below offered salary, or qualified US candidates surfacing during recruitment.",
      },
      {
        q: "Are Brazilians on a queue for EB-2 with PERM?",
        a: "No. In the April 2026 Visa Bulletin, Brazil is CURRENT for EB-2 (and EB-1, EB-3, EB-5). This window is the best combined timeline for Brazilians since 2018 — we recommend filing while the queue is open.",
      },
      {
        q: "Can I file EB-2 NIW as a backup during EB-2 with PERM?",
        a: "Yes, we frequently recommend running both in parallel for strong-profile clients. EB-2 NIW filing is independent of PERM/employer — two separate Priority Dates, two I-140s. You use whichever approves first. Extra cost ~$7,500–10,000, but it reduces the risk of late-stage PERM failure.",
      },
    ],
    relatedTitle: "See also",
    related: [
      { label: "EB-2 NIW (no PERM, self-petition)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 — Extraordinary Ability", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-3 — Skilled Worker", href: "/immigration/immigrant-visas/eb-3" },
      { label: "L-1A → EB-1C (multinational executive)", href: "/immigration/non-immigrant-visas/l-1" },
    ],
  },
  es: {
    locale: "es",
    slug: SLUG,
    immigrationBreadcrumb: "Inmigración",
    breadcrumbLabel: "EB-2 (con PERM)",
    eyebrow: "Visa de Inmigrante",
    h1: "Visa EB-2 — Profesional con Grado Avanzado (con PERM)",
    lede:
      "Green card EB-2 para profesionales con maestría o superior, con oferta de empleo permanente en EE.UU. y Certificación Laboral (PERM). Brasileños CURRENT en abril 2026.",
    stats: [
      { value: "CURRENT", label: "Fila Brasil (Abr 2026)" },
      { value: "18–24mo", label: "Total con PERM" },
      { value: "PERM + I-140 + I-485", label: "3 etapas" },
      { value: "US$ 715", label: "Tarifa I-140" },
    ],
    meta: {
      title:
        "Visa EB-2 PERM para Brasileños 2026 — Green Card con Empleador | Pinho Law",
      description:
        "EB-2 con PERM: green card para profesionales con maestría + oferta de empleo permanente. Distinto de EB-2 NIW.",
    },
    sections: [
      {
        kind: "callout",
        value: {
          badgeLabel: "Atención",
          tone: "alert",
          heading: "EB-2 con PERM ≠ EB-2 NIW",
          body: "Hay dos rutas EB-2: la tradicional (con PERM y patrocinador) y la NIW (que renuncia al PERM y permite auto-petición). Esta página cubre la ruta con PERM.",
          liveLink: { label: "Ver detalles del EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
        },
      },
      {
        kind: "list",
        value: {
          heading: "Quién califica para EB-2 con PERM",
          intro: "Necesita una oferta de empleo permanente a tiempo completo en EE.UU. Y al menos uno:",
          style: "check",
          items: [
            "Maestría, doctorado o título profesional (JD, MD, etc.) relacionado al empleo ofertado",
            "Licenciatura + 5 años de experiencia profesional progresiva",
            "Habilidad excepcional — cumplir 3 de 6 criterios regulatorios",
          ],
        },
      },
      {
        kind: "table",
        value: {
          heading: "Las 3 etapas obligatorias",
          headers: ["Etapa", "Qué es", "Tiempo medio (2026)"],
          rows: [
            ["1. PERM (ETA-9089)", "DOL certifica que no hay trabajador americano calificado.", "8–14 meses"],
            ["2. I-140 (USCIS)", "Petición de inmigrante presentada por empleador. Premium disponible.", "Reg: 6–9mo · Prem: 45d"],
            ["3. I-485 o consular", "Ajuste de Estatus (si ya en EE.UU.) o procesamiento consular en Brasil.", "6–14 meses"],
          ],
          note: "Total filing → green card: 18 a 24 meses. Brasileños CURRENT — sin backlog (Abr 2026).",
          noteStyle: "gold",
        },
      },
      {
        kind: "list",
        value: {
          heading: "EB-2 con PERM vs EB-2 NIW — cuándo usar PERM",
          style: "check",
          items: [
            "Tiene empleador estadounidense dispuesto a patrocinar y cubrir costos PERM",
            "Su rol es específico de empleador (no auto-empleado)",
            "No puede construir caso fuerte de interés nacional (Dhanasar)",
            "Ya en EE.UU. en H-1B/L-1/O-1 y quiere transición directa al green card vía empleador actual",
          ],
        },
      },
    ],
    faqTitle: "Preguntas Frecuentes — EB-2 con PERM",
    faq: [
      {
        q: "EB-2 con PERM o EB-2 NIW — ¿cuál elegir?",
        a: "Si tiene empleador dispuesto a patrocinar y cubrir costos PERM, EB-2 con PERM es más predecible (94% aprobación 2025). Si es auto-empleado o no tiene empleador, EB-2 NIW (auto-petición) es la ruta.",
      },
      {
        q: "¿Cuánto tarda el EB-2 con PERM en 2026?",
        a: "Típicamente 18 a 24 meses del inicio de PERM al green card aprobado. PERM: 8–14 meses. I-140 con Premium: 45 días hábiles. I-485 o consular: 6–14 meses. Brasileños CURRENT (Abr 2026).",
      },
      {
        q: "¿El empleador debe pagar todos los costos del PERM?",
        a: "Sí, por ley (20 CFR §656.12). Costos de reclutamiento, anuncios y honorarios PERM son 100% del empleador. Trasladarlos al empleado invalida la petición.",
      },
      {
        q: "¿Brasileños están en cola para EB-2?",
        a: "No. En el Visa Bulletin de abril 2026, Brasil está CURRENT en EB-2, EB-1, EB-3 y EB-5.",
      },
    ],
    relatedTitle: "Ver también",
    related: [
      { label: "EB-2 NIW (sin PERM, auto-petición)", href: "/immigration/immigrant-visas/eb-2-niw" },
      { label: "EB-1 — Habilidad Extraordinaria", href: "/immigration/immigrant-visas/eb-1" },
      { label: "EB-3 — Trabajador Calificado", href: "/immigration/immigrant-visas/eb-3" },
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
