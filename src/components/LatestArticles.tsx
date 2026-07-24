import Link from "next/link";
import Image from "next/image";
import styles from "./LatestArticles.module.css";
import articlesData from "@/data/articles.json";

export default function LatestArticles({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";
  // Get first 3 articles (latest ones)
  const latestArticles = articlesData.slice(0, 3);

  return (
    <section className={styles.latestArticles}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{isEn ? "Latest Articles" : "Последние статьи"}</h2>
          <Link href={isEn ? "/en/blog" : "/blog"} className={styles.viewAll}>
            {isEn ? "All articles →" : "Все статьи →"}
          </Link>
        </div>

        <div className={styles.grid}>
          {latestArticles.map((article, index) => {
            // Provide English fallback titles for standard articles
            let title = article.title;
            if (isEn) {
              if (article.slug === "alternative-assets-guide") {
                title = "Advantages of Alternative Asset Classes: Hedge Funds, Commodities, Gold";
              } else if (article.slug === "analiz-rynka-nedvizhimosti") {
                title = "Fundamental Analysis of the Real Estate and Commercial Property Market";
              } else if (article.slug === "data-driven-investment") {
                title = "Applying Quantitative Analysis Tools in Capital Management";
              }
            }

            return (
              <Link 
                href={isEn ? `/en/blog/${article.slug}` : `/blog/${article.slug}`} 
                key={article.slug}
                className={`${styles.card} animate-fade-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={`/${article.image}`}
                    alt={title}
                    fill
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.articleTitle}>{title}</h3>
                  <div className={styles.readMore}>
                    {isEn ? "Read more →" : "Читать далее →"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
