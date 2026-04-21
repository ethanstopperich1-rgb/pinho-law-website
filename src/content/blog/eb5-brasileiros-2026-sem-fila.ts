import type { Article } from "./types";

// Article 4 — EB-5 flagship for Brazilians. Key thesis: Brazil is one
// of the few large source countries with CURRENT set-aside availability
// in 2026, making Rural TEA the fastest green card path for investors
// with $800K+ liquidity. Source: EB-5 Reform & Integrity Act 2022 +
// April 2026 Visa Bulletin + USCIS processing data.

export const eb5Brasileiros2026SemFila: Article = {
  slug: "eb-5-brasileiros-2026-sem-fila",
  datePublished: "2026-04-02",
  dateModified: "2026-04-18",
  keywords: [
    "eb5 brasileiro 2026",
    "eb-5 sem fila brasil",
    "rural tea eb5",
    "investimento green card eua",
    "reform integrity act eb5",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "EB-5 para brasileiros em 2026: a fila mais rápida do mundo — se feito certo",
      description:
        "Por que EB-5 é hoje o green card mais rápido para brasileiros com US$ 800K+ de capital: Brasil CURRENT, Rural TEA prioritário, aprovação em 1,4 anos no caso típico.",
      dek: "US$ 800K em capital + source of funds bem documentado = green card condicional em 14–18 meses. Brasileiros têm vantagem rara: fila CURRENT em abril/2026.",
      readingMinutes: 10,
      body: [
        {
          type: "p",
          text: "Enquanto chineses aguardam 10+ anos na fila EB-5 e indianos 3–5 anos, brasileiros têm uma janela histórica em 2026: CURRENT em todas as categorias set-aside do EB-5. Isso significa que, com o I-526E aprovado, você pode apresentar I-485 (Adjustment of Status) imediatamente — sem espera de Visa Bulletin.",
        },
        {
          type: "p",
          text: "Este artigo explica tudo que um brasileiro precisa saber para atravessar o EB-5 em 2026: as 3 classes de TEA, estratégia Regional Center vs Direct, a armadilha do source of funds (onde a maioria das petições brasileiras é negada), prazo realista end-to-end, e quando faz sentido — e quando não faz.",
        },
        { type: "h2", text: "EB-5 em 2 minutos", id: "eb5-basico" },
        {
          type: "p",
          text: "EB-5 é uma categoria de green card baseada em investimento que exige: (1) investimento mínimo de US$ 800.000 (TEA) ou US$ 1.050.000 (padrão) em um negócio nos EUA; (2) criação de 10 empregos em tempo integral para trabalhadores americanos; (3) comprovação de fonte lícita de fundos (source of funds).",
        },
        {
          type: "p",
          text: "O EB-5 Reform and Integrity Act (RIA) de março de 2022 modernizou o programa após pausa de 9 meses. Reservou 32% das visas EB-5 anuais para três categorias TEA (Targeted Employment Areas): Rural (20%), Urban high-unemployment (10%), Infraestrutura (2%). Para brasileiros em 2026, isso muda o jogo — as categorias reservadas são as únicas onde o Brasil mantém-se CURRENT.",
        },
        { type: "h2", text: "Por que Brasil está CURRENT", id: "brasil-current" },
        {
          type: "p",
          text: "A fila do Visa Bulletin avança conforme a demanda de cada país. Historicamente, Brasil nunca encheu sua cota de visas EB-5, diferentemente da China (cota estourada em 2015) e Índia (estourada em 2019). Resultado em abril de 2026:",
        },
        {
          type: "table",
          headers: ["Categoria", "Brasil", "China", "Índia"],
          rows: [
            ["EB-5 Set-Aside (Rural/Urban/Infra)", "CURRENT", "CURRENT", "CURRENT"],
            ["EB-5 Unreserved (padrão US$ 1,05M)", "CURRENT", "Nov 2015", "Jan 2022"],
          ],
          note:
            "Fonte: US Department of State Visa Bulletin abril/2026. CURRENT significa: sem fila — você pode apresentar I-485 assim que o I-526E for aprovado.",
        },
        { type: "h2", text: "As 3 classes de TEA", id: "tres-classes-tea" },
        {
          type: "h3", text: "Rural TEA (preferida)", id: "rural-tea",
        },
        {
          type: "p",
          text: "Investimento: US$ 800.000. Reserva anual: 20% das visas EB-5. Processamento I-526E prioritário: 5–10 meses (vs 18–30 meses para Urban). ‘Rural’ significa área fora de metropolitan statistical area (MSA), com população < 20.000. Projetos típicos: hospitality no interior, energia renovável, agroindústria.",
        },
        {
          type: "h3", text: "Urban TEA (high-unemployment)", id: "urban-tea",
        },
        {
          type: "p",
          text: "Investimento: US$ 800.000. Reserva: 10%. Área com desemprego ≥ 150% da média nacional. Projetos típicos em Orlando, Miami, NYC, Chicago, Los Angeles. Processamento I-526E: 18–30 meses — significativamente mais lento que Rural.",
        },
        {
          type: "h3", text: "Infrastructure", id: "infrastructure-tea",
        },
        {
          type: "p",
          text: "Investimento: US$ 800.000. Reserva: 2% — pequena. Projetos de infraestrutura pública (pontes, aeroportos, sistemas de transporte). Oferta de projetos é escassa. Cronograma similar ao Urban.",
        },
        {
          type: "callout",
          tone: "success",
          title: "Recomendação Pinho Law para brasileiros em 2026",
          body:
            "Rural TEA via Regional Center. Combina: valor mínimo ($800K), reserva de 20%, processamento prioritário I-526E em 5–10 meses, e Brasil CURRENT no set-aside. Tempo total end-to-end típico: 14–18 meses do depósito ao green card condicional.",
        },
        { type: "h2", text: "Regional Center vs Direct", id: "rc-vs-direct" },
        {
          type: "p",
          text: "Segunda decisão crítica: como seu capital é investido?",
        },
        {
          type: "table",
          headers: ["Dimensão", "Regional Center (passivo)", "Direct EB-5"],
          rows: [
            ["Seu papel no negócio", "Investidor passivo — não opera", "Você opera o negócio"],
            ["Empregos que contam", "Diretos + indiretos + induzidos (econometric model)", "Apenas diretos (W-2 trabalhando no negócio)"],
            ["Aprovação histórica", "~90%+ em Rural TEA RCs bem escolhidos", "~25% histórico (até 2022)"],
            ["Investimento típico", "$800K + taxa administrativa $40–80K", "$800K–$1,05M"],
            ["Retorno financeiro esperado", "0,5%–2% ao ano (incidental)", "Lucro operacional do negócio"],
            ["Devolução do capital", "Ao fim do projeto (tipicamente 5–7 anos)", "Quando venda ou sustentação permitir"],
            ["Risco operacional", "Baixo (estruturado)", "Alto (você administra)"],
            ["Complexidade legal", "Média", "Alta"],
          ],
        },
        {
          type: "p",
          text: "Para 95% dos brasileiros, Regional Center é a resposta correta. EB-5 não é investimento financeiro — é um gasto de imigração. A prioridade é aprovação do I-526E e remoção de condicionalidade no I-829 após 2 anos. Direct EB-5 aumenta dramaticamente o risco operacional sem ganho proporcional no processo imigratório.",
        },
        { type: "h2", text: "Source of funds: onde 60% das petições brasileiras são negadas", id: "source-of-funds" },
        {
          type: "p",
          text: "Sem dúvida o ponto mais crítico do EB-5 brasileiro. USCIS exige prova documental robusta da origem lícita de cada dólar investido. Para fortunas brasileiras, a dificuldade específica:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Histórico de sonegação fiscal no Brasil — se parte do patrimônio foi gerada informalmente, USCIS detecta a inconsistência entre imposto de renda e crescimento patrimonial.",
            "Imóveis adquiridos décadas atrás com pagamento parcial em dinheiro — cadeia documental quebrada.",
            "Empresa familiar sem contabilidade formal — distribuição de lucros não-declarada.",
            "Câmbio informal (‘doleiros’) — pode invalidar toda a petição se identificado.",
            "Heranças com inventário incompleto ou judicial em curso.",
            "Vendas de participação empresarial sem contrato notarizado.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "O erro fatal: fonte de fundos montada à última hora",
          body:
            "USCIS quer documento contínuo dos últimos 5–15 anos. Impostos de renda brasileiros (DIRPF), escrituras de imóveis, contratos de venda, extratos bancários do Brasil + câmbio formal, declaração CBE (Capitais Brasileiros no Exterior). Comece a montar ANTES de escolher o projeto. Cliente brasileiro que chega com $900K depositado em conta americana sem cadeia documental de como o dinheiro chegou ali está em sérios problemas — mesmo se o dinheiro for 100% lícito.",
        },
        {
          type: "p",
          text: "Na Pinho Law integramos desde o dia 1 um contador brasileiro de confiança para auditar e documentar a fonte de fundos. Esse é o passo que separa petições aprovadas em 10 meses de petições denegadas ou paradas em RFE (Request for Evidence) por 2 anos.",
        },
        { type: "h2", text: "Timeline realista end-to-end", id: "timeline" },
        {
          type: "list",
          style: "number",
          items: [
            "Meses 1–3: Due diligence de projeto Regional Center, seleção, assinatura de docs. Paralelamente, contador brasileiro monta fonte de fundos.",
            "Meses 3–4: Transferência de capital via câmbio formal. Depósito em conta escrow do Regional Center. Assinatura de subscription agreement.",
            "Mês 4: Protocolo I-526E (petição inicial + dossiê de fonte de fundos).",
            "Meses 9–14: USCIS adjudica I-526E (Rural TEA típico: 5–10 meses; Urban: 18–30).",
            "Mês 14–16: Protocolo I-485 (Adjustment) se você está nos EUA, ou DS-260 via NVC se fora. Com Brasil CURRENT em set-aside, não há espera.",
            "Mês 16–24: Aprovação I-485 → green card condicional (válido 2 anos) → entrada nos EUA como LPR.",
            "Meses 40–48 após aprovação do I-526E: Protocolo I-829 para remover condicionalidade. USCIS confirma que os 10 empregos foram criados. Green card permanente emitido.",
          ],
        },
        { type: "h2", text: "Custo total", id: "custo" },
        {
          type: "table",
          headers: ["Item", "Valor USD"],
          rows: [
            ["Investimento no projeto (Rural TEA)", "$800.000"],
            ["Taxa administrativa Regional Center", "$40.000 – $80.000"],
            ["USCIS I-526E filing fee", "$11.160"],
            ["USCIS I-485 fee", "$1.440"],
            ["USCIS I-829 fee (ano 5)", "$3.750"],
            ["Honorários advogado imigração", "$25.000 – $50.000"],
            ["Contador BR (source of funds dossier)", "R$ 30.000 – R$ 80.000"],
            ["Câmbio formal (spread bancário sobre $800K)", "~$8.000 – $15.000"],
            ["Total fora do investimento", "~$90.000 – $155.000"],
          ],
          note:
            "O investimento de $800K é devolvido ao fim do projeto (tipicamente 5–7 anos). Não é custo — é capital alocado. Custos ‘a fundo perdido’ ficam entre $90K–$155K.",
        },
        { type: "h2", text: "Quando EB-5 NÃO faz sentido", id: "nao-faz-sentido" },
        {
          type: "p",
          text: "Sendo honestos: EB-5 é atraente, mas não é solução universal. Pense duas vezes se:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Você qualifica para EB-1A ou EB-2 NIW — esses caminhos custam $10K–$18K em honorários e chegam no mesmo destino (green card permanente) em prazo similar. Pagar $800K + $100K de overhead para economizar 12–18 meses raramente compensa.",
            "Seu patrimônio total é perto de $1M — comprometer 80% para EB-5 é concentração de risco inaceitável.",
            "Fonte de fundos tem problemas estruturais (informalidade, sonegação histórica, câmbio informal) — o dossiê não se monta honestamente.",
            "Você não está disposto a aguardar 5–7 anos para recuperar o capital investido.",
          ],
        },
        { type: "h2", text: "Quando EB-5 É a jogada certa", id: "faz-sentido" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Patrimônio líquido ≥ $3M — o investimento representa < 30% da carteira.",
            "Perfil profissional não qualifica para EB-1A/EB-2 NIW (executivo tradicional sem publicações, comerciante bem-sucedido, empresário industrial).",
            "Fonte de fundos está limpa e bem documentada (idealmente decláriações de renda BR dos últimos 10+ anos).",
            "Família — cônjuge e filhos solteiros < 21 anos incluídos na mesma petição, sem custo adicional de investimento.",
            "Prioridade em estar nos EUA dentro de 12–18 meses.",
          ],
        },
        { type: "h2", text: "A leitura Pinho Law", id: "leitura" },
        {
          type: "p",
          text: "EB-5 é o produto imigratório mais rápido para brasileiros em 2026 — condicionado a: (1) Rural TEA via Regional Center confiável, (2) fonte de fundos impecável, e (3) patrimônio que suporte $800K sem comprometer liquidez pessoal. Para o perfil certo, nenhum outro caminho entrega green card condicional em 14–18 meses com set-aside de 20% de visas.",
        },
        {
          type: "p",
          text: "Para o perfil errado — ou pior, com source of funds fraco — é investimento caro que acaba em RFE ou negação. A diligência front-loaded é o que transforma o caso.",
        },
      ],
      faq: [
        {
          q: "Cônjuge e filhos entram na mesma petição EB-5?",
          a: "Sim. Cônjuge legal e filhos solteiros menores de 21 anos são derivativos na mesma petição I-526E, sem investimento adicional. Todos recebem green card condicional ao mesmo tempo. Atenção ao ‘aging out’: filho que completa 21 durante o processo pode perder elegibilidade — CSPA (Child Status Protection Act) protege em muitos casos.",
        },
        {
          q: "Posso morar em qualquer estado após receber o green card EB-5?",
          a: "Sim. EB-5 não vincula você geograficamente, mesmo que o projeto TEA seja em outro estado. Uma vez aprovado o I-485/DS-260, você tem residência permanente condicional válida em toda a União.",
        },
        {
          q: "Se o projeto Regional Center falhar, o que acontece?",
          a: "Dois riscos distintos: (1) risco imigratório — se o projeto não gerar os 10 empregos por investidor, o I-829 pode ser negado e você perde o green card; (2) risco financeiro — se o projeto der prejuízo, parte do capital pode não ser devolvida. Por isso a escolha do RC é crítica: histórico de aprovações I-829, estrutura legal, pipeline de projetos.",
        },
        {
          q: "Preciso estar nos EUA para fazer EB-5?",
          a: "Não. Você pode apresentar I-526E do Brasil. Após aprovação, duas vias: (a) se já está nos EUA com visto válido, Adjustment of Status via I-485; (b) se está no Brasil, consular processing via NVC + DS-260 + entrevista no consulado americano em Brasília, Rio ou São Paulo.",
        },
        {
          q: "Quanto custa abandonar o EB-5 depois de iniciado?",
          a: "Honorários pagos + taxas USCIS já protocoladas (~$30K–$80K) não voltam. O investimento de $800K em Regional Center é devolvido no cronograma do projeto — geralmente 5–7 anos, mesmo que você desista do processo imigratório. Mudar de caminho imigratório é possível (por exemplo para EB-1A ou EB-2 NIW) sem prejudicar o capital já investido no RC.",
        },
      ],
      related: [
        { label: "EB-5 — página de serviço completa", href: "/immigration/immigrant-visas/eb-5" },
        { label: "Calculadora EB-5", href: "/tools/eb5-calculator" },
        { label: "Simulador de tempo para Green Card", href: "/tools/green-card-timeline" },
      ],
    },
    en: {
      title: "EB-5 for Brazilians in 2026: the fastest green card in the world — if done right",
      description:
        "Why EB-5 is now the fastest green card for Brazilians with $800K+: Brazil CURRENT, Rural TEA priority, approval in ~1.4 years typical.",
      dek: "$800K capital + well-documented source of funds = conditional green card in 14–18 months. Brazilians have a rare edge: CURRENT set-aside in April 2026.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "While Chinese investors wait 10+ years and Indians 3–5 years, Brazilians have a historic 2026 window: CURRENT in every EB-5 set-aside category. With I-526E approval you can file I-485 immediately — no Visa Bulletin wait.",
        },
        { type: "h2", text: "EB-5 in 2 minutes" },
        {
          type: "p",
          text: "EB-5 requires: (1) $800,000 TEA or $1,050,000 non-TEA investment in a US business; (2) creation of 10 full-time jobs for US workers; (3) lawful source-of-funds documentation. The 2022 EB-5 Reform and Integrity Act reserved 32% of annual visas for Rural (20%), Urban high-unemployment (10%), and Infrastructure (2%).",
        },
        { type: "h2", text: "Why Brazil is CURRENT" },
        {
          type: "table",
          headers: ["Category", "Brazil", "China", "India"],
          rows: [
            ["EB-5 Set-Aside", "CURRENT", "CURRENT", "CURRENT"],
            ["EB-5 Unreserved", "CURRENT", "Nov 2015", "Jan 2022"],
          ],
          note: "Source: April 2026 Visa Bulletin.",
        },
        { type: "h2", text: "Regional Center vs Direct" },
        {
          type: "p",
          text: "For 95% of Brazilians, Regional Center is the right answer. EB-5 is an immigration expense, not an investment. Priority is I-526E approval and I-829 decondition — Direct EB-5 adds operational risk without proportional immigration benefit.",
        },
        { type: "h2", text: "Source of funds — where 60% of Brazilian petitions are denied" },
        {
          type: "p",
          text: "The most critical point. USCIS requires rigorous documentary proof of lawful origin of every dollar invested. Common Brazilian pitfalls: historical tax informality, old real estate with broken documentation, family businesses without formal accounting, informal FX, incomplete inheritance records.",
        },
        {
          type: "callout",
          tone: "alert",
          title: "Fatal error: last-minute source-of-funds build",
          body:
            "USCIS wants 5–15 years of continuous documentation. Start building it BEFORE picking a project. A client arriving with $900K in US account and no documentary chain has serious problems — even if the money is 100% lawful.",
        },
        { type: "h2", text: "Timeline end-to-end" },
        {
          type: "list",
          style: "number",
          items: [
            "Months 1–3: project due diligence + source-of-funds build.",
            "Months 3–4: capital transfer via formal FX + subscription.",
            "Month 4: file I-526E.",
            "Months 9–14: USCIS adjudicates (Rural TEA: 5–10 mo).",
            "Months 14–24: I-485 / DS-260 → conditional GC.",
            "Months 40–48: I-829 removes conditions → permanent GC.",
          ],
        },
        { type: "h2", text: "When EB-5 does NOT make sense" },
        {
          type: "list",
          style: "bullet",
          items: [
            "You qualify for EB-1A or EB-2 NIW — same destination, $10K–$18K in fees.",
            "Total net worth near $1M — too concentrated.",
            "Source of funds has structural problems.",
            "Not willing to wait 5–7 years for capital return.",
          ],
        },
      ],
      faq: [
        {
          q: "Are spouse and children included in the EB-5 petition?",
          a: "Yes. Legal spouse and unmarried children under 21 are derivatives on the same I-526E, no additional investment. CSPA may protect children who age out during processing.",
        },
        {
          q: "What if the Regional Center project fails?",
          a: "Two distinct risks: (1) immigration — if the project fails to create 10 jobs per investor, I-829 can be denied; (2) financial — loss of capital. RC selection criteria: I-829 approval history, legal structure, project pipeline.",
        },
        {
          q: "Do I need to be in the US to file?",
          a: "No. I-526E can be filed from Brazil. Post-approval: either I-485 (if in US) or consular processing (DS-260 + interview).",
        },
      ],
      related: [
        { label: "EB-5 service page", href: "/immigration/immigrant-visas/eb-5" },
        { label: "EB-5 calculator", href: "/tools/eb5-calculator" },
        { label: "Green Card Timeline estimator", href: "/tools/green-card-timeline" },
      ],
    },
    es: {
      title: "EB-5 para brasileños en 2026: la fila más rápida del mundo",
      description: "Por qué EB-5 es el green card más rápido para brasileños con $800K+: Brasil CURRENT, Rural TEA prioritario.",
      dek: "$800K + source of funds sólido = green card condicional en 14–18 meses. Brasil tiene ventaja rara: CURRENT set-aside.",
      readingMinutes: 7,
      body: [
        { type: "p", text: "Chinos esperan 10+ años, indios 3–5. Brasileños tienen ventana histórica en 2026: CURRENT en todas las categorías set-aside." },
        { type: "h2", text: "EB-5 en 2 minutos" },
        { type: "p", text: "EB-5 requiere: $800K TEA (o $1,05M estándar), 10 empleos full-time, source of funds lícito documentado. El Reform Act de 2022 reservó 32% de las visas para Rural (20%), Urban (10%), Infraestructura (2%)." },
        { type: "h2", text: "Regional Center vs Direct" },
        { type: "p", text: "Para 95% de los brasileños, Regional Center es la respuesta correcta. Direct EB-5 añade riesgo operacional sin beneficio proporcional." },
        { type: "h2", text: "Source of funds" },
        { type: "p", text: "USCIS exige documentación continua de 5–15 años. Empieza a montarla ANTES de escoger proyecto." },
      ],
      faq: [
        { q: "¿Cónyuge e hijos incluidos?", a: "Sí, sin inversión adicional si son cónyuge legal e hijos solteros <21." },
        { q: "¿Necesito estar en EE.UU.?", a: "No. I-526E se puede presentar desde Brasil." },
      ],
      related: [
        { label: "EB-5 service page", href: "/immigration/immigrant-visas/eb-5" },
        { label: "EB-5 calculator", href: "/tools/eb5-calculator" },
      ],
    },
  },
};
