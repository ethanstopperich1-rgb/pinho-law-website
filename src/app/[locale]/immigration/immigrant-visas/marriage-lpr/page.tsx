import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/marriage-lpr",
  titles: {
    pt: "Green Card por Casamento com Residente Permanente",
    en: "Marriage Green Card — LPR Spouse",
    es: "Green Card por Matrimonio — Cónyuge Residente",
  },
  descriptions: {
    pt: "Casamento com portador de green card (LPR): categoria F-2A, prazos conforme Visa Bulletin.",
    en: "Marriage to an LPR: F-2A category, timing per Visa Bulletin.",
    es: "Matrimonio con residente permanente (LPR): categoría F-2A.",
  },
});

export { generateMetadata };
export default Page;
