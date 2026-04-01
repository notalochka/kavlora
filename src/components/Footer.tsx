import Image from "next/image";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a href="/" aria-label="Kavlora" className={styles.logoLink}>
              <Image src="/logo1.png" alt="Kavlora" width={210} height={52} />
            </a>
            <p className={styles.description}>
              KAVLORA виготовляє преміальні дубові ламелі та заготовки для паркету, що природно
              інтегруються в інтерʼєр, з чіткою комунікацією від першого запиту до фінальної поставки.
            </p>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.heading}>Виробництво</h3>
            <p className={styles.address}>
            08730, Київська обл., 
            <br />Обухівський район, 
            <br />село Мала Вільшанка, 
            <br />вул. Шевченка, 125
              
            </p>
            <a className={styles.mail} href="mailto:kavlora@gmail.com">
            kavlora@gmail.com
            </a>
            <a className={styles.phone} href="tel:+380934762787">
            +380934762787
            </a>
          </div>

          <nav className={styles.linksCol} aria-label="Footer navigation">
            <h3 className={styles.heading}>Меню</h3>
            <a href="#">Головна</a>
            <a href="#services">Послуги</a>
            <a href="#advantages">Переваги</a>
            <a href="#about">Про нас</a>
            <a href="/contact">Контакти</a>
          </nav>
        </div>
        <div className={styles.footerWord} aria-hidden="true">
          KAVLORA
        </div>
      </div>
    </footer>
  );
}
