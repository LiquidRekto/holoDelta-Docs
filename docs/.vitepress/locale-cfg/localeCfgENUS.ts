export const localeCfgENUS = {
      label: 'English (United States)',
      lang: 'en-US',
      link: '/',
      title: "HoloDelta Documentation",
      description: "Documentation of HoloDelta Project",
      
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Setup', link: '/setup/introduction' },
          { text: 'Manual', link: '/manual/introduction' },
          { text: 'API Documentation', link: '/api/introduction' }
        ],

        sidebar: {
          '/setup': [
            {
              text: 'Setup',
              items: [
                { text: 'Introduction', link: '/setup/introduction' },
                { text: 'Setting up the server', link: '/setup/game-server' },
                { text: 'Setting up game project', link: '/setup/game-project' }
              ]
            }
          ],
          '/api': [
            {
              text: 'API Documentation',
              items: [
                { text: 'Introduction', link: '/api/introduction' },
                { text: 'Setting up the server', link: '/api/game-server' },
                { text: 'Setting up game project', link: '/api/game-project' }
              ]
            }
          ],
          '/manual': [
            {
              text: 'User Manual',
              items: [
                { text: 'Introduction', link: '/api/introduction' },
                { text: 'Setting up the server', link: '/api/game-server' },
                { text: 'Setting up game project', link: '/api/game-project' }
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