import { useChangeTheme } from '~/src/hooks'
import { useDebounceFn } from '@vueuse/core'

// 移动端判断阈值（像素）
const MOBILE_BREAKPOINT = 992

/**
 * 响应式移动端适配 Hook
 * 根据窗口大小自动切换移动端/桌面端配置
 * @param immediate 是否立即执行一次，默认为 true
 * @returns 响应式相关方法
 */
export function useResizeMobile(immediate = true) {
  const { setTheme, setupInitTheme } = useChangeTheme()

  /**
   * 判断当前是否为移动端
   * @returns 是否为移动端
   */
  const getDeviceWidth = (): boolean => {
    const rect = document.body.getBoundingClientRect()
    return rect.width - 1 < MOBILE_BREAKPOINT
  }

  /**
   * 处理窗口大小变化
   */
  const resizeHandler = (): void => {
    // 如果页面隐藏，不处理
    if (document.hidden) return

    const isMobile = getDeviceWidth()

    if (isMobile) {
      // 移动端配置
      setTheme({
        layout: 'ordinary',
        menuMode: 'default',
        isMode: false,
        mode: 'light',
        isUpdate: false,
      })
    }

    // 更新设备相关配置
    setupInitTheme({
      device: isMobile ? 'mobile' : 'desktop',
      isI18n: !isMobile,
      isNotice: !isMobile,
      collapse: isMobile,
    })
  }

  // 防抖处理
  const debounceFn = useDebounceFn(resizeHandler, 200)

  // 注册生命周期钩子
  onBeforeMount(() => {
    window.addEventListener('resize', debounceFn)
  })

  onMounted(() => {
    if (immediate) {
      resizeHandler()
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounceFn)
  })

  return {
    /** 移动端判断阈值 */
    w: MOBILE_BREAKPOINT,
    /** 窗口大小变化处理函数 */
    resizeHandler,
    /** 判断是否为移动端 */
    getDeviceWidth,
  }
}
