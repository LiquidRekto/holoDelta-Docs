import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { localeCfgVIVN } from './locale-cfg/localeCfgVIVN'
import { localeCfgJAJP } from './locale-cfg/localeCfgJAJP'
import { localeCfgENUS } from './locale-cfg/localeCfgENUS'
import { localeCfgKOKR } from './locale-cfg/localeCfgKOKR'
import { localeCfgFRFR } from './locale-cfg/localeCfgFRFR'
import { localeCfgIDID } from './locale-cfg/localeCfgIDID'
import { localeCfgESES } from './locale-cfg/localeCfgESES'
import { localeCfgRURU } from './locale-cfg/localeCfgRURU'
import { localeCfgDEDE } from './locale-cfg/localeCfgDEDE'
import { localeCfgITIT } from './locale-cfg/localeCfgITIT'
import { localeCfgZHCN } from './locale-cfg/localeCfgZHCN'
import { localeCfgPTBR } from './locale-cfg/localeCgPTBR'
import { localeCfgZHTW } from './locale-cfg/localeCfgZHTW'
import { localeCfgTHTH } from './locale-cfg/localeCfgTHTH'
import { localeCfgTLPH } from './locale-cfg/localeCfgTLPH'
import { localeCfgMSMY } from './locale-cfg/localeCfgMSMY'
import { localeCfgENGB } from './locale-cfg/localeCfgENGB'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  locales: {
    root: localeCfgENUS,
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
    "tl-PH": localeCfgTLPH
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GabeJWJ/holoDelta', ariaLabel: "holoDelta" },
      { icon: 'github', link: 'https://github.com/LiquidRekto/holoDelta-Docs', ariaLabel: "holoDelta Docs" }
    ]
  }
})
