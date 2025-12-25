import { useChangeTheme } from '~/src/hooks'
import { useDark, useToggle } from '@vueuse/core'

/**
 * 暗黑模式切换 Hook
 * 提供暗黑模式切换功能，支持动画效果
 * @returns 暗黑模式相关方法和状态
 */
export function useSwitchDark() {
  const { setupInitTheme, getTheme } = useChangeTheme()
  const value = ref(getTheme.value.mode === 'dark')
  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  /**
   * 执行切换动画
   */
  const doAnimate = (): void => {
    const switchEl = document.querySelector('.sim-switch')
    if (!switchEl) return

    const transition = document.startViewTransition(() => toggleDark())
    transition.ready.then(() => {
      const rect = switchEl.getBoundingClientRect()
      const { x, y } = rect
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]

      // 开始动画
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      )
    })
  }

  /**
   * 切换暗黑模式（带动画）
   */
  const changeSwitch = (): void => {
    doAnimate()
  }

  // 监听暗黑模式变化，同步主题配置
  watchEffect(() => {
    value.value = isDark.value
    setupInitTheme({ mode: isDark.value ? 'dark' : 'light' })
  })

  return {
    /** 当前主题配置（响应式） */
    getTheme,
    /** 是否为暗黑模式（响应式） */
    value,
    /** 暗黑模式状态（响应式） */
    isDark,
    /** 切换暗黑模式（带动画） */
    changeSwitch,
  }
}
