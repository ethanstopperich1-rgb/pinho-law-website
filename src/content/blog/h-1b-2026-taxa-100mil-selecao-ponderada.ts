import type { Article } from "./types";

// Article 7 — H-1B 2026 landscape. The Sep 2025 presidential proclamation
// introduced a $100K supplemental fee for NEW H-1B workers abroad + DHS
// rulemaking moving toward wage-based lottery selection. Massive change
// for Brazilian tech + engineering professionals. Source: White House
// Proclamation on Restriction on Entry of Certain H-1B Nonimmigrants
// (Sep 2025) + USCIS H-1B Final Rule 2024/2025.

export const h1b2026Taxa100milSelecaoPonderada: Article = {
  slug: "h-1b-2026-taxa-100mil-selecao-ponderada",
  datePublished: "2026-04-18",
  dateModified: "2026-04-20",
  keywords: [
    "h1b 2026 mudancas",
    "h1b taxa 100 mil dolares",
    "h-1b brasileiro tech",
    "h1b selecao ponderada salario",
    "h1b substituicao eb2 niw",
    "h1b loteria 2026",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "H-1B 2026: a taxa de US$ 100 mil, seleção ponderada por salário, e o que isso muda para brasileiros",
      description:
        "O H-1B em 2026 está irreconhecível: proclamação de setembro/2025 impôs US$ 100 mil por trabalhador novo no exterior, seleção por salário está em regulamentação. Guia honesto para brasileiros.",
      dek: "O H-1B que você lembra — loteria simples, US$ 780 de taxa, 85 mil vagas — acabou. O H-1B de 2026 é um produto para salários altos. E a alternativa — EB-2 NIW — nunca foi mais atraente para brasileiros.",
      readingMinutes: 10,
      body: [
        {
          type: "p",
          text: "Em 19 de setembro de 2025, uma proclamação presidencial mudou fundamentalmente o cálculo econômico do H-1B. Em combinação com a regra final do USCIS sobre seleção ponderada por salário, o H-1B de 2026 é outro produto. Para muitos brasileiros que vinham olhando esse visto como a ponte natural para os EUA, é hora de reavaliar.",
        },
        {
          type: "p",
          text: "Este artigo cobre o que mudou em 2025–2026, o que continua valendo, o cálculo real de custo para o empregador americano, e por que o EB-2 NIW se tornou a escolha racional para a maioria dos profissionais qualificados brasileiros.",
        },
        { type: "h2", text: "A proclamação de setembro/2025 em 90 segundos", id: "proclamacao" },
        {
          type: "p",
          text: "Pontos centrais da proclamação e da orientação subsequente do USCIS (outubro/2025):",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Taxa suplementar de US$ 100.000 por trabalhador H-1B novo admitido no exterior ou que busca emissão de nova visa no exterior. Pago pelo empregador.",
            "Aplicável a novas petições I-129 H-1B protocoladas após 21/set/2025 para trabalhadores fora dos EUA.",
            "NÃO se aplica a: renovações para mesmo empregador, trabalhadores já nos EUA em outro status que fazem change-of-status para H-1B sem sair, H-1B1 (Chile/Singapura).",
            "Esforços legais para bloquear estão em curso; sem decisão judicial definitiva até abril/2026. A taxa está sendo coletada.",
          ],
        },
        {
          type: "callout",
          tone: "alert",
          title: "O que isso significa na prática",
          body:
            "Para brasileiros no Brasil que hoje ganhariam o H-1B e pediriam consular processing em SP/Rio — o empregador agora paga US$ 100 mil por cima das taxas USCIS tradicionais. Muitas empresas simplesmente não vão patrocinar candidatos fora dos EUA para posições de salário médio. O H-1B virou um produto para perfis sênior (US$ 200K+) onde o empregador absorve o custo.",
        },
        { type: "h2", text: "A seleção ponderada por salário", id: "selecao-ponderada" },
        {
          type: "p",
          text: "A segunda grande mudança vem da regra final USCIS de 2024–2025 sobre seleção na loteria H-1B. Em vez do sorteio aleatório clássico, a nova regra atribui múltiplas entradas na loteria com base no wage level do cargo oferecido:",
        },
        {
          type: "table",
          headers: ["Wage Level", "Salário relativo ao local", "Entradas na loteria"],
          rows: [
            ["Nível IV", "Top 33% (expert)", "4 entradas"],
            ["Nível III", "Próximo 33% (experienced)", "3 entradas"],
            ["Nível II", "Próximo 33% (qualified)", "2 entradas"],
            ["Nível I", "Bottom 33% (entry-level)", "1 entrada"],
          ],
          note:
            "USCIS usa o OES (Occupational Employment Statistics) para definir o wage level por SOC code + geografia. Empregador indica o wage level oferecido no formulário de registro.",
        },
        {
          type: "p",
          text: "Combine as duas mudanças e o resultado é previsível: o H-1B viveu como programa para especialistas bem pagos, e agora é lei. Recém-formados (OPT de F-1 tentando converter para H-1B) e cargos de entry-level essencialmente não são mais competitivos na loteria.",
        },
        { type: "h2", text: "O cálculo do empregador em 2026", id: "custo-empregador" },
        {
          type: "p",
          text: "Antes de setembro/2025, o custo de patrocínio H-1B para um novo trabalhador ficava entre US$ 5.000 e US$ 10.000 em taxas + US$ 5.500–9.000 em honorários. Hoje:",
        },
        {
          type: "table",
          headers: ["Item", "Empregador com 26+ funcionários"],
          rows: [
            ["I-129 filing fee", "$780"],
            ["ACWIA training fee", "$1.500"],
            ["Fraud prevention & detection", "$500"],
            ["Asylum Program Fee (2024 rule)", "$600"],
            ["Registration lottery fee", "$215"],
            ["NEW: Proclamação $100K fee (trabalhador fora dos EUA)", "$100.000"],
            ["Premium Processing (opcional)", "$2.805"],
            ["Honorários Pinho Law (H-1B completo)", "$5.500 – $9.000"],
            ["Tradução de documentos", "$600"],
            ["Total empregador — trabalhador JÁ nos EUA", "$8.700 – $15.200"],
            ["Total empregador — trabalhador NO BRASIL", "$108.700 – $115.200"],
          ],
          note:
            "A exceção 'trabalhador já nos EUA' engloba estudantes F-1 com OPT, J-1 com waiver, trabalhadores em B-1 que fazem change-of-status sem sair.",
        },
        {
          type: "callout",
          tone: "info",
          title: "A janela aberta: quem já está nos EUA",
          body:
            "Estudante brasileiro de mestrado com OPT ativo, trabalhador em L-1 querendo mudar para H-1B, F-1 com STEM OPT prestes a expirar — todos esses ainda podem pleitear H-1B com os custos tradicionais. A proclamação dos US$ 100K não aplica para quem faz change-of-status internamente.",
        },
        { type: "h2", text: "Por que EB-2 NIW virou a alternativa óbvia", id: "niw-alternativa" },
        {
          type: "p",
          text: "Brasileiros profissionais qualificados que antes miravam H-1B como primeira porta de entrada agora têm incentivo financeiro imediato para olhar EB-2 NIW:",
        },
        {
          type: "table",
          headers: ["Dimensão", "H-1B (2026)", "EB-2 NIW"],
          rows: [
            ["Requer empregador", "Sim — empregador patrocina", "Não — self-petition"],
            ["Taxa governamental total", "~$3.600 (empregador) + $100K (se fora)", "$4.245 (candidato)"],
            ["Honorários típicos", "$5.500–9.000 (empregador)", "$8.500–14.000 (candidato)"],
            ["Loteria", "Sim — seleção ponderada", "Não"],
            ["Resultado final", "Visto temporário 3+3 anos", "Green card permanente"],
            ["Brasil na fila", "Sem fila específica", "CURRENT em abril/2026"],
            ["Timeline regular", "6–10 meses USCIS", "8–14 meses USCIS"],
            ["Com Premium Processing", "15 dias úteis", "15 dias úteis"],
            ["Quem paga", "Empregador", "Candidato"],
          ],
        },
        {
          type: "p",
          text: "O argumento simples: se você qualifica para NIW (mestrado ou bacharelado + 5 anos + trajetória com impacto), gastar US$ 12–18K em honorários próprios para ir direto ao green card é drasticamente melhor que esperar um empregador aceitar pagar US$ 108K por um H-1B que vira green card anos depois via outro processo.",
        },
        { type: "h2", text: "Os 4 cenários onde H-1B ainda faz sentido em 2026", id: "quando-h1b-serve" },
        {
          type: "list",
          style: "number",
          items: [
            "Você já está nos EUA em outro status (F-1 OPT, L-1, J-1 com waiver) e quer change-of-status. A taxa de US$ 100K não aplica.",
            "Posição sênior/executiva pagando US$ 200K+ onde o empregador já está absorvendo custos altos de recrutamento e o H-1B é apenas mais uma linha no orçamento.",
            "Profissional em campo sem rota meritocrática alternativa — wage level IV mas sem credenciais de publicação/patente para EB-2 NIW.",
            "Empregador com necessidade urgente (3–6 meses) que não pode esperar os 8–14 meses do I-140 EB-2 NIW. H-1B com Premium Processing + change-of-status entrega trabalho autorizado em 2–3 meses.",
          ],
        },
        { type: "h2", text: "A rota recomendada: OPT → EB-2 NIW paralelo", id: "estrategia" },
        {
          type: "p",
          text: "Para estudantes brasileiros atualmente com F-1 e OPT (ou STEM OPT), a estratégia que recomendamos em 2026 combina:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Continue trabalhando sob OPT ou STEM OPT enquanto elegível (até 36 meses para áreas STEM).",
            "Protocola I-140 EB-2 NIW self-petition paralelo. Com Premium Processing, aprovação em 2 meses.",
            "Se o OPT está expirando antes da aprovação I-140: empregador pode pleitear H-1B via change-of-status (sem a taxa US$ 100K porque você já está nos EUA).",
            "Após aprovação I-140 + Brasil CURRENT: I-485 adjustment of status, sem sair dos EUA. Green card em 10–18 meses.",
          ],
        },
        {
          type: "callout",
          tone: "success",
          title: "Exemplo real de perfil que funciona",
          body:
            "Engenheira de software brasileira formada em 2024 nos EUA, atualmente em STEM OPT trabalhando em startup de IA. Perfil: mestrado + 1 paper NeurIPS + patente depositada + TAM em crescimento. Em 2026: I-140 EB-2 NIW com Premium aprovado em 7 semanas. I-485 protocolado em paralelo. Green card permanente previsto para ~14 meses após o filing inicial. Total de fora: US$ 13K em honorários + taxas. Sem H-1B necessário.",
        },
        { type: "h2", text: "Leitura final: 2026 é o ano do NIW", id: "leitura" },
        {
          type: "p",
          text: "O H-1B continua existindo e vai continuar existindo. Mas a política migratória de 2025–2026 empurrou o custo real do H-1B-from-abroad para níveis que eliminam o programa para o profissional médio estrangeiro. Para brasileiros qualificados — e Brasil tem uma das populações profissionais mais fortes do Hemisfério Sul em tech, medicina e engenharia — o EB-2 NIW com Brasil CURRENT é dramaticamente superior.",
        },
        {
          type: "p",
          text: "Nosso escritório viu triplicar a procura por EB-2 NIW no primeiro trimestre de 2026. A razão é aritmética: gasta-se menos, demora igual ou menos, e o destino é green card em vez de visto temporário. Se você está no perfil certo, é difícil defender uma escolha diferente.",
        },
      ],
      faq: [
        {
          q: "A taxa de US$ 100 mil já está em vigor?",
          a: "Sim. A proclamação entrou em vigor em 21 de setembro de 2025 e USCIS + Departamento de Estado coletam a taxa em petições e consultas consulares desde então. Há litígios em andamento, mas nenhum bloqueio judicial permanente até abril/2026. Se você não quer apostar no judiciário, planeje considerando que a taxa continua aplicável.",
        },
        {
          q: "Se eu já estou nos EUA com visto F-1, a taxa US$ 100K me afeta?",
          a: "Não — ela só aplica a trabalhadores sendo admitidos do EXTERIOR. Change-of-status interno de F-1 OPT para H-1B não gera a taxa. Esta é a rota mais acessível ao H-1B em 2026 e por isso estratégias combinadas (OPT + NIW paralelo) são a jogada dominante para estudantes brasileiros formados nos EUA.",
        },
        {
          q: "A seleção ponderada por salário já valeu em 2026?",
          a: "A regra final foi publicada e está em efeito para o registro de 2026. O empregador indica o wage level do cargo na plataforma USCIS, e candidatos a wage level IV ganham 4 entradas na loteria vs 1 entrada para level I. O efeito líquido: candidatos de entry-level essencialmente não são mais competitivos.",
        },
        {
          q: "EB-2 NIW funciona para recém-formado em OPT?",
          a: "Pode funcionar se o perfil justificar — não basta ser formado, precisa demonstrar impacto: publicações, patentes, trabalho em empresa/projeto com alcance nacional, reconhecimento no campo. Para recém-formados em áreas emergentes (AI, energia limpa, biotech), a barreira de entrada do NIW tem sido tratada com mais flexibilidade desde Matter of Dhanasar (2016).",
        },
        {
          q: "H-1B ainda vale a pena para o empregador pagar US$ 100K?",
          a: "Sim, em cenários específicos — senioridade alta (diretor técnico pago US$ 300K+), função crítica sem alternativa doméstica, empresas que absorvem custos de relocação de US$ 50K+ por padrão. Para esses perfis, os US$ 100K são uma linha no orçamento. Para posições médias (US$ 100–150K), o cálculo não fecha — empresas estão migrando para contratação remota global ou esperando o candidato resolver status por conta própria via NIW/EB-1A.",
        },
      ],
      related: [
        { label: "H-1B — Specialty Occupation (serviço completo)", href: "/immigration/non-immigrant-visas/h-1b" },
        { label: "EB-2 NIW — a alternativa sem empregador", href: "/immigration/eb-2-niw" },
        { label: "Calculadora de custo de visto", href: "/tools/visa-cost-estimator" },
        { label: "Simulador de tempo para Green Card", href: "/tools/green-card-timeline" },
      ],
    },
    en: {
      title: "H-1B 2026: the $100K fee, wage-weighted lottery, and what it means for Brazilians",
      description:
        "H-1B in 2026 is unrecognizable: the Sep 2025 proclamation imposed $100K per new overseas worker, wage-based selection is active. Honest guide for Brazilians.",
      dek: "The H-1B you remember — random lottery, $780 fee, 85K cap — is gone. The 2026 H-1B is a high-wage product. And the alternative — EB-2 NIW — has never been more attractive for Brazilians.",
      readingMinutes: 7,
      body: [
        {
          type: "p",
          text: "A September 2025 presidential proclamation plus the USCIS wage-weighted selection rule have fundamentally changed the H-1B economics. For many Brazilians eyeing H-1B as their US entry path, it's time to reassess.",
        },
        { type: "h2", text: "The Sep 2025 proclamation" },
        {
          type: "list",
          style: "bullet",
          items: [
            "$100K supplemental fee per NEW H-1B worker admitted from abroad or requesting a new visa abroad. Paid by the employer.",
            "Applies to new I-129 H-1B petitions filed after Sep 21, 2025 for workers OUTSIDE the US.",
            "Does NOT apply to: renewals with same employer, workers already in the US doing change-of-status to H-1B without departing, H-1B1 (Chile/Singapore).",
            "Legal challenges in progress; no permanent injunction as of April 2026.",
          ],
        },
        { type: "h2", text: "Wage-weighted lottery" },
        {
          type: "table",
          headers: ["Wage Level", "Relative wage", "Lottery entries"],
          rows: [
            ["Level IV (expert)", "Top 33%", "4 entries"],
            ["Level III", "Next 33%", "3"],
            ["Level II", "Next 33%", "2"],
            ["Level I (entry)", "Bottom 33%", "1 entry"],
          ],
        },
        { type: "h2", text: "Employer cost in 2026" },
        {
          type: "p",
          text: "Total for a worker already in the US: $8,700–15,200. Total for a worker IN BRAZIL: $108,700–115,200. The difference is the new $100K proclamation fee.",
        },
        { type: "h2", text: "Why EB-2 NIW became the obvious alternative" },
        {
          type: "table",
          headers: ["Dimension", "H-1B (2026)", "EB-2 NIW"],
          rows: [
            ["Employer required", "Yes", "No — self-petition"],
            ["Gov cost", "~$3.6K emp + $100K if abroad", "$4,245 (applicant)"],
            ["Attorney fees", "$5.5K–9K (emp)", "$8.5K–14K (applicant)"],
            ["Lottery", "Yes — wage-weighted", "No"],
            ["Final result", "Temp visa 3+3 yrs", "Permanent green card"],
            ["Brazil queue", "No specific queue", "CURRENT Apr 2026"],
          ],
        },
        { type: "h2", text: "When H-1B still works in 2026" },
        {
          type: "list",
          style: "number",
          items: [
            "Already in US in another status (F-1 OPT, L-1) → change-of-status avoids the $100K.",
            "Senior role paying $200K+ where employer absorbs cost.",
            "No merit-based alternative (no publications/patents for NIW).",
            "Urgent employer need (3–6 months) — H-1B premium + COS faster than NIW I-140.",
          ],
        },
      ],
      faq: [
        {
          q: "Is the $100K fee in force?",
          a: "Yes, since Sep 21, 2025. Litigation ongoing but no permanent injunction as of April 2026.",
        },
        {
          q: "If I'm in the US on F-1, does the $100K affect me?",
          a: "No. Internal change-of-status from F-1 OPT to H-1B avoids the fee. This is now the dominant path for US-educated Brazilians.",
        },
        {
          q: "Does EB-2 NIW work for a recent OPT grad?",
          a: "It can if the profile justifies it — publications, patents, national-reach work. Dhanasar (2016) has been applied with more flexibility for emerging-field profiles (AI, clean energy, biotech).",
        },
      ],
      related: [
        { label: "H-1B service page", href: "/immigration/non-immigrant-visas/h-1b" },
        { label: "EB-2 NIW", href: "/immigration/eb-2-niw" },
        { label: "Visa cost estimator", href: "/tools/visa-cost-estimator" },
      ],
    },
    es: {
      title: "H-1B 2026: la tarifa de US$ 100K y selección por salario",
      description: "Qué cambió en el H-1B 2026 y por qué EB-2 NIW es ahora la mejor alternativa.",
      dek: "H-1B 2026 es otro producto. Para profesionales brasileños, EB-2 NIW es dramáticamente mejor.",
      readingMinutes: 5,
      body: [
        { type: "p", text: "La proclamación de septiembre/2025 impuso US$ 100K por trabajador H-1B nuevo desde el extranjero. La selección ponderada por salario favorece niveles altos (4 entradas en lotería vs 1 entry-level)." },
        { type: "h2", text: "Por qué EB-2 NIW es la alternativa" },
        { type: "p", text: "EB-2 NIW: sin empleador, $4.245 en tarifas USCIS, Brasil CURRENT en abril/2026, timeline similar, destino green card en vez de visa temporal." },
      ],
      faq: [
        { q: "¿La tarifa $100K ya está vigente?", a: "Sí, desde sep/2025." },
        { q: "¿F-1 OPT afecta?", a: "No. Change-of-status interno evita la tarifa." },
      ],
      related: [
        { label: "H-1B", href: "/immigration/non-immigrant-visas/h-1b" },
        { label: "EB-2 NIW", href: "/immigration/eb-2-niw" },
      ],
    },
  },
};
