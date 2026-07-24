import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { authors } from "@/data/authors";

export const metadata = {
  title: "Authors | Financial Advisor Sergey Svistunov",
  description: "FinRadun investment and wealth management experts: biographies, credentials, capital market experience and professional community profiles.",
  keywords: "authors, financial advisor, investments, Sergey Svistunov, NAUFOR, experts",
  alternates: { canonical: "/en/authors" },
};

export default function AuthorsPageEn() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
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
      </main>
      <Footer lang="en" />
    </>
  );
}
