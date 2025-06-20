export const localeCfgRURU = {
  label: 'Русский',
  lang: 'ru-RU',
  link: '/ru-RU/',
  title: "Документация HoloDelta",
  description: "Документация проекта HoloDelta",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/ru-RU/' },
      { text: 'Настройка', link: '/ru-RU/setup/introduction' },
      { text: 'Документация API', link: '/ru-RU/api/introduction' }
    ],

    sidebar: {
      '/ru-RU/setup': [
        {
          text: 'Настройка',
          items: [
            { text: 'Введение', link: '/ru-RU/setup/introduction' },
            { text: 'Настройка сервера', link: '/ru-RU/setup/game-server' },
            { text: 'Настройка игрового проекта', link: '/ru-RU/setup/game-project' }
          ]
        }
      ],
    },
    docFooter: {
      prev: '⇐ Предыдущий',
      next: 'Следующий ⇒'
    },
  }
}
