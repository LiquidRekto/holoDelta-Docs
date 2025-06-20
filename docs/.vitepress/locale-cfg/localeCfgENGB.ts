export const localeCfgENGB = {
    label: 'English (United Kingdom)',
    lang: 'en-GB',
    link: '/en-GB/',
    title: "HoloDelta Documentation",
    description: "Documentation for the HoloDelta project",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/en-GB/' },
            { text: 'Setup', link: '/en-GB/setup/introduction' },
            { text: 'API Documentation', link: '/en-GB/api/introduction' }
        ],

        sidebar: {
            '/en-GB/setup': [
                {
                    text: 'Setup',
                    items: [
                        { text: 'Introduction', link: '/en-GB/setup/introduction' },
                        { text: 'Server Setup', link: '/en-GB/setup/game-server' },
                        { text: 'Game Project Setup', link: '/en-GB/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Previous',
            next: 'Next ⇒'
        },
    }
}