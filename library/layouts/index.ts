import { App } from 'vue'

export default function setupLayout(app: App<Element>) {
  const layouts = require.context('./', true, /\.vue$/)
  layouts
    .keys()
    .filter((key) => key !== './index.vue')
    .forEach((key) => {
      const module = (layouts(key) as any).default
      if (module) app.component(module.name as string, module)
    })
}
