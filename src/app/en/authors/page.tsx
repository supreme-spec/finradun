import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { authors } from "@/data/authors";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Authors | Financial Advisor Sergey Svistunov",
  description: "FinRadun investment and wealth management experts: biographies, credentials, capital market experience and professional community profiles. From FinRadun.",
  keywords: "authors, financial advisor, investments, Sergey Svistunov, NAUFOR, experts",
  alternates: { canonical: "/en/authors" },
};

const faqItems = [
  {
    question: "Who prepares FinRadun materials?",
    answer: "Practising financial advisors with proven experience on the Russian stock market and NAUFOR regulatory qualification.",
  },
  {
    question: "How can I verify author qualifications?",
    answer: "All authors hold relevant economics degrees, NAUFOR certificates and have experience working with real portfolios.",
  },
  {
    question: "Can I book a consultation with an article author?",
    answer: "Yes. Contact details and booking options are listed on each expert profile page.",
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
  headline: "Authors | Financial Advisor Sergey Svistunov",
  description: "FinRadun investment and wealth management experts: biographies, credentials, capital market experience and professional community profiles from FinRadun.",
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
    "@id": `${SITE_URL}/en/authors`,
  },
};

export default function AuthorsPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Expert team</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Authors & Experts
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "3rem", fontSize: "1.05rem" }}>
            FinRadun materials are prepared by practising financial advisors with proven experience on the
            Russian stock market and NAUFOR regulatory qualification.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {authors.map((a) => (
              <Link key={a.slug} href={`/en/authors/${a.slug}`} className="glass-card" style={{ display: "block", textDecoration: "none", padding: "2rem", color: "inherit" }}>
                <div style={{ position: "relative", width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", marginBottom: "1.25rem", border: "2px solid var(--gold)" }}>
                  <Image src={a.photo} alt={`${a.nameEn} — ${a.roleEn}`} fill style={{ objectFit: "cover" }} />
                </div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--gold)", marginBottom: "0.5rem" }}>{a.nameEn}</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{a.roleEn}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{a.bioEn}</p>
              </Link>
            ))}
          </div>
        </section>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
