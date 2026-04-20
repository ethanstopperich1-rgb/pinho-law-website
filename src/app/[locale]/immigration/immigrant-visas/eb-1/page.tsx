import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/eb-1",
  titles: {
    pt: "Visto EB-1 — Habilidade Extraordinária",
    en: "EB-1 — Extraordinary Ability",
    es: "Visa EB-1 — Habilidad Extraordinaria",
  },
  descriptions: {
    pt: "EB-1A, EB-1B e EB-1C: green card para profissionais de habilidade extraordinária, pesquisadores e executivos multinacionais.",
    en: "EB-1A, EB-1B, and EB-1C: green card for extraordinary-ability professionals, researchers, and multinational executives.",
    es: "EB-1A, EB-1B y EB-1C: green card para profesionales de habilidad extraordinaria.",
  },
});

export { generateMetadata };
export default Page;
