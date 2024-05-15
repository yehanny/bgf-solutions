/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tecnoquim.com.ve",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  experimental: {
    runtime: "edge",
    // This enables the Edge Runtime for all API routes
    // and pages that don't have a runtime defined
    // in their individual files.
    routeRules: {
      "/_next/data/**": { runtime: "edge" },
    },
  },
};
