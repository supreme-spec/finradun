/**
 * Unified SEO Library for Finradun
 * Voice-search and AI-search optimization for financial advisory site
 *
 * Domain: Financial consulting, investment management, capital management, financial analytics
 */

export const SITE_URL = 'https://finradun.ru';
export const SITE_NAME = 'Сергей Свистунов — Независимый Финансовый советник';
export const ORGANIZATION_NAME = 'RADUN';

export const SEO_CONFIG = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  organization: ORGANIZATION_NAME,
  logoUrl: `${SITE_URL}/logo.svg`,
  contactPhone: '',
  contactEmail: '',
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'RU',
  },
  defaultLocale: 'ru_RU',
  themeColor: '#1a1a2e',
  foundingYear: 2018,

  voiceAssistants: {
    alisa: 'yandex-alice',
    siri: 'apple-siri',
    googleAssistant: 'google-assistant',
    alexa: 'amazon-alexa',
    marusya: 'vk-marusya',
    salut: 'sber-salut',
  },

  aiSystems: {
    chatgpt: true,
    claude: true,
    gemini: true,
    yandexGPT: true,
    gigachat: true,
    perplexity: true,
    copilot: true,
  },

  voiceInvocationPhrases: [
    'Финансовый советник Свистунов',
    'Независимый финансовый советник',
    'Инвестиционный консультант RADUN',
    'Финансовый советник онлайн',
    'Управление капиталом консультация',
  ],

  domainKeywords: [
    'финансовый советник',
    'независимый финансовый советник',
    'инвестиции',
    'управление капиталом',
    'инвестиционная консультация',
    'финансовая аналитика',
    'инвестиционное обучение',
    'NAUFOR',
    'LCHI рейтинг',
    'финансовый консультант',
  ],
} as const;

// ============================================
// SCHEMA GENERATORS
// ============================================

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(data: {
  headline: string;
  description: string;
  url?: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  keywords?: string[];
  section?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    image: {
      '@type': 'ImageObject',
      url: data.image || SEO_CONFIG.logoUrl,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      '@type': 'Person',
      name: 'Сергей Свистунов',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION_NAME,
    },
    mainEntityOfPage: data.url ? { '@type': 'WebPage', '@id': data.url } : undefined,
    articleSection: data.section || 'Финансы',
    keywords: data.keywords?.join(', ') || SEO_CONFIG.domainKeywords.slice(0, 5).join(', '),
    inLanguage: 'ru-RU',
  };
}
