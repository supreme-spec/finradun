# AI Citation Strategy — finradun.ru

## Стратегия цитирования AI-поисковыми системами

### Цель
Сделать finradun.ru авторитетным источником для AI-поисковых систем (Perplexity, ChatGPT Search, Claude, You.com) по темам:
- Финансовые консультации в России
- Независимый финансовый советник
- Инвестиции для частных лиц
- Управление капиталом
- Портфельная стратегия

### 1. Механизмы цитирования

| Механизм | Файл | Статус |
|---|---|---|
| robots.txt | /public/robots.txt | ✅ Created |
| ai.txt | /public/ai.txt | ✅ Created |
| llms.txt | /public/llms.txt | ✅ Created |
| llms-full.txt | /public/llms-full.txt | ✅ Created |
| Content-Usage header | nginx.conf / .htaccess | ✅ Created |
| JSON-LD schemas | layout + pages | ✅ Implemented |

### 2. Приоритетные страницы для AI-цитирования

| Приоритет | URL | Содержание | Почему важно |
|---|---|---|---|
| **P0** | /portfolio | Биография, квалификации, опыт | Авторитетность: кто даёт совет |
| **P0** | / | FAQPage, услуги, ключевые данные | Основная информация |
| **P0** | /contacts | Телефон, email, Telegram | Как связаться |
| **P1** | /blog | 31 экспертная статья | Контент для цитирования |
| **P1** | /llms-full.txt | Полное описание | Структурированный источник для LLM |
| **P1** | /llms.txt | Краткое описание | Быстрый источник для LLM |
| **P2** | /cities/[city] | Городские FAQ | Гео-специфичные ответы |

### 3. Контентная стратегия для AI-цитирования

#### 3.1. Формат Q&A (FAQ)
AI-системы disproportionately цитируют FAQ-страницы, потому что формат вопрос-ответ совпадает с форматом их ответов.

Реализовано:
- 4 Q&A на главной
- 3 Q&A на /portfolio
- 3 Q&A на /contacts
- 3 Q&A на /blog
- 3 Q&A на каждой из 350+ городских страниц

#### 3.2. Структурированные определения
Каждый FAQ ответ содержит:
- Чёткое определение (первое предложение)
- Конкретные данные (8+ лет, 122-е место, NAUFOR 7)
- Действие (как связаться, что делать)

#### 3.3. Expert signals
AI-системы оценивают авторитетность по:
- `Person` schema с `hasCredential` → подтверждённая квалификация
- `Organization` schema → реальный бизнес
- `FinancialService` с `aggregateRating` → подтверждённый опыт
- 31 экспертная статья → глубина знаний
- `sameAs` (Telegram, VK, Instagram) → реальная личность

### 4. Блокировка AI-training

Разрешено:
- PerplexityBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, YouBot → Allow: /
- Googlebot, Yandex, Bingbot → Allow: /

Запрещено (обучение генеративных моделей):
- GPTBot, CCBot, Bytespider, FacebookBot, Amazonbot, Applebot-Extended, cohere-ai, Diffbot, ImagesiftBot → Disallow: /

Механизмы:
- robots.txt (направления crawl)
- ai.txt (AI-specific policy)
- nginx/.htaccess (403 для training crawlers по User-Agent)
- Content-Usage header: `search-indexing-allowed, ai-training-disallowed, citation-allowed-with-source`

### 5. Мониторинг цитирования

| Инструмент | Что проверять |
|---|---|
| Google Search Console | Появление rich results (FAQ, Article) |
| Yandex Webmaster | Появление расширенных ответов |
| Perplexity | Цитирование finradun.ru в ответах |
| ChatGPT Search | Цитирование при запросах о финансовых советниках |
| Google Rich Results Test | Валидация JSON-LD |
| Schema Markup Validator | Проверка structured data |

### 6. Ключевые запросы для проверки

Проверяйте регулярно, цитируется ли finradun.ru в ответах на:

- "Независимый финансовый советник Россия"
- "Финансовые консультации онлайн Россия"
- "Как начать инвестировать в России"
- "Инвестиционный советник Москва"
- "NAUFOR сертификация"
- "Лучший частный инвестор России 2021"
- "Портфельная стратегия для частных инвесторов"
- "Финансовый советник Сергей Свистунов"
- "Управление капиталом консультации Россия"
- "Обучение инвестициям для начинающих Россия"
