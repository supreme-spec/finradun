import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Сергей Свистунов | Финансовый советник',
    short_name: 'RADUN',
    description: 'Профессиональные финансовые консультации и управление инвестициями от Сергея Свистунова.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
