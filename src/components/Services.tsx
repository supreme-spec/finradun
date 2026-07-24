import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Обучение инвестициям",
    desc: "Индивидуальные программы как для новичков, так и для опытных инвесторов. Построение базы финансовых знаний.",
    icon: "📚",
    level: "Все уровни",
  },
  {
    id: 2,
    title: "Управление капиталом",
    desc: "Полный цикл управления вашими активами. Максимизация доходности с учетом вашего риск-профиля.",
    icon: "💼",
    level: "Крупный капитал",
  },
  {
    id: 3,
    title: "Инвестиционное консультирование",
    desc: "Персональные консультации, аудит текущего портфеля и разработка индивидуальной стратегии инвестирования.",
    icon: "🤝",
    level: "Средний / Высокий",
  },
  {
    id: 4,
    title: "Финансовая аналитика",
    desc: "Глубокий анализ рынков и активов. Поиск недооцененных компаний и перспективных секторов экономики.",
    icon: "📊",
    level: "Для бизнеса и инвесторов",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <div className="tag tag-gold">Экспертиза</div>
          <h2 className="section-title centered">Инновационные решения<br/>для вашего роста</h2>
          <p className="section-subtitle centered">
            Качественные финансовые услуги, нацеленные на долгосрочный результат и защиту ваших средств от инфляции и рыночных шоков.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc) => (
            <div key={svc.id} className={`glass-card ${styles.card}`}>
              <div className={styles.icon}>{svc.icon}</div>
              <h3 className={styles.title}>{svc.title}</h3>
              <p className={styles.desc}>{svc.desc}</p>
              <div className={styles.footer}>
                <span className={styles.levelTag}>{svc.level}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
