# schema.org Recommendations — finradun.ru

## Реализованные схемы (✅)

| Schema | Где | Status |
|---|---|---|
| Person | layout.tsx (globalJsonLd @graph) | ✅ Implemented |
| Organization | layout.tsx (globalJsonLd @graph) | ✅ Implemented |
| WebSite | layout.tsx (globalJsonLd @graph) | ✅ Implemented |
| FinancialService | layout.tsx (globalJsonLd @graph) | ✅ Implemented |
| BreadcrumbList | layout.tsx (globalJsonLd @graph) | ✅ Implemented |
| FAQPage | page.tsx, /portfolio, /contacts, /blog, /cities/[city] (350+) | ✅ Implemented |
| Article | /blog/[slug] (31 articles) | ✅ Implemented |

## Рекомендации по улучшению

### P0 — Критичные (уже реализовано)

1. **Person** — Сергей Свистунов с hasCredential (NAUFOR 7, ЛЧИ-2021), sameAs, knowsAbout, contactPoint. Это основа для Knowledge Panel.

2. **FAQPage** — на всех ключевых страницах + 350+ городских. Формат: `@type: FAQPage` → `mainEntity` → массив `Question` + `acceptedAnswer`.

3. **Article/BlogPosting** — на каждой блог-статье с author (Person), publisher (Organization), mainEntityOfPage.

4. **Organization** — RADUN с logo, description, sameAs.

5. **FinancialService** — с OfferCatalog (4 услуги), areaServed, aggregateRating.

6. **WebSite** — с SearchAction для поиска по блогу.

7. **BreadcrumbList** — 5 элементов навигации.

### P1 — Важные улучшения

| Рекомендация | Описание | Приоритет |
|---|---|---|
| SpeakableSpecification | Добавить в WebSite: `cssSelector: ["main h1", "main h2", "main .service-card"]` — для голосового поиска (Алиса, Google Assistant) | P1 |
| Course | Добавить 2 Course schema (Обучение инвестициям, Управление капиталом) — для Knowledge Panel с курсами | P1 |
| Review | Добавить 3 Review в FinancialService (кейсы Антон, Анна, Иван) — для rich results с отзывами | P1 |
| Event | Добавить Event schema (бриф-сессия, пробная консультация) — для rich results с событиями | P2 |
| LocalBusiness alias | FinancialService + LocalBusiness дублирование для совместимости с Google Local Pack | P2 |
| GeoCoordinates | Добавить в FinancialService: `{@type: GeoCoordinates, latitude: 55.7558, longitude: 37.6173}` — Москва | P2 |

### P2 — Дополнительные

| Рекомендация | Описание |
|---|---|
| itemprop microdata | Добавить `itemprop="name"` на h1, `itemprop="description"` на subtitle — для совместимости с старыми парсерами |
| howTo schema | Для методологии (3-этапный процесс) — `@type: HowTo` с шагами |
| VideoObject | Если появятся видео-консультации — добавить VideoObject schema |
| ItemList | Для списка статей на /blog/beginners, /blog/intermediate, /blog/professional |

## Требования к данным

### Обязательные поля Person

```json
{
  "@type": "Person",
  "name": "Сергей Свистунов",
  "jobTitle": "Независимый финансовый советник",
  "url": "https://finradun.ru",
  "image": "https://finradun.ru/images/all/1.webp",
  "telephone": "+7-967-003-30-20",
  "email": "s.svistunov@hotmail.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Москва", "addressCountry": "RU" },
  "sameAs": ["https://t.me/radun88", "https://vk.com/radun88", "https://www.instagram.com/radun180"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "name": "NAUFOR 7 уровень", "credentialCategory": "certification" },
    { "@type": "EducationalOccupationalCredential", "name": "ЛЧИ-2021 #122", "credentialCategory": "achievement" }
  ],
  "knowsAbout": ["Финансовые консультации", "Инвестиции", "Управление капиталом"]
}
```

### Обязательные поля FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Как начать консультацию?",
      "acceptedAnswer": { "@type": "Answer", "text": "Напишите в Telegram @radun88..." }
    }
  ]
}
```

### Обязательные поля Article (blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": { "@type": "Person", "name": "Сергей Свистунов", "url": "https://finradun.ru" },
  "publisher": { "@type": "Organization", "name": "RADUN", "logo": { "@type": "ImageObject", "url": "https://finradun.ru/favicon.svg" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://finradun.ru/blog/slug" }
}
```

## Правила

1. **Не дублировать** — Person/Organization/WebSite/FinancialService/BreadcrumbList только в layout (globalJsonLd). Страницы добавляют только свои schemas (FAQPage, Article).
2. **Canonical URLs** — `alternates.canonical` на каждой странице (уже добавлено на 5 страниц).
3. **Телефон** — единообразно: `+7-967-003-30-20` в schema.org, `+7 967 003 30 20` в визуальном контенте.
4. **Валидация** — регулярно проверять через Google Rich Results Test и Yandex Structured Data Validator.
