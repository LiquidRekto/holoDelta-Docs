export const localeCfgITIT = {
  label: 'Italiano',
  lang: 'it-IT',
  link: '/it-IT/',
  title: "Documentazione HoloDelta",
  description: "Documentazione del progetto HoloDelta",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/it-IT/' },
      { text: 'Impostazioni', link: '/it-IT/setup/introduction' },
      { text: 'Documentazione API', link: '/it-IT/api/introduction' }
    ],

    sidebar: {
      '/it-IT/setup': [
        {
          text: 'Impostazioni',
          items: [
            { text: 'Introduzione', link: '/it-IT/setup/introduction' },
            { text: 'Impostazione del server', link: '/it-IT/setup/game-server' },
            { text: 'Impostazione del progetto di gioco', link: '/it-IT/setup/game-project' }
          ]
        }
      ],
    },
    docFooter: {
      prev: '⇐ Precedente',
      next: 'Successivo ⇒'
    },
  }
}