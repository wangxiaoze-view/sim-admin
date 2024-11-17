import { writeFileSync } from 'node:fs'

const json = {
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

writeFileSync('dist/mock/vercel.json', JSON.stringify(json, null, 2))
