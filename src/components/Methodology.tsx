import styles from "./Methodology.module.css";

const stepsRu = [
  {
    num: "01",
    title: "Первоначальная оценка",
    desc: "Подробно выясняем ваши финансовые цели, временные рамки и отношение к риску. Основываясь на полученной информации, формируем предварительный план.",
  },
  {
    num: "02",
    title: "Планирование и реализация",
    desc: "Формируем инвестиционный план. Вместе принимаем обоснованное решение о структуре активов и инструментах вложения, минимизируя комиссии и налоги.",
  },
  {
    num: "03",
    title: "Мониторинг и совершенствование",
    desc: "Постоянно ведём мониторинг ваших активов и контролируем исполнение плана. Регулярно встречаемся для внесения нужных корректировок.",
  },
];

const stepsEn = [
  {
    num: "01",
    title: "Initial Asset Assessment",
    desc: "We explore your financial goals, time horizons, and risk tolerance profile. Based on this quantitative data, we establish a preliminary wealth preservation plan.",
  },
  {
    num: "02",
    title: "Portfolio Design & Action",
    desc: "We construct a tailored investment plan. Together, we make data-backed asset allocation choices, picking instruments while optimizing fees and taxes.",
  },
  {
    num: "03",
    title: "Continuous Monitoring & Rebalancing",
    desc: "We actively track your portfolio metrics and control execution. Regular update sessions ensure timely adjustments for changing global market dynamics.",
  },
];

export default function Methodology({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";
  const steps = isEn ? stepsEn : stepsRu;

  return (
    <section id="methodology" className={styles.methodology}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <div className="tag tag-gold">{isEn ? "Systematic Process" : "Система"}</div>
            <h2 className="section-title">{isEn ? "My Methodology" : "Моя Методология"}</h2>
            <p className={styles.subtitle}>
              {isEn 
                ? "Every consultation targets building a highly reliable, tax-efficient, and optimized strategy to achieve your specific targets. Here is my structured framework."
                : "Каждая консультация направлена на построение надежной и эффективной стратегии для достижения ваших финансовых целей. Вот мой последовательный подход."}
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepItem}>
                <div className="step-number">{step.num}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

