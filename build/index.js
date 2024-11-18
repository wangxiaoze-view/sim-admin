import { writeFileSync } from 'node:fs'

// vercel 的配置文件
const vercelJson = {
  version: 2,
  builds: [
    {
      src: 'index.js',
      use: '@vercel/node',
    },
  ],
  routes: [
    {
      src: '/api/(.*)',
      dest: 'index.js',
    },
  ],
}

try {
  // 写入文件，mockServer文件夹可用于部署mock服务
  writeFileSync('mockServer/vercel.json', JSON.stringify(vercelJson, null, 2))
} catch (err) {
  console.error(err)
  process.exit(1)
}
