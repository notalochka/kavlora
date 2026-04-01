import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "./Header.module.css";

type ServiceItem = { label: string; href: string };
type HeaderProps = {
  services?: ServiceItem[];
  forceDark?: boolean;
};

const DEFAULT_SERVICES: ServiceItem[] = [
  { label: "ТИП 1", href: "#services-type-1" },
  { label: "ТИП 2", href: "#services-type-2" },
  { label: "ТИП 3", href: "#services-type-3" },
  { label: "ТИП 4", href: "#services-type-4" },
];

export function Header({ services = DEFAULT_SERVICES, forceDark = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesButtonId = useId();
  const servicesMenuId = useMemo(() => `${servicesButtonId}-menu`, [servicesButtonId]);

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
          aria-label="Головна"
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
            <a
              id={servicesButtonId}
              className={`${styles.navLink} ${styles.servicesButton}`}
              href="/services"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls={servicesMenuId}
              onClick={() => clearCloseTimer()}
            >
              Послуги
              <span className={styles.chevron} aria-hidden="true" />
            </a>

            <div id={servicesMenuId} role="menu" className={styles.servicesMenu}>
              {services.slice(0, 4).map((item) => (
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

          <a className={styles.navLink} href="#advantages">
            Переваги
          </a>
          <a className={styles.navLink} href="/about-us">
            Про нас
          </a>
          <a className={styles.navLink} href="/contact">
            Контакти
          </a>
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-label={mobileOpen ? "Закрити меню" : "Відкрити меню"}
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
              aria-label="Закрити меню"
              onClick={() => {
                setMobileOpen(false);
                setMobileServicesOpen(false);
              }}
            >
              <span />
              <span />
            </button>

            <nav className={styles.mobileNav} aria-label="Мобільне меню">
              <div className={styles.mobileServicesRow}>
                <a
                  className={styles.mobileLink}
                  href="/services"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  Послуги
                </a>
                <button
                  type="button"
                  className={styles.mobileServicesToggle}
                  aria-label={mobileServicesOpen ? "Згорнути типи послуг" : "Розгорнути типи послуг"}
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
                  {services.slice(0, 4).map((item) => (
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

              <a
                className={styles.mobileLink}
                href="#advantages"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Переваги
              </a>
              <a
                className={styles.mobileLink}
                href="/about-us"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Про нас
              </a>
              <a
                className={styles.mobileLink}
                href="/contact"
                onClick={() => {
                  setMobileOpen(false);
                  setMobileServicesOpen(false);
                }}
              >
                Контакти
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

