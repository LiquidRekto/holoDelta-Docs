export const localeCfgVIVN = 
{
      label: 'Tiếng Việt',
      lang: 'vi-VN',
      link: '/vi-VN/',
      title: "Tài Liệu HoloDelta",
      description: "Tài liệu của Dự án HoloDelta",
      themeConfig: {
        nav: [
          { text: 'Trang chủ', link: '/vi-VN/' },
          { text: 'Thiết lập', link: '/vi-VN/setup/introduction' },
          { text: 'Tài liệu API', link: '/vi-VN/api/introduction' }
        ],

        sidebar: {
          '/vi-VN/setup': [
            {
              text: 'Thiết lập',
              items: [
                { text: 'Giới thiệu', link: '/vi-VN/setup/introduction' },
                { text: 'Thiết lập máy chủ', link: '/vi-VN/setup/game-server' },
                { text: 'Thiết lập dự án trò chơi', link: '/vi-VN/setup/game-project' }
              ]
            }
          ],
        },
        docFooter: {
            prev: '⇐ Trước đó',
            next: 'Kế tiếp ⇒'
        },
      }
}
    