import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Investment Risks & Disclaimer | FinRadun",
  description: "Important information about investment risks, limitations of liability and the nature of the materials provided. Review before making investment decisions.",
  keywords: "investment risks, disclaimer, limitation of liability, financial risks",
  alternates: { canonical: "/en/risk-disclosure" },
};

const faqItems = [
  {
    question: "Are website materials investment advice?",
    answer: "No. All materials are for informational purposes only and do not constitute individual investment recommendations.",
  },
  {
    question: "Can I lose money based on the website content?",
    answer: "Investing involves risk. You may lose part or all of invested capital. Decisions are made by the user independently.",
  },
  {
    question: "Who is responsible for decisions made based on the site?",
    answer: "The user bears full responsibility. We recommend consulting a qualified professional before making any investment decisions.",
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
  headline: "Investment Risks & Disclaimer | FinRadun",
  description: "Important information about investment risks, limitations of liability and the nature of the materials provided. Review before making investment decisions.",
  datePublished: "2024-06-01",
  dateModified: "2026-07-24",
  author: {
    "@type": "Person",
    name: "Sergey Svistunov",
    url: `${SITE_URL}/en/authors/sergey-svistunov`,
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
    "@id": `${SITE_URL}/en/risk-disclosure`,
  },
};

const sources = [
  { name: "Russian Federal Law 152-FZ", url: "http://pravo.gov.ru/proxy/ips/?docbody=&nd=102102772" },
  { name: "Central Bank of Russia", url: "https://cbr.ru/en/" },
  { name: "Moscow Exchange Education", url: "https://www.moex.com/en/education/" },
  { name: "FINRA Investor Education", url: "https://www.finra.org/investors" },
];

export default function RiskDisclosurePageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Legal & Disclosures</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "2rem" }}>
            Risk Disclosure
          </h1>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "0.98rem" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>1. Informational purpose</h2>
            <p style={{ marginBottom: "1rem" }}>
              All website materials are provided for informational and educational purposes only and do not
              constitute individual investment advice, an offer or a solicitation to enter into transactions
              with financial instruments.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>2. Risks</h2>
            <p style={{ marginBottom: "1rem" }}>
              Investing involves risk. Asset values may rise or fall. Past performance does not guarantee future
              results. You may lose part or all of your invested capital. Before making decisions, assess your
              financial situation, investment horizon and acceptable risk level.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>3. No warranties</h2>
            <p style={{ marginBottom: "1rem" }}>
              The site administration does not guarantee the accuracy, completeness or relevance of the information
              provided. Market data may change. Decisions are made by the user independently and at their own risk.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>4. Limitation of liability</h2>
            <p style={{ marginBottom: "1rem" }}>
              The administration is not liable for any losses arising from the use of the website information.
              Investment decisions should be based on your own analysis or after consulting a qualified professional.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>5. Personal data</h2>
            <p style={{ marginBottom: "1rem" }}>
              Personal data processing is governed by the Privacy Policy and the requirements of 152-FZ.
            </p>

            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
              Last updated: July 4, 2026
            </p>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Sources</h2>
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
      <Footer lang="en" />
    </>
  );
}
