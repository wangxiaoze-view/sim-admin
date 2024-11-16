import { storeToRefs } from 'pinia'
import { useSettinggsStore } from '~/src/stores/modules/settings'

export function useChangeTheme() {
  const { changePrimaryColor, setTheme, changeLanguage } = useSettinggsStore()

  const { getTheme } = storeToRefs(useSettinggsStore())

  const setupInitTheme = (theme?: Partial<ITheme>) => {
    setTheme(theme)
    changePrimaryColor()
  }

  return {
    setupInitTheme,
    changePrimaryColor,
    setTheme,
    getTheme,
    changeLanguage,
  }
}
