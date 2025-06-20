export const localeCfgTLPH = {
    label: 'Tagalog',
    lang: 'tl-PH',
    link: '/tl-PH/',
    title: "HoloDelta Dokumentasyon",
    description: "Dokumentasyon para sa proyektong HoloDelta",
    themeConfig: {
        nav: [
            { text: 'Pahina ng Bahay', link: '/tl-PH/' },
            { text: 'Paghahanda', link: '/tl-PH/setup/introduction' },
            { text: 'Dokumentasyon ng API', link: '/tl-PH/api/introduction' }
        ],

        sidebar: {
            '/tl-PH/setup': [
                {
                    text: 'Paghahanda',
                    items: [
                        { text: 'Panimula', link: '/tl-PH/setup/introduction' },
                        { text: 'Paghahanda ng Server', link: '/tl-PH/setup/game-server' },
                        { text: 'Paghahanda ng Proyekto ng Laro', link: '/tl-PH/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Nakaraang',
            next: 'Susunod ⇒'
        },
    }
}