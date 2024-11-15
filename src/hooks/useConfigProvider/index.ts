import { getElLocal } from '~/src/i18n'
import { useSettinggsStore } from '~/src/stores/modules/settings'

export function useConfigProvider() {
  const {
    getTheme: { size, autoInsertSpace },
  } = useSettinggsStore()
  return {
    getElLocal,
    size,
    button: {
      autoInsertSpace,
    },
  }
}
