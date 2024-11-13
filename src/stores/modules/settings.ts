import { defineStore } from 'pinia'

import { themeConfig as defaultTheme } from '~/src/config'

const theme = { ...defaultTheme }

export const useSettinggsStore = defineStore('settings', {
  state: (): ISettingsType => ({
    theme,
  }),
  getters: {
    getTheme: (state) => state.theme,
  },
})
