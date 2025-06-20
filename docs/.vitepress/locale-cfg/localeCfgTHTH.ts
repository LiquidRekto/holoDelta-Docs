export const localeCfgTHTH = {
    label: 'ภาษาไทย',
    lang: 'th-TH',
    link: '/th-TH/',
    title: "เอกสาร HoloDelta",
    description: "เอกสารสำหรับโครงการ HoloDelta",
    themeConfig: {
        nav: [
            { text: 'หน้าแรก', link: '/th-TH/' },
            { text: 'การตั้งค่า', link: '/th-TH/setup/introduction' },
            { text: 'เอกสาร API', link: '/th-TH/api/introduction' }
        ],

        sidebar: {
            '/th-TH/setup': [
                {
                    text: 'การตั้งค่า',
                    items: [
                        { text: 'บทนำ', link: '/th-TH/setup/introduction' },
                        { text: 'การตั้งค่าเซิร์ฟเวอร์', link: '/th-TH/setup/game-server' },
                        { text: 'การตั้งค่าโครงการเกม', link: '/th-TH/setup/game-project' }
                    ]
                }
            ],
        },
        docFooter: {
            prev: '⇐ ก่อนหน้า',
            next: 'ถัดไป ⇒'
        },
    }
}