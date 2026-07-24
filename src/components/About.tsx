import Image from "next/image";
import styles from "./About.module.css";

export default function About({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <div className={styles.imgWrapper}>
            <Image
              src="/images/all/1.webp"
              alt={isEn ? "Sergey Svistunov Experience" : "Опыт Сергея Свистунова"}
              fill
              className={styles.image}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={styles.statCard}>
            <span className={styles.statNum}>8+</span>
            <span className={styles.statText}>
              {isEn ? (
                <>Years of success<br/>in banking sector</>
              ) : (
                <>Лет успешной работы<br/>в банковской сфере</>
              )}
            </span>
          </div>
        </div>

        <div className={styles.contentCol}>
          <div className="tag tag-gold">{isEn ? "My Story" : "Моя история"}</div>
          <h2 className="section-title">{isEn ? "Experience & Professionalism" : "Опыт и профессионализм"}</h2>
          
          <div className={styles.textBlock}>
            {isEn ? (
              <>
                <p>
                  I am Sergey Svistunov, an independent financial advisor. I have <strong>over 8 years of successful career</strong> in wealth management, banking, and investment advisory.
                </p>
                <p>
                  I have worked as a lead client advisor in Russia&apos;s top banks: <span className="gold-text">Tinkoff, VTB, PSB, Sberbank, MCB</span>. My extensive experience lets me deeply understand global market mechanics and engineer portfolios resilient to volatility.
                </p>
                <p>
                  My mission is to help you not only preserve your hard-earned capital, but also secure its compounding growth while minimizing hidden risks and commissions.
                </p>
              </>
            ) : (
              <>
                <p>
                  Я — Сергей Свистунов, независимый финансовый советник. За плечами <strong>более 8 лет успешной карьеры</strong> в управлении инвестициями и банковской сфере. 
                </p>
                <p>
                  Я работал ведущим менеджером в крупнейших российских банках: <span className="gold-text">Тинькофф, ВТБ, ПСБ, Сбербанк, МКБ</span>. Мой опыт позволяет глубоко понимать механизмы финансовых рынков и создавать стратегии, устойчивые к кризисам.
                </p>
                <p>
                  Моя цель — помочь вам не просто сохранить капитал, но и обеспечить его стабильный рост, минимизируя риски.
                </p>
              </>
            )}
          </div>

          <div className={styles.achievements}>
            <div className={styles.achievement}>
              <div className={styles.iconWrapper}>🏆</div>
              <div>
                <h4>{isEn ? "Best Private Investor 2021" : "Лучший частный инвестор 2021"}</h4>
                <p>{isEn ? "Ranked 122nd out of 26,054 competitors" : "122-е место из 26 054 участников"}</p>
              </div>
            </div>
            <div className={styles.achievement}>
              <div className={styles.iconWrapper}>🎓</div>
              <div>
                <h4>{isEn ? "Credentials & Education" : "Профильное образование"}</h4>
                <p>{isEn ? "NAUFOR level 7, MSU, FSFM Certifications" : "Сертификаты НАУФОР, МГУ, ФСФР"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

