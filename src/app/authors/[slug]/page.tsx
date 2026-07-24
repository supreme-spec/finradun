import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authors, getAuthor, DEFAULT_AUTHOR_SLUG } from "@/data/authors";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export const revalidate = 604800;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return { title: "Автор не найден | FinRadun" };
  return {
    title: `${author.name} | ${author.role}`,
    description: `${author.name} — ${author.role}. ${author.bio}`,
    alternates: { canonical: `/authors/${author.slug}` },
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthor(slug) || getAuthor(DEFAULT_AUTHOR_SLUG);
  if (!author) return notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `${SITE_URL}/authors/${author.slug}`,
    image: `${SITE_URL}${author.photo}`,
    email: author.email,
    telephone: author.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Москва",
      addressCountry: "RU",
    },
    alumniOf: "Финансы и кредит (экономическое образование)",
    knowsAbout: [
      "Инвестиции",
      "Управление капиталом",
      "Фондовый рынок",
      "Финансовая аналитика",
      "Личные финансы",
    ],
    hasCredential: author.credentials.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c,
      credentialCategory: "certification",
    })),
    sameAs: author.sameAs,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Как записаться на консультацию к ${author.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Используйте контакты на этой странице: email, Telegram или форму на сайте. Консультации проходят онлайн.",
        },
      },
      {
        "@type": "Question",
        name: "Какая квалификация у автора?",
        acceptedAnswer: {
          "@type": "Answer",
          text: author.credentials.join("; "),
        },
      },
      {
        "@type": "Question",
        name: "Опыт работы в каких компаниях?",
        acceptedAnswer: {
          "@type": "Answer",
          text: author.experience,
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${author.name} | ${author.role}`,
    description: author.bio,
    datePublished: "2024-06-01",
    dateModified: "2026-07-24",
    author: {
      "@type": "Person",
      name: author.name,
      url: `${SITE_URL}/authors/${author.slug}`,
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
      "@id": `${SITE_URL}/authors/${author.slug}`,
    },
  };

  const sourcesRu = [
    { name: "Московская биржа", url: "https://www.moex.com/ru/" },
    { name: "НАУФОР", url: "https://www.naufor.ru/" },
    { name: "Центробанк РФ", url: "https://cbr.ru/" },
    { name: "Cointelegraph — автор", url: "https://cointelegraph.com/" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <main style={{ paddingTop: "140px", minHeight: "80vh", paddingBottom: "4rem" }}>
        <article>
        <section className="container" style={{ padding: "0 1.5rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <div style={{ position: "relative", width: "140px", height: "140px", borderRadius: "50%", overflow: "hidden", border: "3px solid var(--gold)", flexShrink: 0 }}>
                <Image src={author.photo} alt={`${author.name} — ${author.role}`} fill style={{ objectFit: "cover" }} priority />
              </div>
              <div>
                <div className="tag tag-gold" style={{ marginBottom: "0.75rem" }}>Эксперт FinRadun</div>
                <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "0.5rem" }}>{author.name}</h1>
                <p style={{ color: "var(--gold-light)", fontSize: "1.1rem" }}>{author.role}</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>Биография</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.bio}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Образование</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.education}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Опыт на рынках</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.experience}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Регалии и квалификация</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                {author.credentials.map((c, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>{c}</li>
                ))}
              </ul>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Контакты и профили</h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a className="btn btn-outline" href={`mailto:${author.email}`}>Email</a>
                <a className="btn btn-outline" href={`https://t.me/radun88`} target="_blank" rel="noopener noreferrer">Telegram</a>
                {author.sameAs.filter((s) => s.includes("linkedin")).map((s) => (
                  <a key={s} className="btn btn-outline" href={s} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                ))}
                {author.sameAs.filter((s) => s.includes("cointelegraph")).map((s) => (
                  <a key={s} className="btn btn-outline" href={s} target="_blank" rel="noopener noreferrer">Cointelegraph</a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/authors" className="btn btn-ghost">← Все авторы</Link>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Источники и ссылки</h2>
            <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", lineHeight: 2 }}>
              {sourcesRu.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>{src.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
