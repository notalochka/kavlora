import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  i18n: {
    locales: ["uk", "en", "zh-CN"],
    defaultLocale: "uk",
  },
};

export default nextConfig;
