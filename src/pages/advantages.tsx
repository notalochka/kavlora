import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { UpFooter } from "@/components/UpFooter";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import styles from "./Advantages.module.css";
import { useI18n } from "@/hooks/useI18n";

export default function AdvantagesPage() {
  const { dict } = useI18n();
  const t = dict.advantages;
  const videoTrackRef = useRef<HTMLDivElement | null>(null);
  const descriptionSectionRef = useRef<HTMLElement | null>(null);
  const cardsSectionRef = useRef<HTMLElement | null>(null);
  const awardsIntroSectionRef = useRef<HTMLElement | null>(null);
  const precisionSectionRef = useRef<HTMLElement | null>(null);
  const videoGallerySectionRef = useRef<HTMLElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDescriptionInView, setIsDescriptionInView] = useState(false);
  const [isCardsInView, setIsCardsInView] = useState(false);
  const [isAwardsIntroInView, setIsAwardsIntroInView] = useState(false);
  const [isPrecisionInView, setIsPrecisionInView] = useState(false);
  const [isVideoGalleryInView, setIsVideoGalleryInView] = useState(false);

  useEffect(() => {
    const track = videoTrackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollLeft(track.scrollLeft > 4);
      setCanScrollRight(track.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const sectionConfigs = [
      {
        ref: descriptionSectionRef,
        setInView: setIsDescriptionInView,
        threshold: 0.25,
      },
      {
        ref: cardsSectionRef,
        setInView: setIsCardsInView,
        threshold: 0.18,
      },
      {
        ref: awardsIntroSectionRef,
        setInView: setIsAwardsIntroInView,
        threshold: 0.25,
      },
      {
        ref: precisionSectionRef,
        setInView: setIsPrecisionInView,
        threshold: 0.25,
      },
      {
        ref: videoGallerySectionRef,
        setInView: setIsVideoGalleryInView,
        threshold: 0.2,
      },
    ];

    const observers = sectionConfigs
      .map(({ ref, setInView, threshold }) => {
        const section = ref.current;
        if (!section) return null;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            setInView(true);
            observer.unobserve(entry.target);
          },
          { threshold, rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(section);
        return observer;
      })
      .filter((observer): observer is IntersectionObserver => observer !== null);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollVideos = (direction: "left" | "right") => {
    const track = videoTrackRef.current;
    if (!track) return;
    const amount = Math.round(track.clientWidth * 0.82);
    const next = direction === "left" ? -amount : amount;
    track.scrollBy({ left: next, behavior: "smooth" });
  };

  return (
    <div className={styles.page}>
      <Seo
        title={t.seoTitle}
        description={t.seoDescription}
        path="/advantages"
      />

      <Header />

      <main>
        <section aria-label={t.heroAriaLabel} className={styles.heroSection}>
          <video
            className={styles.heroVideo}
            src="/woodvideo_techno.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <p className={styles.heroKicker}>{t.heroKicker}</p>
            <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          </div>
        </section>

        <section
          ref={descriptionSectionRef}
          aria-label={t.descriptionAriaLabel}
          className={`${styles.descriptionSection} ${isDescriptionInView ? styles.descriptionSectionInView : ""}`}
        >
          <p className={styles.descriptionText}>{t.descriptionText}</p>
        </section>

        <section
          ref={cardsSectionRef}
          aria-label={t.cardsAriaLabel}
          className={`${styles.cardsSection} ${isCardsInView ? styles.cardsSectionInView : ""}`}
        >
          <div className={styles.cardsGrid}>
            {t.cards.map((card) => (
              <article key={card.title} className={styles.card}>
                <figure className={styles.cardImageWrap}>
                  <Image src={card.src} alt={card.title} fill className={styles.cardImage} sizes="(max-width: 768px) 100vw, 33vw" />
                </figure>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          ref={awardsIntroSectionRef}
          aria-label={t.awardsIntroAriaLabel}
          className={`${styles.awardsIntroSection} ${isAwardsIntroInView ? styles.awardsIntroSectionInView : ""}`}
        >
          <div className={styles.awardsIntroInner}>
            <div className={styles.awardsIntroContent}>
              <p className={styles.awardsIntroKicker}>{t.awardsKicker}</p>
              <h2 className={styles.awardsIntroTitle}>{t.awardsTitle}</h2>
              <p className={styles.awardsIntroText}>{t.awardsText}</p>
            </div>
            <Image
              src="/FSC_logo.svg"
              alt="FSC certified"
              width={132}
              height={136}
              className={styles.awardsIntroLogo}
            />
          </div>
        </section>

        <section
          ref={precisionSectionRef}
          aria-label={t.precisionAriaLabel}
          className={`${styles.precisionSection} ${isPrecisionInView ? styles.precisionSectionInView : ""}`}
        >
          <div className={styles.precisionInner}>
            <p className={styles.precisionKicker}>{t.precisionKicker}</p>
            <h2 className={styles.precisionTitle}>{t.precisionTitle}</h2>
            <p className={styles.precisionText}>{t.precisionText}</p>
          </div>
        </section>

        <section
          ref={videoGallerySectionRef}
          aria-label={t.videoGalleryAriaLabel}
          className={`${styles.videoGallerySection} ${isVideoGalleryInView ? styles.videoGallerySectionInView : ""}`}
        >
          <div className={styles.videoGalleryInner}>
            <div className={styles.videoHeader}>
              <h2 className={styles.videoGalleryTitle}>{t.videoGalleryTitle}</h2>
              <div className={styles.videoNav}>
                <button
                  type="button"
                  className={styles.videoNavBtn}
                  onClick={() => scrollVideos("left")}
                  disabled={!canScrollLeft}
                  aria-label={t.prevVideosLabel}
                >
                  <svg
                    aria-hidden="true"
                    className={`${styles.videoNavIcon} ${styles.videoNavIconLeft}`}
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.videoNavBtn}
                  onClick={() => scrollVideos("right")}
                  disabled={!canScrollRight}
                  aria-label={t.nextVideosLabel}
                >
                  <svg
                    aria-hidden="true"
                    className={styles.videoNavIcon}
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </button>
              </div>
            </div>
            <div ref={videoTrackRef} className={styles.videoGrid}>
              {["/technology/video1.MOV", "/technology/video2.MOV", "/technology/video3.MOV", "/technology/video4.MOV"].map(
                (src, index) => (
                  <figure key={src} className={styles.videoCard}>
                    <video
                      className={styles.videoPlayer}
                      src={src}
                      controls
                      playsInline
                      preload="metadata"
                      aria-label={`${t.videoLabel} ${index + 1}`}
                    />
                  </figure>
                )
              )}
            </div>
          </div>
        </section>
      </main>

      <UpFooter />
      <Footer />
    </div>
  );
}
