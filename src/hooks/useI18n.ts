import { useRouter } from "next/router";
import { DICTIONARIES, resolveLocale } from "@/i18n/dictionaries";

export function useI18n() {
  const router = useRouter();
  const locale = resolveLocale(router.locale);

  return {
    locale,
    dict: DICTIONARIES[locale],
  };
}
