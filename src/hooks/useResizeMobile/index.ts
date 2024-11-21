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
    setTheme({
      device: isMobile ? 'mobile' : 'desktop',
      isI18n: !isMobile,
      isNotice: !isMobile,
      collapse: isMobile,
    })
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
