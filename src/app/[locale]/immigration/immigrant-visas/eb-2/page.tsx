import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/eb-2",
  titles: {
    pt: "Visto EB-2 — Profissional com Grau Avançado",
    en: "EB-2 — Advanced Degree Professional",
    es: "Visa EB-2 — Profesional con Grado Avanzado",
  },
  descriptions: {
    pt: "Green card EB-2 para profissionais com mestrado ou superior. Inclui variante NIW.",
    en: "EB-2 green card for advanced-degree professionals. Includes NIW variant.",
    es: "Green card EB-2 para profesionales con maestría o superior.",
  },
});

export { generateMetadata };
export default Page;
