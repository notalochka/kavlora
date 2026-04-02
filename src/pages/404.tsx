import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import styles from "./NotFound.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <Seo
        title="Сторінку не знайдено | Kavlora"
        description="Сторінку не знайдено. Поверніться на головну сторінку Kavlora."
        path="/404"
        noindex
      />
      <Header forceDark />
      <main className={styles.main}>
        <section className={styles.card} aria-label="Сторінку не знайдено">
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Сторінку не знайдено</h1>
          <p className={styles.description}>
            Схоже ви заблукали. Поверніться на головну сторінку Kavlora.
          </p>
          <div className={styles.actions}>
            <Link href="/" className={styles.button}>
              На головну
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
