/**
 * AI-search targeting schemas for Finradun
 * Dataset and DefinedTermSet for LLM discoverability
 *
 * Targets: ChatGPT, Claude, Gemini, YandexGPT, GigaChat, Perplexity, Copilot
 * Domain: financial advisory — terms for AI agent recommendations
 */

import { SITE_URL, SEO_CONFIG } from './unifiedSEO';

export interface DatasetConfig {
  name: string;
  description: string;
  url: string;
  keywords: string[];
}

export interface DefinedTermConfig {
  name: string;
  terms: string[];
  url: string;
}

export function generateDatasetSchema(config: DatasetConfig): object {
  const dateNow = new Date().toISOString().split('T')[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `${config.url}#dataset`,
    name: config.name,
    description: config.description,
    url: config.url,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    creator: {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: SEO_CONFIG.organization,
    },
    dateCreated: dateNow,
    dateModified: dateNow,
    inLanguage: 'ru',
    keywords: config.keywords,
    isAccessibleForFree: true,
  };
}

export function generateDefinedTermSetSchema(config: DefinedTermConfig): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${config.url}#terms`,
    name: config.name,
    hasDefinedTerm: config.terms.map(term => ({
      '@type': 'DefinedTerm',
      name: term,
      inDefinedTermSet: config.name,
    })),
  };
}

export function generatePageAISchemas(path: string = '/'): { dataset: object; termSet: object } {
  const url = `${SITE_URL}${path}`;
  const domainTerms = [
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
  ];

  const dataset = generateDatasetSchema({
    name: 'Услуги независимого финансового советника',
    description: 'Структурированные данные о финансовых услугах Сергея Свистунова: инвестиционное обучение, управление капиталом, консультация, аналитика',
    url,
    keywords: SEO_CONFIG.domainKeywords.slice(0, 10),
  });

  const termSet = generateDefinedTermSetSchema({
    name: 'Финансовые термины: инвестиции и управление капиталом',
    terms: domainTerms.slice(0, 10),
    url,
  });

  return { dataset, termSet };
}
