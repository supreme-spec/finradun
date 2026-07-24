import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Продвинутые инвестиционные стратегии | Блог Свистунова",
  description: "Экспертные материалы для профессиональных инвесторов. Сложные финансовые инструменты, хеджирование рисков и макроэкономический анализ рынка.",
  alternates: {
    canonical: "/blog/professional",
  },
  openGraph: {
    title: "Продвинутые инвестиционные стратегии | Сергей Свистунов",
    description: "Экспертные материалы для профессиональных инвесторов. Сложные финансовые инструменты, хеджирование рисков и макроэкономический анализ рынка.",
    url: `${SITE_URL}/blog/professional`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Продвинутые инвестиционные стратегии" }],
  },
};

const articles = [
  { title: "Технический анализ акций", desc: "Узнайте, как определять тренды, распознавать паттерны и использовать индикаторы для принятия решений.", img: "28.webp", link: "/blog/tehnicheskiy-analiz-akciy-infografika" },
  { title: "Стратегия Грэма и Баффета", desc: "Сравнение стратегий Грэма и Баффета. Плюсы и минусы каждого подхода.", img: "29.webp", link: "/blog/greham-baffet-sravnitelnyj-analiz" },
  { title: "Модели Монте-Карло", desc: "Оптимизация инвестиционных решений с использованием финансовых моделей Монте-Карло.", img: "30.webp", link: "/blog/monte-karlo-investicii" },
  { title: "Анализ рынка недвижимости", desc: "Роль фундаментального анализа рынка недвижимости и коммерческой недвижимости.", img: "31.webp", link: "/blog/analiz-rynka-nedvizhimosti" },
  { title: "Влияние международных фондов", desc: "Международные фонды и их влияние на российскую экономику.", img: "32.webp", link: "/blog/international_funds_influence_on_russian_economy" },
  { title: "Альтернативные активы", desc: "Преимущества альтернативных классов активов: хедж-фонды, сырьевые товары, золото.", img: "33.webp", link: "/blog/alternative-assets-guide" },
  { title: "Оптимизация налогов", desc: "Налоговые льготы и оптимизационные схемы для профессиональных инвесторов.", img: "34.webp", link: "/blog/investment_tax_optimization" },
  { title: "Data-driven инвестиции", desc: "Применение инструментов количественного анализа в управлении капиталом.", img: "35.webp", link: "/blog/data-driven-investment" },
  { title: "Критика EMH", desc: "Критический взгляд на современную теорию эффективного рынка и её ограничения.", img: "36.webp", link: "/blog/emh_critique" },
  { title: "Пассивные стратегии", desc: "Стратегии формирования устойчивого пассивного дохода через ценные бумаги и активы.", img: "37.webp", link: "/blog/passive_income_strategies" },
];

const faqItems = [
  {
    question: "Какие стратегии подходят для крупного капитала?",
    answer: "Для крупного капитала эффективны стратегии хеджирования, факторного инвестирования и портфельной оптимизации по Марковицу с учётом корреляций.",
  },
  {
    question: "Как использовать опционные стратегии?",
    answer: "Опционные стратегии позволяют хеджировать риски и получать дополнительный доход. Популярные подходы: covered calls, protective puts и straddles.",
  },
  {
    question: "Что такое факторное инвестирование?",
    answer: "Факторное инвестирование — подход, основанный на систематических факторов доходности: размер, стоимость, momentum и качество компаний.",
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
  headline: "Продвинутые инвестиционные стратегии",
  description: "Экспертные материалы для профессиональных инвесторов.",
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
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/professional`,
  },
};

export default function ProfessionalBlog() {
  const currentDate = new Date().toISOString().split("T")[0];
  const dynamicArticleJsonLd = {
    ...articleJsonLd,
    dateModified: currentDate,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicArticleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Журнал</div>
          <h1 className="section-title">Для экспертов</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
            В этом разделе собраны эксклюзивные материалы для опытных инвесторов: углубленный анализ стратегий, математические модели и практические кейсы.
          </p>

          <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Экспертный анализ рынка</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {articles.map((art, idx) => (
              <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", padding: 0 }}>
                <div style={{ height: "200px", position: "relative" }}>
                  <Image src={`/images/folio/${art.img}`} alt={art.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3 style={{ color: "var(--text-primary)", fontSize: "1.2rem", marginBottom: "1rem" }}>{art.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>{art.desc}</p>
                  <a href={art.link} className="btn btn-outline" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.5rem 1rem" }}>Читать статью</a>
                </div>
              </div>
            ))}
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
