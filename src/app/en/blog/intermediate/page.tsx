import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Intermediate Investing Strategies | Sergey Svistunov",
  description: "Advanced investment methods for experienced investors. Learn portfolio optimization, risk management, asset allocation, and market analysis for wealth growth.",
  alternates: {
    canonical: "/en/blog/intermediate",
  },
  openGraph: {
    title: "Intermediate Investing Strategies | Sergey Svistunov",
    description: "Advanced investment methods for experienced investors. Learn portfolio optimization, risk management, asset allocation, and market analysis for wealth growth.",
    url: `${SITE_URL}/en/blog/intermediate`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Intermediate Investing" }],
  },
};

const articles = [
  { title: "Taxation on Dividends and Coupons", desc: "Key details of taxing investment dividends and coupon bonds.", img: "18.webp", link: "/en/blog/dividendy-i-kupony-nalogi" },
  { title: "How to Choose a Broker & Asset Manager", desc: "Reviewing key parameters: licenses, commissions, reputation, and strategies.", img: "19.webp", link: "/en/blog/kak-vybrat-brokera" },
  { title: "Methods for Evaluating Stock Value", desc: "How to discover high-potential companies with healthy growth ratios.", img: "20.webp", link: "/en/blog/stock_evaluation_methods" },
  { title: "Core Investment Strategies", desc: "Long-term compounding versus short-term tactical approaches.", img: "21.webp", link: "/en/blog/strategii-investirovaniya" },
  { title: "Protecting Wealth from Inflation", desc: "Where to allocate liquid funds during inflationary pressure and economic shifts.", img: "22.webp", link: "/en/blog/zashchita-ot-inflyacii" },
  { title: "Real Estate & Commercial Investments", desc: "Navigating risks and opportunities in physical housing and office spaces.", img: "23.webp", link: "/en/blog/property_investment_guide" },
  { title: "Comparing Mutual Funds and ETFs", desc: "The pros and cons of passive ETFs vs. active mutual funds.", img: "24.webp", link: "/en/blog/sravnenie-pifov-i-etf-fondov" },
  { title: "Risk Management Systems", desc: "Methods to protect and hedge your investment portfolio's core capital.", img: "25.webp", link: "/en/blog/upravlenie-riskami-investicionnogo-portfelya" },
  { title: "Harry Markowitz Portfolio Theory", desc: "Classic modern portfolio theory (MPT) explained simply.", img: "26.webp", link: "/en/blog/portfelnaya-teoriya-markovica-infografika" },
  { title: "Probability & Risk Analysis", desc: "Evaluating financial asset yields through probability and mathematical expectations.", img: "27.webp", link: "/en/blog/veroyatnostnyj-analiz-investicionnyh-aktivov" },
];

const faqItems = [
  {
    question: "How to assess portfolio risk?",
    answer: "Utilize metrics such as standard deviation (volatility), the Sharpe ratio, and asset correlations. Increased diversification minimizes non-systematic risk.",
  },
  {
    question: "What is rebalancing?",
    answer: "Rebalancing is restoring the original target weights of assets in your portfolio. Usually done quarterly or when deviations exceed 5–10%.",
  },
  {
    question: "How to optimize taxes on investments?",
    answer: "Utilize tax-deferred accounts, long-term capital gains tax exemptions, and structural offsets to reduce your total tax burden.",
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
  headline: "Intermediate Investing Strategies",
  description: "Advanced investment methods for experienced investors.",
  datePublished: "2024-06-01",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "Sergey Svistunov",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "RADUN",
    logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/en/blog/intermediate`,
  },
};

export default function IntermediateBlogEn() {
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
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Journal</div>
            <h1 className="section-title">Intermediate Level</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
              Deep dive into tactical and strategic asset allocation models, tax wrappers, and advanced risk analysis methodologies.
            </p>

            <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Strategies for Experienced Investors</h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
              {articles.map((art, idx) => (
                <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", overflow: "hidden", padding: 0 }}>
                  <div style={{ height: "200px", position: "relative" }}>
                    <Image src={`/images/folio/${art.img}`} alt={art.title} fill style={{ objectFit: "cover" }} referrerPolicy="no-referrer" />
                  </div>
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{ color: "var(--text-primary)", fontSize: "1.2rem", marginBottom: "1rem" }}>{art.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem", flexGrow: 1 }}>{art.desc}</p>
                    <a href={art.link} className="btn btn-outline" style={{ alignSelf: "flex-start", fontSize: "0.9rem", padding: "0.5rem 1rem" }}>Read Article</a>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
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
      <Footer lang="en" />
    </>
  );
}
