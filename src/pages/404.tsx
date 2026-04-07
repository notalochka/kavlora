import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { useI18n } from "@/hooks/useI18n";
import styles from "./NotFound.module.css";

export default function NotFoundPage() {
  const { dict } = useI18n();
  const t = dict.notFound;

  return (
    <div className={styles.page}>
      <Seo
        title={t.seoTitle}
        description={t.seoDescription}
        path="/404"
        noindex
      />
      <Header forceDark />
      <main className={styles.main}>
        <section className={styles.card} aria-label={t.ariaLabel}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.description}>{t.description}</p>
          <div className={styles.actions}>
            <Link href="/" className={styles.button}>
              {t.backHome}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
