import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";
import ContactForm from "@/components/ContactForm";

const speakableJsonLd = generatePageSpeakableSchema('contacts', '/contacts');

export const metadata = {
  title: "Контакты финансового советника Сергея Свистунова | Связь",
  description: "Свяжитесь со мной для получения независимой финансовой консультации. Телефон, email и мессенджеры для записи на встречу по управлению вашим капиталом.",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: "Контакты финансового советника Сергея Свистунова",
    description: "Свяжитесь со мной для получения независимой финансовой консультации. Телефон, email и мессенджеры для записи на встречу по управлению вашим капиталом.",
    url: `${SITE_URL}/contacts`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Контакты Сергея Свистунова" }],
  },
};

const faqItems = [
  {
    question: "Как записаться на консультацию?",
    answer: "Напишите в Telegram (@radun88), позвоните +7 967 003 30 20 или отправьте email на s.svistunov@hotmail.com.",
  },
  {
    question: "Возможны ли онлайн-консультации?",
    answer: "Да, консультации доступны онлайн по всей России и миру через Zoom, Telegram или телефон.",
  },
  {
    question: "Где находится офис?",
    answer: "Москва, Российская Федерация. Основной формат работы — онлайн-сопровождение.",
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
  headline: "Контакты финансового советника Сергея Свистунова | Связь",
  description: "Свяжитесь со мной для получения независимой финансовой консультации. Телефон, email и мессенджеры для записи на встречу по управлению вашим капиталом.",
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
    "@id": `${SITE_URL}/contacts`,
  },
};

export default function ContactsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "clamp(70px, 10vw, 100px)", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "clamp(2rem, 4vw, 4rem) clamp(0.75rem, 2vw, 1.5rem)" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Связь со мной</div>
          <h1 className="section-title">Контакты</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "1.5rem", fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}>Способы связи с финансовым советником</h2>

          <div style={{ marginTop: "clamp(1.5rem, 3vw, 3rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(1rem, 2vw, 2rem)" }}>
             
            <div className="glass-card" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>📱</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Телефон и Мессенджеры</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>Всегда на связи для оперативных вопросов</p>
              <a href="tel:+79670033020" className="gold-text" style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", fontWeight: "bold", textDecoration: "none" }}>+7 967 003 30 20</a>
              <div style={{ marginTop: "clamp(1rem, 2vw, 1.5rem)", display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)" }}>Telegram</a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>✉️</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Email</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>Для официальных запросов и предложений</p>
              <a href="mailto:s.svistunov@hotmail.com" className="gold-text" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: "bold", textDecoration: "none" }}>s.svistunov@hotmail.com</a>
            </div>

            <div className="glass-card" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>📍</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Локация</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.85rem, 2vw, 0.95rem)" }}>Москва, Российская Федерация</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>(Возможны онлайн-консультации по всему миру)</p>
            </div>

          </div>

          <ContactForm />

          <h2 style={{ marginTop: "clamp(2rem, 4vw, 4rem)", color: "var(--text-primary)", marginBottom: "1rem" }}>Часто задаваемые вопросы</h2>
          <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
            {faqItems.map((faq) => (
              <div key={faq.question} className="glass-card" style={{ padding: "clamp(1rem, 2.5vw, 1.25rem) clamp(1rem, 2.5vw, 1.5rem)" }}>
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
