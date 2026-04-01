import Head from "next/head";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && phone.trim().length > 0 && agreed;
  }, [agreed, email, name, phone]);

  return (
    <>
      <Head>
        <title>Контакти | Kavlora</title>
        <meta name="description" content="Сторінка контактів Kavlora" />
      </Head>

      <div className={styles.page}>
        <Header forceDark />

        <main className={styles.main}>
          <section className={styles.contactSection} aria-label="Contact form">
            <div className={styles.left}>
            <p className={styles.kicker}>ЗАПИТ НА КОНСУЛЬТАЦІЮ</p>
            <h1 className={styles.title}>
              Не впевнені, що саме
              <br />
              вам потрібно? 
              <br />
              Ми допоможемо обрати.
            </h1>
            <p className={styles.lead}>
              Залиште коротку інформацію про ваш запит — і команда Kavlora проконсультує 
              щодо ламелей та заготовок для паркетної дошки, 
              щоб ви отримали матеріал під ваші точні розміри та потреби
            </p>

              <ul className={styles.contactList}>
                <li>
                  <svg className={styles.contactIcon} viewBox="0 0 17.11 19.63" xmlns="http://www.w3.org/2000/svg"><path d="M8.56,11.78c-1.94,0-3.51-1.57-3.51-3.51s1.57-3.51,3.51-3.51,3.51,1.57,3.51,3.51-1.58,3.51-3.51,3.51Zm0-5.72c-1.22,0-2.21,.99-2.21,2.21s.99,2.21,2.21,2.21,2.21-.99,2.21-2.21-.99-2.21-2.21-2.21Z" /><path d="M8.56,19.63c-1.35,0-2.7-.51-3.76-1.52C2.1,15.52-.88,11.39,.24,6.46H.24C1.26,2,5.15,0,8.55,0h0c3.41,0,7.3,2,8.31,6.46,1.12,4.93-1.87,9.06-4.57,11.65-1.05,1.01-2.4,1.52-3.75,1.52ZM1.51,6.74c-.98,4.34,1.74,8.07,4.19,10.43,1.6,1.54,4.11,1.54,5.71,0,2.46-2.36,5.18-6.08,4.2-10.43-.91-4.02-4.37-5.45-7.05-5.45h0C5.87,1.3,2.42,2.73,1.51,6.74h0Z" /></svg>
                  <span>08730, Київська обл., Обухівський район, 
            <br />село Мала Вільшанка, вул. Шевченка, 125</span>
                </li>
                <li>
                  <svg className={styles.contactIcon} viewBox="0 0 15.3 20.3" xmlns="http://www.w3.org/2000/svg"><path d="M10.27,20.3H5.02c-3.85,0-5.02-1.26-5.02-5.4V5.4C0,1.26,1.17,0,5.02,0h5.25c3.85,0,5.03,1.26,5.03,5.4V14.9c0,4.14-1.17,5.4-5.03,5.4ZM5.02,1.3C1.89,1.3,1.3,1.95,1.3,5.4V14.9c0,3.45,.59,4.1,3.73,4.1h5.25c3.13,0,3.72-.65,3.72-4.1V5.4c0-3.45-.59-4.1-3.72-4.1H5.02Z" /><path d="M9.4,4.62h-3.5c-.36,0-.65-.29-.65-.65s.29-.65,.65-.65h3.5c.36,0,.65,.29,.65,.65s-.29,.65-.65,.65Z" /><path d="M7.65,17.55c-1.11,0-2.01-.95-2.01-2.12s.9-2.12,2.01-2.12,2.01,.95,2.01,2.12-.9,2.12-2.01,2.12Zm0-2.95c-.39,0-.71,.37-.71,.82s.32,.82,.71,.82,.71-.37,.71-.82-.32-.82-.71-.82Z" /></svg>
                  <a href="tel:+380934762787">+380 93 476 27 87</a>
                </li>
                <li>
                  <svg className={styles.contactIcon} viewBox="0 0 19.63 16.88" xmlns="http://www.w3.org/2000/svg"><path d="M14.4,16.88H5.23c-3.33,0-5.23-1.91-5.23-5.23V5.23C0,1.91,1.91,0,5.23,0H14.4c3.33,0,5.23,1.91,5.23,5.23v6.42c0,3.33-1.91,5.23-5.23,5.23ZM5.23,1.3c-2.61,0-3.93,1.32-3.93,3.93v6.42c0,2.61,1.32,3.93,3.93,3.93H14.4c2.61,0,3.93-1.32,3.93-3.93V5.23c0-2.61-1.32-3.93-3.93-3.93H5.23Z" /><path d="M9.81,9.2c-.76,0-1.53-.24-2.12-.71l-2.86-2.29c-.28-.22-.33-.63-.1-.91,.22-.28,.63-.33,.91-.1l2.86,2.29c.71,.57,1.91,.57,2.63,0l2.87-2.29c.28-.22,.69-.18,.91,.1s.18,.69-.1,.91l-2.87,2.29c-.6,.47-1.36,.71-2.12,.71Z" /></svg>
                  <a href="mailto:kavlora@gmail.com">kavlora@gmail.com</a>
                </li>
              </ul>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.gridTwo}>
                <label className={styles.field}>
                  <span>
                    Імʼя <em>*</em>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Введіть ваше імʼя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span>
                    Email <em>*</em>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Введіть ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span>
                  Номер телефону <em>*</em>
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Введіть ваш номер телефону"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </label>

              <fieldset className={styles.interest}>
                <legend>Що вас цікавить? (необовʼязково)</legend>
                <label>
                  <input type="checkbox" name="interest" value="lamels" /> Ламелі
                </label>
                <label>
                  <input type="checkbox" name="interest" value="cuttings" /> Заготовки для паркетної дошки
                </label>
                <label>
                  <input type="checkbox" name="interest" value="other" /> Інше
                </label>
              </fieldset>

              <label className={styles.field}>
                <span>Детальніше про ваш запит</span>
                <textarea name="message" rows={6} placeholder="Напишіть детальніше про ваш запит" />
              </label>

              <label className={styles.agree}>
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required />
                <span>Я погоджуюся з тим, що мої введені дані збираються та зберігаються.</span>
              </label>

              <button type="submit" className={styles.submit} disabled={!canSubmit}>
                Відправити
              </button>
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
