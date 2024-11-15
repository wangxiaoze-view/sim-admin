import { ref } from 'vue'
import { EColor } from '~/src/enum'
import { useSettinggsStore } from '~/src/stores/modules/settings'
export function useColor() {
  const {
    getTheme: { themeColor, isColor },
    changePrimaryColor,
    setTheme,
  } = useSettinggsStore()
  const color = ref(themeColor)
  const predefineColors = ref(Object.values(EColor))
  const changeColor = (color: string) => {
    setTheme({ themeColor: color })
    changePrimaryColor()
  }
  return {
    isColor,
    color,
    predefineColors,
    changeColor,
  }
}
