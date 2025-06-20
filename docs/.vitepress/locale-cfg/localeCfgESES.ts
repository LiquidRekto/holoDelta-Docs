export const localeCfgESES = {
    label: 'Español',
    lang: 'es-ES',
    link: '/es-ES/',
    title: "Documentación HoloDelta",
    description: "Documentación del proyecto HoloDelta",
    themeConfig: {
        nav: [
            { text: 'Inicio', link: '/es-ES/' },
            { text: 'Configuración', link: '/es-ES/setup/introduction' },
            { text: 'Documentación API', link: '/es-ES/api/introduction' }
        ],

        sidebar: {
            '/es-ES/setup': [
                {
                    text: 'Configuración',
                    items: [
                        { text: 'Introducción', link: '/es-ES/setup/introduction' },
                        { text: 'Configuración del servidor', link: '/es-ES/setup/game-server' },
                        { text: 'Configuración del proyecto de juego', link: '/es-ES/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Anterior',
            next: 'Siguiente ⇒'
        },
    }
}