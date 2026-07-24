import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Advanced Investing & Portfolio Theory | Sergey Svistunov",
  description: "Expert insights for institutional and professional investors. Complex financial instruments, hedging, option overlays, and macroeconomic analysis.",
  alternates: {
    canonical: "/en/blog/professional",
  },
  openGraph: {
    title: "Advanced Investing & Portfolio Theory | Sergey Svistunov",
    description: "Expert insights for institutional and professional investors. Complex financial instruments, hedging, option overlays, and macroeconomic analysis.",
    url: `${SITE_URL}/en/blog/professional`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Professional Investing" }],
  },
};

const articles = [
  { title: "Technical Analysis of Stocks", desc: "Learn how to spot trends, recognize chart patterns, and utilize indicators for intelligent trading decisions.", img: "28.webp", link: "/en/blog/tehnicheskiy-analiz-akciy-infografika" },
  { title: "Graham & Buffett Comparative Strategy", desc: "An in-depth analysis comparing Benjamin Graham's value approach with Warren Buffett's quality growth focus.", img: "29.webp", link: "/en/blog/greham-baffet-sravnitelnyj-analiz" },
  { title: "Monte Carlo Investment Models", desc: "Optimizing investment results and forecasting success rates using Monte Carlo simulations.", img: "30.webp", link: "/en/blog/monte-karlo-investicii" },
  { title: "Real Estate & Commercial Asset Analysis", desc: "The role of fundamental evaluation in property markets, commercial leases, and real estate indices.", img: "31.webp", link: "/en/blog/analiz-rynka-nedvizhimosti" },
  { title: "International Institutional Fund Flows", desc: "Evaluating how global investment funds affect emerging economies and capital markets.", img: "32.webp", link: "/en/blog/international_funds_influence_on_russian_economy" },
  { title: "Advantages of Alternative Asset Classes", desc: "Deep dive into alternative assets: hedge funds, physical commodities, and gold.", img: "33.webp", link: "/en/blog/alternative-assets-guide" },
  { title: "Advanced Tax Optimization Schemas", desc: "High-net-worth tax credits, offshore/onshore vehicles, and legal reduction strategies for experts.", img: "34.webp", link: "/en/blog/investment_tax_optimization" },
  { title: "Data-Driven & Quantitative Investing", desc: "Leveraging algorithmic tools, mathematical models, and quantitative factors in capital management.", img: "35.webp", link: "/en/blog/data-driven-investment" },
  { title: "Critique of the Efficient Market Hypothesis", desc: "A critical evaluation of the efficient market theory (EMH) and its behavioral finance exceptions.", img: "36.webp", link: "/en/blog/emh_critique" },
  { title: "Sustainable Passive Income Portfolios", desc: "Building resilient passive cash flows through stable corporate yields and debt instruments.", img: "37.webp", link: "/en/blog/passive_income_strategies" },
];

const faqItems = [
  {
    question: "What strategies are suitable for ultra-high net worth capital?",
    answer: "Hedging strategies, systematic factor investing, and Markowitz portfolio frontier optimization are highly effective for large portfolios.",
  },
  {
    question: "How can I deploy option overlay strategies?",
    answer: "Options help hedge downside risk or generate extra yield. Popular techniques include selling covered calls, protective puts, and long/short straddles.",
  },
  {
    question: "What is factor-based investing?",
    answer: "An investment approach that selects assets based on systematic drivers of returns, such as size, value, momentum, volatility, and financial quality.",
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
  headline: "Advanced Investing & Portfolio Theory",
  description: "Expert insights for institutional and professional investors.",
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
    "@id": `${SITE_URL}/en/blog/professional`,
  },
};

export default function ProfessionalBlogEn() {
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
            <h1 className="section-title">For Experts</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
              Exclusive, research-backed materials for institutional allocators: modern factor overlays, numerical Monte Carlo methods, and advanced portfolio hedging models.
            </p>

            <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Expert Market Analysis</h2>
            
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
