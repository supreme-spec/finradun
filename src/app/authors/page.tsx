import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { authors } from "@/data/authors";

export const metadata = {
  title: "Авторы | Финансовый советник Сергей Свистунов",
  description: "Эксперты по инвестициям и управлению капиталом FinRadun: биографии, регалии, опыт работы на финансовых рынках и профили в профессиональных сообществах.",
  keywords: "авторы, финансовый советник, инвестиции, Сергей Свистунов, НАУФОР, эксперты",
  alternates: { canonical: "/authors" },
};

export default function AuthorsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <section className="container" style={{ padding: "0 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Экспертная команда</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
            Авторы и эксперты
          </h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "800px", marginBottom: "3rem", fontSize: "1.05rem" }}>
            Материалы FinRadun готовят практикующие финансовые советники с подтверждённым опытом работы
            на российском фондовом рынке и регуляторной квалификацией НАУФОР.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {authors.map((a) => (
              <Link key={a.slug} href={`/authors/${a.slug}`} className="glass-card" style={{ display: "block", textDecoration: "none", padding: "2rem", color: "inherit" }}>
                <div style={{ position: "relative", width: "96px", height: "96px", borderRadius: "50%", overflow: "hidden", marginBottom: "1.25rem", border: "2px solid var(--gold)" }}>
                  <Image src={a.photo} alt={`${a.name} — ${a.role}`} fill style={{ objectFit: "cover" }} />
                </div>
                <h2 style={{ fontSize: "1.5rem", color: "var(--gold)", marginBottom: "0.5rem" }}>{a.name}</h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>{a.role}</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>{a.bio}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
