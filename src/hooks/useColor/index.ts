import { useChangeTheme } from '~/src/hooks'

/**
 * 颜色选择 Hook
 * 提供主题颜色相关的功能
 * @returns 颜色操作方法集合
 */
export function useColor() {
  const { setupInitTheme, getTheme } = useChangeTheme()
  const predefineColors = ref(['#4c7cc3', '#4c7cc3'])

  /**
   * 更改主题颜色
   * @param color 颜色值（十六进制）
   */
  const changeColor = (color: string): void => {
    setupInitTheme({ themeColor: color })
  }

  return {
    /** 当前主题配置（响应式） */
    getTheme,
    /** 预定义颜色列表（响应式） */
    predefineColors,
    /** 更改主题颜色 */
    changeColor,
  }
}
