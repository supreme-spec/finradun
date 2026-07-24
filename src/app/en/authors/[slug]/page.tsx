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
  if (!author) return { title: "Author not found | FinRadun" };
  return {
    title: `${author.nameEn} | ${author.roleEn}`,
    description: `${author.nameEn} — ${author.roleEn}. ${author.bioEn}`,
    alternates: { canonical: `/en/authors/${author.slug}` },
  };
}

export default async function AuthorPageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthor(slug) || getAuthor(DEFAULT_AUTHOR_SLUG);
  if (!author) return notFound();

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.nameEn,
    jobTitle: author.roleEn,
    description: author.bioEn,
    url: `${SITE_URL}/en/authors/${author.slug}`,
    image: `${SITE_URL}${author.photo}`,
    email: author.email,
    telephone: author.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Moscow",
      addressCountry: "RU",
    },
    alumniOf: "Finance and Credit (economics degree)",
    knowsAbout: [
      "Investments",
      "Wealth management",
      "Stock market",
      "Financial analytics",
      "Personal finance",
    ],
    hasCredential: author.credentialsEn.map((c) => ({
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
        name: `How to book a consultation with ${author.nameEn}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the contacts on this page: email, Telegram or the website form. Consultations are held online.",
        },
      },
      {
        "@type": "Question",
        name: "What are the author's qualifications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: author.credentialsEn.join("; "),
        },
      },
      {
        "@type": "Question",
        name: "What companies has the author worked for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: author.experienceEn,
        },
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${author.nameEn} | ${author.roleEn}`,
    description: author.bioEn,
    datePublished: "2024-06-01",
    dateModified: "2026-07-24",
    author: {
      "@type": "Person",
      name: author.nameEn,
      url: `${SITE_URL}/en/authors/${author.slug}`,
    },
    publisher: {
      "@type": "Organization",
      "name": "RADUN",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/en/authors/${author.slug}`,
    },
  };

  const sourcesEn = [
    { name: "Moscow Exchange", url: "https://www.moex.com/en/" },
    { name: "NAUFOR", url: "https://www.naufor.ru/en" },
    { name: "Central Bank of Russia", url: "https://cbr.ru/en/" },
    { name: "Cointelegraph — author", url: "https://cointelegraph.com/" },
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
                <Image src={author.photo} alt={`${author.nameEn} — ${author.roleEn}`} fill style={{ objectFit: "cover" }} priority />
              </div>
              <div>
                <div className="tag tag-gold" style={{ marginBottom: "0.75rem" }}>FinRadun Expert</div>
                <h1 className="section-title" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", marginBottom: "0.5rem" }}>{author.nameEn}</h1>
                <p style={{ color: "var(--gold-light)", fontSize: "1.1rem" }}>{author.roleEn}</p>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "2.5rem", lineHeight: 1.7, color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1rem" }}>Biography</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.bioEn}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Education</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.educationEn}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Market experience</h2>
              <p style={{ marginBottom: "1.5rem" }}>{author.experienceEn}</p>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Credentials</h2>
              <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
                {author.credentialsEn.map((c, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>{c}</li>
                ))}
              </ul>

              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "1rem" }}>Contacts & Profiles</h2>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a className="btn btn-outline" href={`mailto:${author.email}`}>Email</a>
                <a className="btn btn-outline" href="https://t.me/radun88" target="_blank" rel="noopener noreferrer">Telegram</a>
                {author.sameAs.filter((s) => s.includes("linkedin")).map((s) => (
                  <a key={s} className="btn btn-outline" href={s} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                ))}
                {author.sameAs.filter((s) => s.includes("cointelegraph")).map((s) => (
                  <a key={s} className="btn btn-outline" href={s} target="_blank" rel="noopener noreferrer">Cointelegraph</a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/en/authors" className="btn btn-ghost">← All authors</Link>
            </div>

            <h2 style={{ marginTop: "2.5rem", color: "var(--text-primary)", marginBottom: "1rem" }}>Sources</h2>
            <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px", lineHeight: 2 }}>
              {sourcesEn.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>{src.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
