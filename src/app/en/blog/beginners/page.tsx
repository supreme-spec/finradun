import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Financial Literacy for Beginners | Sergey Svistunov",
  description: "Core principles of personal finance and investing explained in simple terms. Learn how to start investing, build a portfolio, and manage money from scratch.",
  alternates: {
    canonical: "/en/blog/beginners",
  },
  openGraph: {
    title: "Financial Literacy for Beginners | Sergey Svistunov",
    description: "Core principles of personal finance and investing explained in simple terms. Learn how to start investing, build a portfolio, and manage money from scratch.",
    url: `${SITE_URL}/en/blog/beginners`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Financial Literacy for Beginners" }],
  },
};

const articles = [
  { title: "Foundations of Financial Literacy", desc: "Discover key terms and concepts in the financial world. Clear understanding lets you manage your money confidently.", img: "5.webp", link: "/en/blog/financial-literacy" },
  { title: "Why Invest and Why Savings Are Not Enough", desc: "Why simple savings cannot guarantee long-term wealth growth. Learn how inflation affects cash value.", img: "6.webp", link: "/en/blog/invest" },
  { title: "The Line Between Investing and Speculation", desc: "How to define the difference between a sustainable investment plan and gambling in the stock market.", img: "7.webp", link: "/en/blog/investments_vs_speculations" },
  { title: "What is Portfolio Diversification", desc: "Learn what diversification is and why it remains the ultimate protection for novice investors.", img: "8.webp", link: "/en/blog/portfel-divers" },
  { title: "Common Pitfalls of Beginning Investors", desc: "Typical mistakes made by newcomers in the stock market and how you can actively avoid them.", img: "9.webp", link: "/en/blog/oshibki-nachinayushih-investorov" },
  { title: "Simple Ways to Boost Your Yields", desc: "Effective, straightforward mechanisms to safely increase the return rate of your active capital.", img: "10.webp", link: "/en/blog/investicii-s-vysokoy-dohodnostyu" },
  { title: "Where to Find Trustworthy Instruments", desc: "Guide to identifying safe financial assets and professional tips for beginners starting out.", img: "14.webp", link: "/en/blog/investment_navigator" },
  { title: "Your First Investment Portfolio", desc: "Your first investment portfolio setup: what key assets should you buy first?", img: "15.webp", link: "/en/blog/first-investment-portfolio" },
  { title: "What Taxes Do Investors Pay", desc: "Overview of tax rules on dividends and bond interest for retail stock market players.", img: "16.webp", link: "/en/blog/dividendy-i-kupony-nalogi" },
  { title: "Cognitive Pitfalls of Investing", desc: "Financial psychology: why emotions are the greatest barrier to higher earnings and capital.", img: "17.webp", link: "/en/blog/emocionalnye-lovushki-investora" },
];

const faqItems = [
  {
    question: "Where to start investing?",
    answer: "Start by learning core concepts: risk, reward, diversification. Then specify your financial goals and build a simple portfolio using bonds and low-cost index ETFs.",
  },
  {
    question: "How much money do I need to start?",
    answer: "You can begin with any comfortable amount. The key is regular contributions and strict discipline. Modern brokers allow purchasing fractional shares.",
  },
  {
    question: "What mistakes do beginners make most?",
    answer: "Emotional trading, lack of diversification, attempting to time the market, and neglecting a liquid emergency buffer.",
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
  headline: "Financial Literacy for Beginners",
  description: "Core principles of personal finance and investing explained in simple terms.",
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
    "@id": `${SITE_URL}/en/blog/beginners`,
  },
};

export default function BeginnersBlogEn() {
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
            <h1 className="section-title">For Beginners</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
              A curated collection of insightful articles and professional advice to help you learn the fundamentals of finance and begin investing with confidence.
            </p>

            <h2 style={{ marginTop: "2rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Foundations of Financial Literacy</h2>
            
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
