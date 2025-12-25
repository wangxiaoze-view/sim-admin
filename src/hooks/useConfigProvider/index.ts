import { getElLocal } from '~/src/i18n'
import { useChangeTheme } from '~/src/hooks'

/**
 * 配置提供者 Hook
 * 提供 Element Plus 配置相关的功能
 * @returns 配置相关方法
 */
export function useConfigProvider() {
  const { getTheme } = useChangeTheme()

  return {
    /** 获取 Element Plus 本地化配置 */
    getElLocal,
    /** 当前主题配置（响应式） */
    getTheme,
  }
}
