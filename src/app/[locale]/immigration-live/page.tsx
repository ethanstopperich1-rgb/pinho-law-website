import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration-live",
  titles: {
    pt: "Imigração ao Vivo — USCIS, AILA, DOS",
    en: "Immigration Live — USCIS, AILA, DOS Updates",
    es: "Inmigración en Vivo — Actualizaciones USCIS",
  },
  descriptions: {
    pt: "Atualizações em tempo real de USCIS, AILA, DOS Visa Bulletin e Federal Register — traduzidas e contextualizadas.",
    en: "Real-time updates from USCIS, AILA, DOS Visa Bulletin, and Federal Register — translated and contextualized.",
    es: "Actualizaciones en tiempo real de USCIS, AILA, DOS.",
  },
});

export { generateMetadata };
export default Page;
