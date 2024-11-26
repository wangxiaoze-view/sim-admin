import { App } from 'vue'

export function setupPlugins(app: App<Element>) {
  const plugins = require.context('./', false, /\.ts$/)
  plugins
    .keys()
    .filter((key) => key !== './index.ts')
    .forEach((key) => {
      const module = (plugins(key) as any).default
      if (module) app.use(module)
    })
}
