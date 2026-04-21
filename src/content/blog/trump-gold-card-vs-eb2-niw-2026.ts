import type { Article } from "./types";

// Article 1 — flagship. Addresses the #1 2026 question for Brazilian
// professionals: the Trump Gold Card proposal ($5M residency-for-sale)
// vs. the EB-2 NIW self-petition route. Sources: spec-parts-2-5.md
// research addendum + USCIS Policy Manual Vol. 6 Part F (NIW Dhanasar).

export const trumpGoldCardVsEb2Niw2026: Article = {
  slug: "trump-gold-card-vs-eb2-niw-2026",
  datePublished: "2026-02-18",
  dateModified: "2026-04-12",
  keywords: [
    "trump gold card brasileiro",
    "eb2 niw 2026",
    "gold card 5 milhoes",
    "residencia americana 2026",
    "matter of dhanasar",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "Trump Gold Card vs EB-2 NIW em 2026: o que realmente muda para brasileiros",
      description:
        "Comparação honesta entre o Trump Gold Card de US$ 5 milhões e o EB-2 NIW self-petition. Qual rota faz sentido para profissionais brasileiros em 2026?",
      dek: "Dois caminhos. Um custa cinco milhões de dólares. O outro custa menos de $15K em honorários. Ambos entregam green card — para o perfil certo.",
      readingMinutes: 9,
      body: [
        {
          type: "p",
          text: "Desde o anúncio do Trump Gold Card em fevereiro de 2025 — uma proposta de residência permanente por US$ 5 milhões — recebemos a mesma pergunta toda semana no escritório: ‘Vale a pena esperar o Gold Card ou eu peço EB-2 NIW agora?’",
        },
        {
          type: "p",
          text: "A resposta curta: para 99% dos profissionais brasileiros que nos procuram, o EB-2 NIW é drasticamente superior. O Gold Card só faz sentido para o perfil muito específico de ultra-alta liquidez que prioriza velocidade absoluta sobre tudo. Este artigo explica exatamente por quê.",
        },
        { type: "h2", text: "O que é, exatamente, o Trump Gold Card?", id: "o-que-e-gold-card" },
        {
          type: "p",
          text: "O Trump Gold Card é uma proposta de programa de residência-por-investimento anunciada pela administração Trump em fevereiro de 2025. O conceito central: US$ 5 milhões pagos ao governo federal (não investidos em negócio ou imóvel), em troca de residência permanente nos EUA.",
        },
        {
          type: "p",
          text: "Diferentemente do EB-5, onde o investidor aplica capital em um negócio que gera empregos, o Gold Card é efetivamente a venda direta do status de green card. O dinheiro entra no Tesouro. Não há criação de empregos exigida. Não há estrutura de negócio para manter. Não há due diligence de fonte de fundos nos mesmos moldes do EB-5 (embora screening de AML/compliance obviamente se aplique).",
        },
        {
          type: "callout",
          tone: "alert",
          title: "Status legislativo em abril/2026",
          body:
            "O Gold Card NÃO está ainda em vigor. Requer aprovação do Congresso para criar uma nova categoria de visto — o Executivo não pode criar classificações imigratórias por ordem executiva. Até esta publicação, o texto legislativo continua em discussão no Comitê Judiciário do Senado. Cronograma realista de implementação: 2027+ se aprovado.",
        },
        { type: "h2", text: "O EB-2 NIW em 90 segundos", id: "eb2-niw-basico" },
        {
          type: "p",
          text: "EB-2 National Interest Waiver é uma categoria de green card baseada em emprego que permite self-petition — você não precisa de empregador americano, sindicato, ou PERM labor certification. Você apresenta sua própria petição, diretamente ao USCIS, argumentando que seu trabalho é de interesse nacional dos EUA.",
        },
        {
          type: "p",
          text: "O teste legal, estabelecido em Matter of Dhanasar (AAO 2016), tem três ‘prongs’ (vertentes): (1) o empreendimento proposto tem mérito substancial e importância nacional; (2) você está bem posicionado para avançar o empreendimento; (3) seria benéfico aos EUA dispensar os requisitos de job offer e labor certification.",
        },
        { type: "h3", text: "Por que é a rota favorita dos brasileiros", id: "por-que-brasileiros" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Self-petition — não depende de empresa americana patrocinando.",
            "Brasil normalmente enfrenta fila de 2–3 anos no Visa Bulletin EB-2 — longa, mas muito menor que F1/F3/F4 (20+ anos) ou EB-3 alguns perfis.",
            "Premium Processing disponível no I-140 ($2.805 extra = 15 dias úteis).",
            "Honorários típicos em Orlando: US$ 8.500 – US$ 14.000. Total end-to-end incluindo taxas USCIS fica em torno de $12K – $18K.",
            "O perfil ‘médio’ que qualifica: mestrado ou PhD brasileiro + 5+ anos de experiência + publicações / patentes / impacto comprovado no seu setor. Medicina, engenharia, tecnologia, pesquisa, advocacia internacional são os setores mais comuns.",
          ],
        },
        {
          type: "h2",
          text: "Comparação direta: Gold Card vs EB-2 NIW",
          id: "comparacao-direta",
        },
        {
          type: "table",
          headers: [
            "Dimensão",
            "Gold Card (proposta)",
            "EB-2 NIW (em vigor)",
          ],
          rows: [
            ["Custo governamental", "US$ 5.000.000", "US$ 2.805 (I-140) + US$ 1.440 (I-485)"],
            ["Honorários advogado", "Varia — estrutura complexa", "US$ 8.500 – US$ 14.000"],
            ["Retorno financeiro do capital", "Nenhum — é pagamento ao Tesouro", "N/A — não há investimento"],
            ["Criação de empregos exigida", "Nenhuma", "Nenhuma"],
            ["Self-petition", "Sim", "Sim"],
            ["Fila no Visa Bulletin para Brasil", "A definir (provavelmente sem fila)", "Abril/2026: ~2,6 anos"],
            ["Timeline total end-to-end", "A definir (12–24m estimado)", "3,7 – 5,8 anos (Brasil, com backlog atual)"],
            ["Status legislativo", "Não implementado — depende do Congresso", "Em vigor desde 1990, consolidado 2016 (Dhanasar)"],
            ["Risco regulatório", "Alto — pode não passar ou ser alterado", "Baixo — jurisprudência estabelecida"],
          ],
          note:
            "Cifras de EB-2 NIW: regra USCIS de 1/abril/2024 + Visa Bulletin abril/2026. Honorários são faixa típica Orlando.",
        },
        { type: "h2", text: "Quando o Gold Card faz sentido", id: "gold-card-perfil" },
        {
          type: "p",
          text: "Com honestidade profissional: o Gold Card, SE aprovado, é atrativo para um perfil muito estreito.",
        },
        {
          type: "list",
          style: "check" as never,
          items: [
            "Patrimônio líquido acima de US$ 50 milhões — onde $5M representa <10% dos ativos totais.",
            "Prioridade absoluta por velocidade: você precisa estar nos EUA como LPR em 12 meses e não aceita 3+ anos de fila.",
            "Perfil que NÃO qualifica para EB-1A (habilidade extraordinária) nem EB-2 NIW — por exemplo, executivos bem-sucedidos em setor tradicional sem publicações ou reconhecimento público.",
            "Aversão total a processo meritocrático — você prefere pagar para ter certeza em vez de construir um caso.",
          ],
        },
        {
          type: "p",
          text: "Se o seu cenário é esse, o Gold Card (quando aprovado) pode ser racional. Para qualquer perfil fora desse, pagar $5M para pular 2–3 anos de fila é uma transação financeira terrível — você está essencialmente comprando tempo a US$ 1,7M–2,5M por ano.",
        },
        { type: "h2", text: "Quando o EB-2 NIW faz sentido", id: "niw-perfil" },
        {
          type: "p",
          text: "O EB-2 NIW é o produto imigratório número um do nosso escritório porque atende ao perfil profissional brasileiro mais comum:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Médicos, engenheiros, cientistas de dados, pesquisadores, arquitetos, advogados internacionais, empreendedores tech.",
            "Mestrado ou PhD brasileiro (ou bacharelado + 5 anos de experiência progressiva).",
            "Trajetória profissional com algum impacto mensurável — publicações, patentes, prêmios, liderança de equipes, projetos com impacto econômico.",
            "Disposição a montar um dossiê Dhanasar bem estruturado.",
          ],
        },
        {
          type: "callout",
          tone: "success",
          title: "Exemplo real de perfil que aprova",
          body:
            "Engenheira civil brasileira, 11 anos de experiência em infraestrutura de transporte, duas publicações em periódicos revisados por pares, duas patentes depositadas (uma concedida), experiência liderando projeto em parceria com o Banco Mundial. Trabalho proposto: consultoria em resiliência climática de infraestrutura costeira na Flórida. Aprovado em I-140 com Premium Processing em 14 dias úteis.",
        },
        { type: "h2", text: "Estratégia híbrida: O-1 → EB-2 NIW", id: "estrategia-o1-niw" },
        {
          type: "p",
          text: "Para profissionais que precisam estar nos EUA imediatamente (oferta de trabalho, família, inicativa empresarial) mas também querem green card, a estratégia mais comum que recomendamos é O-1 → EB-2 NIW em paralelo.",
        },
        {
          type: "p",
          text: "O visto O-1 (habilidade extraordinária) pode ser emitido em meses e permite trabalhar legalmente nos EUA. Simultaneamente, você apresenta o I-140 EB-2 NIW. Quando a fila de prioridade avança, você apresenta I-485 via adjustment of status — sem precisar voltar ao Brasil para processamento consular.",
        },
        {
          type: "p",
          text: "Custo combinado típico: US$ 20K–28K em honorários + taxas. Tempo para estar nos EUA legalmente: 4–6 meses. Tempo até green card: 4–6 anos (totalmente dentro dos EUA, trabalhando todo o período).",
        },
        { type: "h2", text: "E se o Gold Card for aprovado em 2027?", id: "cenario-gold-card" },
        {
          type: "p",
          text: "Questão legítima: ‘Se eu começar meu EB-2 NIW agora e o Gold Card for aprovado em 2027, posso migrar?’",
        },
        {
          type: "p",
          text: "Sim. Nada impede que você abandone um processo de green card em andamento para aplicar via outra categoria. Você perde os honorários já pagos e o tempo investido, mas não há ‘punição’ legal. Na prática, quase ninguém faria isso porque, uma vez que o I-140 EB-2 NIW é aprovado (10–12 meses), você já tem a metade mais difícil do processo concluída — pagar $5M para pular a espera da fila raramente compensa.",
        },
        { type: "h2", text: "A leitura estratégica do escritório", id: "leitura-estrategica" },
        {
          type: "p",
          text: "Nossa leitura: o Gold Card é um produto para não-residentes ultra-ricos que não qualificam para EB-1A, EB-2 NIW, EB-5, ou O-1. Esse universo é pequeno. Para o profissional brasileiro médio-alto que nos procura — e que forma a maioria do mercado de imigração qualificada — a rota EB-2 NIW continuará sendo drasticamente mais racional, mesmo depois do Gold Card ser aprovado.",
        },
        {
          type: "p",
          text: "Se você está no cenário certo para EB-2 NIW, começar agora significa estar com green card em mãos em 2029–2030. Esperar o Gold Card significa apostar em legislação incerta e depois pagar $5M. Para a maioria dos nossos clientes, a escolha é óbvia.",
        },
      ],
      faq: [
        {
          q: "Quando o Trump Gold Card entra em vigor?",
          a: "Até abril de 2026, o programa não foi aprovado pelo Congresso. A criação de uma nova categoria de green card exige legislação — ordens executivas não bastam. Cronograma realista para implementação: 2027 ou depois, se aprovado na forma atual.",
        },
        {
          q: "Posso ter dinheiro investido fora dos EUA e ainda qualificar para EB-2 NIW?",
          a: "Sim. EB-2 NIW não tem requisito de investimento nem de riqueza. O teste Dhanasar avalia o mérito profissional do seu trabalho proposto nos EUA, não seu patrimônio. Isso é vantagem: não há análise de fonte de fundos nos moldes do EB-5.",
        },
        {
          q: "Quanto tempo leva o I-140 EB-2 NIW com Premium Processing?",
          a: "USCIS compromete-se com 15 dias úteis para adjudicar o I-140 quando Premium Processing é pago ($2.805 taxa adicional). Na prática, 95% das decisões saem dentro desse prazo — aprovação, RFE (Request for Evidence), ou negação.",
        },
        {
          q: "Preciso estar nos EUA para aplicar para EB-2 NIW?",
          a: "Não para o I-140. Você pode apresentar o I-140 de qualquer lugar do mundo — a petição é do peticionário (você), não depende de endereço nos EUA. O passo seguinte (I-485 adjustment ou consular processing via DS-260) depende de onde você está quando a fila do Visa Bulletin avança.",
        },
        {
          q: "O Gold Card concede green card condicional ou permanente direto?",
          a: "A proposta inicial fala em green card permanente direto, sem condicionalidade (diferente do EB-5, que concede green card condicional por 2 anos). Mas o texto legislativo final pode mudar isso. Até aprovação, qualquer detalhe é especulativo.",
        },
      ],
      related: [
        { label: "EB-2 NIW — Visto de green card por mérito nacional", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "Notícias de imigração em tempo real", href: "/immigration-live" },
        { label: "Calculadora de tempo para green card", href: "/tools/green-card-timeline" },
      ],
    },
    en: {
      title: "Trump Gold Card vs EB-2 NIW in 2026: what actually changes for Brazilians",
      description:
        "Honest comparison of the Trump Gold Card ($5M) vs EB-2 NIW self-petition. Which route makes sense for Brazilian professionals in 2026?",
      dek: "Two paths. One costs five million dollars. The other costs under $15K in attorney fees. Both deliver a green card — for the right profile.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "Since the Trump Gold Card announcement in February 2025 — a $5M residency-for-sale proposal — we've fielded the same question weekly: ‘Should I wait for the Gold Card or file EB-2 NIW now?’",
        },
        {
          type: "p",
          text: "Short answer: for 99% of Brazilian professionals who come to us, EB-2 NIW is dramatically superior. The Gold Card only makes sense for a very specific ultra-liquid profile that values pure speed over everything else. Here's why.",
        },
        { type: "h2", text: "What exactly is the Trump Gold Card?" },
        {
          type: "p",
          text: "The Trump Gold Card is a residency-by-investment proposal announced in February 2025. The core concept: $5M paid to the federal Treasury (not invested in a business or real estate) in exchange for permanent residency.",
        },
        {
          type: "callout",
          tone: "alert",
          title: "Legislative status as of April 2026",
          body:
            "The Gold Card is NOT yet in force. Creating a new visa category requires Congressional legislation — the Executive branch cannot create immigration classifications by executive order alone. As of this publication, legislative text is still in discussion at the Senate Judiciary Committee. Realistic implementation timeline: 2027+ if passed.",
        },
        { type: "h2", text: "EB-2 NIW in 90 seconds" },
        {
          type: "p",
          text: "EB-2 National Interest Waiver is an employment-based green card that allows self-petition — no US employer, no union sponsorship, no PERM labor certification required. You file your own petition directly with USCIS arguing your work is in the US national interest.",
        },
        {
          type: "p",
          text: "The legal test, established in Matter of Dhanasar (AAO 2016), has three prongs: (1) the proposed endeavor has substantial merit and national importance; (2) you are well-positioned to advance it; (3) it would benefit the US to waive the job-offer and labor-cert requirements.",
        },
        { type: "h2", text: "Direct comparison: Gold Card vs EB-2 NIW" },
        {
          type: "table",
          headers: ["Dimension", "Gold Card (proposed)", "EB-2 NIW (in force)"],
          rows: [
            ["Government cost", "$5,000,000", "$2,805 (I-140) + $1,440 (I-485)"],
            ["Attorney fees", "Varies — complex structure", "$8,500 – $14,000"],
            ["Capital return", "None — paid to Treasury", "N/A — no investment"],
            ["Job creation required", "None", "None"],
            ["Self-petition", "Yes", "Yes"],
            ["Brazil Visa Bulletin queue", "TBD (likely none)", "April 2026: ~2.6 yrs"],
            ["End-to-end timeline", "TBD (12–24 mo estimated)", "3.7 – 5.8 yrs (Brazil)"],
            ["Legislative status", "Not implemented", "In force since 1990"],
            ["Regulatory risk", "High — may not pass or may change", "Low — settled case law"],
          ],
        },
        { type: "h2", text: "When Gold Card makes sense" },
        {
          type: "p",
          text: "Honestly: the Gold Card, IF enacted, is attractive for a narrow profile — net worth above $50M where $5M is <10% of assets, absolute priority on speed, and profiles that don't qualify for EB-1A, EB-2 NIW, or EB-5.",
        },
        { type: "h2", text: "When EB-2 NIW makes sense" },
        {
          type: "p",
          text: "EB-2 NIW is our #1 immigration product because it serves the most common Brazilian professional profile: graduate-level professionals in medicine, engineering, tech, research, law, with measurable career impact (publications, patents, leadership, projects with economic effect).",
        },
        { type: "h2", text: "Hybrid strategy: O-1 → EB-2 NIW" },
        {
          type: "p",
          text: "For professionals who need to be in the US now (job offer, family, business) and also want a green card, we typically recommend O-1 → EB-2 NIW in parallel. O-1 gets you working in the US in 4–6 months; the I-140 NIW runs concurrently; when the priority date moves, you file I-485 without leaving the US.",
        },
        { type: "h2", text: "Our take" },
        {
          type: "p",
          text: "Gold Card is a product for ultra-wealthy non-residents who don't qualify for any merit-based category. That universe is small. For the median qualified Brazilian professional, EB-2 NIW remains dramatically more rational — even after Gold Card is enacted.",
        },
      ],
      faq: [
        {
          q: "When will the Trump Gold Card take effect?",
          a: "As of April 2026, Congress has not enacted the program. Creating a new green card category requires legislation. Realistic timeline: 2027 or later, if passed.",
        },
        {
          q: "Can I hold wealth abroad and still qualify for EB-2 NIW?",
          a: "Yes. EB-2 NIW has no wealth requirement. Dhanasar tests the merit of your proposed US work, not your net worth. That's an advantage — no source-of-funds scrutiny as in EB-5.",
        },
        {
          q: "How long is I-140 EB-2 NIW with Premium Processing?",
          a: "USCIS commits to 15 business days with Premium Processing ($2,805). 95% of decisions issue within that window.",
        },
      ],
      related: [
        { label: "EB-2 NIW — national interest green card", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "Immigration news in real time", href: "/immigration-live" },
        { label: "Green card timeline calculator", href: "/tools/green-card-timeline" },
      ],
    },
    es: {
      title: "Trump Gold Card vs EB-2 NIW en 2026",
      description: "Comparación honesta entre el Trump Gold Card ($5M) y EB-2 NIW self-petition para profesionales brasileños.",
      dek: "Dos caminos. Uno cuesta cinco millones. El otro, menos de $15K en honorarios.",
      readingMinutes: 6,
      body: [
        { type: "p", text: "El Trump Gold Card propuesto en febrero/2025 vende residencia permanente por US$ 5 millones pagados al Tesoro. No está vigente — requiere legislación del Congreso. Cronograma realista: 2027+." },
        { type: "p", text: "EB-2 NIW es un green card basado en empleo que permite self-petition sin empleador. El test Dhanasar (AAO 2016) tiene 3 prongs: mérito sustancial, posicionamiento, y beneficio de prescindir de job offer." },
        { type: "h2", text: "Comparación directa" },
        {
          type: "table",
          headers: ["Dimensión", "Gold Card", "EB-2 NIW"],
          rows: [
            ["Costo gubernamental", "$5.000.000", "$4.245 (tarifas USCIS)"],
            ["Honorarios", "Varía", "$8.500 – $14.000"],
            ["Fila Brasil", "A definir", "~2,6 años (abril/2026)"],
            ["Status", "No aprobado", "Vigente desde 1990"],
          ],
        },
        { type: "h2", text: "Nuestra lectura" },
        { type: "p", text: "Gold Card es para ultra-ricos que no califican para categorías meritocráticas. Para el profesional brasileño típico, EB-2 NIW sigue siendo dramáticamente más racional." },
      ],
      faq: [
        { q: "¿Cuándo entra en vigor el Gold Card?", a: "A abril/2026 no está aprobado. Cronograma realista: 2027 o después." },
        { q: "¿EB-2 NIW requiere patrimonio?", a: "No. El test Dhanasar evalúa mérito profesional, no riqueza." },
      ],
      related: [
        { label: "EB-2 NIW", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "Calculadora timeline green card", href: "/tools/green-card-timeline" },
      ],
    },
  },
};
