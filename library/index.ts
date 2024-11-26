import { App } from 'vue'
import VueExcelEditor from 'vue3-excel-editor'

import 'remixicon/fonts/remixicon.css'
import './styles/global.scss'

import setiupLayout from './layouts'
import { setupPlugins } from './plugins'

export function setupSim(app: App<Element>) {
  // 注册插件
  setupPlugins(app)
  // 注册布局
  setiupLayout(app)
  // 注册其他插件/依赖
  app.use(VueExcelEditor)
}
