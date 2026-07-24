import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import Projects from "@/components/Projects";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { generatePageSpeakableSchema } from "@/lib/seo/speakable";

const speakableJsonLd = generatePageSpeakableSchema('portfolio', '/en/portfolio');

export const metadata = {
  title: "Sergey Svistunov | Financial Advisor: Biography & Experience",
  description: "Explore the biography, qualifications, and 8+ years of banking experience of independent wealth advisor Sergey Svistunov. Learn about portfolio results.",
  openGraph: {
    title: "Sergey Svistunov | Financial Advisor: Biography & Experience",
    description: "Explore the biography, qualifications, and 8+ years of banking experience of independent wealth advisor Sergey Svistunov.",
    url: `${SITE_URL}/en/portfolio`,
    siteName: "RADUN",
    locale: "en_US",
    type: "profile",
    images: [{ url: "/images/all/1.webp", width: 1200, height: 630, alt: "Sergey Svistunov — Financial Advisor" }],
  },
  alternates: {
    canonical: "/en/portfolio",
  },
};

const faqItems = [
  {
    question: "Where has Sergey Svistunov worked?",
    answer: "Tinkoff, VTB, Sberbank, PSB, MCB — over 8 years in the banking sector in positions ranging from financial associate to VIP advisory support.",
  },
  {
    question: "What qualifications and certifications does he hold?",
    answer: "NAUFOR level 7 (Financial Consultant), ranked 122nd out of 26,054 competitors in the Best Private Investor of Russia 2021 contest. Educated at RUDN, MVSE, Bauman Moscow State Technical University, and Moscow State University (MSU).",
  },
  {
    question: "What projects does he run besides financial advisory?",
    answer: "Veles Voyage travel agency (veles-voyage.ru), Franglish language school (franglish-original.ru), and full-stack Python software development.",
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
  headline: "Sergey Svistunov | Financial Advisor | Biography & Experience",
  description: "Biography, professional experience (Tinkoff, VTB, Sberbank) and competencies of financial advisor Sergey Svistunov. 122nd in Best Private Investor 2021.",
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
    "@id": `${SITE_URL}/en/portfolio`,
  },
};

export default function PortfolioPageEn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <Header />
      <main><article>
        {/* Education and Biography Section */}
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          <h1 style={{ color: "var(--gold)", fontSize: "2.5rem", marginBottom: "1rem" }}>Biography and Experience of Sergey Svistunov</h1>
          <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6" }}>
            Explore my educational qualifications, athletic records, and core projects.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "3rem", marginTop: "3rem" }}>
            
            {/* Bio Text */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>A Bit About Me</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1rem" }}>
                After earning my <strong>Bachelor&apos;s Degree</strong> in <em>Management</em> at the Institute of Economics, I pursued continuous professional excellence through multiple specialized educational programs:
              </p>
              <ul style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
                <li><em>Peoples&apos; Friendship University of Russia (RUDN)</em> - <strong>Human Resource Management</strong>;</li>
                <li><em>Moscow Higher School of Economics (MVSE)</em> - <strong>Accounting & Audit</strong>;</li>
                <li><em>&apos;Specialist&apos; Center at Bauman Moscow State Technical University</em> - <strong>Python Developer (Full-Stack)</strong>;</li>
                <li><em>Moscow Academy of Professional Competencies</em> - <strong>Pedagogical Education: Physical Culture</strong>;</li>
                <li><em>NAUFOR</em> - <strong>Financial Consultant (Level 7 Qualification)</strong>;</li>
                <li><em>Moscow State University (MSU)</em> - <strong>Tourism Management</strong>;</li>
                <li><em>Tomsk State University</em> - <strong>AI Implementation Specialist</strong>.</li>
              </ul>

              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "1rem" }}>
                Additionally, I completed specialized courses on <strong>Coursera</strong> focusing on bond investments, modern portfolio construction, and private wealth management.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                As an athlete, I hold the <strong>1st degree in Powerlifting (IPF)</strong>. I am also actively engaged in <strong>software development</strong> and practice <strong>martial arts</strong>.
              </p>
            </div>

            {/* Photos and Projects */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/1.webp" alt="Sergey Svistunov — financial advisor portrait" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/2.webp" alt="Sergey Svistunov working at Tinkoff Bank" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/3.webp" alt="Sergey Svistunov professional career" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
                 </div>
                 <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                   <Image src="/images/folio/4.webp" alt="Sergey Svistunov — level 7 NAUFOR certification" width={500} height={500} style={{ objectFit: "cover", width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
                 </div>
              </div>

              <div className="glass-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>My Core Projects</h3>
                <ul style={{ color: "var(--text-secondary)", lineHeight: "2", listStyle: "none", padding: 0 }}>
                  <li>🚀 <strong>Travel Agency:</strong> <a href="https://veles-voyage.ru/" target="_blank" style={{ color: "var(--gold)" }}>Veles Voyage</a></li>
                  <li>📱 <strong>VK Group:</strong> <a href="https://vk.ru/veles__voyage" target="_blank" style={{ color: "var(--gold)" }}>Veles Voyage (Group)</a></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="container" id="experience" style={{ padding: "4rem 1.5rem" }}>
          <div className="section-title">
            <h2 style={{ color: "var(--gold)", fontSize: "2.2rem", marginBottom: "1rem" }}>Work Experience</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6", marginBottom: "1rem" }}>
              I bring over 8 years of solid career achievements in premium banking and private wealth management. I specialize in auditing client objectives and architecting robust portfolios that amplify yields while mitigating risk. Continuing education and growth are my daily drivers.
            </p>
            <p style={{ color: "var(--text-secondary)", maxWidth: "800px", lineHeight: "1.6" }}>
              Certified by NAUFOR at level 7 (the highest advisory level). Ranked 122nd out of 26,054 expert traders in the prestigious nation-wide &apos;Best Private Investor 2021&apos; contest.
            </p>
            <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
              <h3 style={{ color: "#fff", marginBottom: "1rem" }}>Social Media Profiles</h3>
              <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
                <li><a href="https://t.me/radun88" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Telegram</a></li>
                <li><a href="https://vk.com/radun88" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>VKontakte</a></li>
                <li><a href="https://www.instagram.com/radun180" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none" }}>Instagram</a></li>
              </ul>
            </div>
          </div>

          <h2 className="section-title">Professional Milestones</h2>
          <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "4rem" }}>
            
            {/* Tinkoff */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", background: "var(--glass-bg)", padding: "1.5rem", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "1.5rem" }}>Tinkoff Bank</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>VIP Client Wealth Management</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Served as a dedicated personal wealth manager, executing complex asset structuring and portfolio advice for high-net-worth (HNW) clients. Provided actionable investment allocations.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px" }}>
                  <li>Comprehensive VIP advisory support</li>
                  <li>Portfolio engineering and asset balancing</li>
                  <li>Active yield tracking and risk controls</li>
                </ul>
              </div>
              <div style={{ position: "relative", width: "100%", maxWidth: "400px", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/2.webp" alt="Sergey Svistunov — working with VIP clients at Tinkoff" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* VTB */}
            <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "2rem", alignItems: "center", background: "var(--glass-bg)", padding: "1.5rem", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "400px", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/3.webp" alt="Sergey Svistunov — Lead Relationship Manager at VTB" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
              </div>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "1.5rem" }}>VTB Bank</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Lead Relationship Manager</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Supplied clients with full-spectrum retail and investment banking solutions. Provided seamless transactional guidance, resolving queries promptly and increasing asset volumes.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px" }}>
                  <li>Advanced retail banking operations</li>
                  <li>Sustained top-tier performance ratings</li>
                </ul>
              </div>
            </div>

            {/* Sberbank */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", background: "var(--glass-bg)", padding: "1.5rem", borderRadius: "20px", border: "1px solid var(--border)" }}>
              <div style={{ flex: 1, minWidth: "260px" }}>
                <h3 style={{ color: "var(--gold)", fontSize: "1.5rem" }}>Sberbank</h3>
                <h4 style={{ color: "#fff", marginBottom: "1rem" }}>Client Relationship Associate</h4>
                <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Assisted client base in selecting banking options, offering personalized guidance on credit lines, savings deposits, and cards. Resolved customer inquiries to maximize loyalty.</p>
                <ul style={{ color: "var(--text-secondary)", listStyle: "circle", paddingLeft: "20px" }}>
                  <li>Personalized client consulting</li>
                  <li>Exceeded target performance milestones</li>
                </ul>
              </div>
              <div style={{ position: "relative", width: "100%", maxWidth: "400px", borderRadius: "10px", overflow: "hidden" }}>
                <Image src="/images/all/4.webp" alt="Sergey Svistunov — customer manager at Sberbank" width={400} height={300} style={{ width: "100%", height: "auto", display: "block" }} referrerPolicy="no-referrer" />
              </div>
            </div>

          </div>
        </section>

        <About lang="en" />
        <div className="section-divider"></div>
        <Methodology lang="en" />
        <div className="section-divider"></div>
        <Projects lang="en" />
      </article></main>
      <Footer lang="en" />
    </>
  );
}
