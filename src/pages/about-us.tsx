import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { UpFooter } from "@/components/UpFooter";
import { Footer } from "@/components/Footer";
import styles from "./AboutUs.module.css";
import { Seo } from "@/components/Seo";
import { useI18n } from "@/hooks/useI18n";

export default function AboutUsPage() {
  const { dict } = useI18n();
  const t = dict.about;
  const [isAboutIntroInView, setIsAboutIntroInView] = useState(false);
  const [isImpactInView, setIsImpactInView] = useState(false);
  const [isSolutionsInView, setIsSolutionsInView] = useState(false);
  const [impactProgress, setImpactProgress] = useState(0);
  const aboutIntroRef = useRef<HTMLElement | null>(null);
  const impactSectionRef = useRef<HTMLElement | null>(null);
  const solutionsSectionRef = useRef<HTMLElement | null>(null);
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function renderRollingNumber(finalText: string) {
    let numericIndex = 0;

    return (
      <span className={styles.impactRollNumber}>
        {finalText.split("").map((char, idx) => {
          if (!/^\d$/.test(char)) {
            return (
              <span key={`sep-${idx}`} className={styles.impactRollSeparator}>
                {char}
              </span>
            );
          }

          const finalDigit = Number(char);
          const turns = 2 + numericIndex;
          const totalSteps = turns * 10 + finalDigit;
          const currentStep = totalSteps * impactProgress;
          numericIndex += 1;

          return (
            <span key={`d-${idx}`} className={styles.impactRollDigitWindow}>
              <span
                className={styles.impactRollDigitStrip}
                style={{ transform: `translateY(-${currentStep}em)` }}
              >
                {Array.from({ length: turns + 1 }, (_, turn) =>
                  DIGITS.map((digit) => (
                    <span key={`${idx}-${turn}-${digit}`} className={styles.impactRollDigit}>
                      {digit}
                    </span>
                  ))
                )}
              </span>
            </span>
          );
        })}
      </span>
    );
  }

  useEffect(() => {
    const section = aboutIntroRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsAboutIntroInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = impactSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsImpactInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isImpactInView) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setImpactProgress(1);
      return;
    }

    let rafId = 0;
    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const rawProgress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 4);
      setImpactProgress(eased);
      if (rawProgress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isImpactInView]);

  useEffect(() => {
    const section = solutionsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsSolutionsInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title={t.seoTitle}
        description={t.seoDescription}
        path="/about-us"
      />

      <Header forceDark />
      <main>
        <section
          ref={aboutIntroRef}
          aria-label={t.introAriaLabel}
          className={`${styles.aboutIntroSection} ${isAboutIntroInView ? styles.aboutIntroSectionInView : ""}`}
        >
          <div className={styles.aboutIntroGrid}>
            <div className={styles.aboutIntroTopText}>
              <p className={styles.aboutKicker}>{t.aboutKicker}</p>
              <h1 className={styles.aboutTitle}>{t.aboutTitle}</h1>
              <p className={styles.aboutLead}>
                {t.aboutLead}
              </p>
            </div>

            <figure className={styles.aboutImageTop}>
              <Image
                src="/about1.jpeg"
                alt={t.topImageAlt}
                fill
                className={styles.aboutImage}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </figure>

            <figure className={styles.aboutImageBottom}>
              <Image
                src="/about2.JPG"
                alt={t.bottomImageAlt}
                fill
                className={styles.aboutImage}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </figure>

            <div className={styles.aboutIntroBottomText}>
              <p>{t.aboutBottomText1}</p>
              <p>{t.aboutBottomText2}</p>
            </div>
          </div>
        </section>

        <section ref={impactSectionRef} aria-label={t.impactAriaLabel} className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <div className={styles.impactIntro}>
              <h2 className={styles.impactTitle}>{t.impactTitle}</h2>
              <p className={styles.impactLead}>{t.impactLead}</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("15+")}</p>
              <p className={styles.impactLabel}>{t.impactYearsLabel}</p>
            </div>

            <div className={styles.impactMetric}>
              <Image
                src="/air_shipping.gif"
                alt={t.impactShippingAlt}
                width={140}
                height={92}
                className={styles.impactGif}
              />
              <p className={styles.impactLabel}>{t.impactShippingLabel}</p>
            </div>

          </div>
        </section>

        <section
          ref={solutionsSectionRef}
          aria-label={t.solutionsAriaLabel}
          className={`${styles.solutionsSection} ${isSolutionsInView ? styles.solutionsSectionInView : ""}`}
        >
          <div className={styles.solutionsContainer}>
            <p className={styles.solutionsKicker}>{t.solutionsKicker}</p>
            <h2 className={styles.solutionsTitle}>{t.solutionsTitle}</h2>
            {t.solutionsCards.map((card) => (
              <div key={card.title} className={styles.solutionCard}>
                <h3 className={styles.solutionHeading}>{card.title}</h3>
                <p className={styles.solutionText}>{card.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <UpFooter />
      <Footer />
    </>
  );
}
