import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero({ lang = "ru" }: { lang?: "ru" | "en" }) {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.glow} />
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`tag tag-gold animate-fade-up ${styles.tag}`}>
            <span className={styles.dot}></span>
            {lang === "en" ? "Overview" : "Начало"}
          </div>
          
          <h1 className={`animate-fade-up ${styles.title}`} style={{ animationDelay: "0.1s" }}>
            {lang === "en" ? (
              <>
                Hello! <br/>I am Sergey Svistunov<br/>
                <span className="gold-text">Independent Financial Advisor</span>
              </>
            ) : (
              <>
                Привет! <br/>Я Сергей Свистунов<br/>
                <span className="gold-text">Независимый Финансовый советник</span>
              </>
            )}
          </h1>
          
          <p className={`animate-fade-up ${styles.subtitle}`} style={{ animationDelay: "0.2s" }}>
            {lang === "en"
              ? "I work with stock market investments. Efficient investing is your pathway to prosperity."
              : "Работаю с инвестициями на фондовом рынке. Эффективные инвестиции — ваш путь к благополучию."}
          </p>
          
          <div className={`animate-fade-up ${styles.actions}`} style={{ animationDelay: "0.3s" }}>
            <Link href={lang === "en" ? "/en/blog" : "/blog"} className="btn btn-primary">
              {lang === "en" ? "Blog" : "Блог"}
            </Link>
            <Link href={lang === "en" ? "/en/portfolio" : "/portfolio"} className="btn btn-outline">
              {lang === "en" ? "My Space" : "Личное пространство"}
            </Link>
          </div>

          <div className={`animate-fade-up ${styles.stats}`} style={{ animationDelay: "0.5s" }}>
            <div className={styles.statItem}>
              <strong className={styles.statVal}>8+</strong>
              <span>{lang === "en" ? "Years Experience" : "Лет опыта"}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <strong className={styles.statVal}>122</strong>
              <span>{lang === "en" ? "place in LCHI-2021" : "место в ЛЧИ-2021"}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <strong className={styles.statVal}>7</strong>
              <span>{lang === "en" ? "NAUFOR level 7" : "уровень НАУФОР"}</span>
            </div>
          </div>
        </div>

        <div className={`animate-fade-up ${styles.imageWrapper}`} style={{ animationDelay: "0.4s" }}>
          <div className={styles.imageInner}>
            <Image
              src="/images/all/1.webp"
              alt="Сергей Свистунов"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.imageDecor}></div>
            <div className={`${styles.imageDecor} ${styles.decor2}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
