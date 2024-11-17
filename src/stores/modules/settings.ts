import { defineStore } from 'pinia'
import { ref } from 'vue'

import { themeConfig as defaultTheme, cache_theme } from '~/src/config'
import { useCssVar, useComputedNum } from '~/src/hooks'
import { hexToRgba, Storage } from '~/src/utils'

const { toNumber } = useComputedNum()

export const useSettinggsStore = defineStore('settings', {
  state: (): ISettingsType => ({
    theme: { ...defaultTheme, ...Storage.get(cache_theme) },
  }),
  getters: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.theme.i18n,
  },
  actions: {
    resetTheme() {
      this.theme = Object.assign(this.theme, defaultTheme || {})
      this.setTheme(this.theme)
    },
    setTheme(theme?: Partial<ITheme>) {
      this.theme = Object.assign(this.theme, theme || {})
      if (this.theme.layout === 'float') {
        this.theme.collapse = true
      }
      Storage.set(cache_theme, this.theme)
    },
    changePrimaryColor() {
      const el = ref<HTMLElement | null>(null)
      useCssVar('--el-color-primary', el).value = useCssVar('--el-color-primary-dark-2', el).value =
        this.theme.themeColor
      for (let i = 1; i <= 9; i++) {
        useCssVar(`--el-color-primary-light-${i}`, el).value = hexToRgba(
          this.theme.themeColor,
          toNumber(1 - i * 0.1)
        )
      }

      const body = document.body
      body.style.filter = this.theme.colorWeakness ? 'invert(80%)' : ''
      body.style.webkitFilter = this.theme.colorWeakness ? 'invert(80%)' : ''
    },
    // 设置语言
    changeLanguage(language: TLanguageType) {
      this.setTheme({ i18n: language })
    },
  },
})
