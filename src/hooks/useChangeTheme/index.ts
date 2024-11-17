import { storeToRefs } from 'pinia'
import { useSettinggsStore } from '~/src/stores/modules/settings'

export function useChangeTheme() {
  const { changePrimaryColor, setTheme, changeLanguage, resetTheme } = useSettinggsStore()

  const { getTheme } = storeToRefs(useSettinggsStore())

  const setupInitTheme = (theme?: Partial<ITheme>) => {
    setTheme(theme)
    changePrimaryColor()
  }

  return {
    setupInitTheme,
    changePrimaryColor,
    setTheme,
    resetTheme,
    getTheme,
    changeLanguage,
  }
}
