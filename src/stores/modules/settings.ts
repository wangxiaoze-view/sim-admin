import { defineStore } from 'pinia'
import { ref } from 'vue'
import { setTheme } from 'vxe-pc-ui'

import { themeConfig as defaultTheme, cache_theme } from '~/src/config'
import { useCssVar, useComputedNum } from '~/src/hooks'
import { hexToRgba, getLocalStorage, Storage } from '~/src/utils'

const { toNumber } = useComputedNum()

export const useSettinggsStore = defineStore('settings', {
  state: (): ISettingsType => ({
    theme: { ...defaultTheme, ...(getLocalStorage(cache_theme) || {}) },
  }),
  getters: {
    getTheme: (state) => state.theme,
    getLanguage: (state) => state.theme.i18n,
  },
  actions: {
    setTheme(theme?: Partial<ITheme>) {
      this.theme = { ...this.theme, ...(theme || {}) }
      Storage.set(cache_theme, { ...this.theme, ...(theme || {}) })
    },
    changePrimaryColor() {
      const el = ref<HTMLElement | null>(null)
      useCssVar('--el-color-primary', el).value = this.theme.themeColor
      useCssVar('--el-color-primary-dark-2', el).value = this.theme.themeColor
      for (let i = 1; i <= 9; i++) {
        useCssVar(`--el-color-primary-light-${i}`, el).value = hexToRgba(
          this.theme.themeColor,
          toNumber(1 - i * 0.1)
        )
      }
    },
    // 设置语言
    changeLanguage(language: TLanguageType) {
      this.setTheme({ i18n: language })
    },
  },
})
