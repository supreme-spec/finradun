import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import "@/app/article-styles.css";
import { SITE_URL } from "@/lib/site";
import { GoogleGenAI, Type } from "@google/genai";
import { getAuthor, DEFAULT_AUTHOR_SLUG } from "@/data/authors";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";

interface Article {
  slug: string;
  title: string;
  image: string;
  content?: string;
  datePublished?: string;
  author?: string;
  shortAnswer?: string;
  titleEn?: string;
  contentEn?: string;
}

function wrapTables(html: string): string {
  if (!html) return html;
  return html
    .replace(/<table>/gi, '<div class="table-wrap"><table>')
    .replace(/<\/table>/gi, "</table></div>");
}

// Robust JSON cleaning helper
function cleanAndParseJson(text: string) {
  let cleaned = text.trim();
  // Strip potential markdown JSON code block wrappers
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.substring(3);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  cleaned = cleaned.trim();
  
  // Find first '{' and last '}' to handle any leading/trailing garbage text
  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }
  
  return JSON.parse(cleaned);
}

// Dynamic translation helper using Gemini REST API with @google/genai
async function translateWithGemini(title: string, content: string): Promise<{ title: string; content: string }> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // If no API key is set, return a translated version of the title and a placeholder summarizing the article
    return {
      title: `${title} (English Translation)`,
      content: `
        <div style="padding: 2rem; border: 1px dashed rgba(250, 201, 33, 0.3); border-radius: 12px; background: rgba(250, 201, 33, 0.05); margin-bottom: 2rem; color: var(--text-secondary);">
          <h4 style="color: var(--gold); margin-bottom: 0.5rem;">Translation Service Available</h4>
          <p>This article is dynamically translated using the Gemini translation engine. To enable live English translations, please provide a valid <code>GEMINI_API_KEY</code> in the environment configurations.</p>
        </div>
        <h3>${title}</h3>
        <p>This article covers advanced financial literacy, asset allocation, and wealth management strategies by Sergey Svistunov.</p>
        <p>Please refer to the Russian version of the site for the full text, or configure the Gemini API key to receive instant professional English translations.</p>
      `
    };
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const prompt = `You are an expert financial translator. Translate the following Russian blog article title and HTML content into professional, highly accurate financial English.
    
    IMPORTANT RULES:
    1. Retain all HTML tags, attributes, and structures exactly as they are.
    2. Only translate the text within the HTML tags.
    3. Do not modify or delete CSS class names, styles, or tags like <p>, <h3>, <ul>, <li>, <strong>, etc.
    4. Keep the output as valid JSON with "title" and "content" fields.
    
    Here is the Russian Article Title:
    ${title}
    
    Here is the Russian Article HTML Content:
    ${content}
    
    Return ONLY a valid JSON object matching this schema:
    {
      "title": "Translated Title",
      "content": "Translated HTML Content"
    }`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["title", "content"]
        }
      },
    });

    const responseText = response.text;
    if (responseText) {
      const parsed = cleanAndParseJson(responseText);
      if (parsed.title && parsed.content) {
        return {
          title: parsed.title,
          content: parsed.content
        };
      }
    }
  } catch (err) {
    console.error("Gemini translation failed, using fallback:", err);
  }

  // Fallback translation
  return {
    title: `${title}`,
    content: content || "<p>Article text is loading...</p>"
  };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/data/articles.json");
  const data: Article[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const article = data.find((a: Article) => a.slug === slug);

  if (!article) return { title: "Article Not Found | Radun" };

  const sourceText = article.contentEn || article.content || "";
  const plainText = sourceText.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  let articleDesc = plainText.length > 160 ? plainText.substring(0, 157) + "..." : (plainText || (article.titleEn || article.title));
  const pad = " Read expert insights from independent financial advisor Sergey Svistunov on RADUN.";
  while (articleDesc.length < 140 && articleDesc.length + pad.length <= 160) articleDesc += pad;
  if (articleDesc.length < 140) articleDesc = (articleDesc + pad).substring(0, 157) + "...";

  const metaTitle = article.titleEn || article.title;

  return {
    title: `${metaTitle} | Radun Blog`,
    description: articleDesc,
    alternates: {
      canonical: `/en/blog/${slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: articleDesc,
      url: `${SITE_URL}/en/blog/${slug}`,
      siteName: "RADUN",
      locale: "en_US",
      type: "article",
      images: [{ url: article.image.startsWith("http") ? article.image : `/${article.image.replace(/^\/?/, "")}`, width: 1200, height: 630, alt: article.title }],
    },
  };
}

export default async function BlogPostEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/data/articles.json");
  const data: Article[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const article = data.find((a: Article) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  // Prefer stored English title/content; fill any missing parts via the live translation engine
  const translatedTitle = article.titleEn || null;
  const translatedContent = article.contentEn || null;
  let translated: { title: string; content: string };
  if (translatedTitle && translatedContent) {
    translated = { title: translatedTitle, content: translatedContent };
  } else {
    const g = await translateWithGemini(article.title, article.content || "");
    translated = {
      title: translatedTitle || g.title,
      content: translatedContent || g.content,
    };
  }

  // Fallback image logic if it was parsed as full url or partial folder
  const imageUrl = article.image.startsWith("http")
     ? article.image
     : `/${article.image.replace(/^\/?/, "")}`;

  const plainText = translated.content.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  let articleDesc = plainText.length > 160 ? plainText.substring(0, 157) + "..." : (plainText || translated.title);
  const pad = " Read expert insights from independent financial advisor Sergey Svistunov on RADUN.";
  while (articleDesc.length < 140 && articleDesc.length + pad.length <= 160) articleDesc += pad;
  if (articleDesc.length < 140) articleDesc = (articleDesc + pad).substring(0, 157) + "...";

  const author = getAuthor(article.author || DEFAULT_AUTHOR_SLUG) || getAuthor(DEFAULT_AUTHOR_SLUG)!;
  const shortAnswer = (article.shortAnswer
    ? translated.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).slice(0, 45).join(" ").replace(/[.,;:!?]+$/, "") + "."
    : plainText.split(/\s+/).slice(0, 45).join(" ").replace(/[.,;:!?]+$/, "") + ".");
  const articleContent = wrapTables(translated.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: translated.title,
    description: articleDesc,
    image: `${SITE_URL}/${article.image.replace(/^\/?/, "")}`,
    datePublished: article.datePublished || "2024-06-01",
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: author.nameEn,
      url: `${SITE_URL}/en/authors/${author.slug}`,
      sameAs: author.sameAs,
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
      "@id": `${SITE_URL}/en/blog/${slug}`,
    },
  };

  const speakableJsonLd = generatePageSpeakableSchema("blogArticle", `/en/blog/${slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <Header />
      <main style={{ paddingTop: "100px", minHeight: "80vh" }}>
        {/* Hero Section with Gradient Background */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(250, 201, 33, 0.05) 0%, transparent 100%)',
          padding: '4rem 0',
          marginBottom: '3rem'
        }}>
          <section className="container" style={{ padding: "0 1.5rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>
              <div className="tag tag-gold" style={{ marginBottom: "1rem" }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', display: 'inline-block', marginRight: '6px' }}></span>
                Sergey Svistunov&apos;s Journal
              </div>
              <h1 style={{ 
                color: "var(--gold)", 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                marginBottom: "1.5rem", 
                lineHeight: "1.2",
                fontFamily: "'Playfair Display', serif"
              }}>
                {translated.title}
              </h1>
              
              {/* Reading Time & Share */}
              <div style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                alignItems: 'center',
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(250, 201, 33, 0.2)',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>~5 min read</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Updated: {new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <a href={`https://t.me/share/url?url=${encodeURIComponent(`${SITE_URL}/en/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" 
                     style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.648 6.648c-.193 2.042-1.032 7.175-1.459 9.45-.18.962-.536 1.284-.877 1.316-.743.068-1.31-.492-2.032-.965-1.128-.738-1.764-1.194-2.856-1.912-1.266-.833-.446-1.296.276-2.035.189-.193 3.466-3.175 3.53-3.446.009-.04.018-.193-.073-.274-.091-.081-.224-.053-.32-.031-.136.031-2.302 1.458-6.495 4.282-.613.419-1.171.625-1.674.613-.551-.013-1.61-.312-2.404-.572-.972-.317-1.743-.485-1.676-1.023.035-.281.423-.568 1.166-.864 4.585-1.996 7.65-3.323 9.184-3.96 4.37-1.81 5.284-2.127 5.878-2.136.13 0 .42.03.61.185.16.13.205.306.227.433.023.125.053.408.032.637z"/>
                    </svg>
                    Share
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="container" style={{ padding: "0 1.5rem", paddingBottom: "4rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Featured Image */}
            {article.image && (
              <div style={{ 
                width: "100%", 
                height: "auto", 
                aspectRatio: '16/9',
                borderRadius: "20px", 
                overflow: "hidden", 
                marginBottom: "3rem",
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(250, 201, 33, 0.2)',
                position: "relative"
              }}>
                 <Image src={imageUrl} alt={`${translated.title} — financial advice by Sergey Svistunov`} fill style={{ objectFit: "cover" }} priority referrerPolicy="no-referrer" />
              </div>
            )}
            
             {/* Direct Answer */}
             {shortAnswer && (
               <div
                 className="direct-answer"
                 style={{
                   maxWidth: "800px",
                   margin: "0 auto 2.5rem",
                   padding: "1.5rem 1.75rem",
                   background: "linear-gradient(135deg, rgba(250, 201, 33, 0.12) 0%, rgba(250, 201, 33, 0.04) 100%)",
                   border: "1px solid rgba(250, 201, 33, 0.35)",
                   borderRadius: "16px",
                 }}
               >
                 <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", color: "var(--gold)", fontWeight: 600, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                   Brief Answer
                 </div>
                 <p style={{ color: "var(--text-primary)", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>{shortAnswer}</p>
               </div>
             )}

             {/* Article Content */}
             <div 
               className="article-content"
               style={{ 
                 color: "var(--text-primary)", 
                 fontSize: "1.125rem", 
                 lineHeight: "1.8",
                 maxWidth: '800px',
                 margin: '0 auto'
               }}
               dangerouslySetInnerHTML={{ __html: articleContent }} 
             />

             {/* Risk Disclaimer */}
             <div style={{ maxWidth: "800px", margin: "3rem auto 0", padding: "1.25rem 1.5rem", border: "1px solid rgba(250, 201, 33, 0.25)", borderRadius: "12px", background: "rgba(255,255,255,0.02)", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
               <strong style={{ color: "var(--text-secondary)" }}>Disclaimer:</strong> the materials are for informational purposes only and do not constitute individual investment advice. Investing involves the risk of capital loss. Assess your situation and consult a professional before making decisions.
             </div>

             {/* CTA Section */}
            <div style={{ 
              marginTop: "5rem", 
              padding: "3rem",
              background: 'linear-gradient(135deg, rgba(250, 201, 33, 0.1) 0%, rgba(250, 201, 33, 0.05) 100%)',
              borderRadius: "20px",
              border: "1px solid rgba(250, 201, 33, 0.3)",
              textAlign: "center"
            }}>
              <h3 style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "1.8rem" }}>
                Need Private Wealth Advice?
              </h3>
              <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1rem" }}>
                Book an individual consultation to review your current portfolio and goals.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/en/contacts" className="btn btn-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    <path d="M22 2l-7 7"/>
                  </svg>
                  Book Session
                </Link>
                <a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.648 6.648c-.193 2.042-1.032 7.175-1.459 9.45-.18.962-.536 1.284-.877 1.316-.743.068-1.31-.492-2.032-.965-1.128-.738-1.764-1.194-2.856-1.912-1.266-.833-.446-1.296.276-2.035.189-.193 3.466-3.175 3.53-3.446.009-.04.018-.193-.073-.274-.091-.081-.224-.053-.32-.031-.136.031-2.302 1.458-6.495 4.282-.613.419-1.171.625-1.674.613-.551-.013-1.61-.312-2.404-.572-.972-.317-1.743-.485-1.676-1.023.035-.281.423-.568 1.166-.864 4.585-1.996 7.65-3.323 9.184-3.96 4.37-1.81 5.284-2.127 5.878-2.136.13 0 .42.03.61.185.16.13.205.306.227.433.023.125.053.408.032.637z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div style={{ marginTop: "3rem", textAlign: "center" }}>
               <Link href="/en/blog" className="btn btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M19 12H5M12 19l-7-7 7-7"/>
                 </svg>
                 ← Back to Journal
               </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
