import { ref } from 'vue'
import { EColor } from '~/src/enum'
import { useChangeTheme } from '~/src/hooks'

export function useColor() {
  const { setupInitTheme, getTheme } = useChangeTheme()
  const predefineColors = ref(Object.values(EColor))
  const changeColor = (color: string) => {
    setupInitTheme({ themeColor: color })
  }
  return {
    getTheme,
    predefineColors,
    changeColor,
  }
}
