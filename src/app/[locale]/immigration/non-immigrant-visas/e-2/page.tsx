import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/e-2",
  titles: {
    pt: "Visto E-2 para Brasileiros — Requer Dupla Cidadania",
    en: "E-2 Treaty Investor — Dual Citizenship Required",
    es: "Visa E-2 — Requiere Doble Ciudadanía",
  },
  descriptions: {
    pt: "Brasil NÃO é país tratado E-2. Brasileiros precisam de dupla cidadania (Itália, Portugal, Espanha) para aplicar.",
    en: "Brazil is NOT an E-2 treaty country. Brazilians need dual citizenship to apply.",
    es: "Brasil NO es país tratado E-2; brasileños requieren doble ciudadanía.",
  },
});

export { generateMetadata };
export default Page;
