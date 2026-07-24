import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Risk Disclosure | FinRadun",
  description: "Important information about investment risks, limitations of liability and the nature of the materials provided. Review before making investment decisions.",
  keywords: "investment risks, disclaimer, limitation of liability, financial risks",
  alternates: { canonical: "/en/risk-disclosure" },
};

export default function RiskDisclosurePageEn() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article className="container" style={{ padding: "0 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Legal & Disclosures</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "2rem" }}>
            Risk Disclosure
          </h1>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "0.98rem" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>1. Informational purpose</h2>
            <p style={{ marginBottom: "1rem" }}>
              All website materials are provided for informational and educational purposes only and do not
              constitute individual investment advice, an offer or a solicitation to enter into transactions
              with financial instruments.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>2. Risks</h2>
            <p style={{ marginBottom: "1rem" }}>
              Investing involves risk. Asset values may rise or fall. Past performance does not guarantee future
              results. You may lose part or all of your invested capital. Before making decisions, assess your
              financial situation, investment horizon and acceptable risk level.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>3. No warranties</h2>
            <p style={{ marginBottom: "1rem" }}>
              The site administration does not guarantee the accuracy, completeness or relevance of the information
              provided. Market data may change. Decisions are made by the user independently and at their own risk.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>4. Limitation of liability</h2>
            <p style={{ marginBottom: "1rem" }}>
              The administration is not liable for any losses arising from the use of the website information.
              Investment decisions should be based on your own analysis or after consulting a qualified professional.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>5. Personal data</h2>
            <p style={{ marginBottom: "1rem" }}>
              Personal data processing is governed by the Privacy Policy and the requirements of 152-FZ.
            </p>

            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
              Last updated: July 4, 2026
            </p>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
