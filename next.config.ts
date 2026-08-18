import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { getArticleEnRedirects } from "./src/lib/article-slugs";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats — far smaller than the source JPEGs.
    formats: ["image/avif", "image/webp"],
  },
  // Anglické články dostali vlastné slugy (mapa v lib/article-slugs.ts). Staré
  // adresy /en/blog/{slovenský-slug} presmerúvame natrvalo na anglický slug.
  // Zdroj je vždy prefixovaný /en, takže slovenské /blog/{slug} sa nemení.
  // Redirects z next.config bežia PRED proxy (next-intl), teda ešte pred
  // jazykovým routingom. `statusCode: 301` namiesto `permanent: true` je
  // zámer — Next by inak vrátil 308 a zadanie žiada doslovnú 301.
  // (`permanent` a `statusCode` sa nesmú uviesť súčasne.)
  async redirects() {
    return getArticleEnRedirects().map(({ from, to }) => ({
      source: `/en/blog/${from}`,
      destination: `/en/blog/${to}`,
      statusCode: 301,
    }));
  },
};

export default withNextIntl(nextConfig);
