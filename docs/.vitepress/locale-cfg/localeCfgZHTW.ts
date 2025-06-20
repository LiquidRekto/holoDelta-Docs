export const localeCfgZHTW = {
    label: '繁體中文',
    lang: 'zh-TW',
    link: '/zh-TW/',
    title: "HoloDelta 文件",
    description: "HoloDelta 專案的文件",
    themeConfig: {
        nav: [
        { text: '首頁', link: '/zh-TW/' },
        { text: '設定', link: '/zh-TW/setup/introduction' },
        { text: 'API 文件', link: '/zh-TW/api/introduction' }
        ],
    
        sidebar: {
        '/zh-TW/setup': [
            {
            text: '設定',
            items: [
                { text: '介紹', link: '/zh-TW/setup/introduction' },
                { text: '伺服器設定', link: '/zh-TW/setup/game-server' },
                { text: '遊戲專案設定', link: '/zh-TW/setup/game-project' }
            ]
            }
        ],
        },
        docFooter: {
        prev: '⇐ 上一頁',
        next: '下一頁 ⇒'
        },
    }
}