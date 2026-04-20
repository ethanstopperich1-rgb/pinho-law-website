import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/results",
  titles: { pt: "Resultados", en: "Case Results", es: "Resultados" },
  descriptions: {
    pt: "500+ casos aprovados, 90% de taxa de sucesso, 1000+ clientes atendidos pelo Pinho Law.",
    en: "500+ cases approved, 90% success rate, 1000+ clients served by Pinho Law.",
    es: "500+ casos aprobados, 90% de tasa de éxito, 1000+ clientes atendidos por Pinho Law.",
  },
});

export { generateMetadata };
export default Page;
