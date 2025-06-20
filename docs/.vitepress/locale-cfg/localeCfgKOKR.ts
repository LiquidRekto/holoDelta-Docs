export const localeCfgKOKR = {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko-KR/',
      title: "HoloDelta 문서",
      description: "HoloDelta 프로젝트의 문서",
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko-KR/' },
          { text: '설정', link: '/ko-KR/setup/introduction' },
          { text: 'API 문서', link: '/ko-KR/api/introduction' }
        ],

        sidebar: {
          '/ko-KR/setup': [
            {
              text: '설정',
              items: [
                { text: '소개', link: '/ko-KR/setup/introduction' },
                { text: '서버 설정', link: '/ko-KR/setup/game-server' },
                { text: '게임 프로젝트 설정', link: '/ko-KR/setup/game-project' }
              ]
            }
          ],
        },
        docFooter: {
            prev: '⇐ 이전',
            next: '다음 ⇒'
        },
      }
    }