import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import { Theme } from "vitepress";
import { redirects } from "./redirects";
import HoloDeltaLayout from "./HoloDeltaLayout.vue";
export default {
  extends: DefaultTheme,
  Layout: HoloDeltaLayout,
  enhanceApp({ app, router }) {
    enhanceAppWithTabs(app);
    // Solution based on https://github.com/vuejs/vitepress/issues/4160#issuecomment-2571714528
    router.onBeforeRouteChange = (to: string) => {
      const path = to.replace(/\.html$/, "");

      const toPath = redirects[path];

      if (toPath) {
        setTimeout(() => {
          router.go(toPath);
        }, 0);
        return false; // cancel navigation
      }

      return true;
    };
  },
} satisfies Theme;
