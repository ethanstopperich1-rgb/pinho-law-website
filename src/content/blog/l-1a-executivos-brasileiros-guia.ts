import type { Article } from "./types";

// Article 6 — L-1A for Brazilian executives. The #1 path for
// Brazilian companies expanding to US with their own leadership.
// Pairs with the EB-1C multinational-manager green card route 1 year
// after US entry. Source: USCIS Policy Manual Vol. 2 Part L + our
// internal L-1A approval rate on Brazilian parents with 1+ yr ops.

export const l1aExecutivosBrasileirosGuia: Article = {
  slug: "l-1a-executivos-brasileiros-guia",
  datePublished: "2026-04-11",
  dateModified: "2026-04-18",
  keywords: [
    "l1a brasileiro executivo",
    "visto l-1 eua",
    "abrir filial eua l1",
    "new office l1a",
    "eb-1c gerente multinacional",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "L-1A para executivos brasileiros: o guia definitivo 2026",
      description:
        "Como executivos brasileiros usam o L-1A para transferir à subsidiária americana: requisitos, New Office strategy, timeline, e a ponte para o green card EB-1C.",
      dek: "Sua empresa no Brasil opera há 1+ ano e quer um executivo morando nos EUA? L-1A é a ferramenta. Com planejamento, vira green card permanente via EB-1C em 18–24 meses.",
      readingMinutes: 9,
      body: [
        {
          type: "p",
          text: "O L-1A é o visto de transferência intra-empresa para executivos e gerentes. É o instrumento preferido por grupos empresariais brasileiros que querem manter seus líderes na subsidiária americana — e, frequentemente, a primeira etapa de um planejamento migratório de 3 anos culminando em green card permanente via EB-1C.",
        },
        {
          type: "p",
          text: "Este artigo cobre o caminho completo: requisitos da empresa matriz e da subsidiária, diferença entre L-1A Standard e L-1A New Office, dossiê típico, timeline, erros que matam a aprovação, e como amarrar desde o dia 1 a transição para EB-1C.",
        },
        { type: "h2", text: "O que L-1A exige — os 5 pilares", id: "requisitos" },
        {
          type: "list",
          style: "number",
          items: [
            "Relação corporativa qualificada entre matriz brasileira e empresa americana (matriz-subsidiária, afiliadas, ou joint ventures com controle comum).",
            "Matriz brasileira em operação ativa há 1+ ano antes da petição.",
            "Executivo transferido deve ter trabalhado na matriz (ou afiliada) em posição executiva/gerencial por 1 ano contínuo nos últimos 3 anos.",
            "Posição nos EUA deve ser também executiva ou gerencial — não de contribuidor individual.",
            "Ambas as empresas devem continuar ativas durante o período do visto (‘doing business’).",
          ],
        },
        { type: "h2", text: "‘Executivo’ e ‘gerente’ no sentido USCIS", id: "executivo-gerente" },
        {
          type: "p",
          text: "USCIS define esses termos de forma estrita. ‘Executivo’ direciona gestão da organização, estabelece metas e políticas, exerce discricionariedade ampla. ‘Gerente’ supervisiona pessoal profissional OU função essencial da empresa (sem necessariamente ter subordinados diretos — ‘function manager’).",
        },
        {
          type: "callout",
          tone: "info",
          title: "Function Manager — rota para gerentes sem equipe",
          body:
            "Brasileiros que gerenciam uma função essencial (compliance, P&D, expansão internacional) mas não têm subordinados diretos podem qualificar como function manager. Pinho Law tem histórico de aprovação forte nesse perfil. Argumento central: a função que você gerencia é essencial, complexa, e requer julgamento executivo/gerencial substancial.",
        },
        { type: "h2", text: "L-1A Standard vs L-1A New Office", id: "standard-vs-new-office" },
        {
          type: "p",
          text: "Decisão estratégica número um. Se a subsidiária americana JÁ existe e opera há mais de 1 ano, aplica L-1A Standard — validade inicial de até 3 anos, extensões até 7. Se a subsidiária americana é NOVA (menos de 1 ano, ou ainda vai ser criada), aplica L-1A New Office — validade inicial de apenas 1 ano, com revisão obrigatória na extensão.",
        },
        {
          type: "table",
          headers: ["Critério", "L-1A Standard", "L-1A New Office"],
          rows: [
            ["Subsidiária americana operando há", "1+ ano", "< 1 ano ou nova"],
            ["Validade inicial", "Até 3 anos", "1 ano"],
            ["Extensão máxima total", "7 anos", "7 anos"],
            ["Prova exigida", "Org chart com gerência nos EUA", "Business plan + instalações físicas + evidência de runway"],
            ["Dossiê típico", "40–60 páginas", "80–150 páginas + business plan"],
            ["Taxa de aprovação estimada", "85%+", "65–75% (USCIS rigoroso)"],
            ["Extensão após 1 ano (New Office)", "—", "USCIS reavalia se negócio está operando como prometido"],
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "A armadilha do New Office: 1 ano para provar execução",
          body:
            "New Office L-1A é o caminho para empresas brasileiras abrindo subsidiária. MAS: quando você vai renovar no fim do ano 1, USCIS exige evidência de que (a) a subsidiária está ativa, (b) você está executando função executiva real (não apenas administrativa/operacional do startup), (c) já há subordinados ou função essencial com complexidade gerencial. Muitas renovações são negadas porque o executivo acabou ‘fazendo de tudo’ no primeiro ano. Planejamento desde o dia 1 é crítico.",
        },
        { type: "h2", text: "O dossiê típico L-1A", id: "dossie" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Organograma matriz brasileira mostrando sua posição executiva/gerencial.",
            "Organograma projetado da subsidiária americana mostrando sua posição + subordinados previstos.",
            "Relação corporativa documentada: contrato social brasileiro + Articles of Incorporation/Organization americanos + proof of ownership chain.",
            "Prova de atividade da matriz: demonstrações financeiras (3 anos), contratos comerciais ativos, folha de pagamento, declarações fiscais BR.",
            "Prova de atividade da subsidiária americana (ou business plan robusto para New Office): lease do escritório, utility bills, abertura de conta bancária, MVP/produtos/serviços, primeiros contratos.",
            "Seu histórico profissional: carteira de trabalho, contratos, comprovantes de cargo, pelo menos 1 ano contínuo em função qualificante nos últimos 3.",
            "Cartas de suporte da matriz detalhando suas responsabilidades executivas/gerenciais — o idioma específico importa. USCIS lê cada palavra.",
            "Plano de atividades para os EUA: descrição da posição, reports diretos e matriciais, autoridade orçamentária, poder de contratar/demitir, decisões estratégicas sob sua alçada.",
          ],
        },
        { type: "h2", text: "Timeline L-1A", id: "timeline" },
        {
          type: "list",
          style: "number",
          items: [
            "Mês 0: Kick-off da análise. Identificar qualificação (Standard ou New Office), gap analysis da estrutura corporativa.",
            "Meses 1–3: Montagem do dossiê (carta-chefe, org charts, financeiros, business plan se New Office). Coleta de documentos BR pode consumir 4–6 semanas.",
            "Mês 3–4: Protocolo I-129 ao USCIS. Com Premium Processing ($2.805), decisão em 15 dias úteis. Sem premium, 6–10 meses.",
            "Mês 4 (se premium): I-129 aprovado. Aprovação ativa o Form I-797.",
            "Mês 4–5: Consular processing: agenda DS-160 + entrevista no consulado americano em SP ou Rio. Estampagem do visto L-1A no passaporte.",
            "Mês 5: Entrada nos EUA. Ativação do status L-1A. Cônjuge entra com L-2 (trabalho autorizado) + filhos L-2.",
          ],
        },
        { type: "h2", text: "Família: L-2 é o diferencial", id: "l2" },
        {
          type: "p",
          text: "Cônjuge e filhos < 21 anos solteiros vêm em L-2 (derivativos). Desde 2021, cônjuge L-2 é automaticamente autorizado a trabalhar no EUA — sem precisar de EAD separado. Basta o I-94 mostrando ‘L-2S’.",
        },
        {
          type: "p",
          text: "Filhos L-2 frequentam escola pública gratuitamente até o 12º ano. Universidades cobram out-of-state tuition (3–4x in-state) até estado de domicílio ser estabelecido — em geral impossível com L-2.",
        },
        { type: "h2", text: "A ponte para o green card: EB-1C", id: "eb-1c" },
        {
          type: "p",
          text: "Planejamento clássico: L-1A é visto de 3 anos extensível até 7; EB-1C é green card permanente para gerentes/executivos multinacionais com os mesmos requisitos-base que L-1A. A aposta: depois de 12–18 meses nos EUA com L-1A, apresentar I-140 EB-1C.",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "EB-1C tem os mesmos requisitos essenciais do L-1A (relação corporativa qualificante, 1+ ano na matriz, posição executiva/gerencial nos dois lados).",
            "EB-1C NÃO tem premium processing — I-140 leva 8–14 meses atualmente.",
            "Brasil CURRENT em EB-1 no Visa Bulletin abril/2026 — você pode apresentar I-485 (Adjustment of Status) assim que I-140 for aprovado, sem espera.",
            "Honorários típicos EB-1C: $12K–$18K (adicional além do L-1A).",
          ],
        },
        {
          type: "callout",
          tone: "success",
          title: "Timeline consolidado L-1A → EB-1C para brasileiro",
          body:
            "Mês 0: kick-off L-1A. Mês 5: entrada nos EUA com L-1A. Mês 17–20: I-140 EB-1C protocolado após 1 ano de operação americana comprovada. Mês 26–32: I-140 aprovado + I-485 concorrente. Mês 38–42: green card permanente. Total: ~3,5 anos do kick-off ao green card, sem fila.",
        },
        { type: "h2", text: "Custos totais", id: "custos" },
        {
          type: "table",
          headers: ["Item", "Valor USD"],
          rows: [
            ["USCIS I-129 filing fee", "$1.385"],
            ["Asylum Program Fee (2024 rule)", "$600"],
            ["Fraud Prevention & Detection fee", "$500"],
            ["Premium Processing (opcional)", "$2.805"],
            ["DS-160 + MRV (consular)", "$315"],
            ["Honorários advogado Pinho Law L-1A Standard", "$6.500 – $10.000"],
            ["Honorários advogado Pinho Law L-1A New Office", "$10.000 – $15.000"],
            ["Business plan profissional (se New Office)", "$2.500 – $6.000"],
            ["Total típico L-1A New Office com premium", "~$17.000 – $28.000"],
          ],
        },
        { type: "h2", text: "Os 6 erros que negam L-1A", id: "erros" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Matriz sem 1 ano de operação ativa — não há como provar track record.",
            "Descrição de cargo genérica (‘responsável por operações’, ‘coordena equipe’) sem demonstrar discricionariedade executiva concreta.",
            "No New Office, não cumprir o plano até a renovação do ano 1 — subsidiária sem funcionários, sem contratos, sem receita.",
            "Relação corporativa frágil: ‘consulting arrangement’ sem ownership documentado. USCIS nega.",
            "Executivo transferido que ‘acabou fazendo de tudo’ — respondendo emails, rodando payroll, atendendo cliente individual. USCIS considera ‘non-qualifying duties’.",
            "Não planejar EB-1C desde o dia 1. Você chega no ano 2–3 sem documentação adequada do seu papel real nos EUA e precisa reconstruir tudo.",
          ],
        },
        { type: "h2", text: "Leitura Pinho Law", id: "leitura" },
        {
          type: "p",
          text: "L-1A é uma das melhores ferramentas para empresas brasileiras sérias, já estabelecidas no Brasil, que precisam de líder próprio nos EUA. O caminho L-1A → EB-1C é uma das rotas mais previsíveis para green card permanente sem fila (Brasil CURRENT em EB-1). Os pontos críticos são: (1) documentação corporativa impecável da matriz, (2) descrição de cargo com linguagem USCIS-precisa, (3) execução real como executivo/gerente nos EUA (não administrativo), e (4) planejamento EB-1C desde o primeiro mês de operação americana.",
        },
      ],
      faq: [
        {
          q: "Minha empresa no Brasil tem 8 meses. Posso pedir L-1A New Office agora?",
          a: "Não. USCIS exige 1 ano completo de operação ativa da matriz antes do protocolo. Espere até completar 12 meses (com contratos, folha, faturamento documentados). Durante a espera, monte o dossiê para estar pronto no mês 13.",
        },
        {
          q: "Posso trocar para outro emprego americano durante o L-1A?",
          a: "Não. L-1A vincula você à empresa peticionária. Para trocar de empregador, você precisa que o novo empregador patrocine outro visto (H-1B, O-1) ou green card. Sair do L-1A antes do fim do período perde o status.",
        },
        {
          q: "Cônjuge L-2 pode abrir empresa própria nos EUA?",
          a: "Sim. Desde 2021, cônjuge L-2 tem trabalho autorizado automático via status (‘L-2S’). Pode ser empregado, consultor ou dono de LLC — sem restrição. Essa é uma das vantagens-chave do L-1A sobre H-1B para casais empreendedores.",
        },
        {
          q: "Se a subsidiária americana falhar, perco L-1A?",
          a: "Sim. L-1A depende de ‘doing business’ continuamente em ambos os lados (Brasil e EUA). Se a subsidiária fecha, o status colapsa. É por isso que recomendamos planejamento EB-1C bem antes — para ter green card permanente antes de qualquer risco operacional.",
        },
        {
          q: "L-1B (especialista) é alternativa se não qualifico como executivo/gerente?",
          a: "É uma categoria diferente, não ‘downgrade’. L-1B é para conhecimento especializado único da empresa (processos proprietários, produtos exclusivos, tecnologia interna). Requisitos distintos. L-1B não tem ponte direta para EB-1C — só para EB-2 ou EB-3 (que envolvem PERM e fila).",
        },
      ],
      related: [
        { label: "L-1 — visto intra-empresa (serviço completo)", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-1 — green card para executivos/gerentes", href: "/immigration/immigrant-visas/eb-1" },
        { label: "Simulador de tempo para Green Card", href: "/tools/green-card-timeline" },
      ],
    },
    en: {
      title: "L-1A for Brazilian executives: the definitive 2026 guide",
      description:
        "How Brazilian executives use L-1A to transfer to the US subsidiary: requirements, New Office strategy, timeline, and the EB-1C bridge to green card.",
      dek: "Your Brazilian company has 1+ year of operations and needs an executive in the US? L-1A is the tool. With planning, it becomes a permanent green card via EB-1C in 18–24 months.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "L-1A is the intra-company transfer visa for executives and managers — the preferred instrument for Brazilian groups wanting to keep their own leadership at the US subsidiary, and often the first step in a 3-year plan culminating in EB-1C.",
        },
        { type: "h2", text: "The 5 requirements" },
        {
          type: "list",
          style: "number",
          items: [
            "Qualifying corporate relationship (parent-sub, affiliates, common-control JVs).",
            "Brazilian parent active 1+ year.",
            "Transferee worked 1 continuous year in executive/managerial role within last 3.",
            "US role must also be executive or managerial.",
            "Both companies must remain ‘doing business’ during visa period.",
          ],
        },
        { type: "h2", text: "Standard vs New Office" },
        {
          type: "table",
          headers: ["Criterion", "Standard", "New Office"],
          rows: [
            ["US sub operating", "1+ yr", "< 1 yr"],
            ["Initial validity", "3 yrs", "1 yr"],
            ["Approval rate", "85%+", "65–75%"],
            ["Renewal friction", "Low", "High (USCIS reassesses)"],
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "The New Office trap",
          body:
            "At 1-year renewal, USCIS demands evidence the sub is truly operating as promised + that you're actually executing executive duties (not all-hands startup work). Many renewals are denied because the executive ‘did everything’ year 1.",
        },
        { type: "h2", text: "The EB-1C bridge" },
        {
          type: "p",
          text: "After 12–18 months on L-1A, file I-140 EB-1C. Brazil is CURRENT in EB-1 (April 2026) — I-485 can be filed immediately on approval. Total L-1A → GC: ~3.5 years.",
        },
      ],
      faq: [
        {
          q: "My Brazilian company is 8 months old. Can I file L-1A now?",
          a: "No. USCIS requires 1 full year of active parent operation before filing.",
        },
        {
          q: "Can L-2 spouse open a business in the US?",
          a: "Yes. Since 2021, L-2 spouses have automatic work authorization via L-2S status. Can be employed, consult, or own an LLC.",
        },
        {
          q: "Is L-1B a fallback if I don't qualify as executive/manager?",
          a: "It's a distinct category for specialized knowledge, not a downgrade. L-1B doesn't have a direct EB-1C bridge.",
        },
      ],
      related: [
        { label: "L-1 service page", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-1 service page", href: "/immigration/immigrant-visas/eb-1" },
      ],
    },
    es: {
      title: "L-1A para ejecutivos brasileños: guía definitiva 2026",
      description: "Cómo ejecutivos brasileños usan L-1A para transferirse a la subsidiaria americana.",
      dek: "Empresa brasileña con 1+ año + ejecutivo para EE.UU. = L-1A. Con planificación, green card vía EB-1C en 18–24 meses.",
      readingMinutes: 5,
      body: [
        { type: "p", text: "L-1A es visa de transferencia intra-empresa para ejecutivos/gerentes de grupos brasileños con subsidiaria americana." },
        { type: "h2", text: "5 requisitos" },
        { type: "list", style: "number", items: ["Relación corporativa calificante.", "Matriz brasileña activa 1+ año.", "Ejecutivo con 1 año en la matriz (últimos 3).", "Rol ejecutivo/gerencial en EE.UU.", "Ambas empresas activas durante la visa."] },
        { type: "h2", text: "Puente EB-1C" },
        { type: "p", text: "Tras 12–18 meses en L-1A, presentar I-140 EB-1C. Brasil CURRENT en EB-1. Total: ~3,5 años al green card." },
      ],
      faq: [
        { q: "¿Matriz con 8 meses sirve?", a: "No. USCIS exige 1 año completo." },
        { q: "¿Cónyuge L-2 puede trabajar?", a: "Sí, automáticamente desde 2021 (L-2S)." },
      ],
      related: [
        { label: "L-1", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-1", href: "/immigration/immigrant-visas/eb-1" },
      ],
    },
  },
};
