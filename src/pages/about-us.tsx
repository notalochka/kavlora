import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/Header";
import { UpFooter } from "@/components/UpFooter";
import { Footer } from "@/components/Footer";
import styles from "./AboutUs.module.css";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>Про нас | Kavlora</title>
        <meta name="description" content="Про компанію Kavlora" />
      </Head>

      <Header forceDark />
      <main>
        <section aria-label="About us intro" className={styles.aboutIntroSection}>
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

        <section aria-label="Impact in numbers" className={styles.impactSection}>
          <div className={styles.impactGrid}>
            <div className={styles.impactIntro}>
              <h2 className={styles.impactTitle}>Наш вплив у цифрах</h2>
              <p className={styles.impactLead}>
                Кілька цифр, що відображають нашу зосередженість на якості, точності та
                довгострокових партнерських відносинах.
              </p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>90%</p>
              <p className={styles.impactLabel}>Повторні співпраці</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>35+</p>
              <p className={styles.impactLabel}>Проекти</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>10</p>
              <p className={styles.impactLabel}>Роки на ринку</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>650+</p>
              <p className={styles.impactLabel}>Виготовлення ламелей </p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>500+</p>
              <p className={styles.impactLabel}>Виготовлення</p>
            </div>

            <div className={styles.impactMetric}>
              <p className={styles.impactValue}>450+</p>
              <p className={styles.impactLabel}>Деталі оздоблення</p>
            </div>
          </div>
        </section>

        <section aria-label="Building solutions" className={styles.solutionsSection}>
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
