import InitHelpers from 'functional-helpers'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    new InitHelpers({
      isLogger: true,
      isDebug: true,
      install: (install) => {
        app.use(install)
      },
    })
  },
}
