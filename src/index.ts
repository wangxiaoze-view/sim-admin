import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { setupSim } from '~/library'
import { setupRouter } from './router'

const app = createApp(App)

// 注册外部插件
setupSim(app)
// 注册路由
setupRouter(app)
  .isReady()
  .then(() => app.mount('#root'))
