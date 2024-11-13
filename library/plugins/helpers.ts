import InitHelpers from 'functional-helpers'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    new InitHelpers({
      isDebug: true,
      isLogger: true,
      install: (install) => {
        app.use(install)
      },
    })
  },
}
