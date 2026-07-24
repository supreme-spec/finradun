import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Блог об инвестициях и личных финансах | Сергей Свистунов",
  description: "Полезные статьи и стратегии инвестирования на фондовом рынке от финансового советника Сергея Свистунова. Уровни для начинающих и профессионалов.",
  openGraph: {
    title: "Блог об инвестициях и финансах | Сергей Свистунов",
    description: "Полезные статьи и стратегии инвестирования на фондовом рынке. Уровни для начинающих и профессионалов.",
    url: `${SITE_URL}/blog`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Блог об инвестициях" }],
  },
  alternates: {
    canonical: "/blog",
  },
};

const faqItems = [
  {
    question: "Для кого написан блог?",
    answer: "Блог содержит материалы трёх уровней: новичок (база инвестирования), средний (ETF, налоги, риск-менеджмент) и профессиональный (портфельная теория, количественный анализ).",
  },
  {
    question: "Какой уровень мне выбрать?",
    answer: "Если вы только начинаете — начните с «Новичка». Если уже инвестируете — «Средний». Если управляете крупным капиталом — «Профессиональный».",
  },
  {
    question: "Статьи обновляются?",
    answer: "Да, блог регулярно пополняется новыми материалами с учётом изменений на рынке и законодательства.",
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
  headline: "Блог об инвестициях и личных финансах | Сергей Свистунов",
  description: "Полезные статьи и стратегии инвестирования на фондовом рынке от финансового советника Сергея Свистунова. Уровни для начинающих и профессионалов.",
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
    "@id": `${SITE_URL}/blog`,
  },
};

const levels = [
  {
    title: "Уровень 1: Новичок",
    desc: "Базовая информация: с чего начать инвестировать, как собрать первый портфель и почему важна финансовая грамотность.",
    link: "/blog/beginners"
  },
  {
    title: "Уровень 2: Средний",
    desc: "Продвинутые стратегии: инвестирование в ETF, фонды, оптимизация налогов и оценка бизнес-рисков.",
    link: "/blog/intermediate"
  },
  {
    title: "Уровень 3: Профессиональный",
    desc: "Глубокая аналитика: теория портфельного управления, психологические ловушки и макроэкономические сводки.",
    link: "/blog/professional"
  }
];

export default function BlogPage() {
  const currentDate = new Date().toISOString().split("T")[0];
  const dynamicArticleJsonLd = {
    ...articleJsonLd,
    dateModified: currentDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicArticleJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "clamp(70px, 10vw, 100px)", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "clamp(2rem, 4vw, 4rem) clamp(0.75rem, 2vw, 1.5rem)" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Финансовое обучение</div>
          <h1 className="section-title">Блог и образовательные материалы</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>Уровни финансового обучения</h2>
          
          <div style={{ marginTop: "clamp(1.5rem, 3vw, 3rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(1rem, 2vw, 2rem)" }}>
            {levels.map((lvl) => (
              <div key={lvl.title} className="glass-card" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "clamp(1.1rem, 3vw, 1.5rem)" }}>{lvl.title}</h3>
                <p style={{ color: "var(--text-secondary)", flexGrow: 1, lineHeight: "1.6" }}>{lvl.desc}</p>
                <div style={{ marginTop: "1rem" }}>
                  <Link href={lvl.link} className="btn btn-outline" style={{ display: "inline-block" }}>Перейти к разделу</Link>
                </div>
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
