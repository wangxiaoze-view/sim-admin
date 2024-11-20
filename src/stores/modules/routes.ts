import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '~/src/router'
import { settings_config } from '~/src/config'
import { isArray, logger, filterAsyncRoutes, filterHidden, resetRouter } from '~/src/utils'
import { getRoutes } from '~/src/router/modules'
import { useUserStore } from './user'

const { hasRouterGuard } = settings_config

export const useRoutesStore = defineStore('routes', {
  state: (): IRoutesType => ({
    menuRoutes: [],
    allRoutes: [],
    activeMenu: '',
  }),
  getters: {
    getMenuRoutes: (state) => state.menuRoutes,
    getAllRoutes: (state) => state.allRoutes,
    getActiveMenu: (state) => state.activeMenu,
  },
  actions: {
    async setRoutes() {
      const {
        getUserInfo: { roles },
      } = useUserStore()
      if (this.getMenuRoutes.length > 0) return
      // 设置路由，权限，菜单
      let routes: ISimRouterRecordRaw[] = [...asyncRoutes]
      if (hasRouterGuard === 'all') {
        // 这里可以走请求菜单的接口
        // 这里模拟接口
        const list: ISimRouterRecordRaw[] = await getRoutes()
        if (!isArray(list)) {
          return logger.error('菜单数据格式错误')
        }
        // 404 地址应放在最后
        if (list[list.length - 1].path !== '*') {
          list.push({
            path: '/:pathMatch(.*)*',
            redirect: '/404',
            name: 'NotFound',
            meta: { hidden: true },
          })
        }
        routes = [...routes, ...list]
      }
      const getFilterRoutes = filterAsyncRoutes([...constantRoutes, ...routes], roles)
      // 需要隐藏 meta.hidden 的菜单
      this.menuRoutes = filterHidden(getFilterRoutes)
      this.allRoutes = getFilterRoutes
      resetRouter(getFilterRoutes)
    },
  },
})
