export const localeCfgDEDE = {
    label: 'Deutsch',
    lang: 'de-DE',
    link: '/de-DE/',
    title: "HoloDelta Dokumentation",
    description: "Dokumentation für das HoloDelta-Projekt",
    themeConfig: {
        nav: [
            { text: 'Startseite', link: '/de-DE/' },
            { text: 'Einrichtung', link: '/de-DE/setup/introduction' },
            { text: 'API-Dokumentation', link: '/de-DE/api/introduction' }
        ],

        sidebar: {
            '/de-DE/setup': [
                {
                    text: 'Einrichtung',
                    items: [
                        { text: 'Einführung', link: '/de-DE/setup/introduction' },
                        { text: 'Servereinrichtung', link: '/de-DE/setup/game-server' },
                        { text: 'Spieleprojekt-Einrichtung', link: '/de-DE/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Vorherige',
            next: 'Nächste ⇒'
        },
    }
}
