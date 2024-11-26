import { defineStore } from 'pinia'
import { ref } from 'vue'

import { themeConfig as defaultTheme, cache_theme } from '~/src/config'
import { useCssVar, useComputedNum } from '~/src/hooks'
import { hexToRgba, Storage } from '~/src/utils'

const { toNumber } = useComputedNum()

export const useSettinggsStore = defineStore('settings', {
  state: (): ISettingsType => ({
    // chore: 主题配置，不会将一些配置单独拿出来了
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
      if (this.theme.layout === 'float') this.theme.collapse = true
      Storage.set(cache_theme, this.theme)
    },
    changePrimaryColor() {
      const el = ref<HTMLElement | null>(null)
      // 使用hooks去修改
      useCssVar('--el-color-primary', el).value = useCssVar('--el-color-primary-dark-2', el).value =
        this.theme.themeColor
      // element的好像只有 --el-color-primary-light-3/5/7/8/9， 这里暂时写到9
      for (let i = 1; i <= 9; i++) {
        const color = hexToRgba(this.theme.themeColor, toNumber(1 - i * 0.1))
        if (color) useCssVar(`--el-color-primary-light-${i}`, el).value = color
      }

      const body = document.body
      // 俩种模式只能二选一
      // 色弱模式
      if (!this.theme.colorGray) body.style.filter = this.theme.colorWeakness ? 'invert(80%)' : ''
      // 灰色模式
      if (!this.theme.colorWeakness)
        body.style.filter = this.theme.colorGray ? 'grayscale(100%)' : ''

      // 让vxe-table的主题颜色生效
      useCssVar('--vxe-primary-color', el).value = this.theme.themeColor
      useCssVar('--vxe-primary-darken-color', el).value = this.theme.themeColor
      useCssVar('--vxe-primary-lighten-color', el).value = this.theme.themeColor
    },
    // 设置语言
    changeLanguage(language: TLanguageType) {
      this.setTheme({ i18n: language })
    },
  },
})
