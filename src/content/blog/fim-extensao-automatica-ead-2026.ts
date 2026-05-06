import type { Article } from "./types";

// Article — End of automatic EAD extension. Doc-spec priority topic per
// May 2026 PLwebsite audit Block 4.22 (originally listed as Oct 2025
// piece on old site). Authoritative sources: 8 CFR §274a.13(d)
// (automatic extension regulation), USCIS 2022 Temporary Final Rule
// extending the auto-extension to 540 days (87 FR 26614), and
// subsequent 2025 USCIS policy updates restricting it.

export const fimExtensaoAutomaticaEad2026: Article = {
  slug: "fim-extensao-automatica-ead-2026",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  keywords: [
    "ead extensao automatica fim",
    "i-765 renovacao 2026",
    "540 day automatic extension end",
    "work authorization expired",
    "h-4 ead extension brazilian",
    "8 cfr 274a.13",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "Fim da extensão automática do EAD: o que mudou e como impacta brasileiros nos EUA",
      description:
        "O USCIS modificou a regra de extensão automática de EAD em 2025–2026. Quem ainda tem direito, prazos atualizados, riscos para empregadores e como protocolar I-765 com tempo de margem em 2026.",
      dek: "A janela de extensão automática de 540 dias durante a renovação do EAD foi reduzida em 2025. Brasileiros em H-4, L-2, asilo, TPS e Adjustment of Status precisam recalcular timing. Aqui está o que mudou e o que fazer.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "Em maio de 2022, o USCIS publicou regra temporária estendendo a extensão automática de EAD (Employment Authorization Document) de 180 para 540 dias durante o processamento da renovação (87 FR 26614). Esta regra foi essencial para brasileiros em H-4, L-2, asilo, TPS, e Adjustment of Status pendente — sem ela, atrasos do USCIS deixavam centenas de milhares de pessoas sem autorização de trabalho válida.",
        },
        {
          type: "p",
          text: "Em 2025–2026, sob a administração Trump, USCIS reduziu o escopo dessa extensão automática e modificou critérios de elegibilidade. Este artigo cobre o estado atual em abril de 2026, quem ainda mantém o direito à extensão automática, e como brasileiros afetados devem recalcular o timing de seus I-765.",
        },
        { type: "h2", text: "Como funcionava a regra anterior (180 → 540 dias)", id: "regra-anterior" },
        {
          type: "p",
          text: "Sob 8 CFR §274a.13(d), quem apresentava I-765 (renovação de EAD) na mesma categoria do EAD anterior recebia extensão automática enquanto USCIS adjudicava — originalmente 180 dias. Em 2022, USCIS estendeu para 540 dias via regra temporária, reconhecendo backlog grave de adjudicação.",
        },
        {
          type: "p",
          text: "Categorias elegíveis incluíam: H-4 dependentes (esposa de H-1B), L-2 dependentes (esposa de L-1), asilados, TPS holders, Adjustment of Status pendente (categoria c)(9)), refugees, parolees em algumas categorias, entre outras. O empregador podia continuar empregando o trabalhador apresentando o I-797C (Receipt Notice) como prova de extensão.",
        },
        { type: "h2", text: "O que mudou em 2025–2026", id: "mudancas-2025" },
        {
          type: "p",
          text: "A administração Trump revisou a política em três frentes principais (status conforme abril de 2026):",
        },
        {
          type: "list",
          style: "number",
          items: [
            "Redução do período de extensão automática de 540 para 180 dias para algumas categorias — retornando ao patamar pré-2022",
            "Eliminação ou restrição da elegibilidade para algumas subcategorias (verificação caso a caso)",
            "Aumento da fiscalização sobre empregadores aceitando I-797C como comprovante de autorização de trabalho — ICE Worksite Enforcement intensificada em 2025",
            "Adjudicação de I-765 ainda lenta apesar das mudanças — backlog médio em abril de 2026: 4-9 meses dependendo da categoria",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Verificação obrigatória antes de filing",
          body: "Categorias e prazos mudaram em 2025–2026 com revisões adicionais esperadas. Em abril de 2026, alguns ainda têm extensão de 540 dias, outros voltaram para 180 dias. Antes de qualquer filing, confirme a regra vigente para sua categoria específica em uscis.gov ou com seu advogado.",
        },
        { type: "h2", text: "Quem ainda tem extensão automática (Apr 2026)", id: "quem-tem-extensao" },
        {
          type: "p",
          text: "Em abril de 2026, as categorias que mantêm extensão automática (com prazos podendo variar entre 180 e 540 dias dependendo da subcategoria):",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "(c)(9) — Adjustment of Status pendente (I-485)",
            "(c)(8) — Asilo concedido ou pendente",
            "(a)(17) — Cônjuge de E-2 (regulamento 2022)",
            "(a)(18) — Cônjuge de L-2 (regulamento 2022)",
            "(c)(26) — Cônjuge de H-1B (com EAD H-4) — verificação ativa",
            "(c)(11) — Beneficiário de parole",
            "(a)(12)/(c)(19) — TPS",
          ],
        },
        { type: "h2", text: "Implicações práticas para brasileiros", id: "implicacoes-brasileiros" },
        {
          type: "p",
          text: "A redução afeta principalmente brasileiros que já viviam com margem apertada de timing entre EAD atual e renovação. O cenário típico de risco:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Brasileira em H-4 com EAD expirando em 6 meses — precisa protocolar I-765 imediatamente para garantir que adjudique antes do EAD atual expirar",
            "Cônjuge de L-2 com EAD expirando — risco alto se filing < 180 dias antes da expiração",
            "Brasileiro com I-485 pendente esperando EAD inicial — adjudicação ainda lenta (4-7 meses) mesmo com a regra de extensão",
            "Empregador americano que aceitou I-797C como autorização de trabalho — pressão para verificar timestamp da extensão automática",
          ],
        },
        { type: "h2", text: "Estratégia recomendada: filing antecipado", id: "filing-antecipado" },
        {
          type: "p",
          text: "Independentemente da categoria, a recomendação universal em 2026 é protocolar o I-765 o mais cedo permitido pela regulamentação:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Maioria das categorias permite filing 180 dias antes da expiração — APROVEITE essa janela",
            "Categorias H-4/L-2 frequentemente permitem filing concorrente com I-539 (extensão de status do principal) — coordene timing",
            "Premium Processing está disponível para algumas categorias I-765 desde 2024 (US$ 1.685, 30 dias) — avalie custo-benefício",
            "Mantenha cópia digitalizada de I-797C, EAD anterior, e carta de explicação para empregador",
            "Se EAD expirar e renovação ainda não tiver decisão, NÃO continue trabalhando sem extensão automática válida — risco para empregador (multa I-9) e para você (overstay)",
          ],
        },
        { type: "h2", text: "Adjudicação Bittner-style? Não exatamente", id: "adjudicacao" },
        {
          type: "p",
          text: "Diferente de FBAR (onde Bittner v. US 2023 limitou multa), no caso de I-765 com extensão automática expirada o risco é trabalhar sem autorização. Para o trabalhador: pode invalidar o status migratório atual e bloquear AOS futura. Para o empregador: multa I-9 pode chegar a US$ 27.108 por violação por funcionário sob a regulamentação 2025 do INA §274A.",
        },
        { type: "h2", text: "Casos especiais: H-4 EAD da era Trump", id: "h4-trump" },
        {
          type: "p",
          text: "O EAD para cônjuge de H-1B (categoria c)(26)) foi alvo de proposta de eliminação em 2017–2020 que nunca se concretizou completamente. Em 2026, sob a segunda administração Trump, há nova proposta em circulação restringindo a categoria. Brasileiros em H-4 com EAD devem:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Renovar imediatamente quando atingir 180 dias antes da expiração",
            "Considerar transição para H-1B própria (se loteria for favorável e empregador disposto a pagar a taxa de US$ 100K introduzida em 2026)",
            "Considerar EB-2 NIW pessoal se o perfil profissional permitir — independe do H-1B do cônjuge",
            "Não confiar exclusivamente no H-4 EAD para planejamento financeiro de longo prazo",
          ],
        },
      ],
      faq: [
        {
          q: "Meu EAD em H-4 expira em 90 dias — perdi o prazo de filing antecipado?",
          a: "Não — você ainda pode protocolar I-765 dentro dos 90 dias finais. A questão é se a regra de extensão automática vigente (180 ou 540 dias dependendo da categoria/momento) cobrirá adjudicação. Apresente IMEDIATAMENTE com Premium Processing se disponível, e prepare-se para potencial gap de autorização de trabalho.",
        },
        {
          q: "Empregador exige cópia atualizada do EAD para continuar trabalhando — o que mostrar?",
          a: "Mostre: (1) EAD atual ainda válido + I-797C Receipt Notice da renovação como prova de extensão automática, OU (2) carta do advogado de imigração confirmando aplicabilidade da extensão automática à sua categoria. Para empregadores que ainda recusam, é útil ter o link da regulamentação USCIS atualizada (uscis.gov/i-9-central).",
        },
        {
          q: "Posso aplicar Premium Processing no I-765?",
          a: "Sim para algumas categorias desde 2024. Custo: US$ 1.685, decisão em 30 dias úteis. Disponível para (c)(9) Adjustment of Status pendente, (c)(8) asilo pendente, F-1 STEM OPT, e algumas outras. NÃO disponível para H-4/L-2 EAD em 2026 (verificar para atualizações).",
        },
        {
          q: "Se eu apresentar I-765 mas USCIS demorar 8 meses, sou despedido?",
          a: "Depende: (1) se sua categoria tem extensão automática de 540 dias ainda vigente em 2026, você está coberto; (2) se 180 dias, o EAD pode expirar antes da decisão — neste caso, você precisa parar de trabalhar até receber o novo EAD. Empregador pode mantê-lo em status sem trabalho remunerado (alguns oferecem leave of absence) ou rescindir.",
        },
        {
          q: "A regra muda novamente em 2026?",
          a: "Provavelmente sim — políticas de imigração estão sob revisão constante. Acompanhe nosso /immigration-live para atualizações ao vivo. Estratégia segura: filing antecipado SEMPRE, independente da regra atual, para minimizar dependência da extensão automática.",
        },
      ],
      related: [
        { label: "Adjustment of Status — quando aplicar", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-2 NIW para profissionais de Tech (alternativa ao H-4 EAD)", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
        { label: "H-1B em 2026 — taxa de US$ 100K", href: "/blog/h-1b-2026-taxa-100mil-selecao-ponderada" },
        { label: "Imigração ao vivo — atualizações regulatórias", href: "/immigration-live" },
      ],
    },
    en: {
      title: "End of Automatic EAD Extension: What Changed and How It Impacts Brazilians in the US",
      description:
        "USCIS modified the EAD automatic extension rule in 2025–2026. Who still qualifies, updated timelines, employer risks, and how to file I-765 with margin in 2026.",
      dek: "The 540-day automatic extension during EAD renewal was reduced in 2025. Brazilians on H-4, L-2, asylum, TPS, and Adjustment of Status need to recalculate timing.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "In May 2022, USCIS published a temporary rule extending the automatic EAD extension from 180 to 540 days during renewal processing (87 FR 26614). This rule was essential for Brazilians on H-4, L-2, asylum, TPS, and pending Adjustment of Status — without it, USCIS delays left hundreds of thousands without valid work authorization.",
        },
        {
          type: "p",
          text: "In 2025–2026, under the Trump administration, USCIS reduced the scope of this automatic extension and modified eligibility criteria. This article covers the status as of April 2026, who still has the right to automatic extension, and how affected Brazilians should recalculate their I-765 timing.",
        },
        { type: "h2", text: "How the prior rule worked (180 → 540 days)", id: "prior-rule" },
        {
          type: "p",
          text: "Under 8 CFR §274a.13(d), filing I-765 (EAD renewal) in the same category as the prior EAD triggered automatic extension while USCIS adjudicated — originally 180 days. In 2022, USCIS extended this to 540 days via temporary rule, recognizing severe adjudication backlog.",
        },
        { type: "h2", text: "What changed in 2025–2026", id: "changes-2025" },
        {
          type: "list",
          style: "number",
          items: [
            "Reduction of automatic extension from 540 to 180 days for some categories — returning to pre-2022 levels",
            "Elimination or restriction of eligibility for some subcategories (case-by-case verification)",
            "Increased enforcement on employers accepting I-797C as work authorization proof — ICE Worksite Enforcement intensified in 2025",
            "I-765 adjudication still slow despite changes — average backlog April 2026: 4-9 months depending on category",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Mandatory verification before filing",
          body: "Categories and timelines changed in 2025–2026 with additional revisions expected. As of April 2026, some still have 540-day extension, others reverted to 180 days. Before any filing, confirm the current rule for your specific category at uscis.gov or with your attorney.",
        },
        { type: "h2", text: "Recommended strategy: early filing", id: "early-filing" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Most categories allow filing 180 days before expiration — USE THIS WINDOW",
            "H-4/L-2 categories often allow concurrent filing with I-539 (principal's status extension) — coordinate timing",
            "Premium Processing is available for some I-765 categories since 2024 ($1,685, 30 days) — assess cost-benefit",
            "Keep digital copies of I-797C, prior EAD, and explanation letter for employer",
            "If EAD expires and renewal still has no decision, do NOT continue working without valid automatic extension — risk for employer (I-9 fine) and for you (overstay)",
          ],
        },
      ],
      faq: [
        {
          q: "My H-4 EAD expires in 90 days — did I miss the early filing window?",
          a: "No — you can still file I-765 within the final 90 days. The question is whether the current automatic extension rule (180 or 540 days depending on category/timing) will cover adjudication. File IMMEDIATELY with Premium Processing if available, and prepare for potential work authorization gap.",
        },
        {
          q: "Employer demands updated EAD copy to continue working — what to show?",
          a: "Show: (1) current EAD still valid + I-797C Receipt Notice from renewal as proof of automatic extension, OR (2) immigration attorney letter confirming applicability of automatic extension to your category. For employers that still refuse, it helps to have the link to the current USCIS regulation (uscis.gov/i-9-central).",
        },
        {
          q: "Can I apply Premium Processing on I-765?",
          a: "Yes for some categories since 2024. Cost: $1,685, decision in 30 business days. Available for (c)(9) pending Adjustment of Status, (c)(8) pending asylum, F-1 STEM OPT, and others. NOT available for H-4/L-2 EAD in 2026 (verify for updates).",
        },
        {
          q: "Will the rule change again in 2026?",
          a: "Likely yes — immigration policies are under constant review. Follow our /immigration-live for live updates. Safe strategy: ALWAYS file early, regardless of current rule, to minimize dependence on automatic extension.",
        },
      ],
      related: [
        { label: "Adjustment of Status — when to apply", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-2 NIW for tech (alternative to H-4 EAD)", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
        { label: "H-1B in 2026 — $100K fee", href: "/blog/h-1b-2026-taxa-100mil-selecao-ponderada" },
      ],
    },
    es: {
      title: "Fin de la extensión automática del EAD: qué cambió y cómo impacta a brasileños en EE.UU.",
      description:
        "USCIS modificó la regla de extensión automática de EAD en 2025–2026. Quién aún califica, plazos actualizados, riesgos para empleadores.",
      dek: "La ventana de extensión automática de 540 días durante la renovación del EAD fue reducida en 2025. Brasileños en H-4, L-2, asilo, TPS y Adjustment of Status deben recalcular el timing.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "En 2025–2026, USCIS redujo el alcance de la extensión automática del EAD durante la renovación. Este artículo cubre el estado en abril 2026 y cómo brasileños afectados deben recalcular el timing del I-765.",
        },
        { type: "h2", text: "Estrategia recomendada: filing temprano" },
        {
          type: "list",
          style: "bullet",
          items: [
            "La mayoría de categorías permite filing 180 días antes de expiración — USE esta ventana",
            "Premium Processing disponible para algunas categorías ($1,685, 30 días)",
            "Mantenga copias digitales de I-797C, EAD anterior, y carta explicativa al empleador",
          ],
        },
      ],
      faq: [
        {
          q: "¿Mi EAD H-4 expira en 90 días, perdí la ventana?",
          a: "No — aún puede presentar I-765 dentro de los últimos 90 días. Presente INMEDIATAMENTE con Premium Processing si disponible.",
        },
      ],
      related: [
        { label: "Adjustment of Status", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-2 NIW para Tech", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
      ],
    },
  },
};
