export interface Author {
  slug: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  photo: string;
  bio: string;
  bioEn: string;
  credentials: string[];
  credentialsEn: string[];
  education: string;
  educationEn: string;
  experience: string;
  experienceEn: string;
  email: string;
  phone: string;
  sameAs: string[];
}

export const authors: Author[] = [
  {
    slug: "sergey-svistunov",
    name: "Сергей Свистунов",
    nameEn: "Sergey Svistunov",
    role: "Независимый финансовый советник",
    roleEn: "Independent Financial Advisor",
    photo: "/images/all/1.webp",
    bio: "Независимый финансовый советник с 8-летним опытом работы в банковском секторе России (Тинькофф, ВТБ, Сбербанк, ПСБ, МКБ). Квалификация НАУФОР 7-го уровня. В 2021 году занял 122-е место из 26 054 участников в конкурсе «Лучший частный инвестор России» (Московская биржа). Помогает частным клиентам формировать долгосрочные инвестиционные стратегии без конфликта интересов.",
    bioEn: "Independent financial advisor with 8 years of experience in the Russian banking sector (Tinkoff, VTB, Sberbank, PSB, MKB). NAUFOR level 7 certification. In 2021 took 122nd place out of 26,054 participants in the «Best Private Investor of Russia» contest (Moscow Exchange). Helps private clients build long-term investment strategies with no conflict of interest.",
    credentials: [
      "НАУФОР — Финансовый консультант, 7 уровень квалификации",
      "122-е место из 26 054 в конкурсе «Лучший частный инвестор России 2021» (Московская биржа)",
      "8+ лет практического опыта на фондовом рынке",
    ],
    credentialsEn: [
      "NAUFOR — Financial Consultant, qualification level 7",
      "122nd place out of 26,054 in the «Best Private Investor of Russia 2021» contest (Moscow Exchange)",
      "8+ years of practical experience in the stock market",
    ],
    education: "Профильное экономическое образование, специализация «Финансы и кредит». Регулярное повышение квалификации по программам НАУФОР и Московской биржи.",
    educationEn: "Degree in economics with a specialization in Finance and Credit. Continuous professional development through NAUFOR and Moscow Exchange programs.",
    experience: "Тинькофф, ВТБ, Сбербанк, ПСБ, МКБ — работа с VIP-клиентами, управление портфелями и инвестиционное консультирование.",
    experienceEn: "Tinkoff, VTB, Sberbank, PSB, MKB — working with VIP clients, portfolio management and investment advisory.",
    email: "s.svistunov@hotmail.com",
    phone: "+7 967 003 30 20",
    sameAs: [
      "https://vk.com/veles__voyage",
      "https://www.instagram.com/radun.veles/",
      "https://vk.ru/radun.veles",
    ],
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export const DEFAULT_AUTHOR_SLUG = "sergey-svistunov";
