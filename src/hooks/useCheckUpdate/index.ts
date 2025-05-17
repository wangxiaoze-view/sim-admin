import { ref } from 'vue'

// 检测更新 使用轮询+worker的形式，暂时不考虑pwa离线缓存的方式;
export function useCheckUpdate() {
  const isProduction = !['production'].includes(process.env.NODE_ENV || '')
  const isUpdate = ref(false)
  const loading = ref(false)

  let updateInterval: ReturnType<typeof setInterval> | undefined

  const onCheckUpdate = async () => {
    if (isUpdate.value) return
    const res = await fetch(`${self.location.protocol}//${self.location.host}`, {
      method: 'HEAD',
      cache: 'no-cache',
    })
    const preTime = res.headers.get('lastBuildTime')
    if (preTime === `${process.env.VERSION}`) return
    isUpdate.value = true
  }
  const updater = () => {
    if (updateInterval) clearInterval(updateInterval)
    updateInterval = setInterval(() => {
      onCheckUpdate()
    }, 10 * 1000)
  }
  const waitUpdater = () => {
    if (updateInterval) clearInterval(updateInterval)
    isUpdate.value = false
  }

  if (isProduction) {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        onCheckUpdate()
      }
    })
    updater()
  }
  // let lastEtag: string | undefined = undefined
  // let worker: Worker
  // if (isProduction) {
  //   worker = new Worker(new URL('./worker.ts', import.meta.url), {
  //     name: 'checkUpdateWorker',
  //   })

  //   worker.postMessage({
  //     type: 'check',
  //     tip: '检测是否更新',
  //   })
  //   worker.onmessage = ({ data }) => {
  //     if (data.type === 'hasUpdate') {
  //       isUpdate.value = true
  //       lastEtag = data.lastEtag
  //     }
  //   }
  // }

  // // 立即更新
  // const updater = () => {
  //   if (!isProduction) return
  //   loading.value = true
  //   worker.postMessage({
  //     type: 'close',
  //     tip: '关闭',
  //     lastEtag,
  //   })
  //   location.reload()
  // }

  // // 稍后更新
  // const waitUpdater = () => {
  //   isUpdate.value = false
  // }

  return {
    isUpdate,
    loading,
    updater,
    waitUpdater,
  }
}
