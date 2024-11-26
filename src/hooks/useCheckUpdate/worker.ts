let lastEtag: string | null | undefined = undefined
let hasUpdate = false

let intervalId: any = null
async function checkUpdate() {
  const res = await fetch(`${self.location.protocol}//${self.location.host}`, {
    method: 'HEAD',
    cache: 'no-cache',
  })

  const etag = res.headers.get('etag') || res.headers.get('last-modified')
  hasUpdate = lastEtag !== undefined && etag !== lastEtag

  if (hasUpdate) {
    self.postMessage({
      type: 'hasUpdate',
      tip: '需要更新',
      lastEtag,
    })
  }
  lastEtag = etag
}

self.addEventListener('message', ({ data }) => {
  // 检测更新
  if (data.type === 'check') {
    checkUpdate()
    intervalId && clearInterval(intervalId)
    intervalId = setInterval(checkUpdate, 10 * 1000)
  } else if (data.type === 'close') {
    // 关闭
    intervalId && clearInterval(intervalId)
    close()
  }
})
