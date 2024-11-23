import { App } from 'vue'
import VueExcelEditor from 'vue3-excel-editor'
import Tres from '@tresjs/core'

import 'remixicon/fonts/remixicon.css'
import './styles/global.scss'
import setiupLayout from './layouts'

export function setupSim(app: App<Element>) {
  const files = require.context('./plugins', false, /\.ts$/)
  files.keys().forEach((key) => {
    const module = (files(key) as any).default
    if (module) app.use(module)
  })

  app.use(VueExcelEditor)
  app.use(Tres)

  setiupLayout(app)
}
