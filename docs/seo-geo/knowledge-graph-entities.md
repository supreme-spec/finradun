# Knowledge Graph Entities — finradun.ru

## Сущности для Knowledge Graph

AI-поисковые системы и Google Knowledge Graph должны связывать следующие сущности:

### 1. Person — Сергей Свистунов

| Свойство | Значение | Источник |
|---|---|---|
| name | Сергей Свистунов | layout.tsx Person schema |
| jobTitle | Независимый финансовый советник | layout.tsx Person schema |
| description | Независимый финансовый советник с 8-летним опытом в банковском секторе (Тинькофф, ВТБ, Сбербанк, ПСБ, МКБ). 122-е место из 26 054 в ЛЧИ-2021. NAUFOR уровень 7. | layout.tsx Person schema |
| url | https://finradun.ru | layout.tsx Person schema |
| image | https://finradun.ru/images/all/1.webp | layout.tsx Person schema |
| telephone | +7-967-003-30-20 | layout.tsx Person schema |
| address | Москва, Россия | layout.tsx Person schema |
| sameAs | https://t.me/radun88, https://vk.com/radun88, https://www.instagram.com/radun180 | layout.tsx Person schema |
| hasCredential | NAUFOR 7 уровень (certification), ЛЧИ-2021 122/26054 (achievement) | layout.tsx Person schema |
| knowsAbout | Финансовые консультации, Инвестиции, Управление капиталом, Фондовый рынок, Портфельные инвестиции, Подготовка к экзаменам НАУФОР, Финансовая аналитика | layout.tsx Person schema |
| worksFor | RADUN (Organization) | layout.tsx Person schema |

### 2. Organization — RADUN

| Свойство | Значение | Источник |
|---|---|---|
| name | RADUN | layout.tsx Organization schema |
| url | https://finradun.ru | layout.tsx Organization schema |
| logo | https://finradun.ru/favicon.svg | layout.tsx Organization schema |
| description | Независимый финансовый консалтинг и инвестиционное сопровождение от Сергея Свистунова | layout.tsx Organization schema |
| sameAs | https://t.me/radun88, https://vk.com/radun88, https://www.instagram.com/radun180 | layout.tsx Organization schema |

### 3. EducationalOccupationalCredential — NAUFOR Level 7

| Свойство | Значение |
|---|---|
| @type | EducationalOccupationalCredential |
| name | NAUFOR — Финансовый консультант (7 уровень квалификации) |
| credentialCategory | certification |
| recognizedBy | НАУФОР (Национальная ассоциация участников фондового рынка) |

### 4. EducationalOccupationalCredential — ЛЧИ-2021

| Свойство | Значение |
|---|---|
| @type | EducationalOccupationalCredential |
| name | Лучший частный инвестор России 2021 — 122-е место из 26 054 |
| credentialCategory | achievement |
| recognizedBy | Московская биржа |

### 5. FinancialService

| Свойство | Значение |
|---|---|
| name | Сергей Свистунов — Независимый финансовый советник |
| url | https://finradun.ru |
| telephone | +7-967-003-30-20 |
| email | s.svistunov@hotmail.com |
| address | Москва, Россия |
| areaServed | Россия (все 350+ городов) |
| priceRange | ₽₽ |
| aggregateRating | 5/5 (3 reviews) |

### 6. Services (4 услуги)

| Service | name | description |
|---|---|---|
| 1 | Обучение инвестициям | Индивидуальные программы для всех уровней |
| 2 | Управление капиталом | Полный цикл управления активами |
| 3 | Инвестиционное консультирование | Аудит портфеля, разработка стратегии |
| 4 | Финансовая аналитика | Анализ рынков, поиск недооценённых активов |

### 7. WebSite

| Свойство | Значение |
|---|---|
| name | RADUN — Финансовый советник |
| url | https://finradun.ru |
| publisher | RADUN (Organization) |
| potentialAction | SearchAction → /blog?q={search_term_string} |

### 8. BreadcrumbList

Главная → Личное пространство → Блог → Города → Контакты

### 9. Связанные сущности (не на сайте, но должны быть в Knowledge Graph)

| Сущность | Тип | Связь |
|---|---|---|
| Тинькофф | Organization | Сергей работал (worksFor history) |
| Банк ВТБ | Organization | Сергей работал (worksFor history) |
| Сбербанк | Organization | Сергей работал (worksFor history) |
| ПСБ | Organization | Сергей работал (worksFor history) |
| МКБ | Organization | Сергей работал (worksFor history) |
| НАУФОР | Organization | Квалификация (hasCredential) |
| Московская биржа | Organization | ЛЧИ-2021 (hasCredential) |
| РУДН | EducationalOrganization | Образование (alumniOf) |
| МВШЭ | EducationalOrganization | Образование |
| МГТУ им. Баумана | EducationalOrganization | Образование |
| МГУ | EducationalOrganization | Образование |
| Велес Вояж | Organization | Партнёр (sameAs/relatedTo) |
| Franglish | Organization | Партнёр (sameAs/relatedTo) |

### 10. Topics (для knowsAbout)

| Topic | Связанные статьи |
|---|---|
| Альтернативные инвестиции | alternative-assets-guide |
| Фундаментальный анализ недвижимости | analiz-rynka-nedvizhimosti |
| Количественный анализ | data-driven-investment |
| Налогообложение дивидендов | dividendy-i-kupony-nalogi |
| EMH критика | emh_critique |
| ИИ в финансах | (multiple articles) |
| Портфельная оптимизация | (Black-Litterman, Risk Parity) |
