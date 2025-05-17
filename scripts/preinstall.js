import fs from 'fs'
import pkg from '../package.json' assert { type: 'json' }
function bootstrap() {
  pkg.dependencies['functional-helpers'] = 'file:./lib-functional-helpers.tar.gz'
  fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2))
  console.log('✅脚本执行完成...')
}
bootstrap()
