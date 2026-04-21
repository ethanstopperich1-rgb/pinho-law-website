import type { Article } from "./types";

// Article 8 — Green card by marriage (USC and LPR). Highest-volume
// family-immigration use case. Covers AOS vs consular, I-130 vs K-1 vs
// CR-1, bona fide marriage evidence, I-751 remove-conditions for
// marriages under 2 years, timeline + cost, common denial reasons.

export const greenCardCasamentoGuia2026: Article = {
  slug: "green-card-casamento-guia-2026",
  datePublished: "2026-04-19",
  dateModified: "2026-04-20",
  keywords: [
    "green card por casamento",
    "green card casamento brasileiro",
    "adjustment of status casamento",
    "cr-1 vs k-1 brasileiro",
    "i-130 peticionar conjuge",
    "i-751 remover condicoes green card",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "Green Card por casamento: o guia completo para brasileiros em 2026",
      description:
        "Todos os caminhos para green card via casamento em 2026: CR-1, IR-1, K-1, AOS via I-130. Prazos, custos, evidências de bona fide marriage, e a armadilha do I-751.",
      dek: "Casamento com cidadão americano é a rota mais emocional e mais escrutinada do sistema. Feita certo, entrega green card em 10–16 meses. Feita errado, termina em negação com barra de 10 anos.",
      readingMinutes: 10,
      body: [
        {
          type: "p",
          text: "Green card por casamento é, em volume, a maior porta de entrada para brasileiros que terminam nos EUA — mas é também onde ocorre a maior concentração de negações por fraude. USCIS audita casamentos com agressividade crescente desde 2024, e a diferença entre um processo aprovado em 12 meses e um caso parado em RFE por 2 anos é a qualidade do dossiê de bona fide marriage.",
        },
        {
          type: "p",
          text: "Este artigo cobre cada rota possível para green card por casamento em 2026: CR-1/IR-1 consular, AOS via I-130 quando cônjuge estrangeiro já está nos EUA, K-1 fiancé quando ainda não casaram, e o passo final crítico — I-751 removendo condicionalidade.",
        },
        { type: "h2", text: "Os 3 caminhos principais", id: "tres-caminhos" },
        {
          type: "table",
          headers: ["Rota", "Onde o cônjuge está", "Já casados?", "Timeline", "Quando usar"],
          rows: [
            ["CR-1 / IR-1", "No Brasil", "Sim", "12–18 meses", "Casal no Brasil ou mora na Europa; casamento legal já feito"],
            ["AOS via I-130", "Nos EUA com status válido", "Sim", "10–16 meses", "Cônjuge está nos EUA legalmente (F-1, H-1B, B-2 recente etc)"],
            ["K-1 Fiancé", "No Brasil", "Não (ainda)", "10–14m + AOS", "Vocês ainda vão casar e preferem casar nos EUA"],
          ],
          note:
            "CR-1 (Conditional Resident): casamento < 2 anos ao receber green card. IR-1 (Immediate Relative): casamento ≥ 2 anos, green card permanente direto sem condicionalidade.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Quando CR-1 vs IR-1: a régua dos 2 anos",
          body:
            "Se o green card é emitido mais de 2 anos após a data do casamento, é IR-1 (permanente, 10 anos). Menos de 2 anos = CR-1 (condicional por 2 anos, precisa I-751 depois). Estrategicamente, casais próximos do marco de 2 anos às vezes esperam para evitar I-751.",
        },
        { type: "h2", text: "CR-1 / IR-1: rota consular", id: "cr1-ir1" },
        {
          type: "p",
          text: "Caminho clássico quando o cônjuge brasileiro está no Brasil. Cidadão americano peticiona; processo roda via USCIS + NVC + consulado americano em São Paulo ou Rio.",
        },
        {
          type: "list",
          style: "number",
          items: [
            "Mês 1: I-130 protocolado por USC (US$ 675 + honorários advogado US$ 4.500–7.000).",
            "Meses 8–14: USCIS aprova I-130. Atualmente na média 9 meses.",
            "Mês 14–15: NVC assume o caso, cobra taxas (visa application $325 + affidavit of support $120), solicita documentos civis.",
            "Mês 16: agendamento da entrevista consular em SP ou Rio.",
            "Mês 17: entrevista + exame médico. Se aprovado, visa estampada em passaporte em ~1 semana.",
            "Mês 18: entrada nos EUA → status LPR ativa imediatamente. Green card físico chega pelo correio em 2–4 semanas.",
          ],
        },
        { type: "h2", text: "AOS via I-130: cônjuge já nos EUA", id: "aos" },
        {
          type: "p",
          text: "Se o cônjuge brasileiro já está nos EUA com status válido (F-1 OPT, H-1B, turista recente dentro de prazo, etc.), a rota AOS é mais rápida e evita a viagem ao Brasil para entrevista consular.",
        },
        {
          type: "list",
          style: "number",
          items: [
            "I-130 (petição USC) + I-485 (ajuste de status) protocolados juntos. I-765 (EAD) e I-131 (Advance Parole) são incluídos gratuitamente no pacote I-485 (desde 2024 a biometria está incluída no fee).",
            "Total USCIS: $675 + $1.440 + honorários $4.500–8.000.",
            "Mês 3–5: EAD + Advance Parole emitidos. Cônjuge pode trabalhar e viajar.",
            "Mês 10–16: entrevista AOS em escritório local USCIS (Orlando, Miami, etc). Casal comparece junto. Questões focadas em bona fide marriage.",
            "Mês 16–18: aprovação + green card pelo correio. Se casamento < 2 anos na aprovação → CR-1 condicional.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Armadilha AOS: entrada com intent fraudulenta",
          body:
            "Brasileiro que entra com visto de turista e se casa em 30–90 dias levanta PRESUNÇÃO de fraud intent. USCIS usa a 90-day rule: se ações 'imigratórias' (incluindo casamento) ocorrem dentro de 90 dias da entrada, presume-se que o intent de imigrar já existia. Proteção: esperar pelo menos 90 dias, documentar cuidadosamente a 'mudança de circunstâncias'. Idealmente, B-2 → casamento deve passar por análise de advogado antes de agir.",
        },
        { type: "h2", text: "K-1 Fiancé: quando ainda não casaram", id: "k1" },
        {
          type: "p",
          text: "K-1 é usado quando o casal ainda não é casado mas o cidadão americano quer trazer o(a) noivo(a) para casar nos EUA dentro de 90 dias. Detalhado em artigo próprio — resumo aqui:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "I-129F petição, 8–16 meses até visto na mão.",
            "Precisam ter se encontrado pessoalmente nos últimos 2 anos.",
            "90 dias para casar após entrada. Sem extensão, sem exceção.",
            "Após casamento: I-485 AOS (+$1.440) — casal continua nos EUA.",
          ],
        },
        { type: "h2", text: "Bona fide marriage: o dossiê que aprova ou nega", id: "bona-fide" },
        {
          type: "p",
          text: "Esta é a parte onde mais casos tropeçam. USCIS quer evidência de que o casamento é real, não arranjo para green card. Não existe lista oficial exaustiva, mas o padrão prático é montar um dossiê que cobre:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Evidência financeira conjunta: conta bancária conjunta com movimentação dos últimos 12–24 meses, cartões co-assinados, seguros conjuntos (saúde, automóvel, vida, residência).",
            "Evidência residencial: lease ou escritura com ambos os nomes, utility bills (luz, gás, internet) endereçados ao mesmo endereço, correspondência governamental (carteira de motorista no mesmo endereço).",
            "Evidência social: fotos juntos ao longo do tempo (namoro, casamento, férias, feriados, família), sociais nas quais estão taggeados, cartões de Natal/aniversário trocados.",
            "Declarações de 3 pessoas próximas (amigos, família) afirmando conhecimento pessoal da relação — form I-864 tem espaço ou anexo notarizado.",
            "Declaração do próprio casal narrando como se conheceram, quando começaram a morar juntos, decisões conjuntas significativas.",
            "Plano conjunto para o futuro — planejamento financeiro, filhos, compra de imóvel — com evidência documental.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Red flags que sinalizam fraude para USCIS",
          body:
            "Diferença de idade extrema sem contexto (20+ anos), idiomas muito diferentes sem language of communication demonstrado, casamento < 6 meses antes do protocolo, evidência de relacionamento paralelo de qualquer cônjuge, endereços diferentes nos últimos 12 meses, cônjuges que não conseguem responder perguntas básicas um sobre o outro na entrevista (nome da mãe do cônjuge, onde trabalha, rotina diária).",
        },
        { type: "h2", text: "A entrevista: o que esperar", id: "entrevista" },
        {
          type: "p",
          text: "Para AOS, entrevista em escritório USCIS local (Orlando: 9250 Bay Vista Executive Court). Para CR-1/IR-1, consulado em SP/Rio. Casal comparece junto para ambas.",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Duração típica: 20–45 minutos. Casos complexos: até 90 minutos.",
            "Oficial faz perguntas sobre: como se conheceram, namoro, casamento, vida cotidiana, planos futuros, famílias.",
            "Revisão do dossiê submetido — oficial pode pedir documentos adicionais em RFE.",
            "Casos com red flags podem receber 'Stokes interview' — cada cônjuge entrevistado separadamente, respostas comparadas. Raro mas acontece.",
            "Resultado: aprovação imediata é possível mas geralmente USCIS comunica por carta 1–6 semanas depois.",
          ],
        },
        { type: "h2", text: "I-751: o passo que muitos esquecem", id: "i-751" },
        {
          type: "p",
          text: "Se você recebe CR-1 (green card condicional de 2 anos), não pode apenas deixar rolar. Nos 90 dias ANTES do 2º aniversário da emissão do green card, você e seu cônjuge precisam protocolar I-751 Joint Petition to Remove Conditions.",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Fee: $595 + $85 biometria = $680 total.",
            "Documentos: evidência atualizada de bona fide marriage (12–24 meses adicionais de vida conjunta).",
            "Timeline: 12–24 meses de processamento. Sua permanência nos EUA fica automaticamente estendida via extension letter.",
            "Aprovação: green card permanente de 10 anos emitido.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Divórcio antes do I-751: o waiver",
          body:
            "Se o casamento acabou antes do I-751, você pode ainda removeCondicionalidade via waiver — divorce waiver (se casamento foi bona fide mas terminou) ou abuse waiver (se houve violência doméstica). Exige documentação robusta. Nunca abandone o processo sem consulta — perder I-751 deadline = perder green card.",
        },
        { type: "h2", text: "Custos totais ponta a ponta", id: "custos" },
        {
          type: "table",
          headers: ["Item", "CR-1/IR-1 Consular", "AOS I-130+I-485"],
          rows: [
            ["I-130 filing", "$675", "$675"],
            ["DS-260 visa app / I-485", "$325", "$1.440"],
            ["Affidavit of Support I-864", "$120", "$0"],
            ["Exame médico", "$300–450", "$300–450"],
            ["Traduções + apostilas", "$400–800", "$300–600"],
            ["Honorários advocatícios", "$4.500–7.000", "$5.500–9.000"],
            ["Biometria I-751 (se CR-1, após 2 anos)", "$680", "$680"],
            ["Total end-to-end", "$6.000–9.500", "$8.200–12.700"],
          ],
        },
        { type: "h2", text: "Os 6 erros que levam à negação", id: "erros" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Casar 30–90 dias após entrada com visto de turista — levanta 90-day rule presumption.",
            "Dossiê bona fide fraco: 5 fotos, 1 carta, conta bancária conjunta de 30 dias.",
            "Inconsistências entre declarações dos cônjuges em entrevista.",
            "Histórico de casamento anterior por green card (mesmo que revogado) — virtual red flag.",
            "Afastamentos longos durante o processo — meses morando em estados/países diferentes sem explicação.",
            "Esquecer I-751 após CR-1. Deadline é imutável.",
          ],
        },
        { type: "h2", text: "Leitura Pinho Law", id: "leitura" },
        {
          type: "p",
          text: "Green card por casamento é uma das rotas mais confiáveis do sistema quando feito certo — 85%+ de aprovação no Pinho Law para dossiês bem preparados. A chave é preparação: dossiê com 50+ documentos comprovando vida conjunta real, declaração narrativa detalhada, ensaio para entrevista. Nada disso é opcional em 2026 — USCIS está cada vez mais rigoroso com bona fide marriage.",
        },
      ],
      faq: [
        {
          q: "Posso aplicar para green card por casamento se entrei com visto de turista?",
          a: "Tecnicamente sim, mas com cautela. A 90-day rule presume fraud intent se você casa e protocola I-485 dentro de 90 dias da entrada. Esperar 91+ dias e documentar a 'mudança genuína de circunstâncias' é a prática padrão. Casos dentro dos 90 dias são aprovados mas recebem escrutínio elevado — obrigatório advogado.",
        },
        {
          q: "Meu cônjuge é Green Card holder (não cidadão). O processo é igual?",
          a: "Não. Cônjuges de LPR caem em F2A (preference family) vs 'immediate relative' para cônjuges de USC. F2A tem fila no Visa Bulletin (atualmente current para maioria dos países em abril/2026). Quando LPR vira USC, caso 'upgrada' automaticamente para immediate relative — mais rápido.",
        },
        {
          q: "Quanto tempo de casamento é 'suficiente' para USCIS?",
          a: "Não há mínimo legal — USCIS aprova casamentos de 2 meses se o dossiê bona fide é sólido. Na prática, casamentos < 6 meses + protocolo I-130 = escrutínio automático. Evidência compensa tempo: quanto mais novo o casamento, mais documentação de relacionamento pré-casamento precisa acompanhar.",
        },
        {
          q: "Posso continuar trabalhando durante o AOS?",
          a: "Não automaticamente. Mas o I-485 vem com I-765 EAD (Employment Authorization Document) gratuito desde 2024. Emitido em 3–5 meses, válido por 2 anos, permite qualquer emprego. Antes de receber o EAD, só pode trabalhar se já tinha autorização prévia (ex: H-1B ou F-1 OPT).",
        },
        {
          q: "Divórcio durante o processo — o que acontece?",
          a: "Depende do estágio: antes da aprovação do I-485 = processo morre imediatamente. Após CR-1 condicional: você pode continuar via divorce waiver no I-751, provando que o casamento foi bona fide quando celebrado. Após IR-1 (permanente): green card fica intacto, divórcio é irrelevante.",
        },
      ],
      related: [
        { label: "Marriage to USC — serviço completo", href: "/immigration/immigrant-visas/marriage-us-citizen" },
        { label: "K-1 Fiancé Visa", href: "/immigration/k-1" },
        { label: "Calculadora de tempo para Green Card", href: "/tools/green-card-timeline" },
        { label: "Visa cost estimator", href: "/tools/visa-cost-estimator" },
      ],
    },
    en: {
      title: "Green card through marriage: the complete 2026 guide for Brazilians",
      description:
        "Every path to marriage-based green card in 2026: CR-1, IR-1, K-1, AOS via I-130. Timelines, costs, bona fide marriage evidence, and the I-751 trap.",
      dek: "Marriage to a US citizen is the most emotional and most scrutinized path in the system. Done right: green card in 10–16 months. Done wrong: denial with a 10-year bar.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "Marriage-based green card is, by volume, the largest Brazilian entry path to the US — and where USCIS concentrates most fraud audits. A well-prepared bona fide marriage dossier is the difference between 12-month approval and a case stuck in RFE for 2 years.",
        },
        { type: "h2", text: "The 3 main paths" },
        {
          type: "table",
          headers: ["Route", "Spouse location", "Married?", "Timeline", "When"],
          rows: [
            ["CR-1 / IR-1", "In Brazil", "Yes", "12–18 mo", "Legal marriage already done, consular processing"],
            ["AOS via I-130", "In US with valid status", "Yes", "10–16 mo", "Spouse is legally in US"],
            ["K-1 Fiancé", "In Brazil", "No yet", "10–14m + AOS", "Still going to marry; prefers US wedding"],
          ],
        },
        { type: "h2", text: "CR-1 vs IR-1: the 2-year rule" },
        {
          type: "p",
          text: "If green card issues more than 2 years after marriage date: IR-1 (permanent, no conditions). Less: CR-1 (conditional for 2 years, requires I-751 joint petition later).",
        },
        { type: "h2", text: "Bona fide marriage: the dossier that approves or denies" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Joint financial: bank account with 12–24 months movement, co-signed cards, joint insurance.",
            "Joint residential: lease/deed with both names, utility bills, same-address DMV records.",
            "Social: photos across time, socials tagged together, cards/gifts exchanged.",
            "Three affidavits from people who personally know the relationship.",
            "Couple's own narrative: how met, started living together, major joint decisions.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "Red flags USCIS flags as fraud",
          body:
            "Extreme age gap without context, very different languages with no proven communication language, marriage <6 months before filing, evidence of parallel relationships, different addresses in past 12 months, spouses unable to answer basic questions about each other at interview.",
        },
        { type: "h2", text: "I-751: the step many forget" },
        {
          type: "p",
          text: "If you receive CR-1 (conditional), in the 90 days BEFORE the 2nd anniversary of green card issuance, you and your spouse must jointly file I-751 to remove conditions. Missing the deadline = losing the green card.",
        },
      ],
      faq: [
        {
          q: "Can I apply for marriage green card after entering on a tourist visa?",
          a: "Technically yes, with caution. The 90-day rule presumes fraud intent if you marry and file I-485 within 90 days of entry. Best practice: wait 91+ days and document a genuine change of circumstances. Cases within 90 days get heightened scrutiny — attorney mandatory.",
        },
        {
          q: "My spouse is a Green Card holder, not a citizen. Same process?",
          a: "No. LPR spouses fall under F2A (preference) vs 'immediate relative' for USC spouses. F2A has a Visa Bulletin queue (currently CURRENT for most countries as of April 2026). When LPR naturalizes, case auto-upgrades to immediate relative.",
        },
        {
          q: "Can I work during AOS?",
          a: "Not automatically, but I-485 includes a free I-765 EAD since 2024. Issued in 3–5 months, valid 2 years, allows any employment.",
        },
      ],
      related: [
        { label: "Marriage to USC service", href: "/immigration/immigrant-visas/marriage-us-citizen" },
        { label: "K-1 Fiancé Visa", href: "/immigration/k-1" },
        { label: "Green card timeline calculator", href: "/tools/green-card-timeline" },
      ],
    },
    es: {
      title: "Green card por matrimonio: guía completa 2026",
      description: "Todos los caminos al green card por matrimonio en 2026.",
      dek: "Matrimonio con ciudadano americano: la ruta más escrutada. Hecho correctamente: green card en 10–16 meses.",
      readingMinutes: 6,
      body: [
        { type: "p", text: "Green card por matrimonio es la mayor puerta de entrada para brasileños que terminan en EE.UU. La calidad del dossier de bona fide marriage es lo que separa aprobación en 12 meses de RFE por 2 años." },
        { type: "h2", text: "Los 3 caminos principales" },
        { type: "p", text: "CR-1/IR-1 consular, AOS vía I-130 (cónyuge ya en EE.UU.), K-1 fiancé (aún no casados)." },
        { type: "h2", text: "I-751: el paso crítico" },
        { type: "p", text: "Si recibes CR-1 (condicional por 2 años), debes presentar I-751 en los 90 días previos al aniversario. Perder el plazo = perder el green card." },
      ],
      faq: [
        { q: "¿Matrimonio post-turista funciona?", a: "Técnicamente sí, pero regla de 90 días presume intent de fraude. Esperar 91+ días." },
        { q: "¿Cónyuge LPR vs USC?", a: "LPR cae en F2A (con fila); USC es immediate relative (sin fila)." },
      ],
      related: [
        { label: "Marriage to USC", href: "/immigration/immigrant-visas/marriage-us-citizen" },
        { label: "K-1", href: "/immigration/k-1" },
      ],
    },
  },
};
