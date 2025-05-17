import { ref } from 'vue'

// 检测更新 使用轮询+worker的形式，暂时不考虑pwa离线缓存的方式;
export function useCheckUpdate() {
  const isProduction = ['production'].includes(process.env.NODE_ENV || '')
  const isUpdate = ref(false)
  const loading = ref(false)

  let updateInterval: ReturnType<typeof setInterval> | undefined

  const onCheckUpdate = async () => {
    if (isUpdate.value) return
    const res = await fetch(
      `${self.location.protocol}//${self.location.host}/index.html?time=${Date.now()}`
    )
    const html = await res.text()
    const regex = /<meta\s+name="buildTime"\s+content="([^"]*)"/i
    const match = html.match(regex)
    const preTime = match?.[1] || ''
    console.log(preTime, process.env.VERSION)
    if (preTime === `${process.env.VERSION}`) return
    isUpdate.value = true
  }
  const startUpdateInterval = () => {
    if (updateInterval) clearInterval(updateInterval)
    updateInterval = setInterval(() => {
      onCheckUpdate()
    }, 10 * 1000)
  }
  const waitUpdater = () => {
    if (updateInterval) clearInterval(updateInterval)
    isUpdate.value = false
  }
  const updater = () => {
    location.reload()
  }

  if (isProduction) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        onCheckUpdate()
        startUpdateInterval()
      }
    })
    startUpdateInterval()
  }

  return {
    isUpdate,
    loading,
    updater,
    waitUpdater,
  }
}
