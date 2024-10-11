import { App } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { setupPermissions } from './permissions'
import { settings_config } from '../config'

const router = createRouter({
  history: settings_config.hasRouterMode ? createWebHashHistory() : createWebHistory(),
  routes: [],
})

export const setupRouter = (app: App<Element>) => {
  setupPermissions(router)
  app.use(router)
  return router
}

export default router
