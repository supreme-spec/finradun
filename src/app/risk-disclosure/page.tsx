import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Риски инвестирования и дисклеймер | FinRadun",
  description: "Важная информация о рисках инвестирования, ограничениях ответственности и характере предоставляемых материалов. Ознакомьтесь перед принятием решений.",
  keywords: "риски инвестирования, дисклеймер, ограничение ответственности, финансовые риски",
  alternates: { canonical: "/risk-disclosure" },
};

const faqItems = [
  {
    question: "Материалы сайта являются инвестиционной рекомендацией?",
    answer: "Нет. Все материалы носят исключительно информационный характер и не являются индивидуальной инвестиционной рекомендацией.",
  },
  {
    question: "Могу ли я потерять деньги, следуя материалам сайта?",
    answer: "Инвестиции связаны с риском. Вы можете потерять часть или весь вложенный капитал. Решения принимаются пользователем самостоятельно.",
  },
  {
    question: "Кто несёт ответственность за решения, принятые на основе сайта?",
    answer: "Ответственность лежит исключительно на пользователе. Рекомендуется консультация с квалифицированным специалистом перед принятием решений.",
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
  headline: "Риски инвестирования и дисклеймер | FinRadun",
  description: "Важная информация о рисках инвестирования, ограничениях ответственности и характере предоставляемых материалов. Ознакомьтесь перед принятием решений.",
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
    "@id": `${SITE_URL}/risk-disclosure`,
  },
};

const sources = [
  { name: "ФЗ-152 «О персональных данных»", url: "http://pravo.gov.ru/proxy/ips/?docbody=&nd=102102772" },
  { name: "ЦБ РФ — инвесторам", url: "https://cbr.ru/investor/" },
  { name: "Московская биржа — образование", url: "https://www.moex.ru/education/" },
  { name: "ФСФР — предупреждения", url: "https://www.cfin.ru/regulators/fss/" },
];

export default function RiskDisclosurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Документы и соответствие</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "2rem" }}>
            Риски и дисклеймер
          </h1>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "0.98rem" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>1. Информационный характер</h2>
            <p style={{ marginBottom: "1rem" }}>
              Все материалы сайта носят исключительно информационный и образовательный характер и не являются
              индивидуальной инвестиционной рекомендацией, предложением или побуждением к совершению сделок
              с финансовыми инструментами.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>2. Риски</h2>
            <p style={{ marginBottom: "1rem" }}>
              Инвестиции связаны с риском. Стоимость активов может как расти, так и снижаться. Прошлые результаты
              не гарантируют доходности в будущем. Вы можете потерять часть или весь вложенный капитал.
              До принятия решений оцените свою финансовую ситуацию, горизонт инвестирования и допустимый уровень риска.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>3. Отсутствие гарантий</h2>
            <p style={{ marginBottom: "1rem" }}>
              Администрация сайта не гарантирует точность, полноту и актуальность размещённой информации.
              Рыночные данные могут меняться. Решения принимаются пользователем самостоятельно и на свой риск.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>4. Ограничение ответственности</h2>
            <p style={{ marginBottom: "1rem" }}>
              Администрация не несёт ответственности за возможные убытки, возникшие в результате использования
              информации сайта. Инвестиционные решения должны приниматься на основе собственного анализа
              или после консультации с квалифицированным специалистом.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>5. Персональные данные</h2>
            <p style={{ marginBottom: "1rem" }}>
              Обработка персональных данных регулируется Политикой конфиденциальности и требованиями 152-ФЗ.
            </p>

          <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
            Редакция от 4 июля 2026 года
          </p>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Источники и ссылки</h2>
          <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", lineHeight: 2 }}>
            {sources.map((src) => (
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
