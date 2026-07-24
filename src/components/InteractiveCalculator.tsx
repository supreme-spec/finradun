'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Calendar, DollarSign, Percent, TrendingUp } from "lucide-react";
import styles from "./InteractiveCalculator.module.css";

type ScenarioId = "passive_income" | "property" | "children" | "quick_start";

interface Scenario {
  id: ScenarioId;
  name: string;
  initial: number;
  monthly: number;
  years: number;
  rate: number;
  description: string;
}

const scenariosRu: Scenario[] = [
  {
    id: "passive_income",
    name: "Пассивный доход",
    initial: 300000,
    monthly: 30000,
    years: 15,
    rate: 15,
    description: "Формирование капитала для получения регулярной ренты и финансовой свободы."
  },
  {
    id: "property",
    name: "Покупка квартиры",
    initial: 1000000,
    monthly: 80000,
    years: 7,
    rate: 13,
    description: "Накопление первоначального взноса или полной суммы на недвижимость без кабальной ипотеки."
  },
  {
    id: "children",
    name: "Старт для детей",
    initial: 100000,
    monthly: 15000,
    years: 18,
    rate: 14,
    description: "Создание солидного капитала к совершеннолетию ребенка для образования или первой квартиры."
  },
  {
    id: "quick_start",
    name: "Быстрый разгон",
    initial: 50000,
    monthly: 10000,
    years: 5,
    rate: 12,
    description: "Создание первой инвестиционной подушки безопасности и тест-драйв сложных процентов."
  }
];

const scenariosEn: Scenario[] = [
  {
    id: "passive_income",
    name: "Passive Income",
    initial: 10000,
    monthly: 500,
    years: 15,
    rate: 12,
    description: "Building long-term wealth to receive a regular yield and attain financial independence."
  },
  {
    id: "property",
    name: "Real Estate Goal",
    initial: 30000,
    monthly: 1500,
    years: 7,
    rate: 10,
    description: "Accumulating a secure down payment or complete amount for real estate without high interest loans."
  },
  {
    id: "children",
    name: "Future for Kids",
    initial: 5000,
    monthly: 300,
    years: 18,
    rate: 11,
    description: "Creating a solid trust fund by your child's majority to fund higher education or their first home."
  },
  {
    id: "quick_start",
    name: "Wealth Accelerator",
    initial: 2000,
    monthly: 200,
    years: 5,
    rate: 9,
    description: "Building your first investment emergency buffer and test-driving compound interest magic."
  }
];

export default function InteractiveCalculator() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const scenarios = isEn ? scenariosEn : scenariosRu;

  const [activeScenario, setActiveScenario] = useState<ScenarioId>("passive_income");
  const [initialCapital, setInitialCapital] = useState(isEn ? 10000 : 300000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(isEn ? 500 : 30000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(isEn ? 12 : 15);

  // Apply scenario values when active scenario changes
  const handleScenarioChange = (scenarioId: ScenarioId) => {
    setActiveScenario(scenarioId);
    const sc = scenarios.find(s => s.id === scenarioId);
    if (sc) {
      setInitialCapital(sc.initial);
      setMonthlyDeposit(sc.monthly);
      setYears(sc.years);
      setRate(sc.rate);
    }
  };

  // Perform compound interest calculation directly on render
  const P = initialCapital;
  const PMT = monthlyDeposit;
  const t = years;
  const r = rate / 100;
  const n = 12; // Monthly compounding

  const nt = n * t;
  const rn = r / n;

  let finalCapital = 0;
  if (rn === 0) {
    finalCapital = P + PMT * nt;
  } else {
    const compoundFactor = Math.pow(1 + rn, nt);
    const principalPart = P * compoundFactor;
    const annuityPart = PMT * ((compoundFactor - 1) / rn);
    finalCapital = principalPart + annuityPart;
  }

  const totalCapital = Math.round(finalCapital);
  const totalDeposited = Math.round(P + PMT * nt);
  const interestEarned = Math.max(0, totalCapital - totalDeposited);
  
  // Assume safe 10% annual withdrawal rate for monthly passive income from final capital
  const passiveIncome = Math.round((finalCapital * 0.10) / 12);

  // Format currency helpers (RUB or USD)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat(isEn ? "en-US" : "ru-RU", {
      style: "currency",
      currency: isEn ? "USD" : "RUB",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className={styles.calculatorSection} id="simulator">
      <div className="container">
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className="tag tag-gold">{isEn ? "Interactive Tool" : "Интерактивный инструмент"}</div>
          <h2 className="section-title">{isEn ? "Compound Interest Simulator" : "Симулятор Сложных Процентов"}</h2>
          <p className={styles.subtitle}>
            {isEn
              ? "See how regular contributions and time compound even small savings into significant wealth under professional financial guidance."
              : "Посмотрите, как регулярные инвестиции и время превратят даже небольшие накопления в солидный капитал под управлением финансового советника."}
          </p>
        </div>

        {/* Calculator Widget */}
        <div className={styles.calcContainer}>
          
          {/* Quick Scenario Picker */}
          <div className={styles.scenarios}>
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => handleScenarioChange(sc.id)}
                className={`${styles.scenarioBtn} ${activeScenario === sc.id ? styles.scenarioBtnActive : ""}`}
              >
                {sc.name}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            
            {/* Left Column: Sliders */}
            <div>
              <p className="text-secondary" style={{ marginBottom: "2rem", fontSize: "0.95rem" }}>
                {scenarios.find(s => s.id === activeScenario)?.description}
              </p>

              {/* Initial Capital */}
              <div className={styles.inputGroup}>
                <div className={styles.inputHeader}>
                  <label className={styles.inputLabel}>
                    <DollarSign size={16} className="text-gold" />
                    {isEn ? "Initial Capital" : "Начальный капитал"}
                  </label>
                  <span className={styles.inputValue}>{formatCurrency(initialCapital)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={isEn ? "500000" : "5000000"}
                  step={isEn ? "5000" : "50000"}
                  value={initialCapital}
                  onChange={(e) => {
                    setInitialCapital(Number(e.target.value));
                    setActiveScenario("" as ScenarioId); // break active scenario bind if manual adjust
                  }}
                  className={styles.slider}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                  <span>{isEn ? "$0" : "0 ₽"}</span>
                  <span>{isEn ? "$500,000" : "5 000 000 ₽"}</span>
                </div>
              </div>

              {/* Monthly Deposit */}
              <div className={styles.inputGroup}>
                <div className={styles.inputHeader}>
                  <label className={styles.inputLabel}>
                    <TrendingUp size={16} className="text-gold" />
                    {isEn ? "Monthly Contribution" : "Ежемесячное пополнение"}
                  </label>
                  <span className={styles.inputValue}>{formatCurrency(monthlyDeposit)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={isEn ? "50000" : "500000"}
                  step={isEn ? "500" : "5000"}
                  value={monthlyDeposit}
                  onChange={(e) => {
                    setMonthlyDeposit(Number(e.target.value));
                    setActiveScenario("" as ScenarioId);
                  }}
                  className={styles.slider}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                  <span>{isEn ? "$0" : "0 ₽"}</span>
                  <span>{isEn ? "$50,000" : "500 000 ₽"}</span>
                </div>
              </div>

              {/* Investment Period */}
              <div className={styles.inputGroup}>
                <div className={styles.inputHeader}>
                  <label className={styles.inputLabel}>
                    <Calendar size={16} className="text-gold" />
                    {isEn ? "Investment Horizon" : "Срок инвестирования"}
                  </label>
                  <span className={styles.inputValue}>
                    {years} {isEn ? (years === 1 ? "year" : "years") : (years === 1 ? "год" : [2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years) ? "года" : "лет")}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => {
                    setYears(Number(e.target.value));
                    setActiveScenario("" as ScenarioId);
                  }}
                  className={styles.slider}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                  <span>{isEn ? "1 year" : "1 год"}</span>
                  <span>{isEn ? "30 years" : "30 лет"}</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                <div className={styles.inputHeader}>
                  <label className={styles.inputLabel}>
                    <Percent size={16} className="text-gold" />
                    {isEn ? "Expected Annual Yield (%)" : "Ожидаемая доходность (% годовых)"}
                  </label>
                  <span className={styles.inputValue}>{rate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={rate}
                  onChange={(e) => {
                    setRate(Number(e.target.value));
                    setActiveScenario("" as ScenarioId);
                  }}
                  className={styles.slider}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
                  <span>5% ({isEn ? "Conservative" : "Консервативная"})</span>
                  <span>30% ({isEn ? "Aggressive" : "Агрессивная"})</span>
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Results Cards */}
            <div className={styles.resultsBlock}>
              <div className={styles.resultsHeader}>
                <div className={styles.resultsTitle}>{isEn ? "Projected Capital" : "Итоговый капитал"}</div>
                <div className={styles.mainResult}>{formatCurrency(totalCapital)}</div>
              </div>

              <div className={styles.metricsList}>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>{isEn ? "Your Net Contributions" : "Вы вложили (тело капитала)"}</span>
                  <span className={styles.metricValue} style={{ color: "var(--text-primary)" }}>
                    {formatCurrency(totalDeposited)}
                  </span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricLabel}>{isEn ? "Interest Earned (Profit)" : "Начислено процентов (доход)"}</span>
                  <span className={styles.metricValue} style={{ color: "var(--gold)" }}>
                    + {formatCurrency(interestEarned)}
                  </span>
                </div>
                <div className={styles.metricItem} style={{ borderTop: "1px dashed rgba(255,255,255,0.1)", paddingTop: "0.75rem" }}>
                  <span className={styles.metricLabel} style={{ fontWeight: 500 }}>{isEn ? "Monthly Passive Yield*" : "Пассивный доход в месяц*"}</span>
                  <span className={styles.metricValue} style={{ color: "var(--gold)", fontWeight: 700 }}>
                    ~ {formatCurrency(passiveIncome)}
                  </span>
                </div>
              </div>

              <div className={styles.advisorNotice}>
                <strong>{isEn ? "*Disclaimer:" : "*Справочно:"}</strong> {isEn 
                  ? "Projected monthly yield is calculated using a conservative 10% annual withdrawal rate from the accumulated wealth without principal erosion. Actual yield depends highly on ongoing portfolio rebalancing and asset selection." 
                  : "Оценка пассивного дохода рассчитана на базе консервативного вывода 10% годовых от накопленного капитала без проедания тела активов. Реальная доходность сильно зависит от регулярной ребалансировки портфеля и минимизации комиссий брокера."}
              </div>

              <a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                {isEn ? "Create Financial Plan" : "Создать личный финансовый план"}
                <ArrowRight size={18} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

