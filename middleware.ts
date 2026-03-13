import createMiddleware from "next-intl/middleware";
import { defineRouting } from "next-intl/routing";

const routing = defineRouting({
  locales: ["en", "pt-br", "es"],
  defaultLocale: "en",
  localePrefix: "always",
});

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|pt-br|es)/:path*"],
};
