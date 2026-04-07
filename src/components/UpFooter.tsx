import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/hooks/useI18n";
import styles from "./UpFooter.module.css";

export function UpFooter() {
  const { dict } = useI18n();
  const t = dict.upFooter;
  const [isContactCtaInView, setIsContactCtaInView] = useState(false);
  const contactCtaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = contactCtaRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsContactCtaInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section aria-label={t.sustainabilityAriaLabel} className={styles.sustainabilitySection}>
      <div className={styles.sustainabilityMedia}>
        <video
          className={styles.sustainabilityVideo}
          src="/woodvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.sustainabilityCard}>
          <p className={styles.sustainabilityKicker}>{t.sustainabilityKicker}</p>
          <h2 className={styles.sustainabilityTitle}>
            {t.sustainabilityTitle}
          </h2>
          <p className={styles.sustainabilityText}>{t.sustainabilityText}</p>
        </div>
      </div>
    </section>
    <section
      ref={contactCtaRef}
      aria-label={t.consultationAriaLabel}
      className={`${styles.contactCtaSection} ${isContactCtaInView ? styles.contactCtaSectionInView : ""}`}
    >
      <div className={styles.contactCtaInner}>
        <h2 className={styles.contactCtaTitle}>{t.consultationTitle}</h2>
        <p className={styles.contactCtaText}>{t.consultationText}</p>
        <Link href="/contact" className={styles.contactCtaLink}>
          {t.consultationCta}
          <svg
            aria-hidden="true"
            className={styles.contactCtaIcon}
            viewBox="0 0 320 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </Link>
      </div>
    </section>
    </>
  );
}
