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
    locales: ["en-US", "es-ES"],
    defaultLocale: "es-ES",
  },
};
