export const localeCfgMSMY = {
    label: 'Bahasa Melayu',
    lang: 'ms-MY',
    link: '/ms-MY/',
    title: "Dokumentasi HoloDelta",
    description: "Dokumentasi untuk projek HoloDelta",
    themeConfig: {
        nav: [
            { text: 'Halaman Utama', link: '/ms-MY/' },
            { text: 'Persediaan', link: '/ms-MY/setup/introduction' },
            { text: 'Dokumentasi API', link: '/ms-MY/api/introduction' }
        ],

        sidebar: {
            '/ms-MY/setup': [
                {
                    text: 'Persediaan',
                    items: [
                        { text: 'Pengenalan', link: '/ms-MY/setup/introduction' },
                        { text: 'Persediaan Pelayan', link: '/ms-MY/setup/game-server' },
                        { text: 'Persediaan Projek Permainan', link: '/ms-MY/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Sebelumnya',
            next: 'Seterusnya ⇒'
        },
    }
}