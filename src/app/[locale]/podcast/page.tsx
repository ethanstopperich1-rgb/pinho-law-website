import { makePlaceholderRoute } from "@/lib/placeholder-route";

const { generateMetadata, Page } = makePlaceholderRoute({
  path: "/podcast",
  titles: {
    pt: "Podcast — Dra. Izi no Sonho Americano",
    en: "Podcast — Dra. Izi on the American Dream",
    es: "Podcast — Dra. Izi en el Sueño Americano",
  },
  descriptions: {
    pt: "Aparições da Dra. Izi Pinho no podcast Sonho Americano (Canal Perguntas / Paulo Paternes). Transcrições completas em PT, EN e ES.",
    en: "Dra. Izi Pinho's appearances on the Sonho Americano podcast (Canal Perguntas / Paulo Paternes). Full transcripts in PT, EN, ES.",
    es: "Apariciones de la Dra. Izi Pinho en el podcast Sonho Americano (Canal Perguntas / Paulo Paternes). Transcripciones completas.",
  },
});

export { generateMetadata };
export default Page;
