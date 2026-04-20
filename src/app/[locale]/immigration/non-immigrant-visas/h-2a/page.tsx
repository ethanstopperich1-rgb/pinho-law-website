import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/non-immigrant-visas/h-2a",
  titles: {
    pt: "Visto H-2A — Trabalho Agrícola Temporário",
    en: "H-2A — Temporary Agricultural Work",
    es: "Visa H-2A — Trabajo Agrícola Temporal",
  },
  descriptions: {
    pt: "H-2A para trabalhadores agrícolas temporários patrocinados por empregador americano.",
    en: "H-2A for temporary agricultural workers sponsored by a US employer.",
    es: "H-2A para trabajadores agrícolas temporales.",
  },
});

export { generateMetadata };
export default Page;
