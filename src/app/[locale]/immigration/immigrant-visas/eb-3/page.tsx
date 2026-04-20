import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/eb-3",
  titles: {
    pt: "Visto EB-3 — Trabalhador Qualificado",
    en: "EB-3 — Skilled Worker",
    es: "Visa EB-3 — Trabajador Calificado",
  },
  descriptions: {
    pt: "Green card EB-3 com patrocínio de empregador americano. Requer PERM.",
    en: "EB-3 green card via US employer sponsorship. Requires PERM.",
    es: "Green card EB-3 vía patrocinio de empleador estadounidense. Requiere PERM.",
  },
});

export { generateMetadata };
export default Page;
