import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/immigration/immigrant-visas/child-green-card",
  titles: {
    pt: "Green Card para Filho de Cidadão ou Residente",
    en: "Child Green Card (IR/F-2A)",
    es: "Green Card para Hijo(a)",
  },
  descriptions: {
    pt: "Green card para filhos menores: IR para filhos de cidadãos, F-2A para filhos de residentes. Inclui proteção CSPA.",
    en: "Green card for minor children: IR for USC's children, F-2A for LPR's children. CSPA protection.",
    es: "Green card para hijos menores: IR y F-2A, con protección CSPA.",
  },
});

export { generateMetadata };
export default Page;
