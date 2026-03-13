import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt-br", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(en|pt-br|es)/:path*"],
};
