import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { cityRouteSlug, rawCities } from "@/app/cities/data";

// Helper for English names
function getCityEnglishName(city: string): string {
  if (city === "Москва") return "Moscow";
  if (city === "Санкт-Петербург") return "Saint Petersburg";
  if (city === "Новосибирск") return "Novosibirsk";
  if (city === "Екатеринбург") return "Yekaterinburg";
  if (city === "Казань") return "Kazan";
  if (city === "Нижний Новгород") return "Nizhny Novgorod";
  if (city === "Красноярск") return "Krasnoyarsk";
  if (city === "Челябинск") return "Chelyabinsk";
  if (city === "Самара") return "Samara";
  if (city === "Уфа") return "Ufa";
  if (city === "Ростов-на-Дону") return "Rostov-on-Don";
  if (city === "Краснодар") return "Krasnodar";
  if (city === "Омск") return "Omsk";
  if (city === "Воронеж") return "Voronezh";
  if (city === "Пермь") return "Perm";
  if (city === "Волгоград") return "Volgograd";
  if (city === "Саратов") return "Saratov";
  if (city === "Тюмень") return "Tyumen";
  if (city === "Иркутск") return "Irkutsk";
  if (city === "Барнаул") return "Barnaul";
  if (city === "Ульяновск") return "Ulyanovsk";
  if (city === "Владивосток") return "Vladivostok";
  if (city === "Ярославль") return "Yaroslavl";
  if (city === "Ижевск") return "Izhevsk";
  if (city === "Хабаровск") return "Khabarovsk";
  if (city === "Махачкала") return "Makhachkala";
  if (city === "Томск") return "Tomsk";
  if (city === "Оренбург") return "Orenburg";
  if (city === "Кемерово") return "Kemerovo";
  if (city === "Новороссийск") return "Novorossiysk";
  if (city === "Сочи") return "Sochi";

  const map: Record<string, string> = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z", и: "i", й: "y",
    к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "kh", ц: "ts", ч: "ch", ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };

  const lower = city.toLowerCase();
  const translited = lower
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("");

  return translited
    .split(/([\s-])/)
    .map((part) => {
      if (part === " " || part === "-") return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

function getCityEnglishCardDesc(cityEnglish: string, index: number): string {
  const templates = [
    `Financial consultation for clients in ${cityEnglish}: custom plan, capital structure, and asset growth.`,
    `Wealth management for ${cityEnglish} residents: investments, risk profile, and portfolio monitoring.`,
    `Tailored personal finance advisory in ${cityEnglish}: from life goals to a practical investment plan.`,
    `Investment consulting in ${cityEnglish}: structured approach, market insights, and long-term yield.`,
  ];
  return templates[index % templates.length];
}

export const metadata: Metadata = {
  title: "Cities in Russia | Financial Advisory & Investment Services",
  description: "Get personalized wealth management solutions in your city. Full coverage of Russia, including Moscow, Saint Petersburg, and 350+ other municipal regions.",
  openGraph: {
    title: "Geography of Financial Advisory | Sergey Svistunov",
    description: "Get personalized wealth management solutions in your city. Full coverage of Russia, including Moscow, Saint Petersburg, and 350+ other municipal regions.",
    url: `${SITE_URL}/en/cities`,
    siteName: "RADUN",
    locale: "en_US",
    type: "article",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "Financial consultation in Russian regions" }],
  },
  alternates: {
    canonical: "/en/cities",
  },
};

const faqItems = [
  {
    question: "In which cities are consultations available?",
    answer: "Financial consultations are available online in more than 350 cities across Russia: Moscow, Saint Petersburg, Novosibirsk, Kazan, and many others.",
  },
  {
    question: "How do I get a consultation in my city?",
    answer: "Choose your city from the directory, then send an inquiry via our contact form, Telegram, or phone. All advisory processes are fully adapted for convenient online communication.",
  },
  {
    question: "Is there a difference in services depending on the location?",
    answer: "No, the quality and scope of our investment advisory services are completely uniform. We tailor our recommendations based on regional tax aspects and individual financial goals.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cities in Russia | Financial Advisory & Investment Services",
  description: "Get personalized wealth management solutions in your city. Full coverage of Russia: Moscow, Saint Petersburg, and 350+ other cities.",
  datePublished: "2024-06-01",
  dateModified: "2026-06-14",
  author: {
    "@type": "Person",
    name: "Sergey Svistunov",
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
    "@id": `${SITE_URL}/en/cities`,
  },
};

export default function CitiesPageEn() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>Regional Presence</div>
          <h1 className="section-title">Cities of Russia</h1>
          <h2 style={{ marginTop: "1.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Select a city for consultation</h2>
          <p className="section-subtitle" style={{ maxWidth: 820 }}>
            Select your city to view customized financial advisory services,
            tailored investment strategies, and localized financial planning.
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {rawCities.map((city, index) => {
              const engName = getCityEnglishName(city);
              return (
                <Link
                  key={city}
                  href={`/en/cities/${cityRouteSlug(city)}`}
                  className="glass-card"
                  style={{ padding: "1.2rem 1.4rem", textDecoration: "none" }}
                >
                  <div className="gold-text" style={{ fontWeight: 600, marginBottom: ".35rem" }}>
                    {engName} <span style={{ fontSize: "0.85em", opacity: 0.6 }}>({city})</span>
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontSize: ".95rem" }}>
                    {getCityEnglishCardDesc(engName, index)}
                  </div>
                </Link>
              );
            })}
          </div>

          <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
            {faqItems.map((faq) => (
              <div key={faq.question} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.question}</h3>
                <p style={{ color: "var(--text-secondary)" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
