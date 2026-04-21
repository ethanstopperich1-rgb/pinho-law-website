// Programmatic visa data layer — source of truth for all visa pages,
// calculators, decision engine inputs, and schema generators.
// Every record is fully populated. No placeholders.

import type { Visa } from "@/types/data";

// ════════════════════════════════════════════════════════════════
// EB-2 NIW
// ════════════════════════════════════════════════════════════════
const eb2niw: Visa = {
  id: "eb-2-niw",
  uscisCode: "EB-2",
  subCategory: "National Interest Waiver",
  category: "employment-based-permanent",
  classification: "immigrant",
  slugs: { pt: "eb-2-niw", en: "eb-2-niw", es: "eb-2-niw" },
  names: {
    pt: {
      short: "EB-2 NIW",
      full: "EB-2 National Interest Waiver",
      formal: "Visto de Imigrante EB-2 com Isenção de Interesse Nacional",
    },
    en: {
      short: "EB-2 NIW",
      full: "EB-2 National Interest Waiver",
      formal: "EB-2 National Interest Waiver Immigrant Visa",
    },
    es: {
      short: "EB-2 NIW",
      full: "EB-2 Exención por Interés Nacional",
      formal: "Visa de Inmigrante EB-2 con Exención por Interés Nacional",
    },
  },
  properties: {
    leadsToGreenCard: true,
    requiresEmployer: false,
    requiresJobOffer: false,
    requiresLaborCert: false,
    allowsPremiumProcessing: true,
    hasLottery: false,
    hasCap: true,
    hasBacklog: false,
    maxInitialValidityMonths: null,
    renewable: null,
    dualIntent: true,
    pathToCitizenship: true,
    citizenshipEligibleYears: 5,
  },
  timeline: {
    standardMonths: { min: 8, max: 14 },
    premiumMonths: { min: 2, max: 4 },
    toGreenCardConsularMonths: { min: 4, max: 8 },
    toGreenCardAOSMonths: { min: 8, max: 18 },
  },
  eligibility: {
    minEducation: "bachelors",
    preferredEducation:
      "Mestrado ou superior preferido; bacharelado + 5 anos aceito",
    requiresExperience: true,
    minExperienceYears: 5,
    requiresExceptionalAbility: false,
    threeProngTest: [
      {
        id: "substantial-merit",
        names: {
          pt: "Mérito Substancial e Importância Nacional",
          en: "Substantial Merit and National Importance",
          es: "Mérito Sustancial e Importancia Nacional",
        },
        description: {
          pt: "A proposta do requerente deve ter mérito substancial em áreas como ciência, tecnologia, negócios, educação, cultura ou saúde. O impacto deve ser demonstrável em escala nacional, não apenas local ou regional.",
          en: "The petitioner's proposed endeavor must have substantial merit in fields such as science, technology, business, education, culture, or health. The impact must be demonstrably national in scope, not merely local or regional.",
          es: "El proyecto propuesto debe tener mérito sustancial en áreas como ciencia, tecnología, negocios, educación, cultura o salud. El impacto debe ser demostrable a escala nacional.",
        },
      },
      {
        id: "well-positioned",
        names: {
          pt: "Candidato Bem Posicionado para Avançar a Proposta",
          en: "Applicant Well-Positioned to Advance the Endeavor",
          es: "Solicitante Bien Posicionado para Avanzar el Proyecto",
        },
        description: {
          pt: "O requerente deve demonstrar que está bem posicionado para avançar sua proposta — através de educação, habilidades, histórico de realizações e um plano concreto. Publicações, patentes, citações e reconhecimentos fortalecem este prong.",
          en: "The petitioner must show they are well-positioned to advance the proposed endeavor through education, skills, record of past success, and a concrete plan. Publications, patents, citations, and awards strengthen this prong.",
          es: "El solicitante debe demostrar que está bien posicionado para avanzar su proyecto a través de educación, habilidades y un historial de logros. Publicaciones, patentes y reconocimientos fortalecen este elemento.",
        },
      },
      {
        id: "beneficial-to-waive",
        names: {
          pt: "Benefício Nacional em Dispensar o Requisito do Empregador",
          en: "National Benefit to Waiving the Job Offer Requirement",
          es: "Beneficio Nacional al Renunciar al Requisito del Empleador",
        },
        description: {
          pt: "O USCIS deve concluir que os benefícios de dispensar o requisito de oferta de emprego e certificação trabalhista superam os interesses da proteção dos trabalhadores americanos. Profissionais cujo trabalho beneficia os EUA diretamente — pesquisadores, médicos em regiões carentes, tecnólogos — tipicamente satisfazem este critério.",
          en: "USCIS must conclude that the national interest benefits of waiving the job offer and labor certification requirement outweigh the interests of protecting US workers. Professionals whose work directly benefits the US — researchers, physicians in underserved areas, technologists — typically satisfy this criterion.",
          es: "USCIS debe concluir que los beneficios de interés nacional de renunciar al requisito de oferta de empleo superan los intereses de proteger a los trabajadores estadounidenses.",
        },
      },
    ],
  },
  costs: {
    uscisFiling: {
      i140: 715,
      i140PremiumProcessing: 2805,
      i485: 1440,
      biometrics: 0,
    },
    legalRange: { min: 6500, max: 12000 },
    translationEstimate: 800,
    medicalExam: 400,
    total: { min: 9855, max: 18160 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["eb-1a", "eb-3", "o-1a"],
  upgradeFrom: ["h-1b", "l-1b", "o-1a", "f-1", "e-2"],
  keywords: {
    pt: [
      "eb-2 niw",
      "eb2 niw brasileiro",
      "green card sem patrocinador",
      "national interest waiver",
      "visto eb2 2026",
      "green card por mérito",
      "eb2 niw processo",
      "green card para engenheiro",
      "green card para médico",
      "green card para cientista",
    ],
    en: [
      "eb-2 niw",
      "national interest waiver",
      "green card without sponsor",
      "eb2 niw brazil",
      "niw visa 2026",
      "self-petition green card",
      "niw for engineers",
      "niw for doctors",
    ],
    es: [
      "eb-2 niw",
      "exención interés nacional",
      "green card sin patrocinador",
      "eb2 niw latinoamericanos",
      "niw 2026",
    ],
  },
  bulletinCategory: "EB2",
  relatedServices: ["eb-2-niw-filing", "rfe-response", "green-card-aos"],
  relatedFaqs: [
    "niw-requires-masters",
    "niw-approval-rate",
    "niw-vs-eb1a",
    "niw-processing-time-2026",
    "niw-bachelor-eligible",
  ],
  relatedCases: ["2025-1847", "2024-2102"],
  relatedTools: [
    "green-card-timeline-estimator",
    "visa-cost-estimator",
    "visa-decision-engine",
  ],
  availableForCountries: "all",
  featuredCountries: ["BR", "AR", "CL", "PT", "CO", "PE"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "BRASIL: SEM FILA ✅",
      en: "BRAZIL: CURRENT ✅",
      es: "BRASIL: VIGENTE ✅",
    },
    stats: [
      {
        value: "8-14",
        label: {
          pt: "meses para aprovação",
          en: "months to approval",
          es: "meses para aprobación",
        },
      },
      {
        value: "90%",
        label: {
          pt: "taxa de aprovação",
          en: "approval rate",
          es: "tasa de aprobación",
        },
      },
      {
        value: "$0",
        label: {
          pt: "patrocinador necessário",
          en: "sponsor needed",
          es: "patrocinador necesario",
        },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// E-2
// ════════════════════════════════════════════════════════════════
const e2: Visa = {
  id: "e-2",
  uscisCode: "E-2",
  subCategory: "Treaty Investor",
  category: "employment-based-temporary",
  classification: "non-immigrant",
  slugs: { pt: "e-2", en: "e-2", es: "e-2" },
  names: {
    pt: {
      short: "E-2",
      full: "Visto E-2 Investidor Tratado",
      formal: "Visto de Não-Imigrante E-2 para Investidor do Tratado",
    },
    en: {
      short: "E-2",
      full: "E-2 Treaty Investor Visa",
      formal: "E-2 Nonimmigrant Treaty Investor Visa",
    },
    es: {
      short: "E-2",
      full: "Visa E-2 Inversionista de Tratado",
      formal: "Visa de No Inmigrante E-2 para Inversionista de Tratado",
    },
  },
  properties: {
    leadsToGreenCard: false,
    requiresEmployer: false,
    requiresJobOffer: false,
    requiresLaborCert: false,
    allowsPremiumProcessing: false,
    hasLottery: false,
    hasCap: false,
    hasBacklog: false,
    maxInitialValidityMonths: 60,
    renewable: true,
    dualIntent: false,
    pathToCitizenship: false,
    citizenshipEligibleYears: null,
  },
  timeline: {
    standardMonths: { min: 3, max: 8 },
    premiumMonths: null,
  },
  eligibility: {
    minEducation: "none",
    preferredEducation:
      "Nenhum grau exigido; plano de negócios e investimento substancial obrigatórios",
    requiresExperience: false,
    minExperienceYears: 0,
    requiresExceptionalAbility: false,
  },
  costs: {
    uscisFiling: { ds160: 185, mrrFee: 100 },
    legalRange: { min: 5000, max: 9000 },
    translationEstimate: 600,
    medicalExam: 0,
    total: { min: 5885, max: 9885 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["l-1a", "eb-5", "o-1a"],
  upgradeFrom: [],
  keywords: {
    pt: [
      "visto e-2",
      "visto investidor eua",
      "e-2 brasileiro cidadania dupla",
      "e-2 brasileiro português",
      "visto empresário eua",
      "abrir empresa eua visto",
      "e2 visa brasil",
      "investir nos eua visto",
    ],
    en: [
      "e-2 visa",
      "treaty investor visa",
      "e-2 for brazilians dual citizenship",
      "e-2 business visa usa",
      "e2 visa requirements",
    ],
    es: [
      "visa e-2",
      "visa inversionista tratado",
      "e-2 para latinoamericanos",
      "visa empresario estados unidos",
    ],
  },
  bulletinCategory: null,
  relatedServices: [
    "e-2-petition",
    "llc-florida-formation",
    "business-plan-drafting",
  ],
  relatedFaqs: [
    "e2-brazil-eligible",
    "e2-minimum-investment",
    "e2-renewal",
    "e2-to-green-card",
  ],
  relatedCases: [],
  relatedTools: [
    "llc-vs-corp-decision-tool",
    "visa-cost-estimator",
    "visa-decision-engine",
  ],
  availableForCountries: [
    "PT",
    "ES",
    "IT",
    "DE",
    "FR",
    "GB",
    "MX",
    "CL",
    "CO",
    "JP",
    "KR",
    "AU",
    "CA",
  ],
  featuredCountries: ["PT", "ES", "IT"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "⚠️ BRASIL: somente via cidadania dupla",
      en: "⚠️ BRAZIL: via dual citizenship only",
      es: "⚠️ BRASIL: solo vía doble ciudadanía",
    },
    stats: [
      { value: "3-8", label: { pt: "meses", en: "months", es: "meses" } },
      {
        value: "5 anos",
        label: { pt: "renovável", en: "renewable", es: "renovable" },
      },
      {
        value: "$100K+",
        label: { pt: "investimento", en: "investment", es: "inversión" },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// L-1A
// ════════════════════════════════════════════════════════════════
const l1a: Visa = {
  id: "l-1a",
  uscisCode: "L-1A",
  subCategory: "Intracompany Transferee Manager/Executive",
  category: "employment-based-temporary",
  classification: "non-immigrant",
  slugs: { pt: "l-1a", en: "l-1a", es: "l-1a" },
  names: {
    pt: {
      short: "L-1A",
      full: "Visto L-1A Transferência Intracompany",
      formal: "Visto de Não-Imigrante L-1A para Gerente ou Executivo",
    },
    en: {
      short: "L-1A",
      full: "L-1A Intracompany Transferee Visa",
      formal:
        "L-1A Nonimmigrant Intracompany Transferee Manager/Executive Visa",
    },
    es: {
      short: "L-1A",
      full: "Visa L-1A Transferencia Intracompañía",
      formal: "Visa de No Inmigrante L-1A para Gerente o Ejecutivo",
    },
  },
  properties: {
    leadsToGreenCard: false,
    requiresEmployer: true,
    requiresJobOffer: true,
    requiresLaborCert: false,
    allowsPremiumProcessing: true,
    hasLottery: false,
    hasCap: false,
    hasBacklog: false,
    maxInitialValidityMonths: 36,
    renewable: true,
    dualIntent: true,
    pathToCitizenship: true,
    citizenshipEligibleYears: 5,
  },
  timeline: {
    standardMonths: { min: 3, max: 8 },
    premiumMonths: { min: 1, max: 2 },
    toGreenCardAOSMonths: { min: 18, max: 36 },
  },
  eligibility: {
    minEducation: "none",
    preferredEducation:
      "Nenhum grau exigido; posição gerencial ou executiva obrigatória. Mínimo 1 ano de trabalho na empresa no exterior nos últimos 3 anos.",
    requiresExperience: true,
    minExperienceYears: 1,
    requiresExceptionalAbility: false,
  },
  costs: {
    uscisFiling: {
      i129: 730,
      i129PremiumProcessing: 2805,
      antifraudFee: 500,
    },
    legalRange: { min: 5500, max: 9500 },
    translationEstimate: 600,
    medicalExam: 0,
    total: { min: 8535, max: 14305 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["e-2", "o-1a", "h-1b"],
  upgradeFrom: ["b-1"],
  keywords: {
    pt: [
      "visto l-1a",
      "transferência intracompany",
      "l1 visa brasil",
      "transferir executivo brasil eua",
      "visto gerente executivo eua",
      "l-1a para brasileiros",
      "empresa brasileira nos eua",
      "l1a green card",
    ],
    en: [
      "l-1a visa",
      "intracompany transferee",
      "l1a manager executive",
      "l-1a for brazilians",
      "l1 visa requirements",
      "eb-1c green card path",
    ],
    es: [
      "visa l-1a",
      "transferencia intracompañía",
      "visa gerente ejecutivo",
      "l1a para latinoamericanos",
    ],
  },
  bulletinCategory: null,
  relatedServices: ["l-1a-petition", "llc-florida-formation"],
  relatedFaqs: ["l1a-requirements", "l1a-to-eb1c", "l1a-new-office"],
  relatedCases: [],
  relatedTools: ["visa-decision-engine", "visa-cost-estimator"],
  availableForCountries: "all",
  featuredCountries: ["BR", "AR", "CL", "MX", "CO"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "CAMINHO AO EB-1C ✅",
      en: "EB-1C GREEN CARD PATH ✅",
      es: "CAMINO AL EB-1C ✅",
    },
    stats: [
      {
        value: "1-2",
        label: {
          pt: "meses c/ premium",
          en: "months w/ premium",
          es: "meses con premium",
        },
      },
      {
        value: "7 anos",
        label: {
          pt: "permanência máxima",
          en: "max stay",
          es: "estadía máxima",
        },
      },
      {
        value: "EB-1C",
        label: {
          pt: "caminho ao green card",
          en: "green card path",
          es: "camino green card",
        },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// EB-1A
// ════════════════════════════════════════════════════════════════
const eb1a: Visa = {
  id: "eb-1a",
  uscisCode: "EB-1A",
  subCategory: "Extraordinary Ability",
  category: "employment-based-permanent",
  classification: "immigrant",
  slugs: { pt: "eb-1a", en: "eb-1a", es: "eb-1a" },
  names: {
    pt: {
      short: "EB-1A",
      full: "EB-1A Habilidade Extraordinária",
      formal:
        "Visto de Imigrante EB-1A para Indivíduo de Habilidade Extraordinária",
    },
    en: {
      short: "EB-1A",
      full: "EB-1A Extraordinary Ability",
      formal: "EB-1A Extraordinary Ability Immigrant Visa",
    },
    es: {
      short: "EB-1A",
      full: "EB-1A Habilidad Extraordinaria",
      formal:
        "Visa de Inmigrante EB-1A para Individuo de Habilidad Extraordinaria",
    },
  },
  properties: {
    leadsToGreenCard: true,
    requiresEmployer: false,
    requiresJobOffer: false,
    requiresLaborCert: false,
    allowsPremiumProcessing: true,
    hasLottery: false,
    hasCap: true,
    hasBacklog: false,
    maxInitialValidityMonths: null,
    renewable: null,
    dualIntent: true,
    pathToCitizenship: true,
    citizenshipEligibleYears: 5,
  },
  timeline: {
    standardMonths: { min: 6, max: 12 },
    premiumMonths: { min: 2, max: 4 },
    toGreenCardConsularMonths: { min: 4, max: 8 },
    toGreenCardAOSMonths: { min: 8, max: 18 },
  },
  eligibility: {
    minEducation: "none",
    preferredEducation:
      "Sem requisito mínimo — baseado em evidências de habilidade extraordinária no campo. Mínimo 3 de 10 critérios USCIS exigidos.",
    requiresExperience: false,
    minExperienceYears: 0,
    requiresExceptionalAbility: true,
  },
  costs: {
    uscisFiling: {
      i140: 715,
      i140PremiumProcessing: 2805,
      i485: 1440,
      biometrics: 0,
    },
    legalRange: { min: 8000, max: 15000 },
    translationEstimate: 1000,
    medicalExam: 400,
    total: { min: 12255, max: 22045 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["eb-2-niw", "o-1a"],
  upgradeFrom: ["o-1a", "h-1b"],
  keywords: {
    pt: [
      "eb-1a",
      "habilidade extraordinária",
      "green card artista",
      "green card atleta",
      "green card cientista famoso",
      "eb1a para brasileiros",
      "eb-1a prêmio",
      "eb1a aprovação",
    ],
    en: [
      "eb-1a",
      "extraordinary ability",
      "green card without employer",
      "eb1a for artists",
      "eb1a for scientists",
      "eb1a brazil",
    ],
    es: [
      "eb-1a",
      "habilidad extraordinaria",
      "green card sin empleador",
      "eb1a para artistas",
      "eb1a latinoamerica",
    ],
  },
  bulletinCategory: "EB1",
  relatedServices: ["eb-1a-petition", "rfe-response"],
  relatedFaqs: ["eb1a-vs-niw", "eb1a-criteria", "eb1a-approval-rate"],
  relatedCases: [],
  relatedTools: ["visa-decision-engine", "visa-cost-estimator"],
  availableForCountries: "all",
  featuredCountries: ["BR", "AR", "CO", "MX"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "SEM EMPREGADOR · SEM FILA ✅",
      en: "NO EMPLOYER · NO BACKLOG ✅",
      es: "SIN EMPLEADOR · SIN ESPERA ✅",
    },
    stats: [
      { value: "6-12", label: { pt: "meses", en: "months", es: "meses" } },
      {
        value: "10",
        label: {
          pt: "critérios USCIS",
          en: "USCIS criteria",
          es: "criterios USCIS",
        },
      },
      {
        value: "3+",
        label: {
          pt: "critérios mínimos",
          en: "criteria required",
          es: "criterios mínimos",
        },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// EB-5
// ════════════════════════════════════════════════════════════════
const eb5: Visa = {
  id: "eb-5",
  uscisCode: "EB-5",
  subCategory: "Immigrant Investor Program",
  category: "investment-based",
  classification: "immigrant",
  slugs: { pt: "eb-5", en: "eb-5", es: "eb-5" },
  names: {
    pt: {
      short: "EB-5",
      full: "EB-5 Investidor Imigrante",
      formal: "Visto de Imigrante EB-5 para Investidor",
    },
    en: {
      short: "EB-5",
      full: "EB-5 Immigrant Investor",
      formal: "EB-5 Immigrant Investor Program Visa",
    },
    es: {
      short: "EB-5",
      full: "EB-5 Inversionista Inmigrante",
      formal: "Visa de Inmigrante EB-5 para Inversionista",
    },
  },
  properties: {
    leadsToGreenCard: true,
    requiresEmployer: false,
    requiresJobOffer: false,
    requiresLaborCert: false,
    allowsPremiumProcessing: false,
    hasLottery: false,
    hasCap: true,
    hasBacklog: false,
    maxInitialValidityMonths: null,
    renewable: null,
    dualIntent: true,
    pathToCitizenship: true,
    citizenshipEligibleYears: 5,
  },
  timeline: {
    standardMonths: { min: 24, max: 60 },
    premiumMonths: null,
    toGreenCardConsularMonths: { min: 6, max: 12 },
    toGreenCardAOSMonths: { min: 12, max: 24 },
  },
  eligibility: {
    minEducation: "none",
    preferredEducation:
      "Nenhum requisito educacional. Comprova-se origem lícita dos fundos de investimento.",
    requiresExperience: false,
    minExperienceYears: 0,
    requiresExceptionalAbility: false,
  },
  costs: {
    uscisFiling: { i526e: 11160, i829: 9525, i485: 1440, biometrics: 0 },
    legalRange: { min: 15000, max: 30000 },
    translationEstimate: 1500,
    medicalExam: 400,
    total: { min: 39025, max: 54025 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["eb-2-niw", "e-2", "l-1a"],
  upgradeFrom: ["e-2", "l-1a"],
  keywords: {
    pt: [
      "eb-5",
      "green card por investimento",
      "visto investidor eb5",
      "eb5 rural tea",
      "eb5 800 mil dólares",
      "green card milionário brasil",
      "eb5 sem fila brasil",
      "eb5 2026 brasileiro",
    ],
    en: [
      "eb-5",
      "immigrant investor visa",
      "eb5 investment amount",
      "eb5 rural tea",
      "eb5 no backlog brazil",
      "eb5 800000",
    ],
    es: [
      "eb-5",
      "visa inversionista inmigrante",
      "eb5 inversión green card",
      "eb5 sin lista espera brasil",
    ],
  },
  bulletinCategory: "EB5",
  relatedServices: [
    "eb-5-petition",
    "business-plan-drafting",
    "llc-florida-formation",
  ],
  relatedFaqs: [
    "eb5-minimum-investment-2026",
    "eb5-rural-advantage",
    "eb5-brazil-current",
  ],
  relatedCases: [],
  relatedTools: [
    "eb5-investment-calculator",
    "visa-cost-estimator",
    "visa-decision-engine",
  ],
  availableForCountries: "all",
  featuredCountries: ["BR", "AR", "CO", "PE", "VE"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "BRASIL: SEM FILA ✅",
      en: "BRAZIL: CURRENT ✅",
      es: "BRASIL: VIGENTE ✅",
    },
    stats: [
      {
        value: "$800K",
        label: {
          pt: "investimento TEA rural",
          en: "rural TEA investment",
          es: "inversión TEA rural",
        },
      },
      { value: "24-60", label: { pt: "meses", en: "months", es: "meses" } },
      {
        value: "10",
        label: {
          pt: "empregos criados",
          en: "jobs created",
          es: "empleos creados",
        },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// K-1
// ════════════════════════════════════════════════════════════════
const k1: Visa = {
  id: "k-1",
  uscisCode: "K-1",
  subCategory: "Fiancé(e) of US Citizen",
  category: "family-based-temporary",
  classification: "non-immigrant",
  slugs: { pt: "k-1", en: "k-1", es: "k-1" },
  names: {
    pt: {
      short: "K-1",
      full: "Visto K-1 Noivo(a) de Cidadão Americano",
      formal: "Visto de Não-Imigrante K-1 para Noivo(a) de Cidadão dos EUA",
    },
    en: {
      short: "K-1",
      full: "K-1 Fiancé Visa",
      formal: "K-1 Nonimmigrant Fiancé(e) of US Citizen Visa",
    },
    es: {
      short: "K-1",
      full: "Visa K-1 Prometido(a) de Ciudadano Americano",
      formal:
        "Visa de No Inmigrante K-1 para Prometido(a) de Ciudadano de EE.UU.",
    },
  },
  properties: {
    leadsToGreenCard: true,
    requiresEmployer: false,
    requiresJobOffer: false,
    requiresLaborCert: false,
    allowsPremiumProcessing: false,
    hasLottery: false,
    hasCap: false,
    hasBacklog: false,
    maxInitialValidityMonths: 6,
    renewable: false,
    dualIntent: true,
    pathToCitizenship: true,
    citizenshipEligibleYears: 3,
  },
  timeline: {
    standardMonths: { min: 8, max: 16 },
    premiumMonths: null,
    toGreenCardAOSMonths: { min: 10, max: 20 },
  },
  eligibility: {
    minEducation: "none",
    preferredEducation:
      "Nenhum requisito educacional. Cidadão americano e noivo(a) devem ter se encontrado pessoalmente nos últimos 2 anos.",
    requiresExperience: false,
    minExperienceYears: 0,
    requiresExceptionalAbility: false,
  },
  costs: {
    uscisFiling: { i129f: 675, ds160: 265, i485: 1440, biometrics: 0 },
    legalRange: { min: 3500, max: 7000 },
    translationEstimate: 800,
    medicalExam: 400,
    total: { min: 6880, max: 13705 },
    currency: "USD",
    lastUpdated: "2026-04-20",
  },
  alternatives: ["cr-1"],
  upgradeFrom: [],
  keywords: {
    pt: [
      "k-1",
      "visto noivo americano",
      "k1 visa brasil",
      "visto namorado cidadão americano",
      "casar com americano visto",
      "k-1 para brasileiras",
      "visto para casar nos eua",
      "visto k1 2026 brasil",
    ],
    en: [
      "k-1 visa",
      "fiance visa",
      "k1 visa brazil",
      "fiance visa us citizen",
      "k-1 requirements 2026",
    ],
    es: [
      "visa k-1",
      "visa prometido ciudadano americano",
      "k1 visa brasil",
      "casarse con americano visa",
    ],
  },
  bulletinCategory: null,
  relatedServices: ["k-1-petition", "i-485-adjustment", "i-130-petition"],
  relatedFaqs: ["k1-process-time", "k1-90-day-rule", "k1-vs-cr1", "k1-requirements"],
  relatedCases: [],
  relatedTools: [
    "visa-decision-engine",
    "visa-cost-estimator",
    "green-card-timeline-estimator",
  ],
  availableForCountries: "all",
  featuredCountries: ["BR", "CO", "PE", "AR", "MX"],
  primaryAuthor: "izi-pinho",
  lastReviewedBy: "izi-pinho",
  lastReviewedAt: "2026-04-20",
  hero: {
    badgeText: {
      pt: "BRASIL: SEM FILA ✅",
      en: "BRAZIL: CURRENT ✅",
      es: "BRASIL: VIGENTE ✅",
    },
    stats: [
      { value: "8-16", label: { pt: "meses", en: "months", es: "meses" } },
      {
        value: "90",
        label: {
          pt: "dias para casar",
          en: "days to marry",
          es: "días para casarse",
        },
      },
      {
        value: "3 anos",
        label: {
          pt: "para cidadania",
          en: "to citizenship",
          es: "para ciudadanía",
        },
      },
    ],
  },
};

// ════════════════════════════════════════════════════════════════
// Registry + helpers
// ════════════════════════════════════════════════════════════════
export const VISAS: Record<string, Visa> = {
  "eb-2-niw": eb2niw,
  "e-2": e2,
  "l-1a": l1a,
  "eb-1a": eb1a,
  "eb-5": eb5,
  "k-1": k1,
};

export const getVisa = (id: string): Visa | undefined => VISAS[id];
export const getAllVisaIds = (): string[] => Object.keys(VISAS);
export const getImmigrantVisas = () =>
  Object.values(VISAS).filter((v) => v.classification === "immigrant");
export const getNonImmigrantVisas = () =>
  Object.values(VISAS).filter((v) => v.classification === "non-immigrant");
export const getVisasForCountry = (iso2: string) =>
  Object.values(VISAS).filter(
    (v) =>
      v.availableForCountries === "all" ||
      (v.availableForCountries as string[]).includes(iso2),
  );
