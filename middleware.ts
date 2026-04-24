import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

// PT-friendly URL aliases. Brazilians search / type "sobre",
// "contato", "equipe" — not the English slugs. 301-redirect them
// to the canonical EN slugs (which next-intl handles under /pt).
const PT_ALIASES: Record<string, string> = {
  "/pt/sobre": "/pt/attorney-izi-pinho",
  "/pt/sobre-izi-pinho": "/pt/attorney-izi-pinho",
  "/pt/advogada": "/pt/attorney-izi-pinho",
  "/pt/equipe": "/pt/team",
  "/pt/contato": "/pt/contact",
  "/pt/fale-conosco": "/pt/contact",
  "/pt/servicos": "/pt/immigration",
  "/pt/avaliacoes": "/pt/reviews",
  "/pt/depoimentos": "/pt/reviews",
  "/pt/ferramentas": "/pt/tools",
  "/pt/calculadoras": "/pt/tools",
  "/pt/agendar": "/pt/consultation",
  "/pt/consulta": "/pt/consultation",
};

const intlMiddleware = createMiddleware({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  localePrefix: "always",
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const alias = PT_ALIASES[pathname];
  if (alias) {
    const url = req.nextUrl.clone();
    url.pathname = alias;
    return NextResponse.redirect(url, 301);
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(pt|en|es)/:path*"],
};
