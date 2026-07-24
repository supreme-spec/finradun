import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Финансовая грамотность для начинающих | Блог Свистунова",
  description: "Базовые принципы финансовой грамотности и инвестирования простым языком. Узнайте, как начать инвестировать и управлять личными финансами с нуля.",
  alternates: {
    canonical: "/blog/beginners",
  },
  openGraph: {
    title: "Финансовая грамотность для начинающих | Сергей Свистунов",
    description: "Базовые принципы финансовой грамотности и инвестирования простым языком. Узнайте, как начать инвестировать и управлять личными финансами с нуля.",
    url: `${SITE_URL}/blog/beginners`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Финансовая грамотность для начинающих" }],
  },
};

const articles = [
  { title: "Основы финансовой грамотности", desc: "Узнайте главные термины и концепции мира финансов простым языком. Поняв основы, вы сможете уверенно распоряжаться собственными деньгами.", img: "5.webp", link: "/blog/financial-literacy" },
  { title: "Зачем инвестировать и почему откладывать деньги недостаточно", desc: "Почему накопления сами по себе не гарантируют рост благосостояния? Узнайте, как инфляция влияет на сбережения.", img: "6.webp", link: "/blog/invest" },
  { title: "Разница между инвестициями и спекуляциями", desc: "Как определить разницу между устойчивой инвестиционной стратегией и азартной игрой на рынке?", img: "7.webp", link: "/blog/investments_vs_speculations" },
  { title: "Что такое диверсификация портфеля", desc: "Что такое диверсификация портфеля и зачем она нужна начинающим инвесторам.", img: "8.webp", link: "/blog/portfel-divers" },
  { title: "Типичные ошибки начинающих инвесторов", desc: "Типичные ошибки начинающих инвесторов и как их избежать.", img: "9.webp", link: "/blog/oshibki-nachinayushih-investorov" },
  { title: "Простые способы увеличить доходность", desc: "Простые способы увеличить доходность ваших вложений.", img: "10.webp", link: "/blog/investicii-s-vysokoy-dohodnostyu" },
  { title: "Где искать надежные инструменты", desc: "Где искать надежные инвестиционные инструменты и советы новичкам.", img: "14.webp", link: "/blog/investment_navigator" },
  { title: "Первый портфель инвестиций", desc: "Первый портфель инвестиций: Что купить сначала?", img: "15.webp", link: "/blog/first-investment-portfolio" },
  { title: "Какие налоги платят инвесторы", desc: "Какие налоги платят инвесторы в России.", img: "16.webp", link: "/blog/dividendy-i-kupony-nalogi" },
  { title: "Эмоциональные ловушки инвестора", desc: "Психология финансов: Почему эмоции мешают зарабатывать больше денег.", img: "17.webp", link: "/blog/emocionalnye-lovushki-investora" },
];

const faqItems = [
  {
    question: "С чего начать инвестирование?",
    answer: "Начните с изучения базовых понятий: риск, доходность, диверсификация. Затем определите финансовые цели и составьте первый портфель из простых инструментов — облигаций и ETF.",
  },
  {
    question: "Сколько денег нужно для начала?",
    answer: "Начать можно с любой суммы. Главное — регулярность пополнений и дисциплина. Многие брокеры позволяют покупать дробные доли акций.",
  },
  {
    question: "Какие ошибки чаще всего делают новички?",
    answer: "Инвестирование на эмоциях, отсутствие диверсификации, попытки угадать рынок и忽视 подушки безопасности — самые частые ошибки начинающих.",
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
  headline: "Финансовая грамотность для начинающих",
  description: "Базовые принципы финансовой грамотности и инвестирования простым языком.",
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
    "@id": `${SITE_URL}/blog/beginners`,
  },
};

export default function BeginnersBlog() {
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
          <h1 className="section-title">Для новичков</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
            Здесь собраны полезные статьи и рекомендации, которые помогут вам разобраться в основах финансов и начать уверенно двигаться вперёд.
          </p>

          <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Основы финансовой грамотности</h2>
          
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
