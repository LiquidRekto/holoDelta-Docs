export const localeCfgFRFR = {
  label: 'Français',
  lang: 'fr-FR',
  link: '/fr-FR/',
  title: "Documentation HoloDelta",
  description: "Documentation du projet HoloDelta",
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/fr-FR/' },
      { text: 'Configuration', link: '/fr-FR/setup/introduction' },
      { text: 'Documentation API', link: '/fr-FR/api/introduction' }
    ],

    sidebar: {
      '/fr-FR/setup': [
        {
          text: 'Configuration',
          items: [
            { text: 'Introduction', link: '/fr-FR/setup/introduction' },
            { text: 'Configuration du serveur', link: '/fr-FR/setup/game-server' },
            { text: 'Configuration du projet de jeu', link: '/fr-FR/setup/game-project' }
          ]
        }
      ],
    },
  }
}
