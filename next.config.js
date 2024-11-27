/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
    runtime: "experimental-edge",
    // This enables the Edge Runtime for all API routes
    // and pages that don't have a runtime defined
    // in their individual files.
    routeRules: {
      "/_next/data/**": { runtime: "experimental-edge" },
    },
  },
};

module.exports = nextConfig;
