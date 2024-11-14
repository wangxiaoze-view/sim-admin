import { createApp } from 'vue'
import App from './App.vue'

import { setupSim } from '~/library'
import { setupRouter } from './router'
import { setupStore } from './stores'

const app = createApp(App)

// 注册外部插件
setupSim(app)
// pinia
setupStore(app)
// 注册路由
setupRouter(app)
  .isReady()
  .then(() => app.mount('#root'))
