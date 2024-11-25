import { ref } from 'vue'

// TODO: 目前可能存在问题，所以暂时不去考虑手写更新；后期看下第三方插件了，可能会有更好的方案；
export function useCheckUpdate() {
  const isProduction = ['production'].includes(process.env.NODE_ENV || '')
  const isUpdate = ref(false)
  const loading = ref(false)

  // let lastEtag: string | undefined | null = undefined
  // let intervalId: any = null

  // const t = 30 * 1000

  // async function checkUpdate() {
  //   const res = await fetch(`${self.location.protocol}//${self.location.host}`, {
  //     method: 'HEAD',
  //     cache: 'no-cache',
  //   })

  //   const etag = res.headers.get('etag') || res.headers.get('last-modified')
  //   isUpdate.value = lastEtag !== undefined && etag !== lastEtag
  // }

  // if (isProduction) {
  //   requestAnimationFrame(() => {
  //     intervalId = setInterval(checkUpdate, t)
  //   })
  // }

  // 立即更新
  const updater = () => {
    if (!isProduction) return
    // loading.value = true
    // intervalId && clearInterval(intervalId)
    // // intervalId = setInterval(checkUpdate, t)
    // location.reload()
  }

  // 稍后更新
  const waitUpdater = () => {
    isUpdate.value = false
    // intervalId && clearInterval(intervalId)
  }

  return {
    isUpdate,
    loading,
    updater,
    waitUpdater,
  }
}
