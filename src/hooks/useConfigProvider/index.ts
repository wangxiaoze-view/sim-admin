import { getElLocal } from '~/src/i18n'
import { useChangeTheme } from '~/src/hooks'

export function useConfigProvider() {
  const { getTheme } = useChangeTheme()
  return {
    getElLocal,
    getTheme,
  }
}
