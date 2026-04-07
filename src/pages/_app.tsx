import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { resolveLocale } from "@/i18n/dictionaries";

const SESSION_LOCALE_KEY = "kavlora.locale";
const SESSION_LOCALE_RESTORED_KEY = "kavlora.locale-restored";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hasRestoredSessionLocale = useRef(false);

  useEffect(() => {
    if (!router.isReady || hasRestoredSessionLocale.current) return;

    try {
      if (sessionStorage.getItem(SESSION_LOCALE_RESTORED_KEY) === "1") {
        hasRestoredSessionLocale.current = true;
        return;
      }

      const savedLocale = sessionStorage.getItem(SESSION_LOCALE_KEY);
      if (savedLocale) {
        const nextLocale = resolveLocale(savedLocale);
        const currentLocale = resolveLocale(router.locale);

        if (nextLocale !== currentLocale) {
          void router.replace(router.asPath, router.asPath, {
            locale: nextLocale,
            scroll: false,
          });
        }
      }

      sessionStorage.setItem(SESSION_LOCALE_RESTORED_KEY, "1");
    } catch {
      // Ignore storage access issues in strict browser environments.
    }

    hasRestoredSessionLocale.current = true;
  }, [router.isReady, router.locale, router.asPath, router]);

  useEffect(() => {
    if (!router.isReady) return;

    try {
      const currentLocale = resolveLocale(router.locale);
      sessionStorage.setItem(SESSION_LOCALE_KEY, currentLocale);
    } catch {
      // Ignore storage access issues in strict browser environments.
    }
  }, [router.isReady, router.locale]);

  return <Component {...pageProps} />;
}
