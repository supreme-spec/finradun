import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { cityNameFromSlug, cityRouteSlug, rawCities } from "@/app/cities/data";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return rawCities.map((city) => ({ city: cityRouteSlug(city) }));
}

export const revalidate = 604800;

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cityNameFromSlug(slug);
  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  const cityEnglish = getCityEnglishName(city);

  return {
    title: `Financial Advisory in ${cityEnglish} | Sergey Svistunov`,
    description: `Personalized investment and wealth management consultations for clients from ${cityEnglish}. Professional online support and custom asset strategy.`,
    alternates: {
      canonical: `/en/cities/${slug}`,
    },
    openGraph: {
      title: `Financial Advisory in ${cityEnglish} | Sergey Svistunov`,
      description: `Personalized investment and wealth management consultations for clients from ${cityEnglish}. Professional online support and custom asset strategy.`,
      url: `${SITE_URL}/en/cities/${slug}`,
      siteName: "RADUN",
      locale: "en_US",
      type: "article",
      images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: `Financial Advisory in ${cityEnglish}` }],
    },
  };
}

function stableHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function pickByCity<T>(city: string, items: T[]): T {
  return items[stableHash(city) % items.length];
}

export default async function CityPageEn({ params }: Props) {
  const { city: slug } = await params;
  const city = cityNameFromSlug(slug);

  if (!city) {
    notFound();
  }

  const cityEnglish = getCityEnglishName(city);
  const hash = stableHash(city);
  const activityLevel = 72 + (hash % 23); // 72% to 94%
  const indexScore = (6.4 + (hash % 31) / 10).toFixed(1); // 6.4 to 9.4
  const regionalPremium = (0.4 + (hash % 15) / 10).toFixed(1); // 0.4% to 1.8%
  const recommendedBonds = 25 + (hash % 16); // 25% to 40%
  const recommendedStocks = 90 - recommendedBonds - (hash % 5); // Stocks
  const recommendedGold = 100 - recommendedBonds - recommendedStocks; // Gold/Alternatives

  const regionalAdvice = [
    `Local market specifics in ${cityEnglish} require increased attention to diversification. Taking into account the development of regional infrastructure, we recommend a balanced structure focusing on highly liquid federal bonds (OFZ) and dividend-paying stocks of major blue-chip businesses.`,
    `For investors from ${cityEnglish}, the key emphasis is placed on capital protection against inflationary pressure. We recommend a strategic combination of defensive assets (including gold funds and replacement bonds) and floating-rate instruments (floaters).`,
    `The investment strategy for residents of ${cityEnglish} is focused on generating regular passive income. The optimal choice is creating an income portfolio utilizing high-quality corporate bonds and dividend stocks with yields exceeding the central bank's key rate.`,
  ][hash % 3];

  const heroDescriptions = [
    `Get a personalized financial strategy in ${cityEnglish}: from life goals definition to custom capital allocation and a detailed investment plan.`,
    `Providing dedicated support for clients from ${cityEnglish} on investment structure, risk management, and long-term capital compounding.`,
    `Professional financial advisory for residents of ${cityEnglish}: disciplined approach, transparent solutions, and performance control at every stage.`,
  ];

  const whyPoints = pickByCity(city, [
    [
      "Individual plan tailored to your goals and investment horizon",
      "Transparent decision-making logic with no forced financial instruments",
      "Regular portfolio adjustments in response to changing market conditions",
      "Ongoing support in executing the steps and maintaining portfolio discipline",
    ],
    [
      "Detailed diagnostic of your current financial health and weak spots",
      "Balanced risk-reward approach matching your true risk tolerance",
      "Scenario-based planning and capital preservation during highly volatile periods",
      "Practical, clear-cut recommendations that can be implemented immediately",
    ],
    [
      "Investment strategies for private individuals designed without unnecessary jargon",
      "Focus on long-term wealth compounding rather than short-term emotional reactions",
      "Systematic rebalancing and target asset allocation control according to the plan",
      "Personal guidance on tax optimization and portfolio cost-efficiency",
    ],
  ]);

  const servicesBlock = pickByCity(city, [
    {
      firstTitle: "Financial Plan & Goals",
      firstItems: [
        "Comprehensive audit of your current income and expenses structure",
        "Designing a robust financial safety net and cash reserves",
        "Planning major long-term goals: wealth target, children's education, retirement",
        "Defining a comfortable recurring investment budget",
      ],
      secondTitle: "Investment & Wealth Advisory",
      secondItems: [
        "Portfolio construction matched exactly to your personal risk profile",
        "Asset allocation and selection of high-quality financial instruments",
        "Formulating a disciplined plan for periodic top-ups and rebalancing",
        "Scheduled reviews and strategic adjustments of the portfolio",
      ],
    },
    {
      firstTitle: "Portfolio Diagnostic",
      firstItems: [
        "Analyzing your current holdings and concentrations of underlying risk",
        "Assessing overall diversification across global asset classes",
        "Verifying portfolio liquidity and alignment with your life objectives",
        "Prioritizing necessary steps for immediate cost and tax optimization",
      ],
      secondTitle: "Capital Growth Strategy",
      secondItems: [
        "Selecting a customized strategy matching your unique time horizon",
        "System for tracking and limiting max drawdowns and portfolio volatility",
        "Finding the perfect balance between defensive and high-yield components",
        "Step-by-step roadmap for implementation over the next 6-12 months",
      ],
    },
  ]);

  const faqSet = pickByCity(city, [
    [
      {
        q: `How to start a financial consultation in ${cityEnglish}?`,
        a: "Submit an inquiry via our contact form. Following a brief initial assessment, we will define a starting plan and agree on the most convenient format of cooperation.",
      },
      {
        q: "Can the advisory process be conducted entirely online?",
        a: "Yes. The vast majority of our consultations and ongoing portfolio support are conducted online (Zoom, Telegram) with maximum convenience and no loss of quality.",
      },
      {
        q: "Do you provide ready-to-use trading signals?",
        a: "No. Our focus is entirely on strategic asset allocation and the logic behind financial choices. The goal is for you to understand the system and manage your capital with confidence.",
      },
    ],
    [
      {
        q: `Is the consultation suitable for beginner investors in ${cityEnglish}?`,
        a: "Yes, the program is fully adaptable to your level. We begin with the foundational concepts of personal finance and build a clear, step-by-step framework.",
      },
      {
        q: "How often should I review and rebalance my portfolio?",
        a: "Typically once per quarter, or upon significant shifts in your personal life goals or major macroeconomic conditions.",
      },
      {
        q: "Can I book a one-time portfolio audit without long-term commitment?",
        a: "Yes, we offer one-time diagnostic sessions as well as monthly/yearly active wealth advisory and long-term support formats.",
      },
    ],
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSet.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Financial Advisory in ${cityEnglish} | Sergey Svistunov`,
    description: `Personalized investment and wealth management consultations for clients from ${cityEnglish}. Online support and custom capital strategy.`,
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
      "@id": `${SITE_URL}/en/cities/${slug}`,
    },
  };

  const speakableJsonLd = generatePageSpeakableSchema("city", `/en/cities/${slug}`);

  // Custom how-to in English
  const cityHowToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${SITE_URL}/en/cities/${slug}#howto`,
    name: `How to get a financial consultation in ${cityEnglish}`,
    description: `Step-by-step instructions for getting an investment and wealth advisory consultation in ${cityEnglish}`,
    url: `${SITE_URL}/en/cities/${slug}`,
    totalTime: "PT20M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Connect Online",
        text: `Message us via Telegram or complete our website form — remote consultation is fully tailored for clients in ${cityEnglish}.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Undergo Financial Assessment",
        text: "In our first introductory session, the advisor evaluates your current financial setup and detects high-impact growth areas.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Obtain Custom Strategy",
        text: "Receive a tailored capital allocation and management plan built around your objectives, risk tolerance, and city specifics.",
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `Sergey Svistunov — Independent Financial Advisor in ${cityEnglish}`,
    description: `Professional investment and wealth advisory services for private clients in ${cityEnglish} by Sergey Svistunov. Personal financial planning.`,
    url: `${SITE_URL}/en/cities/${slug}`,
    telephone: "+7-967-003-30-20",
    email: "s.svistunov@hotmail.com",
    priceRange: "$$",
    image: `${SITE_URL}/images/all/1.webp`,
    address: {
      "@type": "PostalAddress",
      addressLocality: cityEnglish,
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: cityEnglish,
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Financial consulting in ${cityEnglish}`,
    "provider": {
      "@type": "Person",
      "name": "Sergey Svistunov",
      "jobTitle": "Independent Financial Advisor",
      "url": SITE_URL,
    },
    "areaServed": {
      "@type": "City",
      "name": cityEnglish,
    },
    "description": `Personalized financial consultations and investment management for residents of ${cityEnglish}.`,
    "serviceType": "Financial Planning",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityHowToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        <article>
          <section className="container" style={{ padding: "4rem 1.5rem" }}>
            <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>
              City Profile
            </div>
            <h1 className="section-title">Financial Advisory in {cityEnglish}</h1>
            <p className="section-subtitle" style={{ maxWidth: 900 }}>
              {pickByCity(city, heroDescriptions)}
            </p>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>
              Why choose a financial consultation in {cityEnglish}?
            </h2>
            <ul style={{ marginTop: "1rem", display: "grid", gap: ".7rem", listStyle: "none", padding: 0 }}>
              {whyPoints.map((point) => (
                <li key={point} style={{ alignItems: "flex-start" }}>
                  ✓ {point}
                </li>
              ))}
            </ul>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>
              Our Services for Clients in {cityEnglish}
            </h2>
            <div
              style={{
                marginTop: "1rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1rem",
              }}
            >
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>{servicesBlock.firstTitle}</h3>
                <ul style={{ display: "grid", gap: ".6rem", listStyle: "none", padding: 0 }}>
                  {servicesBlock.firstItems.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>{servicesBlock.secondTitle}</h3>
                <ul style={{ display: "grid", gap: ".6rem", listStyle: "none", padding: 0 }}>
                  {servicesBlock.secondItems.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>
              Regional Financial Passport: {cityEnglish}
            </h2>
            <div
              className="glass-card"
              style={{ marginTop: "1rem", padding: "2rem", border: "1px solid rgba(226, 201, 116, 0.2)" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Investment Index
                  </div>
                  <div className="gold-text" style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>
                    {indexScore} / 10
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Financial Activity
                  </div>
                  <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>
                    {activityLevel}%
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Inflationary Premium
                  </div>
                  <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold", marginTop: "0.25rem" }}>
                    +{regionalPremium}%
                  </div>
                </div>
              </div>

              <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                Recommended Portfolio Structure
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    flex: "1 1 150px",
                  }}
                >
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>RF Stocks</div>
                  <div style={{ color: "var(--gold)", fontWeight: "bold", fontSize: "1.2rem" }}>
                    {recommendedStocks}%
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    flex: "1 1 150px",
                  }}
                >
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Bonds / Floaters</div>
                  <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{recommendedBonds}%</div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    flex: "1 1 150px",
                  }}
                >
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>Gold / Alternatives</div>
                  <div style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{recommendedGold}%</div>
                </div>
              </div>

              <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                Regional Specifics & Investment Advice
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{regionalAdvice}</p>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)" }}>Frequently Asked Questions</h2>
            <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
              {faqSet.map((faq) => (
                <div key={faq.q} className="glass-card" style={{ padding: "1.25rem 1.5rem" }}>
                  <h3 style={{ color: "var(--text-primary)", marginBottom: ".45rem" }}>{faq.q}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ marginTop: "2.5rem", padding: "1.5rem" }}>
              <h3 style={{ color: "var(--text-primary)", marginBottom: ".75rem" }}>City Information</h3>
              <p style={{ color: "var(--text-secondary)" }}>City: {cityEnglish}</p>
              <p style={{ color: "var(--text-secondary)" }}>Region: Russia</p>
              <div style={{ marginTop: "1rem", display: "flex", gap: ".8rem", flexWrap: "wrap" }}>
                <Link href="/en/cities" className="btn btn-outline">
                  ← List of all cities
                </Link>
                <Link href="/en/contacts" className="btn btn-primary">
                  Consultation
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
