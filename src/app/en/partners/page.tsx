import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import styles from "../../../app/partners/partners.module.css";

export const metadata = {
  title: "Business Partners & Collaborations | Sergey Svistunov",
  description: "Discover partners and business collaborations of independent advisor Sergey Svistunov, including Veles Voyage Travel Agency and Franglish Language School.",
  openGraph: {
    title: "Business Partners & Collaborations | Sergey Svistunov",
    description: "Discover partners and business collaborations of independent advisor Sergey Svistunov, including Veles Voyage Travel Agency and Franglish Language School.",
    url: `${SITE_URL}/en/partners`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Sergey Svistunov's Partners" }],
  },
  alternates: {
    canonical: "/en/partners",
  },
};

const faqItems = [
  {
    question: "Who are the primary partners?",
    answer: "Our core ventures include the premium boutique travel agency 'Veles Voyage' and the conversational foreign language school 'Franglish'.",
  },
  {
    question: "How can I pitch a partnership or join forces?",
    answer: "You can reach out directly via our secure contacts page or messaging us on Telegram (@radun88). We actively review collaborative proposals in real estate, tax advisory, language training, IT development, and high-quality tourism.",
  },
  {
    question: "What are the benefits of co-operating with Sergey Svistunov?",
    answer: "Cross-platform customer integration, cohesive marketing campaigns, shared expertise, and specialized client referral benefits.",
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
  headline: "Partners & Collaborations | Sergey Svistunov",
  description: "Veles Voyage Travel Agency, Franglish Language School, and other corporate partners.",
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
    "@id": `${SITE_URL}/en/partners`,
  },
};

export default function PartnersPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Synergy</div>
          <h1 className="section-title">My Partners & Ventures</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem" }}>Cooperative Projects & Business Horizons</h2>
          
          <div className={styles.grid}>
            <div className={`glass-card ${styles.card}`}>
              <h3 style={{ color: "#fff", marginBottom: "1rem", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                Travel Agency <span className="gold-text">«Veles Voyage»</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                I am proud to have designed a travel venture centered entirely on top-tier personalized service and premium travel curation. &quot;Veles Voyage&quot; is the choice for seamless luxury retreats and customized adventures.
              </p>
              <a href="https://veles-voyage.ru/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-block" }}>
                Visit Veles Voyage
              </a>
            </div>

            <div className={`glass-card ${styles.card}`}>
              <h3 style={{ color: "#fff", marginBottom: "1rem", fontSize: "1.5rem", fontFamily: "'Playfair Display', serif" }}>
                Language School <span className="gold-text">«Franglish»</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                High-quality foreign language coaching. Experience active conversation-driven methods, custom materials, and quick results engineered for your professional and personal expansion.
              </p>
              <a href="https://franglish-original.ru/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: "inline-block" }}>
                Visit Franglish
              </a>
            </div>
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
