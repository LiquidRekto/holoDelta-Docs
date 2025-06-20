export const localeCfgZHCN = {
    label: '简体中文',
    lang: 'zh-CN',
    link: '/zh-CN/',
    title: "HoloDelta 文档",
    description: "HoloDelta 项目的文档",
    themeConfig: {
        nav: [
            { text: '首页', link: '/zh-CN/' },
            { text: '设置', link: '/zh-CN/setup/introduction' },
            { text: 'API 文档', link: '/zh-CN/api/introduction' }
        ],

        sidebar: {
            '/zh-CN/setup': [
                {
                    text: '设置',
                    items: [
                        { text: '介绍', link: '/zh-CN/setup/introduction' },
                        { text: '服务器设置', link: '/zh-CN/setup/game-server' },
                        { text: '游戏项目设置', link: '/zh-CN/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ 上一页',
            next: '下一页 ⇒'
        },
    }
}