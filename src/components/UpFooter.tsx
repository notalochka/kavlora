import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./UpFooter.module.css";

export function UpFooter() {
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
    <section aria-label="Sustainability" className={styles.sustainabilitySection}>
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
          <p className={styles.sustainabilityKicker}>SUSTAINABILITY</p>
          <h2 className={styles.sustainabilityTitle}>
          Традиція дерева. Сучасна культура виробництва.
          </h2>
          <p className={styles.sustainabilityText}>
          Наше підприємство – це сильна команда, великий виробничий простір і щоденна робота з натуральною сировиною. Ми будуємо процеси так, щоб поєднати надійність постачання, акуратну обробку матеріалу та стабільний результат для клієнта. Крок за кроком розширюємо можливості виробництва, щоб пропонувати ще більше готових рішень для вас.
          </p>
        </div>
      </div>
    </section>
    <section
      ref={contactCtaRef}
      aria-label="Book an appointment"
      className={`${styles.contactCtaSection} ${isContactCtaInView ? styles.contactCtaSectionInView : ""}`}
    >
      <div className={styles.contactCtaInner}>
        <h2 className={styles.contactCtaTitle}>Запис на консультацію</h2>
        <p className={styles.contactCtaText}>
        Ми супроводжуємо вас на кожному етапі – від першої ідеї до фінального результату. Розкажіть про ваш запит, а ми запропонуємо оптимальне рішення, узгодимо деталі та забезпечимо стабільну якість виконання. Усе, щоб підсумок повністю відповідав вашим очікуванням.
        </p>
        <a href="/contact" className={styles.contactCtaLink}>
          Зв'яжіться з нами
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
    </section>
    </>
  );
}
