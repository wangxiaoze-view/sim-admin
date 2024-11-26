import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes, notFoundRoute } from '~/src/router'
import { settings_config } from '~/src/config'
import { isArray, logger, initAsyncRoutes, filterHidden, initRouter } from '~/src/utils'
import { getRoutes } from '~/src/router/modules'
import { useUser } from '~/src/hooks'

const { hasRouterGuard } = settings_config

export const useRoutesStore = defineStore('routes', {
  state: (): IRoutesType => ({
    // 菜单路由
    menuRoutes: [],
    // 当前激活的菜单
    activeMenu: '',
  }),
  getters: {
    getMenuRoutes: (state) => state.menuRoutes,
    getActiveMenu: (state) => state.activeMenu,
  },
  actions: {
    async setRoutes() {
      const { getUserInfo } = useUser()
      if (this.getMenuRoutes.length > 0) return
      // 设置路由，权限，菜单
      let routes: ISimRouterRecordRaw[] = [...asyncRoutes]
      if (hasRouterGuard === 'end') {
        // 这里可以走请求菜单的接口； 这里模拟接口
        const list: ISimRouterRecordRaw[] = await getRoutes()
        if (!isArray(list)) return logger.error('菜单数据格式错误')
        // 404 地址应放在最后
        if (list[list.length - 1].path !== '*') list.push(notFoundRoute)
        routes = [...routes, ...list]
      }
      // 排序
      routes.sort((a, b) => a?.meta?.sort! - b?.meta?.sort!)
      // 初始化路由，权限
      const getFilterRoutes = initAsyncRoutes(
        [...constantRoutes, ...routes],
        getUserInfo.value.roles
      )
      // fix: 需要隐藏 meta.hidden 的菜单, 避免隐藏的路由显示在页面上
      this.menuRoutes = filterHidden(getFilterRoutes)
      initRouter(getFilterRoutes)
    },
  },
})
