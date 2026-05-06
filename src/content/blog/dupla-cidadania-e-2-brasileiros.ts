import type { Article } from "./types";

// Article — E-2 via dual citizenship for Brazilians. Doc-spec priority
// per May 2026 PLwebsite audit Block 4.22. Authoritative sources:
// 8 USC §1101(a)(15)(E), 9 FAM 402.9 (DOS Foreign Affairs Manual),
// Matter of Walsh and Pollard (BIA 1988) on principal nationality,
// 22 CFR §41.51 on treaty trader/investor adjudication.

export const duplaCidadaniaE2Brasileiros: Article = {
  slug: "dupla-cidadania-e-2-brasileiros",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  keywords: [
    "e-2 brasileiro dupla cidadania",
    "visto e-2 italiano portugues",
    "treaty investor brazil",
    "passaporte europeu visto e2 eua",
    "principal nationality e-2",
    "9 FAM 402.9",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "Brasileiro com dupla cidadania pode tirar visto E-2? Guia 2026",
      description:
        "Brasil não é signatário do tratado E-2, mas brasileiros com dupla cidadania (italiana, portuguesa, espanhola, turca, granadina) qualificam. Como funciona, países elegíveis, requisitos e armadilhas.",
      dek: "Brasil não é país signatário. Sem dupla cidadania, E-2 está fora de alcance — mas com passaporte italiano, português ou de outros 80+ países, o caminho se abre. Aqui está exatamente como funciona.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "O visto E-2 (Treaty Investor) é uma das rotas mais ágeis para empresários estrangeiros entrarem nos EUA — aprovação em 3-6 meses, sem fila do Visa Bulletin, renovável indefinidamente, com cônjuge recebendo EAD para trabalhar livremente. O problema: Brasil NÃO é signatário do tratado E-2.",
        },
        {
          type: "p",
          text: "A boa notícia: brasileiros com dupla cidadania de um país signatário podem qualificar normalmente. Este artigo cobre exatamente quem qualifica, quais países são elegíveis em 2026, requisitos do investimento, e a 'principal nationality doctrine' que pode bloquear pedidos mal estruturados.",
        },
        { type: "h2", text: "Por que Brasil não é signatário?", id: "brasil-tratado" },
        {
          type: "p",
          text: "O tratado bilateral entre Brasil e EUA foi negociado em 1967 (Treaty of Friendship, Commerce and Navigation), mas nunca foi ratificado pelo Senado americano. Em 2026, ainda não há indicação de que será ratificado em curto prazo. O único acordo bilateral em vigor é o de Totalização Previdenciária (Social Security, 2018) — que afeta INSS/Social Security mas não imigração.",
        },
        {
          type: "p",
          text: "Resultado prático: brasileiros com cidadania única brasileira NÃO qualificam ao E-2. Tentativas de usar 'green card brasileiro' ou 'residência permanente em país signatário' não funcionam — o E-2 exige cidadania, não residência.",
        },
        { type: "h2", text: "Países signatários relevantes para brasileiros (2026)", id: "paises-signatarios" },
        {
          type: "p",
          text: "Os signatários mais comuns para brasileiros que buscam dupla cidadania:",
        },
        {
          type: "table",
          headers: ["País", "Caminho típico de cidadania para brasileiro", "Validade E-2 inicial"],
          rows: [
            ["Itália", "Jure sanguinis (descendência sem limite geracional, com restrições recentes)", "5 anos"],
            ["Portugal", "Jure sanguinis (limitado a netos) ou naturalização (5+ anos residência)", "5 anos"],
            ["Espanha", "Cidadania por residência (10 anos) ou jure sanguinis recente", "5 anos"],
            ["Alemanha", "Naturalização (8 anos residência) ou descendência específica", "5 anos"],
            ["Turquia", "Programa de cidadania por investimento (US$ 400K imobiliário)", "5 anos"],
            ["Granada", "Programa de cidadania por investimento (US$ 150K doação)", "5 anos"],
            ["Reino Unido", "Naturalização (5 anos residência) ou descendência", "5 anos"],
          ],
          note: "Lista completa de 80+ países signatários disponível em 9 FAM 402.9-10. Holanda, Bélgica, França, Argentina, Chile, México também são signatários. Israel adicionado em 2019.",
        },
        { type: "h2", text: "A doutrina da 'principal nationality'", id: "principal-nationality" },
        {
          type: "p",
          text: "Aqui está a armadilha que negaria muitos pedidos brasileiros: USCIS e o Departamento de Estado avaliam qual cidadania é a 'principal' do requerente. O Foreign Affairs Manual (9 FAM 402.9-4) instrui adjudicadores a olhar:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Onde você nasceu e cresceu",
            "Onde reside atualmente e há quanto tempo",
            "Onde paga impostos hoje",
            "Onde possui ativos (imóveis, contas bancárias, empresas)",
            "Em qual passaporte você normalmente viaja",
            "Vínculos familiares predominantes",
            "Histórico de uso da cidadania signatária",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Cidadania apenas no papel não basta",
          body: "Um brasileiro que reconheceu cidadania italiana há 6 meses, nunca morou na Itália, fala apenas português e tem todos os ativos no Brasil PODE TER NEGAÇÃO sob a doutrina de principal nationality. Um cônsul rigoroso considerará a cidadania italiana 'nominal'. Recomendamos pelo menos 2-3 anos de uso ativo da cidadania signatária — viagens regulares, conta bancária no país, comprovantes de domicílio, antes de aplicar o E-2.",
        },
        { type: "h2", text: "Os 5 requisitos materiais do E-2", id: "requisitos-e2" },
        {
          type: "list",
          style: "number",
          items: [
            "Cidadania de país signatário (e cumprimento da principal nationality doctrine)",
            "Investimento substancial em empresa americana ativa — não há valor mínimo legal, mas adjudicadores esperam US$ 100K-200K mínimo dependendo do setor (restaurante difere de consultoria)",
            "Empresa nos EUA não é marginal — deve gerar mais que renda mínima de subsistência para a família do investidor (proporcionalidade ao investimento)",
            "Investidor desenvolverá e dirigirá a empresa (E-2 principal) ou ocupa função executiva/supervisora/altamente especializada (E-2 employee derivative)",
            "Fundos investidos são 'at risk' — sujeitos a perda parcial ou total se o negócio falhar (empréstimos pessoais sem garantia podem qualificar; empréstimos garantidos pela própria empresa não)",
          ],
        },
        { type: "h2", text: "Investimento 'substancial' — quanto é o suficiente?", id: "investimento-substancial" },
        {
          type: "p",
          text: "Não há valor mínimo legal. O FAM aplica o 'proportionality test' — o investimento deve ser proporcional ao custo total da empresa. Faixas práticas observadas em adjudicações 2024-2026:",
        },
        {
          type: "table",
          headers: ["Setor", "Investimento típico mínimo", "Observação"],
          rows: [
            ["Consultoria / serviços profissionais", "US$ 100K-150K", "Custo total geralmente menor; proporção alta"],
            ["E-commerce / SaaS", "US$ 150K-250K", "Inclui inventário, dev, marketing inicial"],
            ["Restaurante", "US$ 200K-400K", "Equipamento + ponto + staff"],
            ["Franchise", "US$ 250K-500K", "Conforme franchise fee + setup"],
            ["Manufatura leve", "US$ 400K-1M", "Equipamento, espaço, inventário"],
            ["Real estate development", "US$ 500K+", "Costuma exigir comprovação de operação ativa, não passiva"],
          ],
          note: "Real estate puramente passivo (comprar imóvel para alugar) NÃO qualifica para E-2 — falta o 'develop and direct' ativo. Estruturas de short-term rental gerenciadas pelo investidor podem qualificar.",
        },
        { type: "h2", text: "E-2 é renovável — mas não traz green card", id: "renovacao" },
        {
          type: "p",
          text: "O E-2 é renovável indefinidamente em incrementos de 2-5 anos, enquanto o investimento permanece ativo e a empresa não é marginal. Um casal com filhos pode viver nos EUA por 10-20 anos em E-2.",
        },
        {
          type: "p",
          text: "Mas o E-2 NÃO é caminho direto ao green card — não há transição automática como L-1A → EB-1C. Para residência permanente, investidores E-2 frequentemente aplicam EB-5 (US$ 800K em TEA) usando a empresa E-2 como base, ou EB-2 NIW se o perfil profissional permitir.",
        },
        { type: "h2", text: "Família E-2: cônjuge trabalha, filhos estudam", id: "familia-e2" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Cônjuge (E-2 derivative): recebe EAD automaticamente desde regulamento de 2022 — pode trabalhar para qualquer empregador americano",
            "Filhos solteiros menores de 21 anos: status E-2 derivative, frequentam escola pública gratuita",
            "Filhos perdem status ao completar 21 anos (aging out) — precisam transitar para F-1 ou outro status",
            "Cônjuge não pode trabalhar na própria empresa E-2 sem aprovação adicional (em alguns escritórios consulares — verificar caso a caso)",
          ],
        },
        { type: "h2", text: "Erros comuns que causam negação", id: "erros-comuns" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Aplicar com cidadania signatária recém-reconhecida sem evidência de uso (principal nationality denial)",
            "Investimento concentrado em terreno sem desenvolvimento ativo (não-qualificante)",
            "Plano de negócios genérico sem projeções financeiras detalhadas (5-year financial plan é padrão)",
            "Empréstimo da própria empresa americana ao investidor (fundos não estão 'at risk' do investidor)",
            "Empresa marginal que não emprega ninguém além do investidor e gera pouca renda",
            "Documentação fraca da source of funds — adjudicadores escrutinam origem do investimento (poupança, herança, venda de imóvel etc.)",
          ],
        },
      ],
      faq: [
        {
          q: "Reconheci cidadania italiana mas nunca morei na Itália. Posso aplicar E-2 imediatamente?",
          a: "Tecnicamente sim, mas com risco elevado de denial sob principal nationality doctrine. Recomendamos demonstrar uso ativo da cidadania por 2-3 anos antes do filing — passaporte usado em viagens, conta bancária italiana, comprovantes de domicílio se possível. Em casos de urgência, estratégias mitigadoras existem (ex.: estabelecer presença italiana mais curta + carta de explicação detalhada).",
        },
        {
          q: "Investimento de US$ 100K é suficiente para E-2 em consultoria?",
          a: "Sim, frequentemente. Para consultoria/serviços profissionais com custo total de empresa relativamente baixo (US$ 130-180K), US$ 100K é geralmente substancial e proporcional. Para restaurante ou e-commerce o mínimo prático sobe para US$ 200K+.",
        },
        {
          q: "Posso comprar uma empresa existente americana com E-2?",
          a: "Sim — aquisição de empresa em operação é caminho válido e frequentemente preferido (reduz risco de marginality). O contrato de compra deve estar finalizado e os fundos transferidos ao filing — 'at risk' significa já investidos, não 'a investir'.",
        },
        {
          q: "Se meu E-2 for negado, posso aplicar EB-5?",
          a: "Sim, são programas independentes. EB-5 não exige cidadania signatária — Brasil qualifica diretamente. Investimento mínimo é US$ 800K em TEA (Targeted Employment Area) e gera green card permanente, não visto temporário. Brasileiros estão CURRENT em EB-5 em 2026.",
        },
        {
          q: "Qual a diferença entre E-2 e L-1A para empresário brasileiro?",
          a: "E-2 exige cidadania signatária + investimento substancial em empresa americana. L-1A NÃO exige cidadania signatária mas exige empresa brasileira em operação há 1+ ano + executivo transferindo a subsidiária americana. Para empresário brasileiro com empresa estabelecida no Brasil, L-1A frequentemente é mais limpo. Para investidor sem empresa brasileira matriz, E-2 (com dupla cidadania) é o caminho.",
        },
      ],
      related: [
        { label: "E-2 Treaty Investor — visão geral", href: "/immigration/non-immigrant-visas/e-2" },
        { label: "L-1A — alternativa sem dupla cidadania", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-5 — Green Card por investimento", href: "/immigration/immigrant-visas/eb-5" },
        { label: "Como abrir empresa nos EUA sendo brasileiro", href: "/blog/abrir-empresa-eua-sendo-brasileiro" },
      ],
    },
    en: {
      title: "Can a Brazilian with Dual Citizenship Get an E-2 Visa? 2026 Guide",
      description:
        "Brazil is not an E-2 treaty country, but Brazilians with dual citizenship (Italian, Portuguese, Spanish, Turkish, Grenadian) qualify. How it works, eligible countries, requirements, and pitfalls.",
      dek: "Brazil is not a treaty country. Without dual citizenship, E-2 is out of reach — but with an Italian, Portuguese, or other 80+ country passport, the door opens. Here's exactly how it works.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "The E-2 (Treaty Investor) visa is one of the fastest paths for foreign entrepreneurs to enter the US — approval in 3-6 months, no Visa Bulletin queue, indefinitely renewable, with the spouse receiving an EAD to work freely. The catch: Brazil is NOT an E-2 treaty country.",
        },
        {
          type: "p",
          text: "Good news: Brazilians with dual citizenship from a treaty country qualify normally. This article covers exactly who qualifies, which countries are eligible in 2026, investment requirements, and the 'principal nationality doctrine' that can block poorly structured petitions.",
        },
        { type: "h2", text: "Why isn't Brazil a signatory?", id: "brazil-treaty" },
        {
          type: "p",
          text: "The bilateral treaty between Brazil and the US was negotiated in 1967 (Treaty of Friendship, Commerce and Navigation) but was never ratified by the US Senate. As of 2026, there is no indication of imminent ratification. The only bilateral agreement in force is the 2018 Social Security Totalization Agreement — which affects INSS/Social Security but not immigration.",
        },
        { type: "h2", text: "Treaty countries relevant for Brazilians (2026)", id: "treaty-countries" },
        {
          type: "table",
          headers: ["Country", "Typical citizenship path for Brazilian", "Initial E-2 validity"],
          rows: [
            ["Italy", "Jure sanguinis (recent generational restrictions)", "5 years"],
            ["Portugal", "Jure sanguinis (limited to grandchildren) or naturalization (5+ yrs residence)", "5 years"],
            ["Spain", "Citizenship by residence (10 yrs) or recent jure sanguinis", "5 years"],
            ["Germany", "Naturalization (8 yrs residence) or specific descent", "5 years"],
            ["Turkey", "Citizenship-by-investment program ($400K real estate)", "5 years"],
            ["Grenada", "Citizenship-by-investment ($150K donation)", "5 years"],
            ["United Kingdom", "Naturalization (5 yrs residence) or descent", "5 years"],
          ],
          note: "Full list of 80+ treaty countries available at 9 FAM 402.9-10. Netherlands, Belgium, France, Argentina, Chile, Mexico are also signatories. Israel was added in 2019.",
        },
        { type: "h2", text: "The 'principal nationality' doctrine", id: "principal-nationality" },
        {
          type: "p",
          text: "Here's the trap that would deny many Brazilian applications: USCIS and the State Department evaluate which citizenship is the applicant's 'principal'. The Foreign Affairs Manual (9 FAM 402.9-4) instructs adjudicators to look at:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Where you were born and raised",
            "Where you currently reside and for how long",
            "Where you currently pay taxes",
            "Where you hold assets (real estate, bank accounts, businesses)",
            "Which passport you normally travel on",
            "Predominant family ties",
            "History of using the treaty citizenship",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Citizenship 'on paper only' isn't enough",
          body: "A Brazilian who recognized Italian citizenship 6 months ago, never lived in Italy, speaks only Portuguese, and holds all assets in Brazil CAN BE DENIED under the principal nationality doctrine. A strict consul will treat the Italian citizenship as 'nominal'. We recommend at least 2-3 years of active use of the treaty citizenship — regular travel, a bank account in the country, residence proof — before applying for E-2.",
        },
        { type: "h2", text: "The 5 substantive E-2 requirements", id: "e2-requirements" },
        {
          type: "list",
          style: "number",
          items: [
            "Citizenship of treaty country (and meeting the principal nationality doctrine)",
            "Substantial investment in an active US business — no legal minimum, but adjudicators expect $100K-200K minimum depending on industry (restaurant differs from consulting)",
            "The US business is not marginal — must generate more than minimal subsistence income for the investor's family (proportional to investment)",
            "The investor will develop and direct the enterprise (principal E-2) or holds an executive/supervisory/highly specialized role (E-2 employee derivative)",
            "Funds invested are 'at risk' — subject to partial or total loss if the business fails (unsecured personal loans can qualify; loans secured by the business itself do not)",
          ],
        },
        { type: "h2", text: "What counts as 'substantial' investment?", id: "substantial-investment" },
        {
          type: "table",
          headers: ["Industry", "Typical minimum investment", "Note"],
          rows: [
            ["Consulting / professional services", "$100K-150K", "Lower total business cost; high proportion"],
            ["E-commerce / SaaS", "$150K-250K", "Includes inventory, dev, initial marketing"],
            ["Restaurant", "$200K-400K", "Equipment + location + staff"],
            ["Franchise", "$250K-500K", "Per franchise fee + setup"],
            ["Light manufacturing", "$400K-1M", "Equipment, space, inventory"],
            ["Real estate development", "$500K+", "Active operation required, not passive holding"],
          ],
          note: "Purely passive real estate (buying property to rent) does NOT qualify for E-2 — it lacks active 'develop and direct'. Investor-managed short-term rental structures may qualify.",
        },
        { type: "h2", text: "E-2 is renewable — but does not lead to green card", id: "renewal" },
        {
          type: "p",
          text: "E-2 is indefinitely renewable in 2-5 year increments, as long as the investment remains active and the business is not marginal. A family with children can live in the US for 10-20 years on E-2.",
        },
        {
          type: "p",
          text: "But E-2 is NOT a direct path to a green card — there's no automatic transition like L-1A → EB-1C. For permanent residence, E-2 investors frequently apply for EB-5 ($800K in TEA) using the E-2 business as the base, or EB-2 NIW if the professional profile allows.",
        },
        { type: "h2", text: "E-2 family: spouse works, kids study", id: "e2-family" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Spouse (E-2 derivative): receives EAD automatically since the 2022 regulation — can work for any US employer",
            "Unmarried children under 21: E-2 derivative status, attend US public schools",
            "Children lose status at age 21 (aging out) — must transition to F-1 or other status",
          ],
        },
      ],
      faq: [
        {
          q: "I just recognized Italian citizenship but never lived in Italy. Can I apply for E-2 immediately?",
          a: "Technically yes, but with elevated risk of denial under the principal nationality doctrine. We recommend demonstrating active use of the citizenship for 2-3 years before filing — passport used in travel, Italian bank account, residence proof if possible. In urgent cases, mitigating strategies exist (e.g., establishing shorter Italian presence + detailed explanation letter).",
        },
        {
          q: "Is $100K enough for E-2 in consulting?",
          a: "Often yes. For consulting/professional services with relatively low total business cost ($130-180K), $100K is generally substantial and proportional. For restaurant or e-commerce the practical minimum rises to $200K+.",
        },
        {
          q: "Can I buy an existing US business with E-2?",
          a: "Yes — acquisition of an operating business is a valid and often preferred path (reduces marginality risk). The purchase contract must be finalized and funds transferred at filing — 'at risk' means already invested, not 'to be invested'.",
        },
        {
          q: "If my E-2 is denied, can I apply for EB-5?",
          a: "Yes, they are independent programs. EB-5 does not require treaty citizenship — Brazil qualifies directly. Minimum investment is $800K in a TEA (Targeted Employment Area) and produces a permanent green card, not a temporary visa. Brazilians are CURRENT in EB-5 in 2026.",
        },
        {
          q: "What's the difference between E-2 and L-1A for a Brazilian entrepreneur?",
          a: "E-2 requires treaty citizenship + substantial investment in a US business. L-1A does NOT require treaty citizenship but requires a Brazilian company operating for 1+ year + an executive transferring to a US subsidiary. For a Brazilian with an established Brazilian company, L-1A is often cleaner. For an investor without a Brazilian parent company, E-2 (with dual citizenship) is the path.",
        },
      ],
      related: [
        { label: "E-2 Treaty Investor — overview", href: "/immigration/non-immigrant-visas/e-2" },
        { label: "L-1A — alternative without dual citizenship", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-5 — investor green card", href: "/immigration/immigrant-visas/eb-5" },
        { label: "How to open a US company as a Brazilian", href: "/blog/abrir-empresa-eua-sendo-brasileiro" },
      ],
    },
    es: {
      title: "¿Brasileño con doble ciudadanía puede obtener visa E-2? Guía 2026",
      description:
        "Brasil no es signatario del tratado E-2, pero brasileños con doble ciudadanía (italiana, portuguesa, española, turca, granadina) califican. Cómo funciona y requisitos.",
      dek: "Brasil no es país signatario. Sin doble ciudadanía, E-2 está fuera de alcance — pero con pasaporte italiano, portugués u otro de 80+ países, el camino se abre.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "La visa E-2 es una de las rutas más rápidas para empresarios extranjeros entrar a EE.UU. — aprobación en 3-6 meses, renovable indefinidamente, cónyuge con EAD automático. El problema: Brasil NO es país signatario del tratado E-2.",
        },
        {
          type: "p",
          text: "Lo bueno: brasileños con doble ciudadanía de un país signatario califican normalmente.",
        },
        { type: "h2", text: "Países signatarios relevantes" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Italia, Portugal, España, Alemania (descendencia o naturalización)",
            "Turquía y Granada (programas de ciudadanía por inversión)",
            "Reino Unido (residencia 5 años)",
            "80+ países en total — lista completa en 9 FAM 402.9-10",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Ciudadanía 'solo en papel' no es suficiente",
          body: "USCIS aplica la doctrina de 'principal nationality' — ciudadanía recientemente reconocida sin uso activo puede ser tratada como nominal y resultar en negación.",
        },
      ],
      faq: [
        {
          q: "¿Reconocí ciudadanía italiana pero nunca viví en Italia. Puedo aplicar E-2?",
          a: "Técnicamente sí, pero con riesgo elevado bajo principal nationality doctrine. Recomendamos demostrar uso activo de la ciudadanía por 2-3 años antes del filing.",
        },
        {
          q: "¿Inversión de US$ 100K es suficiente para E-2?",
          a: "Para consultoría/servicios profesionales generalmente sí. Para restaurante o e-commerce el mínimo práctico sube a US$ 200K+.",
        },
      ],
      related: [
        { label: "E-2 Treaty Investor", href: "/immigration/non-immigrant-visas/e-2" },
        { label: "L-1A", href: "/immigration/non-immigrant-visas/l-1" },
        { label: "EB-5", href: "/immigration/immigrant-visas/eb-5" },
      ],
    },
  },
};
