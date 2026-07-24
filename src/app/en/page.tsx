import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import LatestArticles from "@/components/LatestArticles";
import AeoExpertHub from "@/components/AeoExpertHub";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";
import { generateStartConsultationHowTo } from "@/lib/seo/howTo";
import { generatePageAISchemas } from "@/lib/seo/ai";

const speakableJsonLd = generatePageSpeakableSchema('home', '/en');
const howToJsonLd = generateStartConsultationHowTo(); // wait, we can reuse this or leave it
const aiSchemas = generatePageAISchemas('/en');

export const metadata = {
  title: "Financial Advisor Sergey Svistunov | Investments & Capital",
  description: "Professional financial consulting and wealth management by Sergey Svistunov. 8+ years of experience. Personalized capital multiplication strategies.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    title: "Financial Advisor Sergey Svistunov | Investments & Capital",
    description: "Professional financial consulting and wealth management by Sergey Svistunov. 8+ years of experience. Personalized capital multiplication strategies.",
    url: `${SITE_URL}/en`,
    siteName: "RADUN",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Sergey Svistunov — Financial Advisor" }],
  },
};

const faqItems = [
  {
    question: "How much do financial consultations cost?",
    answer: "The cost depends on the format and duration of support. One-time advice or long-term management — please inquire when scheduling. The initial consultation to assess your situation is available upon request.",
  },
  {
    question: "Can I receive consultations entirely online?",
    answer: "Yes. Most consultations and long-term advisory support are carried out online globally via Zoom, Telegram, or phone with no compromise on quality.",
  },
  {
    question: "What experience does the financial advisor have?",
    answer: "8+ years in the banking sector: Tinkoff, VTB, Sberbank, PSB, MCB. Ranked 122nd out of 26,054 in the national 'Best Private Investor of Russia 2021' contest. NAUFOR financial consultant Level 7 accreditation.",
  },
  {
    question: "How do I start working with the advisor?",
    answer: "Message via Telegram (@radun88), call +7 967 003 30 20, or send an email to s.svistunov@hotmail.com. We will discuss your goals, current portfolio, and advisory structure.",
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
  headline: "Independent Financial Advisor Sergey Svistunov | Investments & Capital",
  description: "Professional financial consulting and wealth management by Sergey Svistunov. 8+ years of experience.",
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
    "@id": `${SITE_URL}/en`,
  },
};

export default function HomeEn() {
  const currentDate = new Date().toISOString().split("T")[0];
  const dynamicArticleJsonLd = {
    ...articleJsonLd,
    dateModified: currentDate,
  };

  return (
    <>
      <Header />
      <main>
        <article>
          <Hero lang="en" />
          <InteractiveCalculator />
          <LatestArticles lang="en" />
          <AeoExpertHub />
          <section style={{ padding: "3rem 1.5rem 0" }}>
            <div className="container">
              <h2 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
              <div style={{ display: "grid", gap: "1rem" }}>
                {faqItems.map((faq) => (
                  <div key={faq.question} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                    <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.question}</h3>
                    <p style={{ color: "var(--text-secondary)" }}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchemas.dataset) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchemas.termSet) }}
      />
      <Footer lang="en" />
      <FloatingContact />
    </>
  );
}
