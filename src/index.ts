import { createApp } from 'vue'
import App from './App.vue'

import { setupSim } from '~/library'
import { setupRouter } from './router'
import { setupStore } from './stores'
import { setupI18n } from './i18n'
import { useChangeTheme } from './hooks'

const { setupInitTheme } = useChangeTheme()
const app = createApp(App)

// 初始化主题
setupInitTheme()
// 注册外部插件
setupSim(app)
// pinia
setupStore(app)
// 国际化
setupI18n(app)
// 注册路由
setupRouter(app)
  .isReady()
  .then(() => app.mount('#root'))
