import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./Home.module.css";
import { UpFooter } from "@/components/UpFooter";

export default function Home() {
  const STATS_FINAL = {
    area: 10000,
    workers: 50,
    raw: 1000,
  };
  const showcaseTabs = [
    {
      label: "Фіча 1 Дизайн без обмежень",
      headline: "From the start among the best: we perfect the Pivot system",
      imageSrc: "/main/photo4.png",
      imageAlt: "Pivot system detail",
      details:
        "Текст1 The pivot door system unlocks true design freedom, supporting finishes from around the world including heavy, statement materials. With hinges engineered to carry door leaves up to 500 kg, architects and designers can realize bold concepts without sacrificing comfort or performance. The result is a powerful architectural feature that turns the entrance into a showcase, enabling experimentation with proportions, form, and material with no compromise.",
    },
    {
      label: "Фіча 2 Дизайн без обмежень",
      headline: "Відтворення вашої ідеї з урахуванням всіх деталей",
      imageSrc: "/main/photo5.png",
      imageAlt: "Design concept sketch",
      details:
        "Текст2 The pivot door system unlocks true design freedom, supporting finishes from around the world including heavy, statement materials. With hinges engineered to carry door leaves up to 500 kg, architects and designers can realize bold concepts without sacrificing comfort or performance. The result is a powerful architectural feature that turns the entrance into a showcase, enabling experimentation with proportions, form, and material with no compromise.",
    },
    {
      label: "Фіча 3 Дизайн без обмежень",
      headline: "Tailored details that turn ideas into signature solutions",
      imageSrc: "/main/photo6.png",
      imageAlt: "Tailored production detail",
      details:
        "Текст3 The pivot door system unlocks true design freedom, supporting finishes from around the world including heavy, statement materials. With hinges engineered to carry door leaves up to 500 kg, architects and designers can realize bold concepts without sacrificing comfort or performance. The result is a powerful architectural feature that turns the entrance into a showcase, enabling experimentation with proportions, form, and material with no compromise.",
    },
    {
      label: "Фіча 4 Дизайн без обмежень",
      headline: "Engineered security and performance for everyday reliability",
      imageSrc: "/main/photo7.png",
      imageAlt: "Security and performance detail",
      details:
        "Текст4 The pivot door system unlocks true design freedom, supporting finishes from around the world including heavy, statement materials. With hinges engineered to carry door leaves up to 500 kg, architects and designers can realize bold concepts without sacrificing comfort or performance. The result is a powerful architectural feature that turns the entrance into a showcase, enabling experimentation with proportions, form, and material with no compromise.",
    },
  ];
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
      <Head>
        <title>Kavlora</title>
        <meta name="description" content="Kavlora" />
      </Head>

      <div className={styles.page}>
        <Header />
        <main>
          <section aria-label="Головний банер" className={styles.hero}>
            <Image
              src="/main_banner.jpg"
              alt="Банер"
              fill
              priority
              className={styles.coverImage}
              sizes="100vw"
            />

            <div className={styles.heroOverlay} />

            <div className={styles.heroInner}>
              <div className={styles.heroGrid}>
                <div>
                  <p className={styles.heroKicker}>
                    ДУБОВІ ЛАМЕЛІ ТА ЗАГОТОВКИ ДЛЯ ПАРКЕТУ
                  </p>
                  <h1 className={styles.heroTitle}>Дуб, який видно. Якість, яку відчувають.</h1>

                  <div className={styles.heroActions}>
                    <a href="#services" className={styles.btnPrimary}>
                      Послуги
                    </a>
                    <a href="/contact" className={styles.btnGhost}>
                      Записатись
                    </a>
                  </div>
                </div>

                <div className={styles.heroDescWrap}>
                  <p className={styles.heroDesc}>
                    Ламелі від 2 мм, класи A/B/C/D. Заготовки для паркетної дошки за розмірами
                    вашого замовлення.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={productSectionRef}
            aria-label="Про продукт"
            className={`${styles.productSection} ${isProductInView ? styles.productSectionInView : ""}`}
          >
            <div className={styles.container}>
              <div className={styles.productTop}>
                <p className={styles.productKicker}>СТВОРЕНО ДЛЯ ВАС</p>

                <p className={styles.productLead}>
                Компанія KAVLORA спеціалізується на виробництві дубових ламелей та заготовки для паркетної дошки.
                Від відбору сировини до фінальної геометрії – кожна деталь під контролем якості.
                </p>
              </div>

              <div className={styles.staggerGrid}>
                <figure className={styles.staggerPhoto}>
                  <Image
                    src="/main/photo1.jpeg"
                    alt="Інтер'єр з дверима"
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>

                <figure className={`${styles.staggerPhoto} ${styles.photoMid}`}>
                  <Image
                    src="/main/photo2.png"
                    alt="Вхідна група"
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 34vw"
                  />
                </figure>

                <figure className={`${styles.staggerPhoto} ${styles.photoLow}`}>
                  <Image
                    src="/main/photo3.png"
                    alt="Дизайнерський інтер'єр"
                    fill
                    className={styles.coverImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>
              </div>
            </div>
          </section>

          <section ref={statsSectionRef} aria-label="Статистика" className={styles.statsSection}>
            <div className={styles.statsContainer}>
              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(STATS_FINAL.area.toLocaleString("uk-UA"))} м²
                    </div>
                    <div className={styles.statLabel}>
                      Загальної
                      <br />
                      площі
                      <br />
                      приміщень
                    </div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(String(STATS_FINAL.workers))}+
                    </div>
                    <div className={styles.statLabel}>
                      Працівників
                      <br />
                      компанії
                    </div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statTop}>
                    <div className={styles.statNumber}>
                      {renderRollingNumber(STATS_FINAL.raw.toLocaleString("uk-UA"))} м³
                    </div>
                    <div className={styles.statLabel}>Переробки <br />сировини <br />в місяць</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section ref={statsQuoteSectionRef} aria-label="відгук" className={styles.statsQuoteSection}>
            <div
              className={`${styles.statsQuoteContainer} ${
                isStatsQuoteInView ? styles.statsQuoteContainerInView : ""
              }`}
            >
              <div className={styles.quote}>
                <div className={styles.personCard}>
                  <div className={styles.personAvatar}>
                    <Image
                      src="/avatar.png"
                      alt="Андрій Гайіб"
                      width={56}
                      height={56}
                      priority
                    />
                  </div>
                  <p className={styles.personName}>Засновник</p>
                </div>

                <p className={styles.quoteText}>
                  У Kavlora ми виготовляємо дубові ламелі товщиною від 2 мм у класах якості A, B, C, D та
                  заготовки для паркетної дошки за індивідуальними розмірами замовника. Для нас важливі
                  прозора комунікація, точна геометрія та стабільна якість у кожній партії. Наша мета
                  проста: дати вам надійний матеріал, з яким зручно працювати і який гарантує довговічний
                  результат від виробництва.
                </p>
              </div>
            </div>
          </section>

          <section
            ref={showcaseSectionRef}
            aria-label="Wood system"
            className={`${styles.showcaseSection} ${isShowcaseInView ? styles.showcaseSectionInView : ""}`}
          >
            <div className={styles.showcaseContainer}>
              <div className={styles.showcaseTop}>
                <h2 className={styles.showcaseLead}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Aperiam sit consequatur nostrum a nam, beatae ducimus enim optio 
                 explicabo minus optio explicabo.
                </h2>
                <a href="/contact" className={styles.showcaseReadMore}>
                  Детальніше
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
            aria-label="Awards and certificates"
            className={`${styles.awardsSection} ${isAwardsInView ? styles.awardsSectionInView : ""}`}
          >
            <div className={styles.awardsContainer}>
              <div className={styles.awardsContent}>
                <p className={styles.awardsKicker}>СЕРТИФІКАЦІЯ</p>
                <h2 className={styles.awardsTitle}>Forest Stewardship Council®</h2>
                <a href="/contact" className={styles.awardsReadMore}>
                  Read more
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
                <p className={styles.awardsLogoText}>FSC-сертифікат — це міжнародний знак екологічної та соціальної відповідальності лісової продукції, що підтверджує її походження з лісів, де ведеться стале, законне та бережливе господарство. Він маркує деревину, меблі, папір та упаковку, гарантуючи екологічний вибір для споживача. </p>
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
