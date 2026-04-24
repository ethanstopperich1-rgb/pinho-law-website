import type { MetadataRoute } from "next";

// PWA-lite manifest. Enables install-to-home-screen on mobile with
// branded icon + splash, sets Chrome tab bar color to navy.

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pinho Law — Immigration & Business Law · Orlando, FL",
    short_name: "Pinho Law",
    description:
      "Trusted immigration and business law counsel in Florida — Portuguese, English, Spanish. Florida Bar #126610.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#0E1B2E",
    lang: "pt-BR",
    dir: "ltr",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    categories: ["legal", "business", "immigration"],
  };
}
