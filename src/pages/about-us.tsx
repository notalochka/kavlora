import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { UpFooter } from "@/components/UpFooter";
import { Footer } from "@/components/Footer";
import styles from "./AboutUs.module.css";
import { Seo } from "@/components/Seo";

export default function AboutUsPage() {
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
        title="Про нас | Kavlora"
        description="Дізнайтесь більше про Kavlora: виробничі потужності, підхід до якості, FSC-сертифікацію та досвід у виробництві дубових ламелей."
        path="/about-us"
      />

      <Header forceDark />
      <main>
        <section
          ref={aboutIntroRef}
          aria-label="About us intro"
          className={`${styles.aboutIntroSection} ${isAboutIntroInView ? styles.aboutIntroSectionInView : ""}`}
        >
          <div className={styles.aboutIntroGrid}>
            <div className={styles.aboutIntroTopText}>
              <p className={styles.aboutKicker}>МАЙСТЕРНІСТЬ, ПІДТВЕРДЖЕНА ЯКІСТЮ</p>
              <h1 className={styles.aboutTitle}>Від сировини до готових рішень для вашого будинку</h1>
              <p className={styles.aboutLead}>
              Ми працюємо з дубом щодня, перетворюючи натуральну сировину
               на якісні ламелі та заготовки для паркетної дошки 
               за параметрами замовника. Компанія займається виготовленням 
               дубових ламелей товщиною від 2 мм , з класами якості A,B,C,D 
               та заготовками для паркетної дошки згідно розмірів замовника. 
              </p>
            </div>

            <figure className={styles.aboutImageTop}>
              <Image
                src="/about1.jpeg"
                alt="Architectural drawing process"
                fill
                className={styles.aboutImage}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </figure>

            <figure className={styles.aboutImageBottom}>
              <Image
                src="/about2.JPG"
                alt="Door hardware detail"
                fill
                className={styles.aboutImage}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </figure>

            <div className={styles.aboutIntroBottomText}>
              <p>
              Виробнича інфраструктура охоплює комплекс приміщень загальною площею понад 10 000 м², 
              що дозволяє ефективно організовувати всі етапи обробки. За участі команди з більш 
              ніж 50 спеціалістів ми забезпечуємо щомісячну переробку сировини обсягом понад 1000 м³ 
              і стабільну якість постачання.
              </p>
              <p>
              Ми поєднуємо практичний досвід деревообробки з постійним розвитком технологій, 
              щоб відповідати зростаючим вимогам ринку. Важливим підтвердженням нашого підходу є 
              FSC-сертифікація (Forest Stewardship Council®), що засвідчує відповідальне 
              походження деревини та дотримання екологічних і соціальних стандартів.
              </p>
            </div>
          </div>
        </section>

        <section ref={impactSectionRef} aria-label="Impact in numbers" className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <div className={styles.impactIntro}>
              <h2 className={styles.impactTitle}>Наш вплив у цифрах</h2>
              <p className={styles.impactLead}>
                Кілька цифр, що відображають нашу зосередженість на якості, точності та
                довгострокових партнерських відносинах.
              </p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("90%")}</p>
              <p className={styles.impactLabel}>Повторні співпраці</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("35+")}</p>
              <p className={styles.impactLabel}>Проекти</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("10")}</p>
              <p className={styles.impactLabel}>Роки на ринку</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("650+")}</p>
              <p className={styles.impactLabel}>Виготовлення ламелей </p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("500+")}</p>
              <p className={styles.impactLabel}>Виготовлення</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>{renderRollingNumber("450+")}</p>
              <p className={styles.impactLabel}>Деталі оздоблення</p>
            </div>
          </div>
        </section>

        <section
          ref={solutionsSectionRef}
          aria-label="Building solutions"
          className={`${styles.solutionsSection} ${isSolutionsInView ? styles.solutionsSectionInView : ""}`}
        >
          <div className={styles.solutionsContainer}>
            <p className={styles.solutionsKicker}>НАШІ ВИРОБНИЧІ МОЖЛИВОСТІ</p>
            <h2 className={styles.solutionsTitle}>Дубові паркетні рішення для сучасних проєктів</h2>
            
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionHeading}>Виготовлення дубових ламелей</h3>
              <p className={styles.solutionText}>
              Виробляємо дубові ламелі товщиною від 2 мм із стабільною геометрією та контрольованою якістю, забезпечуючи надійну основу для подальшої обробки.
              </p>
            </div>
            <div className={styles.solutionCard}>
              <h3 className={styles.solutionHeading}>Природна основа якості</h3>
              <p className={styles.solutionText}>
              Працюємо з дубом, зберігаючи баланс між природною 
              естетикою деревини та технологічною точністю виробничих процесів.
              </p>
            </div>

            <div className={styles.solutionCard}>
              <h3 className={styles.solutionHeading}>Індивідуальний підхід до замовлення</h3>
              <p className={styles.solutionText}>
              Виготовляємо ламелі та заготовки для паркетної дошки під конкретні параметри клієнта, гарантуючи прогнозований результат і стабільні поставки.
              </p>
            </div>
          </div>
        </section>
      </main>
      <UpFooter />
      <Footer />
    </>
  );
}
