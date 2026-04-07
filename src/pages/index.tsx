import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./Home.module.css";
import { UpFooter } from "@/components/UpFooter";
import { Seo } from "@/components/Seo";
import { useI18n } from "@/hooks/useI18n";

export default function Home() {
  const { dict, locale } = useI18n();
  const t = dict.home;
  const numberLocale = locale === "uk" ? "uk-UA" : locale === "en" ? "en-US" : "zh-CN";
  const STATS_FINAL = {
    area: 10000,
    workers: 50,
    raw: 1000,
  };
  const showcaseTabs = t.showcaseTabs;
  const [activeShowcaseTab, setActiveShowcaseTab] = useState(0);
  const [isShowcaseDetailsOpen, setIsShowcaseDetailsOpen] = useState(false);
  const [isProductInView, setIsProductInView] = useState(false);
  const [isStatsInView, setIsStatsInView] = useState(false);
  const [isStatsQuoteInView, setIsStatsQuoteInView] = useState(false);
  const [isShowcaseInView, setIsShowcaseInView] = useState(false);
  const [isAwardsInView, setIsAwardsInView] = useState(false);
  const [statsProgress, setStatsProgress] = useState(0);
  const productSectionRef = useRef<HTMLElement | null>(null);
  const statsSectionRef = useRef<HTMLElement | null>(null);
  const statsQuoteSectionRef = useRef<HTMLElement | null>(null);
  const showcaseSectionRef = useRef<HTMLElement | null>(null);
  const awardsSectionRef = useRef<HTMLElement | null>(null);
  const currentShowcaseItem = showcaseTabs[activeShowcaseTab];
  const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function renderRollingNumber(finalText: string) {
    let numericIndex = 0;

    return (
      <span className={styles.statRollNumber}>
        {finalText.split("").map((char, idx) => {
          if (!/^\d$/.test(char)) {
            return (
              <span key={`sep-${idx}`} className={styles.statRollSeparator}>
                {char}
              </span>
            );
          }

          const finalDigit = Number(char);
          const turns = 2 + numericIndex;
          const totalSteps = turns * 10 + finalDigit;
          const currentStep = totalSteps * statsProgress;
          numericIndex += 1;

          return (
            <span key={`d-${idx}`} className={styles.statRollDigitWindow}>
              <span
                className={styles.statRollDigitStrip}
                style={{ transform: `translateY(-${currentStep}em)` }}
              >
                {Array.from({ length: turns + 1 }, (_, turn) =>
                  DIGITS.map((digit) => (
                    <span key={`${idx}-${turn}-${digit}`} className={styles.statRollDigit}>
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
    const section = productSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsProductInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = statsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsStatsInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStatsInView) return;

    let rafId = 0;
    const duration = 2200;
    const start = performance.now();

    const tick = (now: number) => {
      const rawProgress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 4);

      setStatsProgress(eased);

      if (rawProgress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isStatsInView]);

  useEffect(() => {
    const section = statsQuoteSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsStatsQuoteInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = showcaseSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsShowcaseInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = awardsSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsAwardsInView(true);
        observer.unobserve(entry.target);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Seo
        title={t.seoTitle}
        description={t.seoDescription}
        path="/"
      />

      <div className={styles.page}>
        <Header />
        <main>
          <section aria-label={t.heroAriaLabel} className={styles.hero}>
            <Image
              src="/main_banner.jpg"
              alt={t.heroImageAlt}
              fill
              priority
              className={styles.coverImage}
              sizes="100vw"
            />

            <div className={styles.heroOverlay} />

            <div className={styles.heroInner}>
              <div className={styles.heroGrid}>
                <div>
                  <p className={styles.heroKicker}>{t.heroKicker}</p>
                  <h1 className={styles.heroTitle}>{t.heroTitle}</h1>

                  <div className={styles.heroActions}>
                    <a href="#services" className={styles.btnPrimary}>
                      {t.heroServicesCta}
                    </a>
                    <a href="/contact" className={styles.btnGhost}>
                      {t.heroContactCta}
                    </a>
                  </div>
                </div>

                <div className={styles.heroDescWrap}>
                  <div className={styles.heroDescCols}>
                    <p className={styles.heroDesc}>{t.heroDescription}</p>
                    <Image
                      src="/FSC_logo_white.svg"
                      alt="FSC logo"
                      width={74}
                      height={78}
                      className={styles.heroFscLogo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={productSectionRef}
            aria-label={t.productAriaLabel}
            className={`${styles.productSection} ${isProductInView ? styles.productSectionInView : ""}`}
          >
            <div className={styles.container}>
              <div className={styles.productTop}>
                <p className={styles.productKicker}>{t.productKicker}</p>
                <p className={styles.productLead}>{t.productLead}</p>
              </div>

              <div className={styles.staggerGrid}>
                <figure className={styles.staggerPhoto}>
                  <Image
                    src="/main/photo1.jpeg"
                    alt={t.productImageAlts[0]}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>

                <figure className={`${styles.staggerPhoto} ${styles.photoMid}`}>
                  <Image
                    src="/main/photo2.png"
                    alt={t.productImageAlts[1]}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 34vw"
                  />
                </figure>

                <figure className={`${styles.staggerPhoto} ${styles.photoLow}`}>
                  <Image
                    src="/main/photo3.png"
                    alt={t.productImageAlts[2]}
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
              </div>
            </div>
          </section>

          <section ref={statsSectionRef} aria-label={t.statsAriaLabel} className={styles.statsSection}>
            <div className={styles.statsContainer}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(STATS_FINAL.area.toLocaleString(numberLocale))} м²
                    </div>
                    <div className={styles.statLabel}>{t.statsAreaLabel}</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(String(STATS_FINAL.workers))}+
                    </div>
                    <div className={styles.statLabel}>{t.statsWorkersLabel}</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(STATS_FINAL.raw.toLocaleString(numberLocale))} м³
                    </div>
                    <div className={styles.statLabel}>{t.statsRawLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section ref={statsQuoteSectionRef} aria-label={t.statsQuoteAriaLabel} className={styles.statsQuoteSection}>
            <div
              className={`${styles.statsQuoteContainer} ${
                isStatsQuoteInView ? styles.statsQuoteContainerInView : ""
              }`}
            >
              <div className={styles.quote}>
                <div className={styles.quoteLogos}>
                  <Image
                    src="/logo2_vertical.png"
                    alt="Kavlora logo"
                    width={132}
                    height={160}
                    className={styles.quoteLogoPrimary}
                  />
                  <Image
                    src="/FSC_logo.svg"
                    alt="FSC logo"
                    width={92}
                    height={96}
                    className={styles.quoteLogoSecondary}
                  />
                </div>

                <p className={styles.quoteText}>{t.statsQuoteText}</p>
              </div>
            </div>
          </section>

          <section
            ref={showcaseSectionRef}
            aria-label={t.showcaseAriaLabel}
            className={`${styles.showcaseSection} ${isShowcaseInView ? styles.showcaseSectionInView : ""}`}
          >
            <div className={styles.showcaseContainer}>
              <div className={styles.showcaseTop}>
                <h2 className={styles.showcaseLead}>{t.showcaseLead}</h2>
                <a href="/advantages" className={styles.showcaseReadMore}>
                  {t.showcaseReadMore}
                  <svg
                    aria-hidden="true"
                    className={styles.contactCtaIcon}
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </a>
              </div>

              <div className={styles.showcaseGrid}>
                <div className={styles.showcaseFeatureList}>
                  {showcaseTabs.map((tab, index) => (
                    <button
                      key={tab.label}
                      type="button"
                      className={`${styles.showcaseFeatureItem} ${
                        index === activeShowcaseTab ? styles.showcaseFeatureItemActive : ""
                      }`}
                      onClick={() => setActiveShowcaseTab(index)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div>
                  <div className={styles.showcaseFeatureHeaderRow}>
                    <p className={styles.showcaseFeatureHeadline}>{currentShowcaseItem.headline}</p>
                    <button
                      type="button"
                      className={styles.showcaseFeatureToggle}
                      aria-expanded={isShowcaseDetailsOpen}
                      aria-controls="showcase-feature-details"
                      aria-label={isShowcaseDetailsOpen ? t.showcaseToggleClose : t.showcaseToggleOpen}
                      onClick={() => setIsShowcaseDetailsOpen((prev) => !prev)}
                    >
                      {isShowcaseDetailsOpen ? "-" : "+"}
                    </button>
                  </div>
                  <div
                    id="showcase-feature-details"
                    className={`${styles.showcaseFeatureDetails} ${
                      isShowcaseDetailsOpen ? styles.showcaseFeatureDetailsOpen : ""
                    }`}
                  >
                    <p className={styles.showcaseFeatureDetailsText}>{currentShowcaseItem.details}</p>
                  </div>
                  <figure className={styles.showcaseFeatureImageWrap}>
                    <Image
                      src={currentShowcaseItem.imageSrc}
                      alt={currentShowcaseItem.imageAlt}
                      fill
                      className={styles.coverImage}
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={awardsSectionRef}
            aria-label={t.awardsAriaLabel}
            className={`${styles.awardsSection} ${isAwardsInView ? styles.awardsSectionInView : ""}`}
          >
            <div className={styles.awardsContainer}>
              <div className={styles.awardsContent}>
                <p className={styles.awardsKicker}>{t.awardsKicker}</p>
                <h2 className={styles.awardsTitle}>{t.awardsTitle}</h2>
                <a href="/advantages" className={styles.awardsReadMore}>
                  {t.awardsReadMore}
                  <svg
                    aria-hidden="true"
                    className={styles.contactCtaIcon}
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </a>
              </div>
              <div className={styles.awardsLogoText}>
                <p className={styles.awardsLogoText}>{t.awardsDescription}</p>
              </div>
              <div className={styles.awardsLogoWrap}>
                <Image
                  src="/FSC_logo.svg"
                  alt="FSC certification logo"
                  width={260}
                  height={120}
                  className={styles.awardsLogo}
                />
              </div>
            </div>
          </section>

          <UpFooter />

        </main>
        <Footer />
      </div>
    </>
  );
}
