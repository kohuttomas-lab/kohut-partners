import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    // Prefer modern formats — far smaller than the source JPEGs.
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
