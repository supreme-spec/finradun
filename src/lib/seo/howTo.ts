/**
 * HowTo schema generator for Finradun
 * Step-by-step instructions optimized for voice-search answers
 *
 * Domain: financial advisory — consultation, investment, capital management
 */

import { SITE_URL } from './unifiedSEO';

export interface HowToStepData {
  name: string;
  text: string;
}

export interface HowToConfig {
  name: string;
  description: string;
  url: string;
  steps: HowToStepData[];
  totalTime?: string;
  supply?: string[];
}

export function generateHowToSchema(config: HowToConfig): object {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${config.url}#howto`,
    name: config.name,
    description: config.description,
    url: config.url,
    step: config.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  if (config.totalTime) {
    schema.totalTime = config.totalTime;
  }

  if (config.supply?.length) {
    schema.supply = config.supply.map(item => ({
      '@type': 'HowToSupply',
      name: item,
    }));
  }

  return schema;
}

export function generateStartConsultationHowTo(url: string = `${SITE_URL}/contacts`): object {
  return generateHowToSchema({
    name: 'Как начать работу с финансовым советником',
    description: 'Пошаговая инструкция для начала работы с независимым финансовым советником Сергеем Свистуновым',
    url,
    totalTime: 'PT30M',
    steps: [
      { name: 'Свяжитесь с советником', text: 'Напишите Сергею Свистунову через Telegram или форму контактов на сайте для первичной консультации.' },
      { name: 'Опишите финансовые цели', text: 'На первой консультации обсудите ваши финансовые цели, текущую ситуацию и ожидания от сотрудничества.' },
      { name: 'Получите персональный план', text: 'Советник составит индивидуальный финансовый план с учётом ваших целей, рисков и сроков.' },
      { name: 'Начните реализацию', text: 'Вместе с советником начните реализацию плана: выбор инструментов, мониторинг и корректировка стратегии.' },
    ],
    supply: ['Финансовые документы', 'Информация о текущих инвестициях'],
  });
}

export function generateCityConsultationHowTo(cityName: string, url: string): object {
  return generateHowToSchema({
    name: `Как получить финансовую консультацию в ${cityName}`,
    description: `Пошаговая инструкция для получения консультации независимого финансового советника в ${cityName}`,
    url,
    totalTime: 'PT20M',
    steps: [
      { name: 'Свяжитесь онлайн', text: `Напишите через Telegram или форму на сайте — онлайн-консультация доступна для жителей ${cityName}.` },
      { name: 'Пройдите диагностику', text: 'На первичной консультации советник оценит вашу финансовую ситуацию и определит ключевые области для работы.' },
      { name: 'Получите стратегию', text: 'Получите персональную стратегию управления капиталом с учётом вашего города, целей и рисков.' },
    ],
  });
}
