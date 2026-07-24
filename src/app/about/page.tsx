import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Обо мне | Сергей Свистунов — финансовый советник",
  description: "Кто я и как я работаю: 8+ лет на финансовых рынках, квалификация НАУФОР 7 уровня, принципы независимого финансового консультирования и подход к управлению капиталом.",
  keywords: "обо мне, финансовый советник, Сергей Свистунов, НАУФОР, инвестиции, управление капиталом",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "clamp(70px, 10vw, 140px)", minHeight: "80vh", paddingBottom: "clamp(2rem, 4vw, 4rem)" }}>
        <section className="container" style={{ padding: "0 clamp(0.75rem, 2vw, 1.5rem)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Обо мне</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
              Независимый финансовый советник
            </h1>

            <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Меня зовут Сергей Свистунов. Более 8 лет я работаю на российском финансовом рынке —
                в Тинькофф, ВТБ, Сбербанке, ПСБ и МКБ, где сопровождал VIP-клиентов, управлял портфелями
                и давал инвестиционные консультации. В 2021 году занял 122-е место из 26054 участников
                в конкурсе «Лучший частный инвестор России» Московской биржи.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Я придерживаюсь модели независимого советника: моя рекомендация всегда направлена на интересы
                клиента, а не на продажу конкретного продукта банка. Это исключает конфликт интересов и позволяет
                строить долгосрочные стратегии управления капиталом.
              </p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Подход к работе</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>Аудит текущего портфеля и финансовой ситуации.</li>
                <li style={{ marginBottom: "0.5rem" }}>Построение личного финансового плана (ЛФП) под ваши цели и риск-профиль.</li>
                <li style={{ marginBottom: "0.5rem" }}>Формирование сбалансированной стратегии инвестиций и её сопровождение.</li>
                <li style={{ marginBottom: "0.5rem" }}>Регулярная отчётность и корректировка портфеля по рынку.</li>
              </ul>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Квалификация</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                <li style={{ marginBottom: "0.5rem" }}>НАУФОР — Финансовый консультант, 7 уровень квалификации.</li>
                <li style={{ marginBottom: "0.5rem" }}>Экономическое образование, специализация «Финансы и кредит».</li>
                <li style={{ marginBottom: "0.5rem" }}>122-е место среди 26054 участников в ЛЧИ 2021 (Московская биржа).</li>
              </ul>
            </div>

            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contacts" className="btn btn-primary">Связаться</Link>
              <Link href="/authors/sergey-svistunov" className="btn btn-outline">Подробнее об авторе</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
