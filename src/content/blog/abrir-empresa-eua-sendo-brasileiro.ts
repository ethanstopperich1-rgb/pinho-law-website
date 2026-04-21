import type { Article } from "./types";

// Article 3 — the #1 B2B search query Brazilians run: "como abrir empresa
// nos EUA". Covers the full path: entity choice, state choice, banking,
// EIN/ITIN, BOI, visa implications, taxation. Designed to capture
// organic search and feed into /business/llc-formation + /tools/llc-vs-corp.

export const abrirEmpresaEuaSendoBrasileiro: Article = {
  slug: "abrir-empresa-eua-sendo-brasileiro",
  datePublished: "2026-03-21",
  dateModified: "2026-04-18",
  keywords: [
    "abrir empresa eua brasileiro",
    "llc florida brasileiro",
    "abrir llc estados unidos",
    "boi report brasileiro",
    "visto para empresario eua",
  ],
  category: {
    pt: "Empresarial",
    en: "Business",
    es: "Empresarial",
  },
  content: {
    pt: {
      title: "Como abrir empresa nos EUA sendo brasileiro em 2026: o passo a passo real",
      description:
        "Guia completo para brasileiros que querem abrir LLC ou Corporation nos EUA em 2026: escolha de estrutura, estado, EIN, BOI, banco, imigração e impostos.",
      dek: "Abrir uma LLC na Flórida custa $125 em taxa. O que transforma a empresa em algo funcional são as 6 etapas depois disso — é nelas que brasileiros travam.",
      readingMinutes: 9,
      body: [
        {
          type: "p",
          text: "Se eu abrir uma LLC, já posso morar nos EUA? Esta é a primeira pergunta em cerca de 80% das consultas empresariais que recebemos de brasileiros. A resposta desapontadora é: não. Abrir empresa e conseguir visto são dois processos separados. Mas entender como conectá-los corretamente é precisamente o que diferencia um empreendimento que prospera de um que queima capital.",
        },
        {
          type: "p",
          text: "Este artigo cobre o caminho completo para abertura de empresa em 2026: escolha de estrutura (LLC vs C-Corp vs S-Corp), escolha de estado, obtenção de EIN e ITIN, BOI Report (novo desde 2024), abertura de conta bancária, implicações imigratórias, e tributação em ambos os países.",
        },
        { type: "h2", text: "Parte 1: Qual estrutura?", id: "estrutura" },
        {
          type: "p",
          text: "Para brasileiros não-residentes, a decisão é quase sempre entre LLC e C-Corporation. S-Corp está fora da mesa — S-Corp exige que TODOS os sócios sejam US Citizens ou Green Card holders. Um único sócio brasileiro residente no Brasil desqualifica a estrutura inteira.",
        },
        {
          type: "table",
          headers: ["Critério", "LLC", "C-Corp"],
          rows: [
            ["Flexibilidade de sócios", "Qualquer status migratório", "Qualquer status migratório"],
            ["Tributação padrão", "Pass-through (lucros no sócio)", "21% federal + imposto dividendo"],
            ["Múltiplas classes de ações", "Limitado", "Sim — Preferred + Common, opções"],
            ["Aceito por VCs institucionais", "Raramente", "Padrão (Delaware C-Corp)"],
            ["Holding de imóveis / IP", "Excelente", "Ruim (dupla tributação na venda)"],
            ["Operating overhead", "Baixo — annual report + BOI", "Alto — board, bylaws, minutes, 1120"],
            ["Formação típica em FL", "$1.500 – $3.000", "$2.500 – $5.000"],
          ],
          note:
            "Regra prática: escolha LLC se você vai operar, deter imóveis, ou fazer consultoria. Escolha C-Corp se vai levantar capital institucional ou dividir em múltiplas classes.",
        },
        { type: "h2", text: "Parte 2: Qual estado?", id: "estado" },
        {
          type: "p",
          text: "O mito de que você precisa abrir em Delaware para parecer sério é exatamente isso — um mito. Delaware faz sentido em três cenários: (1) você vai levantar VC e os investidores esperam Delaware C-Corp; (2) você quer o rigor do Delaware Chancery Court para litígios complexos; (3) você está formando uma holding com múltiplas subsidiárias.",
        },
        {
          type: "p",
          text: "Para o brasileiro médio abrindo operação na Flórida — consultoria, comércio, real estate, hospitalidade — Flórida LLC é superior. Você evita a pegadinha de ter que registrar a LLC de Delaware como ‘foreign LLC’ em FL de qualquer forma (paga duas vezes), não sofre o Delaware franchise tax ($300/ano mínimo), e tem acesso direto aos cortorários estaduais da FL.",
        },
        { type: "h2", text: "Parte 3: Os 7 passos de formação", id: "sete-passos" },
        {
          type: "list",
          style: "number",
          items: [
            "Name search — Sunbiz (FL Division of Corporations) + USPTO para descartar conflito de marca. Gratuito, 5 minutos.",
            "Articles of Organization (LLC) ou Articles of Incorporation (Corp) — $125 FL filing + $30 expedited. Online via Sunbiz, liberação em horas.",
            "EIN — Form SS-4 ao IRS. Brasileiros sem SSN podem pedir usando passaporte. 1 dia via fax (opção mais rápida), 4–6 semanas por correio.",
            "Operating Agreement (LLC) ou Bylaws (Corp) — documento interno que define poder de voto, distribuição, admissão/saída de sócios, buy-sell, vesting, dissolução. Pode ter 15–40 páginas. NÃO é registrado publicamente.",
            "Registered Agent — endereço em FL para receber citações. $50–150/ano se contratar serviço profissional (recomendado para quem mora fora).",
            "Bank account — conta business em banco americano. Grandes bancos (Chase, Wells Fargo, BofA) exigem presença física de um signatário. Fintechs (Mercury, Relay, Brex) permitem abertura 100% remota.",
            "BOI Report (FinCEN, obrigatório desde 2024) — declaração de beneficial owners ao Treasury. Prazo: 90 dias após formação. Custo: $0. Penalidade por omissão: $500/dia.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "BOI Report — a bomba que 40% dos brasileiros esquecem",
          body:
            "Desde 1 de janeiro de 2024, TODA LLC ou Corp americana precisa reportar seus beneficial owners (qualquer pessoa com ≥25% de ownership ou controle substancial) ao FinCEN. Multa por não reportar: US$ 500/dia, até US$ 10.000. Responsabilidade criminal possível em casos de má-fé. Fazemos o BOI como parte do pacote de formação.",
        },
        { type: "h2", text: "Parte 4: EIN vs ITIN vs SSN", id: "ein-itin-ssn" },
        {
          type: "p",
          text: "Três identificações diferentes:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "SSN (Social Security Number) — só para USC ou LPR. Brasileiro não-residente não tem nem precisa.",
            "EIN (Employer Identification Number) — para a empresa. Obrigatório. Obtido via Form SS-4.",
            "ITIN (Individual Taxpayer Identification Number) — para você pessoa física, quando precisa declarar imposto federal americano. Obtido via Form W-7 + passaporte certificado. Necessário para o sócio brasileiro que recebe distribuições de uma LLC pass-through.",
          ],
        },
        { type: "h2", text: "Parte 5: O LLC não te dá visto — mas pode fazer parte da estratégia", id: "visto" },
        {
          type: "p",
          text: "Uma LLC sozinha não concede nenhum status migratório. Você é dono de uma empresa americana — isso não te dá o direito de morar ou trabalhar nos EUA. Para isso, você precisa de um visto. As rotas mais comuns que conectam empresa + imigração:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "E-2 Treaty Investor — ATENÇÃO: Brasil NÃO é país de tratado E-2. Brasileiros precisam de segunda cidadania (Portugal, Itália, Grenada, etc.) para qualificar. Investimento substancial (US$ 100K+ típico) e empresa de boa fé nos EUA.",
            "L-1A / L-1B — transferência intra-empresa. Sua empresa no Brasil (matriz) precisa existir e operar há 1+ ano. Você transfere para uma subsidiária ou afiliada americana.",
            "EB-5 Investor — investimento de US$ 800K (Rural/Urban TEA) a US$ 1,05M. Green card condicional. Brasil CURRENT.",
            "E-1 Treaty Trader — para comércio substancial entre Brasil e EUA. Também exige país de tratado — Brasil não qualifica diretamente.",
            "O-1 — habilidade extraordinária. Seu negócio pode justificar sua vinda se o perfil profissional sustenta.",
            "EB-2 NIW — self-petition. O negócio proposto pode ser a tese de ‘empreendimento proposto’ (prong 1 do teste Dhanasar).",
          ],
        },
        { type: "h2", text: "Parte 6: Impostos — Brasil e EUA", id: "impostos" },
        {
          type: "p",
          text: "Sem tratado ratificado Brasil–EUA de dupla tributação, o empresário brasileiro dono de empresa americana enfrenta tributação em duas jurisdições. Os pilares:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Lado americano — LLC pass-through: sócio brasileiro declara via Form 1040-NR; distribuições de LLC para sócio não-residente estão sujeitas a withholding de 37% (taxa máxima federal). Se houver US-ECI (effectively connected income), branch profits tax pode aplicar. C-Corp: tributação corporativa de 21% federal; dividendos a não-residentes sofrem 30% de FDAP withholding.",
            "Lado brasileiro — RFB obriga declaração de participação em empresa estrangeira via DIRPF. Se total de ativos no exterior > US$ 1M, também precisa declarar CBE (Declaração de Capitais Brasileiros no Exterior) ao Banco Central.",
            "Crédito tributário unilateral — o Brasil reconhece crédito do imposto americano pago, até o limite da alíquota brasileira sobre o mesmo rendimento. Mas o residual sempre sobra como custo líquido (veja nossa Calculadora Tratado Brasil–EUA).",
          ],
        },
        { type: "h2", text: "Parte 7: Custos totais do primeiro ano", id: "custos" },
        {
          type: "table",
          headers: ["Item", "Faixa típica"],
          rows: [
            ["Formação LLC FL + Operating Agreement + BOI", "$1.500 – $3.000"],
            ["EIN + ITIN (se aplicável)", "$300 – $800"],
            ["Registered Agent anual", "$50 – $150"],
            ["FL Annual Report", "$138,75 (prazo: 1/maio)"],
            ["Contador brasileiro (compliance BR)", "R$ 5.000 – R$ 15.000/ano"],
            ["CPA americano (1065 ou 1120 + K-1)", "$1.500 – $4.000/ano"],
            ["Banco business account", "$0 – $300/mês em taxas"],
            ["TOTAL primeiro ano (estimativa)", "~$5.500 – $11.000"],
          ],
          note:
            "Não inclui capital operacional, folha, tributos sobre faturamento, seguros, ou custos de visto se aplicável.",
        },
        { type: "h2", text: "Armadilhas comuns", id: "armadilhas" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Abrir LLC em Delaware por ‘prestígio’ quando a operação toda é na Flórida — duplicação de custo e complexidade.",
            "Esquecer BOI Report. $500/dia de multa acumula rápido.",
            "Misturar conta pessoal com conta da LLC — destrói o ‘corporate veil’, expondo patrimônio pessoal a processos contra a empresa.",
            "Não fazer Operating Agreement robusto. Em caso de disputa entre sócios, o default do FL Statute é genérico e raramente favorável.",
            "Escolher S-Corp quando algum sócio é não-residente. É disqualificação automática.",
            "Não declarar a LLC no Brasil via DIRPF/CBE. Caracteriza evasão fiscal.",
            "Não planejar sucessão — estate tax federal começa aos $60K para não-residentes.",
          ],
        },
        { type: "h2", text: "O pacote do escritório", id: "pacote" },
        {
          type: "p",
          text: "Na Pinho Law fazemos a abertura completa como pacote: escolha de estrutura (via consulta), formação estadual, Operating Agreement customizado, EIN, assistência ITIN, BOI Report, guia de banco (com introdução a fintechs quando apropriado), e — crítico — coordenação com contador brasileiro para compliance de ambos os lados. Dra. Izi é autoridade em Benefit Corporations citada por Harvard para empresas de propósito.",
        },
      ],
      faq: [
        {
          q: "Posso abrir LLC nos EUA sem nunca ter visitado o país?",
          a: "Sim. A formação estadual (Sunbiz, Delaware, etc.) é 100% online. Articles of Organization podem ser submetidos remotamente. O ponto crítico é a abertura de conta bancária — grandes bancos americanos exigem presença física. Fintechs como Mercury e Relay aceitam abertura 100% remota com KYC digital, o que destrava o caminho para não-residentes.",
        },
        {
          q: "A LLC me dá direito a visto para morar nos EUA?",
          a: "Não. LLC é uma entidade de negócio; não concede status migratório. Para morar nos EUA você precisa de visto (E-2 com segunda cidadania, L-1 via matriz brasileira, EB-5 com investimento, EB-2 NIW, O-1, etc.). Mas a LLC pode fazer PARTE da estratégia — por exemplo, L-1 transferindo da matriz BR para a LLC americana.",
        },
        {
          q: "Qual é a diferença real entre LLC e C-Corp para operar negócio nos EUA?",
          a: "LLC: pass-through (lucros vão para sócios, sem tributação corporativa), simples de manter, flexível para operação, mas limitada para levantar VC. C-Corp: entidade tributada em 21% federal, paga dividendo tributado novamente no sócio, mas é a estrutura que VCs institucionais esperam e permite Preferred Stock + option pool. Regra: LLC para operar/deter; C-Corp para levantar capital.",
        },
        {
          q: "Preciso de advogado para abrir LLC?",
          a: "Legalmente não. O formulário é simples. Na prática, o Operating Agreement é onde erros caros acontecem — sem ele ou com um template genérico, você fica sujeito a regras default do Estado que raramente favorecem o fundador. Para LLCs multi-membro, levantamento de capital, ou planejamento sucessório, advogado é investimento que retorna no primeiro desentendimento.",
        },
        {
          q: "Preciso declarar a LLC americana no Brasil?",
          a: "Sim, obrigatoriamente. Na DIRPF (imposto de renda pessoa física), em ‘Participações em Empresas’. Se seus ativos no exterior excederem US$ 1M, também declara CBE (Capitais Brasileiros no Exterior) ao Banco Central, anualmente. Sonegação caracteriza evasão fiscal com multa + juros + potencial criminal.",
        },
      ],
      related: [
        { label: "LLC Formation — serviço completo em FL", href: "/business/llc-formation" },
        { label: "Decisão de entidade — LLC vs Corp vs B-Corp", href: "/tools/llc-vs-corp" },
        { label: "Calculadora Tratado Brasil–EUA", href: "/tools/br-us-tax" },
        { label: "Tributação BR–EUA", href: "/business/brazil-us-taxation" },
      ],
    },
    en: {
      title: "How Brazilians open a US company in 2026: the real step-by-step",
      description:
        "Complete guide for Brazilians opening an LLC or Corp in the US in 2026: structure, state, EIN, BOI, banking, immigration, taxation.",
      dek: "Opening a FL LLC costs $125 in filing fees. What makes the company actually work is the 6 steps after that — where Brazilians get stuck.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "Opening a company and getting a visa are two separate processes. Connecting them correctly is what separates ventures that thrive from those that burn capital.",
        },
        { type: "h2", text: "Part 1: Which entity?" },
        {
          type: "p",
          text: "For non-resident Brazilians it's almost always LLC vs C-Corp. S-Corp is off the table — S-Corp requires ALL owners to be USC or Green Card holders. A single Brazilian non-resident disqualifies the entire structure.",
        },
        { type: "h2", text: "Part 2: Which state?" },
        {
          type: "p",
          text: "The myth that you must form in Delaware is just that — a myth. Delaware makes sense for VC-backed C-Corps or multi-sub holdings. For an average Brazilian running a FL operation, a FL LLC is superior: no double registration, no $300/yr DE franchise tax.",
        },
        { type: "h2", text: "Part 3: The 7 formation steps" },
        {
          type: "list",
          style: "number",
          items: [
            "Name search (Sunbiz + USPTO).",
            "Articles of Organization ($125 + $30 expedited).",
            "EIN via Form SS-4.",
            "Operating Agreement (15–40 pages).",
            "Registered Agent.",
            "Bank account (Mercury/Relay for remote).",
            "BOI Report to FinCEN within 90 days.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "BOI — the landmine 40% miss",
          body: "Since Jan 2024, every LLC/Corp must file BOI with FinCEN. $500/day penalty, up to $10K + criminal liability.",
        },
        { type: "h2", text: "Part 4: LLC does NOT get you a visa" },
        {
          type: "p",
          text: "An LLC alone grants no immigration status. To live in the US you need a visa — E-2 (requires treaty-country citizenship; Brazil is NOT one), L-1 (transfer from Brazilian parent), EB-5, EB-2 NIW, or O-1. The LLC can be PART of the strategy, not the whole strategy.",
        },
        { type: "h2", text: "Part 5: Taxation in both countries" },
        {
          type: "p",
          text: "With no ratified BR–US treaty, Brazilian owners face taxation in both jurisdictions. Brazil grants unilateral foreign tax credit up to the Brazilian rate. See our BR–US Tax Treaty Calculator.",
        },
        { type: "h2", text: "Common pitfalls" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Delaware LLC for FL operation — unnecessary double cost.",
            "Missing BOI — $500/day.",
            "Mixing personal + business accounts — destroys corporate veil.",
            "Weak Operating Agreement — expensive in any dispute.",
            "S-Corp with non-resident owner — automatic DQ.",
            "Not declaring LLC to RFB/Banco Central — tax evasion.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I form a US LLC without ever visiting the US?",
          a: "Yes. State formation is 100% online. Bank account opening is the friction point — big US banks require in-person, but Mercury/Relay accept 100% remote onboarding.",
        },
        {
          q: "Does the LLC grant me a US visa?",
          a: "No. LLCs don't confer immigration status. You need a separate visa path — E-2 (via second citizenship), L-1, EB-5, EB-2 NIW, etc. The LLC can be part of the strategy.",
        },
        {
          q: "LLC or C-Corp for operating a US business?",
          a: "LLC for operation/holding. C-Corp for raising institutional capital. Rule: LLC for running, C-Corp for raising.",
        },
      ],
      related: [
        { label: "LLC Formation service", href: "/business/llc-formation" },
        { label: "LLC vs Corp decision tool", href: "/tools/llc-vs-corp" },
        { label: "BR–US Tax Treaty calculator", href: "/tools/br-us-tax" },
      ],
    },
    es: {
      title: "Cómo abrir empresa en EE.UU. siendo brasileño en 2026",
      description: "Guía completa: estructura, estado, EIN, BOI, banco, inmigración, impuestos para brasileños abriendo LLC o Corp.",
      dek: "Abrir LLC en FL cuesta $125. Lo que hace la empresa funcional son los 6 pasos siguientes.",
      readingMinutes: 6,
      body: [
        { type: "p", text: "Abrir empresa y conseguir visa son procesos separados. Conectarlos correctamente es lo que separa el éxito del capital quemado." },
        { type: "h2", text: "¿Qué estructura?" },
        { type: "p", text: "Para brasileños no residentes: LLC o C-Corp. S-Corp requiere TODOS los socios USC o LPR — un socio brasileño descalifica la estructura." },
        { type: "h2", text: "¿Qué estado?" },
        { type: "p", text: "Mito: Delaware por prestigio. Realidad: para operación en FL, FL LLC es superior." },
        { type: "h2", text: "7 pasos de formación" },
        {
          type: "list",
          style: "number",
          items: [
            "Name search (Sunbiz + USPTO).",
            "Articles of Organization ($125).",
            "EIN vía Form SS-4.",
            "Operating Agreement.",
            "Registered Agent.",
            "Cuenta bancaria (Mercury/Relay para remoto).",
            "BOI Report a FinCEN en 90 días.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "BOI Report",
          body: "Obligatorio desde enero 2024. $500/día de multa por omisión.",
        },
        { type: "h2", text: "LLC NO te da visa" },
        { type: "p", text: "Necesitas visa separada — E-2 (requiere segunda ciudadanía; Brasil no es país de tratado), L-1, EB-5, EB-2 NIW, O-1." },
      ],
      faq: [
        { q: "¿Puedo abrir LLC sin visitar EE.UU.?", a: "Sí. Formación es 100% online. Mercury/Relay aceptan apertura de cuenta remota." },
        { q: "¿La LLC me da visa?", a: "No. Necesitas visa separada." },
      ],
      related: [
        { label: "LLC Formation", href: "/business/llc-formation" },
        { label: "Herramienta LLC vs Corp", href: "/tools/llc-vs-corp" },
      ],
    },
  },
};
