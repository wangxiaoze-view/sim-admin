/**
 * 应用更新检测 Hook
 * 使用轮询 + visibilitychange 事件检测应用更新
 * 通过比较构建时间来判断是否有新版本
 */
export function useCheckUpdate() {
  const isProduction = process.env.NODE_ENV === 'production'
  const isUpdate = ref(false)
  const loading = ref(false)

  let updateInterval: ReturnType<typeof setInterval> | null = null
  let visibilityChangeHandler: (() => void) | null = null

  // 构建时间正则表达式
  const BUILD_TIME_REGEX = /<meta\s+name="buildTime"\s+content="([^"]*)"/i
  // 更新检测间隔时间（10秒）
  const CHECK_INTERVAL = 10 * 1000

  /**
   * 检查应用更新
   * 通过获取 index.html 并解析 buildTime meta 标签来判断是否有新版本
   */
  const onCheckUpdate = async (): Promise<void> => {
    // 如果已经检测到更新，不再重复检查
    if (isUpdate.value) return

    try {
      loading.value = true

      // 构建检查更新的 URL，添加时间戳防止缓存
      const url = new URL(
        'index.html',
        `${self.location.protocol}//${self.location.host}${self.location.pathname}`
      )
      url.searchParams.set('time', String(Date.now()))

      const response = await fetch(url.toString())
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const html = await response.text()
      const match = html.match(BUILD_TIME_REGEX)
      const remoteBuildTime = match?.[1] || ''

      // 比较远程构建时间和当前构建时间
      if (remoteBuildTime && remoteBuildTime !== String(__BUILD_TIME__)) {
        isUpdate.value = true
      }
    } catch (error) {
      // 静默处理错误，避免影响用户体验
      console.warn('Failed to check for updates:', error)
    } finally {
      loading.value = false
    }
  }

  /**
   * 启动更新检测轮询
   */
  const startUpdateInterval = (): void => {
    stopUpdateInterval()
    updateInterval = setInterval(() => {
      onCheckUpdate()
    }, CHECK_INTERVAL)
  }

  /**
   * 停止更新检测轮询
   */
  const stopUpdateInterval = (): void => {
    if (updateInterval !== null) {
      clearInterval(updateInterval)
      updateInterval = null
    }
  }

  /**
   * 处理页面可见性变化
   * 当页面变为可见时，立即检查更新并启动轮询
   */
  const handleVisibilityChange = (): void => {
    if (document.visibilityState === 'visible') {
      onCheckUpdate()
      startUpdateInterval()
    }
  }

  /**
   * 取消更新提示
   * 停止检测并重置更新状态
   */
  const waitUpdater = (): void => {
    stopUpdateInterval()
    isUpdate.value = false
  }

  /**
   * 立即更新应用
   * 重新加载页面以获取最新版本
   */
  const updater = (): void => {
    loading.value = true
    location.reload()
  }

  /**
   * 初始化更新检测
   * 仅在生产环境启用
   */
  const initUpdateCheck = (): void => {
    if (!isProduction) return

    // 监听页面可见性变化
    visibilityChangeHandler = handleVisibilityChange
    document.addEventListener('visibilitychange', visibilityChangeHandler)

    // 立即检查一次并启动轮询
    onCheckUpdate()
    startUpdateInterval()
  }

  /**
   * 清理资源
   */
  const cleanup = (): void => {
    stopUpdateInterval()
    if (visibilityChangeHandler) {
      document.removeEventListener('visibilitychange', visibilityChangeHandler)
      visibilityChangeHandler = null
    }
  }

  // 初始化
  initUpdateCheck()

  // 组件卸载时清理资源
  onBeforeUnmount(cleanup)

  return {
    /** 是否有更新可用 */
    isUpdate,
    /** 是否正在检查更新 */
    loading,
    /** 立即更新应用 */
    updater,
    /** 取消更新提示 */
    waitUpdater,
    /** 手动触发更新检查 */
    onCheckUpdate,
    /** 停止更新检测 */
    stopUpdateInterval,
  }
}
