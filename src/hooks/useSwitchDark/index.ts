import { ref, watchEffect } from 'vue'
import { useSettinggsStore } from '~/src/stores/modules/settings'
import { useDark, useToggle } from '../index'

export function useSwitchDark() {
  const {
    getTheme: { isMode, mode },
    setTheme,
  } = useSettinggsStore()
  const value = ref(mode === 'dark')
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const changeSwitch = () => doAnimate()
  const doAnimate = () => {
    const switchEl = document.querySelector('.sim-switch')
    const transition = document.startViewTransition(() => toggleDark())
    transition.ready.then(() => {
      const { x, y } = switchEl?.getBoundingClientRect()!
      const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      //开始动画
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

  watchEffect(() => {
    setTheme({ mode: isDark.value ? 'dark' : 'light' })
  })

  return {
    isMode,
    value,
    isDark,
    changeSwitch,
  }
}
