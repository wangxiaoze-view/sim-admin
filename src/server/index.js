const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')
const path = require('path')

const bodyParser = require('body-parser')

/**
 * ==========================================  用express模拟服务端
 */

// 临时文件夹，切片文件将会被上传到这个文件夹中
const TEMP_DIR = path.resolve(__dirname, 'temp')
// 上传文件夹，文件将会被移动到这个文件夹中
const UPLOADS_DIR = path.resolve(__dirname, 'uploads')
// 切片大小
const CHUNK_SIZE = 1024 * 1024 * 100 // 100MB

// 确保临时文件夹存在
fs.ensureDir(TEMP_DIR)
// 确保上传文件夹存在
fs.ensureDir(UPLOADS_DIR)

const app = express()
// 允许跨域
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

app.post('/upload/:filename', async (req, res) => {
  // 获取文件名
  const { filename } = req.params
  // 切片名
  let { chunkFilename, start = 0 } = req.query
  // 写入的起始位置
  start = isNaN(Number(start)) ? 0 : Number(start)
  // 拼接切片文件夹路径
  const chunkDir = path.resolve(TEMP_DIR, filename)
  // 确保切片文件夹存在
  await fs.ensureDir(chunkDir)
  // 拼接文件路径
  const chunkPath = path.resolve(chunkDir, chunkFilename)
  // 创建可读流
  const ws = fs.createWriteStream(chunkPath, {
    // 追加写入
    flags: 'a',
    start,
  })
  // 请求取消时停止写入
  req.on('aborted', () => {
    ws.close()
  })
  // 将可读流中的数据写入到可写流中，完成文件上传
  await pipeStream(req, ws)
  // 响应结果
  res.json({ success: true })
})

app.get('/merge/:filename', async (req, res) => {
  // 获取文件名
  const { filename } = req.params
  // 拼接切片文件夹路径
  const chunkDir = path.resolve(TEMP_DIR, filename)
  // 读取切片文件夹中的文件名
  const chunks = await fs.readdir(chunkDir)
  if (chunks.length === 0) {
    res.json({ success: false, message: '切片文件不存在' })
    return
  } else {
    // 按照切片的索引进行排序
    chunks.sort((a, b) => a.split('-')[0] - b.split('-')[0])
    // 将合并的文件名路径
    const uploadsPath = path.resolve(UPLOADS_DIR, filename)
    // 写入文件的异步任务
    const writeTasks = chunks.map((chunkFilename, index) => {
      // 拼接切片文件夹路径
      const chunkPath = path.resolve(chunkDir, chunkFilename)
      // 创建可读流
      const rs = fs.createReadStream(chunkPath)
      // 创建可读流
      const ws = fs.createWriteStream(uploadsPath, {
        // 追加写入
        flags: 'a',
        start: index * CHUNK_SIZE,
      })
      return pipeStream(rs, ws)
    })
    await Promise.all(writeTasks)
    // 合并完成后，删除切片文件夹
    await fs.rm(chunkDir, { recursive: true, force: true })
    return res.json({ success: true })
  }
})

app.get('/verify/:filename', async (req, res) => {
  // 获取文件名
  const { filename } = req.params
  // 拼接文件路径
  const filePath = path.resolve(UPLOADS_DIR, filename)
  // 判断文件是否存在
  const isExist = await fs.pathExists(filePath)
  if (isExist) {
    res.json({ success: true, needUpload: false })
  } else {
    // 拼接切片文件夹路径
    const chunkDir = path.resolve(TEMP_DIR, filename)
    // 判断切片文件夹是否存在
    const hasChunks = await fs.pathExists(chunkDir)
    let uploadedChunks = []
    if (hasChunks) {
      // 读取切片文件夹中的文件名
      const chunkFilenames = await fs.readdir(chunkDir)
      // 获取切片文件的大小
      uploadedChunks = await Promise.all(
        chunkFilenames.map(async (chunkFilename) => {
          const { size } = await fs.stat(path.resolve(chunkDir, chunkFilename))
          return { chunkFilename, size }
        })
      )
      res.json({ success: true, needUpload: true, uploadedChunks })
    } else {
      res.json({ success: true, needUpload: true, uploadedChunks })
    }
  }
})

let tempLogger = []
app.post('/postLogger', (req, res) => {
  req.body && tempLogger.push(req.body)
  res.json({ success: true })
})

app.get('/getLogger', (req, res) => {
  res.json({ success: true, context: tempLogger })
})

app.post('/clearLogger', (req, res) => {
  tempLogger = []
  res.json({ success: true, context: tempLogger })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// ====================================================================================================
/**
 * 数据从可读流流向可写流
 * @param {ReadableStream} rs 可读流
 * @param {WritableStream} ws 可写流
 * @returns 返回一个Promise，当流结束时，Promise会被resolve
 */
function pipeStream(rs, ws) {
  return new Promise((resolve, reject) => {
    rs.pipe(ws).on('finish', resolve).on('error', reject)
  })
}
