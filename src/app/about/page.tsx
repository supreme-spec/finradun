import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Обо мне | Сергей Свистунов — финансовый советник",
  description: "Кто я и как я работаю: 8+ лет на финансовых рынках, квалификация НАУФОР 7 уровня, принципы независимого консультирования и подход к управлению капиталом.",
  keywords: "обо мне, финансовый советник, Сергей Свистунов, НАУФОР, инвестиции, управление капиталом",
  alternates: { canonical: "/about" },
};

const faqItems = [
  {
    question: "Что значит независимый финансовый советник?",
    answer: "Это значит, что мои рекомендации строятся исключительно вокруг ваших целей и интересов, без связи с продажей продуктов отдельного банка или страховой компании.",
  },
  {
    question: "С какими квалификациями вы работаете?",
    answer: "Сертификат НАУФОР 7 уровня, 8+ лет практики в банках и управлении капиталом, 122-е место в ЛЧИ-2021 Московской биржи.",
  },
  {
    question: "Как проходит первая встреча?",
    answer: "Это аудит текущей ситуации, целей и ограничений, после которого формируется понятный план действий и формат дальнейшего сопровождения.",
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
  headline: "Обо мне | Сергей Свистунов — финансовый советник",
  description: "Кто я и как я работаю: 8+ лет на финансовых рынках, квалификация НАУФОР 7 уровня, принципы независимого консультирования и подход к управлению капиталом.",
  datePublished: "2024-06-01",
  dateModified: "2026-07-24",
  author: {
    "@type": "Person",
    name: "Сергей Свистунов",
    url: `${SITE_URL}/authors/sergey-svistunov`,
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
    "@id": `${SITE_URL}/about`,
  },
};

const externalSources = [
  { name: "Московская биржа", url: "https://www.moex.com/ru/" },
  { name: "НАУФОР", url: "https://www.naufor.ru/" },
  { name: "Центробанк РФ", url: "https://cbr.ru/" },
  { name: "ФСФР России", url: "https://www.cfin.ru/regulators/fss/" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "clamp(70px, 10vw, 140px)", minHeight: "80vh", paddingBottom: "clamp(2rem, 4vw, 4rem)" }}>
        <article>
        <section className="container" style={{ padding: "0 clamp(0.75rem, 2vw, 1.5rem)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Обо мне</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Независимый финансовый советник
            </h1>

            <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Меня зовут Сергей Свистунов. Более 8 лет я работаю на российском финансовом рынке —
                в Тинькофф, ВТБ, Сбербанке, ПСБ и МКБ, где сопровождал VIP-клиентов, управлял портфелями
                и давал инвестиционные консультации. В 2021 году занял 122-е место из 26054 участников
                в конкурсе «Лучший частный инвестор России» Московской биржи.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Я придерживаюсь модели независимого советника: моя рекомендация всегда направлена на интересы
                клиента, а не на продажу конкретного продукта банка. Это исключает конфликт интересов и позволяет
                строить долгосрочные стратегии управления капиталом.
              </p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Подход к работе</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>Аудит текущего портфеля и финансовой ситуации.</li>
                <li style={{ marginBottom: "0.5rem" }}>Построение личного финансового плана (ЛФП) под ваши цели и риск-профиль.</li>
                <li style={{ marginBottom: "0.5rem" }}>Формирование сбалансированной стратегии инвестиций и её сопровождение.</li>
                <li style={{ marginBottom: "0.5rem" }}>Регулярная отчётность и корректировка портфеля по рынку.</li>
              </ul>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Квалификация</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>НАУФОР — Финансовый консультант, 7 уровень квалификации.</li>
                <li style={{ marginBottom: "0.5rem" }}>Экономическое образование, специализация «Финансы и кредит».</li>
                <li style={{ marginBottom: "0.5rem" }}>122-е место среди 26054 участников в ЛЧИ 2021 (Московская биржа).</li>
              </ul>
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contacts" className="btn btn-primary">Связаться</Link>
              <Link href="/authors/sergey-svistunov" className="btn btn-outline">Подробнее об авторе</Link>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Источники и ссылки</h2>
            <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", lineHeight: 2 }}>
              {externalSources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>{src.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
