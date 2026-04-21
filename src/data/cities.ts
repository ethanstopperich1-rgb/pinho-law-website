// Florida cities — hyperlocal data for programmatic city routes.
// Distances + drive times calibrated from Pinho Law office at
// 6965 Piazza Grande Ave (Orlando Metrowest / Dr. Phillips area).

import type { City } from "@/types/data";

const orlando: City = {
  slug: "orlando",
  name: "Orlando",
  county: "Orange",
  state: "FL",
  isOfficeLocation: true,
  demographics: {
    brazilianPopulation: 95_000,
    brazilianPercentage: 29.7,
  },
  location: { distanceFromOfficeMiles: 0, driveTimeFromOfficeMinutes: 0 },
  content: {
    intro: {
      pt: "Orlando é o coração da comunidade brasileira na Flórida Central — aproximadamente 95 mil brasileiros vivem entre Metrowest, Dr. Phillips e o corredor da I-4, formando o ecossistema que atendemos diariamente na nossa sede. A Pinho Law está localizada a 5 minutos do corredor brasileiro de Metrowest e recebe clientes presencialmente em nosso escritório em Piazza Grande, além de consultas por Zoom em português para quem está em qualquer lugar do mundo.",
      en: "Orlando is the heart of Central Florida's Brazilian community — roughly 95,000 Brazilians live across Metrowest, Dr. Phillips, and the I-4 corridor, forming the ecosystem we serve daily from our headquarters. Pinho Law sits 5 minutes from the Metrowest Brazilian corridor and welcomes walk-in consultations in our Piazza Grande office, plus Zoom consultations in Portuguese for clients anywhere in the world.",
      es: "Orlando es el corazón de la comunidad brasileña en Florida Central — cerca de 95.000 brasileños viven entre Metrowest, Dr. Phillips y el corredor I-4. Pinho Law recibe consultas presenciales en nuestra oficina Piazza Grande y por Zoom para clientes en cualquier lugar.",
    },
  },
};

const kissimmee: City = {
  slug: "kissimmee",
  name: "Kissimmee",
  county: "Osceola",
  state: "FL",
  demographics: { brazilianPopulation: 45_000, brazilianPercentage: 18.2 },
  location: { distanceFromOfficeMiles: 18, driveTimeFromOfficeMinutes: 25 },
  content: {
    intro: {
      pt: "Kissimmee concentra aproximadamente 45 mil brasileiros ao longo do corredor turístico da 192 — a maior densidade de famílias brasileiras do Osceola County, muitas ligadas aos setores de hospitalidade e gestão de aluguéis de temporada. Atendemos clientes de Kissimmee com consultas em Zoom ou presencialmente no nosso escritório em Orlando (25 minutos de carro), com suporte em português para questões de imigração, abertura de LLC e compra de imóveis de investimento.",
      en: "Kissimmee has roughly 45,000 Brazilians clustered along the Highway 192 tourist corridor — the highest Brazilian family density in Osceola County, many tied to hospitality and short-term rental management. We serve Kissimmee clients via Zoom or in person at our Orlando office (25 minutes by car), with Portuguese-language support for immigration, LLC formation, and investment-property purchases.",
      es: "Kissimmee tiene cerca de 45.000 brasileños en el corredor turístico de la 192, muchos en hospitalidad y alquileres vacacionales. Atendemos por Zoom o en nuestra oficina de Orlando (25 minutos).",
    },
  },
};

const davenport: City = {
  slug: "davenport",
  name: "Davenport",
  county: "Polk",
  state: "FL",
  demographics: { brazilianPopulation: 22_000 },
  location: { distanceFromOfficeMiles: 28, driveTimeFromOfficeMinutes: 35 },
  content: {
    intro: {
      pt: "Davenport virou imã para famílias brasileiras nos últimos 5 anos — o crescimento dos condomínios Champions Gate e Solterra trouxe ~22 mil brasileiros para Polk County, muitos comprando para morar + alugar como vacation rental. Atendemos brasileiros de Davenport com planejamento LLC + FIRPTA, sucessão para não-residentes e visto para pais que querem apoiar a operação imobiliária.",
      en: "Davenport has become a magnet for Brazilian families in the past 5 years — the growth of ChampionsGate and Solterra communities has brought ~22,000 Brazilians to Polk County, many buying homes to live in and rent as vacation rentals. We serve Davenport clients with LLC + FIRPTA planning, non-resident estate structuring, and visas for parents who want to support the real estate operation.",
      es: "Davenport se volvió imán para familias brasileñas — ChampionsGate y Solterra suman ~22.000 brasileños en Polk County, muchos comprando para vivir y alquilar como vacation rental.",
    },
  },
};

const pompanoBeach: City = {
  slug: "pompano-beach",
  name: "Pompano Beach",
  county: "Broward",
  state: "FL",
  demographics: { brazilianPopulation: 35_000 },
  location: { distanceFromOfficeMiles: 210, driveTimeFromOfficeMinutes: 145 },
  content: {
    intro: {
      pt: 'Pompano Beach é conhecida como "Little Brazil" da Flórida — aproximadamente 35 mil brasileiros, com quarteirões inteiros de comércio, padarias, salões e igrejas em português no corredor da Federal Highway. Atendemos clientes de Pompano Beach por Zoom em português, com expertise em casos de green card via casamento, NIW para profissionais da construção e estruturação patrimonial para quem opera pequenos negócios.',
      en: 'Pompano Beach is known as Florida\'s "Little Brazil" — roughly 35,000 Brazilians, with entire blocks of Portuguese-speaking commerce, bakeries, salons, and churches along the Federal Highway corridor. We serve Pompano Beach clients by Zoom in Portuguese, with expertise in marriage-based green cards, NIW for construction professionals, and estate structuring for small-business owners.',
      es: 'Pompano Beach es conocida como la "Little Brazil" de Florida — cerca de 35.000 brasileños a lo largo del corredor de Federal Highway.',
    },
  },
};

const deerfieldBeach: City = {
  slug: "deerfield-beach",
  name: "Deerfield Beach",
  county: "Broward",
  state: "FL",
  demographics: { brazilianPopulation: 28_000 },
  location: { distanceFromOfficeMiles: 215, driveTimeFromOfficeMinutes: 150 },
  content: {
    intro: {
      pt: "Deerfield Beach faz parte do cinturão brasileiro do sul da Flórida — ~28 mil brasileiros, muitos profissionais liberais que trabalham em Boca Raton e Fort Lauderdale mas escolheram morar aqui. Atendemos clientes de Deerfield Beach via Zoom com foco em EB-2 NIW para profissionais qualificados, visto de trabalho e transição de status para cônjuges de americanos.",
      en: "Deerfield Beach sits in South Florida's Brazilian belt — roughly 28,000 Brazilians, many white-collar professionals who work in Boca Raton and Fort Lauderdale but chose to live here. We serve Deerfield Beach clients via Zoom with a focus on EB-2 NIW for qualified professionals, work visas, and status adjustment for spouses of US citizens.",
      es: "Deerfield Beach forma parte del cinturón brasileño del sur de Florida — cerca de 28.000 brasileños, muchos profesionales que trabajan en Boca Raton y Fort Lauderdale.",
    },
  },
};

const miami: City = {
  slug: "miami",
  name: "Miami",
  county: "Miami-Dade",
  state: "FL",
  demographics: { brazilianPopulation: 85_000 },
  location: { distanceFromOfficeMiles: 240, driveTimeFromOfficeMinutes: 165 },
  content: {
    intro: {
      pt: "Miami concentra ~85 mil brasileiros, a maior comunidade brasileira do sul da Flórida — empresários, investidores e artistas que escolheram Miami como porta de entrada nos EUA. Atendemos clientes de Miami via Zoom em português com especialização em E-2 via dupla cidadania (italiana, portuguesa, espanhola), EB-5 para investidores e estruturação LLC + trust para proteção patrimonial.",
      en: "Miami houses ~85,000 Brazilians — the largest Brazilian community in South Florida, made up of entrepreneurs, investors, and artists who chose Miami as their US gateway. We serve Miami clients via Zoom in Portuguese with specialized expertise in E-2 via dual citizenship (Italian, Portuguese, Spanish), EB-5 for investors, and LLC + trust structuring for asset protection.",
      es: "Miami concentra ~85.000 brasileños — la mayor comunidad brasileña del sur de Florida, principalmente empresarios, inversionistas y artistas.",
    },
  },
};

const bocaRaton: City = {
  slug: "boca-raton",
  name: "Boca Raton",
  county: "Palm Beach",
  state: "FL",
  demographics: { brazilianPopulation: 18_000 },
  location: { distanceFromOfficeMiles: 195, driveTimeFromOfficeMinutes: 135 },
  content: {
    intro: {
      pt: "Boca Raton é endereço de famílias brasileiras de renda mais alta — ~18 mil brasileiros, muitos vindos de São Paulo e Rio com perfil executivo ou profissional sênior. Para clientes de Boca Raton oferecemos consultas por Zoom focadas em EB-1A, EB-2 NIW com dossiê de publicações, planejamento sucessório pré-imigratório e compra de imóvel via LLC com análise FIRPTA detalhada.",
      en: "Boca Raton is home to higher-income Brazilian families — roughly 18,000 Brazilians, many relocating from São Paulo and Rio in executive or senior-professional roles. For Boca Raton clients we offer Zoom consultations focused on EB-1A, EB-2 NIW with publication-heavy portfolios, pre-immigration estate planning, and LLC-held real estate purchases with detailed FIRPTA analysis.",
      es: "Boca Raton alberga familias brasileñas de mayor ingreso — cerca de 18.000 brasileños, muchos de perfil ejecutivo.",
    },
  },
};

const fortLauderdale: City = {
  slug: "fort-lauderdale",
  name: "Fort Lauderdale",
  county: "Broward",
  state: "FL",
  demographics: { brazilianPopulation: 30_000 },
  location: { distanceFromOfficeMiles: 205, driveTimeFromOfficeMinutes: 140 },
  content: {
    intro: {
      pt: "Fort Lauderdale tem ~30 mil brasileiros, muitos ligados ao setor marítimo do Port Everglades — tripulação de iates, gerentes de marinas, profissionais de hospitality. Atendemos clientes de Fort Lauderdale por Zoom com foco em vistos de trabalho temporário, L-1 para empresas brasileiras abrindo filial americana e estruturação para quem opera charter e gestão de propriedades.",
      en: "Fort Lauderdale has roughly 30,000 Brazilians, many connected to the Port Everglades maritime sector — yacht crews, marina managers, hospitality professionals. We serve Fort Lauderdale clients via Zoom with a focus on temporary work visas, L-1 for Brazilian companies opening US subsidiaries, and structuring for charter operators and property managers.",
      es: "Fort Lauderdale suma ~30.000 brasileños, muchos vinculados al sector marítimo de Port Everglades.",
    },
  },
};

const tampa: City = {
  slug: "tampa",
  name: "Tampa",
  county: "Hillsborough",
  state: "FL",
  demographics: { brazilianPopulation: 40_000 },
  location: { distanceFromOfficeMiles: 85, driveTimeFromOfficeMinutes: 75 },
  content: {
    intro: {
      pt: "Tampa cresceu dramaticamente como destino brasileiro — ~40 mil brasileiros, com a cena tech de Tampa Bay atraindo engenheiros e fundadores e Ybor City historicamente servindo de porta de entrada latino-americana. Atendemos clientes de Tampa por Zoom em português com especialização em EB-2 NIW para profissionais de tech, O-1 para talentos criativos e abertura de LLC para freelancers e consultores.",
      en: "Tampa has exploded as a Brazilian destination — roughly 40,000 Brazilians, with the Tampa Bay tech scene drawing engineers and founders, and historic Ybor City serving as a long-standing Latin American gateway. We serve Tampa clients via Zoom in Portuguese with expertise in EB-2 NIW for tech professionals, O-1 for creative talent, and LLC formation for freelancers and consultants.",
      es: "Tampa crece rápido como destino brasileño — ~40.000 brasileños, con la escena tech de Tampa Bay atrayendo ingenieros y fundadores.",
    },
  },
};

const jacksonville: City = {
  slug: "jacksonville",
  name: "Jacksonville",
  county: "Duval",
  state: "FL",
  demographics: { brazilianPopulation: 15_000 },
  location: { distanceFromOfficeMiles: 145, driveTimeFromOfficeMinutes: 130 },
  content: {
    intro: {
      pt: "Jacksonville tem ~15 mil brasileiros e é uma das cidades de crescimento mais rápido da Flórida — com presença forte da base naval e porto comercial, atrai famílias brasileiras interessadas em custo de vida mais baixo que Orlando. Atendemos clientes de Jacksonville por Zoom com foco em vistos de trabalho para cônjuges de militares americanos, EB-2 NIW e ajuste de status para quem já está nos EUA.",
      en: "Jacksonville has roughly 15,000 Brazilians and is one of Florida's fastest-growing cities — with a strong naval base and commercial port footprint, it attracts Brazilian families looking for a lower cost of living than Orlando. We serve Jacksonville clients via Zoom with a focus on work visas for spouses of US military, EB-2 NIW, and adjustment of status for those already in the US.",
      es: "Jacksonville tiene ~15.000 brasileños, una de las ciudades de crecimiento más rápido de Florida.",
    },
  },
};

const capeCoral: City = {
  slug: "cape-coral",
  name: "Cape Coral",
  county: "Lee",
  state: "FL",
  demographics: { brazilianPopulation: 12_000 },
  location: { distanceFromOfficeMiles: 150, driveTimeFromOfficeMinutes: 125 },
  content: {
    intro: {
      pt: "Cape Coral reúne ~12 mil brasileiros, muitos atraídos pelos canais navegáveis e imóveis com acesso ao golfo — combinação rara para quem quer qualidade de vida estilo Flórida sem os preços de Miami. Atendemos clientes de Cape Coral por Zoom com foco em EB-5 via TEA rural (a região qualifica), compra de imóveis via LLC e estruturação sucessória para não-residentes.",
      en: "Cape Coral has roughly 12,000 Brazilians, many drawn by the navigable canals and gulf-access waterfront homes — a rare combination for those wanting Florida-style quality of life without Miami pricing. We serve Cape Coral clients via Zoom with a focus on EB-5 via rural TEA (the region qualifies), LLC-held real estate purchases, and non-resident estate structuring.",
      es: "Cape Coral reúne ~12.000 brasileños, atraídos por los canales navegables y propiedades con acceso al golfo.",
    },
  },
};

const westPalmBeach: City = {
  slug: "west-palm-beach",
  name: "West Palm Beach",
  county: "Palm Beach",
  state: "FL",
  demographics: { brazilianPopulation: 20_000 },
  location: { distanceFromOfficeMiles: 175, driveTimeFromOfficeMinutes: 125 },
  content: {
    intro: {
      pt: "West Palm Beach concentra ~20 mil brasileiros, muitos profissionais que atendem o ecossistema do Palm Beach County — finanças, saúde, construção de luxo. Atendemos clientes de West Palm Beach por Zoom com foco em EB-1A para líderes de área, EB-2 NIW para médicos e estruturação empresarial para quem opera serviços voltados à alta renda local.",
      en: "West Palm Beach houses roughly 20,000 Brazilians, many professionals serving the Palm Beach County ecosystem — finance, healthcare, luxury construction. We serve West Palm Beach clients via Zoom with a focus on EB-1A for field leaders, EB-2 NIW for physicians, and business structuring for those operating high-income-facing services.",
      es: "West Palm Beach concentra ~20.000 brasileños, muchos profesionales que atienden el ecosistema de Palm Beach County.",
    },
  },
};

export const CITIES: Record<string, City> = {
  orlando,
  kissimmee,
  davenport,
  "pompano-beach": pompanoBeach,
  "deerfield-beach": deerfieldBeach,
  miami,
  "boca-raton": bocaRaton,
  "fort-lauderdale": fortLauderdale,
  tampa,
  jacksonville,
  "cape-coral": capeCoral,
  "west-palm-beach": westPalmBeach,
};

export const getCityBySlug = (slug: string) => CITIES[slug];
export const getAllCitySlugs = () => Object.keys(CITIES);
export const getCitiesByProximity = () =>
  Object.values(CITIES).sort(
    (a, b) =>
      a.location.distanceFromOfficeMiles - b.location.distanceFromOfficeMiles,
  );
