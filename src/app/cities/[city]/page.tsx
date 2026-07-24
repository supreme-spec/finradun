import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { cityNameFromSlug, cityRouteSlug, rawCities, getCityDeclension } from "../data";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";
import { generateCityConsultationHowTo } from "@/lib/seo/howTo";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return rawCities.map((city) => ({ city: cityRouteSlug(city) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cityNameFromSlug(slug);
  if (!city) {
    return {
      title: "Город не найден",
    };
  }

  const { genitive, prepositional } = getCityDeclension(city);

  return {
    title: `Финансовые консультации в ${prepositional} | Сергей Свистунов`,
    description: `Персональные инвестиционные и финансовые консультации для клиентов из ${genitive}. Надежное онлайн-сопровождение и индивидуальная стратегия капитала.`,
    alternates: {
      canonical: `/cities/${slug}`,
    },
    openGraph: {
      title: `Финансовые консультации в ${prepositional} | Сергей Свистунов`,
      description: `Персональные инвестиционные и финансовые консультации для клиентов из ${genitive}. Надежное онлайн-сопровождение и индивидуальная стратегия капитала.`,
      url: `${SITE_URL}/cities/${slug}`,
      siteName: "RADUN",
      locale: "ru_RU",
      type: "article",
      images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: `Финансовые консультации в ${prepositional}` }],
    },
  };
}

function stableHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickByCity<T>(city: string, items: T[]): T {
  return items[stableHash(city) % items.length];
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = cityNameFromSlug(slug);

  if (!city) {
    notFound();
  }

  const { genitive, prepositional } = getCityDeclension(city);

  const hash = stableHash(city);
  const activityLevel = 72 + (hash % 23); // 72% to 94%
  const indexScore = (6.4 + (hash % 31) / 10).toFixed(1); // 6.4 to 9.4
  const regionalPremium = (0.4 + (hash % 15) / 10).toFixed(1); // 0.4% to 1.8%
  const recommendedBonds = 25 + (hash % 16); // 25% to 40%
  const recommendedStocks = 90 - recommendedBonds - (hash % 5); // Stocks
  const recommendedGold = 100 - recommendedBonds - recommendedStocks; // Gold/Alternatives

  const regionalAdvice = [
    `Локальная специфика в ${prepositional} требует повышенного внимания к диверсификации. С учетом развитости региональной инфраструктуры, рекомендуем сбалансированную структуру с упором на высоколиквидные ОФЗ и дивидендные акции крупного российского бизнеса.`,
    `Для инвесторов из ${genitive} ключевой акцент ставится на защиту капитала от инфляционного давления. Мы рекомендуем комбинацию защитных активов (включая фонды золота и замещающие облигации) и инструментов с плавающей ставкой (флоатеров).`,
    `Инвестиционная стратегия для жителей ${genitive} ориентирована на регулярный пассивный доход. Лучший выбор — формирование рентного портфеля с использованием качественных корпоративных облигаций и акций с дивидендной доходностью выше ключевой ставки.`,
  ][hash % 3];

  const heroDescriptions = [
    `Получите персональную финансовую стратегию для ${genitive}: от постановки целей до структуры капитала и инвестиционного плана.`,
    `Сопровождаю клиентов из ${genitive} в вопросах инвестиций, управления риском и долгосрочного роста капитала.`,
    `Финансовые консультации для жителей ${genitive}: системный подход, понятные решения и контроль результата на каждом этапе.`,
  ];

  const whyPoints = pickByCity(city, [
    [
      "Индивидуальный план с учетом ваших целей и горизонта инвестирования",
      "Прозрачная логика решений без навязывания инструментов",
      "Регулярная корректировка стратегии под изменения рынка",
      "Поддержка в реализации шагов и дисциплина портфеля",
    ],
    [
      "Оценка текущего финансового состояния и слабых зон",
      "Сбалансированный подход между доходностью и риском",
      "Сценарное планирование и защита капитала в волатильные периоды",
      "Практические рекомендации, которые можно применить сразу",
    ],
    [
      "Стратегия для частного инвестора без избыточной сложности",
      "Фокус на долгосрочном результате, а не на краткосрочных эмоциях",
      "Ребалансировка и контроль долей активов по плану",
      "Сопровождение по вопросам налоговой и портфельной эффективности",
    ],
  ]);

  const servicesBlock = pickByCity(city, [
    {
      firstTitle: "Финансовый план и цели",
      firstItems: [
        "Аудит текущей структуры доходов и расходов",
        "Формирование подушки безопасности и резервов",
        "Планирование крупных целей: капитал, образование, пенсия",
        "Определение комфортной инвестиционной нагрузки",
      ],
      secondTitle: "Инвестиции и сопровождение",
      secondItems: [
        "Сборка портфеля по риск-профилю",
        "Подбор инструментов и долей активов",
        "План регулярных пополнений и ребалансировки",
        "Периодический пересмотр стратегии",
      ],
    },
    {
      firstTitle: "Диагностика портфеля",
      firstItems: [
        "Разбор текущих позиций и концентрации рисков",
        "Оценка диверсификации по классам активов",
        "Проверка ликвидности и соответствия целям",
        "Приоритизация шагов по оптимизации",
      ],
      secondTitle: "Стратегия роста капитала",
      secondItems: [
        "Выбор стратегии под горизонт инвестирования",
        "Система контроля просадок и волатильности",
        "Баланс между защитной и доходной частью портфеля",
        "Дорожная карта на 6-12 месяцев",
      ],
    },
  ]);

  const faqSet = pickByCity(city, [
    [
      {
        q: `Как начать консультацию в ${prepositional}?`,
        a: "Оставьте заявку в разделе контактов. После короткого брифа формируем стартовый план и согласуем формат взаимодействия.",
      },
      {
        q: "Можно ли работать полностью онлайн?",
        a: "Да. Большинство консультаций и сопровождение проходят онлайн без потери качества.",
      },
      {
        q: "Вы даете готовые сигналы на покупку?",
        a: "Фокус на стратегии и логике решений. Цель — чтобы вы понимали систему и управляли капиталом осознанно.",
      },
    ],
    [
      {
        q: `Подходит ли консультация для начинающих инвесторов из ${genitive}?`,
        a: "Да, формат адаптируется под ваш уровень. Начинаем с базы и строим понятную систему действий.",
      },
      {
        q: "Как часто нужно пересматривать портфель?",
        a: "Обычно раз в квартал или при заметных изменениях ваших целей и рыночной ситуации.",
      },
      {
        q: "Можно ли подключить только разовый аудит?",
        a: "Да, доступен формат разовой консультации и отдельный формат долгосрочного сопровождения.",
      },
    ],
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSet.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Финансовые консультации в ${prepositional} | Сергей Свистунов`,
    description: `Персональные инвестиционные и финансовые консультации для клиентов из ${genitive}. Онлайн-сопровождение и индивидуальная стратегия капитала.`,
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
      "@id": `${SITE_URL}/cities/${slug}`,
    },
  };

  const speakableJsonLd = generatePageSpeakableSchema('city', `/cities/${slug}`);
  const cityHowToJsonLd = generateCityConsultationHowTo(prepositional, `${SITE_URL}/cities/${slug}`);

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": `Сергей Свистунов — Независимый финансовый советник в г. ${city}`,
    "description": `Профессиональные инвестиционные и финансовые консультации для частных лиц в г. ${city} от Сергея Свистунова. Составление личного финансового плана.`,
    "url": `${SITE_URL}/cities/${slug}`,
    "telephone": "+7-967-003-30-20",
    "email": "s.svistunov@hotmail.com",
    "priceRange": "₽₽",
    "image": `${SITE_URL}/images/all/1.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressCountry": "RU"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": city
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityHowToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Городская страница</div>
          <h1 className="section-title">Финансовые консультации в {prepositional}</h1>
          <p className="section-subtitle" style={{ maxWidth: 900 }}>
            {pickByCity(city, heroDescriptions)}
          </p>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>Почему выбирают консультации в {prepositional}?</h2>
          <ul style={{ marginTop: "1rem", display: "grid", gap: ".7rem", listStyle: "none", padding: 0 }}>
            {whyPoints.map((point) => (
              <li key={point} style={{ alignItems: "flex-start" }}>✓ {point}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>Наши услуги для клиентов из {genitive}</h2>
          <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>{servicesBlock.firstTitle}</h3>
              <ul style={{ display: "grid", gap: ".6rem", listStyle: "none", padding: 0 }}>
                {servicesBlock.firstItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>{servicesBlock.secondTitle}</h3>
              <ul style={{ display: "grid", gap: ".6rem", listStyle: "none", padding: 0 }}>
                {servicesBlock.secondItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>Региональный финансовый паспорт: {city}</h2>
          <div className="glass-card" style={{ marginTop: "1rem", padding: "2rem", border: "1px solid rgba(226, 201, 116, 0.2)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Инвестиционный Индекс</div>
                <div className="gold-text" style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>{indexScore} / 10</div>
              </div>
              <div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Финансовая активность</div>
                <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>{activityLevel}%</div>
              </div>
              <div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Инфляционный Премиум</div>
                <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>+{regionalPremium}%</div>
              </div>
            </div>
            
            <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "0.75rem" }}>Рекомендованная структура портфеля</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "0.75rem 1.25rem", borderRadius: "8px", flex: "1 1 150px" }}>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Акции РФ</div>
                <div style={{ color: "var(--gold)", fontWeight: "bold", fontSize: "1.2rem" }}>{recommendedStocks}%</div>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "0.75rem 1.25rem", borderRadius: "8px", flex: "1 1 150px" }}>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Облигации / Флоатеры</div>
                <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{recommendedBonds}%</div>
              </div>
              <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "0.75rem 1.25rem", borderRadius: "8px", flex: "1 1 150px" }}>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Золото / Альтернативы</div>
                <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{recommendedGold}%</div>
              </div>
            </div>

            <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Региональные особенности и советы по инвестированию</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{regionalAdvice}</p>
          </div>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>Часто задаваемые вопросы</h2>
          <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
            {faqSet.map((faq) => (
              <div key={faq.q} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.q}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ marginTop: "2.5rem", padding: "1.5rem" }}>
            <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>Информация о городе</h3>
            <p style={{ color: "var(--text-secondary)" }}>Город: {city}</p>
            <p style={{ color: "var(--text-secondary)" }}>Регион: Россия</p>
            <div style={{ marginTop: "1rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
              <Link href="/cities" className="btn btn-outline">← Список всех городов</Link>
              <Link href="/contacts" className="btn btn-primary">Консультация</Link>
            </div>
          </div>
        </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
