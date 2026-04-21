import type { Article } from "./types";

// Article 2 — real estate crown jewel. Brazil is the 7th largest foreign
// buyer of FL real estate (2025 data: 7% share of $10.4B foreign volume).
// Central question: buy direct vs. through LLC vs. via trust? Answer
// depends on FIRPTA, estate tax, liability, and anonymity goals.

export const comprarImovelEuaViaLlcGuia: Article = {
  slug: "comprar-imovel-eua-via-llc-guia",
  datePublished: "2026-03-04",
  dateModified: "2026-04-15",
  keywords: [
    "comprar imovel eua brasileiro",
    "llc imovel florida",
    "firpta brasileiro",
    "llc para imovel nos eua",
    "sucessao imovel eua",
  ],
  category: {
    pt: "Imobiliário",
    en: "Real Estate",
    es: "Inmobiliario",
  },
  content: {
    pt: {
      title: "Comprar imóvel nos EUA via LLC: o guia completo para brasileiros em 2026",
      description:
        "Como estruturar a compra de imóvel nos EUA por meio de LLC: FIRPTA, proteção patrimonial, sucessão, ITIN/EIN. Guia prático para brasileiros em 2026.",
      dek: "Comprar direto no seu nome é simples. Também é caro em imposto sucessório, ruim para privacidade e frágil juridicamente. LLC resolve — se for bem montada.",
      readingMinutes: 9,
      body: [
        {
          type: "p",
          text: "Em 2025, brasileiros foram o 7º maior grupo de compradores estrangeiros de imóveis na Flórida, responsáveis por 7% dos US$ 10,4 bilhões em volume estrangeiro — o tipo de número que explica por que esta pergunta aparece em praticamente toda consulta inicial no nosso escritório: devo comprar no meu nome ou via LLC?",
        },
        {
          type: "p",
          text: "Este guia cobre a decisão completa: quando LLC faz sentido, como montar, quanto custa, e as armadilhas mais comuns — FIRPTA, imposto sucessório federal, Form 5472, e o erro crítico de esquecer o planejamento sucessório.",
        },
        { type: "h2", text: "Por que LLC, em uma frase", id: "por-que-llc" },
        {
          type: "p",
          text: "LLC (Limited Liability Company) é a estrutura padrão para investidores estrangeiros comprando imóveis nos EUA por três razões combinadas: (1) protege o patrimônio pessoal de processos ligados ao imóvel; (2) simplifica planejamento sucessório — a LLC não ‘morre’ quando você morre, evitando probate; (3) permite anonimato parcial no registro público de propriedade.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Atenção: LLC não elimina FIRPTA",
          body:
            "FIRPTA (Foreign Investment in Real Property Tax Act) incide quando um estrangeiro vende imóvel americano — seja pessoa física ou LLC de estrangeiro. Uma LLC single-member de dono brasileiro é tratada como disregarded entity para fins de FIRPTA, então a venda sofre retenção igual à venda direta. Use a calculadora FIRPTA abaixo para projetar o valor.",
        },
        { type: "h2", text: "Comparação: compra direta vs LLC vs Trust", id: "comparacao" },
        {
          type: "table",
          headers: ["Dimensão", "Compra direta (pessoa física)", "LLC", "Revocable Trust"],
          rows: [
            ["Proteção patrimonial", "Nenhuma — exposição total", "Forte (veil corporativo)", "Parcial"],
            ["Sucessão sem probate", "Não", "Sim (via operating agreement)", "Sim"],
            ["Privacidade no registro", "Seu nome no deed", "Nome da LLC no deed", "Nome do trust"],
            ["FIRPTA na venda", "Aplica", "Aplica (se owner estrangeiro)", "Aplica"],
            ["Estate tax federal (US$ 60K isenção p/ não-residente)", "Risco total", "Ainda aplica se LLC é disregarded", "Planejamento pode mitigar"],
            ["Custo setup", "$0 extra", "$1.5K–3K em FL", "$3K–8K"],
            ["Custo anual", "$0", "$138,75 FL annual report + contador", "Trustee fees variáveis"],
            ["Complexidade", "Baixa", "Média", "Alta"],
          ],
          note:
            "Melhor combinação para a maioria dos brasileiros: LLC (Flórida ou Delaware) + membro sendo um Trust brasileiro ou planejamento testamentário. Mandatório conversar com advogado + contador antes de fechar.",
        },
        { type: "h2", text: "Os 7 passos para montar a estrutura", id: "sete-passos" },
        {
          type: "list",
          style: "number",
          items: [
            "Name search — verificar disponibilidade no Sunbiz (FL Division of Corporations) e USPTO trademark search.",
            "Articles of Organization — submeter à FL DOC ($125 filing fee, $30 expedited). Pode ser feito online em minutos.",
            "EIN (Employer Identification Number) — Form SS-4 ao IRS. Para brasileiro sem SSN, usar o passaporte como identificação. Toma 4–6 semanas pelo correio, 1 dia via fax.",
            "Operating Agreement — documento interno (15–40 páginas) que define aportes, distribuições, voto, manager vs member-managed, compra-venda entre sócios, dissolução. NÃO é filed publicamente. É o coração legal da LLC.",
            "Registered Agent — pessoa/empresa com endereço em FL para receber citações. $50–150/ano se contratar serviço.",
            "Bank account — conta em banco americano em nome da LLC. Fisicamente os grandes bancos (Chase, Wells Fargo, Bank of America) exigem comparecimento presencial de um signatário. Bancos menores e fintechs (Mercury, Relay) aceitam abertura remota.",
            "BOI Report (FinCEN, desde 2024) — Beneficial Ownership Information report para LLCs. Mandatório para LLCs criadas desde 2024. Submissão eletrônica gratuita ao FinCEN.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "BOI Report: o passo que mais brasileiros esquecem",
          body:
            "Desde janeiro de 2024, toda LLC nos EUA precisa registrar seus beneficial owners no FinCEN (Treasury). Multa por não reportar: US$ 500/dia até US$ 10.000 + responsabilidade criminal. LLCs pré-2024 tinham prazo final em jan/2025. LLCs novas têm 90 dias após formação para registrar.",
        },
        { type: "h2", text: "ITIN ou EIN: qual você precisa?", id: "itin-ein" },
        {
          type: "p",
          text: "Confusão clássica. Duas identificações diferentes:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "EIN (Employer Identification Number) — identificação da LLC, como se fosse o ‘CNPJ’ americano. Obrigatório para abrir conta bancária, contratar, ter funcionários, filiar com IRS.",
            "ITIN (Individual Taxpayer Identification Number) — identificação pessoal do dono quando não tem SSN. Necessário para você apresentar declaração pessoal de imposto americano (Form 1040-NR), declarar aluguéis, reportar ganho de capital na venda.",
          ],
        },
        {
          type: "p",
          text: "Brasileiros não-residentes com LLC de investimento imobiliário geralmente precisam de AMBOS: EIN para a LLC, ITIN para o dono. Solicitação do ITIN via Form W-7, acompanhado de passaporte certificado. Toma 8–12 semanas em média.",
        },
        { type: "h2", text: "O erro mais caro: esquecer estate tax federal", id: "estate-tax" },
        {
          type: "p",
          text: "O imposto federal de sucessão (estate tax) americano para não-residente de morada fiscal é BRUTAL: isenção de apenas US$ 60.000 sobre ativos localizados nos EUA. O que ultrapassa é tributado a até 40%.",
        },
        {
          type: "p",
          text: "Imóvel de US$ 700K no nome de brasileiro que falece sem estrutura: herdeiros recebem a notícia de que devem ~US$ 256K ao IRS (40% × [700K − 60K]) antes de tocar no imóvel. E o imóvel entra em probate — processo judicial de 6–18 meses na FL, custando 3–7% do valor em honorários.",
        },
        {
          type: "p",
          text: "LLC single-member (‘disregarded entity’ para fins fiscais federais) não resolve sozinha este problema — porque o IRS olha através da LLC e enxerga o dono brasileiro. O que resolve: (1) LLC em estrutura holding com dono brasileiro sendo outra entidade não-americana (ex: offshore holding) ou (2) combinação com Will/Trust testamentário + planejamento de vida útil. Toca em área que cruza direito tributário, imigratório e sucessório — precisa de advogado + contador nos dois países.",
        },
        { type: "h2", text: "Financiamento: sim, é possível", id: "financiamento" },
        {
          type: "p",
          text: "Foreign National Loan é o produto padrão para brasileiro não-residente comprando na Flórida. Bancos como TD Bank, Santander, HSBC e credit unions locais (especialmente em Orlando, Miami, Aventura) oferecem. Termos típicos em 2026:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "LTV (loan-to-value): 60–70% — você entra com 30–40% do preço.",
            "Taxa: 100–200 bps acima da taxa do comprador americano (atualmente ~7,5%–8,5% para 30 anos fixos).",
            "Renda comprovada no Brasil — aceitam contracheque, imposto de renda BR, DECORE.",
            "Reservas: comprovar 12 meses de pagamento em conta americana.",
            "Amortização típica: 30 anos.",
          ],
        },
        { type: "h2", text: "Fechamento: os 4 documentos críticos", id: "fechamento" },
        {
          type: "p",
          text: "O closing em FL é feito via title company (Flórida não usa advogado obrigatório, diferente de NY/MA). Quatro documentos controlam o destino do negócio:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Deed — documento de transferência de título. Tipo mais seguro: Warranty Deed. Evitar Quit Claim Deed.",
            "Title Insurance — seguro de título. Owner's policy (você paga uma vez ~0,5% do preço). Cobre defeitos ocultos do título.",
            "Closing Disclosure — lista todos os custos. Exige revisão linha a linha antes de assinar.",
            "HUD-1 / ALTA Settlement Statement — extrato do fechamento.",
          ],
        },
        { type: "h2", text: "Custos totais de aquisição", id: "custos" },
        {
          type: "table",
          headers: ["Item", "Valor típico (imóvel $700K)"],
          rows: [
            ["LLC setup + BOI + EIN", "$1.500 – $3.000"],
            ["ITIN (se aplicável)", "$300 – $600"],
            ["Title search + insurance", "$3.500 – $4.500"],
            ["Documentary stamp tax (FL)", "$4.900 (0,7% do preço)"],
            ["Intangible tax (se hipoteca)", "$1.400 (0,2% do loan amount)"],
            ["Inspection", "$400 – $800"],
            ["Appraisal (se hipoteca)", "$600 – $1.200"],
            ["Advogado imigratório + sucessório", "$2.500 – $5.000"],
            ["Total custos ‘extras’ típico", "~$14.500 – $20.000"],
          ],
          note:
            "Valores são faixas típicas Orlando 2026. Não inclui down payment nem juros de financiamento.",
        },
        { type: "h2", text: "Leitura final", id: "leitura" },
        {
          type: "p",
          text: "A estrutura ‘LLC + ITIN/EIN + planejamento sucessório’ é o padrão que recomendamos para brasileiros comprando seu primeiro imóvel acima de US$ 300K. Abaixo disso, compra direta pode ser racional se você tem tolerância alta a risco e não se importa com probate. Acima disso, LLC sem planejamento sucessório é irresponsável — você está deixando US$ 150–250K na mesa para seus herdeiros.",
        },
        {
          type: "p",
          text: "Atendemos essa montagem como um pacote: formação de LLC em FL, Operating Agreement, BOI Report, EIN, assistência ITIN, coordenação com contador brasileiro para reportar a estrutura à RFB, e planejamento sucessório. Dra. Izi é trilíngue e cita Harvard em Benefit Corporations — para brasileiros que querem alinhar investimento com propósito.",
        },
      ],
      faq: [
        {
          q: "Posso ter LLC em Delaware mesmo sem morar em Delaware?",
          a: "Sim, pode. Mas para imóvel em FL a melhor opção é quase sempre LLC em FL porque você precisa registrar a LLC de Delaware como ‘foreign LLC’ em FL de qualquer forma, gerando custo e burocracia dupla. Delaware faz sentido para holdings, IP e negócios operacionais não-estaduais.",
        },
        {
          q: "Preciso estar fisicamente nos EUA para criar a LLC?",
          a: "Não. A criação é totalmente online via Sunbiz. O ponto que pode exigir presença é a abertura de conta bancária — grandes bancos americanos exigem um signatário presente fisicamente. Fintechs (Mercury, Relay) e alguns bancos menores aceitam abertura 100% remota com KYC digital.",
        },
        {
          q: "A LLC me exime de pagar imposto de renda americano sobre aluguel?",
          a: "Não. A LLC single-member é transparente para fins fiscais (‘disregarded entity’). A renda de aluguel entra no seu Form 1040-NR pessoal. O que a LLC muda é responsabilidade legal, privacidade e sucessão — não a tributação. Para fins fiscais, a eleição 871(d) de tributação em base líquida (net basis) é o que otimiza a alíquota.",
        },
        {
          q: "FIRPTA na venda é só ‘reter’ — eu recebo o valor depois, certo?",
          a: "Correto. FIRPTA é retenção (withholding), não imposto final. O valor retido é aplicado como crédito quando você apresenta declaração anual (Form 1040-NR e Form 8288-B). Se o imposto real for menor que o retido, você pede refund. Mas o fluxo de caixa no closing sofre — planeje com isso em mente.",
        },
        {
          q: "Preciso declarar a LLC americana na declaração de imposto de renda brasileira?",
          a: "Sim. A RFB exige declaração de participações em entidades estrangeiras via DIRPF (CBE se ultrapassar US$ 1M) e declaração de contas no exterior (Declaração de Capitais Brasileiros no Exterior). A não-declaração pode gerar multa e caracterizar evasão fiscal no Brasil. Nosso escritório coordena com contador brasileiro para fazer este compliance.",
        },
      ],
      related: [
        { label: "LLC Formation — serviço completo em FL", href: "/business/llc-formation" },
        { label: "Comprador estrangeiro + FIRPTA", href: "/real-estate/foreign-buyer-firpta" },
        { label: "Calculadora FIRPTA", href: "/tools/firpta-calculator" },
        { label: "Decisão de entidade — LLC vs Corp", href: "/tools/llc-vs-corp" },
      ],
    },
    en: {
      title: "Buying US real estate through an LLC: a complete 2026 guide for Brazilians",
      description:
        "How to structure US real estate purchases through an LLC: FIRPTA, asset protection, estate planning, ITIN/EIN. Practical 2026 guide for Brazilians.",
      dek: "Buying in your own name is simple. It's also expensive in estate tax, bad for privacy, and legally fragile. An LLC fixes it — if set up right.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "In 2025, Brazilians were the 7th largest group of foreign buyers of Florida real estate, accounting for 7% of the $10.4B foreign dollar volume. The question we get in every initial consult: should I buy in my own name or through an LLC?",
        },
        { type: "h2", text: "Why LLC, in one sentence" },
        {
          type: "p",
          text: "LLC is the standard structure for foreign investors buying US real estate because it (1) shields personal assets from property-linked lawsuits, (2) simplifies estate planning by avoiding probate, and (3) provides partial anonymity in public property records.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Warning: LLC does NOT eliminate FIRPTA",
          body:
            "FIRPTA withholding applies whenever a foreign person sells US real estate — individual or single-member LLC of a foreign owner (treated as disregarded entity). Use the FIRPTA calculator to project withholding.",
        },
        { type: "h2", text: "Direct purchase vs LLC vs Trust" },
        {
          type: "table",
          headers: ["Dimension", "Direct", "LLC", "Trust"],
          rows: [
            ["Asset protection", "None", "Strong", "Partial"],
            ["Probate avoidance", "No", "Yes", "Yes"],
            ["FIRPTA on sale", "Applies", "Applies", "Applies"],
            ["Setup cost", "$0", "$1.5K–3K", "$3K–8K"],
          ],
        },
        { type: "h2", text: "The 7 formation steps" },
        {
          type: "list",
          style: "number",
          items: [
            "Name search on Sunbiz + USPTO.",
            "Articles of Organization filed with FL ($125 + $30 expedited).",
            "EIN via Form SS-4.",
            "Operating Agreement (15–40 pages, not publicly filed).",
            "Registered Agent in FL.",
            "Bank account (in-person for big banks, remote via Mercury/Relay).",
            "BOI Report to FinCEN within 90 days of formation.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "BOI Report — the step Brazilians most often miss",
          body:
            "Since January 2024, every LLC must file Beneficial Ownership Information with FinCEN. Penalty: $500/day up to $10,000 plus criminal liability.",
        },
        { type: "h2", text: "The costliest mistake: forgetting federal estate tax" },
        {
          type: "p",
          text: "Federal estate tax for non-resident aliens is brutal: $60K exemption on US-situs assets. A $700K property owned by a Brazilian who dies without structure: heirs owe ~$256K to the IRS (40% × [700K − 60K]) before touching the property, plus 6–18 months of probate.",
        },
        {
          type: "p",
          text: "A single-member LLC alone doesn't solve this — the IRS looks through the disregarded entity. Solutions involve holding structures or testamentary planning coordinated across both countries.",
        },
        { type: "h2", text: "Financing is possible" },
        {
          type: "p",
          text: "Foreign National Loan programs offer 60–70% LTV at ~100–200 bps premium over US rates. TD Bank, Santander, HSBC, and Orlando/Miami credit unions are active in this segment.",
        },
        { type: "h2", text: "Final read" },
        {
          type: "p",
          text: "‘LLC + ITIN/EIN + estate planning’ is the standard we recommend for any Brazilian buyer above $300K. Below that, direct purchase may be rational. Above it, LLC without estate planning leaves $150–250K on the table for heirs.",
        },
      ],
      faq: [
        {
          q: "Can I use a Delaware LLC for a Florida property?",
          a: "Yes, but a Delaware LLC holding FL property must register as a foreign LLC in FL anyway — double the overhead. FL LLC is usually cleaner unless you have a holding strategy.",
        },
        {
          q: "Do I need to be physically in the US to form the LLC?",
          a: "No for the LLC itself. Bank account opening is the sticking point — big US banks require in-person signing; Mercury/Relay accept 100% remote onboarding.",
        },
        {
          q: "Does the LLC shield me from US income tax on rent?",
          a: "No. Single-member LLC is disregarded for tax. Rental income flows to your personal Form 1040-NR. §871(d) election to net-basis taxation is the lever that optimizes the rate.",
        },
      ],
      related: [
        { label: "LLC Formation service", href: "/business/llc-formation" },
        { label: "Foreign buyer + FIRPTA", href: "/real-estate/foreign-buyer-firpta" },
        { label: "FIRPTA calculator", href: "/tools/firpta-calculator" },
      ],
    },
    es: {
      title: "Comprar inmueble en EE.UU. vía LLC: guía para brasileños 2026",
      description: "Estructurar compra de inmueble en EE.UU. vía LLC: FIRPTA, protección patrimonial, sucesión, ITIN/EIN.",
      dek: "Comprar en tu nombre es simple. También caro en estate tax y frágil. LLC resuelve — si está bien montada.",
      readingMinutes: 6,
      body: [
        { type: "p", text: "Brasileños fueron el 7º mayor grupo de compradores extranjeros en Florida en 2025 (7% del volumen de $10,4B). La pregunta clave: comprar en nombre propio o vía LLC." },
        { type: "h2", text: "Por qué LLC" },
        { type: "p", text: "LLC protege activos personales, simplifica sucesión evitando probate, y da privacidad parcial en registros públicos." },
        { type: "h2", text: "Los 7 pasos" },
        { type: "list", style: "number", items: ["Name search Sunbiz + USPTO.", "Articles of Organization ($125).", "EIN vía Form SS-4.", "Operating Agreement.", "Registered Agent.", "Cuenta bancaria.", "BOI Report a FinCEN."] },
        { type: "h2", text: "El error más caro" },
        { type: "p", text: "Estate tax federal para no residentes: solo $60K de exención. Inmueble de $700K sin estructura = ~$256K al IRS. LLC single-member sola no resuelve — necesita planificación sucesoria integrada." },
      ],
      faq: [
        { q: "¿Delaware LLC para inmueble en Florida?", a: "No usualmente — hay que registrar como foreign LLC en FL igual, doble overhead." },
        { q: "¿Necesito estar físicamente en EE.UU.?", a: "No para la LLC. Sí para cuentas en grandes bancos; fintechs como Mercury permiten remoto." },
      ],
      related: [
        { label: "LLC Formation", href: "/business/llc-formation" },
        { label: "FIRPTA calculadora", href: "/tools/firpta-calculator" },
      ],
    },
  },
};
