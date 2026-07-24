import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About | Sergey Svistunov — Financial Advisor",
  description: "Who I am and how I work: 8+ years on financial markets, NAUFOR level 7 certification, independent advisory principles and capital management approach.",
  keywords: "about, financial advisor, Sergey Svistunov, NAUFOR, investments, wealth management",
  alternates: { canonical: "/en/about" },
};

const faqItems = [
  {
    question: "What makes an independent financial advisor different?",
    answer: "It means every recommendation is built around your goals, not around selling a specific bank or insurance product. That removes conflicts of interest.",
  },
  {
    question: "What are your qualifications?",
    answer: "NAUFOR level 7 certification, 8+ years in banking and capital management, 122nd place in the 2021 Best Private Investor of Russia contest (Moscow Exchange).",
  },
  {
    question: "How does the first meeting work?",
    answer: "We review your current situation, goals and constraints, then produce a clear action plan and a format for ongoing support.",
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
  headline: "About | Sergey Svistunov — Financial Advisor",
  description: "Who I am and how I work: 8+ years on financial markets, NAUFOR level 7 certification, independent advisory principles and capital management approach.",
  datePublished: "2024-06-01",
  dateModified: "2026-07-24",
  author: {
    "@type": "Person",
    name: "Sergey Svistunov",
    url: `${SITE_URL}/en/authors/sergey-svistunov`,
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
    "@id": `${SITE_URL}/en/about`,
  },
};

const externalSources = [
  { name: "Moscow Exchange", url: "https://www.moex.com/en/" },
  { name: "NAUFOR", url: "https://www.naufor.ru/en" },
  { name: "Central Bank of Russia", url: "https://cbr.ru/en/" },
  { name: "FINMARK", url: "https://www.finmarket.ru/" },
];

export default function AboutPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>About</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Independent Financial Advisor
            </h1>

            <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                My name is Sergey Svistunov. For over 8 years I have worked on the Russian financial market —
                at Tinkoff, VTB, Sberbank, PSB and MKB, where I served VIP clients, managed portfolios and
                provided investment advisory. In 2021 I took 122nd place out of 26,054 participants in the
                «Best Private Investor of Russia» contest by the Moscow Exchange.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                I follow the independent advisor model: my recommendation is always aimed at the client&apos;s
                interest, not at selling a specific bank product. This removes the conflict of interest and allows
                building long-term capital management strategies.
              </p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>How I work</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>Audit of the current portfolio and financial situation.</li>
                <li style={{ marginBottom: "0.5rem" }}>Building a personal financial plan tailored to your goals and risk profile.</li>
                <li style={{ marginBottom: "0.5rem" }}>Forming a balanced investment strategy and ongoing support.</li>
                <li style={{ marginBottom: "0.5rem" }}>Regular reporting and portfolio rebalancing with the market.</li>
              </ul>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Qualifications</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>NAUFOR — Financial Consultant, qualification level 7.</li>
                <li style={{ marginBottom: "0.5rem" }}>Economics degree, specialization in Finance and Credit.</li>
                <li style={{ marginBottom: "0.5rem" }}>122nd place out of 26,054 in the LCHI 2021 (Moscow Exchange).</li>
              </ul>
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/en/contacts" className="btn btn-primary">Get in touch</Link>
              <Link href="/en/authors/sergey-svistunov" className="btn btn-outline">More about the author</Link>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Sources</h2>
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
      <Footer lang="en" />
    </>
  );
}
