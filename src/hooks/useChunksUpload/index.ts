import { Request } from '~/src/utils'
import axios from 'axios'
import { ref } from 'vue'

import { $sim } from '~/library/plugins/element'

const CHUNK_SIZE = 1024 * 1024 * 1
const cancelTokens: any[] = []

const axiosInstance = new Request({
  baseURL: 'http://localhost:3000',
})

axiosInstance.interceptorsResponse(
  (response) => {
    if (response.data && response.data.success) {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

function createChunks(file: File, chunkSize = CHUNK_SIZE, filename: string) {
  // 兼用处理
  filename = filename || file.name

  const chunks = []
  // 计算切片数量
  const count = Math.ceil(file.size / chunkSize)
  // 循环切片
  for (let i = 0; i < count; i++) {
    // 获取到切片
    const chunk = file.slice(i * chunkSize, (i + 1) * chunkSize)
    // 拼接对应的切片文件名
    const chunkFilename = `${i}-${filename}`
    chunks.push({
      chunk,
      chunkFilename,
    })
  }
  return chunks
}

function checkExitFile(filename: string): Promise<{
  success: boolean
  needUpload: boolean
  uploadedChunks: { chunkFilename: string; size: number }[]
}> {
  return new Promise((resolve) => {
    fetch(`http://localhost:3000/verify/${filename}`).then((res) => {
      resolve(res.json())
    })
  })
}

/**
 * 对文件摘要拿到文件名，耗时操作
 * @param {File} file 文件对象
 * @returns 文件名
 */
async function getFilename(file: File) {
  // 获取文件后缀名
  const extension = file.name.split('.').pop()
  // 获取文件摘要
  const digestName = await calculateDigest(file)
  return `${digestName}.${extension}`
}

/**
 *
 * @param {File} file 文件对象
 * @returns 返回十六进制的字符串
 */
async function calculateDigest(file: File) {
  // 读取文件buffer
  const arrayBuffer = await file.arrayBuffer()
  // 计算摘要buffer
  const digestBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer)
  // 转换为十六进制字符串
  const digestArray = Array.from(new Uint8Array(digestBuffer))
  const digestHex = digestArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return digestHex
}
const progressInfo: any = ref({})

export async function useChunksUpload(file: File) {
  if (!file) return

  const filename = await getFilename(file)

  const { needUpload, uploadedChunks } = await checkExitFile(filename)
  if (!needUpload) {
    return $sim.$simMessage('文件秒传成功', 'success')
  }

  const chunks = createChunks(file, CHUNK_SIZE, filename)

  const requests = chunks.map((chunkInfo) => {
    const cancelToken = axios.CancelToken.source()
    cancelTokens.push(cancelToken)
    // 查找是否有上传过的切片
    const uploadedChunk = uploadedChunks.find(
      (item) => item.chunkFilename === chunkInfo.chunkFilename
    )
    // 初始化要上传的切片和位置
    let chunk = chunkInfo.chunk
    let start = 0
    // 总大小，用于计算进度
    const totalSize = chunk.size
    if (uploadedChunk) {
      // 如果已经上传过了，切除掉已经上传的部分
      chunk = chunk.slice(uploadedChunk.size)
      // 从已经上传的位置开始
      start = uploadedChunk.size
    }

    // 切除之后，如果剩下还有切片大小就继续上传，没有就说明整个都上传过了，不用再上传这个
    if (chunk.size > 0) {
      progressInfo.value[chunkInfo.chunkFilename] = Math.round((start * 100) / totalSize)
      return axiosInstance.post(`/upload/${filename}`, chunk, {
        // @ts-expect-error any
        headers: {
          'Content-Type': 'application/octet-stream',
        },
        params: {
          chunkFilename: chunkInfo.chunkFilename,
          start,
        },
        onUploadProgress(progressEvent: any) {
          // 注意进度的计算要结合start,即开始上传的位置
          progressInfo.value[chunkInfo.chunkFilename] = Math.round(
            ((progressEvent.loaded + start) * 100) / totalSize
          )
        },
        cancelToken: cancelToken.token,
      })
    } else {
      progressInfo.value[chunkInfo.chunkFilename] = 100
      return Promise.resolve()
    }
  })

  try {
    await Promise.all(requests)
    $sim.$simMessage('上传分片完成', 'success')
    // 合并分片
    axiosInstance.get(`/merge/${filename}`).then(() => {
      $sim.$simMessage('合并分片完成', 'success')
    })
  } catch (error) {
    if (axios.isCancel(error)) {
      $sim.$simMessage('上传已取消', 'warning')
    } else {
      $sim.$simMessage('上传失败', 'error')
    }
  }
}
