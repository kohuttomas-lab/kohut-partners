import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed Middleware to Proxy (same functionality, new filename).
// next-intl's request handler works unchanged as the default proxy export.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except API routes, Next internals and static files.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
