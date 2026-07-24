import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";

  const financialServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "FinRadun",
    url: "https://finradun.ru",
    image: "https://finradun.ru/favicon.svg",
    description: isEn
      ? "Independent financial advisory and investment management by Sergey Svistunov."
      : "Независимое финансовое консультирование и управление инвестициями от Сергея Свистунова.",
    email: "s.svistunov@hotmail.com",
    telephone: "+7 967 003 30 20",
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Московский проспект, д. 9/2",
      addressLocality: "Пушкино",
      addressRegion: "Московская область",
      postalCode: "141207",
      addressCountry: "RU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "55.9686",
      longitude: "37.8486",
    },
    areaServed: { "@type": "Country", name: "Россия" },
    founder: {
      "@type": "Person",
      name: "Сергей Свистунов",
      jobTitle: "Независимый финансовый советник",
    },
    sameAs: [
      "https://vk.com/veles__voyage",
      "https://www.instagram.com/radun.veles/",
      "https://vk.ru/radun.veles",
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceJsonLd) }}
    />
    <footer id="contacts" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.flex}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <span className={styles.bracket}>[</span>
              RADUN
              <span className={styles.bracket}>]</span>
            </div>
            <p className={styles.desc}>
              {isEn 
                ? "Professional financial consulting and wealth management. Your pathway to stable prosperity."
                : "Профессиональные финансовые консультации и управление инвестициями. Ваш путь к стабильному благополучию."}
            </p>
          </div>
          
          <div className={styles.col}>
            <h3 className={styles.title}>{isEn ? "Contacts" : "Контакты"}</h3>
            <ul className={styles.list}>
              <li><i className="icon-mail" /> s.svistunov@hotmail.com</li>
              <li><i className="icon-phone" /> +7 967 003 30 20</li>
              <li><i className="icon-map" /> {isEn ? "Moscow, Russian Federation" : "Москва, Российская Федерация"}</li>
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.title}>{isEn ? "Useful Links" : "Полезные ссылки"}</h3>
            <ul className={styles.list}>
              <li><Link href={isEn ? "/en" : "/"}>{isEn ? "Home" : "Главная"}</Link></li>
              <li><Link href={isEn ? "/en/portfolio" : "/portfolio"}>{isEn ? "Profile" : "Личное пространство"}</Link></li>
              <li><Link href={isEn ? "/en/partners" : "/partners"}>{isEn ? "Partners" : "Партнеры"}</Link></li>
              <li><Link href={isEn ? "/en/contacts" : "/contacts"}>{isEn ? "Contacts" : "Контакты"}</Link></li>
              <li><Link href={isEn ? "/en/blog" : "/blog"}>{isEn ? "Blog" : "Блог"}</Link></li>
              <li><Link href={isEn ? "/en/cities" : "/cities"}>{isEn ? "Cities" : "Города России"}</Link></li>
              <li><Link href={isEn ? "/en/authors" : "/authors"}>{isEn ? "Authors" : "Авторы"}</Link></li>
              <li><Link href={isEn ? "/en/about" : "/about"}>{isEn ? "About" : "Обо мне"}</Link></li>
              <li><Link href={isEn ? "/en/risk-disclosure" : "/risk-disclosure"}>{isEn ? "Risk Disclosure" : "Риски и дисклеймер"}</Link></li>
              <li><Link href={isEn ? "/en/privacy" : "/privacy"}>{isEn ? "Privacy Policy" : "Политика конфиденциальности"}</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {isEn ? "Sergey Svistunov. All rights reserved." : "Сергей Свистунов. Все права защищены."}</p>
          <p className={styles.disclaimer}>
            {isEn
              ? "Investing involves risk of capital loss. Materials are for informational purposes only and are not individual investment advice."
              : "Инвестиции сопряжены с риском потери капитала. Материалы носят информационный характер и не являются индивидуальной инвестиционной рекомендацией."}
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
