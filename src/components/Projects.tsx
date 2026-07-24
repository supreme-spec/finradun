import styles from "./Projects.module.css";

const projectsRu = [
  {
    id: 1,
    client: "Антон",
    goal: "Максимизация дохода от сбережений.",
    solution: "Был разработан сбалансированный инвестиционный портфель с доходностью 23% годовых.",
    result: "Получил стабильный дополнительный доход, обеспечив себе комфортную жизнь.",
  },
  {
    id: 2,
    client: "Анна",
    goal: "Сохранение капитала и обеспечение пенсионного периода.",
    solution: "Были рекомендованы инвестиции в низкорисковые активы и защиту капитала.",
    result: "Обеспечила надежную основу для комфортной пенсии.",
  },
  {
    id: 3,
    client: "Иван",
    goal: "Избежание убытков на фоне экономической нестабильности.",
    solution: "Применялась защитная стратегия и перераспределение активов.",
    result: "Сохранил капитал и минимизировал убытки во время кризиса.",
  },
];

const projectsEn = [
  {
    id: 1,
    client: "Anton",
    goal: "Maximizing the compound yield of accumulated savings.",
    solution: "We designed a balanced, multi-asset portfolio capturing a 23% annual return.",
    result: "Secured resilient secondary cash flow streams, improving long-term standard of living.",
  },
  {
    id: 2,
    client: "Anna",
    goal: "Capital preservation and strategic retirement planning.",
    solution: "Allocated assets into ultra-safe debt vehicles and structured principal protection notes.",
    result: "Built a rock-solid foundation for a completely stress-free, comfortable retirement.",
  },
  {
    id: 3,
    client: "Ivan",
    goal: "Eliminating downside risk during intense economic volatility.",
    solution: "Deployed a rigorous defensive strategy with macro-driven tactical reallocations.",
    result: "Preserved core capital and successfully minimized drawdown losses throughout the crisis.",
  },
];

export default function Projects({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";
  const projects = isEn ? projectsEn : projectsRu;

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className="tag tag-gold" style={{marginBottom: '1rem'}}>{isEn ? "Success Cases" : "Кейсы"}</div>
        <h2 className="section-title centered" style={{display: 'block', textAlign: 'center', marginBottom: '4rem'}}>
          {isEn ? "Proven Client Success Stories" : "Примеры успешных проектов"}
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.header}>
                <span>{isEn ? "Project Case" : "Проект"}</span>
                <div className={styles.client}>{project.client}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.infoBlock}>
                  <strong className={styles.label}>{isEn ? "Goal:" : "Цель:"}</strong>
                  <p>{project.goal}</p>
                </div>
                <div className={styles.infoBlock}>
                  <strong className={styles.label}>{isEn ? "Solution:" : "Решение:"}</strong>
                  <p>{project.solution}</p>
                </div>
                <div className={styles.infoBlock}>
                  <strong className={styles.label}>{isEn ? "Outcome:" : "Итог:"}</strong>
                  <p className={styles.highlight}>{project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

