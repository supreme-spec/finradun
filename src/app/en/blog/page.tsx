import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Investment & Personal Wealth Blog | Sergey Svistunov",
  description: "Insightful articles and investment strategies on the stock market from independent financial advisor Sergey Svistunov. Levels for beginners to professionals.",
  openGraph: {
    title: "Investment & Personal Wealth Blog | Sergey Svistunov",
    description: "Insightful articles and investment strategies on the stock market. Levels for beginners to professionals.",
    url: `${SITE_URL}/en/blog`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Investment Blog" }],
  },
  alternates: {
    canonical: "/en/blog",
  },
};

const faqItems = [
  {
    question: "Who is the blog written for?",
    answer: "The blog contains materials across three distinct levels: Beginner (basics of investing), Intermediate (ETFs, tax optimization, risk management), and Professional (portfolio theory, quantitative analysis).",
  },
  {
    question: "Which level should I choose?",
    answer: "If you are just starting — begin with 'Beginner'. If you are already investing — 'Intermediate'. If you manage large capital — 'Professional'.",
  },
  {
    question: "Are the articles updated?",
    answer: "Yes, the blog is regularly updated with new materials, keeping up with changing market conditions and regulatory updates.",
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
  headline: "Investment & Personal Wealth Blog | Sergey Svistunov",
  description: "Insightful articles and investment strategies on the stock market from independent financial advisor Sergey Svistunov.",
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
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/en/blog`,
  },
};

const levels = [
  {
    title: "Level 1: Beginner",
    desc: "Essential details: where to start, how to construct your first portfolio, and why solid financial literacy is paramount.",
    link: "/en/blog/beginners"
  },
  {
    title: "Level 2: Intermediate",
    desc: "Advanced methods: investing in diversified ETFs, mutual funds, tax optimization, and evaluating business risks.",
    link: "/en/blog/intermediate"
  },
  {
    title: "Level 3: Professional",
    desc: "Deep analytics: portfolio management theory, cognitive biases, and macroeconomic briefs.",
    link: "/en/blog/professional"
  }
];

export default function BlogPageEn() {
  const currentDate = new Date().toISOString().split("T")[0];
  const dynamicArticleJsonLd = {
    ...articleJsonLd,
    dateModified: currentDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicArticleJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
          <section className="container" style={{ padding: "4rem 1.5rem" }}>
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Financial Education</div>
            <h1 className="section-title">Blog & Educational Insights</h1>
            <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem" }}>Levels of Wealth Education</h2>
            
            <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
              {levels.map((lvl) => (
                <div key={lvl.title} className="glass-card" style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <h3 style={{ color: "var(--gold)", fontSize: "1.5rem" }}>{lvl.title}</h3>
                  <p style={{ color: "var(--text-secondary)", flexGrow: 1, lineHeight: "1.6" }}>{lvl.desc}</p>
                  <div style={{ marginTop: "1rem" }}>
                    <Link href={lvl.link} className="btn btn-outline" style={{ display: "inline-block" }}>Explore Category</Link>
                  </div>
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
