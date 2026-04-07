import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { useI18n } from "@/hooks/useI18n";
import styles from "./Footer.module.css";

export function Footer() {
  const { dict } = useI18n();
  const t = dict.footer;
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const footerWord = "KAVLORA";

  useEffect(() => {
    const section = footerRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsFooterInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className={`${styles.footer} ${isFooterInView ? styles.footerInView : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" aria-label="Kavlora" className={styles.logoLink}>
              <Image src="/logo1.png" alt="Kavlora" width={210} height={52} />
            </Link>
            <p className={styles.description}>{t.brandDescription}</p>
            <button
              type="button"
              className={styles.footerCta}
              onClick={() => setIsContactModalOpen(true)}
            >
              {t.contactCta}
            </button>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.heading}>{t.productionHeading}</h3>
            <p className={styles.address}>
              {t.addressLines[0]}
              <br />
              {t.addressLines[1]}
              <br />
              {t.addressLines[2]}
              <br />
              {t.addressLines[3]}
            </p>
            <a className={styles.mail} href="mailto:kavlora@gmail.com">
            kavlora@gmail.com
            </a>
            <a className={styles.phone} href="tel:+380934762787">
            +380934762787
            </a>
          </div>

          <nav className={styles.linksCol} aria-label={t.navAriaLabel}>
            <h3 className={styles.heading}>{t.menuHeading}</h3>
            <Link href="/">{t.home}</Link>
            <Link href="/#services">{t.services}</Link>
            <Link href="/advantages">{t.advantages}</Link>
            <Link href="/about-us">{t.about}</Link>
            <Link href="/contact">{t.contact}</Link>
          </nav>
        </div>
        <div className={styles.footerWord} aria-hidden="true">
          {footerWord.split("").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={styles.footerWordLetter}
              style={{ ["--letter-index" as "--letter-index"]: index } as React.CSSProperties}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </footer>
  );
}
