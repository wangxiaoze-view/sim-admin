import { App } from 'vue'

export function setupSim(app: App<Element>) {
  const files = require.context('./plugins', false, /\.ts$/)
  files.keys().forEach((key) => {
    const module = (files(key) as any).default
    module && app.use(module)
  })
}
