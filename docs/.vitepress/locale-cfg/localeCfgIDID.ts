export const localeCfgIDID = {
  label: 'Bahasa Indonesia',
  lang: 'id-ID',
  link: '/id-ID/',
  title: "Dokumentasi HoloDelta",
  description: "Dokumentasi Proyek HoloDelta",
  themeConfig: {
    nav: [
      { text: 'Beranda', link: '/id-ID/' },
      { text: 'Pengaturan', link: '/id-ID/setup/introduction' },
      { text: 'Dokumentasi API', link: '/id-ID/api/introduction' }
    ],

    sidebar: {
      '/id-ID/setup': [
        {
          text: 'Pengaturan',
          items: [
            { text: 'Pengenalan', link: '/id-ID/setup/introduction' },
            { text: 'Pengaturan server', link: '/id-ID/setup/game-server' },
            { text: 'Pengaturan proyek game', link: '/id-ID/setup/game-project' }
          ]
        }
      ],
    },
  }
}
