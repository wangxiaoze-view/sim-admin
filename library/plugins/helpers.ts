import InitHelpers from 'functional-helpers'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    new InitHelpers({
      isLogger: true,
      // TODO： 需要加一个字段，appKey
      isDebug: true,
      install: (install) => {
        app.use(install)
      },
    })
  },
}
