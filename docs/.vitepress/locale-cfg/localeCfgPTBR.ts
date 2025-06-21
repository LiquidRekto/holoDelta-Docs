export const localeCfgPTBR = {
    label: 'Português (Brasil)',
    lang: 'pt-BR',
    link: '/pt-BR/',
    title: "Documentação HoloDelta",
    description: "Documentação do projeto HoloDelta",
    themeConfig: {
        nav: [
            { text: 'Página Inicial', link: '/pt-BR/' },
            { text: 'Configuração', link: '/pt-BR/setup/introduction' },
            { text: 'Documentação da API', link: '/pt-BR/api/introduction' }
        ],

        sidebar: {
            '/pt-BR/setup': [
                {
                    text: 'Configuração',
                    items: [
                        { text: 'Introdução', link: '/pt-BR/setup/introduction' },
                        { text: 'Configuração do Servidor', link: '/pt-BR/setup/game-server' },
                        { text: 'Configuração do Projeto de Jogo', link: '/pt-BR/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ Anterior',
            next: 'Próximo ⇒'
        },
    }
}