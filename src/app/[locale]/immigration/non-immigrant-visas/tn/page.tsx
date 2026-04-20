import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/tn",
  titles: {
    pt: "Visto TN — Apenas para Canadenses e Mexicanos (USMCA)",
    en: "TN Visa — USMCA Only (Canadians and Mexicans)",
    es: "Visa TN — Solo Canadienses y Mexicanos (USMCA)",
  },
  descriptions: {
    pt: "TN é exclusivo para canadenses e mexicanos (USMCA). Brasileiros com dupla cidadania canadense ou mexicana podem aplicar.",
    en: "TN is USMCA-only (Canada/Mexico). Brazilians with dual Canadian/Mexican citizenship qualify.",
    es: "TN es exclusivo del USMCA (Canadá/México).",
  },
});

export { generateMetadata };
export default Page;
