import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/business/c-corp-s-corp",
  titles: {
    pt: "C-Corp vs S-Corp vs LLC para Brasileiros",
    en: "C-Corp vs S-Corp vs LLC — Which Is Right?",
    es: "C-Corp vs S-Corp vs LLC para Brasileños",
  },
  descriptions: {
    pt: "Comparativo de estruturas societárias para brasileiros: LLC vs C-Corp vs S-Corp. S-Corp não é opção para não-residentes.",
    en: "Entity comparison for Brazilians. S-Corp is not available to non-residents.",
    es: "Comparativo de estructuras: S-Corp no es opción para no-residentes.",
  },
});

export { generateMetadata };
export default Page;
