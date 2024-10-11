import { App } from 'vue'
import { VxeUI, VxeIcon, VxeLoading } from 'vxe-pc-ui'
import { VxeTable, VxeColumn, VxeGrid } from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'
import 'vxe-pc-ui/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

// 可选组件
export function LazyVxeUI(app: App<Element>) {
  app.use(VxeIcon)
  app.use(VxeLoading)
}

export function LazyVxeTable(app: App<Element>) {
  app.use(VxeTable)
  app.use(VxeColumn)
  app.use(VxeGrid)
}
