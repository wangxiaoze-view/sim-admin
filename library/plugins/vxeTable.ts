import { App } from 'vue'
import { LazyVxeTable, LazyVxeUI } from '../libs/vxeTable'

export default {
  install: (app: App<Element>) => {
    app.use(LazyVxeUI)
    app.use(LazyVxeTable)
  },
}
