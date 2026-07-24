import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";

const speakableJsonLd = generatePageSpeakableSchema('portfolio', '/portfolio');

export const metadata = {
  title: "Сергей Свистунов | Финансовый советник | Биография и опыт",
  description: "Биография, профессиональный опыт (Тинькофф, ВТБ, Сбербанк) и компетенции финансового советника Сергея Свистунова. 122 место в ЛЧИ-2021. Узнайте больше.",
  openGraph: {
    title: "Сергей Свистунов | Финансовый советник | Биография и опыт",
    description: "Биография, профессиональный опыт (Тинькофф, ВТБ, Сбербанк) и компетенции финансового советника Сергея Свистунова.",
    url: `${SITE_URL}/portfolio`,
    siteName: "RADUN",
    locale: "ru_RU",
    type: "profile",
    images: [{ url: "/images/all/1.webp", width: 1200, height: 630, alt: "Сергей Свистунов — Финансовый советник" }],
  },
  alternates: {
    canonical: "/portfolio",
  },
};

const faqItems = [
  {
    question: "Где работал Сергей Свистунов?",
    answer: "Тинькофф, ВТБ, Сбербанк, ПСБ, МКБ — более 8 лет в банковском секторе на позициях от менеджера до VIP-сопровождения.",
  },
  {
    question: "Какие сертификаты и квалификации есть?",
    answer: "NAUFOR уровень 7 (Финансовый консультант), 122-е место из 26 054 в конкурсе «Лучший частный инвестор России 2021». Образование: РУДН, МВШЭ, МГТУ им. Баумана, МГУ.",
  },
  {
    question: "Какие проекты помимо финансового консалтинга?",
    answer: "Турагентство «Велес Вояж» (veles-voyage.ru), языковая школа «Franglish» (franglish-original.ru), IT-разработка (Python Full-Stack).",
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
  headline: "Сергей Свистунов | Финансовый советник | Биография и опыт",
  description: "Биография, профессиональный опыт (Тинькофф, ВТБ, Сбербанк) и компетенции финансового советника Сергея Свистунова. 122 место в ЛЧИ-2021.",
  datePublished: "2024-06-01",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "Сергей Свистунов",
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
    "@id": `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
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
      <main><article>
        {/* Education and Biography Section */}
        <section className="container" style={{ padding: "clamp(2rem, 4vw, 4rem) clamp(0.75rem, 2vw, 1.5rem)" }}>
          <h1 style={{ color: "var(--gold)", fontSize: "clamp(1.8rem, 5vw, 2.5rem)", marginBottom: "1rem", lineHeight: 1.2 }}>Биография и опыт Сергея Свистунова</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)" }}>
               Познакомьтесь ближе с моим образованием, спортивными достижениями и проектами.
            </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", marginTop: "3rem" }}>
            
            {/* Bio Text */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Немного обо мне</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1rem" }}>
                Получив <strong>высшее образование</strong> в <em>Институте экономики (НОУ ВПО)</em> по специальности <strong>«Менеджер»</strong>, я продолжил профессиональное развитие через дополнительные образовательные программы:
              </p>
              <ul style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li><em>Российский университет дружбы народов</em> - <strong>Управление персоналом</strong>;</li>
                <li><em>Московская высшая школа экономики</em> - <strong>Бухгалтерский учет и аудит</strong>;</li>
                <li><em>Учебный Центр «Специалист» при МГТУ им. Н.Э. Баумана</em> - <strong>Разработчик Python (Full-Stack)</strong>;</li>
                <li><em>Московская академия профкомпетенций</em> - <strong>Педагогическое образование: Физическая культура</strong>;</li>
                <li><em>НАУФОР</em> - <strong>Финансовый консультант (7 уровень квалификации)</strong>;</li>
                <li><em>МГУ</em> - <strong>Менеджмент в туризме</strong>;</li>
                <li><em>Томский государственный университет</em> - <strong>Специалист по внедрению ИИ</strong>.</li>
              </ul>

              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1rem" }}>
                Дополнительно я прошел специализированные курсы на <strong>Coursera</strong> по направлениям инвестиций в облигации, портфельных инвестиций и управления личными финансами.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                Как спортсмен я имею <strong>1-й разряд по пауэрлифтингу (троеборье, ФПР)</strong>. Параллельно развиваюсь в сфере <strong>IT-разработки</strong> и продолжаю тренироваться в <strong>единоборствах</strong>.
              </p>
            </div>

            {/* Photos and Projects */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/1.webp" alt="Сергей Свистунов — портрет финансового советника" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/2.webp" alt="Сергей Свистунов на рабочем месте в Тинькофф" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/3.webp" alt="Сергей Свистунов — профессиональные достижения" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/4.webp" alt="Сергей Свистунов — сертификат NAUFOR уровень 7" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} />
                 </div>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>Мои проекты</h3>
                <ul style={{ color: "var(--text-secondary)", lineHeight: "2", listStyle: "none", padding: 0 }}>
                  <li>🚀 <strong>Tурагентство:</strong> <a href="https://veles-voyage.ru/" target="_blank" style={{ color: "var(--gold)" }}>Велес Вояж</a></li>
                  <li>📱 <strong>ВКонтакте:</strong> <a href="https://vk.ru/veles__voyage" target="_blank" style={{ color: "var(--gold)" }}>Велес Вояж (Группа)</a></li>

                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="container" id="experience" style={{ padding: "4rem 1.5rem" }}>
          <div className="section-title">
            <h2 style={{ color: "var(--gold)", fontSize: "2.2rem", marginBottom: "1rem" }}>Опыт работы</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6", marginBottom: "1rem" }}>
              За плечами более 8 лет успешной карьеры в банковской сфере и управлении инвестициями. Умею анализировать потребности клиентов и предлагать решения, повышающие эффективность инвестиций. Мне важны постоянный личностный рост и развитие.
            </p>
            <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6" }}>
              Являюсь сертифицированным специалистом НАУФОР, имею квалификацию от базового уровня до управления инвестиционными фондами. Занял 122-е место из 26054 участников в конкурсе «Лучший частный инвестор России-2021».
            </p>
            <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
              <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Мои контакты в соцсетях</h3>
              <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                <li><a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Telegram</a></li>
                <li><a href="https://vk.com/radun88" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>VKontakte</a></li>
                <li><a href="https://www.instagram.com/radun180" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Instagram</a></li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">Опыт работы</h2>
          <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "4rem" }}>
            
            {/* Tinkoff */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(1rem, 2vw, 2rem)", alignItems: "center", background: "var(--glass-bg)", padding: "clamp(1rem, 2vw, 1.5rem)", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}>Тинькофф</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Комплексное сопровождение VIP-клиентов</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>Работал персональным менеджером, осуществляя поддержку и сопровождение VIP-клиентов. Предоставлял рекомендации по формированию и управлению инвестиционными портфелями.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  <li>Поддержка VIP-клиентов</li>
                  <li>Формирование инвестиционных портфелей</li>
                  <li>Мониторинг эффективности инвестиций</li>
                </ul>
              </div>
              <div style={{ position: "relative", width: "100%", maxWidth: "min(400px, 100%)", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/2.webp" alt="Сергей Свистунов — работа с VIP-клиентами в Тинькофф" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* VTB */}
            <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "clamp(1rem, 2vw, 2rem)", alignItems: "center", background: "var(--glass-bg)", padding: "clamp(1rem, 2vw, 1.5rem)", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "min(400px, 100%)", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/3.webp" alt="Сергей Свистунов — главный клиентский менеджер в ВТБ" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}>Банк ВТБ (ПАО)</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Главный клиентский менеджер</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>Обеспечивал комплексное предложение финансовых продуктов клиентам ВТБ. Оказывал консультационную поддержку, оперативно обрабатывая запросы и проблемы клиентов.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  <li>Операционное обслуживание клиентов</li>
                  <li>Высокие показатели производительности</li>
                </ul>
              </div>
            </div>

            {/* Sberbank */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(1rem, 2vw, 2rem)", alignItems: "center", background: "var(--glass-bg)", padding: "clamp(1rem, 2vw, 1.5rem)", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}>Сбербанк</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>Менеджер по работе с клиентами</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>Предлагал широкий спектр банковских продуктов, консультируя клиентов по кредитам, вкладам и картам. Помогал решать возникающие вопросы и улучшал клиентский опыт.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}>
                  <li>Консультации клиентов</li>
                  <li>Реализация целевых показателей</li>
                </ul>
              </div>
              <div style={{ position: "relative", width: "100%", maxWidth: "min(400px, 100%)", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/4.webp" alt="Сергей Свистунов — менеджер по работе с клиентами в Сбербанке" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

          </div>
        </section>

        <About />
        <div className="section-divider"></div>
        <Methodology />
        <div className="section-divider"></div>
        <Projects />
      </article></main>
      <Footer />
    </>
  );
}
