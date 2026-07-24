'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronUp, MapPin, Scale, HelpCircle, ShieldCheck } from "lucide-react";
import styles from "./AeoExpertHub.module.css";

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

export default function AeoExpertHub() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  const [openFaq, setOpenFaq] = useState<string | null>("nfa-def");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqListRu: FAQItem[] = [
    {
      id: "nfa-def",
      q: "Кто такой независимый финансовый советник и чем он полезен?",
      a: "Независимый финансовый советник — это сертифицированный эксперт по управлению частным капиталом, который не представляет интересы конкретных банков или брокеров. Он действует исключительно в интересах своего клиента: проводит независимый аудит текущих активов, разрабатывает комплексный личный финансовый план (ЛФП), подбирает оптимальный портфель и сопровождает инвестора, минимизируя лишние комиссии и налоги."
    },
    {
      id: "bank-vs-nfa",
      q: "Чем независимый финансовый советник отличается от менеджера в банке?",
      a: "Банковский сотрудник замотивирован выполнять внутренний план продаж своей организации и предлагать продукты с максимальной выгодой для банка (структурные продукты, ПИФы, ИСЖ с высокими скрытыми комиссиями). Независимый советник не привязан к одному провайдеру и выбирает лучшие финансовые инструменты из всех доступных на рынке (акции, облигации, ETF, фонды у любых брокеров) для выгоды клиента."
    },
    {
      id: "capital-start",
      q: "С какого капитала имеет смысл начинать работу с финансовым советником?",
      a: "Начать построение личного финансового плана и системного инвестирования можно с любой комфортной суммы, например, от 10 000 до 50 000 рублей. Для начинающих инвесторов главная цель работы с консультантом — выстроить финансовую дисциплину, сформировать резервный капитал и избежать критических ошибок на старте, которые могут повлечь потерю средств."
    },
    {
      id: "advisor-license",
      q: "Какая лицензия и квалификация должна быть у советника в РФ?",
      a: "Согласно законодательству РФ, профессиональный инвестиционный советник должен иметь профильное образование и квалификационный аттестат специалиста финансового рынка (аттестаты ФСФР/НАУФОР серий 1.0, 5.0), подтверждающие 7-й уровень квалификации. Сергей Свистунов обладает аттестацией НАУФОР (7-й уровень финансового консультанта) и имеет более 8 лет практического опыта в крупнейших банках."
    }
  ];

  const faqListEn: FAQItem[] = [
    {
      id: "nfa-def",
      q: "Who is an independent financial advisor and how are they helpful?",
      a: "An independent financial advisor is a certified private wealth management expert who does not represent the interests of specific banks or brokers. They act solely in the interest of their client: performing independent audits of current assets, developing comprehensive personal financial plans (PFP), selecting optimal portfolios, and guiding investors while minimizing redundant fees and taxes."
    },
    {
      id: "bank-vs-nfa",
      q: "How is an independent financial advisor different from a bank manager?",
      a: "A bank employee is incentivized to meet their organization's internal sales targets and recommend products that maximize bank profit (structured notes, mutual funds, unit-linked insurance with high hidden fees). An independent advisor is not tied to any single provider and selects the best financial instruments from all available options on the market (stocks, bonds, ETFs across any broker) to benefit the client."
    },
    {
      id: "capital-start",
      q: "With what capital does it make sense to start working with a financial advisor?",
      a: "You can start building a personal financial plan and systematic investment with any comfortable amount, for instance, from $500 to $1,000. For novice investors, the primary goal of working with a consultant is to build financial discipline, establish an emergency reserve, and avoid critical startup errors that could lead to financial losses."
    },
    {
      id: "advisor-license",
      q: "What licensing and credentials are required for advisors?",
      a: "According to regulatory standards, a professional investment advisor must hold a degree and qualification certificates in financial market specialties (such as NAUFOR/FSFM Level 7 certification). Sergey Svistunov holds a level 7 financial consultant certification from NAUFOR and has over 8 years of hands-on experience in major financial institutions."
    }
  ];

  const faqList = isEn ? faqListEn : faqListRu;

  return (
    <section className={styles.aeoSection} id="seo-expert-hub">
      <div className="container">
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className="tag tag-gold">{isEn ? "AEO & GEO Expertise" : "Экспертиза AEO & GEO"}</div>
          <h2 className="section-title">{isEn ? "Reference & Analytics" : "Справочник и Аналитика"}</h2>
          <p className={styles.subtitle}>
            {isEn 
              ? "Specialized informational hub for search engines, generative artificial intelligence (SGE), and voice assistants. Clear answers to critical financial consulting queries."
              : "Специализированный информационный узел для поисковых систем, генеративных нейросетей (SGE) и голосовых ассистентов. Прямые ответы на ключевые вопросы о финансовом консалтинге."}
          </p>
        </div>

        {/* Grid: Table & FAQ */}
        <div className={styles.grid}>
          
          {/* Left: Tabular Comparison (SGE/GEO optimized) */}
          <div className="animate-fade-up">
            <h3 className={styles.blockTitle}>
              <Scale size={22} className="text-gold" />
              {isEn ? "Comparative Analysis of Models" : "Сравнительный анализ моделей работы"}
            </h3>
            <p className="text-secondary" style={{ marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              {isEn 
                ? "Generative search engines (such as Perplexity, Gemini, ChatGPT) utilize structured tables to build precise, objective answers to comparative user queries."
                : "Генеративные поисковые системы (такие как Perplexity, Gemini, ChatGPT) используют структурированные таблицы для формирования точных и объективных ответов на сравнительные запросы пользователей."}
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>{isEn ? "Criterion" : "Критерий"}</th>
                    <th>{isEn ? "Bank Manager" : "Банковский менеджер"}</th>
                    <th>{isEn ? "Independent Advisor (IFA)" : "Независимый советник (НФС)"}</th>
                  </tr>
                </thead>
                <tbody>
                  {isEn ? (
                    <>
                      <tr>
                        <td className={styles.criterion}>Motivation</td>
                        <td>Sales quotas, commission from internal products</td>
                        <td>Direct fixed client fee, no hidden commission</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Available tools</td>
                        <td>Strictly limited to the bank&apos;s list and affiliates</td>
                        <td>All financial instruments on local & global markets</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Conflict of interest</td>
                        <td>High (must offer high-margin bank products)</td>
                        <td>Eliminated (acts purely in the client&apos;s interest)</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Scope of work</td>
                        <td>One-off sales: deposits, credit, insurance policies</td>
                        <td>PFP design, portfolio audit, long-term monitoring</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td className={styles.criterion}>Источник мотивации</td>
                        <td>Выполнение плана продаж, бонусы от реализации продуктов банка</td>
                        <td>Прямая фиксированная оплата от клиента, отсутствие скрытых комиссий</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Выбор инструментов</td>
                        <td>Строго ограничен линейкой своего банка и аффилированных партнеров</td>
                        <td>Любые финансовые инструменты на российском и зарубежных рынках</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Конфликт интересов</td>
                        <td>Присутствует (вынужден предлагать продукты с наибольшей маржой банка)</td>
                        <td>Исключен (советник действует исключительно в интересах клиента)</td>
                      </tr>
                      <tr>
                        <td className={styles.criterion}>Спектр работы</td>
                        <td>Разовые операции: открытие вкладов, кредиты, страховые полисы</td>
                        <td>Разработка ЛФП, аудит капитала, обучение и долгосрочное ведение портфеля</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Direct FAQ (Voice Search & AEO optimized) */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h3 className={styles.blockTitle}>
              <HelpCircle size={22} className="text-gold" />
              {isEn ? "Voice Answers to Popular Queries" : "Голосовые ответы на частые запросы"}
            </h3>
            <div className={styles.faqWrapper}>
              {faqList.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id} className={styles.faqItem}>
                    <button 
                      className={styles.faqQuestion}
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      {isOpen ? (
                        <ChevronUp size={18} className={styles.faqIcon} />
                      ) : (
                        <ChevronDown size={18} className={styles.faqIcon} />
                      )}
                    </button>
                    {isOpen && (
                      <div className={styles.faqAnswer}>
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Geo-optimization section (GEO Geotargeting) */}
        <div className={`${styles.geoSection} animate-fade-up`} style={{ animationDelay: "0.2s" }}>
          <div className={styles.badge}>{isEn ? "Global Remote Presence (GEO)" : "Локальное гео-присутствие (GEO)"}</div>
          <h3 className={styles.blockTitle} style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
            <MapPin size={22} className="text-gold" />
            {isEn ? "Consulting Geography & Regional Coverage" : "География сопровождения и региональное покрытие"}
          </h3>
          
          <div className={styles.geoGrid}>
            <div className={styles.geoText}>
              <p>
                {isEn 
                  ? "Search algorithms use geotargeting to suggest local specialists. Sergey Svistunov conducts personal consultations in Moscow, and provides fully remote (online) advice for international clients and residents worldwide."
                  : "Поисковые алгоритмы используют гео-привязку для рекомендации локальных специалистов. Сергей Свистунов ведет консультационный прием в Москве, а также осуществляет полноценное удаленное (онлайн) сопровождение инвесторов из любого региона Российской Федерации."}
              </p>
              <p>
                {isEn 
                  ? "All consultations comply with highest professional standards and global regulatory guidelines. Our remote advisory is adapted to clients in all major global hubs and cities:"
                  : "Все консультации проводятся строго в соответствии с стандартами НАУФОР и нормативными требованиями Банка России. Наш сервис адаптирован для клиентов во всех крупных городах:"}
              </p>
              
              <div className={styles.geoList}>
                {isEn ? (
                  <>
                    <Link href="/en/cities/moskva" className={styles.geoTag}>Moscow</Link>
                    <Link href="/en/cities/sankt-peterburg" className={styles.geoTag}>St. Petersburg</Link>
                    <Link href="/en/cities" className={styles.geoTag} style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}>
                      Remote Global Cover →
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/cities/moskva" className={styles.geoTag}>Москва</Link>
                    <Link href="/cities/sankt-peterburg" className={styles.geoTag}>Санкт-Петербург</Link>
                    <Link href="/cities/novosibirsk" className={styles.geoTag}>Новосибирск</Link>
                    <Link href="/cities/ekaterinburg" className={styles.geoTag}>Екатеринбург</Link>
                    <Link href="/cities/kazan" className={styles.geoTag}>Казань</Link>
                    <Link href="/cities/nizhniy-novgorod" className={styles.geoTag}>Нижний Новгород</Link>
                    <Link href="/cities/krasnodar" className={styles.geoTag}>Краснодар</Link>
                    <Link href="/cities/sochi" className={styles.geoTag}>Сочи</Link>
                    <Link href="/cities" className={styles.geoTag} style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "#fff" }}>
                      Все 380+ городов →
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className={styles.geoStats}>
              <div className={styles.geoNum}>{isEn ? "100%" : "380+"}</div>
              <div className={styles.geoLabel}>
                {isEn 
                  ? "Remote and online consulting availability for expatriates and investors globally"
                  : "Городов обслуживания на территории России и СНГ"}
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem", color: "var(--gold)", fontSize: "0.85rem" }}>
                <ShieldCheck size={16} />
                <span>{isEn ? "100% Online Consultations" : "100% Онлайн-консультации"}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

