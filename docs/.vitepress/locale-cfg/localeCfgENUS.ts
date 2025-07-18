export const localeCfgENUS = {
  label: "English (United States)",
  lang: "en-US",
  link: "/en-US/",
  title: "HoloDelta Documentation",
  description: "Documentation of HoloDelta Project",

  themeConfig: {
    nav: [
      { text: "Home", link: "/en-US/" },
      { text: "Setup", link: "/en-US/setup/introduction" },
      { text: "Manual", link: "/en-US/manual/introduction" },
      { text: "API Documentation", link: "/en-US/api/introduction" },
    ],

    sidebar: {
      "/en-US/setup": [
        {
          text: "Setup",
          items: [
            { text: "Introduction", link: "/en-US/setup/introduction" },
            { text: "Setting up the server", link: "/en-US/setup/game-server" },
            {
              text: "Setting up game project",
              link: "/en-US/setup/game-project",
            },
          ],
        },
        {
          text: "Game Export",
          items: [
            {
              text: "Desktop Version",
              link: "/en-US/setup/game-export/desktop",
            },
            {
              text: "Web Version",
              link: "/en-US/setup/game-export/web",
            },
          ],
        },
      ],
      "/en-US/api": [
        {
          text: "General",
          items: [{ text: "Introduction", link: "/en-US/api/introduction" }],
        },
        {
          text: "Website Parameters",
          items: [
            { text: "General", link: "/en-US/api/query-param/general" },
            {
              text: "Parameter - imported_deck",
              link: "/en-US/api/query-param/imported-deck",
            },
          ],
        },
        {
          text: "API Endpoints",
          items: [],
        },
        {
          text: "Local API",
          items: [],
        },
      ],
      "/en-US/manual": [
        {
          text: "General",
          items: [
            { text: "Introduction", link: "/en-US/manual/introduction" },
            {
              text: "What is Hololive OCG?",
              link: "/en-US/manual/what-is-holoocg",
            },
            {
              text: "What is HoloDelta?",
              link: "/en-US/manual/what-is-holodelta",
            },
            {
              text: "Navigation Basics",
              link: "/en-US/manual/navigation-basics",
            },
          ],
        },
        {
          text: "Gameplay",
          items: [],
        },
        {
          text: "Deck Creation",
          items: [],
        },
        {
          text: "Spectate",
          items: [],
        },
        {
          text: "Deck Data",
          items: [
            {
              text: "HoloDelta JSON",
              link: "/en-US/manual/deck-data/holodelta-json",
            },
          ],
        },
      ],
    },

    docFooter: {
      prev: "⇐ Previous",
      next: "Next ⇒",
    },
  },
};
