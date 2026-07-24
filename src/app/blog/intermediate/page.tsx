import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Инвестиции для среднего уровня | Блог Сергея Свистунова",
  description: "Продвинутые стратегии инвестирования для опытных инвесторов. Управление портфелем, диверсификация рисков и анализ фондового рынка для роста капитала.",
  alternates: {
    canonical: "/blog/intermediate",
  },
  openGraph: {
    title: "Инвестиции для среднего уровня | Сергей Свистунов",
    description: "Продвинутые стратегии инвестирования для опытных инвесторов. Управление портфелем, диверсификация рисков и анализ фондового рынка для роста капитала.",
    url: `${SITE_URL}/blog/intermediate`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Инвестиции для среднего уровня" }],
  },
};

const articles = [
  { title: "Налогообложение дивидендов и купонов", desc: "Особенности налогообложения дивидендов и купонов облигаций в 2025 году.", img: "18.webp", link: "/blog/dividendy-i-kupony-nalogi" },
  { title: "Как выбрать брокера и управляющего", desc: "Разбираем ключевые критерии: лицензии, комиссии, репутация, стратегии.", img: "19.webp", link: "/blog/kak-vybrat-brokera" },
  { title: "Методы оценки стоимости акций", desc: "Как выявить перспективные компании с потенциалом роста.", img: "20.webp", link: "/blog/stock_evaluation_methods" },
  { title: "Стратегии инвестирования", desc: "Долгосрочные инвестиции против краткосрочных стратегий.", img: "21.webp", link: "/blog/strategii-investirovaniya" },
  { title: "Защита от инфляции", desc: "Куда вложить свободные средства при инфляции и нестабильной экономике.", img: "22.webp", link: "/blog/zashchita-ot-inflyacii" },
  { title: "Инвестиции в недвижимость", desc: "Риски и возможности на рынке коммерческой и жилой недвижимости.", img: "23.webp", link: "/blog/property_investment_guide" },
  { title: "Сравнение ПИФов и ETF-фондов", desc: "Плюсы и минусы различных фондов для инвестора.", img: "24.webp", link: "/blog/sravnenie-pifov-i-etf-fondov" },
  { title: "Управление рисками", desc: "Методы защиты капитала инвестиционного портфеля.", img: "25.webp", link: "/blog/upravlenie-riskami-investicionnogo-portfelya" },
  { title: "Портфельная теория Гарри Марковица", desc: "Объяснение классической портфельной теории простыми словами.", img: "26.webp", link: "/blog/portfelnaya-teoriya-markovica-infografika" },
  { title: "Вероятностный анализ", desc: "Анализ инвестиционной привлекательности активов с точки зрения теории вероятности.", img: "27.webp", link: "/blog/veroyatnostnyj-analiz-investicionnyh-aktivov" },
];

const faqItems = [
  {
    question: "Как оценить риск портфеля?",
    answer: "Используйте показатели волатильности, Шарп-коэффициент и корреляцию между активами. Чем выше диверсификация, тем ниже общий риск.",
  },
  {
    question: "Что такое ребалансировка?",
    answer: "Ребалансировка — это восстановление исходных пропорций активов в портфеле. Проводится раз в квартал или при отклонении долей более чем на 5–10%.",
  },
  {
    question: "Как оптимизировать налоги при инвестировании?",
    answer: "Используйте ИИС (индивидуальный инвестиционный счёт), налоговые вычеты и учёт сроков владения активами для снижения налоговой нагрузки.",
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
  headline: "Инвестиции для среднего уровня",
  description: "Продвинутые стратегии инвестирования для опытных инвесторов.",
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
    "@id": `${SITE_URL}/blog/intermediate`,
  },
};

export default function IntermediateBlog() {
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
          <h1 className="section-title">Средний уровень</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
            Здесь представлены материалы для углубленного изучения мира инвестиций и повышения финансовой грамотности.
          </p>

          <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Стратегии для опытных инвесторов</h2>
          
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
