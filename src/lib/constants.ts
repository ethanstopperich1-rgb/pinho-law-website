// Pinho Law — Firm constants
// NAP data must match Google Business Profile exactly

export const FIRM = {
  name: "Pinho Law",
  legalName: "Pinho Law, PLLC",
  founder: "Dra. Izi Pinho, Esq.",
  barNumber: "126610",
  // Canonical NAP (confirmed by firm — use everywhere, propagate to all directories)
  phone: "(407) 385-4144",
  phoneRaw: "+14073854144",
  email: "izi@pinholaw.com",
  marketingEmail: "marketing@pinholaw.com",
  whatsapp: "14073854144",
  address: {
    street: "6965 Piazza Grande Ave",
    suite: "Suite 401",
    city: "Orlando",
    state: "FL",
    zip: "32835",
    country: "US",
  },
  coordinates: {
    lat: 28.4747,
    lng: -81.4728,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/pinho-law",
    instagramFirm: "https://www.instagram.com/pinholaw",
    facebook: "https://www.facebook.com/PinhoLaw",
    youtube: "https://www.youtube.com/channel/UC80Tg-_H-rGdz2_r__U1Hpw",
    tiktokFirm: "https://www.tiktok.com/@pinholaw",
    tiktokLaw: "https://www.tiktok.com/@pinho.law",
  },
  hours: {
    weekdays: "9:00 AM – 5:00 PM",
    saturday: "By Appointment",
    sunday: "Closed",
  },
  googleMapsLink: "https://maps.app.goo.gl/pinho-law-orlando",
  youtubeVideoId: "oh_qDA_gDhw",
} as const;

export const REVIEWS = {
  googleRating: "4.6",
  totalReviews: "111",
  badge: "Best Lawyers Ones to Watch 2021–2024",
} as const;

export const CASE_STATS = {
  casesApproved: "500+",
  successRate: "90%",
  clientsServed: "1000+",
} as const;

// Alias matching the build-spec import pattern used by future prompts.
export const FIRM_STATS = {
  ...CASE_STATS,
  yearsInPractice: "9",
  teamSize: "5+",
} as const;

// Team roster (per locked decision 2026-04-20 — Ana Moraes removed).
// Canonical source for /team page + structured data.
export const TEAM = [
  {
    id: "izi-pinho",
    slug: "izi-pinho",
    name: "Izi Pinho",
    title: "Founder, CEO & Managing Attorney",
    image: "/images/team/izi-pinho.jpg",
    barNumber: "126610",
  },
  {
    id: "gregori-pretto",
    slug: "gregori-pretto",
    name: "Gregori Pretto",
    title: "Senior Immigration Law Clerk",
    image: "/images/team/gregori-pretto.jpg",
    yearsExperience: 8,
    joinedYear: 2019,
    specialty: "Business & Family Immigration",
  },
  {
    id: "hannah-dantas",
    slug: "hannah-dantas",
    name: "Hannah Dantas",
    title: "Case Manager",
    image: "/images/team/hannah-dantas.jpg",
  },
  {
    id: "gabriel-marinho",
    slug: "gabriel-marinho",
    name: "Gabriel Marinho",
    title: "Case Manager",
    image: "/images/team/gabriel-marinho.jpg",
  },
] as const;

// Dra. Izi Pinho — canonical attorney profile data used by Person JSON-LD
// and rendered across the site (/dra-izi-pinho, /attorney, footer halo).
export const IZI = {
  name: "Izi Pinho",
  givenName: "Izi",
  familyName: "Pinho",
  jobTitle: "Founder, CEO & Attorney",
  honorificPrefix: "Dra.",
  honorificSuffix: "Esq.",
  email: "izi@pinholaw.com",
  barNumber: "126610",
  nationality: "BR",
  knowsLanguage: ["pt-BR", "en", "es"],
  // Bio hero facts (verified: came to US 2006, Rollins '12, Stetson '16)
  immigratedYear: 2006,
  education: [
    {
      institution: "Rollins College",
      degree: "B.A. Economics",
      honors: "summa cum laude",
      year: 2012,
      url: "https://www.rollins.edu",
    },
    {
      institution: "Stetson University College of Law",
      degree: "Juris Doctor",
      honors: "magna cum laude",
      year: 2016,
      url: "https://www.stetson.edu/law",
      note: "Notes & Comments Editor, Stetson Law Review",
    },
  ],
  memberships: [
    { name: "The Florida Bar", url: "https://www.floridabar.org" },
    { name: "Florida Bar — Real Property, Probate & Trust Section" },
    { name: "Florida Bar — Solo & Small Firm Section" },
    { name: "Florida Bar — Young Lawyers Division" },
    {
      name: "American Immigration Lawyers Association (AILA)",
      since: 2019,
      url: "https://www.aila.org",
    },
  ],
  awards: [
    { name: "Best Lawyers: Ones to Watch® in America", year: 2021 },
    { name: "Best Lawyers: Ones to Watch® in America", year: 2022 },
    { name: "Best Lawyers: Ones to Watch® in America", year: 2023 },
    { name: "Best Lawyers: Ones to Watch® in America", year: 2024 },
    { name: "Orlando Magazine — Women of the Year", year: 2022 },
    {
      name: "Orlando Business Journal — 40 Under 40",
      year: 2023,
      url: "https://www.bizjournals.com/orlando/news/2023/04/22/2023-40-under-40-izi-pinho-of-pinho-law.html",
    },
    {
      name: "AME — Women in Excellency Award",
      year: 2021,
    },
    { name: "Lead Counsel Verified — Business Law", year: 2023 },
    { name: "Lead Counsel Verified — Immigration Law", year: 2023 },
    {
      name: "9º Prêmio Internacional Mulheres de Liderança e Coragem",
      year: 2026,
    },
  ],
  scholarlyArticle: {
    name: "The Advent of Benefit Corporations in Florida",
    citation: "47 Stetson L. Rev. 333",
    year: 2018,
    url: "https://stetsonlawreview.org/article/the-advent-of-benefit-corporations-in-florida/",
    citedBy: [
      {
        name: "Harvard Law School Corporate Governance Forum",
        url: "https://corpgov.law.harvard.edu/forum-citations/",
      },
      {
        name: "Lewis & Clark Law Review",
        url: "https://lawcommons.lclark.edu/cgi/viewcontent.cgi?article=1173&context=lclr",
      },
      {
        name: "Seattle University Law Review",
        url: "https://digitalcommons.law.seattleu.edu/cgi/viewcontent.cgi?article=2773&context=sulr",
      },
      {
        name: "Southern Illinois University Law Journal",
        url: "https://opensiuc.lib.siu.edu/cgi/viewcontent.cgi?article=1079&context=siulj",
      },
    ],
  },
  sameAs: [
    "https://www.floridabar.org/about/section/profile/?num=126610",
    "https://www.linkedin.com/in/izipinho",
    "https://www.instagram.com/izipinho/",
    "https://www.instagram.com/pinholaw/",
    "https://www.facebook.com/PinhoLaw/",
    "https://www.avvo.com/attorneys/32835-fl-izi-pinho-4868666.html",
    "https://www.lawinfo.com/lawfirm/florida/orlando/pinho-law-pllc/59389424-831a-4e40-87f1-7dc72a5bab9c.html",
    "https://mylocallawyer.org/lawyers/izi-pinho/",
    "https://lawful.com/fl/orlando/corporate-law-attorneys/pinho-law--pllc-y7p60nJOr",
    "https://www.experience.com/reviews/izi-7925992",
    "https://pinho.law/about",
  ],
} as const;

export const SITE = {
  url: "https://pinholaw.com",
  alternateDomain: "https://pinho.law",
  name: "Pinho Law",
  description:
    "Trusted immigration and business law counsel in Florida — in English, Portuguese, and Spanish.",
  twitterHandle: "@pinholaw",
} as const;

// Named exports for credentials + awards + memberships + attorney core.
// Downstream schema generators + future service pages import these directly.
export const ATTORNEY = {
  name: IZI.name,
  fullName: `Dra. ${IZI.name}`,
  title: IZI.jobTitle,
  barNumber: IZI.barNumber,
  barURL: "https://www.floridabar.org/about/section/profile/?num=126610",
  avvoURL: "https://www.avvo.com/attorneys/32835-fl-izi-pinho-4868666.html",
  linkedinURL: "https://www.linkedin.com/in/izipinho",
  lawSchool: "Stetson University College of Law",
  lawSchoolHonors: "magna cum laude",
  lawSchoolYear: 2016,
  undergrad: "Rollins College",
  undergradMajor: "Economics",
  undergradHonors: "summa cum laude",
  undergradYear: 2012,
  languages: ["Portuguese", "English", "Spanish"],
  ailaYear: 2019,
  scholarlyCitation: "47 Stetson L. Rev. 333 (2018)",
  harvardCitation:
    "Harvard Law School Forum on Corporate Governance, Citation #533",
} as const;

export const AWARDS = IZI.awards;
export const MEMBERSHIPS = IZI.memberships;
