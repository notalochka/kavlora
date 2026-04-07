const DEFAULT_SITE_URL = "http://localhost:3000";
export const SUPPORTED_LOCALES = ["uk", "en", "zh-CN"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
const DEFAULT_LOCALE: SupportedLocale = "uk";

const OG_LOCALE_MAP: Record<SupportedLocale, string> = {
  uk: "uk_UA",
  en: "en_US",
  "zh-CN": "zh_CN",
};

function normalizeSiteUrl(rawUrl: string): string {
  try {
    return new URL(rawUrl).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
}

export function toAbsoluteUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${cleanPath}`;
}

export function resolveLocale(locale?: string): SupportedLocale {
  if (locale === "uk" || locale === "en" || locale === "zh-CN") return locale;
  if (locale?.startsWith("zh")) return "zh-CN";
  return DEFAULT_LOCALE;
}

function stripLocaleFromPath(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const [first, ...rest] = segments;
  const isLocalePrefix = SUPPORTED_LOCALES.includes(first as SupportedLocale);
  if (!isLocalePrefix) return cleanPath;

  if (rest.length === 0) return "/";
  return `/${rest.join("/")}`;
}

export function withLocalePath(path: string, locale: SupportedLocale): string {
  const strippedPath = stripLocaleFromPath(path);
  if (locale === DEFAULT_LOCALE) return strippedPath;
  if (strippedPath === "/") return `/${locale}`;
  return `/${locale}${strippedPath}`;
}

export function toOgLocale(locale: SupportedLocale): string {
  return OG_LOCALE_MAP[locale];
}

export function getAlternateLanguageUrls(path: string): Array<{ locale: SupportedLocale; href: string }> {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: toAbsoluteUrl(withLocalePath(path, locale)),
  }));
}
