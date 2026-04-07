import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "./Header.module.css";

type ServiceItem = { label: string; href: string };
type HeaderProps = {
  services?: ServiceItem[];
  forceDark?: boolean;
};

const LANGUAGES = [
  { code: "uk", label: "Українська", shortLabel: "UA" },
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "zh-CN", label: "中文", shortLabel: "中文" },
] as const;
type LocaleCode = (typeof LANGUAGES)[number]["code"];

type HeaderCopy = {
  homeAriaLabel: string;
  services: string;
  advantages: string;
  about: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  mobileMenuAriaLabel: string;
  expandServiceTypes: string;
  collapseServiceTypes: string;
  languageSwitcherLabel: string;
  switchLanguagePrefix: string;
  serviceTypes: ServiceItem[];
};

const HEADER_COPY: Record<LocaleCode, HeaderCopy> = {
  uk: {
    homeAriaLabel: "Головна",
    services: "Послуги",
    advantages: "Переваги",
    about: "Про нас",
    contact: "Контакти",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
    mobileMenuAriaLabel: "Мобільне меню",
    expandServiceTypes: "Розгорнути типи послуг",
    collapseServiceTypes: "Згорнути типи послуг",
    languageSwitcherLabel: "Перемикач мови",
    switchLanguagePrefix: "Перемкнути мову на",
    serviceTypes: [
      { label: "ТИП 1", href: "#services-type-1" },
      { label: "ТИП 2", href: "#services-type-2" },
      { label: "ТИП 3", href: "#services-type-3" },
      { label: "ТИП 4", href: "#services-type-4" },
    ],
  },
  en: {
    homeAriaLabel: "Home",
    services: "Services",
    advantages: "Advantages",
    about: "About us",
    contact: "Contacts",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenuAriaLabel: "Mobile menu",
    expandServiceTypes: "Expand service types",
    collapseServiceTypes: "Collapse service types",
    languageSwitcherLabel: "Language switcher",
    switchLanguagePrefix: "Switch language to",
    serviceTypes: [
      { label: "TYPE 1", href: "#services-type-1" },
      { label: "TYPE 2", href: "#services-type-2" },
      { label: "TYPE 3", href: "#services-type-3" },
      { label: "TYPE 4", href: "#services-type-4" },
    ],
  },
  "zh-CN": {
    homeAriaLabel: "主页",
    services: "服务",
    advantages: "优势",
    about: "关于我们",
    contact: "联系我们",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    mobileMenuAriaLabel: "移动端菜单",
    expandServiceTypes: "展开服务类型",
    collapseServiceTypes: "收起服务类型",
    languageSwitcherLabel: "语言切换",
    switchLanguagePrefix: "切换语言到",
    serviceTypes: [
      { label: "类型 1", href: "#services-type-1" },
      { label: "类型 2", href: "#services-type-2" },
      { label: "类型 3", href: "#services-type-3" },
      { label: "类型 4", href: "#services-type-4" },
    ],
  },
};

function resolveLocale(locale?: string): LocaleCode {
  if (locale === "uk" || locale === "en" || locale === "zh-CN") return locale;
  if (locale?.startsWith("zh")) return "zh-CN";
  return "uk";
}

export function Header({ services, forceDark = false }: HeaderProps) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesButtonId = useId();
  const servicesMenuId = useMemo(() => `${servicesButtonId}-menu`, [servicesButtonId]);
  const currentLocale = resolveLocale(router.locale);
  const copy = HEADER_COPY[currentLocale];
  const menuServices = services ?? copy.serviceTypes;

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openServicesMenu() {
    clearCloseTimer();
    setServicesOpen(true);
  }

  function closeServicesMenuWithDelay() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        clearCloseTimer();
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled || forceDark ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <Link
          href="/"
          aria-label={copy.homeAriaLabel}
          className={styles.logoLink}
          onClick={() => {
            setMobileOpen(false);
            setServicesOpen(false);
          }}
        >
          <Image src="/logo2.png" alt="Kavlora" width={160} height={38} priority />
        </Link>

        <nav className={styles.navDesktop}>
          <div
            className={`${styles.servicesWrap} ${servicesOpen ? styles.servicesWrapOpen : ""}`}
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenuWithDelay}
            onFocus={openServicesMenu}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                closeServicesMenuWithDelay();
              }
            }}
          >
            <Link
              id={servicesButtonId}
              className={`${styles.navLink} ${styles.servicesButton}`}
              href="/services"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => clearCloseTimer()}
            >
              {copy.services}
              <span className={styles.chevron} aria-hidden="true" />
            </Link>

            <div id={servicesMenuId} role="menu" className={styles.servicesMenu}>
              {menuServices.slice(0, 4).map((item) => (
                <a
                  key={item.href}
                  role="menuitem"
                  href={item.href}
                  className={styles.servicesItem}
                  onClick={() => {
                    clearCloseTimer();
                    setServicesOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <Link className={styles.navLink} href="/advantages">
            {copy.advantages}
          </Link>
          <Link className={styles.navLink} href="/about-us">
            {copy.about}
          </Link>
          <Link className={styles.navLink} href="/contact">
            {copy.contact}
          </Link>
        </nav>
        <div className={styles.langSwitcher} aria-label={copy.languageSwitcherLabel}>
          {LANGUAGES.map((language) => (
            <Link
              key={language.code}
              href={router.asPath}
              locale={language.code}
              scroll={false}
              className={`${styles.langButton} ${
                currentLocale === language.code ? styles.langButtonActive : ""
              }`}
              aria-label={`${copy.switchLanguagePrefix} ${language.label}`}
            >
              {language.shortLabel}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((v) => {
              const next = !v;
              if (!next) setMobileServicesOpen(false);
              return next;
            });
          }}
        >
          <span className={styles.burger} aria-hidden="true">
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className={styles.mobileOverlay}>
          <div className={styles.mobileDrawer}>
            <button
              type="button"
              className={styles.mobileClose}
              aria-label={copy.closeMenu}
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
            >
              <span />
              <span />
            </button>

            <nav className={styles.mobileNav} aria-label={copy.mobileMenuAriaLabel}>
              <div className={styles.mobileServicesRow}>
                <Link
                  className={styles.mobileLink}
                  href="/services"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {copy.services}
                </Link>
                <button
                  type="button"
                  className={styles.mobileServicesToggle}
                  aria-label={mobileServicesOpen ? copy.collapseServiceTypes : copy.expandServiceTypes}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span
                    className={`${styles.mobileServicesChevron} ${
                      mobileServicesOpen ? styles.mobileServicesChevronOpen : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen ? (
                <div className={styles.mobileSublist}>
                  {menuServices.slice(0, 4).map((item) => (
                    <a
                      key={item.href}
                      className={styles.mobileSublink}
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}

              <Link
                className={styles.mobileLink}
                href="/advantages"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                {copy.advantages}
              </Link>
              <Link
                className={styles.mobileLink}
                href="/about-us"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                {copy.about}
              </Link>
              <Link
                className={styles.mobileLink}
                href="/contact"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                {copy.contact}
              </Link>
              <div className={styles.mobileLangSwitcher} aria-label={copy.languageSwitcherLabel}>
                {LANGUAGES.map((language) => (
                  <Link
                    key={`mobile-${language.code}`}
                    href={router.asPath}
                    locale={language.code}
                    scroll={false}
                    className={`${styles.mobileLangButton} ${
                      currentLocale === language.code ? styles.mobileLangButtonActive : ""
                    }`}
                    aria-label={`${copy.switchLanguagePrefix} ${language.label}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {language.shortLabel}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

