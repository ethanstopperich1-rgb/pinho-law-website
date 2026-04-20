import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Legacy PT/ES slugs → canonical EN slugs (shared-slug IA).
// Keeping this explicit list so inbound links/bookmarks from prior
// scaffolds don't 404.
const ptLegacyRedirects: Array<{ from: string; to: string }> = [
  { from: "about/attorney", to: "attorney-izi-pinho" },
  { from: "dra-izi-pinho", to: "attorney-izi-pinho" },
  { from: "sonho-americano", to: "american-dream" },
  { from: "expandir-negocio-eua", to: "expand-business-usa" },
  { from: "ja-estou-nos-eua", to: "already-in-usa" },
  { from: "equipe", to: "team" },
  { from: "imprensa", to: "press" },
  { from: "publicacoes", to: "publications" },
  { from: "resultados", to: "results" },
  { from: "depoimentos", to: "reviews" },
  { from: "contato", to: "contact" },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Root → default locale (PT)
      {
        source: "/",
        destination: "/pt",
        permanent: false,
      },
      // Legacy locale segment → new
      {
        source: "/pt-br/:path*",
        destination: "/pt/:path*",
        permanent: true,
      },
      // Legacy PT/ES slugs → canonical EN slugs, preserved per locale.
      ...ptLegacyRedirects.map(({ from, to }) => ({
        source: `/:locale(pt|en|es)/${from}`,
        destination: `/:locale/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default withNextIntl(nextConfig);
