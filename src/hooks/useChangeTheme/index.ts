import { useSettingsStore } from '~/src/stores/modules/settings'

/**
 * 主题变更 Hook
 * 提供主题相关的操作方法，包括设置、重置、更改颜色和语言等功能
 * @returns 主题操作方法集合
 */
export function useChangeTheme() {
  const settingsStore = useSettingsStore()
  const { changePrimaryColor, setTheme, changeLanguage, resetTheme } = settingsStore
  const { getTheme } = storeToRefs(settingsStore)

  /**
   * 初始化主题配置
   * 设置主题并应用主题颜色
   * @param theme 可选的主题配置（部分更新）
   */
  const setupInitTheme = (theme?: Partial<ITheme>) => {
    setTheme(theme)
    changePrimaryColor()
  }

  return {
    /** 初始化主题 */
    setupInitTheme,
    /** 更改主题颜色 */
    changePrimaryColor,
    /** 设置主题配置 */
    setTheme,
    /** 重置主题为默认配置 */
    resetTheme,
    /** 获取当前主题配置（响应式） */
    getTheme,
    /** 更改语言 */
    changeLanguage,
  }
}
