if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`\u001b[33m该存储库必须使用 pnpm 作为包管理器以使脚本正常工作.\u001b[39m\n`)
  process.exit(1)
}
