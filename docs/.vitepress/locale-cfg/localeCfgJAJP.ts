export const localeCfgJAJP = {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja-JP/',
      title: "HoloDeltaドキュメント",
      description: "HoloDeltaプロジェクトのドキュメント",
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja-JP/' },
          { text: 'セットアップ', link: '/ja-JP/setup/introduction' },
          { text: 'API ドキュメント', link: '/ja-JP/api/introduction' }
        ],

        sidebar: {
          '/ja-JP/setup': [
            {
              text: 'セットアップ',
              items: [
                { text: '紹介', link: '/ja-JP/setup/introduction' },
                { text: 'サーバーの設定', link: '/ja-JP/setup/game-server' },
                { text: 'ゲームプロジェクトの設定', link: '/ja-JP/setup/game-project' }
              ]
            }
          ],
        },
        docFooter: {
            prev: '⇐ 前',
            next: '次 ⇒'
        },
      }
    }