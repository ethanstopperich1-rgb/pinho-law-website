import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/eb-2-niw",
  titles: {
    pt: "EB-2 NIW para Brasileiros 2026 — Sem Patrocinador",
    en: "EB-2 NIW 2026 — National Interest Waiver, No Sponsor",
    es: "EB-2 NIW 2026 — Exención de Interés Nacional",
  },
  descriptions: {
    pt: "EB-2 NIW: green card sem oferta de emprego e sem patrocinador. Brasileiros CURRENT em 2026.",
    en: "EB-2 NIW: green card with no job offer, no sponsor. Brazilians priority-date CURRENT in 2026.",
    es: "EB-2 NIW: green card sin oferta de empleo, sin patrocinador.",
  },
});

export { generateMetadata };
export default Page;
