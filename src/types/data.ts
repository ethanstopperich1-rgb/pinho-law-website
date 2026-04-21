// Typed data contract for the programmatic data layer.
// Source of truth for Visa, Country, City, Faq, CaseStudy shapes.

export type Locale = "pt" | "en" | "es";
export const LOCALES: Locale[] = ["pt", "en", "es"];
export type LocalizedString = Record<Locale, string>;
export type PartialLocalizedString = Partial<Record<Locale, string>>;
export type LocalizedStringArray = Record<Locale, string[]>;

export type VisaCategory =
  | "employment-based-permanent"
  | "employment-based-temporary"
  | "family-based-permanent"
  | "family-based-temporary"
  | "investment-based"
  | "humanitarian";

export type VisaClassification = "immigrant" | "non-immigrant";
export type BulletinCategory =
  | "EB1"
  | "EB2"
  | "EB3"
  | "EB4"
  | "EB5"
  | "F1"
  | "F2A"
  | "F2B"
  | "F3"
  | "F4"
  | null;

export interface VisaProperties {
  leadsToGreenCard: boolean;
  requiresEmployer: boolean;
  requiresJobOffer: boolean;
  requiresLaborCert: boolean;
  allowsPremiumProcessing: boolean;
  hasLottery: boolean;
  hasCap: boolean;
  hasBacklog: boolean;
  maxInitialValidityMonths: number | null;
  renewable: boolean | null;
  dualIntent: boolean;
  pathToCitizenship: boolean;
  citizenshipEligibleYears: number | null;
}

export interface ThreeProngItem {
  id: string;
  names: LocalizedString;
  description: LocalizedString;
}

export interface VisaEligibility {
  minEducation:
    | "none"
    | "highschool"
    | "bachelors"
    | "masters"
    | "phd"
    | "exceptional";
  preferredEducation: string;
  requiresExperience: boolean;
  minExperienceYears: number;
  requiresExceptionalAbility: boolean;
  threeProngTest?: ThreeProngItem[];
}

export interface VisaCosts {
  uscisFiling: Record<string, number>;
  legalRange: { min: number; max: number };
  translationEstimate: number;
  medicalExam: number;
  total: { min: number; max: number };
  currency: "USD";
  lastUpdated: string;
}

export interface VisaTimeline {
  standardMonths: { min: number; max: number };
  premiumMonths: { min: number; max: number } | null;
  toGreenCardConsularMonths?: { min: number; max: number };
  toGreenCardAOSMonths?: { min: number; max: number };
}

export interface VisaHeroContent {
  badgeText?: LocalizedString;
  stats?: Array<{ value: string; label: LocalizedString }>;
}

export interface Visa {
  id: string;
  uscisCode: string;
  subCategory?: string;
  category: VisaCategory;
  classification: VisaClassification;
  slugs: LocalizedString;
  names: Record<Locale, { short: string; full: string; formal: string }>;
  properties: VisaProperties;
  timeline: VisaTimeline;
  eligibility: VisaEligibility;
  costs: VisaCosts;
  alternatives: string[];
  upgradeFrom: string[];
  keywords: LocalizedStringArray;
  bulletinCategory: BulletinCategory;
  relatedServices: string[];
  relatedFaqs: string[];
  relatedCases: string[];
  relatedTools: string[];
  availableForCountries: "all" | string[];
  featuredCountries: string[];
  primaryAuthor: string;
  lastReviewedBy: string;
  lastReviewedAt: string;
  hero?: VisaHeroContent;
}

export interface CountryTreaties {
  eVisa: boolean;
  visaWaiver: boolean;
  taxTreaty: boolean;
  totalization: boolean;
}

export interface CountryVisaContext {
  priorityDate?: "current" | string | null;
  specialNote?: PartialLocalizedString;
  commonUseCases?: PartialLocalizedString;
  dualCitizenshipStrategy?: boolean;
  ruralTEA?: { threshold: number; currency: string };
}

export interface Country {
  iso2: string;
  iso3: string;
  names: LocalizedString;
  demonym: {
    singular: LocalizedString;
    plural: LocalizedString;
    feminine: LocalizedString;
  };
  priority: 1 | 2 | 3;
  primaryLanguage: Locale;
  populationInFlorida: number;
  populationInUS: number;
  treaties: CountryTreaties;
  visaBulletinDates: { bulletinRowName: string };
  embassyLocations: string[];
  typicalConsularWaitMonths: { min: number; max: number };
  documentNotes: PartialLocalizedString;
  translationRequirement: string;
  currency: string;
  visaContext: Record<string, CountryVisaContext>;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  state: "FL";
  isOfficeLocation?: boolean;
  demographics: {
    totalPopulation?: number;
    brazilianPopulation: number;
    brazilianPercentage?: number;
    medianIncome?: number;
  };
  brazilianCommunity?: {
    landmarks?: string[];
    churches?: string[];
    mediaOutlets?: string[];
  };
  location: {
    lat?: number;
    lng?: number;
    distanceFromOfficeMiles: number;
    driveTimeFromOfficeMinutes: number;
  };
  searchVolume?: Record<string, number>;
  content: { intro: PartialLocalizedString };
}

export interface Faq {
  id: string;
  slug: LocalizedString;
  category: string;
  visaLinked?: string;
  question: LocalizedString;
  shortAnswer: LocalizedString;
  longAnswer?: PartialLocalizedString;
  questionVariants?: Partial<Record<Locale, string[]>>;
  relatedQuestions?: string[];
  relatedPages?: string[];
  author: string;
  publishedAt: string;
  lastReviewedAt: string;
  speakable?: boolean;
}

export interface CaseStudy {
  id: string;
  visaType: string;
  country: string;
  filedAt: string;
  approvedAt: string;
  durationMonths: number;
  clientProfile: {
    field: string;
    yearsExperience?: number;
    education?: string;
  };
  strategy?: PartialLocalizedString;
  outcome: {
    rfe: boolean;
    rfeResponsePages?: number;
    interview: boolean;
    premiumProcessing: boolean;
    approved: boolean;
  };
  keyFactors?: string[];
  attorneyNotes?: { author: string; content: PartialLocalizedString };
}
