import { App } from 'vue'

import 'remixicon/fonts/remixicon.css'
import './styles/global.scss'

export function setupSim(app: App<Element>) {
  const files = require.context('./plugins', false, /\.ts$/)
  files.keys().forEach((key) => {
    const module = (files(key) as any).default
    if (module) app.use(module)
  })
}
