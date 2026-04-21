import type { Article } from "./types";

// Article 5 — citizenship roadmap. Common Brazilian confusion:
// "Quando eu posso pedir cidadania?" + "Perco minha cidadania
// brasileira?" This article answers definitively: 5-year (or 3-year
// for USC-spouse) residency, N-400, civics/English, oath. Dual
// citizenship fully OK on both sides. Sources: USCIS Policy Manual
// Vol. 12 + Brazilian Constitution Art. 12 §4.

export const naturalizacaoAmericanaQuandoComo: Article = {
  slug: "naturalizacao-americana-quando-como",
  datePublished: "2026-04-08",
  dateModified: "2026-04-18",
  keywords: [
    "cidadania americana brasileiro",
    "naturalizacao eua 2026",
    "n400 brasileiro",
    "dupla cidadania brasil eua",
    "cidadania por casamento eua",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "Naturalização americana: quando e como pedir em 2026 (guia para brasileiros)",
      description:
        "Guia completo para brasileiros naturalizarem em 2026: regra dos 5 anos, atalho dos 3 anos via casamento USC, teste cívico, oath, dupla cidadania (sim, pode).",
      dek: "Green card é status. Cidadania é direito. Depois de 5 anos como LPR (ou 3 se casado com USC), você pode fechar o ciclo — sem perder a cidadania brasileira.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "Dúvida que aparece em quase toda consulta pós-green card: quando posso pedir cidadania? Perco o passaporte brasileiro? Preciso falar inglês perfeito? O teste cívico é difícil?",
        },
        {
          type: "p",
          text: "Respostas curtas: 5 anos como residente permanente (ou 3 se casado com USC), não perde o passaporte brasileiro, inglês conversacional suficiente, o teste cívico pede 6 acertos em 10 perguntas de uma lista pública de 100. Este artigo detalha tudo.",
        },
        { type: "h2", text: "Por que vale a pena", id: "por-que-vale" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Direito de votar em eleições federais, estaduais e municipais.",
            "Passaporte americano — um dos mais poderosos do mundo (visa-free em 185+ países, incluindo Shengen).",
            "Elegibilidade a jobs federais e clearances de segurança.",
            "Proteção contra deportação — cidadão naturalizado não pode ser deportado por crime comum (apenas por fraude na naturalização).",
            "Direito de patrocinar imigração de pais e irmãos (LPRs só podem patrocinar cônjuge e filhos).",
            "Simplificação sucessória — herdeiros não enfrentam tratamento de estrangeiro no estate tax federal.",
            "Transmissão automática de cidadania a filhos nascidos após naturalização, mesmo fora dos EUA.",
          ],
        },
        { type: "h2", text: "Os 5 requisitos centrais", id: "cinco-requisitos" },
        {
          type: "list",
          style: "number",
          items: [
            "Idade mínima de 18 anos.",
            "Residência permanente legal (LPR / green card) por 5 anos — ou 3 anos se casado com USC durante esse tempo.",
            "Presença física nos EUA de pelo menos 50% desse período (30 meses em 60, ou 18 em 36).",
            "Good moral character durante o período estatutário + continuado até a cerimônia.",
            "Proficiência básica em inglês (leitura, escrita, fala) + teste cívico.",
          ],
        },
        { type: "h2", text: "Regra dos 5 anos vs regra dos 3 anos", id: "cinco-vs-tres" },
        {
          type: "table",
          headers: ["Requisito", "Regra 5 anos (padrão)", "Regra 3 anos (USC spouse)"],
          rows: [
            ["Residência contínua como LPR", "5 anos", "3 anos"],
            ["Presença física", "30 meses (50%)", "18 meses (50%)"],
            ["Casado com USC durante o período", "Não exigido", "Sim, os 3 anos completos"],
            ["Vivendo em ‘marital union’", "Não exigido", "Sim, não apenas casado no papel"],
            ["USC já era cidadão durante todo o período", "Não exigido", "Sim, cônjuge deve ter sido USC os 3 anos"],
            ["Quando elegível para filing", "Até 90 dias antes dos 5 anos", "Até 90 dias antes dos 3 anos"],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "O ‘early filing window’ de 90 dias",
          body:
            "Você pode protocolar N-400 até 90 dias antes de completar o período de residência. Isso adianta o processamento — USCIS leva hoje 6–14 meses médios. Alinhamos o filing para cair na janela de 90 dias e não perder nenhum dia.",
        },
        { type: "h2", text: "O documento: N-400", id: "n400" },
        {
          type: "p",
          text: "O Form N-400 (Application for Naturalization) é o documento central. 20 páginas, cobrindo histórico de residência, histórico de viagens (últimos 5 anos), histórico de casamento, histórico profissional, histórico criminal, questões de lealdade (boa fé, obediência constitucional). Taxa: US$ 710 (inclui biometria).",
        },
        {
          type: "p",
          text: "Preenchimento errado no N-400 é onde muitos brasileiros tropeçam. Pontos de atenção:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Histórico de viagens: cada saída e entrada dos EUA nos últimos 5 anos (ou 3 se aplica regra do cônjuge). Viagens acima de 6 meses podem quebrar ‘residência contínua’.",
            "Declaração de imposto: você precisa ter declarado Form 1040 em todos os anos desde green card. Falha em declarar = ‘lack of good moral character’.",
            "Histórico criminal: qualquer contato com polícia, incluindo multas, prisões administrativas, DUIs. Omissão é motivo de negação + possível processo criminal.",
            "Registro no Selective Service: homens entre 18 e 25 que moram nos EUA devem se registrar. Falha compromete naturalização.",
            "Pensão alimentícia: se você tem filhos fora do casamento, USCIS exige prova de pensão em dia como componente de ‘good moral character’.",
          ],
        },
        { type: "h2", text: "O teste cívico e de inglês", id: "teste" },
        {
          type: "h3", text: "Teste de inglês", id: "teste-ingles",
        },
        {
          type: "p",
          text: "Três componentes: leitura (ler em voz alta 1 de 3 frases), escrita (escrever 1 de 3 ditadas), conversa (o oficial avalia durante a entrevista do N-400). Nível exigido: conversacional. Você não precisa falar inglês perfeito.",
        },
        {
          type: "h3", text: "Teste cívico", id: "teste-civico",
        },
        {
          type: "p",
          text: "100 perguntas publicadas pelo USCIS (disponíveis gratuitamente em uscis.gov/citizenship). Oficial pergunta 10 aleatórias; você precisa acertar 6. Temas: sistema de governo, história americana, direitos e deveres, geografia e feriados.",
        },
        {
          type: "p",
          text: "Exemplos das 100: ‘Qual é a lei suprema do país?’ (The Constitution); ‘Quantos senadores tem os EUA?’ (100); ‘Em que ano a Constituição foi escrita?’ (1787).",
        },
        { type: "h2", text: "Isenções e acomodações", id: "isencoes" },
        {
          type: "p",
          text: "USCIS oferece exceções ao requisito de inglês/teste cívico:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "50/20: tem 50+ anos e é LPR há 20+ anos — dispensado do inglês, teste cívico pode ser em português.",
            "55/15: tem 55+ e é LPR há 15+ — dispensado do inglês, teste cívico em português.",
            "65/20: tem 65+ e é LPR há 20+ — dispensado do inglês, teste cívico reduzido a 20 perguntas (só 6 acertos exigidos).",
            "N-648 Medical Waiver: deficiência física ou cognitiva documentada por médico — pode dispensar ambos os testes.",
          ],
        },
        { type: "h2", text: "Dupla cidadania: a grande pergunta", id: "dupla-cidadania" },
        {
          type: "p",
          text: "Brasileiro que naturaliza americano PERDE a cidadania brasileira? Resposta curta: NÃO.",
        },
        {
          type: "p",
          text: "A Constituição Brasileira (Art. 12, §4, II) estabelece que cidadão brasileiro nato só perde sua nacionalidade se adquirir voluntariamente outra — com exceção explícita quando a naturalização é ‘condição para permanência em seu território ou para o exercício de direitos civis’. Tribunais e MRE interpretam essa exceção amplamente: a naturalização americana do brasileiro que já mora nos EUA quase sempre cai na exceção, ou é tolerada.",
        },
        {
          type: "p",
          text: "Do lado americano: EUA reconhecem dupla cidadania. Ao fazer o oath, você jura lealdade aos EUA e renuncia ‘absolutamente e inteiramente’ a fidelidade a outros países — mas a prática americana não exige renúncia formal ao governo brasileiro. Você continua cidadão brasileiro para todos os efeitos: votar no Brasil (quando disponível em consulado), ter CPF, manter passaporte brasileiro, possuir bens, herdar.",
        },
        {
          type: "callout",
          tone: "success",
          title: "Na prática: circule com os dois passaportes",
          body:
            "Brasileiros com dupla cidadania viajam usando passaporte brasileiro ao entrar no Brasil e passaporte americano ao entrar nos EUA. Lei brasileira exige que brasileiro entre e saia do território nacional com passaporte brasileiro; lei americana exige que USC entre e saia dos EUA com passaporte americano. Dois passaportes válidos simultaneamente é o padrão.",
        },
        { type: "h2", text: "Timeline end-to-end", id: "timeline" },
        {
          type: "list",
          style: "number",
          items: [
            "Dia 1: Protocolo N-400 (dentro da janela de 90 dias pré-5-anos).",
            "2–6 semanas: Receipt notice confirma recebimento.",
            "2–4 meses: Biometrics appointment (foto, impressões digitais).",
            "6–14 meses (média 2026): Entrevista + teste cívico + teste inglês em uma única sessão.",
            "1–3 meses após aprovação: Cerimônia de naturalização (oath). Você recebe o Certificate of Naturalization.",
            "1 semana após a cerimônia: Pedido de passaporte americano via Form DS-11. 4–6 semanas para emissão.",
          ],
        },
        { type: "h2", text: "Custos", id: "custos" },
        {
          type: "table",
          headers: ["Item", "Custo USD"],
          rows: [
            ["USCIS N-400 filing fee (inclui biometria)", "$710"],
            ["Honorários advogado (preparação completa)", "$1.500 – $3.500"],
            ["Passaporte americano DS-11 (primeiro)", "$165"],
            ["Cartório certidão de nascimento americano (para filhos pós-naturalização)", "$25 – $50"],
            ["Total típico", "$2.400 – $4.300"],
          ],
        },
        { type: "h2", text: "Armadilhas comuns", id: "armadilhas" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Aplicar antes de ter 5 anos de LPR (ou 3 se casado USC). USCIS nega e pode exigir novo filing.",
            "Viagens longas ao Brasil (6+ meses): quebra ‘continuous residence’ e reseta o contador.",
            "Não declarar imposto americano em algum ano desde o green card. IRS compartilha dados com USCIS.",
            "Omitir contato anterior com polícia americana, mesmo DUIs ou multas antigas. USCIS consulta FBI.",
            "Divórcio durante regra dos 3 anos: você perde a elegibilidade acelerada mesmo se já tinha 2,5 anos de casamento.",
            "Assumir que precisa renunciar à cidadania brasileira. Não precisa.",
          ],
        },
        { type: "h2", text: "Quando vale a pena esperar", id: "esperar" },
        {
          type: "p",
          text: "A única razão racional para adiar a naturalização após se tornar elegível: você está considerando deixar os EUA permanentemente. Cidadão americano é obrigado a declarar imposto de renda federal sobre renda global pelo resto da vida — expatriação tributária (renúncia à cidadania para escapar desse dever) é processo caro e complexo.",
        },
        {
          type: "p",
          text: "Para quase todo brasileiro que pretende continuar nos EUA: naturalize assim que elegível. Cada ano de espera é um ano sem direito de voto, sem passaporte americano para viagens, e com limitações de patrocínio imigratório.",
        },
      ],
      faq: [
        {
          q: "Perco a cidadania brasileira ao virar americano?",
          a: "Não. A Constituição Brasileira (Art. 12, §4, II) permite manter a cidadania brasileira quando a naturalização americana é condição para permanência ou exercício de direitos civis — o que se aplica a praticamente todo brasileiro que mora nos EUA. Dos EUA, dupla cidadania é reconhecida. Na prática, você circula com os dois passaportes pelo resto da vida.",
        },
        {
          q: "Posso aplicar para naturalização se ainda tenho green card condicional (EB-5 ou casamento)?",
          a: "Não. A contagem dos 5 (ou 3) anos só começa após aprovação do I-829 (EB-5) ou I-751 (casamento) e emissão do green card permanente de 10 anos. Você precisa ser LPR ‘permanente’, não condicional.",
        },
        {
          q: "Posso naturalizar se viajei bastante ao Brasil durante o período de 5 anos?",
          a: "Sim, desde que: (1) nenhuma viagem tenha sido de 6+ meses (quebra continuous residence automaticamente); (2) total de presença física seja ≥ 30 meses em 60 meses. Viagens de 1–6 meses não quebram automaticamente, mas USCIS examina sua residência efetiva — trabalho, imóvel, família nos EUA ajudam a demonstrar.",
        },
        {
          q: "Cidadão naturalizado tem os mesmos direitos que nascido nos EUA?",
          a: "Quase — com uma exceção: cidadão naturalizado não pode ser eleito Presidente ou Vice-Presidente dos EUA (Constituição, Art. II, §1). Todos os outros cargos federais, estaduais, jurados, forças armadas, clearances de segurança — todos acessíveis.",
        },
        {
          q: "Meus filhos nascidos após a naturalização viram americanos automaticamente?",
          a: "Sim, se nascidos nos EUA (14ª Emenda). Filhos nascidos no exterior após você ser USC também podem reivindicar cidadania via Consulate Report of Birth Abroad se certos requisitos de residência do pai/mãe nos EUA forem cumpridos. Cônjuge não vira USC automaticamente — precisa apresentar próprio N-400 após período aplicável.",
        },
      ],
      related: [
        { label: "US Citizenship — serviço completo", href: "/immigration/immigrant-visas/us-citizenship" },
        { label: "Simulador de tempo para Green Card", href: "/tools/green-card-timeline" },
        { label: "Calculadora de custo de visto", href: "/tools/visa-cost-estimator" },
      ],
    },
    en: {
      title: "US naturalization: when and how to apply in 2026 (Brazilian's guide)",
      description:
        "Complete 2026 guide to naturalization for Brazilians: 5-year rule, 3-year USC-spouse shortcut, civics test, oath, dual citizenship confirmed.",
      dek: "Green card is status. Citizenship is a right. After 5 years as LPR (or 3 married to USC), you close the loop — without losing Brazilian citizenship.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "Most common post-green-card question: when can I apply? Do I lose my Brazilian passport? Do I need perfect English?",
        },
        {
          type: "p",
          text: "Short answers: 5 years as LPR (or 3 if married to USC), no loss of Brazilian citizenship, conversational English is enough, civics = 6 of 10 from a public 100-question list.",
        },
        { type: "h2", text: "The 5 core requirements" },
        {
          type: "list",
          style: "number",
          items: [
            "18+ years old.",
            "5 years as LPR (or 3 with USC spouse).",
            "Physical presence ≥ 50% of the period.",
            "Good moral character throughout.",
            "Basic English + civics test.",
          ],
        },
        { type: "h2", text: "5-year vs 3-year rule" },
        {
          type: "table",
          headers: ["Requirement", "5-year (standard)", "3-year (USC spouse)"],
          rows: [
            ["LPR residence", "5 yrs", "3 yrs"],
            ["Physical presence", "30 mo", "18 mo"],
            ["Married to USC throughout", "No", "Yes"],
            ["Marital union (not paper only)", "No", "Yes"],
          ],
        },
        { type: "h2", text: "Dual citizenship — the big question" },
        {
          type: "p",
          text: "Does a Brazilian lose Brazilian citizenship by naturalizing American? No. Brazilian Constitution Art. 12 §4 II preserves Brazilian citizenship when US naturalization is a condition for permanence / civil rights — which applies to virtually every Brazilian living in the US. US side recognizes dual citizenship.",
        },
        {
          type: "callout",
          tone: "success",
          title: "In practice: circulate with both passports",
          body:
            "Brazilian law requires Brazilian passport when entering/leaving Brazil; US law requires US passport when entering/leaving the US. Holding both simultaneously is the standard.",
        },
        { type: "h2", text: "Timeline" },
        {
          type: "list",
          style: "number",
          items: [
            "Day 1: file N-400 (up to 90 days before 5-year mark).",
            "2–6 weeks: receipt notice.",
            "2–4 months: biometrics.",
            "6–14 months: interview + civics + English test.",
            "1–3 months after approval: oath ceremony.",
            "1 week after oath: apply for US passport (DS-11).",
          ],
        },
      ],
      faq: [
        {
          q: "Do I lose Brazilian citizenship?",
          a: "No. Brazilian Constitution preserves it when US naturalization is needed for permanence — which applies to most Brazilians in the US.",
        },
        {
          q: "Can I naturalize with conditional green card?",
          a: "No. The 5 (or 3) year clock starts after I-829 or I-751 approval — you need permanent, not conditional, LPR status.",
        },
        {
          q: "Naturalized citizen = same rights as native-born?",
          a: "Almost — with one exception: naturalized citizens cannot be elected President or VP (Article II, §1). All other federal/state/military/clearance positions are accessible.",
        },
      ],
      related: [
        { label: "US Citizenship service", href: "/immigration/immigrant-visas/us-citizenship" },
        { label: "Green Card Timeline estimator", href: "/tools/green-card-timeline" },
      ],
    },
    es: {
      title: "Naturalización americana: cuándo y cómo en 2026",
      description: "Guía para brasileños: regla 5 años, atajo 3 años vía USC, examen cívico, oath, doble ciudadanía.",
      dek: "Green card es estatus. Ciudadanía es derecho. Después de 5 años (o 3 casado con USC), cierras el ciclo.",
      readingMinutes: 5,
      body: [
        { type: "p", text: "5 años como LPR (o 3 si casado con USC), no pierdes ciudadanía brasileña, inglés conversacional, cívico: 6 de 10 de una lista pública de 100 preguntas." },
        { type: "h2", text: "5 requisitos" },
        { type: "list", style: "number", items: ["18+ años.", "5 años LPR (o 3 con USC).", "Presencia física ≥ 50%.", "Buen carácter moral.", "Inglés básico + examen cívico."] },
        { type: "h2", text: "Doble ciudadanía" },
        { type: "p", text: "Brasileño NO pierde ciudadanía brasileña al naturalizar en EE.UU. Constitución Art. 12 §4 II la preserva cuando la naturalización americana es condición de permanencia." },
      ],
      faq: [
        { q: "¿Pierdo ciudadanía brasileña?", a: "No. Constitución brasileña la preserva." },
        { q: "¿Green card condicional sirve?", a: "No. Necesitas LPR permanente." },
      ],
      related: [
        { label: "US Citizenship", href: "/immigration/immigrant-visas/us-citizenship" },
      ],
    },
  },
};
