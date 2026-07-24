import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import styles from "./partners.module.css";

export const metadata = {
  title: "Партнеры и сотрудничество | Финансовый советник Свистунов",
  description: "Агентство Велес Вояж, Franglish и другие партнеры финансового советника Сергея Свистунова. Совместные проекты в сфере туризма, образования и финансов.",
  openGraph: {
    title: "Партнеры и проекты Сергея Свистунова",
    description: "Агентство Велес Вояж, Franglish и другие партнеры. Совместные проекты в сфере туризма, образования и финансов.",
    url: `${SITE_URL}/partners`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Партнеры Сергея Свистунова" }],
  },
  alternates: {
    canonical: "/partners",
  },
};

const faqItems = [
  {
    question: "Кто является партнером финансового советника?",
    answer: "Основные партнеры: туристическое агентство «Велес Вояж» и языковая школа «Franglish». Совместные проекты охватывают туризм, образование и финансовые услуги.",
  },
  {
    question: "Как стать партнером?",
    answer: "Свяжитесь через раздел контактов или Telegram (@radun88). Рассматриваем сотрудничество в сферах туризма, образования, IT и финансов.",
  },
  {
    question: "Какие преимущества партнерства?",
    answer: "Взаимный обмен клиентами, совместные маркетинговые акции и расширение сервиса для клиентов всех партнёрских организаций.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Партнеры и сотрудничество | Финансовый советник Свистунов",
  description: "Агентство Велес Вояж, Franglish и другие партнеры финансового советника Сергея Свистунова. Совместные проекты в сфере туризма, образования и финансов.",
  datePublished: "2024-06-01",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "Сергей Свистунов",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "RADUN",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/partners`,
  },
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Сотрудничество</div>
          <h1 className="section-title">Мои партнеры</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem" }}>Партнёрские проекты и направления</h2>
          
          <div className={styles.grid}>
            <div className={`glass-card ${styles.card}`}>
              <h3 style={{ color: "#fff", marginBottom: "1rem", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                Туристическое агентство <span className="gold-text">«Велес Вояж»</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                Я горжусь тем, что создал не просто турагентство, а настоящий сервис для тех, кто ценит комфорт и индивидуальный подход в путешествиях. &quot;Велес Вояж&quot; — это правильный выбор для организации вашего отдыха на высшем уровне.
              </p>
              <a href="https://veles-voyage.ru/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-block" }}>
                Перейти на сайт Велес Вояж
              </a>
            </div>

            <div className={`glass-card ${styles.card}`}>
              <h3 style={{ color: "#fff", marginBottom: "1rem", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                Языковая школа <span className="gold-text">«Franglish»</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                Качественное обучение иностранным языкам. Современные методики, индивидуальный подход и эффективный результат для вашего профессионального и личностного роста.
              </p>
              <a href="https://franglish-original.ru/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-block" }}>
                Перейти на сайт Franglish
              </a>
            </div>
          </div>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Часто задаваемые вопросы</h2>
          <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
            {faqItems.map((faq) => (
              <div key={faq.question} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.question}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
