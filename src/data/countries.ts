// Programmatic country data layer — source of truth for country-
// specific visa context, demonym forms, Visa Bulletin row mapping,
// consular wait times, and document notes.

import type { Country } from "@/types/data";

const BR: Country = {
  iso2: "BR",
  iso3: "BRA",
  names: { pt: "Brasil", en: "Brazil", es: "Brasil" },
  demonym: {
    singular: { pt: "brasileiro", en: "Brazilian", es: "brasileño" },
    plural: { pt: "brasileiros", en: "Brazilians", es: "brasileños" },
    feminine: { pt: "brasileira", en: "Brazilian", es: "brasileña" },
  },
  priority: 1,
  primaryLanguage: "pt",
  populationInFlorida: 340_000,
  populationInUS: 1_900_000,
  treaties: {
    eVisa: false,
    visaWaiver: false,
    taxTreaty: false,
    totalization: false,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: [
    "Brasília",
    "Rio de Janeiro",
    "São Paulo",
    "Recife",
    "Porto Alegre",
  ],
  typicalConsularWaitMonths: { min: 3, max: 8 },
  documentNotes: {
    pt: "Documentos brasileiros precisam de Apostila de Haia (Convenção de 1961). Certidões de nascimento, casamento e antecedentes criminais devem ser apostiladas antes da tradução juramentada para inglês.",
    en: "Brazilian documents require a Hague Apostille (1961 Convention). Birth, marriage, and criminal record certificates must be apostilled before certified English translation.",
    es: "Los documentos brasileños requieren Apostilla de La Haya (Convención de 1961) antes de la traducción certificada al inglés.",
  },
  translationRequirement: "certified-english",
  currency: "BRL",
  visaContext: {
    "eb-2-niw": {
      priorityDate: "current",
      specialNote: {
        pt: 'Brasileiros estão na categoria "All Chargeability Areas" — sem fila há mais de 5 anos consecutivos. Momento histórico para aplicar: aprovação em 8-14 meses com premium processing.',
        en: 'Brazilians fall under "All Chargeability Areas" — no backlog for 5+ consecutive years. Historic window: approvals in 8-14 months with premium processing.',
        es: 'Los brasileños están bajo "All Chargeability Areas" — sin lista de espera por más de 5 años consecutivos.',
      },
      commonUseCases: {
        pt: "Engenheiros de software, Médicos e especialistas, Cientistas e pesquisadores, Empreendedores com impacto nacional, Profissionais de IA e tecnologia",
      },
    },
    "e-2": {
      priorityDate: null,
      specialNote: {
        pt: "Brasil NÃO é país-tratado E-2. Brasileiros com dupla cidadania italiana, portuguesa, espanhola, alemã ou francesa podem qualificar via cidadania europeia. Dra. Izi é especialista nesta estratégia de dupla cidadania.",
        en: "Brazil is NOT an E-2 treaty country. Brazilians with dual Italian, Portuguese, Spanish, German, or French citizenship may qualify via EU citizenship. Dr. Izi specializes in this dual-citizenship strategy.",
      },
      dualCitizenshipStrategy: true,
    },
    "eb-5": {
      priorityDate: "current",
      specialNote: {
        pt: "Brasil está CURRENT no EB-5 — sem fila. Investimento mínimo de $800.000 em TEA rural ou $1.050.000 em área não-TEA. Janela histórica: green card em 14-18 meses via TEA rural.",
        en: "Brazil is CURRENT for EB-5 — no backlog. Minimum $800,000 in rural TEA or $1,050,000 non-TEA. Historic window: green card in 14-18 months via rural TEA.",
      },
      ruralTEA: { threshold: 800_000, currency: "USD" },
    },
    "k-1": {
      priorityDate: "current",
      specialNote: {
        pt: "Sem fila para brasileiros. Processos costumam ser aprovados no consulado de São Paulo. Cidadão americano deve provar que se encontrou com o(a) noivo(a) nos últimos 2 anos.",
        en: "No backlog for Brazilians. Cases typically processed at São Paulo consulate. US citizen must prove they met the fiancé(e) in person within the past 2 years.",
      },
    },
    "l-1a": {
      priorityDate: "current",
      specialNote: {
        pt: "L-1A não exige país-tratado. Qualquer empresa brasileira com subsidiária nos EUA pode transferir gerentes ou executivos. Mínimo 1 ano de trabalho na empresa brasileira.",
        en: "L-1A has no treaty country requirement. Any Brazilian company with a US subsidiary can transfer managers or executives. Minimum 1 year employment with the Brazilian company.",
      },
    },
    "eb-1a": {
      priorityDate: "current",
      specialNote: {
        pt: "Sem fila para brasileiros. Alto padrão de evidências — mínimo 3 de 10 critérios USCIS. Prêmios internacionais, publicações, salário alto e cobertura de mídia são evidências comuns.",
        en: "No backlog for Brazilians. High evidence standard — minimum 3 of 10 USCIS criteria. International awards, publications, high salary, and media coverage are common evidence types.",
      },
    },
  },
};

const AR: Country = {
  iso2: "AR",
  iso3: "ARG",
  names: { pt: "Argentina", en: "Argentina", es: "Argentina" },
  demonym: {
    singular: { pt: "argentino", en: "Argentinian", es: "argentino" },
    plural: { pt: "argentinos", en: "Argentinians", es: "argentinos" },
    feminine: { pt: "argentina", en: "Argentinian", es: "argentina" },
  },
  priority: 2,
  primaryLanguage: "es",
  populationInFlorida: 85_000,
  populationInUS: 280_000,
  treaties: {
    eVisa: false,
    visaWaiver: false,
    taxTreaty: false,
    totalization: false,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: ["Buenos Aires"],
  typicalConsularWaitMonths: { min: 4, max: 10 },
  documentNotes: {
    es: "Los documentos argentinos requieren Apostilla de La Haya antes de la traducción certificada al inglés.",
    en: "Argentine documents require Hague Apostille before certified English translation.",
  },
  translationRequirement: "certified-english",
  currency: "ARS",
  visaContext: {
    "eb-2-niw": {
      priorityDate: "current",
      specialNote: {
        es: "Argentina está bajo All Chargeability — sin lista de espera actual.",
      },
    },
    "e-2": {
      priorityDate: null,
      specialNote: {
        es: "Argentina NO es país tratado E-2. Estrategia de doble ciudadanía italiana o española puede aplicar.",
      },
      dualCitizenshipStrategy: true,
    },
    "eb-5": {
      priorityDate: "current",
      specialNote: {
        es: "Argentina está CURRENT para EB-5 — sin lista de espera.",
      },
    },
    "k-1": { priorityDate: "current" },
  },
};

const PT_COUNTRY: Country = {
  iso2: "PT",
  iso3: "PRT",
  names: { pt: "Portugal", en: "Portugal", es: "Portugal" },
  demonym: {
    singular: { pt: "português", en: "Portuguese", es: "portugués" },
    plural: { pt: "portugueses", en: "Portuguese", es: "portugueses" },
    feminine: { pt: "portuguesa", en: "Portuguese", es: "portuguesa" },
  },
  priority: 2,
  primaryLanguage: "pt",
  populationInFlorida: 25_000,
  populationInUS: 140_000,
  treaties: {
    eVisa: true,
    visaWaiver: true,
    taxTreaty: false,
    totalization: true,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: ["Lisboa", "Porto"],
  typicalConsularWaitMonths: { min: 2, max: 5 },
  documentNotes: {
    pt: "Documentos portugueses são aceitos com apostila; para uso nos EUA, certidões portuguesas devem ser apostiladas pelo Tribunal de Comarca competente.",
    en: "Portuguese documents are apostille-eligible; for US use, Portuguese certificates must be apostilled by the competent District Court.",
  },
  translationRequirement: "certified-english",
  currency: "EUR",
  visaContext: {
    "e-2": {
      priorityDate: "current",
      specialNote: {
        pt: "Portugal É país-tratado E-2! Brasileiros com cidadania portuguesa (por ascendência, casamento ou naturalização) podem aplicar diretamente para E-2 — uma das rotas mais rápidas para empreendedores brasileiros.",
        en: "Portugal IS an E-2 treaty country. Brazilians with Portuguese citizenship (by descent, marriage, or naturalization) can apply directly for E-2 — one of the fastest routes for Brazilian entrepreneurs.",
      },
    },
    "eb-2-niw": {
      priorityDate: "current",
      specialNote: {
        pt: "Portugueses também estão em All Chargeability — sem fila.",
        en: "Portuguese nationals also fall under All Chargeability — no backlog.",
      },
    },
  },
};

const CL: Country = {
  iso2: "CL",
  iso3: "CHL",
  names: { pt: "Chile", en: "Chile", es: "Chile" },
  demonym: {
    singular: { pt: "chileno", en: "Chilean", es: "chileno" },
    plural: { pt: "chilenos", en: "Chileans", es: "chilenos" },
    feminine: { pt: "chilena", en: "Chilean", es: "chilena" },
  },
  priority: 2,
  primaryLanguage: "es",
  populationInFlorida: 15_000,
  populationInUS: 130_000,
  treaties: {
    eVisa: false,
    visaWaiver: false,
    taxTreaty: false,
    totalization: false,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: ["Santiago"],
  typicalConsularWaitMonths: { min: 3, max: 7 },
  documentNotes: {
    es: "Documentos chilenos requieren Apostilla de La Haya para uso en EE.UU.",
  },
  translationRequirement: "certified-english",
  currency: "CLP",
  visaContext: {
    "eb-2-niw": {
      priorityDate: "current",
      specialNote: {
        es: "Chile bajo All Chargeability — sin lista de espera.",
      },
    },
  },
};

const CO: Country = {
  iso2: "CO",
  iso3: "COL",
  names: { pt: "Colômbia", en: "Colombia", es: "Colombia" },
  demonym: {
    singular: { pt: "colombiano", en: "Colombian", es: "colombiano" },
    plural: { pt: "colombianos", en: "Colombians", es: "colombianos" },
    feminine: { pt: "colombiana", en: "Colombian", es: "colombiana" },
  },
  priority: 2,
  primaryLanguage: "es",
  populationInFlorida: 125_000,
  populationInUS: 1_100_000,
  treaties: {
    eVisa: false,
    visaWaiver: false,
    taxTreaty: false,
    totalization: false,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: ["Bogotá", "Medellín", "Barranquilla"],
  typicalConsularWaitMonths: { min: 3, max: 8 },
  documentNotes: {
    es: "Documentos colombianos requieren Apostilla de La Haya para uso en EE.UU.",
  },
  translationRequirement: "certified-english",
  currency: "COP",
  visaContext: {
    "k-1": {
      priorityDate: "current",
      specialNote: {
        es: "Colombia sin lista de espera para K-1. Casos procesados en Bogotá.",
      },
    },
    "eb-2-niw": { priorityDate: "current" },
    "eb-5": { priorityDate: "current" },
  },
};

const ES: Country = {
  iso2: "ES",
  iso3: "ESP",
  names: { pt: "Espanha", en: "Spain", es: "España" },
  demonym: {
    singular: { pt: "espanhol", en: "Spanish", es: "español" },
    plural: { pt: "espanhóis", en: "Spanish", es: "españoles" },
    feminine: { pt: "espanhola", en: "Spanish", es: "española" },
  },
  priority: 2,
  primaryLanguage: "es",
  populationInFlorida: 40_000,
  populationInUS: 800_000,
  treaties: {
    eVisa: true,
    visaWaiver: true,
    taxTreaty: false,
    totalization: true,
  },
  visaBulletinDates: {
    bulletinRowName: "All Chargeability Areas Except Those Listed",
  },
  embassyLocations: ["Madrid", "Barcelona"],
  typicalConsularWaitMonths: { min: 2, max: 5 },
  documentNotes: {
    es: "Documentos españoles son apostillables por el Ministerio de Justicia o notario competente.",
    pt: "Documentos espanhóis podem ser apostilados pelo Ministério da Justiça espanhol.",
  },
  translationRequirement: "certified-english",
  currency: "EUR",
  visaContext: {
    "e-2": {
      priorityDate: "current",
      specialNote: {
        es: "España es país tratado E-2. Latinoamericanos con ciudadanía española califican directamente sin necesidad de doble ciudadanía adicional.",
        pt: "Espanha é país-tratado E-2. Latino-americanos com cidadania espanhola qualificam diretamente.",
      },
    },
    "eb-2-niw": { priorityDate: "current" },
  },
};

export const COUNTRIES: Record<string, Country> = {
  BR,
  AR,
  PT: PT_COUNTRY,
  CL,
  CO,
  ES,
};

export const getCountry = (iso2: string) => COUNTRIES[iso2];
export const getAllCountryCodes = () => Object.keys(COUNTRIES);
export const getTierOneCountries = () =>
  Object.values(COUNTRIES).filter((c) => c.priority === 1);
export const getE2TreatyCountries = () =>
  Object.values(COUNTRIES).filter((c) => c.treaties.eVisa);
