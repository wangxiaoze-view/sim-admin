import { createI18n } from 'vue-i18n'
import { useSettingsStore } from '../stores/modules/settings'
import { App, computed } from 'vue'
import defaultLanguage from './default.json'
import pinia from '../stores'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

export { zhCn, en }

const messages = {
  en: {
    ...defaultLanguage,
  },
  zh: {},
}

const getLanguage = () => {
  const { getLanguage } = useSettingsStore(pinia)
  return getLanguage
}

export const i18n = createI18n({
  legacy: false,
  // 从状态管理器读取
  locale: getLanguage(),
  fallbackLocale: 'zh',
  messages,
})

export function setupI18n(app: App<Element>) {
  app.use(i18n)
}

export const translate = (message: string | undefined) => {
  if (!message) return ''
  const config = messages[getLanguage()]
  return config?.[message as keyof typeof config] || message
}

export const getElLocal = computed(() => {
  return getLanguage() === 'en' ? en : zhCn
})
