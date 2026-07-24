import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";
import ContactForm from "@/components/ContactForm";

const speakableJsonLd = generatePageSpeakableSchema('contacts', '/en/contacts');

export const metadata = {
  title: "Contact Sergey Svistunov | Independent Financial Advisor",
  description: "Get in touch for professional independent financial consultation. Phone, email, location, and social media channels for private wealth advisory.",
  alternates: {
    canonical: "/en/contacts",
  },
  openGraph: {
    title: "Contact Sergey Svistunov | Independent Financial Advisor",
    description: "Get in touch for professional independent financial consultation. Phone, email, location, and social media channels for private wealth advisory.",
    url: `${SITE_URL}/en/contacts`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Contact Sergey Svistunov" }],
  },
};

const faqItems = [
  {
    question: "How do I book an intro session?",
    answer: "You can write directly to Telegram (@radun88), call +7 967 003 30 20, or send an email to s.svistunov@hotmail.com.",
  },
  {
    question: "Are remote online consultations available?",
    answer: "Yes, I provide remote advisory sessions globally via Zoom, Telegram, or phone.",
  },
  {
    question: "Where are you based?",
    answer: "Moscow, Russian Federation. Most asset allocation and portfolio monitoring are managed entirely online.",
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
  headline: "Contact Sergey Svistunov | Independent Financial Advisor",
  description: "Get in touch for professional independent financial consultation. Phone, email, location, and social media channels.",
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
    "@id": `${SITE_URL}/en/contacts`,
  },
};

export default function ContactsPageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Get In Touch</div>
          <h1 className="section-title">Contact Channels</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "1.5rem" }}>Connecting with Sergey Svistunov</h2>

          <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            
            <div className="glass-card" style={{ padding: "2.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📱</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>Phone & Messengers</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>For quick chats and immediate updates</p>
              <a href="tel:+79670033020" className="gold-text" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none" }}>+7 967 003 30 20</a>
              <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "0.5rem 1rem" }}>Telegram</a>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉️</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>Email</h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>For official proposals, research, and audits</p>
              <a href="mailto:s.svistunov@hotmail.com" className="gold-text" style={{ fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none" }}>s.svistunov@hotmail.com</a>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>Location</h3>
              <p style={{ color: "var(--text-secondary)" }}>Moscow, Russian Federation</p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>(Online consultations available worldwide)</p>
            </div>

          </div>

          <ContactForm lang="en" />

          <h2 style={{ marginTop: "4rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
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
