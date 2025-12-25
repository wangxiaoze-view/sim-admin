import { App } from 'vue'
import VueExcelEditor from 'vue3-excel-editor'

import 'remixicon/fonts/remixicon.css'
import './styles/global.scss'

import setupLayout from './layouts'
import { setupPlugins } from './plugins'

import ElementPlus from 'element-plus'

export function setupSim(app: App<Element>) {
  // 注册插件
  setupPlugins(app)
  // 注册布局
  setupLayout(app)
  // 注册其他插件/依赖
  app.use(VueExcelEditor)
  app.use(ElementPlus)
}
