import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Риски и дисклеймер | FinRadun",
  description: "Важная информация о рисках инвестирования, ограничениях ответственности и характере предоставляемых материалов. Ознакомьтесь перед принятием инвестиционных решений.",
  keywords: "риски инвестирования, дисклеймер, ограничение ответственности, финансовые риски",
  alternates: { canonical: "/risk-disclosure" },
};

export default function RiskDisclosurePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article className="container" style={{ padding: "0 1.5rem", maxWidth: "800px", margin: "0 auto" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Документы и соответствие</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "2rem" }}>
            Риски и дисклеймер
          </h1>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "0.98rem" }}>
            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>1. Информационный характер</h2>
            <p style={{ marginBottom: "1rem" }}>
              Все материалы сайта носят исключительно информационный и образовательный характер и не являются
              индивидуальной инвестиционной рекомендацией, предложением или побуждением к совершению сделок
              с финансовыми инструментами.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>2. Риски</h2>
            <p style={{ marginBottom: "1rem" }}>
              Инвестиции связаны с риском. Стоимость активов может как расти, так и снижаться. Прошлые результаты
              не гарантируют доходности в будущем. Вы можете потерять часть или весь вложенный капитал.
              До принятия решений оцените свою финансовую ситуацию, горизонт инвестирования и допустимый уровень риска.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>3. Отсутствие гарантий</h2>
            <p style={{ marginBottom: "1rem" }}>
              Администрация сайта не гарантирует точность, полноту и актуальность размещённой информации.
              Рыночные данные могут меняться. Решения принимаются пользователем самостоятельно и на свой риск.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>4. Ограничение ответственности</h2>
            <p style={{ marginBottom: "1rem" }}>
              Администрация не несёт ответственности за возможные убытки, возникшие в результате использования
              информации сайта. Инвестиционные решения должны приниматься на основе собственного анализа
              или после консультации с квалифицированным специалистом.
            </p>

            <h2 style={{ color: "var(--text-primary)", fontSize: "1.3rem", marginTop: "1.5rem", marginBottom: "0.75rem" }}>5. Персональные данные</h2>
            <p style={{ marginBottom: "1rem" }}>
              Обработка персональных данных регулируется Политикой конфиденциальности и требованиями 152-ФЗ.
            </p>

            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", fontStyle: "italic", color: "var(--text-muted)" }}>
              Редакция от 4 июля 2026 года
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
