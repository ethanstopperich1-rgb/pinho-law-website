import type { Article } from "./types";

// Article — EB-2 NIW vs EB-1A 2026 comparison. High-intent buyer-stage
// search. Doc-spec priority topic per May 2026 PLwebsite audit Block
// 4.22. Authoritative reference: Matter of Dhanasar (AAO 2016) for
// EB-2 NIW; Kazarian v. USCIS (9th Cir. 2010) for EB-1A two-step.

export const eb2NiwVsEb1a2026: Article = {
  slug: "eb-2-niw-vs-eb-1a-2026",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  keywords: [
    "eb-2 niw vs eb-1a",
    "eb-1a vs eb-2 niw brasileiro",
    "national interest waiver vs extraordinary ability",
    "qual visto escolher pesquisador",
    "auto-petição green card",
    "dhanasar 3-prong",
    "kazarian two-step",
  ],
  category: {
    pt: "Imigração",
    en: "Immigration",
    es: "Inmigración",
  },
  content: {
    pt: {
      title: "EB-2 NIW vs EB-1A em 2026: qual escolher (e por quê)",
      description:
        "Comparação completa entre EB-2 NIW e EB-1A para brasileiros qualificados em 2026. Critérios, taxa de aprovação real, prazo, custo e estratégia híbrida.",
      dek: "Os dois únicos green cards de auto-petição. Brasileiros CURRENT em ambos. A escolha errada custa 12–24 meses. Aqui está o framework de decisão.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "EB-2 NIW e EB-1A são as duas únicas categorias de green card americano que permitem auto-petição — ou seja, sem oferta de emprego, sem PERM (Labor Certification), sem patrocinador. Para brasileiros qualificados em 2026, com Brasil CURRENT em ambas, a escolha correta acelera o processo em 6–18 meses. A errada gasta 12–24 meses em uma rota que provavelmente vai negar.",
        },
        {
          type: "p",
          text: "Este artigo é o framework prático que usamos na Pinho Law para definir, em 30 minutos de consulta, qual rota faz sentido para cada perfil profissional brasileiro.",
        },
        { type: "h2", text: "O padrão probatório é radicalmente diferente", id: "padrao-probatorio" },
        {
          type: "p",
          text: "EB-1A exige aclamação sustentada nacional ou internacional — você precisa estar no topo absoluto do seu campo. USCIS adjudicators aplicam o teste Kazarian em duas etapas: primeiro verificam se você atende 3 dos 10 critérios regulamentares (8 CFR §204.5(h)(3)); depois fazem uma 'final merits determination' avaliando se o conjunto demonstra aclamação sustentada. Atender critérios não é suficiente — é necessário também a impressão geral de excepcionalidade.",
        },
        {
          type: "p",
          text: "EB-2 NIW exige menos: mestrado, ou bacharelado + 5 anos de experiência progressiva, ou habilidade excepcional. Sob Matter of Dhanasar (AAO 2016), o adjudicator aplica três pontos (prongs): (1) sua atuação proposta tem mérito substancial e importância nacional; (2) você está bem posicionado para avançar essa atuação; (3) beneficiaria os EUA dispensar o requisito de oferta de emprego. É um padrão alinhado a 'forte mas não no topo'.",
        },
        { type: "h2", text: "Taxa de aprovação real (FY2024 + Q1 2026)", id: "taxa-aprovacao" },
        {
          type: "table",
          headers: ["Categoria", "Aprovação geral USCIS", "Auto-petição (sem advogado)", "Petição preparada por advogado"],
          rows: [
            ["EB-1A", "~30%", "~25–40%", "55–70%"],
            ["EB-2 NIW", "~67%", "40–65%", "75–85%"],
          ],
          note: "A diferença não é apenas perfil dos candidatos. EB-1A é a categoria probatoriamente mais exigente — mesmo perfis fortes que atendem critérios formais perdem na 'final merits determination'.",
        },
        { type: "h2", text: "Prazo (Premium Processing aplicado)", id: "prazo" },
        {
          type: "list",
          style: "bullet",
          items: [
            "EB-1A — I-140 regular: 8–14 meses · com Premium Processing: 45 dias úteis (US$ 2.965)",
            "EB-2 NIW — I-140 regular: 14–19 meses · com Premium Processing: 45 dias úteis (US$ 2.965)",
            "Para brasileiros (CURRENT em 2026): I-485 (Adjustment of Status) ou processamento consular = mais 6–18 meses após I-140 aprovado",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Premium Processing não muda probabilidade",
          body: "Premium Processing apenas reduz o tempo de adjudicação. NÃO aumenta chance de aprovação. Adjudicators aplicam o mesmo padrão probatório em ambos os caminhos. Para casos no limite, alguns advogados preferem regular para ter mais tempo de revisão antes de USCIS adjudicar.",
        },
        { type: "h2", text: "Quando EB-1A é a escolha certa", id: "quando-eb1a" },
        {
          type: "p",
          text: "Perfis que aprovam consistentemente em EB-1A:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Pesquisadores com 1.000+ citações Google Scholar (h-index ≥ 15-20 dependendo do campo)",
            "Cientistas com prêmios internacionais reconhecidos no campo (não apenas institucionais)",
            "Founders com saídas/exits notáveis ou Series B+ comprovada com cobertura de imprensa nacional",
            "Atletas profissionais ou treinadores em times/seleções de alto nível",
            "Artistas com exposições em museus tier-1 e crítica em mídia tier-1",
            "Médicos com publicações em NEJM/JAMA/Lancet, posições de chefia em sociedades médicas internacionais",
            "Engenheiros líderes (CTO, VP Engineering, Distinguished Engineer) com patentes adotadas amplamente, palestras top-tier, cobertura tech tier-1",
          ],
        },
        { type: "h2", text: "Quando EB-2 NIW é a escolha certa", id: "quando-eb2niw" },
        {
          type: "p",
          text: "EB-2 NIW é o caminho ideal quando:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Você tem mestrado ou bacharelado + 5 anos, mas histórico não atende padrão 'aclamação sustentada' do EB-1A",
            "Sua atuação proposta tem importância nacional clara — saúde pública, IA, cybersecurity, semicondutores, infraestrutura crítica, energia",
            "Você é tech profissional sem h-index alto mas com produto/biblioteca de larga adoção",
            "Você é empreendedor sem 'exit' notável mas com plano de negócio servindo interesse nacional",
            "Você é médico planejando servir área desatendida (Physician NIW estatutário)",
            "Você prefere taxa de aprovação maior (75–85%) sobre prazo mais curto",
          ],
        },
        { type: "h2", text: "Estratégia híbrida: protocolar os dois", id: "estrategia-hibrida" },
        {
          type: "p",
          text: "Para perfis na fronteira (talvez EB-1A, certamente EB-2 NIW), recomendamos com frequência protocolar os dois em paralelo. O custo adicional é marginal comparado ao risco de denial atrasar 12–18 meses todo o processo:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Custos USCIS adicionais: ~US$ 4.500 (segunda I-140 + Premium para a primeira)",
            "Honorários adicionais Pinho Law: 50–70% do segundo caso (reaproveitamos pesquisa, cartas, evidência)",
            "Você usa a primeira que aprovar — segunda é cancelada se a primeira aprovar primeiro",
            "Especialmente recomendado se houver expectativa de regulamentação restritiva (cenário 2026 com administração Trump revisando critérios EB)",
          ],
        },
        { type: "h2", text: "Brasil em 2026: janela favorável em ambas", id: "brasil-2026" },
        {
          type: "p",
          text: "No Visa Bulletin de abril de 2026, brasileiros estão CURRENT em EB-1, EB-2 (incluindo NIW), EB-3 e EB-5 (todas as categorias TEA Reservadas). Isto significa: data de prioridade current desde o filing — Adjustment of Status concorrente disponível, sem fila adicional após I-140 aprovado. É a janela mais favorável para brasileiros desde 2018.",
        },
        {
          type: "callout",
          tone: "alert",
          title: "Janela pode fechar — proteja sua data de prioridade",
          body: "A administração Trump anunciou em janeiro de 2026 revisão preliminar dos critérios de EB-1, EB-2 NIW, outstanding researcher e professor. Datas de prioridade pré-mudança são geralmente preservadas sob a regra anterior. Se você qualifica hoje, protocolar antes da regra final é recomendação universal entre escritórios de imigração sérios.",
        },
        { type: "h2", text: "Como decidir em 30 minutos", id: "como-decidir" },
        {
          type: "p",
          text: "Em consulta com a Dra. Izi, a triagem se faz em 4 perguntas:",
        },
        {
          type: "list",
          style: "number",
          items: [
            "Qual seu h-index ou métrica de impacto verificável?",
            "Você tem prêmios internacionais ou apenas nacionais/institucionais?",
            "Sua atuação proposta tem alinhamento direto com prioridade federal documentada (IA, healthcare, cyber)?",
            "Qual urgência — preciso aprovar em 6, 12, ou 18 meses?",
          ],
        },
        {
          type: "p",
          text: "As respostas decidem entre EB-1A solo, EB-2 NIW solo, ou estratégia híbrida. Sem 'avaliação especulativa' — análise baseada em jurisprudência recente da AAO + adjudicação interna do USCIS.",
        },
      ],
      faq: [
        {
          q: "Posso aplicar para EB-1A primeiro e EB-2 NIW depois se for negado?",
          a: "Tecnicamente sim, mas perde-se 8–14 meses. EB-1A negado também levanta bandeira em adjudicação subsequente do EB-2 NIW (memorando de denial fica no arquivo USCIS do beneficiário). Se há dúvida real sobre EB-1A, a melhor estratégia é protocolar os dois em paralelo desde o início.",
        },
        {
          q: "EB-1A é mais valioso que EB-2 NIW depois de aprovado?",
          a: "Não. Após aprovação, ambos resultam no mesmo tipo de green card (residência permanente). A diferença é apenas a categoria de fila no Visa Bulletin — relevante somente se a categoria sofrer retrocesso futuro. EB-1 tem prioridade sobre EB-2 nesse cenário.",
        },
        {
          q: "Preciso de doutorado para EB-1A?",
          a: "Não. Doutorado ajuda mas não é exigido. EB-1A avalia 'aclamação sustentada' — você pode comprovar sem PhD via prêmios, mídia, contribuições originais de impacto significativo, alto salário. Empresários, atletas, artistas e tech founders aprovam EB-1A sem PhD com regularidade.",
        },
        {
          q: "Trump Gold Card substitui EB-1A ou EB-2 NIW?",
          a: "Não em abril de 2026. O Trump Gold Card (proposto US$ 1M individual / US$ 2M corporativo) ainda não tem regulamentação final. Mesmo após implementado, será categoria distinta com critério econômico (não meritocrático). EB-1A e EB-2 NIW continuam vigentes.",
        },
      ],
      related: [
        { label: "EB-2 NIW — visão geral completa", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-1 — Habilidade Extraordinária", href: "/immigration/immigrant-visas/eb-1" },
        { label: "EB-2 NIW para profissionais de Tech", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
        { label: "EB-2 NIW para Médicos e Healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      ],
    },
    en: {
      title: "EB-2 NIW vs EB-1A in 2026: Which to Choose (and Why)",
      description:
        "Full comparison of EB-2 NIW vs EB-1A for qualified Brazilians in 2026. Criteria, real approval rates, timeline, cost, and hybrid filing strategy.",
      dek: "The only two self-petition green cards. Brazilians CURRENT in both. Picking wrong costs 12–24 months. Here's the decision framework.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "EB-2 NIW and EB-1A are the only two US green card categories allowing self-petition — meaning no job offer, no PERM (Labor Certification), no sponsor required. For qualified Brazilians in 2026, with Brazil CURRENT in both, picking the right one accelerates the process by 6–18 months. The wrong one wastes 12–24 months on a path that will likely deny.",
        },
        {
          type: "p",
          text: "This is the practical framework we use at Pinho Law to decide, in a 30-minute consultation, which path fits each Brazilian professional profile.",
        },
        { type: "h2", text: "The evidentiary standard is radically different", id: "evidentiary-standard" },
        {
          type: "p",
          text: "EB-1A requires sustained national or international acclaim — you must be at the absolute top of your field. USCIS adjudicators apply the Kazarian two-step test: first verifying that you meet 3 of 10 regulatory criteria (8 CFR §204.5(h)(3)); then making a 'final merits determination' assessing whether the whole demonstrates sustained acclaim. Meeting criteria isn't enough — the overall impression of exceptionality is also required.",
        },
        {
          type: "p",
          text: "EB-2 NIW requires less: a master's, or bachelor's + 5 years progressive experience, or exceptional ability. Under Matter of Dhanasar (AAO 2016), the adjudicator applies three prongs: (1) the proposed endeavor has substantial merit and national importance; (2) you are well-positioned to advance it; (3) it benefits the US to waive the job-offer requirement. This standard is built for 'strong but not top of field'.",
        },
        { type: "h2", text: "Real approval rates (FY2024 + Q1 2026)", id: "approval-rates" },
        {
          type: "table",
          headers: ["Category", "USCIS general approval", "Self-petition (no counsel)", "Attorney-prepared petition"],
          rows: [
            ["EB-1A", "~30%", "~25–40%", "55–70%"],
            ["EB-2 NIW", "~67%", "40–65%", "75–85%"],
          ],
          note: "The difference is not just candidate profile. EB-1A is the most evidentiarily demanding category — even strong profiles meeting formal criteria can lose at the 'final merits determination'.",
        },
        { type: "h2", text: "Timeline (with Premium Processing)", id: "timeline" },
        {
          type: "list",
          style: "bullet",
          items: [
            "EB-1A — I-140 regular: 8–14 months · with Premium Processing: 45 business days ($2,965)",
            "EB-2 NIW — I-140 regular: 14–19 months · with Premium Processing: 45 business days ($2,965)",
            "For Brazilians (CURRENT in 2026): I-485 (Adjustment of Status) or consular processing = another 6–18 months after I-140 approval",
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "Premium Processing does not change probability",
          body: "Premium Processing only reduces adjudication time. It does NOT increase approval chances. Adjudicators apply the same evidentiary standard either way. For borderline cases, some attorneys prefer regular processing to allow more review time before USCIS adjudicates.",
        },
        { type: "h2", text: "When EB-1A is the right choice", id: "when-eb1a" },
        {
          type: "list",
          style: "bullet",
          items: [
            "Researchers with 1,000+ Google Scholar citations (h-index ≥ 15–20 depending on field)",
            "Scientists with internationally recognized field-specific awards (not just institutional)",
            "Founders with notable exits or proven Series B+ with national press",
            "Professional athletes or coaches at top-tier teams or national selections",
            "Artists with tier-1 museum exhibitions and tier-1 media criticism",
            "Physicians with NEJM/JAMA/Lancet publications, leadership in international medical societies",
            "Lead engineers (CTO, VP Eng, Distinguished Engineer) with widely-adopted patents and tier-1 tech press",
          ],
        },
        { type: "h2", text: "When EB-2 NIW is the right choice", id: "when-eb2niw" },
        {
          type: "list",
          style: "bullet",
          items: [
            "You have a master's or bachelor's + 5 yrs, but track record doesn't meet EB-1A 'sustained acclaim' standard",
            "Proposed endeavor has clear national importance — public health, AI, cyber, semis, critical infrastructure, energy",
            "You're a tech professional without high h-index but with widely-adopted product/library",
            "You're an entrepreneur without notable exit but with national-interest business plan",
            "You're a physician planning to serve an underserved area (statutory Physician NIW)",
            "You prefer higher approval rate (75–85%) over shorter timeline",
          ],
        },
        { type: "h2", text: "Hybrid strategy: file both", id: "hybrid" },
        {
          type: "p",
          text: "For borderline profiles (maybe EB-1A, certainly EB-2 NIW), we frequently recommend filing both in parallel. The additional cost is marginal vs the risk of a denial delaying everything by 12–18 months:",
        },
        {
          type: "list",
          style: "bullet",
          items: [
            "Additional USCIS costs: ~$4,500 (second I-140 + Premium for first)",
            "Additional Pinho Law fees: 50–70% of the second case (we reuse research, letters, evidence)",
            "You use whichever approves first — second is canceled if first approves first",
            "Especially recommended in 2026 with the Trump administration reviewing EB criteria",
          ],
        },
        { type: "h2", text: "Brazil in 2026: favorable window in both", id: "brazil-2026" },
        {
          type: "p",
          text: "In the April 2026 Visa Bulletin, Brazilians are CURRENT in EB-1, EB-2 (including NIW), EB-3, and EB-5 (all Reserved TEA categories). This means: priority date current at filing — concurrent Adjustment of Status available, no extra queue after I-140 approval. It's the most favorable window for Brazilians since 2018.",
        },
        {
          type: "callout",
          tone: "alert",
          title: "Window may close — protect your priority date",
          body: "The Trump administration announced in January 2026 a preliminary review of EB-1, EB-2 NIW, outstanding researcher, and professor criteria. Pre-change priority dates are generally preserved under the prior rule. If you qualify today, filing before the final rule is universal advice among serious immigration firms.",
        },
        { type: "h2", text: "How to decide in 30 minutes", id: "how-to-decide" },
        {
          type: "p",
          text: "In a consultation with Dra. Izi, triage runs through 4 questions:",
        },
        {
          type: "list",
          style: "number",
          items: [
            "What's your h-index or verifiable impact metric?",
            "Do you have international awards, or only national/institutional ones?",
            "Does your proposed endeavor align directly with a documented federal priority (AI, healthcare, cyber)?",
            "What's the urgency — do you need approval in 6, 12, or 18 months?",
          ],
        },
        {
          type: "p",
          text: "Answers decide between solo EB-1A, solo EB-2 NIW, or hybrid strategy. No 'speculative assessment' — analysis based on recent AAO case law and internal USCIS adjudication trends.",
        },
      ],
      faq: [
        {
          q: "Can I file EB-1A first and EB-2 NIW later if denied?",
          a: "Technically yes, but you lose 8–14 months. An EB-1A denial also raises a flag in subsequent EB-2 NIW adjudication (denial memo stays in the beneficiary's USCIS file). If there's real EB-1A doubt, the better strategy is to file both in parallel from the start.",
        },
        {
          q: "Is EB-1A more valuable than EB-2 NIW after approval?",
          a: "No. After approval, both result in the same green card type (permanent residence). The only difference is Visa Bulletin queue category — relevant only if the category retrogresses in the future. EB-1 has priority over EB-2 in that scenario.",
        },
        {
          q: "Do I need a PhD for EB-1A?",
          a: "No. PhD helps but is not required. EB-1A evaluates 'sustained acclaim' — you can prove it without a PhD via awards, media, original contributions of significant impact, high salary. Entrepreneurs, athletes, artists, and tech founders regularly approve EB-1A without a PhD.",
        },
        {
          q: "Does Trump Gold Card replace EB-1A or EB-2 NIW?",
          a: "No, as of April 2026. The proposed Trump Gold Card ($1M individual / $2M corporate) does not have final regulations yet. Even after implementation, it will be a separate category with economic (not meritocratic) criteria. EB-1A and EB-2 NIW remain in force.",
        },
      ],
      related: [
        { label: "EB-2 NIW — full overview", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-1 — Extraordinary Ability", href: "/immigration/immigrant-visas/eb-1" },
        { label: "EB-2 NIW for tech professionals", href: "/immigration/immigrant-visas/eb-2-niw/for-tech-professionals" },
        { label: "EB-2 NIW for doctors and healthcare", href: "/immigration/immigrant-visas/eb-2-niw/for-doctors" },
      ],
    },
    es: {
      title: "EB-2 NIW vs EB-1A en 2026: cuál elegir (y por qué)",
      description:
        "Comparación completa entre EB-2 NIW y EB-1A para brasileños calificados en 2026. Criterios, tasa de aprobación real, plazo, costo y estrategia híbrida.",
      dek: "Las dos únicas green cards de auto-petición. Brasileños CURRENT en ambas. Elegir mal cuesta 12–24 meses.",
      readingMinutes: 8,
      body: [
        {
          type: "p",
          text: "EB-2 NIW y EB-1A son las dos únicas categorías de green card que permiten auto-petición — sin oferta de empleo, sin PERM, sin patrocinador. Para brasileños calificados en 2026, con Brasil CURRENT en ambas, la elección correcta acelera el proceso en 6–18 meses.",
        },
        { type: "h2", text: "El estándar probatorio es radicalmente diferente" },
        {
          type: "p",
          text: "EB-1A exige aclamación sostenida nacional o internacional. Adjudicadores aplican el test Kazarian en dos pasos: primero verifican si cumple 3 de 10 criterios; luego hacen una 'final merits determination'. EB-2 NIW aplica los 3 prongs Dhanasar — más alineado a 'fuerte pero no en la cima'.",
        },
        { type: "h2", text: "Tasas de aprobación reales" },
        {
          type: "table",
          headers: ["Categoría", "Aprobación general", "Auto-petición", "Con abogado"],
          rows: [
            ["EB-1A", "~30%", "~25–40%", "55–70%"],
            ["EB-2 NIW", "~67%", "40–65%", "75–85%"],
          ],
        },
        { type: "h2", text: "Brasil en 2026: ventana favorable" },
        {
          type: "p",
          text: "En el Visa Bulletin de abril 2026, brasileños CURRENT en EB-1, EB-2 (incluyendo NIW), EB-3 y EB-5. Es la ventana más favorable desde 2018.",
        },
      ],
      faq: [
        {
          q: "¿Puedo aplicar primero a EB-1A y luego EB-2 NIW si me niegan?",
          a: "Técnicamente sí, pero pierde 8–14 meses. Una negación EB-1A también levanta bandera en adjudicación EB-2 NIW posterior. Mejor presentar ambas en paralelo si hay duda.",
        },
        {
          q: "¿EB-1A es más valioso que EB-2 NIW después de aprobado?",
          a: "No. Ambos resultan en el mismo green card. La única diferencia es la prioridad de cola en el Visa Bulletin si hay retroceso futuro.",
        },
      ],
      related: [
        { label: "EB-2 NIW — visión general", href: "/immigration/immigrant-visas/eb-2-niw" },
        { label: "EB-1 — Habilidad Extraordinaria", href: "/immigration/immigrant-visas/eb-1" },
      ],
    },
  },
};
