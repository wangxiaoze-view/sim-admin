import type { Router } from 'vue-router'
import SimProgress from '~/library/libs/nprogress'
import { useRoutesStore } from '../stores/modules/routes'
import { resetLoginPath } from '../utils/routes'
import { settings } from '~/src/config'
import { getToken } from '~/src/utils'
import { useChangeTheme, useUser } from '../hooks'
import { useTitle } from '@vueuse/core'

const { whiteList, title, titleSpace, titleSort } = settings

/**
 * 设置路由权限守卫
 * 配置路由导航守卫，处理认证、权限和页面标题
 * @param router 路由实例
 */
export function setupPermissions(router: Router): void {
  /**
   * 路由前置守卫
   * 处理认证、权限验证和路由初始化
   */
  router.beforeEach(async (to, _, next) => {
    const { getTheme } = useChangeTheme()
    const { setUserInfo, logout } = useUser()
    const routesStore = useRoutesStore()
    const { setRoutes, getMenuRoutes } = routesStore

    // 启动进度条
    if (getTheme.value.isProgress) {
      SimProgress.start()
    }

    const hasToken = getToken()

    if (hasToken) {
      // 已登录用户访问登录页，重定向到首页
      if (to.path === '/login') {
        next({ path: '/' })
        return
      }

      // 如果路由已初始化，直接通过
      if (getMenuRoutes.length > 0) {
        next()
        return
      }

      // 初始化用户信息和路由
      try {
        await setUserInfo()
        await setRoutes()
        next({ ...to, replace: true })
      } catch (error) {
        console.error('Failed to initialize routes:', String(error))
        logout()
        next(resetLoginPath(to.path))
      }
    } else {
      // 未登录用户
      if (whiteList.includes(to.path)) {
        // 白名单路由，允许访问
        next()
      } else {
        // 非白名单路由，重定向到登录页
        next(resetLoginPath(to.fullPath))
      }
    }
  })

  /**
   * 路由后置守卫
   * 设置页面标题和完成进度条
   */
  router.afterEach((to) => {
    // 设置页面标题
    const metaTitle = to.meta.title
    if (metaTitle) {
      const titles = titleSort ? [title, metaTitle] : [metaTitle, title]
      useTitle(titles.join(titleSpace))
    }

    // 完成进度条
    if (SimProgress.status) {
      SimProgress.done()
    }
  })
}
