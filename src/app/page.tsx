import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import LatestArticles from "@/components/LatestArticles";
import AeoExpertHub from "@/components/AeoExpertHub";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";
import { generateStartConsultationHowTo } from "@/lib/seo/howTo";
import { generatePageAISchemas } from "@/lib/seo/ai";

const speakableJsonLd = generatePageSpeakableSchema('home', '/');
const howToJsonLd = generateStartConsultationHowTo();
const aiSchemas = generatePageAISchemas('/');

export const metadata = {
  title: "Финансовый советник Сергей Свистунов | Инвестиции и капитал",
  description: "Профессиональные финансовые консультации и управление инвестициями от Сергея Свистунова. 8+ лет опыта. Индивидуальные стратегии приумножения капитала.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Финансовый советник Сергей Свистунов | Инвестиции и капитал",
    description: "Профессиональные финансовые консультации и управление инвестициями от Сергея Свистунова. 8+ лет опыта. Индивидуальные стратегии приумножения капитала.",
    url: SITE_URL,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Сергей Свистунов — Финансовый советник" }],
  },
};

const faqItems = [
  {
    question: "Сколько стоят финансовые консультации?",
    answer: "Стоимость зависит от формата и длительности сопровождения. Разовая консультация и долгосрочное сопровождение — уточняйте при записи. Первая консультация для оценки ситуации доступна по запросу.",
  },
  {
    question: "Можно ли получать консультации полностью онлайн?",
    answer: "Да. Большинство консультаций и сопровождение проходят онлайн по всей России без потери качества. Формат — Zoom, Telegram, телефон.",
  },
  {
    question: "Какой опыт у финансового советника?",
    answer: "8+ лет работы в банковском секторе: Тинькофф, ВТБ, Сбербанк, ПСБ, МКБ. 122-е место из 26 054 в конкурсе «Лучший частный инвестор России 2021». NAUFOR уровень 7.",
  },
  {
    question: "Как начать работу с финансовым советником?",
    answer: "Напишите в Telegram (@radun88), позвоните +7 967 003 30 20 или отправьте email на s.svistunov@hotmail.com. Обсудим цели, текущую ситуацию и формат взаимодействия.",
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
  headline: "Финансовый советник Сергей Свистунов | Инвестиции и капитал",
  description: "Профессиональные финансовые консультации и управление инвестициями от Сергея Свистунова. 8+ лет опыта. Индивидуальные стратегии приумножения капитала.",
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
    "@id": SITE_URL,
  },
};

export default function Home() {
  const currentDate = new Date().toISOString().split("T")[0];
  const dynamicArticleJsonLd = {
    ...articleJsonLd,
    dateModified: currentDate,
  };

  return (
    <>
      <Header />
      <main>
        <article>
        <Hero />
        <InteractiveCalculator />
        <LatestArticles />
        <AeoExpertHub />
        <section style={{ padding: "clamp(2rem, 4vw, 3rem) clamp(0.75rem, 2vw, 1.5rem) 0" }}>
          <div className="container">
            <h2 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>Часто задаваемые вопросы</h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {faqItems.map((faq) => (
                <div key={faq.question} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                  <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.question}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchemas.dataset) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchemas.termSet) }}
      />
      <Footer />
      <FloatingContact />
    </>
  );
}
