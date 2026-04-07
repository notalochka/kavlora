import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/hooks/useI18n";
import styles from "./ContactModal.module.css";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CLOSE_LABELS = {
  uk: "Закрити модальне вікно",
  en: "Close modal",
  "zh-CN": "关闭弹窗",
} as const;

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { dict, locale } = useI18n();
  const t = dict.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && phone.trim().length > 0 && agreed;
  }, [agreed, email, name, phone]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={t.formAriaLabel}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          aria-label={CLOSE_LABELS[locale]}
          onClick={onClose}
        >
          <span />
          <span />
        </button>

        <p className={styles.kicker}>{t.kicker}</p>
        <p className={styles.lead}>{t.lead}</p>

        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <div className={styles.gridTwo}>
            <label className={styles.field}>
              <span>
                {t.nameLabel} <em>*</em>
              </span>
              <input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>

            <label className={styles.field}>
              <span>
                {t.emailLabel} <em>*</em>
              </span>
              <input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
          </div>

          <label className={styles.field}>
            <span>
              {t.phoneLabel} <em>*</em>
            </span>
            <input
              type="tel"
              name="phone"
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>

          <fieldset className={styles.interest}>
            <legend>{t.interestsLegend}</legend>
            <label>
              <input type="checkbox" name="interest" value="lamels" /> {t.interestLamels}
            </label>
            <label>
              <input type="checkbox" name="interest" value="cuttings" /> {t.interestCuttings}
            </label>
            <label>
              <input type="checkbox" name="interest" value="other" /> {t.interestOther}
            </label>
          </fieldset>

          <label className={styles.field}>
            <span>{t.detailsLabel}</span>
            <textarea name="message" rows={5} placeholder={t.detailsPlaceholder} />
          </label>

          <label className={styles.agree}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(event) => setAgreed(event.target.checked)}
              required
            />
            <span>{t.agreementLabel}</span>
          </label>

          <button type="submit" className={styles.submit} disabled={!canSubmit}>
            {t.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
