import { App } from 'vue'

export default {
  install: (app: App<Element>) => {
    app.config.errorHandler = () => {}
  },
}
