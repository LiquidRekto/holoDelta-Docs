import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { localeCfgVIVN } from "./locale-cfg/localeCfgVIVN";
import { localeCfgJAJP } from "./locale-cfg/localeCfgJAJP";
import { localeCfgENUS } from "./locale-cfg/localeCfgENUS";
import { localeCfgKOKR } from "./locale-cfg/localeCfgKOKR";
import { localeCfgFRFR } from "./locale-cfg/localeCfgFRFR";
import { localeCfgIDID } from "./locale-cfg/localeCfgIDID";
import { localeCfgESES } from "./locale-cfg/localeCfgESES";
import { localeCfgRURU } from "./locale-cfg/localeCfgRURU";
import { localeCfgDEDE } from "./locale-cfg/localeCfgDEDE";
import { localeCfgITIT } from "./locale-cfg/localeCfgITIT";
import { localeCfgZHCN } from "./locale-cfg/localeCfgZHCN";
import { localeCfgPTBR } from "./locale-cfg/localeCfgPTBR";
import { localeCfgZHTW } from "./locale-cfg/localeCfgZHTW";
import { localeCfgTHTH } from "./locale-cfg/localeCfgTHTH";
import { localeCfgTLPH } from "./locale-cfg/localeCfgTLPH";
import { localeCfgMSMY } from "./locale-cfg/localeCfgMSMY";
import { localeCfgENGB } from "./locale-cfg/localeCfgENGB";
import { localeSearchCfgZHCN } from "./locale-search-cfg/localeSearchCfgZHCN";
import { localeSearchCfgZHTW } from "./locale-search-cfg/localeSearchCfgZHTW";
import { localeSearchCfgVIVN } from "./locale-search-cfg/localeSearchCfgVIVN";
import { localeSearchCfgENUS } from "./locale-search-cfg/localeSearchCfgENUS";
import { localeSearchCfgENGB } from "./locale-search-cfg/localeSearchCfgENGB";
import { localeSearchCfgJAJP } from "./locale-search-cfg/localeSearchCfgJAJP";
import { localeSearchCfgKOKR } from "./locale-search-cfg/localeSearchCfgKOKR";
import { localeSearchCfgFRFR } from "./locale-search-cfg/localeSearchCfgFRFR";
import { localeSearchCfgIDID } from "./locale-search-cfg/localeSearchCfgIDID";
import { localeSearchCfgMSMY } from "./locale-search-cfg/localeSearchCfgMSMY";
import { localeSearchCfgESES } from "./locale-search-cfg/localeSearchCfgESES";
import { localeSearchCfgPTBR } from "./locale-search-cfg/localeSearchCfgPTBR";
import { localeSearchCfgRURU } from "./locale-search-cfg/localeSearchCfgRURU";
import { localeSearchCfgDEDE } from "./locale-search-cfg/localeSearchCfgDEDE";
import { localeSearchCfgITIT } from "./locale-search-cfg/localeSearchCfgITIT";
import { localeSearchCfgTHTH } from "./locale-search-cfg/localeSearchCfgTHTH";
import { localeSearchCfgTLPH } from "./locale-search-cfg/localeSearchCfgTLPH";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    "en-US": localeCfgENUS,
    "en-GB": localeCfgENGB,
    "vi-VN": localeCfgVIVN,
    "ja-JP": localeCfgJAJP,
    "ko-KR": localeCfgKOKR,
    "id-ID": localeCfgIDID,
    "ms-MY": localeCfgMSMY,
    "fr-FR": localeCfgFRFR,
    "es-ES": localeCfgESES,
    "pt-BR": localeCfgPTBR,
    "ru-RU": localeCfgRURU,
    "de-DE": localeCfgDEDE,
    "it-IT": localeCfgITIT,
    "zh-CN": localeCfgZHCN,
    "zh-TW": localeCfgZHTW,
    "th-TH": localeCfgTHTH,
    "tl-PH": localeCfgTLPH,
  },
  rewrites: {
    "/en-US/index.md": "/index.md",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/GabeJWJ/holoDelta",
        ariaLabel: "holoDelta",
      },
      {
        icon: "github",
        link: "https://github.com/LiquidRekto/holoDelta-Docs",
        ariaLabel: "holoDelta Docs",
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          "en-US": localeSearchCfgENUS,
          "en-GB": localeSearchCfgENGB,
          "vi-VN": localeSearchCfgVIVN,
          "ja-JP": localeSearchCfgJAJP,
          "ko-KR": localeSearchCfgKOKR,
          "id-ID": localeSearchCfgIDID,
          "ms-MY": localeSearchCfgMSMY,
          "fr-FR": localeSearchCfgFRFR,
          "es-ES": localeSearchCfgESES,
          "pt-BR": localeSearchCfgPTBR,
          "ru-RU": localeSearchCfgRURU,
          "de-DE": localeSearchCfgDEDE,
          "it-IT": localeSearchCfgITIT,
          "zh-CN": localeSearchCfgZHCN,
          "zh-TW": localeSearchCfgZHTW,
          "th-TH": localeSearchCfgTHTH,
          "tl-PH": localeSearchCfgTLPH
        }
      }
  },
  },
});
