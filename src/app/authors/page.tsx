import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { authors } from "@/data/authors";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Авторы | Финансовый советник Сергей Свистунов",
  description: "Эксперты по инвестициям и управлению капиталом FinRadun: биографии, регалии, опыт работы на финансовых рынках и профили в профессиональных сообществах.",
  keywords: "авторы, финансовый советник, инвестиции, Сергей Свистунов, НАУФОР, эксперты",
  alternates: { canonical: "/authors" },
};

const faqItems = [
  {
    question: "Кто готовит материалы на FinRadun?",
    answer: "Практикующие финансовые советники с подтверждённым опытом работы на российском фондовом рынке и regulatorной квалификацией НАУФОР.",
  },
  {
    question: "Как проверить квалификацию авторов?",
    answer: "Все авторы имеют профильное экономическое образование, сертификаты НАУФОР и опыт сопровождения реальных портфелей.",
  },
  {
    question: "Можно ли записаться на консультацию к автору статьи?",
    answer: "Да. На странице эксперта указаны контакты для записи на индивидуальную консультацию.",
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
  headline: "Авторы | Финансовый советник Сергей Свистунов",
  description: "Эксперты по инвестициям и управлению капиталом FinRadun: биографии, регалии, опыт работы на финансовых рынках и профили в профессиональных сообществах.",
  datePublished: "2024-06-01",
  dateModified: "2026-07-24",
  author: {
    "@type": "Person",
    name: "Сергей Свистунов",
    url: `${SITE_URL}/authors/sergey-svistunov`,
  },
  publisher: {
    "@type": "Organization",
    "name": "RADUN",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/authors`,
  },
};

export default function AuthorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Экспертная команда</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Авторы и эксперты
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "3rem", fontSize: "1.05rem" }}>
            Материалы FinRadun готовят практикующие финансовые советники с подтверждённым опытом работы
            на российском фондовом рынке и регуляторной квалификацией НАУФОР.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {authors.map((a) => (
              <Link key={a.slug} href={`/authors/${a.slug}`} className="glass-card" style={{ display: "block", textDecoration: "none", padding: "2rem", color: "inherit" }}>
                <div style={{ position: "relative", width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", marginBottom: "1.25rem", border: "2px solid var(--gold)" }}>
                  <Image src={a.photo} alt={`${a.name} — ${a.role}`} fill style={{ objectFit: "cover" }} />
                </div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--gold)", marginBottom: "0.5rem" }}>{a.name}</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{a.role}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{a.bio}</p>
              </Link>
            ))}
          </div>
        </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
