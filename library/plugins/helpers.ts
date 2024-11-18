import InitHelpers from 'functional-helpers'
import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    new InitHelpers({
      isLogger: true,
      apikey: import.meta.env.PUBLIC_DEBUG_API_KEY,
      isDebug: true,
      install: (install) => {
        app.use(install)
      },
    })
  },
}
