import type { Article } from "./types";

// Article — FBAR + FATCA for Brazilians with US tax obligations.
// Doc-spec priority topic per May 2026 PLwebsite audit Block 4.22.
// Authoritative reference: 31 CFR §1010.350 (FBAR), 26 USC §6038D
// (FATCA Form 8938), and IRS regulations on willful vs non-willful
// penalty tiers post-Bittner v. United States (S. Ct. 2023).

export const fbarFatcaBrasileirosEua: Article = {
  slug: "fbar-fatca-brasileiros-eua",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  keywords: [
    "fbar brasileiro",
    "fbar quem deve declarar",
    "fatca form 8938",
    "fincen 114 portugues",
    "imposto contas exterior eua",
    "bittner united states",
    "report foreign bank account brazilian",
  ],
  category: {
    pt: "Tributação Brasil-EUA",
    en: "Brazil-US Taxation",
    es: "Tributación Brasil-EE.UU.",
  },
  content: {
    pt: {
      title: "FBAR e FATCA para brasileiros nos EUA: o que declarar e como evitar multas pesadas",
      description:
        "Brasileiros com green card, visto de trabalho ou cidadania americana frequentemente têm obrigações FBAR e FATCA. Quem deve declarar, prazos, multas (atualizadas pós-Bittner 2023) e como regularizar.",
      dek: "Mais de US$ 10.000 em contas brasileiras + algum status fiscal nos EUA = você provavelmente é obrigado a apresentar FBAR. Multas começam em US$ 12.921 por ano não declarado. O Bittner v. US (2023) limitou — mas não eliminou — o risco.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "Este artigo é a referência prática para brasileiros com obrigações fiscais americanas (US persons) que têm contas, investimentos ou bens financeiros no Brasil ou em qualquer outro país. As regras do FBAR (Foreign Bank Account Report) e FATCA (Form 8938) são distintas, têm thresholds diferentes e os erros podem levar a multas civis severas — e em casos de evasão deliberada, criminais.",
        },
        { type: "h2", text: "Quem é uma 'US person' obrigada a declarar?", id: "us-person" },
        {
          type: "p",
          text: "Para fins de FBAR e FATCA, 'US person' inclui:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Cidadãos americanos (incluindo brasileiros naturalizados, mesmo morando no Brasil)",
            "Residentes permanentes — green card holders, mesmo que estejam fisicamente no Brasil",
            "Pessoas que satisfazem o Substantial Presence Test (183 dias ponderados nos últimos 3 anos — fórmula no IRS Pub. 519)",
            "Empresas formadas nos EUA (inclusive LLCs single-member com US person como dono)",
            "Trusts e estates sob lei americana",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Atenção a brasileiros recém-naturalizados",
          body: "Brasileiros que naturalizaram americano e voltaram a morar no Brasil continuam sendo 'US persons' — e continuam tendo obrigações FBAR e FATCA sobre contas brasileiras enquanto mantiverem cidadania americana. A renúncia formal de cidadania é o único caminho que cessa essa obrigação (e tem custos próprios — taxa US$ 2.350 + possível exit tax sob 26 USC §877A).",
        },
        { type: "h2", text: "FBAR (FinCEN Form 114) — o que é", id: "fbar-o-que-e" },
        {
          type: "p",
          text: "FBAR é declaração administrativa apresentada ao FinCEN (Financial Crimes Enforcement Network), não ao IRS. Foi criada pelo Bank Secrecy Act de 1970 e modernizada nas últimas décadas. Não resulta em pagamento de imposto — é puramente informativa, mas a omissão gera multas civis e potencialmente criminais.",
        },
        {
          type: "table",
          headers: ["FBAR — características", "Detalhe"],
          rows: [
            ["Threshold", "US$ 10.000 ou mais em qualquer momento do ano (somando todas as contas estrangeiras)"],
            ["Formulário", "FinCEN Form 114 (eletrônico via BSA E-Filing System)"],
            ["Prazo", "15 de abril (extensão automática até 15 de outubro)"],
            ["Apresentado a", "FinCEN (Tesouro)"],
            ["Tipo de declaração", "Informativa — não gera imposto"],
            ["Atinge cidadão americano fora dos EUA?", "Sim, sempre que threshold for atingido"],
          ],
        },
        { type: "h2", text: "O que conta como 'conta estrangeira reportável'", id: "contas-reportaveis" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Contas correntes e poupança em bancos brasileiros (Itaú, Bradesco, Santander, Banco do Brasil, Inter, Nubank etc.)",
            "Contas de investimento em corretoras brasileiras (XP, BTG Pactual, Rico, Clear, etc.)",
            "Fundos de investimento brasileiros (multimercado, ações, renda fixa, FIPs)",
            "Previdência privada (PGBL, VGBL) com saldo acumulado",
            "Conta digital com criptomoedas custodiada por exchange brasileira (em alguns casos — análise específica)",
            "Contas conjuntas (declarar a totalidade do saldo, não apenas sua participação)",
            "Contas em nome de empresa brasileira controlada (CPF Investimentos S/A, holdings familiares)",
          ],
        },
        { type: "h2", text: "FATCA (Form 8938) — diferente do FBAR", id: "fatca-form-8938" },
        {
          type: "p",
          text: "FATCA (Foreign Account Tax Compliance Act, 2010) introduziu o Form 8938 — apresentado junto com a declaração de imposto (Form 1040), ao IRS. É uma camada adicional ao FBAR, com thresholds diferentes:",
        },
        {
          type: "table",
          headers: ["Status", "Threshold (vivendo nos EUA)", "Threshold (vivendo fora dos EUA)"],
          rows: [
            ["Solteiro", "US$ 50.000 (fim do ano) ou US$ 75.000 (qualquer momento)", "US$ 200.000 ou US$ 300.000"],
            ["Casado, declaração conjunta", "US$ 100.000 ou US$ 150.000", "US$ 400.000 ou US$ 600.000"],
            ["Casado, declaração separada", "US$ 50.000 ou US$ 75.000", "US$ 200.000 ou US$ 300.000"],
          ],
          note: "FBAR atinge muito mais brasileiros (threshold de US$ 10.000) do que FATCA. Mas se você atinge FATCA, atinge FBAR também — apresente os dois.",
        },
        { type: "h2", text: "Multas atualizadas (2026) — pós-Bittner v. United States", id: "multas" },
        {
          type: "p",
          text: "Em fevereiro de 2023, a Suprema Corte decidiu Bittner v. United States. Em vez de a multa civil de FBAR ser por conta não declarada, a Corte decidiu que é por formulário não apresentado. Para Bittner, a diferença foi US$ 2,72 milhões vs US$ 50.000. Mas atenção: isto se aplica somente a violações não-deliberadas (non-willful).",
        },
        {
          type: "table",
          headers: ["Tipo de violação", "Multa civil 2026"],
          rows: [
            ["Non-willful (sem dolo) — pós-Bittner", "Até US$ 12.921 por formulário (não por conta) por ano"],
            ["Willful (deliberada)", "Maior entre US$ 129.210 OU 50% do saldo da conta no momento da violação, por conta, por ano"],
            ["Penalidades criminais (willful + agravantes)", "Até US$ 500.000 + 10 anos de prisão (31 USC §5322)"],
          ],
          note: "USCIS e o Departamento de Justiça consideram willfulness com base em padrões de evasão deliberada. Erro de boa-fé, desconhecimento ou primeiro filing tardio normalmente são tratados como non-willful.",
        },
        { type: "h2", text: "Como regularizar se já está em atraso", id: "regularizar" },
        {
          type: "p",
          text: "Existem três caminhos principais de regularização para brasileiros que descobriram tardiamente a obrigação:",
        },
        {
          type: "list",
          style: "number",
          items: [
            "Streamlined Filing Compliance Procedures — para violações não-deliberadas. Requer 3 anos de declarações de imposto + 6 anos de FBARs + carta de certificação de não-deliberação. Multa: 5% do saldo agregado mais alto (Streamlined Domestic) ou 0% (Streamlined Foreign Offshore, para quem mora fora).",
            "Delinquent FBAR Submission Procedures — para casos onde os impostos já foram pagos corretamente, mas o FBAR não foi apresentado. Sem multa, desde que o IRS não esteja já investigando.",
            "Voluntary Disclosure Practice — para casos de willful violation. Caminho via OPR/IRS Criminal Investigation. Reduz exposição criminal mas mantém multa civil até 50%. Apenas recomendado quando há risco real de processo criminal.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "NÃO apresente quiet disclosure",
          body: "Quiet disclosure (apresentar FBARs atrasados sem usar um dos programas formais) é especificamente desaconselhado pelo IRS e pode aumentar exposição se descoberto. Use sempre Streamlined ou Delinquent procedure formal.",
        },
        { type: "h2", text: "Posso usar o tratado Brasil-EUA?", id: "tratado" },
        {
          type: "p",
          text: "Não — o tratado bilateral foi NEGOCIADO em 1967 mas NUNCA RATIFICADO pelo Senado americano. Não existe tratado abrangente em vigor. Existe apenas o Acordo de Totalização Previdenciária (Social Security) de 2018, que afeta INSS/Social Security mas não FBAR/FATCA. Brasileiros usam crédito unilateral (foreign tax credit) para evitar bitributação.",
        },
        { type: "h2", text: "Estruturação preventiva: o caminho da Pinho Law", id: "estruturacao" },
        {
          type: "p",
          text: "Para clientes que estão começando a estabelecer presença fiscal nos EUA — green card recente, mudança via L-1A, EB-5 — frequentemente recomendamos:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Inventário inicial de TODAS as contas e ativos no Brasil antes do primeiro tax year americano",
            "Decisão consciente sobre fechar, transferir ou manter cada conta — alguns ativos brasileiros (PGBL/VGBL antigos) têm tratamento PFIC nos EUA, com tributação punitiva",
            "Estrutura de holding offshore (BVI, Cayman) ou trust quando volume justifica — não é evasão, é planejamento",
            "Coordenação com contador brasileiro para alinhamento de declaração CBE (BACEN) com FBAR/FATCA — números devem bater",
            "Cronograma anual de filing: 15/abr para FBAR, 15/abr (extensível 15/out) para 1040 + Form 8938",
          ],
        },
      ],
      faq: [
        {
          q: "Sou brasileiro com green card americano. Preciso declarar FBAR mesmo morando no Brasil?",
          a: "Sim. Green card holders são 'US persons' independentemente de residência física. Enquanto mantiver o green card, FBAR e FATCA continuam aplicáveis sobre contas brasileiras. A obrigação só cessa com abandono formal do green card (Form I-407) ou perda automática após >1 ano fora dos EUA sem reentry permit.",
        },
        {
          q: "Tenho conta no Brasil com R$ 30.000. Tenho que declarar?",
          a: "Depende da cotação do dia mais alto do ano. Se R$ 30.000 ultrapassou US$ 10.000 em qualquer momento do ano (com a cotação flutuante, normalmente passa), você é obrigado a apresentar FBAR. O threshold é em USD, não em moeda local.",
        },
        {
          q: "PGBL e VGBL são reportáveis em FBAR?",
          a: "Sim. Previdência privada brasileira é considerada conta financeira para fins de FBAR. PGBLs antigos podem também ter tratamento PFIC (Passive Foreign Investment Company) sob 26 USC §1297, com tributação punitiva sobre ganhos. Análise caso-a-caso essencial.",
        },
        {
          q: "Esqueci de declarar FBAR por 5 anos. O que faço?",
          a: "Não entre em pânico — Streamlined Filing Compliance Procedures é o caminho padrão para violações não-deliberadas. Requer 3 anos de declarações de imposto corretas + 6 anos de FBARs + certificação de não-dolo. Para quem mora fora dos EUA: 0% de multa. Não faça quiet disclosure.",
        },
        {
          q: "FBAR vai trigger o IRS a investigar imposto não pago?",
          a: "Possivelmente, mas o caminho Streamlined inclui justamente a regularização tributária junto com FBAR. Se você usou créditos brasileiros (IR pago no Brasil) corretamente, frequentemente não há imposto adicional — apenas formulários atrasados. Coordene com tax counsel + advogado de imigração antes de apresentar.",
        },
      ],
      related: [
        { label: "Tributação Brasil–EUA — visão geral", href: "/business/brazil-us-taxation" },
        { label: "Will & Trust para brasileiros nos EUA", href: "/business/will-and-trust" },
        { label: "Como abrir empresa nos EUA", href: "/blog/abrir-empresa-eua-sendo-brasileiro" },
        { label: "Naturalização americana — quando e como", href: "/blog/naturalizacao-americana-quando-como" },
      ],
    },
    en: {
      title: "FBAR and FATCA for Brazilians in the US: What to Report and How to Avoid Heavy Penalties",
      description:
        "Brazilians with a green card, work visa, or US citizenship often have FBAR and FATCA obligations. Who must file, deadlines, penalties (updated post-Bittner 2023), and how to remediate.",
      dek: "Over $10,000 in Brazilian accounts + any US tax status = you probably must file FBAR. Penalties start at $12,921 per undeclared year. Bittner v. US (2023) limited — but did not eliminate — the risk.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "This article is the practical reference for Brazilians with US tax obligations (US persons) who hold accounts, investments, or financial assets in Brazil or anywhere else. FBAR (Foreign Bank Account Report) and FATCA (Form 8938) rules are separate, have different thresholds, and mistakes can lead to severe civil penalties — and in cases of willful evasion, criminal ones.",
        },
        { type: "h2", text: "Who is a 'US person' required to file?", id: "us-person" },
        {
          type: "list",
          style: "bullet",
          items: [
            "US citizens (including naturalized Brazilians, even living in Brazil)",
            "Permanent residents — green card holders, even physically in Brazil",
            "People satisfying the Substantial Presence Test (weighted 183 days over 3 years)",
            "Companies formed in the US (including single-member LLCs with US person owner)",
            "Trusts and estates under US law",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Watch out — newly naturalized Brazilians",
          body: "Brazilians who naturalized as American and returned to live in Brazil remain 'US persons' — and remain bound by FBAR and FATCA on Brazilian accounts as long as they keep US citizenship. Formal renunciation is the only way to end the obligation (and carries its own costs — $2,350 fee + potential exit tax under 26 USC §877A).",
        },
        { type: "h2", text: "FBAR (FinCEN Form 114) — what it is", id: "fbar" },
        {
          type: "table",
          headers: ["FBAR feature", "Detail"],
          rows: [
            ["Threshold", "$10,000 or more at any point during the year (combined across all foreign accounts)"],
            ["Form", "FinCEN Form 114 (electronic via BSA E-Filing System)"],
            ["Deadline", "April 15 (automatic extension to October 15)"],
            ["Filed with", "FinCEN (Treasury), not IRS"],
            ["Type", "Informational — does not trigger tax"],
            ["Hits US citizens abroad?", "Yes, whenever threshold is met"],
          ],
        },
        { type: "h2", text: "Updated penalties (2026) — post-Bittner v. United States", id: "penalties" },
        {
          type: "p",
          text: "In February 2023, the Supreme Court decided Bittner v. United States. Instead of the FBAR civil penalty being per undeclared account, the Court ruled it is per unfiled form. For Bittner, the difference was $2.72 million vs $50,000. But heads up: this applies ONLY to non-willful violations.",
        },
        {
          type: "table",
          headers: ["Violation type", "2026 civil penalty"],
          rows: [
            ["Non-willful — post-Bittner", "Up to $12,921 per form (not per account) per year"],
            ["Willful", "Greater of $129,210 OR 50% of account balance at time of violation, per account, per year"],
            ["Criminal penalties (willful + aggravating)", "Up to $500,000 + 10 years prison (31 USC §5322)"],
          ],
        },
        { type: "h2", text: "How to remediate if you're behind", id: "remediation" },
        {
          type: "list",
          style: "number",
          items: [
            "Streamlined Filing Compliance Procedures — for non-willful violations. Requires 3 years tax returns + 6 years FBARs + non-willfulness certification. Penalty: 5% of highest aggregate balance (Streamlined Domestic) or 0% (Streamlined Foreign Offshore, for those abroad).",
            "Delinquent FBAR Submission Procedures — when taxes were paid correctly but FBAR wasn't filed. No penalty, provided IRS is not already investigating.",
            "Voluntary Disclosure Practice — for willful violations. Reduces criminal exposure but keeps civil penalty up to 50%. Only recommended when there's real criminal-prosecution risk.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "DO NOT file a quiet disclosure",
          body: "Quiet disclosure (filing late FBARs without using one of the formal programs) is specifically discouraged by the IRS and can increase exposure if discovered. Always use formal Streamlined or Delinquent procedure.",
        },
        { type: "h2", text: "Can I use the Brazil-US treaty?", id: "treaty" },
        {
          type: "p",
          text: "No — the bilateral treaty was NEGOTIATED in 1967 but NEVER RATIFIED by the US Senate. There is no comprehensive treaty in force. Only the 2018 Social Security Totalization Agreement exists, which affects INSS/Social Security but not FBAR/FATCA. Brazilians use unilateral foreign tax credits to avoid double taxation.",
        },
      ],
      faq: [
        {
          q: "I'm a Brazilian green card holder. Do I have to file FBAR even living in Brazil?",
          a: "Yes. Green card holders are 'US persons' regardless of physical residence. As long as you keep the green card, FBAR and FATCA apply to Brazilian accounts. The obligation only ends with formal abandonment (Form I-407) or automatic loss after >1 year abroad without re-entry permit.",
        },
        {
          q: "I have a Brazilian account with R$ 30,000. Do I need to report?",
          a: "Depends on the highest exchange rate during the year. If R$ 30,000 exceeded US$ 10,000 at any point (with floating rates, it usually does), you must file FBAR. The threshold is in USD, not local currency.",
        },
        {
          q: "Are PGBL and VGBL reportable on FBAR?",
          a: "Yes. Brazilian private retirement is considered a financial account for FBAR purposes. Older PGBLs may also receive PFIC (Passive Foreign Investment Company) treatment under 26 USC §1297, with punitive taxation on gains. Case-by-case analysis is essential.",
        },
        {
          q: "I forgot to file FBAR for 5 years. What do I do?",
          a: "Don't panic — Streamlined Filing Compliance Procedures is the standard path for non-willful violations. Requires 3 years of correct tax returns + 6 years of FBARs + non-willfulness certification. For those abroad: 0% penalty. Do not do quiet disclosure.",
        },
      ],
      related: [
        { label: "Brazil-US Taxation — overview", href: "/business/brazil-us-taxation" },
        { label: "Will & Trust for Brazilians in the US", href: "/business/will-and-trust" },
        { label: "How to open a US company as a Brazilian", href: "/blog/abrir-empresa-eua-sendo-brasileiro" },
        { label: "US Naturalization — when and how", href: "/blog/naturalizacao-americana-quando-como" },
      ],
    },
    es: {
      title: "FBAR y FATCA para brasileños en EE.UU.: qué declarar y cómo evitar multas pesadas",
      description:
        "Brasileños con green card, visa de trabajo o ciudadanía estadounidense frecuentemente tienen obligaciones FBAR y FATCA. Quién debe declarar, plazos y multas actualizadas.",
      dek: "Más de US$ 10.000 en cuentas brasileñas + cualquier estatus fiscal en EE.UU. = probablemente debe presentar FBAR.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "Este artículo es la referencia práctica para brasileños con obligaciones fiscales estadounidenses (US persons) que tienen cuentas en Brasil. FBAR y FATCA son distintos y los errores pueden generar multas civiles severas.",
        },
        { type: "h2", text: "Quién es 'US person' obligada a declarar" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Ciudadanos americanos (incluso brasileños naturalizados en Brasil)",
            "Residentes permanentes — green card holders",
            "Quienes cumplen el Substantial Presence Test",
          ],
        },
        { type: "h2", text: "Multas (2026) — post-Bittner" },
        {
          type: "table",
          headers: ["Tipo", "Multa civil 2026"],
          rows: [
            ["No-deliberada", "Hasta US$ 12.921 por formulario por año"],
            ["Deliberada", "Mayor entre US$ 129.210 o 50% del saldo, por cuenta, por año"],
          ],
        },
      ],
      faq: [
        {
          q: "¿Brasileño con green card debe declarar FBAR viviendo en Brasil?",
          a: "Sí. Green card holders son 'US persons' independientemente de residencia física.",
        },
      ],
      related: [
        { label: "Tributación Brasil–EE.UU.", href: "/business/brazil-us-taxation" },
        { label: "Will & Trust", href: "/business/will-and-trust" },
      ],
    },
  },
};
