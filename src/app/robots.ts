import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// AEO: explicit allowlist for search + LLM crawlers. Next.js generates
// /robots.txt from this at build time. Sitemap pointer included.

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engines.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
      // Explicit allow for major LLM/AEO crawlers.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
