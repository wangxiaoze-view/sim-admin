import { App } from 'vue'
import InitHelpers from 'functional-helpers'

export default {
  install: (app: App<Element>) => {
    app.config.errorHandler = () => {}
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
