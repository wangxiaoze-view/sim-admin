import { App } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { setupPermissions } from './permissions'
import { settings_config } from '../config'

/**
 * @description 路由分为俩种情况
 * 1. 常规路由, 例如：登录，注册， 403，404等
 * 2. 异步路由， 例如：动态菜单等
 */

// 1. 常规路由
export const constantRoutes: ISimRouterRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home/workbench',
    meta: {
      hidden: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/src/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/redirect',
    name: 'RedirectPage',
    component: () => import('~/src/views/redirect/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('~/src/views/404.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('~/src/views/403.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/500',
    name: '500',
    component: () => import('~/src/views/500.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/netOffline',
    name: 'NetOffline',
    component: () => import('~/src/views/netOffline.vue'),
    meta: {
      hidden: true,
    },
  },
]

// 2. 异步路由
export const asyncRoutes: ISimRouterRecordRaw[] = []

const router = createRouter({
  history: settings_config.hasRouterMode ? createWebHashHistory() : createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => {
    ;({ left: 0, top: 0 })
  },
})

export const setupRouter = (app: App<Element>) => {
  setupPermissions(router)
  app.use(router)
  return router
}

export default router
