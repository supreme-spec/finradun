import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { cityRouteSlug, getCityCardDescription, rawCities } from "./data";

export const metadata: Metadata = {
  title: "Города России | Финансовые консультации в регионах РФ",
  description: "Получите персональные инвестиционные решения и финансовые консультации в вашем городе. Охват всей России: Москва, СПб и еще 350+ городов страны.",
  openGraph: {
    title: "География финансовых консультаций | Сергей Свистунов",
    description: "Получите персональные инвестиционные решения и финансовые консультации в вашем городе. Охват всей России: Москва, СПб и еще 350+ городов страны.",
    url: `${SITE_URL}/cities`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Финансовые консультации в регионах России" }],
  },
  alternates: {
    canonical: "/cities",
  },
};

const faqItems = [
  {
    question: "В каких городах доступны консультации?",
    answer: "Финансовые консультации доступны онлайн в более чем 350 городах России: Москва, Санкт-Петербург, Екатеринбург, Казань и многие другие.",
  },
  {
    question: "Как получить консультацию в моём городе?",
    answer: "Выберите ваш город на странице, затем оставьте заявку через контакты или Telegram. Консультация проходит онлайн независимо от локации.",
  },
  {
    question: "Есть ли разница в услугах по городам?",
    answer: "Нет, качество и состав услуг одинаковы для всех городов. Различие — в региональных налоговых нюансах и инвестиционных возможностях.",
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
  headline: "Города России | Финансовые консультации в регионах РФ",
  description: "Получите персональные инвестиционные решения и финансовые консультации в вашем городе. Охват всей России: Москва, СПб и еще 350+ городов страны.",
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
    "@id": `${SITE_URL}/cities`,
  },
};

export default function CitiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>География работы</div>
          <h1 className="section-title">Города России</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Выберите город для консультации</h2>
          <p className="section-subtitle" style={{ maxWidth: 820 }}>
            Выберите город, чтобы перейти на отдельную страницу с услугами финансового консультирования
            и рекомендациями по инвестиционной стратегии с учетом региональной специфики.
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {rawCities.map((city) => (
              <Link
                key={city}
                href={`/cities/${cityRouteSlug(city)}`}
                className="glass-card"
                style={{ padding: "1.2rem 1.4rem", textDecoration: "none" }}
              >
                <div className="gold-text" style={{ fontWeight: 600, marginBottom: ".35rem" }}>{city}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: ".95rem" }}>
                  {getCityCardDescription(city)}
                </div>
              </Link>
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
