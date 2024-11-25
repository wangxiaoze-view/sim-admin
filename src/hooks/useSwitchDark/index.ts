import { ref, watchEffect } from 'vue'
import { useChangeTheme } from '~/src/hooks'
import { useDark, useToggle } from '../index'

export function useSwitchDark() {
  const { setupInitTheme, getTheme } = useChangeTheme()
  const value = ref(getTheme.value.mode === 'dark')
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const changeSwitch = () => doAnimate()

  const doAnimate = () => {
    const switchEl = document.querySelector('.sim-switch')
    const transition = document.startViewTransition(() => toggleDark())
    transition.ready.then(() => {
      const { x, y } = switchEl!.getBoundingClientRect()!
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
    value.value = isDark.value
    setupInitTheme({ mode: isDark.value ? 'dark' : 'light' })
  })

  return {
    getTheme,
    value,
    isDark,
    changeSwitch,
  }
}
