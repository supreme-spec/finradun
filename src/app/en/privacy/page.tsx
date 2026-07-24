import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { generateFAQSchema, generateArticleSchema } from "@/lib/seo/unifiedSEO";

export const metadata = {
  title: "Website Privacy Policy & Personal Data Protection | RADUN",
  description: "Official privacy policy outlining the secure collection, storage, protection, and legal processing of user personal data on the RADUN website.",
  keywords: "privacy policy, personal data, data protection, 152-FZ, cookies, RADUN",
  alternates: {
    canonical: "/en/privacy",
  },
};

const privacyFaqs = [
  {
    question: "What counts as the user's personal data?",
    answer: "Personal data includes your name, contact phone number, email address and Telegram username provided in feedback forms, as well as technical data (IP address, cookies, browser and device information) transmitted automatically.",
  },
  {
    question: "Why does RADUN process personal data?",
    answer: "Data is collected and stored solely to provide services: identifying the user, delivering personalized financial consulting, communicating with you, improving the website and running anonymized statistics.",
  },
  {
    question: "Is personal data shared with third parties?",
    answer: "Sharing is possible only with your consent, when required to provide a service, or when mandated by Russian law, for example upon request from government authorities.",
  },
  {
    question: "How is personal data protected?",
    answer: "The website applies organizational and technical safeguards against unauthorized access, destruction and copying. Databases of Russian citizens are hosted on servers in Russia in compliance with 152-FZ.",
  },
  {
    question: "How can I withdraw consent to data processing?",
    answer: "Send a notice to s.svistunov@hotmail.com. The request is processed within 10 business days of receipt.",
  },
  {
    question: "Does the website use cookies?",
    answer: "Yes, cookies are used to optimize the interface and collect anonymous analytics via Yandex Metrica. You can disable them in your browser settings, but this may limit some functionality.",
  },
];

export default function PrivacyPageEn() {
  const faqJsonLd = generateFAQSchema(privacyFaqs);
  const articleJsonLd = generateArticleSchema({
    headline: "Privacy Policy",
    description: "Official RADUN privacy policy: how user personal data is collected, stored, protected and processed in compliance with 152-FZ.",
    url: `${SITE_URL}/en/privacy`,
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    keywords: ["privacy policy", "personal data", "data protection", "152-FZ"],
    section: "Legal",
  });
  (articleJsonLd as Record<string, unknown>).inLanguage = "en-US";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "120px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article className="container" style={{ maxWidth: "800px", padding: "0 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Compliance & Disclosures</div>
          <h1 className="section-title" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy Policy</h1>
          
          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: "1.7", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              This Privacy Policy of Personal Data (hereinafter — the Policy) applies to all information that the website <strong>{SITE_URL}</strong> (hereinafter — the Site) may obtain about the User during their use of the Site, its services, programs, and products.
              Using the Site&apos;s services implies the User&apos;s unconditional consent to this Policy and the terms of processing their personal information specified herein.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>1. General Provisions</h2>
            <p style={{ marginBottom: "1rem" }}>
              1.1. Within the scope of this Policy, the User&apos;s personal information is understood to include:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.5rem" }}>
                Personal information that the User provides about themselves when filling out feedback forms (including name, contact phone number, email address, and Telegram messenger username).
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                Data transmitted automatically depending on the User&apos;s software configurations (IP address, cookie file data, browser information, hardware technical specifications, and date and time of Site access).
              </li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>2. Purpose of Processing Personal Data</h2>
            <p style={{ marginBottom: "1rem" }}>
              The Site collects and stores only those personal details that are strictly required to supply the requested services or execute agreements with the User:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.5rem" }}>User identification to send responses to feedback and booking requests;</li>
              <li style={{ marginBottom: "0.5rem" }}>Providing personalized financial consulting and wealth planning services;</li>
              <li style={{ marginBottom: "0.5rem" }}>Communicating with the User, including sending notifications, requests, and information regarding the use of the Site, as well as handling User inquiries;</li>
              <li style={{ marginBottom: "0.5rem" }}>Improving Site interface, user experience, and developing new products;</li>
              <li style={{ marginBottom: "0.5rem" }}>Conducting statistical, aggregated research based on anonymized analytical indicators (via web analytics systems like Google Analytics or Yandex Metrica).</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>3. Data Processing and Disclosure to Third Parties</h2>
            <p style={{ marginBottom: "1rem" }}>
              3.1. The Site stores personal information of Users in accordance with safe internal regulations and standard regulatory requirements.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              3.2. Confidentiality of the User&apos;s personal details is strictly maintained, except when the User voluntarily shares details for unrestricted public access.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              3.3. The Site is authorized to share personal details with third parties only if:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.5rem" }}>The User explicitly consented to such actions;</li>
              <li style={{ marginBottom: "0.5rem" }}>The transfer is essential to enable a requested service or fulfill a specific contract;</li>
              <li style={{ marginBottom: "0.5rem" }}>The transfer is mandated by legislative acts within established legal procedures.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>4. Security Measures & Data Storage</h2>
            <p style={{ marginBottom: "1rem" }}>
              4.1. The Site takes necessary organizational and technical measures to shield personal details from unauthorized or accidental access, alteration, destruction, blocking, copying, distribution, or other illegal third-party actions.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>5. User Rights</h2>
            <p style={{ marginBottom: "1rem" }}>
              Users maintain the right at any point to:
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", listStyleType: "disc" }}>
              <li style={{ marginBottom: "0.5rem" }}>Request confirmation regarding the processing of their personal details;</li>
              <li style={{ marginBottom: "0.5rem" }}>Demand correction, blocking, or complete removal of incorrect, incomplete, or outdated data;</li>
              <li style={{ marginBottom: "0.5rem" }}>Withdraw consent to data processing by notifying the Administration via email at <strong>s.svistunov@hotmail.com</strong>. Queries are resolved within 10 business days.</li>
            </ul>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>6. Cookie Usage Guidelines</h2>
            <p style={{ marginBottom: "1rem" }}>
              6.1. Cookies are tiny text files sent to your device upon accessing the Site to remember configurations and recognize your browser session.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              6.2. The Site deploys cookies to optimize interface performance, personalize configurations, and capture aggregated, anonymous analytic trends to refine content relevance.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              6.3. Users can disable cookies inside their browser configurations at any time, although this may limit full access to specific website features.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.4rem", marginTop: "2rem", marginBottom: "1rem" }}>7. Policy Amendments</h2>
            <p style={{ marginBottom: "1rem" }}>
              7.1. The Site reserves the right to amend this Privacy Policy. The latest revision date is always annotated at the bottom of the page. Changes take immediate effect upon being published.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              7.2. The active Policy revision is always accessible at: <strong>{SITE_URL}/en/privacy</strong>.
            </p>
            
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--text-secondary)", fontStyle: "italic", borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: "1rem" }}>
              Last updated: July 4, 2026
            </p>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
