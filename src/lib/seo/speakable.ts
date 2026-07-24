/**
 * SpeakableSpecification schema generator for Finradun
 * Targets voice assistants: Alisa, Siri, Google Assistant, Alexa, Marusya, Salut
 *
 * Uses cssSelector with stable global classes and IDs from finradun's globals.css
 */

import { SITE_URL } from './unifiedSEO';

export interface SpeakableConfig {
  url: string;
  cssSelector: string[];
}

const PAGE_SPEAKABLE_CONFIGS: Record<string, string[]> = {
  home: ['#hero', '.section-title', '.glass-card', 'main h2', 'main p'],
  portfolio: ['#about', '#methodology', '#projects', '.section-title', '.glass-card'],
  city: ['main h1', 'main h2', 'main p', 'summary'],
  blogArticle: ['.article-content'],
  contacts: ['.glass-card', '.gold-text', '.section-title'],
  partners: ['main h1', 'main h2', 'main p', '.section-title'],
  blog: ['main h1', 'main h2', 'main p', '.section-title'],
};

export function generateSpeakableSchema(config: SpeakableConfig): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${config.url}#speakable`,
    url: config.url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: config.cssSelector,
    },
  };
}

export function getSpeakableSelectorsForPage(page: string): string[] {
  return PAGE_SPEAKABLE_CONFIGS[page] || ['main h1', 'main h2', 'main p'];
}

export function generatePageSpeakableSchema(page: string, path: string = ''): object {
  const url = `${SITE_URL}${path}`;
  const selectors = getSpeakableSelectorsForPage(page);
  return generateSpeakableSchema({ url, cssSelector: selectors });
}
