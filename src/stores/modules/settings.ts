import { defineStore } from 'pinia'
import { ref } from 'vue'

import { themeConfig as defaultTheme } from '~/src/config'
import { useCssVar, useComputedNum } from '~/src/hooks'
import { hexToRgba } from '~/src/utils'

const theme = { ...defaultTheme }

const { toNumber } = useComputedNum()

export const useSettinggsStore = defineStore('settings', {
  state: (): ISettingsType => ({
    theme,
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
  actions: {
    changePrimaryColor() {
      const el = ref<HTMLElement | null>(null)
      useCssVar('--el-color-primary', el).value = this.theme.themeColor
      for (let i = 1; i <= 9; i++) {
        useCssVar(`--el-color-primary-light-${i}`, el).value = hexToRgba(
          this.theme.themeColor,
          toNumber(1 - i * 0.1)
        )
      }
    },
  },
})
