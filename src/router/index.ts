import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import { setupPermissions } from './permissions'
import { settings } from '../config'

/**
 * 路由配置
 * 路由分为两种情况：
 * 1. 常规路由：登录、注册、错误页面等固定路由
 * 2. 异步路由：动态菜单等需要权限控制的路由
 */

/**
 * 常规路由配置
 * 包含登录、错误页面等不需要权限验证的路由
 */
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
    path: '/403',
    name: '403',
    component: () => import('~/src/views/403.vue'),
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
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('~/src/views/demo/index.vue'),
    meta: {
      hidden: true,
    },
  },
]

/**
 * 404 路由配置
 * 捕获所有未匹配的路由
 */
export const notFoundRoute: ISimRouterRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'NotFound',
  meta: { hidden: true },
}

/**
 * 异步路由配置
 * 包含需要动态加载的路由
 */
export const asyncRoutes: ISimRouterRecordRaw[] = [notFoundRoute]

/**
 * 创建路由实例
 */
const router = createRouter({
  history: settings.hasRouterMode ? createWebHashHistory() : createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  /**
   * 滚动行为配置
   * 路由切换时滚动到页面顶部
   */
  scrollBehavior: () => {
    return { left: 0, top: 0 }
  },
})

/**
 * 设置路由
 * 配置路由权限并注册到 Vue 应用
 * @param app Vue 应用实例
 * @returns 路由实例
 */
export const setupRouter = (app: App<Element>) => {
  setupPermissions(router)
  app.use(router)
  return router
}

export default router
