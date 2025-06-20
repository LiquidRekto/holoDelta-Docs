import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { Theme } from 'vitepress'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    },
} satisfies Theme