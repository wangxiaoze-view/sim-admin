import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { useChangeTheme, useDebounceFn } from '~/src/hooks'

export function useResizeMobile(immediate = true) {
  const w = 992

  const { setTheme, getTheme } = useChangeTheme()

  const getDeviceWidth = () => {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < w
  }

  const resizeHandler = () => {
    if (document.hidden) return
    const isMobile = getDeviceWidth()
    if (getTheme.value.device === 'desktop') {
      setTheme({ collapse: isMobile })
    } else {
      setTheme({ collapse: true, isLocked: false })
    }
  }

  const debounceFn = useDebounceFn(resizeHandler, 100)
  onMounted(() => {
    if (immediate) debounceFn().then(() => {})
  })
  onBeforeMount(() => {
    window.addEventListener('resize', debounceFn)
  })
  onBeforeUnmount(() => {
    window.addEventListener('resize', debounceFn)
  })

  return {
    w,
    resizeHandler,
    getDeviceWidth,
  }
}
