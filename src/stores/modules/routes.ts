import { defineStore } from 'pinia'

import { themeConfig as defaultTheme } from '~/src/config'
import { asyncRoutes } from '~/src/router'
import { settings_config } from '~/src/config'
import { isArray, logger } from '~/src/utils'

const { hasRouterGuard } = settings_config
const theme = { ...defaultTheme }

export const useRoutesStore = defineStore('routes', {
  state: (): IRoutesType => ({
    menuRoutes: [],
    allRoutes: [],
  }),
  getters: {
    getMenuRoutes: (state) => state.menuRoutes,
    getAllRoutes: (state) => state.allRoutes,
  },
  actions: {
    async setRoutes() {
      // 设置路由，权限，菜单
      let routes: any[] = [...asyncRoutes]
      //
      if (hasRouterGuard === 'all') {
        // 这里可以走请求菜单的接口
        const list: any[] = []
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
      // TODO: 待完善, 后续添加权限校验递归
    },
  },
})
